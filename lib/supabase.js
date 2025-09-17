import { createClient } from '@supabase/supabase-js'

// Substitua pelos seus valores do Supabase
const supabaseUrl = 'SUA_PROJECT_URL_AQUI'
const supabaseKey = 'SUA_API_KEY_AQUI'

export const supabase = createClient(supabaseUrl, supabaseKey)
