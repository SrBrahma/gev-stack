import { createBrowserClient } from "@supabase/ssr";
import { env } from "../env";

/** Provided by https://supabase.com/docs/guides/auth/server-side/nextjs?queryGroups=router&router=app */
export const createClient = () =>
  createBrowserClient(
    env.NEXT_PUBLIC_SUPABASE_URL,
    env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );
