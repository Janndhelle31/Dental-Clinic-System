'use client';

import { 
  Shield, Calendar, CheckCircle, Clock, Users, 
  Award, ChevronRight, Microscope, Heart, Star,
  Activity, Zap
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const preventiveTreatments = [
  { 
    name: 'Comprehensive Checkup', 
    duration: '45-60 min', 
    price: '$80-120', 
    description: 'Complete oral examination including 4K imaging and oral cancer screening.',
    features: ['Digital X-rays', 'Oral cancer screening', 'Gum health assessment', 'Treatment planning'],
    icon: Microscope
  },
  { 
    name: 'Professional Cleaning', 
    duration: '30-45 min', 
    price: '$100-150', 
    description: 'Deep cleaning to remove plaque, tartar, and surface stains.',
    features: ['Scaling', 'Polishing', 'Fluoride treatment', 'Oral hygiene coaching'],
    icon: Shield
  },
  { 
    name: 'Fluoride Treatment', 
    duration: '15 min', 
    price: '$40-60', 
    description: 'Strengthens tooth enamel and provides protection against decay.',
    features: ['Quick application', 'Long-lasting protection', 'Safe for all ages', 'Tasty flavors'],
    icon: Zap
  },
  { 
    name: 'Dental Sealants', 
    duration: '30 min', 
    price: '$50-80/tooth', 
    description: 'BPA-free protective coating applied to chewing surfaces of molars.',
    features: ['Painless procedure', 'Lasts for years', 'Great for children', 'Prevents cavities'],
    icon: Heart
  },
];

const preventionTips = [
  'Brush twice daily with fluoride toothpaste',
  'Floss at least once per day',
  'Use antibacterial mouthwash',
  'Replace toothbrush every 3 months',
  'Limit sugary foods and drinks',
  'Drink plenty of water',
  'Avoid tobacco products',
  'Wear mouthguard during sports'
];

const screeningSchedule = [
  { age: 'Children (0-12)', frequency: 'Every 6 months', focus: 'Growth monitoring, sealants' },
  { age: 'Teens (13-19)', frequency: 'Every 6 months', focus: 'Orthodontic assessment, wisdom teeth' },
  { age: 'Adults (20-64)', frequency: 'Every 6 months', focus: 'Gum health, oral cancer screening' },
  { age: 'Seniors (65+)', frequency: 'Every 4-6 months', focus: 'Dry mouth, root decay, dentures' }
];

export default function PreventiveCarePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white py-24">
        <div className="absolute inset-0 bg-grid-blue-100/20" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-blue-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4">
                <Shield className="h-3 w-3" /> Preventive Dentistry
              </div>
              <h1 className="text-5xl sm:text-7xl font-[900] tracking-tighter text-gray-900 uppercase leading-[0.9]">
                Protect Your <br />
                <span className="text-blue-600">Smile.</span>
              </h1>
              <p className="mt-6 text-lg font-medium text-gray-600">
                Prevent dental problems before they start with our comprehensive preventive care program. 
                Regular checkups and cleanings are your best defense against tooth decay and gum disease.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => router.push('/book')}
                  className="group flex items-center justify-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-sm font-black uppercase tracking-[0.2em] text-white hover:bg-blue-700 transition-all"
                >
                  <Calendar className="h-4 w-4" />
                  Schedule Checkup
                </button>
                <button
                  onClick={() => router.push('/contact')}
                  className="group flex items-center justify-center gap-3 rounded-full border-2 border-gray-200 px-8 py-4 text-sm font-black uppercase tracking-[0.2em] text-gray-900 hover:border-blue-600 hover:text-blue-600 transition-all"
                >
                  Family Plan Inquiry
                </button>
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="rounded-[3rem] bg-white border border-gray-100 p-8 shadow-xl">
                <h3 className="text-xl font-[900] tracking-tighter text-gray-900 uppercase mb-6">
                  Prevention Facts
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Frequency</p>
                      <p className="text-sm font-bold text-gray-900">Every 6 months recommended</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Coverage</p>
                      <p className="text-sm font-bold text-gray-900">100% covered by most insurance</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Success Rate</p>
                      <p className="text-sm font-bold text-gray-900">Prevents 95% of dental issues</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-[900] tracking-tighter text-gray-900 uppercase">
              Preventive Services
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Comprehensive care to maintain optimal oral health
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {preventiveTreatments.map((treatment) => {
              const Icon = treatment.icon;
              return (
                <div key={treatment.name} className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm hover:shadow-xl transition-shadow group">
                  <div className="flex items-center justify-between mb-6">
                    <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <Icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
                      {treatment.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-[900] tracking-tighter text-gray-900 uppercase">
                    {treatment.name}
                  </h3>
                  <p className="mt-4 text-sm text-gray-500">{treatment.description}</p>
                  <p className="mt-4 text-2xl font-black text-gray-900">{treatment.price}</p>
                  <ul className="mt-6 space-y-2">
                    {treatment.features.map((item, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-500">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => router.push('/book')}
                    className="mt-8 w-full rounded-xl bg-gray-900 py-3 text-sm font-black uppercase tracking-widest text-white hover:bg-blue-600 transition-colors"
                  >
                    Book Service
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Prevention Tips & Schedule */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Prevention Tips */}
            <div>
              <h2 className="text-3xl font-[900] tracking-tighter text-gray-900 uppercase mb-8">
                Daily Prevention Tips
              </h2>
              <div className="space-y-4">
                {preventionTips.map((tip, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100">
                    <Star className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                    <p className="text-sm font-medium text-gray-700">{tip}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Screening Schedule */}
            <div>
              <h2 className="text-3xl font-[900] tracking-tighter text-gray-900 uppercase mb-8">
                Recommended Screening Schedule
              </h2>
              <div className="space-y-4">
                {screeningSchedule.map((item, index) => (
                  <div key={index} className="p-6 rounded-2xl bg-white border border-gray-100">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-[900] text-gray-900">{item.age}</h3>
                      <span className="text-xs font-black uppercase tracking-widest bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
                        {item.frequency}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{item.focus}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0a0a0b] rounded-[4rem] mx-6 lg:mx-8 mb-24">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-blue-400 font-black text-[10px] uppercase tracking-[0.3em] mb-4">
            <Shield className="h-3 w-3" /> Prevention is Better Than Cure
          </div>
          <h2 className="text-4xl font-[900] tracking-tighter text-white mb-6">
            Start Your Prevention Journey
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Regular preventive care saves you time, money, and discomfort in the long run. 
            Our preventive plans are designed to keep your smile healthy for life.
          </p>
          <button
            onClick={() => router.push('/book')}
            className="group flex items-center justify-center gap-3 rounded-full bg-blue-600 px-12 py-5 text-sm font-black uppercase tracking-[0.2em] text-white hover:bg-blue-700 transition-all mx-auto"
          >
            <Calendar className="h-5 w-5" />
            Schedule Preventive Checkup
          </button>
        </div>
      </section>

      {/* Back to Services */}
      <div className="py-12 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link 
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-gray-400 hover:text-gray-900 transition-colors"
          >
            <ChevronRight className="h-4 w-4 rotate-180" />
            Back to All Services
          </Link>
        </div>
      </div>
    </div>
  );
}