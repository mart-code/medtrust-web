import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const ROLE_DASHBOARDS: Record<string, string> = {
  patient: '/patient/dashboard',
  doctor: '/doctor/dashboard',
  organisation: '/organisation/dashboard',
  institution: '/institution/dashboard',
  super_admin: '/admin/dashboard',
};

const PROTECTED_PREFIXES = [
  '/patient',
  '/doctor',
  '/organisation',
  '/institution',
  '/admin',
];

const AUTH_ROUTES = ['/login', '/register'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = request.cookies.get('access_token')?.value;

  const isProtected = PROTECTED_PREFIXES.some((prefix) => pathname === prefix);
  const isAuthRoute = AUTH_ROUTES.some(
    (r) => pathname === r || pathname.startsWith(r + '/'),
  );

  if (isProtected && !accessToken) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (isAuthRoute && accessToken) {
    try {
      const payload = JSON.parse(
        Buffer.from(accessToken.split('.')[1], 'base64').toString(),
      ) as { role?: string };
      const dashboard = ROLE_DASHBOARDS[payload.role ?? ''] ?? '/';
      return NextResponse.redirect(new URL(dashboard, request.url));
    } catch {
      // fall through
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|public/).*)'],
};
