import { serve } from 'https://deno.land/std@0.177.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import Stripe from 'https://esm.sh/stripe@13?target=deno'

const ALLOWED_ORIGINS = new Set([
  'https://atarmaster.com',
  'https://www.atarmaster.com',
  'http://localhost:5173',
])

const VALID_PRICE_IDS = new Set([
  'price_1T12VEH3RCPIiRpCcMASHDhz', // Pro Monthly
  'price_1T12VEH3RCPIiRpCggPyLE0w', // Pro Yearly
])

function requiredEnv(name: string): string {
  const value = Deno.env.get(name)
  if (!value) throw new Error(`Missing required env: ${name}`)
  return value
}

function corsHeaders(origin: string) {
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Headers': 'authorization, content-type, x-client-info, apikey',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    Vary: 'Origin',
  }
}

const stripe = new Stripe(requiredEnv('STRIPE_SECRET_KEY'), {
  apiVersion: '2023-10-16',
})

const supabaseUrl = requiredEnv('SUPABASE_URL')
const supabaseServiceKey = requiredEnv('SUPABASE_SERVICE_ROLE_KEY')

serve(async (req) => {
  const origin = req.headers.get('origin') ?? ''
  const safeOrigin = ALLOWED_ORIGINS.has(origin) ? origin : 'https://atarmaster.com'

  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders(safeOrigin) })
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json', ...corsHeaders(safeOrigin) },
    })
  }

  if (!ALLOWED_ORIGINS.has(origin)) {
    return new Response(JSON.stringify({ error: 'Invalid origin' }), {
      status: 403,
      headers: { 'Content-Type': 'application/json', ...corsHeaders(safeOrigin) },
    })
  }

  try {
    const authHeader = req.headers.get('Authorization')
    if (!authHeader?.startsWith('Bearer ')) {
      throw new Error('Missing authorization header')
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey)
    const token = authHeader.replace('Bearer ', '')
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser(token)

    if (authError || !user) throw new Error('Unauthorized')

    const { priceId } = await req.json()
    if (!priceId || !VALID_PRICE_IDS.has(priceId)) {
      throw new Error('Invalid priceId')
    }

    const { data: existingSub } = await supabase
      .from('subscriptions')
      .select('stripe_customer_id')
      .eq('user_id', user.id)
      .maybeSingle()

    let customerId = existingSub?.stripe_customer_id ?? null

    if (!customerId) {
      const customer = await stripe.customers.create({
        email: user.email,
        metadata: { supabase_user_id: user.id },
      })
      customerId = customer.id

      await supabase.from('subscriptions').upsert(
        {
          user_id: user.id,
          stripe_customer_id: customerId,
          plan: 'free',
          status: 'active',
          updated_at: new Date().toISOString(),
        },
        { onConflict: 'user_id' },
      )
    }

    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      mode: 'subscription',
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/pricing`,
      metadata: { supabase_user_id: user.id },
    })

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { 'Content-Type': 'application/json', ...corsHeaders(safeOrigin) },
    })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return new Response(JSON.stringify({ error: message }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', ...corsHeaders(safeOrigin) },
    })
  }
})
