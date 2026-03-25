create extension if not exists pgcrypto;

create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text not null,
  subject text not null,
  message text not null,
  contacted boolean not null default false,
  contacted_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.contact_submissions
add column if not exists contacted boolean not null default false;

alter table public.contact_submissions
add column if not exists contacted_at timestamptz;

alter table public.contact_submissions
add column if not exists updated_at timestamptz not null default now();

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists contact_submissions_set_updated_at on public.contact_submissions;
create trigger contact_submissions_set_updated_at
before update on public.contact_submissions
for each row
execute function public.set_updated_at();

alter table public.contact_submissions enable row level security;

drop policy if exists "Anyone can submit contact forms" on public.contact_submissions;
create policy "Anyone can submit contact forms"
on public.contact_submissions
for insert
to anon, authenticated
with check (true);

drop policy if exists "Admins can read all contact submissions" on public.contact_submissions;
create policy "Admins can read all contact submissions"
on public.contact_submissions
for select
to authenticated
using (
  exists (
    select 1
    from public.admin_users
    where admin_users.id = auth.uid()
  )
);

drop policy if exists "Admins can update contact submissions" on public.contact_submissions;
create policy "Admins can update contact submissions"
on public.contact_submissions
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

comment on table public.contact_submissions is 'Stores contact page submissions and whether an admin has contacted the patient.';
