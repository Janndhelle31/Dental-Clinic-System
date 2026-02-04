'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';

export default function ProtectedRoute({
  children,
  allowedRoles = ['admin', 'dentist', 'patient'],
}: {
  children: React.ReactNode;
  allowedRoles?: ('admin' | 'dentist' | 'patient')[];
}) {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      if (!user || !user.loggedIn) {
        router.push('/login');
      } else if (!allowedRoles.includes(user.role)) {
        // Redirect based on role
        if (user.role === 'admin' || user.role === 'dentist') {
          router.push('/dashboard');
        } else {
          router.push('/patient');
        }
      }
    }
  }, [user, isLoading, router, allowedRoles]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user || !user.loggedIn || !allowedRoles.includes(user.role)) {
    return null;
  }

  return <>{children}</>;
}