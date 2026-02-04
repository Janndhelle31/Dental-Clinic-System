import { Calendar, Clock, User, MapPin, AlertCircle } from 'lucide-react';

interface AppointmentCardProps {
  appointment: {
    id: string;
    date: string;
    time: string;
    type: string;
    dentist: string;
    status: 'Scheduled' | 'Completed' | 'Cancelled' | 'No-show';
    notes?: string;
    address: string;
  };
}

export default function AppointmentCard({ appointment }: AppointmentCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Scheduled': return 'bg-blue-100 text-blue-800';
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Cancelled': return 'bg-red-100 text-red-800';
      case 'No-show': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-start">
        <div className="flex-1">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{appointment.type}</h3>
              <span className={`rounded-full px-3 py-1 text-xs font-medium ${getStatusColor(appointment.status)}`}>
                {appointment.status}
              </span>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">Appointment ID</div>
              <div className="font-mono text-sm font-medium">#{appointment.id}</div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex items-center space-x-3">
              <div className="rounded-lg bg-blue-50 p-2">
                <Calendar className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Date</div>
                <div className="font-medium text-gray-900">{formatDate(appointment.date)}</div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="rounded-lg bg-purple-50 p-2">
                <Clock className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Time</div>
                <div className="font-medium text-gray-900">{appointment.time}</div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="rounded-lg bg-green-50 p-2">
                <User className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Dentist</div>
                <div className="font-medium text-gray-900">{appointment.dentist}</div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="rounded-lg bg-orange-50 p-2">
                <MapPin className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Location</div>
                <div className="font-medium text-gray-900">{appointment.address}</div>
              </div>
            </div>
          </div>

          {appointment.notes && (
            <div className="mt-4">
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <AlertCircle className="h-4 w-4" />
                <span>Notes: {appointment.notes}</span>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col space-y-3 lg:w-48">
          <button className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            Reschedule
          </button>
          <button className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50">
            Cancel
          </button>
          <button className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50">
            Add to Calendar
          </button>
          <button className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}