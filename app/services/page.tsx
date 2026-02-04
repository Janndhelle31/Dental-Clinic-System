'use client';

import { 
  CheckCircle, DollarSign, Clock, Shield, Zap, 
  Heart, Star, Smile, Activity, ChevronRight, 
  HelpingHand, CreditCard, Sparkles, AlertTriangle 
} from 'lucide-react';
import { useRouter } from 'next/navigation';

const services = [
  {
    category: 'Preventive Care',
    slug: 'preventive',
    page: '/services/preventive',
    icon: Shield,
    accent: 'blue',
    items: [
      {
        title: 'Checkup & Cleaning',
        description: 'Comprehensive oral examination using 4K imaging and professional cleaning.',
        duration: '45-60 min',
        price: '$80-120',
        features: ['X-rays included', 'Oral cancer screening', 'Plaque removal'],
      },
      {
        title: 'Fluoride Treatment',
        description: 'Strengthens tooth enamel and provides a barrier against acidic erosion.',
        duration: '15 min',
        price: '$40-60',
        features: ['Quick application', 'Long-lasting protection', 'Safe for all ages'],
      },
      {
        title: 'Dental Sealants',
        description: 'BPA-free protective coating for molars to prevent deep-groove cavities.',
        duration: '30 min',
        price: '$50-80',
        features: ['Painless procedure', 'Lasts for years', 'Great for children'],
      },
    ],
  },
  {
    category: 'Restorative',
    slug: 'restorative',
    page: '/services/restorative',
    icon: Activity,
    accent: 'emerald',
    items: [
      {
        title: 'Dental Fillings',
        description: 'Seamless repair using tooth-colored composite resin materials.',
        duration: '30-60 min',
        price: '$150-300',
        features: ['Tooth-colored', 'Metal-free', 'Single visit'],
      },
      {
        title: 'Dental Crowns',
        description: 'Full-coverage porcelain caps to restore structural integrity.',
        duration: '2 visits',
        price: '$800-1,500',
        features: ['Custom-milled', 'Natural appearance', 'High durability'],
      },
      {
        title: 'Root Canal Therapy',
        description: 'Advanced endodontic care to save infected natural teeth.',
        duration: '60-90 min',
        price: '$800-1,200',
        features: ['Pain-free technology', 'Single visit', 'Preserves bone'],
      },
    ],
  },
  {
    category: 'Cosmetic',
    slug: 'cosmetic',
    page: '/services/cosmetic',
    icon: Sparkles,
    accent: 'purple',
    items: [
      {
        title: 'Teeth Whitening',
        description: 'Professional-grade laser whitening for immediate, dramatic results.',
        duration: '60 min',
        price: '$300-500',
        features: ['Immediate results', 'Custom trays', 'Enamel-safe'],
      },
      {
        title: 'Porcelain Veneers',
        description: 'Hand-crafted ceramic shells for a complete smile transformation.',
        duration: '2 visits',
        price: '$800-2,000',
        features: ['Stain-resistant', 'Natural translucency', 'Perfect alignment'],
      },
      {
        title: 'Invisalign®',
        description: 'Clear, removable aligners to straighten teeth without metal brackets.',
        duration: '12-18 mos',
        price: '$3,000+',
        features: ['Nearly invisible', 'Removable', 'Digital mapping'],
      },
    ],
  },
  {
    category: 'Specialty & Emergency',
    slug: 'emergency',
    page: '/services/emergency',
    icon: Zap,
    accent: 'red',
    items: [
      {
        title: 'Emergency Care',
        description: 'Priority triage for trauma, severe pain, or broken restorations.',
        duration: 'Immediate',
        price: 'Exam: $75',
        features: ['Same-day relief', '24/7 triage', 'Pain management'],
      },
      {
        title: 'Dental Implants',
        description: 'Titanium root replacement for permanent tooth restoration.',
        duration: '3-6 months',
        price: '$3,000+',
        features: ['Lifelong solution', 'Prevents bone loss', 'Fixed in place'],
      },
    ],
  },
];

const insuranceProviders = [
  'Delta Dental', 'Cigna', 'Aetna', 'MetLife', 
  'UnitedHealthcare', 'Humana', 'Guardian', 'Principal'
];

