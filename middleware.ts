import { NextResponse } from "next/server";
import { auth } from "@/auth";

export default auth((request) => {
  const isAdminPath = request.nextUrl.pathname.startsWith("/admin");
  if (!isAdminPath) return NextResponse.next();

  const role = (request.auth?.user as { role?: string } | undefined)?.role;
  if (role === "ADMIN") return NextResponse.next();

  const signInUrl = new URL("/account/signin", request.url);
  signInUrl.searchParams.set("callbackUrl", request.nextUrl.pathname);
  return NextResponse.redirect(signInUrl);
});

export const config = {
  matcher: ["/admin/:path*"]
};
