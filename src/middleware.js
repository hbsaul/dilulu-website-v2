import { NextResponse } from 'next/server';
import { verifyToken } from '../src/lib/auth';

export function middleware(request) {
  // Get token from cookies
  const token = request.cookies.get('token')?.value;
  
  // Get the pathname
  const { pathname } = request.nextUrl;
  
  // Define protected routes
  const adminRoutes = ['/admin', '/admin/users', '/admin/content', '/admin/settings'];
  const userRoutes = ['/user-dashboard', '/user-dashboard/profile', '/user-dashboard/settings'];
  const cmsRoutes = ['/cms', '/cms/edit'];
  
  // Check if the route is protected
  const isAdminRoute = adminRoutes.some(route => pathname.startsWith(route));
  const isUserRoute = userRoutes.some(route => pathname.startsWith(route));
  const isCmsRoute = cmsRoutes.some(route => pathname.startsWith(route));
  
  // If the route is not protected, continue
  if (!isAdminRoute && !isUserRoute && !isCmsRoute) {
    return NextResponse.next();
  }
  
  // If no token exists, redirect to login
  if (!token) {
    const url = new URL('/login', request.url);
    url.searchParams.set('from', pathname);
    return NextResponse.redirect(url);
  }
  
  // Verify token
  const decoded = verifyToken(token);
  
  // If token is invalid, redirect to login
  if (!decoded) {
    const url = new URL('/login', request.url);
    url.searchParams.set('from', pathname);
    return NextResponse.redirect(url);
  }
  
  // Check permissions for admin routes
  if (isAdminRoute && decoded.role !== 'admin') {
    return NextResponse.redirect(new URL('/unauthorized', request.url));
  }
  
  // Check permissions for CMS routes
  if (isCmsRoute && !['admin', 'editor'].includes(decoded.role)) {
    return NextResponse.redirect(new URL('/unauthorized', request.url));
  }
  
  // User is authenticated and authorized, continue
  return NextResponse.next();
}

// Configure the middleware to run only on specific paths
export const config = {
  matcher: [
    '/admin/:path*',
    '/user-dashboard/:path*',
    '/cms/:path*',
  ],
};
