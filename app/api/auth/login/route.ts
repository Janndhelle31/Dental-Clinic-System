import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  const { email, password, role } = await request.json();
  
  // Demo credentials
  const demoUsers = [
    { email: 'admin@demo.com', password: 'admin123', role: 'admin', name: 'Admin User' },
    { email: 'patient@demo.com', password: 'patient123', role: 'patient', name: 'John Smith' },
    { email: 'dentist@demo.com', password: 'dentist123', role: 'dentist', name: 'Dr. Sarah Johnson' },
  ];

  const user = demoUsers.find(
    u => u.email === email && u.password === password && u.role === role
  );

  if (!user) {
    return NextResponse.json(
      { error: 'Invalid credentials' },
      { status: 401 }
    );
  }

  // Set demo cookie
  const cookieStore = await cookies();
  cookieStore.set('demo_user', JSON.stringify({
    email: user.email,
    role: user.role,
    name: user.name,
  }), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24, // 1 day
    path: '/',
  });

  return NextResponse.json({
    success: true,
    user: {
      email: user.email,
      role: user.role,
      name: user.name,
    },
    redirect: role === 'admin' ? '/dashboard' : '/patient',
  });
}