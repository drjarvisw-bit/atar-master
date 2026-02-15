-- Cloud sync table for user progress data
create table if not exists public.user_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  progress_data jsonb not null default '{}'::jsonb,
  streak_data jsonb not null default '{}'::jsonb,
  achievements_data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  constraint user_progress_user_id_unique unique (user_id)
);

-- RLS: users can only read/write their own data
alter table public.user_progress enable row level security;

create policy "Users can read own progress"
  on public.user_progress for select
  using (auth.uid() = user_id);

create policy "Users can insert own progress"
  on public.user_progress for insert
  with check (auth.uid() = user_id);

create policy "Users can update own progress"
  on public.user_progress for update
  using (auth.uid() = user_id);
