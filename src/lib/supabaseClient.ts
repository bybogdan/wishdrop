// src/lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ztcwyfbmrxdbguxaasmo.supabase.co';
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_KEY;

if (!supabaseKey ) {
  throw new Error('Missing env: PUBLIC_SUPABASE_KEY');
}
export const supabase = createClient(supabaseUrl, supabaseKey);
