'use client';

import { useState, useMemo } from 'react';
import { 
  Search, Filter, Download, Plus, Calendar as CalendarIcon, 
  Clock, User, Activity, CheckCircle, XCircle, AlertCircle, 
  MoreVertical, ArrowUpRight, List, Grid2X2, ChevronRight 
} from 'lucide-react';

// --- MOCK DATA ---
const mockAppointments = [
  { id: '1', patientName: 'John Smith', date: '2024-12-10', time: '09:30', type: 'Dental Cleaning', dentist: 'Dr. Maria Santos', status: 'Scheduled', duration: 45, notes: 'Regular cleaning' },
  { id: '2', patientName: 'Emma Wilson', date: '2024-12-05', time: '14:00', type: 'Root Canal', dentist: 'Dr. Juan Dela Cruz', status: 'Scheduled', duration: 90, notes: 'Follow-up' },
  { id: '3', patientName: 'Michael Chen', date: '2024-11-28', time: '10:30', type: 'Tooth Extraction', dentist: 'Dr. Sofia Reyes', status: 'Completed', duration: 60, notes: 'Wisdom tooth' },
  { id: '4', patientName: 'Sarah Johnson', date: '2024-12-15', time: '11:00', type: 'Dental Checkup', dentist: 'Dr. Miguel Tan', status: 'Scheduled', duration: 30, notes: 'Annual checkup' },
  { id: '5', patientName: 'Robert Davis', date: '2024-11-20', time: '15:30', type: 'Teeth Whitening', dentist: 'Dr. Maria Santos', status: 'Cancelled', duration: 60, notes: 'Rescheduled' },
];

const statusFilters = ['All Statuses', 'Scheduled', 'Completed', 'Cancelled', 'No-show'];
const timeFilters = ['Today', 'This Week', 'This Month', 'All Time'];

