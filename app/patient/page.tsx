'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Calendar, Clock, User, Award, 
  ChevronRight, ArrowUpRight, Activity, ShieldCheck 
} from 'lucide-react';

export default function PatientDashboard() {
  const router = useRouter();
  const [role, setRole] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedRole = localStorage.getItem('demo_role');
    setRole(storedRole);
    
    if (!storedRole) {
      router.push('/login');
    }
  }, [router]);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black mx-auto"></div>
          <p className="text-xs font-black uppercase tracking-widest text-gray-400">Initializing Portal</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-8 lg:space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* 1. WELCOME HEADER */}
      <div className="flex flex-col justify-between gap-4 sm:gap-6 border-b border-gray-100 pb-6 sm:pb-10 md:flex-row md:items-end">
        <div>
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-blue-600 mb-3">
            <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            <span className="hidden sm:inline">Patient Portal Active</span>
            <span className="sm:hidden">Portal Active</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter text-gray-900">Welcome Back.</h1>
          <p className="mt-2 sm:mt-3 text-sm sm:text-lg font-medium text-gray-500 max-w-md">
            Your oral health at a glance. Manage appointments and clinical records securely.
          </p>
        </div>
        
        <div className="flex items-center gap-3 sm:gap-4 bg-emerald-50 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl sm:rounded-3xl border border-emerald-100 mt-4 sm:mt-0">
          <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600" />
          <div>
            <p className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-emerald-700">Records Status</p>
            <p className="text-sm font-bold text-emerald-900">Verified & Secure</p>
          </div>
        </div>
      </div>
      
      {/* 2. CORE UTILITY CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {[
          { title: 'Schedule visit', desc: 'Book next appointment', icon: Calendar, color: 'text-blue-600 bg-blue-50', link: '/patient/book' },
          { title: 'Upcoming', desc: 'Next visit: Dec 12', icon: Clock, color: 'text-emerald-600 bg-emerald-50', link: '/patient/visits' },
          { title: 'Clinical History', desc: 'X-rays & Procedures', icon: Activity, color: 'text-purple-600 bg-purple-50', link: '/patient/history' },
          { title: 'Smile Rewards', desc: '1,250 points available', icon: Award, color: 'text-orange-600 bg-orange-50', link: '/patient/rewards' },
        ].map((item, i) => (
          <button 
            key={i}
            onClick={() => router.push(item.link)}
            className="group flex flex-col items-start p-5 sm:p-7 rounded-3xl sm:rounded-[2.5rem] bg-white border border-gray-100 shadow-sm transition-all hover:border-black hover:shadow-xl hover:shadow-black/5 text-left"
          >
            <div className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 transition-colors group-hover:bg-black group-hover:text-white ${item.color}`}>
              <item.icon className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <h3 className="text-base sm:text-lg font-black tracking-tight text-gray-900">{item.title}</h3>
            <p className="text-xs sm:text-sm font-bold text-gray-400 mt-1 uppercase tracking-tight">{item.desc}</p>
            <ChevronRight className="mt-4 sm:mt-6 h-4 w-4 sm:h-5 sm:w-5 text-gray-300 transition-transform group-hover:translate-x-1 group-hover:text-black" />
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* 3. QUICK ACTIONS BANNER */}
        <div className="lg:col-span-2 relative overflow-hidden bg-gray-900 rounded-3xl sm:rounded-[3rem] p-6 sm:p-10 text-white group">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 h-40 w-40 sm:h-64 sm:w-64 rounded-full bg-blue-600/20 blur-3xl transition-transform group-hover:scale-110" />
          
          <div className="relative z-10 space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight">Need immediate assistance?</h2>
            <p className="text-gray-400 font-medium text-sm sm:text-base max-w-sm">
              Our clinical team is available for emergency consultations. Reach out directly or book a priority slot.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <button 
                onClick={() => router.push('/patient/book')}
                className="bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center sm:justify-start gap-3 transition-all hover:bg-blue-400 hover:text-white active:scale-95"
              >
                Book Priority Slot <ArrowUpRight className="h-3 w-3 sm:h-4 sm:w-4" />
              </button>
              <button className="bg-white/10 text-white border border-white/20 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-black uppercase tracking-widest text-xs transition-all hover:bg-white/20">
                Contact Office
              </button>
            </div>
          </div>
        </div>

        {/* 4. CLINIC NEWS / LOYALTY PROGRESS */}
        <div className="bg-white rounded-3xl sm:rounded-[3rem] border border-gray-100 p-6 sm:p-10 flex flex-col justify-between shadow-sm">
          <div>
            <h3 className="text-lg sm:text-xl font-black tracking-tight text-gray-900">Loyalty Status</h3>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Silver Tier Member</p>
            
            <div className="mt-6 sm:mt-10 space-y-4">
              <div className="flex justify-between items-end">
                <span className="text-xs font-black uppercase tracking-widest text-gray-500">Next Reward</span>
                <span className="text-sm font-black">75%</span>
              </div>
              <div className="h-2 sm:h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-black rounded-full" style={{ width: '75%' }} />
              </div>
              <p className="text-xs font-bold text-gray-500 leading-relaxed">
                250 more points until your next <span className="text-black">Free Professional Whitening.</span>
              </p>
            </div>
          </div>

          <button className="mt-6 sm:mt-8 flex items-center justify-between w-full p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gray-50 text-gray-900 font-black uppercase tracking-widest text-[10px] hover:bg-gray-100 transition-colors">
            View Rewards Catalog <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}