'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday } from 'date-fns';

interface CalendarEvent {
  id: string;
  title: string;
  date: Date;
  type: 'checkup' | 'cleaning' | 'surgery' | 'consultation';
  patient: string;
}

export default function AppointmentCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const events: CalendarEvent[] = [
    { id: '1', title: 'John Smith', date: new Date(2024, 11, 15, 9, 0), type: 'checkup', patient: 'John Smith' },
    { id: '2', title: 'Emma Wilson', date: new Date(2024, 11, 15, 14, 0), type: 'cleaning', patient: 'Emma Wilson' },
    { id: '3', title: 'Robert Chen', date: new Date(2024, 11, 18, 11, 0), type: 'surgery', patient: 'Robert Chen' },
  ];

  const getEventsForDate = (date: Date) => {
    return events.filter(event => 
      event.date.getDate() === date.getDate() &&
      event.date.getMonth() === date.getMonth() &&
      event.date.getFullYear() === date.getFullYear()
    );
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'checkup': return 'bg-blue-100 text-blue-800';
      case 'cleaning': return 'bg-green-100 text-green-800';
      case 'surgery': return 'bg-red-100 text-red-800';
      case 'consultation': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Appointment Calendar</h2>
          <p className="text-sm text-gray-600">Manage your schedule</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            <Plus className="h-4 w-4" />
            <span>New Appointment</span>
          </button>
        </div>
      </div>

      <div className="mb-4 flex items-center justify-between">
        <button
          onClick={() => setCurrentDate(subMonths(currentDate, 1))}
          className="rounded-lg p-2 hover:bg-gray-100"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <h3 className="text-xl font-semibold text-gray-900">
          {format(currentDate, 'MMMM yyyy')}
        </h3>
        <button
          onClick={() => setCurrentDate(addMonths(currentDate, 1))}
          className="rounded-lg p-2 hover:bg-gray-100"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
            {day}
          </div>
        ))}

        {days.map((day) => {
          const dayEvents = getEventsForDate(day);
          const isCurrentMonth = isSameMonth(day, currentDate);
          
          return (
            <button
              key={day.toString()}
              onClick={() => setSelectedDate(day)}
              className={`min-h-24 rounded-lg border p-2 text-left transition-colors hover:bg-gray-50 ${
                isToday(day) ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
              } ${!isCurrentMonth ? 'opacity-40' : ''} ${
                selectedDate.getDate() === day.getDate() ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              <div className="flex justify-between">
                <span className={`font-medium ${
                  isToday(day) ? 'text-blue-600' : 'text-gray-900'
                }`}>
                  {format(day, 'd')}
                </span>
                {dayEvents.length > 0 && (
                  <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                )}
              </div>
              
              <div className="mt-2 space-y-1">
                {dayEvents.slice(0, 2).map((event) => (
                  <div
                    key={event.id}
                    className={`rounded px-2 py-1 text-xs ${getTypeColor(event.type)} truncate`}
                    title={`${event.patient} - ${event.type}`}
                  >
                    {format(event.date, 'HH:mm')} {event.type}
                  </div>
                ))}
                {dayEvents.length > 2 && (
                  <div className="text-xs text-gray-500">
                    +{dayEvents.length - 2} more
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Day Events Panel */}
      <div className="mt-6 border-t pt-6">
        <h3 className="mb-4 text-lg font-semibold text-gray-900">
          Appointments for {format(selectedDate, 'MMMM d, yyyy')}
        </h3>
        <div className="space-y-3">
          {getEventsForDate(selectedDate).length > 0 ? (
            getEventsForDate(selectedDate).map((event) => (
              <div key={event.id} className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">{event.patient}</h4>
                    <p className="text-sm text-gray-600">
                      {format(event.date, 'h:mm a')} • {event.type}
                    </p>
                  </div>
                  <span className={`rounded-full px-3 py-1 text-xs font-medium ${getTypeColor(event.type)}`}>
                    {event.type}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 py-8">No appointments scheduled</p>
          )}
        </div>
      </div>
    </div>
  );
}