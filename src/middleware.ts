import { NextResponse } from 'next/server'

export const config = {
  matcher: [
    '/((?!_next|assets|video|mascot|favicon.ico|robots.txt|sitemap.xml|api).*)',
  ],
}

export default function middleware(req: Request) {
  const url = new URL(req.url)
  if (url.pathname === '/') return NextResponse.next()
  return NextResponse.redirect(new URL('/', req.url))
}