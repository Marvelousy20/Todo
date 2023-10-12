import { createClient } from "@supabase/supabase-js";

const superbaseUrl = import.meta.env.VITE_PUBLIC_SUPABASE_URL;
const superbaseAnonKey = import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(superbaseUrl, superbaseAnonKey);
