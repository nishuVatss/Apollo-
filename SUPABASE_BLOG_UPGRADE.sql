alter table public.blogs
add column if not exists pinned boolean not null default false;
