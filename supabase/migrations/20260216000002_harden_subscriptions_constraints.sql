-- Ensure upsert(onConflict: 'user_id') is safe and deterministic.
create unique index if not exists subscriptions_user_id_unique
  on public.subscriptions(user_id);

-- Prevent duplicate Stripe subscription bindings.
create unique index if not exists subscriptions_stripe_subscription_id_unique
  on public.subscriptions(stripe_subscription_id)
  where stripe_subscription_id is not null;

-- Useful lookups for webhook updates.
create index if not exists subscriptions_stripe_customer_id_idx
  on public.subscriptions(stripe_customer_id);

create index if not exists subscriptions_status_idx
  on public.subscriptions(status);
