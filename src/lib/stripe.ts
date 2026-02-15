import { supabase } from './supabase'

// Stripe publishable key from environment variables
const stripeKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;
if (!stripeKey && import.meta.env.PROD) {
  throw new Error('VITE_STRIPE_PUBLISHABLE_KEY is required in production');
}
export const STRIPE_PUBLISHABLE_KEY = stripeKey;

// Live mode price IDs
export const PRICE_PRO_MONTHLY = 'price_1T12VEH3RCPIiRpCcMASHDhz' as const
export const PRICE_PRO_YEARLY = 'price_1T12VEH3RCPIiRpCggPyLE0w' as const

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
