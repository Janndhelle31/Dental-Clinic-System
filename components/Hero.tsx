'use client';

import { Calendar, Phone, MapPin, Star, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();

  return (
    <div className="relative overflow-hidden bg-white selection:bg-blue-100 text-black">
      {/* 1. ARCHITECTURAL BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-30"></div>
        <div className="absolute -left-24 top-0 h-[500px] w-[500px] rounded-full bg-blue-50/50 blur-3xl"></div>
        <div className="absolute -right-24 bottom-0 h-[500px] w-[500px] rounded-full bg-emerald-50/50 blur-3xl"></div>
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          
          {/* 2. TEXT CONTENT BLOCK */}
          <div className="space-y-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 ring-1 ring-inset ring-blue-700/10">
              <Sparkles className="h-3 w-3" />
              Bukidnon's Choice for Dental Excellence
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl font-black tracking-tighter text-gray-900 sm:text-6xl lg:text-7xl">
                Valencia's Finest <br />
                Dental <span className="text-blue-600">Care.</span>
              </h1>
              <p className="max-w-xl text-lg font-medium leading-relaxed text-gray-500">
                Experience world-class dental engineering in the heart of Valencia City. 
                From routine check-ups to advanced 3D implantology, we bring high-performance 
                smiles to the City of Golden Harvest.
              </p>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="group flex items-center space-x-4 rounded-3xl border border-gray-100 bg-white p-4 transition-all hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-200 transition-transform group-hover:scale-110">
                  <Calendar className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-sm font-black uppercase tracking-tight text-gray-900">Queue Sync</h3>
                  <p className="text-xs font-bold text-gray-400">Book your slot online</p>
                </div>
              </div>
              
              <div className="group flex items-center space-x-4 rounded-3xl border border-gray-100 bg-white p-4 transition-all hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-lg shadow-emerald-200 transition-transform group-hover:scale-110">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-sm font-black uppercase tracking-tight text-gray-900">PRC Certified</h3>
                  <p className="text-xs font-bold text-gray-400">Licensed specialists</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-10 w-10 rounded-full border-4 border-white bg-gradient-to-r from-blue-500 to-cyan-500" />
                ))}
              </div>
              <div className="space-y-1">
                <div className="flex text-orange-400">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="h-3 w-3 fill-current" />)}
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">1,200+ Satisfied Patients</p>
              </div>
            </div>

            {/* CTA Button for mobile */}
            <div className="lg:hidden">
              <button
                onClick={() => router.push('/book')}
                className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-black py-4 text-xs font-black uppercase tracking-[0.2em] text-white transition-all hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-200 active:scale-[0.98]"
              >
                <span className="relative z-10">Secure Your Schedule</span>
                <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
          
          {/* 3. FLOATING BOOKING WIDGET */}
          <div 
            onClick={() => router.push('/book')}
            className="relative lg:ml-auto w-full max-w-lg group cursor-pointer transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="absolute -inset-1 rounded-[3rem] bg-gradient-to-tr from-blue-600 to-emerald-400 opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
            
            <div className="relative rounded-[2.5rem] border-2 border-gray-900 bg-white p-10 shadow-2xl text-black group-hover:shadow-3xl group-hover:border-blue-500 transition-all">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-black tracking-tight text-gray-900 group-hover:text-blue-600 transition-colors">Digital Check-in</h2>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-1 group-hover:text-blue-400 transition-colors">Valencia City Portal</p>
                </div>
                <div className="rounded-2xl bg-gray-900 p-4 text-white group-hover:bg-blue-600 transition-colors">
                  <Calendar className="h-6 w-6" />
                </div>
              </div>
              
              <div className="space-y-6 pointer-events-none">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 px-1">Reason for Visit</label>
                  <div className="w-full rounded-2xl border-2 border-gray-100 bg-gray-50/50 px-5 py-4 text-sm font-bold text-black">
                    New Patient Oral Exam
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 px-1">Selected Date</label>
                  <div className="w-full rounded-2xl border-2 border-gray-100 bg-gray-50/50 px-5 py-4 text-sm font-bold text-black">
                    {new Date().toLocaleDateString('en-PH', { 
                      weekday: 'long', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                </div>
                
                <div className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-black py-5 text-xs font-black uppercase tracking-[0.2em] text-white">
                  <span className="relative z-10">Confirm Booking</span>
                  <ArrowRight className="relative z-10 h-4 w-4" />
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-gray-100 pt-8">
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-gray-300 group-hover:text-blue-400 transition-colors" />
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-tight group-hover:text-gray-600 transition-colors">Poblacion, Valencia</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-gray-300 group-hover:text-blue-400 transition-colors" />
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-tight group-hover:text-gray-600 transition-colors">(088) 828-7777</span>
                </div>
              </div>

              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-opacity">
                Select Your Slot →
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}