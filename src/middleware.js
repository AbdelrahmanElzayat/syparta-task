import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("token")?.value;
  const url = request.url;

  // إذا لم يكن هناك توكن و المستخدم يحاول الوصول إلى صفحة تسجيل الدخول
  if (!token && url.includes("/login")) {
    return NextResponse.next(); // لا تقم بإعادة التوجيه
  }

  // إذا لم يكن هناك توكن و المستخدم يحاول الوصول إلى أي صفحة محمية
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // إذا كان هناك توكن و المستخدم يحاول الوصول إلى صفحة تسجيل الدخول
  // يمكن إعادة التوجيه إلى صفحة أخرى (مثل لوحة التحكم)
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
