import { createClient } from '@supabase/supabase-js'

// Substitua pelos seus valores do Supabase
const supabaseUrl = 'https://yohtlrlejeeeqiwuqgxp.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlvaHRscmxlamVlZXFpd3VxZ3hwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYwNzMwNzksImV4cCI6MjA3MTY0OTA3OX0.pH6lFQboiCeVtLayXnWZ9BEpr04DoL98KlTSP9zUvq4'

export const supabase = createClient(supabaseUrl, supabaseKey)
