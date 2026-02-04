'use client';

import { 
  Sparkles, Calendar, CheckCircle, Clock, Users, 
  Shield, Award, ChevronRight, Star, Heart,
  Smile, Zap, Activity
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const cosmeticTreatments = [
  { 
    name: 'Teeth Whitening', 
    duration: '60 min', 
    price: '$300-500', 
    description: 'Professional-grade laser whitening for immediate, dramatic results.',
    features: ['Immediate results', 'Custom trays', 'Enamel-safe', 'In-office treatment'],
    icon: Sparkles
  },
  { 
    name: 'Porcelain Veneers', 
    duration: '2 visits', 
    price: '$800-2,000/tooth', 
    description: 'Hand-crafted ceramic shells for a complete smile transformation.',
    features: ['Stain-resistant', 'Natural translucency', 'Perfect alignment', 'Custom shade'],
    icon: Star
  },
  { 
    name: 'Invisalign®', 
    duration: '12-18 months', 
    price: '$3,000+', 
    description: 'Clear, removable aligners to straighten teeth without metal brackets.',
    features: ['Nearly invisible', 'Removable', 'Digital mapping', 'Comfortable'],
    icon: Heart
  },
  { 
    name: 'Dental Bonding', 
    duration: '30-60 min', 
    price: '$300-600', 
    description: 'Composite resin application to repair chips, cracks, or gaps.',
    features: ['Single visit', 'Tooth-colored', 'Minimal prep', 'Affordable'],
    icon: Smile
  },
];

const benefits = [
  'Boosts self-confidence and appearance',
  'Stain-resistant materials used',
  'Natural-looking results',
  'Minimally invasive procedures',
  'Long-lasting solutions',
  'Customized to your smile'
];

const beforeAfter = [
  'Discolored teeth → Bright, white smile',
  'Gapped teeth → Seamless alignment',
  'Chipped teeth → Restored shape',
  'Misshapen teeth → Perfect contours',
  'Uneven teeth → Harmonious smile line',
  'Old restorations → Natural-looking results'
];

export default function CosmeticDentistryPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 to-white py-24">
        <div className="absolute inset-0 bg-grid-purple-100/20" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-purple-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4">
                <Sparkles className="h-3 w-3" /> Cosmetic Dentistry
              </div>
              <h1 className="text-5xl sm:text-7xl font-[900] tracking-tighter text-gray-900 uppercase leading-[0.9]">
                Transform Your <br />
                <span className="text-purple-600">Smile.</span>
              </h1>
              <p className="mt-6 text-lg font-medium text-gray-600">
                Achieve the smile you've always wanted with our advanced cosmetic dental treatments. 
                From whitening to complete smile makeovers, we create beautiful, natural-looking results.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => router.push('/book')}
                  className="group flex items-center justify-center gap-3 rounded-full bg-purple-600 px-8 py-4 text-sm font-black uppercase tracking-[0.2em] text-white hover:bg-purple-700 transition-all"
                >
                  <Calendar className="h-4 w-4" />
                  Book Consultation
                </button>
                <button
                  onClick={() => router.push('/contact')}
                  className="group flex items-center justify-center gap-3 rounded-full border-2 border-gray-200 px-8 py-4 text-sm font-black uppercase tracking-[0.2em] text-gray-900 hover:border-purple-600 hover:text-purple-600 transition-all"
                >
                  View Before & After
                </button>
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="rounded-[3rem] bg-white border border-gray-100 p-8 shadow-xl">
                <h3 className="text-xl font-[900] tracking-tighter text-gray-900 uppercase mb-6">
                  Quick Facts
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-purple-600" />
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Duration</p>
                      <p className="text-sm font-bold text-gray-900">1-2 visits typically</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-purple-600" />
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Specialists</p>
                      <p className="text-sm font-bold text-gray-900">2 Cosmetic Dentists</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-purple-600" />
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Results</p>
                      <p className="text-sm font-bold text-gray-900">Immediate to 2 weeks</p>
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
              Smile Enhancement Options
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Choose from our range of cosmetic procedures to achieve your dream smile
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cosmeticTreatments.map((treatment) => {
              const Icon = treatment.icon;
              return (
                <div key={treatment.name} className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm hover:shadow-xl transition-shadow group">
                  <div className="flex items-center justify-between mb-6">
                    <div className="h-12 w-12 rounded-xl bg-purple-50 flex items-center justify-center group-hover:bg-purple-600 transition-colors">
                      <Icon className="h-6 w-6 text-purple-600 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest bg-purple-50 text-purple-600 px-3 py-1 rounded-full">
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
                    className="mt-8 w-full rounded-xl bg-gray-900 py-3 text-sm font-black uppercase tracking-widest text-white hover:bg-purple-600 transition-colors"
                  >
                    Get Quote
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits & Before/After Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-[900] tracking-tighter text-gray-900 uppercase mb-8">
                Why Choose Cosmetic Dentistry?
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100">
                    <Award className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                    <p className="text-sm font-medium text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Before & After */}
            <div>
              <h2 className="text-3xl font-[900] tracking-tighter text-gray-900 uppercase mb-8">
                Transformation Examples
              </h2>
              <div className="space-y-4">
                {beforeAfter.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100">
                    <div className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-red-500" />
                      <span className="text-xs font-black text-gray-400">Before</span>
                    </div>
                    <span className="text-sm font-medium text-gray-500">{item.split(' → ')[0]}</span>
                    <ChevronRight className="h-4 w-4 text-gray-300 mx-2" />
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-green-500" />
                      <span className="text-xs font-black text-gray-400">After</span>
                    </div>
                    <span className="text-sm font-medium text-gray-900 font-bold">{item.split(' → ')[1]}</span>
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
          <div className="inline-flex items-center gap-2 text-purple-400 font-black text-[10px] uppercase tracking-[0.3em] mb-4">
            <Star className="h-3 w-3" /> Smile Design Consultation
          </div>
          <h2 className="text-4xl font-[900] tracking-tighter text-white mb-6">
            Design Your Perfect Smile
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Schedule a digital smile design consultation where we'll show you exactly what your new smile will look like before treatment begins.
          </p>
          <button
            onClick={() => router.push('/book')}
            className="group flex items-center justify-center gap-3 rounded-full bg-purple-600 px-12 py-5 text-sm font-black uppercase tracking-[0.2em] text-white hover:bg-purple-700 transition-all mx-auto"
          >
            <Calendar className="h-5 w-5" />
            Book Smile Design
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