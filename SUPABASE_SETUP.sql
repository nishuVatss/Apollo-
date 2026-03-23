create extension if not exists pgcrypto;

create table if not exists public.blogs (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  excerpt text not null,
  content text not null,
  author text not null,
  category text not null,
  cover_image_url text not null,
  read_time_minutes integer not null default 5 check (read_time_minutes > 0),
  pinned boolean not null default false,
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  published_at timestamptz
);

alter table public.blogs
add column if not exists pinned boolean not null default false;

create table if not exists public.admin_users (
  id uuid primary key references auth.users (id) on delete cascade,
  created_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists blogs_set_updated_at on public.blogs;
create trigger blogs_set_updated_at
before update on public.blogs
for each row
execute function public.set_updated_at();

alter table public.blogs enable row level security;
alter table public.admin_users enable row level security;

drop policy if exists "Published blogs are public" on public.blogs;
create policy "Published blogs are public"
on public.blogs
for select
using (published = true);

drop policy if exists "Admins can read all blogs" on public.blogs;
create policy "Admins can read all blogs"
on public.blogs
for select
to authenticated
using (
  exists (
    select 1
    from public.admin_users
    where admin_users.id = auth.uid()
  )
);

drop policy if exists "Admins can insert blogs" on public.blogs;
create policy "Admins can insert blogs"
on public.blogs
for insert
to authenticated
with check (
  exists (
    select 1
    from public.admin_users
    where admin_users.id = auth.uid()
  )
);

drop policy if exists "Admins can update blogs" on public.blogs;
create policy "Admins can update blogs"
on public.blogs
for update
to authenticated
using (
  exists (
    select 1
    from public.admin_users
    where admin_users.id = auth.uid()
  )
)
with check (
  exists (
    select 1
    from public.admin_users
    where admin_users.id = auth.uid()
  )
);

drop policy if exists "Admins can delete blogs" on public.blogs;
create policy "Admins can delete blogs"
on public.blogs
for delete
to authenticated
using (
  exists (
    select 1
    from public.admin_users
    where admin_users.id = auth.uid()
  )
);

drop policy if exists "Admins can read themselves" on public.admin_users;
create policy "Admins can read themselves"
on public.admin_users
for select
to authenticated
using (id = auth.uid());

drop policy if exists "Service role can manage admins" on public.admin_users;
create policy "Service role can manage admins"
on public.admin_users
for all
to service_role
using (true)
with check (true);

comment on table public.admin_users is 'Insert an auth user id here to grant admin panel access.';
