'use client';

import { useState, useMemo } from 'react';
import { 
  Search, FileText, Download, Eye, Edit, Camera, 
  Plus, ArrowRight, Activity, ChevronRight, Hash 
} from 'lucide-react';
import { mockDentalRecords } from '@/lib/data';

export default function RecordsPage() {
  // Initialize with the first record in the array
  const [selectedRecordId, setSelectedRecordId] = useState<string | null>(
    mockDentalRecords.length > 0 ? mockDentalRecords[0].id : null
  );
  const [searchQuery, setSearchQuery] = useState('');

  // --- FILTER LOGIC (Synced with mock data properties) ---
  const filteredRecords = useMemo(() => {
    return mockDentalRecords.filter(record => {
      // Procedure and Dentist are strings in your mock data
      const procedure = (record.procedure || "").toLowerCase();
      const dentist = (record.dentist || "").toLowerCase();
      const notes = (record.notes || "").toLowerCase();
      const query = searchQuery.toLowerCase();

      return procedure.includes(query) || 
             dentist.includes(query) || 
             notes.includes(query);
    });
  }, [searchQuery]);

  const selectedRecord = mockDentalRecords.find(r => r.id === selectedRecordId);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* 1. TOP HEADER SECTION */}
      <div className="flex flex-col justify-between gap-4 border-b border-gray-100 pb-8 md:flex-row md:items-end">
        <div>
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-blue-600 mb-2">
            <div className="h-1 w-1 rounded-full bg-blue-600" />
            Clinical History
          </div>
          <h1 className="text-4xl font-black tracking-tight text-gray-900">Health Records</h1>
          <p className="mt-2 text-sm font-medium text-gray-500">
            Digital imaging and longitudinal procedural history.
          </p>
        </div>
        
        <button className="flex items-center gap-2 rounded-xl bg-black px-5 py-3 text-sm font-bold text-white shadow-xl shadow-black/10 transition-all hover:bg-gray-800 active:scale-95">
          <Plus className="h-4 w-4" /> New Entry
        </button>
      </div>

      <div className="grid gap-8 lg:grid-cols-12">
        
        {/* 2. RECORDS LIST (LEFT) */}
        <div className="lg:col-span-7 space-y-4">
         <div className="relative group">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 group-focus-within:text-black transition-colors" />
            <input
                type="search"
                placeholder="Search procedures, notes, or dentists..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 py-4 pl-12 pr-4 text-base font-medium text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-black focus:ring-1 focus:ring-black transition-all outline-none"
            />
            </div>

          <div className="rounded-3xl border border-gray-100 bg-white overflow-hidden shadow-sm">
            <div className="divide-y divide-gray-50">
              {filteredRecords.map((record) => (
                <button
                  key={record.id}
                  onClick={() => setSelectedRecordId(record.id)}
                  className={`w-full text-left p-6 transition-all hover:bg-gray-50/50 ${
                    selectedRecordId === record.id ? 'bg-gray-50/80' : ''
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                          {record.date}
                        </span>
                        {/* Note: Your current mock data includes tooth numbers inside the 'notes' string 
                           (e.g., "tooth #14"). This Badge is ready for when you add a specific 'tooth' 
                           field to the DentalRecord type.
                        */}
                      </div>
                      <h3 className="text-lg font-bold tracking-tight text-gray-900">
                        {record.procedure}
                      </h3>
                      <p className="text-sm font-medium text-gray-500 line-clamp-1 italic">
                        "{record.notes}"
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-3">
                      <div className="text-xs font-black text-gray-900 uppercase tracking-widest">
                        ${record.cost}
                      </div>
                      <ChevronRight className={`h-4 w-4 transition-transform ${selectedRecordId === record.id ? 'translate-x-1 text-black' : 'text-gray-300'}`} />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 3. STICKY RECORD DETAIL (RIGHT) */}
        <div className="lg:col-span-5">
          <div className="sticky top-8 rounded-[2rem] border-2 border-black bg-white p-8 shadow-2xl">
            {selectedRecord ? (
              <div className="space-y-8 animate-in fade-in zoom-in-95 duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white shadow-lg shadow-black/20">
                    <Activity className="h-6 w-6" />
                  </div>
                  <div className="flex gap-2">
                    <button className="rounded-xl border border-gray-100 p-2.5 hover:bg-gray-50 transition-colors">
                      <Edit className="h-4 w-4 text-black" />
                    </button>
                    <button className="rounded-xl border border-gray-100 p-2.5 hover:bg-gray-50 transition-colors">
                      <Download className="h-4 w-4 text-black" />
                    </button>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-black tracking-tight text-gray-900 leading-tight">
                    {selectedRecord.procedure}
                  </h2>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <p className="text-xs font-black text-gray-400 uppercase tracking-widest">
                      Performed by {selectedRecord.dentist}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 border-y border-gray-100 py-6">
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Service Date</label>
                    <p className="mt-1 text-sm font-bold text-gray-900">{selectedRecord.date}</p>
                  </div>
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Patient ID</label>
                    <p className="mt-1 text-sm font-bold text-gray-900">#{selectedRecord.patientId}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Clinical Observations</label>
                  <div className="rounded-2xl bg-gray-50 p-5 text-sm font-medium leading-relaxed text-gray-800 border border-gray-100">
                    {selectedRecord.notes}
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Diagnostic Imaging</label>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedRecord.xray ? (
                      <div className="group relative aspect-square overflow-hidden rounded-2xl border-2 border-dashed border-gray-100 hover:border-black transition-all cursor-pointer">
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white group-hover:bg-gray-50 transition-colors">
                          <Camera className="h-6 w-6 text-gray-200 group-hover:text-black transition-colors" />
                          <span className="mt-2 px-2 text-center text-[9px] font-black uppercase tracking-tight text-gray-400 group-hover:text-black">
                            {selectedRecord.xray}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="col-span-2 flex h-24 items-center justify-center rounded-2xl border-2 border-dashed border-gray-100">
                         <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">No Imaging Attached</span>
                      </div>
                    )}
                  </div>
                </div>

                <button className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-black py-4 text-sm font-black uppercase tracking-widest text-white transition-all hover:bg-gray-800 active:scale-[0.98] shadow-xl shadow-black/10">
                  <Eye className="h-4 w-4 transition-transform group-hover:scale-110" />
                  Full Resolution Report
                </button>
              </div>
            ) : (
              <div className="flex h-full flex-col items-center justify-center py-20 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-50 border-2 border-dashed border-gray-200">
                  <FileText className="h-8 w-8 text-gray-300" />
                </div>
                <h3 className="mt-6 text-lg font-bold text-gray-900">Select a Record</h3>
                <p className="mt-2 text-sm font-medium text-gray-400">Choose an entry from the timeline to view clinical insights.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}