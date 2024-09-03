import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("token")?.value;
  const url = request.url;

  if (!token && url.includes("/login")) {
    return NextResponse.next();
  }
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (token && url.includes("/login")) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/dashboard",
    "/profile/personal-information",
    "/profile/professional-information",
    "/profile/documents",
    "/profile/account-access",
    "/attendance",
    "/tasks",
    "/payroll",
    "/holidays/page1",
    "/advanced-payment",
    "/login",
  ], // أضف الروتات اللي عايز تحميها هنا
};
