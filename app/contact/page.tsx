'use client';

import { useState } from 'react';
import { 
  Phone, Mail, MapPin, Clock, Send, 
  CheckCircle, MessageSquare, AlertCircle, 
  Navigation, Info, Bus, Car, 
  Activity
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
    {/* 1. DYNAMIC HERO SECTION */}
<div className="relative overflow-hidden bg-gray-900 py-24 text-white">
  <div className="absolute inset-0 opacity-20">
    <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]"></div>
  </div>
  <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
    <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 ring-1 ring-inset ring-blue-500/20 mb-8">
      <Activity className="h-3 w-3" /> Direct Access
    </div>
    <h1 className="text-5xl font-black tracking-tighter sm:text-7xl">
      Seamless <span className="text-blue-500">Communication.</span><br />
      Expert Guidance.
    </h1>
    <p className="mx-auto mt-8 max-w-2xl text-lg font-medium text-gray-400 leading-relaxed">
      Connect directly with our clinical coordinators for technical questions, 
      insurance verification, and priority appointment scheduling—all in one dedicated portal.
    </p>
  </div>
</div>
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12">
          
          {/* 2. DIRECT CONTACT METHODS */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="text-2xl font-black tracking-tight text-gray-900 mb-6">Clinic Directory</h2>
              <div className="space-y-8">
                {[
                  { icon: Phone, title: 'Clinical Line', data: '(555) 123-4567', sub: 'Mon-Fri, 8am-7pm' },
                  { icon: Mail, title: 'Digital Desk', data: 'hello@brightsmile.dental', sub: '24hr response time' },
                  { icon: MapPin, title: 'Headquarters', data: '123 Dental St, Medical District', sub: 'Suite 400, Floor 2' }
                ].map((item) => (
                  <div key={item.title} className="group flex gap-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gray-50 text-gray-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">{item.title}</h4>
                      <p className="text-lg font-bold text-gray-900">{item.data}</p>
                      <p className="text-sm font-medium text-gray-500">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* HIGH-INTENSITY EMERGENCY BLOCK */}
            <div className="relative overflow-hidden rounded-[2.5rem] bg-red-600 p-8 text-white shadow-2xl shadow-red-200">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-2 w-2 rounded-full bg-white animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Urgent Triage</span>
                </div>
                <h3 className="text-2xl font-black mb-2">Dental Emergency?</h3>
                <p className="text-sm font-medium text-red-100 mb-6">
                  For trauma, acute abscess, or severe swelling, our on-call surgeon is available 24/7.
                </p>
                <a href="tel:5559876543" className="inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-4 text-sm font-black text-red-600 hover:bg-red-50 transition-colors">
                  <Phone className="h-4 w-4" /> (555) 987-6543
                </a>
              </div>
              <AlertCircle className="absolute -bottom-4 -right-4 h-32 w-32 text-white/10" />
            </div>
          </div>

          {/* 3. INTELLIGENT CONTACT FORM */}
          <div className="lg:col-span-7">
            <div className="rounded-[3rem] border border-gray-100 bg-white p-8 lg:p-12 shadow-sm">
              {isSubmitted ? (
                <div className="py-20 text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-6">
                    <CheckCircle className="h-10 w-10" />
                  </div>
                  <h3 className="text-3xl font-black text-gray-900 mb-2">Transmission Received</h3>
                  <p className="text-gray-500 font-medium">One of our clinical coordinators will reach out shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Full Identity</label>
                      <input 
                        required name="name" value={formData.name} onChange={handleChange}
                        className="w-full rounded-2xl border border-gray-100 bg-gray-50 px-6 py-4 text-sm font-bold focus:border-blue-600 focus:bg-white focus:outline-none transition-all" 
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Phone Number</label>
                      <input 
                        required type="tel" name="phone" value={formData.phone} onChange={handleChange}
                        className="w-full rounded-2xl border border-gray-100 bg-gray-50 px-6 py-4 text-sm font-bold focus:border-blue-600 focus:bg-white focus:outline-none transition-all" 
                        placeholder="(555) 000-0000"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Inquiry Subject</label>
                    <select 
                      name="subject" value={formData.subject} onChange={handleChange}
                      className="w-full rounded-2xl border border-gray-100 bg-gray-50 px-6 py-4 text-sm font-bold appearance-none focus:border-blue-600 focus:bg-white focus:outline-none transition-all"
                    >
                      <option value="">Choose a Category</option>
                      <option value="appointment">New Patient Consultation</option>
                      <option value="billing">Billing & Insurance</option>
                      <option value="technical">Surgical Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Detailed Message</label>
                    <textarea 
                      required name="message" value={formData.message} onChange={handleChange} rows={5}
                      className="w-full rounded-3xl border border-gray-100 bg-gray-50 px-6 py-4 text-sm font-bold focus:border-blue-600 focus:bg-white focus:outline-none transition-all resize-none" 
                      placeholder="How can we assist your clinical journey today?"
                    />
                  </div>

                  <button type="submit" className="w-full flex items-center justify-center gap-3 rounded-2xl bg-black py-5 text-xs font-black uppercase tracking-[0.2em] text-white hover:bg-blue-600 transition-all active:scale-[0.98]">
                    <Send className="h-4 w-4" /> Dispatch Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* 4. LOGISTICS & ACCESSIBILITY SECTION */}
        <div className="mt-32">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
            <h2 className="text-4xl font-black tracking-tight text-gray-900">Patient Logistics</h2>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-blue-600 border-b-2 border-blue-600 pb-1">
                <Navigation className="h-4 w-4" /> Launch Google Maps
              </button>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {[
              { 
                icon: Car, 
                title: 'Parking & Entry', 
                desc: 'Complimentary patient parking is available in the underground lot. Use Bay B-12 for direct elevator access to our suite.' 
              },
              { 
                icon: Bus, 
                title: 'Public Transit', 
                desc: 'Located 2 blocks from Central Station. Served by Bus Routes #12 and #45 with a stop directly in front of the building.' 
              },
              { 
                icon: Info, 
                title: 'Building Access', 
                desc: 'The facility is fully ADA compliant with touchless entries and medical-grade air filtration systems in all elevators.' 
              }
            ].map((item) => (
              <div key={item.title} className="rounded-[2.5rem] bg-gray-50 p-10 border border-gray-100">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm text-blue-600">
                  <item.icon className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-black text-gray-900 mb-4">{item.title}</h4>
                <p className="text-sm font-medium leading-relaxed text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}