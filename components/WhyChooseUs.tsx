'use client';

import { 
  Award, Clock, Shield, Users, DollarSign, Heart, 
  Stethoscope, Zap, Microscope, GraduationCap, CheckCircle2 
} from 'lucide-react';

const features = [
  {
    icon: GraduationCap,
    title: 'Expert Faculty',
    description: 'Our board-certified clinicians maintain active research roles in restorative dentistry.',
  },
  {
    icon: Clock,
    title: 'Precision Scheduling',
    description: 'Extended clinical hours designed for high-performance professional schedules.',
  },
  {
    icon: Microscope,
    title: 'Diagnostic Tech',
    description: 'Low-radiation 3D CBCT imaging and AI-driven cavity detection protocols.',
  },
  {
    icon: Users,
    title: 'Generational Care',
    description: 'Specialized clinical tracks for pediatric growth and geriatric oral health.',
  },
  {
    icon: DollarSign,
    title: 'Financial Clarity',
    description: 'Direct-to-insurance billing with itemized clinical transparency.',
  },
  {
    icon: Heart,
    title: 'Patient Comfort',
    description: 'Neurological sedation options for patients with severe dental anxiety.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-40 bg-[#fafafa] font-sans antialiased overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-start">
          
          {/* LEFT COLUMN: BRAND STORY */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600 text-[10px] font-black uppercase tracking-[0.3em] text-white mb-6">
                <Shield className="h-3 w-3" /> Quality Assurance
              </div>
              <h2 className="text-5xl font-[900] tracking-tighter text-gray-900 sm:text-7xl uppercase leading-[0.85]">
                The Standard <br />
                <span className="text-blue-600">Of Trust.</span>
              </h2>
              <p className="mt-8 text-xl font-medium text-gray-500 leading-relaxed tracking-tight">
                At Bright Smile Valencia, we’ve replaced the "dental office" stigma with a 
                high-efficiency clinical environment where technology serves humanity.
              </p>
            </div>

            {/* FOUNDER QUOTE BLOCK */}
            <div className="relative rounded-[3rem] bg-white p-10 border border-gray-100 shadow-xl shadow-gray-200/50">
              <div className="flex items-center gap-6 mb-6">
                <div className="h-20 w-20 overflow-hidden rounded-3xl bg-gray-100 border border-gray-200">
                  {/* Placeholder for Dr. Sarah Johnson */}
                  <div className="h-full w-full bg-gradient-to-br from-blue-500 to-blue-700 opacity-80" />
                </div>
                <div>
                  <h3 className="text-xl font-black tracking-tighter text-gray-900 uppercase">Dr. Sarah Johnson</h3>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-blue-600">Chief Medical Officer</p>
                </div>
              </div>
              <p className="text-lg font-medium italic text-gray-600 leading-snug">
                "Precision is non-negotiable. Our mission is to provide an environment where 
                the clinical results are as flawless as the patient experience."
              </p>
              <div className="mt-6 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <CheckCircle2 key={i} className="h-4 w-4 text-blue-600" />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: FEATURES GRID */}
          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="group rounded-[2.5rem] bg-white p-8 border border-gray-100 transition-all hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-500/5"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-50 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <Icon className="h-5 w-5 text-gray-900 group-hover:text-white" />
                    </div>
                    <h3 className="mt-6 text-lg font-black tracking-tight text-gray-900 uppercase">{feature.title}</h3>
                    <p className="mt-3 text-sm font-medium text-gray-400 leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>

            {/* THE PROMISE (Blueprint Style) */}
            <div className="mt-12 relative overflow-hidden rounded-[3rem] bg-gray-900 p-10 text-white">
              {/* Subtle blueprint grid */}
              <div className="absolute inset-0 opacity-10" 
                   style={{ backgroundImage: `radial-gradient(#3b82f6 1px, transparent 1px)`, backgroundSize: '20px 20px' }} />
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div>
                  <h3 className="text-2xl font-black tracking-tighter uppercase">Clinical Promise</h3>
                  <p className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.3em] mt-1">Guaranteed Protocols</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
                  {[
                    'Same-Day Emergency Triage',
                    'Biomimetic Materials Only',
                    'Zero-Radiation Digital Scans',
                    'Transparent Itemized Quotes'
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-gray-300">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}