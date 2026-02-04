'use client';

import { useState, useEffect } from 'react';
import { 
  Search, Filter, Calendar, FileText, Download, 
  TrendingUp, Wallet, ArrowRight, Activity, ChevronRight,
  Database, Share2, ClipboardCheck
} from 'lucide-react';

// Mock Component for local preview
const TreatmentCard = ({ treatment }: { treatment: any }) => (
  <div className="bg-white rounded-xl sm:rounded-[2rem] border border-gray-100 p-4 sm:p-6 shadow-sm hover:shadow-md transition-all group">
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div className="flex gap-3 sm:gap-4">
        <div className="h-10 w-10 sm:h-14 sm:w-14 rounded-lg sm:rounded-2xl bg-gray-50 flex items-center justify-center text-base sm:text-xl group-hover:bg-black group-hover:text-white transition-colors">
          🦷
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 sm:gap-2 mb-1">
            <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-blue-600">{treatment.date}</span>
            <span className="h-1 w-1 rounded-full bg-gray-300" />
            <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-gray-400 truncate">{treatment.clinic}</span>
          </div>
          <h3 className="text-base sm:text-xl font-black text-gray-900 tracking-tight truncate sm:truncate-none">{treatment.procedure}</h3>
          <p className="text-xs sm:text-sm font-medium text-gray-500 mt-1 line-clamp-1 sm:line-clamp-none">{treatment.notes}</p>
        </div>
      </div>
      <div className="flex items-center justify-between sm:justify-end gap-3 mt-2 sm:mt-0">
        <div className="text-right sm:hidden">
          <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-gray-400">Amount</p>
          <p className="text-base sm:text-lg font-black text-gray-900">{treatment.cost}</p>
        </div>
        <div className="text-right hidden sm:block">
          <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Amount</p>
          <p className="text-lg font-black text-gray-900">{treatment.cost}</p>
        </div>
        <button className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gray-50 text-gray-400 hover:bg-black hover:text-white transition-all flex-shrink-0">
          <Share2 className="h-3 w-3 sm:h-4 sm:w-4" />
        </button>
      </div>
    </div>
  </div>
);

