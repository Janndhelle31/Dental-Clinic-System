'use client';

import { useState } from 'react';
import { 
  Search, Mail, MessageSquare, Phone, Clock, 
  ChevronRight, MoreVertical, Filter, Star, Reply, Archive
} from 'lucide-react';

const mockInquiries = [
  { id: '1', sender: 'Elena Gilbert', subject: 'Wisdom Tooth Pricing', date: '2024-12-10', time: '09:30', status: 'New', source: 'Website', message: 'Hi! I would like to ask for an estimate for a wisdom tooth extraction...' },
  { id: '2', sender: 'Damon Salvatore', subject: 'Rescheduling Visit', date: '2024-12-10', time: '08:15', status: 'Pending', source: 'Facebook', message: 'I cannot make it to my appointment today. Can we move it?' },
  { id: '3', sender: 'Bonnie Bennett', subject: 'Insurance Inquiry', date: '2024-12-09', time: '14:20', status: 'Replied', source: 'Website', message: 'Do you accept Maxicare for root canal procedures?' },
];

export default function InquiriesPage() {
  const [selectedStatus, setSelectedStatus] = useState('All Inquiries');

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* HEADER */}
      <div className="flex flex-col justify-between gap-4 border-b border-gray-100 pb-8 md:flex-row md:items-end">
        <div>
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-blue-600 mb-2">
            <div className="h-1 w-1 rounded-full bg-blue-600" />
            Communication Hub
          </div>
          <h1 className="text-4xl font-black tracking-tight text-gray-900">Inquiries</h1>
          <p className="mt-2 text-sm font-medium text-gray-500">Manage patient requests and digital consultations.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* SIDEBAR */}
        <aside className="lg:col-span-3 space-y-8">
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Folders</label>
            <div className="flex flex-col gap-1">
              {['All Inquiries', 'New', 'Pending', 'Replied', 'Archived'].map((status) => (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-bold transition-all ${
                    selectedStatus === status ? 'bg-black text-white' : 'text-gray-500 hover:bg-gray-50'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* LIST */}
        <div className="lg:col-span-9 space-y-4">
          {mockInquiries.map((inq) => (
            <div key={inq.id} className="group relative rounded-3xl border border-gray-100 bg-white p-6 shadow-sm hover:border-black/10 hover:shadow-xl transition-all">
              <div className="flex flex-col gap-4 md:flex-row md:items-start">
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${inq.status === 'New' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400'}`}>
                  <Mail className="h-5 w-5" />
                </div>
                
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-gray-900">{inq.sender}</h3>
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">{inq.time}</span>
                  </div>
                  <p className="text-sm font-black text-blue-600 uppercase tracking-tight">{inq.subject}</p>
                  <p className="text-sm text-gray-500 line-clamp-1">{inq.message}</p>
                  
                  <div className="flex gap-4 pt-4">
                    <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-gray-400">
                      <MessageSquare className="h-3 w-3" /> {inq.source}
                    </span>
                    <span className={`text-[10px] font-black uppercase tracking-widest ${inq.status === 'New' ? 'text-blue-600' : 'text-gray-400'}`}>
                      • {inq.status}
                    </span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="rounded-xl bg-gray-50 p-3 text-gray-900 hover:bg-black hover:text-white transition-all">
                    <Reply className="h-4 w-4" />
                  </button>
                  <button className="rounded-xl bg-gray-50 p-3 text-gray-400 hover:bg-gray-50">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}