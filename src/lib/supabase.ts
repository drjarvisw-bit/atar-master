import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://rspajiohrayabxkonvde.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_MyEJrZ3SM4G5E5wg00BQGw_Mqkch8G0'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
