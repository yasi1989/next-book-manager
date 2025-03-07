import { supabase } from "@/lib/supabase";
import { URL } from "../const/const";

export async function getStoragePublicUrl(uri: string | null): Promise<string> {
    return uri ? supabase.storage.from(URL.SUPABASE_STORAGE_NAME).getPublicUrl(uri).data.publicUrl : "";
}