export default function HistoryPage() {
  const [mounted, setMounted] = useState(false);
  const [yearFilter, setYearFilter] = useState('2024');
  const [procedureFilter, setProcedureFilter] = useState('all');
  const [isExporting, setIsExporting] = useState(false);

  const years = ['2024', '2023', '2022', '2021'];
  const procedures = ['all', 'Cleaning', 'Filling', 'Extraction', 'Checkup'];

  // Updated to Philippine Peso (₱) - approximate conversion rate: $1 = ₱56
  const treatments = [
    { id: 1, date: 'Nov 15, 2024', procedure: 'Routine Cleaning', clinic: 'Metro Dental Makati', cost: '₱6,720.00', notes: 'General prophylaxis and fluoride treatment.', status: 'Completed' },
    { id: 2, date: 'Aug 22, 2024', procedure: 'Cavity Filling', clinic: 'St. Luke\'s Medical Center', cost: '₱25,200.00', notes: 'Composite resin on upper right molar (Tooth #3).', status: 'Completed' },
    { id: 3, date: 'Jan 10, 2024', procedure: 'Annual Checkup', clinic: 'Metro Dental Makati', cost: '₱4,760.00', notes: 'Full oral exam and panoramic X-ray taken.', status: 'Completed' },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleExport = async () => {
    setIsExporting(true);
    await new Promise(r => setTimeout(r, 2000));
    setIsExporting(false);
    alert('Encrypted medical bundle generated. Check your downloads.');
  };

  if (!mounted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-100 border-t-black" />
        <p className="mt-4 text-[10px] font-black uppercase tracking-widest text-gray-400">Loading Clinical History...</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-12 space-y-8 sm:space-y-12 animate-in fade-in duration-700">
      
      {/* 1. HEADER SECTION */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-gray-100 pb-6 sm:pb-10">
        <div>
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-blue-600 mb-2">
            <div className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            Clinical Archive
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-gray-900">Treatment History</h1>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base font-medium text-gray-500 max-w-xl">
            Securely access your verified clinical records, diagnostic imaging, and procedural history.
          </p>
        </div>
        
        <div className="flex items-center gap-3 sm:gap-4 bg-gray-50 p-4 rounded-2xl sm:rounded-3xl border border-gray-100 mt-4 sm:mt-0">
          <div className="flex -space-x-2 sm:-space-x-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border-4 border-white bg-gray-200 ring-1 ring-gray-100 flex items-center justify-center text-[8px] sm:text-[10px] font-bold">Dr.{i}</div>
            ))}
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Data Integrity</p>
            <p className="text-xs font-bold text-gray-900">Verified by 3 Providers</p>
          </div>
        </div>
      </div>

      {/* 2. STATS GRID */}
      <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
        <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border-2 border-gray-100 shadow-sm">
          <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mb-3 sm:mb-4" />
          <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Total Visits</p>
          <p className="text-xl sm:text-2xl font-black text-gray-900">24</p>
        </div>
        <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border-2 border-gray-100 shadow-sm">
          <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600 mb-3 sm:mb-4" />
          <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Last Visit</p>
          <p className="text-xl sm:text-2xl font-black text-gray-900">Nov 15</p>
        </div>
        <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border-2 border-gray-100 shadow-sm">
          <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600 mb-3 sm:mb-4" />
          <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Health Score</p>
          <p className="text-xl sm:text-2xl font-black text-gray-900">92%</p>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* LEFT COLUMN: TIMELINE */}
        <div className="lg:col-span-2 space-y-8 sm:space-y-10">
          
          {/* TIMELINE SECTION */}
          <div className="bg-white rounded-2xl sm:rounded-[2.5rem] border-2 border-gray-100 p-5 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-10">
              <div className="p-2 sm:p-3 bg-blue-50 rounded-xl sm:rounded-2xl text-blue-600">
                <Activity className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-gray-900">Medical Timeline</h2>
            </div>

            {/* FILTER BAR */}
            <div className="mb-6 sm:mb-8 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gray-50 border border-gray-100">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.15em] text-gray-500">
                    <Filter className="h-3 w-3 sm:h-4 sm:w-4" /> Filter
                  </div>
                  <div className="flex gap-1 bg-gray-100 p-1 rounded-xl sm:rounded-2xl overflow-x-auto w-full sm:w-auto">
                    {years.map((year) => (
                      <button
                        key={year}
                        onClick={() => setYearFilter(year)}
                        className={`rounded-lg sm:rounded-xl px-3 sm:px-5 py-1.5 sm:py-2.5 text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap flex-shrink-0 ${
                          yearFilter === year ? 'bg-white text-black shadow-md' : 'text-gray-400 hover:text-black'
                        }`}
                      >
                        {year}
                      </button>
                    ))}
                  </div>
                  <select 
                    value={procedureFilter}
                    onChange={(e) => setProcedureFilter(e.target.value)}
                    className="rounded-xl sm:rounded-2xl border-2 border-gray-100 bg-white px-3 sm:px-5 py-2 text-xs font-black uppercase tracking-widest text-gray-900 focus:border-black outline-none cursor-pointer w-full sm:w-auto"
                  >
                    {procedures.map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>

                <div className="relative w-full sm:w-auto">
                  <Search className="absolute left-3 sm:left-5 top-1/2 h-3 w-3 sm:h-4 sm:w-4 -translate-y-1/2 text-gray-400" />
                  <input
                    type="search"
                    placeholder="Search records..."
                    className="w-full rounded-xl sm:rounded-2xl border-2 border-gray-100 bg-white pl-9 sm:pl-12 pr-4 sm:pr-6 py-2.5 sm:py-3 text-sm font-bold placeholder:text-gray-400 focus:border-black outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            {/* TIMELINE CONTENT */}
            <div className="space-y-4 sm:space-y-6 relative pl-3 sm:pl-4">
              <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-100" />
              
              {treatments.map((treatment, index) => (
                <div key={treatment.id} className="relative pl-6 sm:pl-8">
                  <div className="absolute left-[-4px] sm:left-[-5px] top-7 h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-white border-2 border-black z-10" />
                  <TreatmentCard treatment={treatment} />
                </div>
              ))}
            </div>

            {/* PAGINATION */}
            <div className="flex items-center justify-center gap-2 sm:gap-3 pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-gray-100">
              <button className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl border-2 border-gray-100 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:border-black hover:text-black transition-all">
                Prev
              </button>
              <div className="flex gap-1.5 sm:gap-2">
                {[1, 2, 3].map(n => (
                  <button 
                    key={n} 
                    className={`h-8 w-8 sm:h-11 sm:w-11 rounded-lg sm:rounded-xl text-xs sm:text-sm font-black transition-all ${n === 1 ? 'bg-black text-white' : 'bg-gray-50 text-gray-400 hover:bg-gray-100'}`}
                  >
                    {n}
                  </button>
                ))}
              </div>
              <button className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl border-2 border-gray-100 text-[10px] font-black uppercase tracking-widest text-gray-900 hover:bg-black hover:text-white transition-all">
                Next
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: ACTIONS */}
        <div className="space-y-6 sm:space-y-8">
          
          {/* EXPORT BOX */}
          <div className="bg-black rounded-2xl sm:rounded-[2.5rem] p-5 sm:p-8 text-white shadow-xl shadow-black/10">
            <h3 className="text-lg sm:text-xl font-black mb-3 sm:mb-4">Data Portability</h3>
            <p className="text-sm text-gray-400 mb-6 sm:mb-8 leading-relaxed">
              Generate an encrypted bundle containing procedural history, billing, and DICOM imaging files.
            </p>
            <button 
              onClick={handleExport}
              disabled={isExporting}
              className="w-full flex items-center justify-center gap-2 sm:gap-3 bg-white text-black py-3 sm:py-4 rounded-xl sm:rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-400 transition-all active:scale-[0.98] disabled:opacity-50"
            >
              {isExporting ? <Activity className="h-3 w-3 sm:h-4 sm:w-4 animate-spin" /> : <Download className="h-3 w-3 sm:h-4 sm:w-4" />}
              {isExporting ? 'Packaging...' : 'Export PDF Bundle'}
            </button>
          </div>

          {/* PHYSICAL RECORDS CARD */}
          <div className="bg-white rounded-2xl sm:rounded-[2.5rem] border-2 border-gray-100 p-5 sm:p-8">
            <h3 className="text-base sm:text-lg font-black text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
              <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" /> Request Paperwork?
            </h3>
            <p className="text-sm font-medium text-gray-500 mb-4 sm:mb-6">
              We can securely mail physical copies of your diagnostic records to any board-certified clinic.
            </p>
            <button className="w-full flex items-center justify-between p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gray-50 border border-gray-200 hover:border-black transition-all group">
              <span className="text-xs font-black text-gray-900 uppercase tracking-widest">Request Transfer</span>
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-gray-300 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* SHARE DATA OPTION */}
          <div className="p-4 space-y-3">
            <button className="w-full flex items-center justify-between p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gray-50 border border-gray-200 hover:border-black transition-all group">
              <div className="flex items-center gap-2 sm:gap-3">
                <Share2 className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400 group-hover:text-black" />
                <span className="text-xs font-black text-gray-900 uppercase tracking-widest">Share with Provider</span>
              </div>
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-gray-300 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}