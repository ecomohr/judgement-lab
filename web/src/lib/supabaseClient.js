import { createClient } from "@supabase/supabase-js";
import { supabaseUrl, supabasePublishableKey } from "./supabaseConfig";

createClient(supabaseUrl, supabasePublishableKey);