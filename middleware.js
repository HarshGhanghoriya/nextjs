import { NextResponse } from "next/server";

export function middleware(NextRequest) {

  return NextResponse.redirect(new URL("/", NextRequest.url));
}
export const config = {
  matcher: "/landing/:path*",
};
