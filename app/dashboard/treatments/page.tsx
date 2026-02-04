'use client';
import { useState } from 'react';
import { Stethoscope, Search, Plus, ChevronRight, Activity, Clock, Zap } from 'lucide-react';

export default function TreatmentPlansPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Plans');

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col justify-between gap-4 border-b border-gray-100 pb-8 md:flex-row md:items-end">
        <div>
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-blue-600 mb-2">
            <div className="h-1 w-1 rounded-full bg-blue-600" /> Clinical Architecture
          </div>
          <h1 className="text-4xl font-black tracking-tight text-gray-900">Treatment Plans</h1>
          <p className="mt-2 text-sm font-medium text-gray-500">Long-term restorative and orthodontic roadmaps.</p>
        </div>
        <button className="flex items-center gap-2 rounded-xl bg-black px-5 py-3 text-sm font-bold text-white shadow-xl hover:bg-gray-800 transition-all active:scale-95">
          <Plus className="h-4 w-4" /> New Plan
        </button>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <aside className="lg:col-span-3 space-y-8">
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Category</label>
            <div className="flex flex-col gap-1">
              {['All Plans', 'Orthodontic', 'Restorative', 'Implantology'].map((cat) => (
                <button key={cat} onClick={() => setSelectedCategory(cat)}
                  className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-bold transition-all ${selectedCategory === cat ? 'bg-gray-100 text-black' : 'text-gray-500 hover:bg-gray-50'}`}>
                  {cat} {selectedCategory === cat && <div className="h-1.5 w-1.5 rounded-full bg-black" />}
                </button>
              ))}
            </div>
          </div>
          <div className="rounded-3xl bg-blue-600 p-6 text-white">
            <Zap className="h-5 w-5 mb-4" />
            <p className="text-[10px] font-black uppercase tracking-widest opacity-80">Phase Alert</p>
            <p className="mt-2 text-sm font-bold leading-tight">4 Patients ready for Phase 2 Restoration.</p>
          </div>
        </aside>

        <div className="lg:col-span-9 space-y-4">
          {[
            { id: 'TP-102', patient: 'Juan Dela Cruz', type: 'Invisalign Full', progress: 65, next: 'Feb 15' },
            { id: 'TP-105', patient: 'Maria Santos', type: 'Dental Implant', progress: 20, next: 'Feb 20' }
          ].map((plan) => (
            <div key={plan.id} className="group rounded-3xl border border-gray-100 bg-white p-6 shadow-sm hover:border-black/10 hover:shadow-xl transition-all">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-1 space-y-1">
                   <div className="flex items-center gap-3">
                      <span className="text-[10px] font-mono font-black text-blue-600 bg-blue-50 px-2 py-1 rounded-md">{plan.id}</span>
                      <h3 className="text-xl font-bold text-gray-900">{plan.patient}</h3>
                   </div>
                   <p className="text-xs font-black uppercase tracking-widest text-gray-400 mt-2">{plan.type}</p>
                </div>
                <div className="w-full lg:w-48">
                  <div className="flex justify-between text-[10px] font-black uppercase mb-2">
                    <span>Progress</span>
                    <span>{plan.progress}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-black transition-all duration-1000" style={{ width: `${plan.progress}%` }} />
                  </div>
                </div>
                <div className="flex items-center gap-4 border-l border-gray-100 pl-8">
                   <div className="text-right">
                      <p className="text-[10px] font-black text-gray-400 uppercase">Next Visit</p>
                      <p className="text-sm font-bold text-gray-900">{plan.next}</p>
                   </div>
                   <button className="h-10 w-10 rounded-xl bg-gray-50 flex items-center justify-center hover:bg-black hover:text-white transition-all">
                      <ChevronRight className="h-5 w-5" />
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