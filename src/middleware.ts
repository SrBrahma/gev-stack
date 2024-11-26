// Special file in Next.js. See https://nextjs.org/docs/app/building-your-application/routing/middleware

import type { NextRequest } from "next/server";
import { updateSession } from "./utils/supabase/middleware";

/** Provided by https://supabase.com/docs/guides/auth/server-side/nextjs?queryGroups=router&router=app */
export const middleware = async (request: NextRequest) =>
  await updateSession(request);

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
