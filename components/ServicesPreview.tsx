'use client';

import { 
  Activity, Shield, Zap, Heart, Clock, Users, 
  ChevronRight, Sparkles, Microscope, Star 
} from 'lucide-react';
import { useRouter } from 'next/navigation';

const services = [
  {
    icon: Microscope,
    title: 'General Dentistry',
    description: 'Comprehensive dental care including checkups and 4K imaging diagnostics.',
    features: ['Checkups', 'Cleanings', 'Fillings', 'X-rays'],
    page: '/services/general'
  },
  {
    icon: Sparkles,
    title: 'Cosmetic Dentistry',
    description: 'Precision aesthetic treatments for a complete smile transformation.',
    features: ['Teeth Whitening', 'Veneers', 'Invisalign', 'Bonding'],
    page: '/services/cosmetic'
  },
  {
    icon: Zap,
    title: 'Emergency Care',
    description: 'Immediate clinical triage for trauma and severe restorative failures.',
    features: ['24/7 Availability', 'Extractions', 'Root Canals', 'Repairs'],
    page: '/services/emergency'
  },
  {
    icon: Shield,
    title: 'Preventive Care',
    description: 'Advanced protocols to maintain long-term structural integrity.',
    features: ['Sealants', 'Fluoride', 'Mouthguards', 'Cancer Screening'],
    page: '/services/preventive'
  },
];

const stats = [
  { icon: Users, value: '5,000+', label: 'Active Cases' },
  { icon: Clock, value: '24/7', label: 'Clinical Triage' },
  { icon: Star, value: '98%', label: 'Success Rate' },
  { icon: Activity, value: '15+', label: 'Years Active' },
];

export default function ServicesPreview() {
  const router = useRouter();

  const handleServiceClick = (page: string) => {
    router.push(page);
  };

  return (
    <section className="py-24 sm:py-32 bg-white font-sans antialiased overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-gray-100 pb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-blue-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4">
              <Activity className="h-3 w-3" /> Practice Scope
            </div>
            <h2 className="text-4xl font-[900] tracking-tighter text-gray-900 sm:text-6xl uppercase leading-[0.9]">
              Precision <br /> 
              <span className="text-blue-600">Dental Services.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm font-medium text-gray-400 leading-relaxed tracking-tight">
            Comprehensive dental care powered by the latest clinical technology and evidence-based protocols.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                onClick={() => handleServiceClick(service.page)}
                className="group relative flex flex-col rounded-[2.5rem] border border-gray-100 bg-white p-8 transition-all hover:-translate-y-2 hover:border-gray-900 hover:shadow-2xl hover:shadow-gray-200 cursor-pointer"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-900 text-white shadow-lg transition-colors group-hover:bg-blue-600">
                  <Icon className="h-6 w-6" />
                </div>
                
                <h3 className="mt-8 text-xl font-[900] tracking-tighter text-gray-900 uppercase">
                  {service.title}
                </h3>
                
                <p className="mt-4 text-sm font-medium text-gray-500 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="mt-8 space-y-3 flex-grow">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-[11px] font-bold uppercase tracking-widest text-gray-400">
                      <span className="mr-3 h-1.5 w-1.5 rounded-full bg-blue-500 group-hover:scale-150 transition-transform"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-10 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-900 group-hover:text-blue-600 transition-colors">
                  View Service Detail <ChevronRight className="h-3 w-3" />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button to All Services */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => router.push('/services')}
            className="group flex items-center gap-3 rounded-full bg-gray-900 px-8 py-4 text-sm font-black uppercase tracking-[0.2em] text-white hover:bg-blue-600 transition-all hover:shadow-2xl hover:shadow-blue-500/20"
          >
            <span>Explore All Services</span>
            <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Blueprint Stats Block */}
        <div className="relative mt-24 rounded-[4rem] bg-[#0a0a0b] p-12 lg:p-20 overflow-hidden">
          {/* Blueprint Grid Overlay */}
          <div className="absolute inset-0 opacity-10" 
               style={{ backgroundImage: `radial-gradient(#3b82f6 1px, transparent 1px)`, backgroundSize: '30px 30px' }}>
          </div>

          <div className="relative z-10 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10 mx-auto lg:mx-0">
                    <Icon className="h-6 w-6 text-blue-500" />
                  </div>
                  <div className="text-5xl font-[900] tracking-tighter text-white">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="relative z-10 mt-16 pt-8 border-t border-white/5 text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-500/50">
              Trusted Clinical Provider Since 2008
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}