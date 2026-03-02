import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

const supabaseUrl = process.env.EXPO_PUBLIC_API_URL;
const supabaseApi_Key = process.env.EXPO_PUBLIC_API_KEY;

export const supabase = createClient(supabaseUrl, supabaseApi_Key);