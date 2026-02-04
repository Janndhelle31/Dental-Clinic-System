'use client';

import { Calendar, User, Clock, MoreVertical } from 'lucide-react';
import { mockAppointments } from '@/lib/data';

export default function RecentAppointments() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Scheduled': return 'bg-blue-100 text-blue-800';
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Cancelled': return 'bg-red-100 text-red-800';
      case 'No-show': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Recent Appointments</h2>
          <p className="text-sm text-gray-600">Today's schedule</p>
        </div>
        <button className="text-sm text-blue-600 hover:text-blue-800">
          View all →
        </button>
      </div>

      <div className="space-y-4">
        {mockAppointments.slice(0, 5).map((appointment) => (
          <div
            key={appointment.id}
            className="flex items-center justify-between rounded-lg border p-4 hover:bg-gray-50"
          >
            <div className="flex items-center space-x-4">
              <div className="rounded-lg bg-blue-50 p-2">
                <Calendar className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="font-medium text-gray-900">{appointment.patientName}</h3>
                  <span className={`rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(appointment.status)}`}>
                    {appointment.status}
                  </span>
                </div>
                <div className="mt-1 flex items-center space-x-4 text-sm text-gray-600">
                  <span className="flex items-center">
                    <Clock className="mr-1 h-3 w-3" />
                    {appointment.time} • {appointment.duration}min
                  </span>
                  <span className="flex items-center">
                    <User className="mr-1 h-3 w-3" />
                    {appointment.dentist}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-900">
                {appointment.type}
              </span>
              <button className="rounded-full p-1 hover:bg-gray-100">
                <MoreVertical className="h-4 w-4 text-gray-500" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}