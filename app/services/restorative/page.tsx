'use client';

import { 
  Activity, Calendar, CheckCircle, Clock, Users, 
  Shield, Award, ChevronRight, Zap, Star,
  Microscope, Heart
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const restorativeTreatments = [
  { 
    name: 'Composite Fillings', 
    duration: '30-60 min', 
    price: '$150-300', 
    description: 'Tooth-colored fillings that blend seamlessly with your natural teeth.',
    features: ['Metal-free', 'Aesthetic', 'Single visit', 'Durable'],
    icon: Star
  },
  { 
    name: 'Porcelain Crowns', 
    duration: '2 visits', 
    price: '$800-1,500', 
    description: 'Full-coverage restorations that restore function and appearance.',
    features: ['Custom-milled', 'Natural look', 'High strength', 'Long-lasting'],
    icon: Shield
  },
  { 
    name: 'Root Canal Therapy', 
    duration: '60-90 min', 
    price: '$800-1,200', 
    description: 'Saves infected teeth by removing damaged pulp and sealing the canal.',
    features: ['Pain-free', 'Single visit', 'Preserves tooth', 'Prevents extraction'],
    icon: Microscope
  },
  { 
    name: 'Dental Bridges', 
    duration: '2 visits', 
    price: '$1,500-3,000', 
    description: 'Fixed replacement for missing teeth using adjacent teeth for support.',
    features: ['Fixed solution', 'Restores chewing', 'Prevents shifting', 'Natural appearance'],
    icon: Heart
  },
];

const restorativeBenefits = [
  'Restores normal chewing and speaking function',
  'Prevents remaining teeth from shifting',
  'Maintains natural facial structure',
  'Prevents jaw joint problems',
  'Boosts confidence and self-esteem',
  'Long-lasting, durable solutions'
];

const materialsUsed = [
  { material: 'Composite Resin', use: 'Fillings, bonding', durability: '5-10 years', color: 'blue' },
  { material: 'Porcelain', use: 'Crowns, veneers', durability: '10-15 years', color: 'purple' },
  { material: 'Zirconia', use: 'Crowns, bridges', durability: '15+ years', color: 'green' },
  { material: 'Ceramic', use: 'Inlays, onlays', durability: '10-15 years', color: 'orange' }
];

export default function RestorativeDentistryPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 to-white py-24">
        <div className="absolute inset-0 bg-grid-emerald-100/20" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-emerald-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4">
                <Activity className="h-3 w-3" /> Restorative Dentistry
              </div>
              <h1 className="text-5xl sm:text-7xl font-[900] tracking-tighter text-gray-900 uppercase leading-[0.9]">
                Restore Your <br />
                <span className="text-emerald-600">Function & Beauty.</span>
              </h1>
              <p className="mt-6 text-lg font-medium text-gray-600">
                Repair damaged or missing teeth with our advanced restorative treatments. 
                We use state-of-the-art materials and techniques to restore both function and aesthetics.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => router.push('/book')}
                  className="group flex items-center justify-center gap-3 rounded-full bg-emerald-600 px-8 py-4 text-sm font-black uppercase tracking-[0.2em] text-white hover:bg-emerald-700 transition-all"
                >
                  <Calendar className="h-4 w-4" />
                  Consultation & Treatment Plan
                </button>
                <button
                  onClick={() => router.push('/contact')}
                  className="group flex items-center justify-center gap-3 rounded-full border-2 border-gray-200 px-8 py-4 text-sm font-black uppercase tracking-[0.2em] text-gray-900 hover:border-emerald-600 hover:text-emerald-600 transition-all"
                >
                  Insurance Verification
                </button>
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="rounded-[3rem] bg-white border border-gray-100 p-8 shadow-xl">
                <h3 className="text-xl font-[900] tracking-tighter text-gray-900 uppercase mb-6">
                  Restoration Facts
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-emerald-600" />
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Treatment Time</p>
                      <p className="text-sm font-bold text-gray-900">1-2 visits typically</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-emerald-600" />
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Specialists</p>
                      <p className="text-sm font-bold text-gray-900">3 Restorative Dentists</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-emerald-600" />
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Warranty</p>
                      <p className="text-sm font-bold text-gray-900">5-year warranty on crowns</p>
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
              Restorative Solutions
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Advanced treatments to repair and restore damaged teeth
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {restorativeTreatments.map((treatment) => {
              const Icon = treatment.icon;
              return (
                <div key={treatment.name} className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm hover:shadow-xl transition-shadow group">
                  <div className="flex items-center justify-between mb-6">
                    <div className="h-12 w-12 rounded-xl bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                      <Icon className="h-6 w-6 text-emerald-600 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full">
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
                    className="mt-8 w-full rounded-xl bg-gray-900 py-3 text-sm font-black uppercase tracking-widest text-white hover:bg-emerald-600 transition-colors"
                  >
                    Schedule Treatment
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits & Materials */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-[900] tracking-tighter text-gray-900 uppercase mb-8">
                Benefits of Restorative Dentistry
              </h2>
              <div className="space-y-4">
                {restorativeBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100">
                    <Award className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <p className="text-sm font-medium text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Materials */}
            <div>
              <h2 className="text-3xl font-[900] tracking-tighter text-gray-900 uppercase mb-8">
                Advanced Materials We Use
              </h2>
              <div className="space-y-4">
                {materialsUsed.map((material, index) => (
                  <div key={index} className="p-6 rounded-2xl bg-white border border-gray-100">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-[900] text-gray-900">{material.material}</h3>
                      <span className={`text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full ${
                        material.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                        material.color === 'purple' ? 'bg-purple-50 text-purple-600' :
                        material.color === 'green' ? 'bg-emerald-50 text-emerald-600' :
                        'bg-orange-50 text-orange-600'
                      }`}>
                        {material.durability}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600"><strong>Use:</strong> {material.use}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-600 p-12 text-white">
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="text-center">
                <Zap className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-[900] mb-2">Digital Impressions</h3>
                <p className="text-sm opacity-90">No messy traditional impressions</p>
              </div>
              <div className="text-center">
                <Microscope className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-[900] mb-2">CEREC Technology</h3>
                <p className="text-sm opacity-90">Same-day crowns in one visit</p>
              </div>
              <div className="text-center">
                <Shield className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-[900] mb-2">3D Imaging</h3>
                <p className="text-sm opacity-90">Precise treatment planning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0a0a0b] rounded-[4rem] mx-6 lg:mx-8 mb-24">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-emerald-400 font-black text-[10px] uppercase tracking-[0.3em] mb-4">
            <Activity className="h-3 w-3" /> Restore Your Smile Today
          </div>
          <h2 className="text-4xl font-[900] tracking-tighter text-white mb-6">
            Ready to Regain Your Complete Smile?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Don't let damaged or missing teeth affect your quality of life. 
            Our restorative treatments will help you eat, speak, and smile with confidence again.
          </p>
          <button
            onClick={() => router.push('/book')}
            className="group flex items-center justify-center gap-3 rounded-full bg-emerald-600 px-12 py-5 text-sm font-black uppercase tracking-[0.2em] text-white hover:bg-emerald-700 transition-all mx-auto"
          >
            <Calendar className="h-5 w-5" />
            Book Restoration Consultation
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