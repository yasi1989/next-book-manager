import { env } from "process";

export const Books = {
  STATUS_ITEM: ["Available", "Borrowed", "Lost"],
};

export const URL = {
    SUPABASE_STORAGE_NAME: env.NEXT_PUBLIC_SUPABASE_STORAGE_NAME!,
}
