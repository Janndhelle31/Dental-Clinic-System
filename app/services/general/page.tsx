'use client';

import { 
  Microscope, Calendar, CheckCircle, Clock, Users, 
  Shield, Award, ChevronRight, Activity, FileText,
  Zap, Sparkles, Star
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const treatments = [
  { 
    name: 'Checkup & Cleaning', 
    duration: '45-60 min', 
    price: '$80-120', 
    features: ['X-rays included', 'Oral cancer screening', 'Plaque removal'],
    icon: Shield
  },
  { 
    name: 'Fluoride Treatment', 
    duration: '15 min', 
    price: '$40-60', 
    features: ['Quick application', 'Long-lasting protection', 'Safe for all ages'],
    icon: Zap
  },
  { 
    name: 'Dental Sealants', 
    duration: '30 min', 
    price: '$50-80', 
    features: ['Painless procedure', 'Lasts for years', 'Great for children'],
    icon: Sparkles
  },
  { 
    name: 'Dental Fillings', 
    duration: '30-60 min', 
    price: '$150-300', 
    features: ['Tooth-colored', 'Metal-free', 'Single visit'],
    icon: CheckCircle
  },
];

const benefits = [
  'Prevents tooth decay and gum disease',
  'Early detection of oral cancer',
  'Maintains optimal oral health',
  'Prevents bad breath',
  'Saves money on extensive treatments',
  'Preserves natural teeth'
];

const faqs = [
  {
    question: 'How often should I get a dental checkup?',
    answer: 'We recommend a professional checkup and cleaning every 6 months for optimal oral health maintenance.'
  },
  {
    question: 'Are dental X-rays safe?',
    answer: 'Yes, we use digital X-rays that emit 80-90% less radiation than traditional film X-rays.'
  },
  {
    question: 'What happens during a cleaning?',
    answer: 'Professional cleaning includes plaque and tartar removal, polishing, and fluoride treatment.'
  },
  {
    question: 'Do you accept insurance?',
    answer: 'Yes, we accept most major dental insurance plans and can handle the claims process for you.'
  }
];

export default function GeneralDentistryPage() {
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
                <Microscope className="h-3 w-3" /> General Dentistry
              </div>
              <h1 className="text-5xl sm:text-7xl font-[900] tracking-tighter text-gray-900 uppercase leading-[0.9]">
                Preventive <br />
                <span className="text-blue-600">Care & Maintenance.</span>
              </h1>
              <p className="mt-6 text-lg font-medium text-gray-600">
                Complete dental health solutions including preventive care, restorative treatments, and routine checkups to maintain your optimal oral health.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => router.push('/book')}
                  className="group flex items-center justify-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-sm font-black uppercase tracking-[0.2em] text-white hover:bg-blue-700 transition-all"
                >
                  <Calendar className="h-4 w-4" />
                  Book Checkup
                </button>
                <button
                  onClick={() => router.push('/contact')}
                  className="group flex items-center justify-center gap-3 rounded-full border-2 border-gray-200 px-8 py-4 text-sm font-black uppercase tracking-[0.2em] text-gray-900 hover:border-blue-600 transition-all"
                >
                  Speak to Specialist
                </button>
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="rounded-[3rem] bg-white border border-gray-100 p-8 shadow-xl">
                <h3 className="text-xl font-[900] tracking-tighter text-gray-900 uppercase mb-6">
                  Treatment Quick Facts
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Duration</p>
                      <p className="text-sm font-bold text-gray-900">30-60 minutes</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Specialists</p>
                      <p className="text-sm font-bold text-gray-900">3 Dentists Available</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Coverage</p>
                      <p className="text-sm font-bold text-gray-900">Most Insurance Accepted</p>
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
              Available Treatments
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive range of general dental procedures
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {treatments.map((treatment) => {
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
                    Book Now
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-[900] tracking-tighter text-gray-900 uppercase">
              Why Choose General Dentistry?
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-gray-100">
                <Award className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-sm font-medium text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-4xl font-[900] tracking-tighter text-gray-900 uppercase text-center mb-16">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-2xl border border-gray-100 p-8 hover:border-blue-200 transition-colors">
                <h3 className="text-lg font-[900] text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0a0a0b] rounded-[4rem] mx-6 lg:mx-8 mb-24">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-blue-400 font-black text-[10px] uppercase tracking-[0.3em] mb-4">
            <Star className="h-3 w-3" /> Ready to Start?
          </div>
          <h2 className="text-4xl font-[900] tracking-tighter text-white mb-6">
            Schedule Your Appointment Today
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Take the first step toward optimal dental health. Our team is ready to provide you with exceptional care.
          </p>
          <button
            onClick={() => router.push('/book')}
            className="group flex items-center justify-center gap-3 rounded-full bg-blue-600 px-12 py-5 text-sm font-black uppercase tracking-[0.2em] text-white hover:bg-blue-700 transition-all mx-auto"
          >
            <Calendar className="h-5 w-5" />
            Book Your Consultation
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