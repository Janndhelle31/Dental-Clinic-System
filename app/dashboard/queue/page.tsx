'use client';
import { List, Play, CheckCircle2, User, Clock } from 'lucide-react';

export default function QueuePage() {
  return (
    <div className="space-y-12 animate-in fade-in duration-700 max-w-5xl mx-auto">
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.3em] text-blue-600">
          <div className="h-1 w-1 rounded-full bg-blue-600" /> Operational Live-Stream
        </div>
        <h1 className="text-6xl font-black tracking-tighter text-gray-900 uppercase">Queue Terminal</h1>
      </div>

      <div className="grid gap-4">
        {[
          { pos: '01', name: 'Maria Santos', room: 'Consultation Room A', status: 'In-Chair', time: '14:30' },
          { pos: '02', name: 'Juan Dela Cruz', room: 'Waiting Area', status: 'Next Up', time: '15:00' },
          { pos: '03', name: 'Pedro Penduko', room: 'Waiting Area', status: 'Waiting', time: '15:15' }
        ].map((patient) => (
          <div key={patient.pos} className={`group relative overflow-hidden rounded-[2.5rem] border p-8 transition-all ${patient.status === 'In-Chair' ? 'bg-black border-black text-white shadow-2xl' : 'bg-white border-gray-100 text-gray-900'}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-8">
                <span className={`text-4xl font-black ${patient.status === 'In-Chair' ? 'text-blue-500' : 'text-gray-200'}`}>{patient.pos}</span>
                <div>
                  <h3 className="text-2xl font-black tracking-tight">{patient.name}</h3>
                  <p className={`text-xs font-bold uppercase tracking-widest mt-1 ${patient.status === 'In-Chair' ? 'text-gray-400' : 'text-gray-400'}`}>Loc: {patient.room}</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="text-right">
                   <p className="text-[10px] font-black uppercase tracking-widest opacity-50">Appt Time</p>
                   <p className="text-lg font-mono font-bold">{patient.time}</p>
                </div>
                <div className={`px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest ${patient.status === 'In-Chair' ? 'bg-blue-600 text-white animate-pulse' : 'bg-gray-50 text-gray-400'}`}>
                   {patient.status}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}