import { createClient } from "@supabase/supabase-js";

const supabaseURL = import.meta.env.VITE_SUPA_URL
const supabaseAnon = import.meta.env.VITE_SUPA_ANON

export const supabase = createClient(supabaseURL, supabaseAnon);