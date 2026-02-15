import { supabase } from './supabase'

// Replace with real Stripe publishable key
export const STRIPE_PUBLISHABLE_KEY =
  import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY ?? 'pk_live_51T0u3ZH3RCPIiRpCF91dRNJierm31fgL1rIbHpLjo4ek10BLSMSBjt9vyJFUqK6GSa28eUIbPahHB4NJ4d21cr4H00vtHll6Si'

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