export default function AppointmentsPage() {
  const [view, setView] = useState<'calendar' | 'list'>('list');
  const [selectedStatus, setSelectedStatus] = useState<string>('All Statuses');
  const [selectedTime, setSelectedTime] = useState<string>('All Time');
  const [searchQuery, setSearchQuery] = useState('');

  // --- FILTER LOGIC ---
  const filteredAppointments = useMemo(() => {
    return mockAppointments.filter((apt) => {
      const matchesSearch = apt.patientName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            apt.dentist.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = selectedStatus === 'All Statuses' || apt.status === selectedStatus;
      
      // Simple Date Filter Logic
      const aptDate = new Date(apt.date);
      const today = new Date();
      let matchesTime = true;

      if (selectedTime === 'Today') {
        matchesTime = aptDate.toDateString() === today.toDateString();
      } else if (selectedTime === 'This Week') {
        const nextWeek = new Date();
        nextWeek.setDate(today.getDate() + 7);
        matchesTime = aptDate >= today && aptDate <= nextWeek;
      }

      return matchesSearch && matchesStatus && matchesTime;
    });
  }, [searchQuery, selectedStatus, selectedTime]);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* 1. TOP HEADER SECTION */}
      <div className="flex flex-col justify-between gap-4 border-b border-gray-100 pb-8 md:flex-row md:items-end">
        <div>
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-blue-600 mb-2">
            <div className="h-1 w-1 rounded-full bg-blue-600" />
            Scheduling System
          </div>
          <h1 className="text-4xl font-black tracking-tight text-gray-900">Appointments</h1>
          <p className="mt-2 text-sm font-medium text-gray-500">
            Orchestrate your clinic workflow and patient visits.
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex items-center rounded-xl border border-gray-200 bg-white p-1 shadow-sm">
            <button 
              onClick={() => setView('list')}
              className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${view === 'list' ? 'bg-black text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'}`}
            >
              <List className="h-3.5 w-3.5" /> List
            </button>
            <button 
              onClick={() => setView('calendar')}
              className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${view === 'calendar' ? 'bg-black text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'}`}
            >
              <Grid2X2 className="h-3.5 w-3.5" /> Calendar
            </button>
          </div>
          <button className="flex items-center gap-2 rounded-xl bg-black px-5 py-3 text-sm font-bold text-white shadow-xl shadow-black/10 transition-all hover:bg-gray-800 active:scale-95">
            <Plus className="h-4 w-4" /> New Booking
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        
        {/* 2. UNIFORM SIDEBAR FILTER */}
        <aside className="lg:col-span-3 space-y-8">
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Search</label>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Patient or Doctor..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-2xl border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm font-medium focus:border-black focus:ring-1 focus:ring-black transition-all"
              />
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Filter by Status</label>
            <div className="flex flex-col gap-1">
              {statusFilters.map((status) => (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-bold transition-all ${
                    selectedStatus === status ? 'bg-gray-100 text-black' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  {status}
                  {selectedStatus === status && <div className="h-1.5 w-1.5 rounded-full bg-black" />}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Timeframe</label>
            <div className="flex flex-col gap-1">
              {timeFilters.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-bold transition-all ${
                    selectedTime === time ? 'bg-gray-100 text-black' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  {time}
                  {selectedTime === time && <div className="h-1.5 w-1.5 rounded-full bg-black" />}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-gray-900 p-6 text-white shadow-2xl shadow-black/20">
            <div className="flex items-center gap-2 opacity-60">
              <Activity className="h-4 w-4" />
              <span className="text-[10px] font-black uppercase tracking-widest">Daily Load</span>
            </div>
            <div className="mt-4 flex items-end gap-2">
              <span className="text-4xl font-black">82%</span>
              <span className="mb-1 text-xs font-bold text-emerald-400">+12%</span>
            </div>
            <p className="mt-2 text-xs font-medium text-gray-400">Clinic capacity reached for today.</p>
          </div>
        </aside>

        {/* 3. MAIN CONTENT AREA */}
        <div className="lg:col-span-9 space-y-6">
          <div className="flex items-center justify-between rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Showing {filteredAppointments.length} results
              </span>
            </div>
            <button className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2 text-xs font-black uppercase tracking-widest text-gray-600 hover:bg-gray-50 transition-all">
              <Download className="h-3.5 w-3.5" /> Export PDF
            </button>
          </div>

          {view === 'list' ? (
            <div className="space-y-4">
              {filteredAppointments.length > 0 ? (
                filteredAppointments.map((apt) => (
                  <AppointmentCard key={apt.id} appointment={apt} />
                ))
              ) : (
                <div className="py-20 text-center rounded-3xl border border-dashed border-gray-200">
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">No appointments found</p>
                </div>
              )}
            </div>
          ) : (
             <CalendarGrid appointments={filteredAppointments} />
          )}
        </div>
      </div>
    </div>
  );
}

function AppointmentCard({ appointment }: { appointment: any }) {
  const day = appointment.date.split('-')[2];
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-black/10 hover:shadow-xl hover:shadow-black/5">
      <div className="flex flex-col gap-6 md:flex-row md:items-center">
        <div className="flex h-20 w-20 flex-col items-center justify-center rounded-2xl bg-gray-50 text-center transition-all duration-300 group-hover:bg-black group-hover:text-white group-hover:scale-105">
          <span className="text-[10px] font-black uppercase tracking-tighter opacity-60">Dec</span>
          <span className="text-2xl font-black">{day}</span>
        </div>

        <div className="flex-1 space-y-1">
          <div className="flex items-center gap-3">
            <h3 className="text-xl font-bold tracking-tight text-gray-900">{appointment.patientName}</h3>
            <StatusBadge status={appointment.status} />
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
              <Clock className="h-4 w-4 text-gray-400" /> {appointment.time} ({appointment.duration}m)
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
              <Activity className="h-4 w-4 text-gray-400" /> {appointment.type}
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
              <User className="h-4 w-4 text-gray-400" /> {appointment.dentist}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 border-t border-gray-50 pt-4 md:border-none md:pt-0">
          <button className="flex items-center gap-2 rounded-xl bg-gray-50 px-4 py-2.5 text-sm font-black uppercase tracking-widest text-gray-900 transition-all hover:bg-black hover:text-white">
            Details <ChevronRight className="h-4 w-4" />
          </button>
          <button className="rounded-xl p-2.5 text-gray-400 hover:bg-gray-50 hover:text-black">
            <MoreVertical className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Scheduled: "bg-blue-50 text-blue-700 ring-blue-600/20",
    Completed: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
    Cancelled: "bg-red-50 text-red-700 ring-red-600/20",
    "No-show": "bg-orange-50 text-orange-700 ring-orange-600/20",
  };
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider ring-1 ring-inset ${styles[status] || "bg-gray-50 text-gray-600 ring-gray-600/20"}`}>
      {status}
    </span>
  );
}

function CalendarGrid({ appointments }: { appointments: any[] }) {
  const days = Array.from({ length: 35 }, (_, i) => i - 4); // Dummy calendar range
  return (
    <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm animate-in fade-in zoom-in-95 duration-500">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-black uppercase tracking-tight">December 2024</h3>
        <div className="flex gap-2">
          <button className="p-2 rounded-lg hover:bg-gray-100"><ChevronRight className="h-4 w-4 rotate-180" /></button>
          <button className="p-2 rounded-lg hover:bg-gray-100"><ChevronRight className="h-4 w-4" /></button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-px bg-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
          <div key={d} className="bg-gray-50 p-3 text-center text-[10px] font-black uppercase tracking-widest text-gray-400">{d}</div>
        ))}
        {days.map((d, i) => {
          const isDate = d > 0 && d <= 31;
          const hasApt = isDate && appointments.some(a => parseInt(a.date.split('-')[2]) === d);
          return (
            <div key={i} className={`min-h-[100px] bg-white p-3 transition-colors ${isDate ? 'hover:bg-gray-50/50' : 'bg-gray-50/30'}`}>
              {isDate && <span className={`text-sm font-bold ${d === 10 ? 'text-blue-600' : 'text-gray-400'}`}>{d}</span>}
              {hasApt && (
                <div className="mt-2 space-y-1">
                  <div className="h-1.5 w-full rounded-full bg-black/5" />
                  <div className="h-1.5 w-2/3 rounded-full bg-blue-500" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}