import { NextResponse, NextRequest } from 'next/server';

// Capture /?r=<code> and store in a cookie for 30 days.
const REF_COOKIE = 'ref';
const MAX_AGE = 60 * 60 * 24 * 30; // 30 days

export function middleware(req: NextRequest) {
  const { searchParams, pathname } = new URL(req.url);
  const ref = searchParams.get('r');

  // Skip Next internals, static files and API routes that shouldn't be rewritten
  const isStatic = pathname.startsWith('/_next') || pathname.startsWith('/static') || pathname.match(/\.(png|jpg|jpeg|gif|svg|webp|ico|css|js|map|txt|xml)$/);

  if (ref && !isStatic) {
    const res = NextResponse.next();
    res.cookies.set(REF_COOKIE, ref, { path: '/', httpOnly: false, sameSite: 'lax', maxAge: MAX_AGE });
    return res;
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api/health).*)'],
};
