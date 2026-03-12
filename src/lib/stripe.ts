import { getFunctions, httpsCallable } from 'firebase/functions';
import { app } from '../services/firebaseClient';

// Stripe publishable key from environment variables
export const STRIPE_PUBLISHABLE_KEY = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY as string | undefined;

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
  if (!app) {
    throw new Error('Firebase not configured')
  }

  const functions = getFunctions(app);
  const createSession = httpsCallable<{ priceId: string }, { url: string }>(
    functions,
    'atarCreateCheckoutSession'
  );

  const result = await createSession({ priceId });
  return result.data;
}
