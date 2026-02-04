// app/api/appointments/route.ts
import { NextResponse } from 'next/server';
import { mockAppointments } from '@/lib/data';

export async function GET() {
  return NextResponse.json(mockAppointments);
}

export async function POST(request: Request) {
  const body = await request.json();
  const newAppointment = {
    id: (mockAppointments.length + 1).toString(),
    ...body,
    status: 'Scheduled',
  };
  
  // In real app: Save to database
  mockAppointments.push(newAppointment);
  
  return NextResponse.json(newAppointment, { status: 201 });
}