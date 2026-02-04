'use client';

import { useState, useMemo } from 'react';
import { 
  Search, Filter, MoreVertical, Phone, Mail, UserPlus, 
  ArrowUpRight, Calendar, FileText, X, ChevronRight,
  Activity, Users, Zap
} from 'lucide-react';

// --- MOCK DATA ---
const mockPatients = [
  { id: '1', name: 'John Smith', email: 'john@example.com', phone: '+1 (555) 123-4567', lastVisit: '2024-11-15', status: 'Active', nextAppointment: '2024-12-10', totalVisits: 12 },
  { id: '2', name: 'Emma Wilson', email: 'emma@example.com', phone: '+1 (555) 234-5678', lastVisit: '2024-11-10', status: 'Active', nextAppointment: '2024-12-05', totalVisits: 8 },
  { id: '3', name: 'Michael Chen', email: 'michael@example.com', phone: '+1 (555) 345-6789', lastVisit: '2024-10-28', status: 'Inactive', nextAppointment: null, totalVisits: 5 },
  { id: '4', name: 'Sarah Johnson', email: 'sarah@example.com', phone: '+1 (555) 456-7890', lastVisit: '2024-11-20', status: 'Active', nextAppointment: '2024-12-15', totalVisits: 15 },
  { id: '5', name: 'Robert Davis', email: 'robert@example.com', phone: '+1 (555) 567-8901', lastVisit: '2024-09-15', status: 'Inactive', nextAppointment: null, totalVisits: 3 },
];

const statusFilters = ['All Patients', 'Active', 'Inactive'];

export default function PatientsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All Patients');

  // --- FILTER LOGIC ---
  const filteredPatients = useMemo(() => {
    return mockPatients.filter(patient => {
      const matchesSearch = 
        patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.email.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesStatus = selectedStatus === 'All Patients' || patient.status === selectedStatus;
      
      return matchesSearch && matchesStatus;
    });
  }, [searchTerm, selectedStatus]);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* 1. TOP HEADER SECTION */}
      <div className="flex flex-col justify-between gap-4 border-b border-gray-100 pb-8 md:flex-row md:items-end">
        <div>
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-blue-600 mb-2">
            <div className="h-1 w-1 rounded-full bg-blue-600" />
            Patient Records
          </div>
          <h1 className="text-4xl font-black tracking-tight text-gray-900">Directory</h1>
          <p className="mt-2 text-sm font-medium text-gray-500">
            Manage your patient database and medical history.
          </p>
        </div>
        
        <button className="flex items-center gap-2 rounded-xl bg-black px-5 py-3 text-sm font-bold text-white shadow-xl shadow-black/10 transition-all hover:bg-gray-800 active:scale-95">
          <UserPlus className="h-4 w-4" /> Register Patient
        </button>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        
        {/* 2. UNIFORM SIDEBAR FILTER */}
        <aside className="lg:col-span-3 space-y-8">
          
            {/* Search Box */}
            <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Search Directory</label>
            <div className="relative group">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 group-focus-within:text-black transition-colors" />
                <input
                type="text"
                placeholder="Name, email, or ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                // Fixed: Base background is slightly off-white, text is deep black, border is stronger
                className="w-full rounded-2xl border border-gray-300 bg-gray-50/50 py-3.5 pl-11 pr-4 text-sm font-bold text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-black focus:ring-2 focus:ring-black/5 transition-all outline-none"
                />
            </div>
            </div>

         {/* Status Filter Group */}
            <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Filter by Status</label>
            <div className="flex flex-col gap-1.5">
                {statusFilters.map((status) => (
                <button
                    key={status}
                    onClick={() => setSelectedStatus(status)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-black tracking-tight transition-all border ${
                    selectedStatus === status 
                    ? 'bg-black text-white border-black shadow-lg shadow-black/10' 
                    : 'bg-white text-gray-600 border-gray-100 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                >
                    {status}
                    {selectedStatus === status && <ChevronRight className="h-3 w-3 text-white" />}
                </button>
                ))}
            </div>
            </div>

          {/* Quick Stats Summary Card */}
          <div className="rounded-3xl bg-gray-900 p-6 text-white shadow-2xl">
            <div className="flex items-center gap-2 opacity-60">
              <Users className="h-4 w-4" />
              <span className="text-[10px] font-black uppercase tracking-widest">Growth</span>
            </div>
            <div className="mt-4 flex items-end gap-2">
              <span className="text-4xl font-black">24</span>
              <span className="mb-1 text-xs font-bold text-emerald-400">+4 this month</span>
            </div>
            <p className="mt-2 text-xs font-medium text-gray-400">Total patient base is expanding.</p>
          </div>
        </aside>

        {/* 3. MAIN CONTENT AREA */}
        <div className="lg:col-span-9 space-y-6">
          
          {/* Action Ribbon */}
          <div className="flex items-center justify-between rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              Showing {filteredPatients.length} Patients
            </span>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2 text-xs font-black uppercase tracking-widest text-gray-600 hover:bg-gray-50 transition-all">
                Export CSV
              </button>
            </div>
          </div>

          {/* Patient Cards List */}
          <div className="space-y-4">
            {filteredPatients.map((patient) => (
              <PatientCard key={patient.id} patient={patient} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PatientCard({ patient }: { patient: any }) {
  const initials = patient.name.split(' ').map((n: string) => n[0]).join('');

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-black/10 hover:shadow-xl hover:shadow-black/5">
      <div className="flex flex-col gap-6 md:flex-row md:items-center">
        
        {/* Avatar block */}
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-50 text-xl font-black text-gray-900 transition-all duration-300 group-hover:bg-black group-hover:text-white">
          {initials}
        </div>

        {/* Info block */}
        <div className="flex-1 space-y-1">
          <div className="flex items-center gap-3">
            <h3 className="text-xl font-bold tracking-tight text-gray-900">{patient.name}</h3>
            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider ring-1 ring-inset ${
              patient.status === 'Active' ? 'bg-emerald-50 text-emerald-700 ring-emerald-600/20' : 'bg-gray-50 text-gray-500 ring-gray-600/20'
            }`}>
              {patient.status}
            </span>
          </div>
          
          <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
              <Phone className="h-4 w-4 text-gray-400" /> {patient.phone}
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
              <Mail className="h-4 w-4 text-gray-400" /> {patient.email}
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-gray-400">
              <Zap className="h-4 w-4 text-gray-400" /> {patient.totalVisits} Total Visits
            </div>
          </div>
        </div>

        {/* Action button */}
        <div className="flex items-center gap-2 border-t border-gray-50 pt-4 md:border-none md:pt-0">
          <button className="flex items-center gap-2 rounded-xl bg-gray-50 px-4 py-2.5 text-sm font-black uppercase tracking-widest text-gray-900 transition-all hover:bg-black hover:text-white">
            Profile <ChevronRight className="h-4 w-4" />
          </button>
          <button className="rounded-xl p-2.5 text-gray-400 hover:bg-gray-50 hover:text-black">
            <MoreVertical className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Stats Mini-Grid */}
      <div className="mt-6 grid grid-cols-2 gap-4 border-t border-gray-50 pt-6 md:grid-cols-2 lg:grid-cols-2">
        <div className="flex flex-col">
          <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Last Visited</span>
          <span className="text-sm font-bold text-gray-700">{patient.lastVisit}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Upcoming Visit</span>
          <span className="text-sm font-bold text-gray-700">{patient.nextAppointment || 'None Scheduled'}</span>
        </div>
      </div>
    </div>
  );
}