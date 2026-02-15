import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl && import.meta.env.PROD) {
  throw new Error('VITE_SUPABASE_URL is required in production');
}
if (!supabaseAnonKey && import.meta.env.PROD) {
  throw new Error('VITE_SUPABASE_ANON_KEY is required in production');
}

export const supabase = createClient(supabaseUrl!, supabaseAnonKey!)
