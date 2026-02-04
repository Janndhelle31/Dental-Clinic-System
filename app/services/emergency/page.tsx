'use client';

import { 
  Zap, Calendar, CheckCircle, Clock, Users, 
  Shield, Award, ChevronRight, Phone, AlertTriangle,
  Activity, Heart
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const emergencyTreatments = [
  { 
    name: 'Toothache Relief', 
    duration: 'Immediate', 
    price: 'Exam: $75', 
    description: 'Immediate pain relief and diagnosis for severe toothaches.',
    features: ['Pain management', 'Diagnostic X-rays', 'Treatment plan'],
    icon: AlertTriangle
  },
  { 
    name: 'Broken Tooth Repair', 
    duration: '1-2 hours', 
    price: '$200-800', 
    description: 'Emergency repair of fractured or broken teeth.',
    features: ['Same-day repair', 'Temporary restoration', 'Follow-up care'],
    icon: Shield
  },
  { 
    name: 'Knocked-Out Tooth', 
    duration: 'Emergency', 
    price: '$300-1,200', 
    description: 'Immediate care for avulsed (knocked-out) teeth.',
    features: ['Time-sensitive care', 'Tooth preservation', 'Splinting'],
    icon: Activity
  },
  { 
    name: 'Dental Abscess', 
    duration: 'Emergency', 
    price: '$150-500', 
    description: 'Treatment for painful dental infections and abscesses.',
    features: ['Antibiotics', 'Drainage if needed', 'Root canal referral'],
    icon: Heart
  },
];

const emergencySymptoms = [
  'Severe tooth pain that prevents sleep',
  'Swollen face or gums',
  'Bleeding that won\'t stop',
  'Knocked-out permanent tooth',
  'Broken tooth with sharp edges',
  'Lost filling or crown',
  'Dental trauma from accident',
  'Signs of infection (fever, swelling)'
];

const afterHoursInfo = [
  'Weekdays: 8am - 8pm',
  'Weekends: 9am - 5pm',
  '24/7 Phone Triage',
  'Same-day appointments',
  'Emergency prescriptions',
  'Referral network for after-hours'
];

export default function EmergencyCarePage() {
  const router = useRouter();

  const handleEmergencyCall = () => {
    window.location.href = 'tel:5551234567';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-50 to-white py-24">
        <div className="absolute inset-0 bg-grid-red-100/20" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-red-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4">
                <Zap className="h-3 w-3" /> Emergency Dental Care
              </div>
              <h1 className="text-5xl sm:text-7xl font-[900] tracking-tighter text-gray-900 uppercase leading-[0.9]">
                Immediate <br />
                <span className="text-red-600">Relief.</span>
              </h1>
              <p className="mt-6 text-lg font-medium text-gray-600">
                When dental emergencies strike, we're here to provide immediate, compassionate care. 
                Our team is trained to handle urgent dental situations with speed and expertise.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleEmergencyCall}
                  className="group flex items-center justify-center gap-3 rounded-full bg-red-600 px-8 py-4 text-sm font-black uppercase tracking-[0.2em] text-white hover:bg-red-700 transition-all"
                >
                  <Phone className="h-4 w-4" />
                  Call Now: (555) 123-4567
                </button>
                <button
                  onClick={() => router.push('/book')}
                  className="group flex items-center justify-center gap-3 rounded-full border-2 border-gray-200 px-8 py-4 text-sm font-black uppercase tracking-[0.2em] text-gray-900 hover:border-red-600 hover:text-red-600 transition-all"
                >
                  <Calendar className="h-4 w-4" />
                  Schedule Urgent Visit
                </button>
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="rounded-[3rem] bg-white border border-gray-100 p-8 shadow-xl">
                <h3 className="text-xl font-[900] tracking-tighter text-gray-900 uppercase mb-6">
                  Emergency Response
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-red-600" />
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Response Time</p>
                      <p className="text-sm font-bold text-gray-900">Within 60 minutes</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-red-600" />
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Available</p>
                      <p className="text-sm font-bold text-gray-900">24/7 Triage Service</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-red-600" />
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Coverage</p>
                      <p className="text-sm font-bold text-gray-900">Most Urgent Care Plans</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Symptoms */}
      <section className="py-24 bg-red-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-[900] tracking-tighter text-gray-900 uppercase">
              When to Seek Emergency Care
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Don't wait if you're experiencing any of these symptoms
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {emergencySymptoms.map((symptom, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-red-100">
                <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0" />
                <p className="text-sm font-medium text-gray-700">{symptom}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-[900] tracking-tighter text-gray-900 uppercase">
              Emergency Treatments
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Immediate care for urgent dental situations
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {emergencyTreatments.map((treatment) => {
              const Icon = treatment.icon;
              return (
                <div key={treatment.name} className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm hover:shadow-xl transition-shadow group">
                  <div className="flex items-center justify-between mb-6">
                    <div className="h-12 w-12 rounded-xl bg-red-50 flex items-center justify-center group-hover:bg-red-600 transition-colors">
                      <Icon className="h-6 w-6 text-red-600 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest bg-red-50 text-red-600 px-3 py-1 rounded-full">
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
                    className="mt-8 w-full rounded-xl bg-gray-900 py-3 text-sm font-black uppercase tracking-widest text-white hover:bg-red-600 transition-colors"
                  >
                    Get Immediate Care
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* After Hours Info */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="rounded-3xl bg-white border border-gray-100 p-12 shadow-sm">
            <h2 className="text-3xl font-[900] tracking-tighter text-gray-900 uppercase mb-8 text-center">
              After-Hours Information
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {afterHoursInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-gray-50">
                  <Shield className="h-5 w-5 text-red-600" />
                  <p className="text-sm font-medium text-gray-700">{info}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-red-50 rounded-2xl border border-red-100">
              <p className="text-center text-sm font-bold text-red-800">
                ⚠️ For life-threatening emergencies, please call 911 or go to your nearest hospital emergency room.
              </p>
            </div>
          </div>
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