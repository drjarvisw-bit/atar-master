import { supabase } from './supabase'

// Replace with real Stripe publishable key
export const STRIPE_PUBLISHABLE_KEY =
  import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY ?? 'pk_test_REPLACE_WITH_REAL_KEY'

// Replace with real Stripe price IDs
export const PRICE_PRO_MONTHLY = 'price_1T0uCuHSAr1sei7PG749auuc' as const
export const PRICE_PRO_YEARLY = 'price_1T0uCuHSAr1sei7PHt4IELDX' as const

export const PLANS = {
  free: 'free',
  pro: 'pro',
} as const

export type Plan = (typeof PLANS)[keyof typeof PLANS]

export async function createCheckoutSession(
  priceId: string,
): Promise<{ url: string }> {
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    throw new Error('You must be logged in to subscribe')
  }

  const { data, error } = await supabase.functions.invoke('create-checkout', {
    body: { priceId },
  })

  if (error) throw error
  return data as { url: string }
}
