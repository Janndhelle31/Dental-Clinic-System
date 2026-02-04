'use client';

import { ArrowRight, CheckCircle, Calendar, ShieldCheck, CreditCard, Phone } from 'lucide-react';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-24 bg-white font-sans antialiased">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative isolate overflow-hidden rounded-[4rem] bg-[#0a0a0b] px-8 py-20 shadow-2xl sm:px-16 sm:py-28">
          
          {/* Blueprint Grid Overlay */}
          <div 
            className="absolute inset-0 -z-10 opacity-20" 
            style={{ 
              backgroundImage: `radial-gradient(#3b82f6 1px, transparent 1px)`, 
              backgroundSize: '40px 40px' 
            }} 
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-blue-600/20 via-transparent to-transparent" />

          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 text-blue-500 font-black text-[10px] uppercase tracking-[0.4em] mb-8">
              <Calendar className="h-3 w-3" /> Availability: This Week
            </div>
            
            <h2 className="text-5xl font-[900] tracking-tighter text-white sm:text-7xl lg:text-8xl uppercase leading-[0.85]">
              Begin Your <br />
              <span className="text-blue-500">Transformation.</span>
            </h2>
            
            <p className="mx-auto mt-8 max-w-xl text-lg font-medium text-gray-400 leading-relaxed tracking-tight">
              Join 5,000+ patients who have elevated their oral health through our 
              modern clinical protocols. Secure your diagnostic slot today.
            </p>

            {/* Feature Pills */}
            <div className="mt-16 grid gap-4 sm:grid-cols-3">
              {[
                { icon: Calendar, title: 'Instant Booking', sub: '24/7 Digital Portal' },
                { icon: ShieldCheck, title: 'Board Certified', sub: 'Elite Clinical Staff' },
                { icon: CreditCard, title: 'Direct Billing', sub: 'Insurance Integrated' }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center p-6 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md">
                  <item.icon className="h-6 w-6 text-blue-500 mb-4" />
                  <h3 className="text-sm font-black text-white uppercase tracking-widest">{item.title}</h3>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-tight mt-1">{item.sub}</p>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-16 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/patient/book"
                className="group inline-flex items-center justify-center rounded-2xl bg-blue-600 px-10 py-5 text-[11px] font-black uppercase tracking-[0.2em] text-white shadow-2xl transition-all hover:bg-blue-500 hover:scale-105 active:scale-95"
              >
                Secure Appointment
                <ArrowRight className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-10 py-5 text-[11px] font-black uppercase tracking-[0.2em] text-white backdrop-blur-md hover:bg-white/10 transition-all"
              >
                Request Concierge
              </Link>
            </div>

            {/* Phone Link */}
            <div className="mt-12 flex items-center justify-center gap-3">
              <div className="h-[1px] w-8 bg-gray-800" />
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">
                Direct Line: <a href="tel:+15551234567" className="text-white hover:text-blue-500 transition-colors">(555) 123-4567</a>
              </p>
              <div className="h-[1px] w-8 bg-gray-800" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}