export default function ServicesPage() {
  const router = useRouter();

  const handleServiceCategoryClick = (page: string) => {
    router.push(page);
  };

  const handleServiceItemClick = (categorySlug: string) => {
    router.push(`/services/${categorySlug}`);
  };

  const handleBookNow = () => {
    router.push('/book');
  };

  return (
    <div className="min-h-screen bg-white selection:bg-blue-100">
      
      {/* 1. DYNAMIC HERO SECTION */}
      <div className="relative overflow-hidden bg-gray-900 py-24 text-white">
        <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 ring-1 ring-inset ring-blue-500/20 mb-8">
            <Activity className="h-3 w-3" /> Care Catalog
          </div>
          <h1 className="text-5xl font-black tracking-tighter sm:text-7xl">
            Precision <span className="text-blue-500">Care.</span><br />
            Total Wellness.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg font-medium text-gray-400 leading-relaxed">
            From routine maintenance to complex reconstructive surgery, we provide 
            evidence-based dental solutions powered by the latest clinical technology.
          </p>
        </div>
      </div>

      {/* 2. NAVIGATION SUB-BAR (Sticky) */}
      <div className="sticky top-0 z-40 border-b border-gray-100 bg-white/80 backdrop-blur-md hidden md:block">
        <div className="mx-auto max-w-7xl px-8 py-4">
          <div className="flex justify-center gap-12">
            {services.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => handleServiceCategoryClick(cat.page)}
                className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-black transition-colors"
              >
                {cat.category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. SERVICES LISTING */}
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        {services.map((category) => {
          const Icon = category.icon;
          return (
            <div key={category.category} id={category.slug} className="mb-32 scroll-mt-24">
              <div 
                className="mb-12 flex items-end justify-between border-b border-gray-100 pb-8 cursor-pointer group"
                onClick={() => handleServiceCategoryClick(category.page)}
              >
                <div className="flex items-center gap-6">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-[2rem] bg-gray-900 text-white shadow-xl group-hover:bg-blue-600 transition-colors`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-black tracking-tight text-gray-900 group-hover:text-blue-600 transition-colors">
                      {category.category}
                    </h2>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Professional Services</p>
                  </div>
                </div>
                <ChevronRight className="h-6 w-6 text-gray-400 group-hover:translate-x-2 transition-transform" />
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {category.items.map((service) => (
                  <div
                    key={service.title}
                    className="group relative flex flex-col rounded-[2.5rem] border border-gray-100 bg-white p-8 transition-all hover:-translate-y-2 hover:border-gray-900 hover:shadow-2xl hover:shadow-gray-200 cursor-pointer"
                    onClick={() => handleServiceCategoryClick(category.page)}
                  >
                    <div className="mb-6 flex items-start justify-between">
                      <h3 className="text-xl font-black leading-tight text-gray-900 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>
                      <div className="rounded-xl bg-gray-50 px-3 py-1.5 text-[10px] font-black uppercase tracking-tighter text-gray-900 border border-gray-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        {service.price}
                      </div>
                    </div>
                    
                    <p className="text-sm font-medium leading-relaxed text-gray-500 mb-8">
                      {service.description}
                    </p>
                    
                    <div className="mb-8 flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
                      <Clock className="h-3.5 w-3.5" />
                      {service.duration}
                    </div>

                    <div className="mb-8 space-y-3 flex-grow">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3 text-sm font-bold text-gray-700">
                          <CheckCircle className="h-4 w-4 text-emerald-500" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleBookNow();
                        }}
                        className="flex-1 rounded-2xl bg-black py-4 text-[10px] font-black uppercase tracking-widest text-white transition-all hover:bg-blue-600 active:scale-95"
                      >
                        Book Now
                      </button>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleServiceCategoryClick(category.page);
                        }}
                        className="rounded-2xl border border-gray-100 px-4 py-4 text-gray-400 hover:text-black hover:border-black transition-all group/item"
                      >
                        <ChevronRight className="h-4 w-4 group-hover/item:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* 4. FINANCIAL TRANSPARENCY BLOCK */}
      <div className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            
            <div className="lg:col-span-7 rounded-[3rem] bg-white p-12 shadow-sm border border-gray-100">
              <div className="inline-flex items-center gap-2 text-blue-600 font-black text-[10px] uppercase tracking-widest mb-6">
                <Shield className="h-4 w-4" /> Insurance Networks
              </div>
              <h2 className="text-4xl font-black tracking-tight text-gray-900 mb-6">Zero-Friction Billing</h2>
              <p className="text-lg font-medium text-gray-500 mb-10 leading-relaxed">
                We simplify clinical finance. Our dedicated coordinators handle all insurance 
                claims and verification before you even step into the office.
              </p>
              
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {insuranceProviders.map((provider) => (
                  <div key={provider} className="rounded-2xl border border-gray-100 bg-gray-50/50 p-4 text-center transition-all hover:border-black hover:bg-white group">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-tighter group-hover:text-black">{provider}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              {[
                { title: 'Auto-Claim Sync', desc: 'Real-time insurance eligibility checks.', icon: Zap, color: 'blue' },
                { title: '0% APR Financing', desc: 'Custom payment plans for major procedures.', icon: CreditCard, color: 'emerald' },
                { title: 'Patient Advocacy', desc: 'We fight for your maximum benefits.', icon: HelpingHand, color: 'purple' },
              ].map((item) => (
                <div key={item.title} className="flex gap-6 rounded-[2.5rem] bg-white p-8 border border-gray-100">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gray-900 text-white">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-gray-900 tracking-tight">{item.title}</h4>
                    <p className="mt-1 text-sm font-medium text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-[2rem] bg-blue-600 p-8 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-150 transition-transform duration-700">
                <AlertTriangle className="h-32 w-32" />
            </div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                <div className="h-12 w-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <DollarSign className="h-6 w-6" />
                </div>
                <p className="text-sm font-bold leading-relaxed">
                  <strong>Transparency Note:</strong> Displayed prices are starting estimates based on standard clinical complexity. 
                  A detailed breakdown and 1:1 consultation are required for a finalized surgical or restorative quote.
                </p>
            </div>
          </div>
        </div>
      </div>

      {/* 5. CALL TO ACTION */}
      <div className="bg-white py-32 text-center">
        <h2 className="text-4xl font-black tracking-tighter text-gray-900 sm:text-6xl">Ready for a consultation?</h2>
        <p className="mt-8 text-lg font-medium text-gray-500">Book an initial diagnostic appointment and get a personalized plan.</p>
        <div className="mt-12 flex justify-center gap-4">
            <button 
              onClick={handleBookNow}
              className="rounded-2xl bg-black px-12 py-5 text-xs font-black uppercase tracking-widest text-white shadow-2xl shadow-black/20 hover:bg-blue-600 transition-all active:scale-95"
            >
                Book Diagnostic Exam
            </button>
            <button 
              onClick={() => router.push('/gallery')}
              className="rounded-2xl border border-gray-200 px-12 py-5 text-xs font-black uppercase tracking-widest text-gray-900 hover:border-black transition-all"
            >
                View Gallery
            </button>
        </div>
      </div>
    </div>
  );
}