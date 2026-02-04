'use client';

import { 
  Shield, Heart, Microscope, GraduationCap, 
  Sparkles, Award, ChevronRight, Landmark, 
  Stethoscope, Star, Activity, Clock
} from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  const team = [
    { name: 'Dr. Sarah Johnson', role: 'Medical Director', specialty: 'Cosmetic & Aesthetic Dentistry', credentials: 'DDS, NYU Dental' },
    { name: 'Dr. Michael Chen', role: 'Senior Orthodontist', specialty: 'Dento-facial Orthopedics', credentials: 'DDS, Harvard' },
    { name: 'Dr. Emily Rodriguez', role: 'Pediatric Specialist', specialty: 'Early Growth Development', credentials: 'DDS, UCLA' },
    { name: 'Dr. James Wilson', role: 'Lead Surgeon', specialty: 'Maxillofacial & Implantology', credentials: 'DDS, MD' },
  ];

  const values = [
    { icon: Shield, title: 'Total Integrity', description: 'Evidence-based diagnosis with zero-pressure treatment consultations.' },
    { icon: Heart, title: 'Patient Empathy', description: 'Treating the person, not the procedure. We specialize in dental anxiety.' },
    { icon: Microscope, title: 'Clinical Precision', description: 'Investing in 3D imaging and laser tech for microscopic accuracy.' },
    { icon: GraduationCap, title: 'Board Expertise', description: 'A multi-specialty team with over 45 combined years of surgery.' },
  ];

  const stats = [
    { label: 'Clinical Years', value: '15+', sub: 'Established 2008' },
    { label: 'Patient Smiles', value: '5k+', sub: 'Successful Cases' },
    { label: 'Specialties', value: '04', sub: 'Internal Hub' },
    { label: 'Satisfaction', value: '98%', sub: 'Verified Reviews' },
  ];

  // FIXED: More reliable image URLs
  const teamImages = [
    'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500', // Dr. Sarah Johnson
    'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500', // Dr. Michael Chen
    'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=500', // Dr. Emily Rodriguez - NEW URL
    'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=500', // Dr. James Wilson
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-blue-100">
      
      {/* 1. DYNAMIC HERO SECTION */}
      <div className="relative overflow-hidden bg-gray-900 py-24 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 ring-1 ring-inset ring-blue-500/20 mb-8">
            <Activity className="h-3 w-3" /> Clinical Heritage
          </div>
          <h1 className="text-5xl font-black tracking-tighter sm:text-7xl">
            A Legacy of <span className="text-blue-500">Excellence.</span><br />
            Modern Innovation.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg font-medium text-gray-400 leading-relaxed">
            Bridging decades of clinical precision with compassionate, human-centric care—where 
            heritage meets the latest in dental technology and patient experience.
          </p>
        </div>
      </div>

      {/* 2. SUB-NAV STICKY (Uniform with Services Page) */}
      <div className="sticky top-0 z-40 border-b border-gray-100 bg-white/80 backdrop-blur-md hidden md:block">
        <div className="mx-auto max-w-7xl px-8 py-4">
          <div className="flex justify-center gap-12">
            {['The Foundation', 'Core Values', 'Medical Board', 'Accreditations'].map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase().replace(' ', '-')}`} 
                className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-black transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* 3. STORY SECTION with Image */}
      <div id="the-foundation" className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32 scroll-mt-24">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">Established 2008</h2>
              <h3 className="text-4xl font-black tracking-tight text-gray-900 sm:text-5xl">The Bright Smile Story</h3>
            </div>
            <div className="space-y-6 text-lg font-medium leading-relaxed text-gray-500">
              <p>
                Founded by Dr. Sarah Johnson, our practice began as a boutique studio with a 
                singular vision: to prove that high-end dentistry doesn't have to be intimidating.
              </p>
              <div className="rounded-3xl bg-gray-50 p-8 border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                   <Activity className="h-24 w-24 text-blue-600" />
                </div>
                <p className="italic text-gray-900 font-bold relative z-10">
                  "We don't just restore anatomy; we restore the confidence that allows our patients 
                  to engage with the world fully."
                </p>
              </div>
              <p>
                Today, we have evolved into a multi-specialty hub, housing surgeons, orthodontists, 
                and cosmetic experts under one roof to ensure seamless, collaborative care.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            {/* Dummy Image using Unsplash */}
            <div className="relative rounded-[2.5rem] overflow-hidden mb-8 aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=800&h=600&fit=crop"
                alt="Modern dental clinic interior"
                width={800}
                height={600}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-xs font-bold text-white/80">Bright Smile Valencia • Since 2008</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-[2.5rem] bg-gray-900 p-8 border border-gray-800 transition-all hover:bg-blue-600 group">
                  <div className="text-4xl font-black tracking-tighter text-white group-hover:text-white transition-colors">
                    {stat.value}
                  </div>
                  <div className="mt-4 text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-white/80">
                    {stat.label}
                  </div>
                  <div className="mt-1 text-[10px] font-bold text-gray-500 group-hover:text-white/60">
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4. CORE PHILOSOPHY (Grid Logic matches Services) */}
      <div id="core-values" className="bg-gray-50 py-24 lg:py-32 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-16 border-b border-gray-200 pb-8 flex items-end justify-between">
             <div className="space-y-2">
                <h2 className="text-3xl font-black tracking-tight text-gray-900">Core Philosophy</h2>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Clinical Governance</p>
             </div>
             <div className="relative h-20 w-20 rounded-full overflow-hidden hidden sm:block">
               <Image
                 src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=200&fit=crop"
                 alt="Dental award"
                 width={200}
                 height={200}
                 className="object-cover w-full h-full"
               />
               <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-blue-600/30 flex items-center justify-center">
                 <Award className="h-10 w-10 text-white" />
               </div>
             </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="group p-8 rounded-[2.5rem] bg-white border border-gray-100 hover:border-gray-900 transition-all shadow-sm hover:shadow-xl">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-900 text-white shadow-xl group-hover:bg-blue-600 transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-black text-gray-900 tracking-tight">{value.title}</h4>
                  <p className="mt-4 text-sm font-medium leading-relaxed text-gray-500">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 5. CLINICAL BOARD (Card styling matches Service Items) */}
      <div id="medical-board" className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32 scroll-mt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">The Experts</h2>
            <h3 className="text-4xl font-black tracking-tight text-gray-900 sm:text-5xl">Medical Board</h3>
          </div>
          <p className="max-w-md text-sm font-medium text-gray-500">
            Our clinicians are board-certified specialists with advanced training in 
            digital dentistry and minimally invasive protocols.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <div key={member.name} className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-gray-100 border border-gray-100 relative mb-8 transition-all group-hover:shadow-2xl group-hover:shadow-blue-500/10">
                <Image
                  src={teamImages[index]}
                  alt={member.name}
                  width={400}
                  height={500}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                  <span className="text-[10px] font-black uppercase tracking-widest text-white">{member.credentials}</span>
                  <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
              <div className="space-y-1 px-2">
                <h3 className="text-xl font-black tracking-tight text-gray-900 group-hover:text-blue-600 transition-colors">{member.name}</h3>
                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-gray-400">{member.role}</p>
                <div className="pt-2 flex items-center gap-2 text-[10px] font-bold text-gray-500">
                  <Star className="h-3 w-3 text-blue-500 fill-blue-500" /> Specialist
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6. ACCREDITATIONS SECTION with Images - FIXED URL */}
      <div id="accreditations" className="bg-gray-50 py-24 lg:py-32 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mb-4">Certifications</h2>
            <h3 className="text-4xl font-black tracking-tight text-gray-900 sm:text-5xl">Accreditations & Partnerships</h3>
            <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-gray-500">
              Our commitment to excellence is recognized by leading dental associations and institutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'ADA Certified', image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=300&h=300&fit=crop' },
              { name: 'ISO 9001:2015', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=300&fit=crop' },
              { name: 'Clinical Excellence', image: 'https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?w=300&h=300&fit=crop' }, // ← FIXED URL
              { name: 'Safety Certified', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300&h=300&fit=crop' }
            ].map((cert, index) => (
              <div key={index} className="bg-white rounded-[2rem] p-8 border border-gray-100 hover:border-gray-900 transition-all shadow-sm hover:shadow-lg">
                <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center mb-6 overflow-hidden">
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h4 className="text-lg font-black text-gray-900 text-center">{cert.name}</h4>
                <p className="mt-2 text-sm text-gray-500 text-center">Issued 2023 • Valid through 2026</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 7. TECHNOLOGY SECTION */}
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop"
                alt="Advanced dental technology"
                width={800}
                height={600}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent" />
            </div>
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">Technology Integration</h2>
              <h3 className="text-4xl font-black tracking-tight text-gray-900">Digital Dentistry Lab</h3>
            </div>
            <div className="space-y-6 text-lg font-medium leading-relaxed text-gray-500">
              <p>
                Our on-site digital lab features state-of-the-art 3D imaging, CAD/CAM technology, 
                and intraoral scanners for same-day restorations.
              </p>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Microscope className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Precision Imaging</p>
                  <p className="text-sm text-gray-500 mt-1">Digital X-rays with 90% less radiation than traditional systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 8. UNIFORM CTA (Consistent with Services/Contact) */}
      <div className="mx-4 mb-8">
        <div className="rounded-[4rem] bg-blue-600 py-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] opacity-10 [background-size:20px_20px]" />
          <div className="relative z-10 px-6">
            <h2 className="text-4xl font-black tracking-tighter text-white sm:text-6xl">
              Experience the Bright <br /> Smile Difference.
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-lg font-medium text-blue-100 leading-relaxed">
              We are currently accepting new private and insurance-based patients. 
              Diagnostic consultations available this week.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/patient/book"
                className="inline-flex items-center justify-center rounded-2xl bg-black px-12 py-5 text-xs font-black uppercase tracking-widest text-white shadow-2xl transition-all hover:scale-105 active:scale-95"
              >
                Secure Appointment
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-white/10 px-12 py-5 text-xs font-black uppercase tracking-widest text-white backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all"
              >
                Clinic Inquiries
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}