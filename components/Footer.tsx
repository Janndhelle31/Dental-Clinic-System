'use client';

import { 
  Facebook, Twitter, Instagram, Mail, Phone, MapPin, 
  Clock, Shield, Activity, ChevronRight 
} from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const quickLinks = [
    { name: 'Clinical Home', href: '/' },
    { name: 'Medical Faculty', href: '/about' },
    { name: 'Scope of Services', href: '/services' },
    { name: 'Patient Portal', href: '/login' },
    { name: 'Clinical Inquiries', href: '/contact' },
  ];

  const services = [
    'Biomimetic Restoration',
    'Orthodontic Braces',
    'Dental Implantology',
    'Oral & Maxillofacial Surgery',
    'Pediatric Dentistry',
    'Emergency Dental Triage',
  ];

  return (
    <footer className="bg-[#0a0a0b] text-white font-sans antialiased border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          
          {/* 1. CLINIC IDENTITY */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-[900] tracking-tighter uppercase leading-none">
                  Bright Smile <br />
                  <span className="text-blue-500">Valencia.</span>
                </h2>
              </div>
            </div>
            <p className="max-w-xs text-sm font-medium leading-relaxed text-gray-500 tracking-tight">
              Bukidnon's premier multi-disciplinary hub bridging clinical engineering with high-performance patient outcomes. Serving the City of Golden Harvest since 2008.
            </p>
            <div className="flex space-x-5">
              {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="h-10 w-10 flex items-center justify-center rounded-full border border-white/10 text-gray-500 hover:text-blue-500 hover:border-blue-500 transition-all">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* 2. NAVIGATION */}
          <div className="lg:col-span-2">
            <h3 className="text-[10px] font-[900] uppercase tracking-[0.4em] text-blue-500 mb-8">Directories</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="group flex items-center text-xs font-bold text-gray-400 hover:text-white transition-colors">
                    <ChevronRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-blue-500" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. CLINICAL SCOPE */}
          <div className="lg:col-span-3">
            <h3 className="text-[10px] font-[900] uppercase tracking-[0.4em] text-blue-500 mb-8">Clinical Scope</h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service} className="text-xs font-bold text-gray-400">
                  <span className="text-blue-500/50 mr-2 font-mono">//</span> {service}
                </li>
              ))}
            </ul>
          </div>

          {/* 4. CLINIC TERMINAL (VALENCIA DETAILS) */}
          <div className="lg:col-span-3">
            <h3 className="text-[10px] font-[900] uppercase tracking-[0.4em] text-blue-500 mb-8">Operations</h3>
            <div className="space-y-6 rounded-[2rem] bg-white/5 border border-white/10 p-6 backdrop-blur-md">
              <div className="flex gap-4">
                <MapPin className="h-4 w-4 text-blue-500" />
                <div className="text-[11px] font-bold text-gray-300 leading-relaxed uppercase tracking-wider">
                  Sayre Highway, Poblacion <br /> Valencia City, Bukidnon 8709
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-4 w-4 text-blue-500" />
                <a href="tel:+63888287777" className="text-[11px] font-bold text-gray-300 hover:text-blue-500 transition-colors uppercase tracking-widest">
                  (088) 828-7777
                </a>
              </div>
              <div className="pt-4 border-t border-white/10 space-y-2">
                <div className="flex justify-between text-[10px] font-black uppercase tracking-tighter">
                  <span className="text-gray-500">Mon-Sat</span>
                  <span className="text-gray-300">09:00 — 17:00</span>
                </div>
                <div className="flex justify-between text-[10px] font-black uppercase tracking-tighter">
                  <span className="text-gray-500">Sunday</span>
                  <span className="text-gray-300">By Appointment</span>
                </div>
                <div className="flex justify-between text-[10px] font-black uppercase tracking-tighter">
                  <span className="text-blue-500">Emergency</span>
                  <span className="text-blue-500">24/7 On-Call</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-20 pt-8 border-t border-white/5">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600">
              © {new Date().getFullYear()} Bright Smile Valencia. PRC Licensed Facility
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {['Data Privacy', 'Terms', 'DOH Accredited'].map((item) => (
                <a key={item} href="#" className="text-[10px] font-bold uppercase tracking-widest text-gray-600 hover:text-white transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-8 flex justify-center items-center gap-2">
            <Activity className="h-3 w-3 text-blue-600" />
            <p className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-700">
              Secure Patient Portal • Valencia City Health Office Registered
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}