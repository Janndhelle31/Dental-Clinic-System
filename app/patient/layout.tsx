'use client';

import { useState, useEffect } from 'react';
import { 
  User, Calendar, History, Settings, LogOut, ShieldAlert, 
  Menu, X, ChevronDown, FileText, CreditCard, Activity 
} from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

// Dental-specific navigation
const patientNavItems = [
  { name: 'Dashboard', href: '/patient', icon: Activity },
  { name: 'Appointments', href: '/patient/book', icon: Calendar },
  { name: 'Dental Records', href: '/patient/records', icon: FileText },
  { name: 'Treatments', href: '/patient/history', icon: History },
  { name: 'Billing', href: '/patient/billing', icon: CreditCard },
];

export default function PatientLayout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [role, setRole] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    const storedRole = localStorage.getItem('demo_role');
    if (!storedRole) {
      router.replace('/login');
    } else {
      setRole(storedRole);
      setIsLoading(false);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('demo_role');
    router.push('/login');
  };

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    router.push(href);
  };

  if (!mounted || isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-100 border-t-blue-600"></div>
        <p className="mt-4 text-sm font-medium text-gray-500">Opening Patient Portal...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Mobile Sidebar - Opens from the left side */}
      <div className={`lg:hidden fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <Link href="/patient" className="flex items-center gap-3 group" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-blue-200 shadow-lg">
                <Activity className="h-7 w-7" />
              </div>
              <div>
                <h1 className="text-base font-bold text-gray-900">SmileCare Dental</h1>
                <p className="text-[10px] font-semibold text-blue-600 uppercase tracking-widest mt-0.5">Patient Hub</p>
              </div>
            </Link>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* User Info */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-base text-white font-bold">
                JD
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">John Doe</p>
                <p className="text-xs text-gray-500">Patient ID: #12930</p>
              </div>
            </div>
          </div>

          {/* Sidebar Navigation */}
          <div className="flex-1 overflow-y-auto p-6 space-y-2">
            {patientNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`flex w-full items-center gap-3 rounded-xl px-5 py-4 text-sm font-medium transition-all ${
                    isActive 
                      ? 'bg-blue-50 text-blue-700 border border-blue-100' 
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon className={`h-5 w-5 ${isActive ? 'text-blue-600' : 'text-gray-400'}`} />
                  {item.name}
                </button>
              );
            })}
          </div>

          {/* Sidebar Footer */}
          <div className="p-6 border-t border-gray-100 space-y-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                router.push('/patient/profile');
              }}
              className="flex w-full items-center gap-3 rounded-xl px-5 py-4 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <Settings className="h-5 w-5 text-gray-400" /> 
              <span>Settings & Privacy</span>
            </button>
            <button 
              onClick={handleLogout}
              className="flex w-full items-center gap-3 rounded-xl px-5 py-4 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
            >
              <LogOut className="h-5 w-5" /> 
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Dental Clinic Header */}
      <header className="sticky top-0 z-30 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
              
              <Link href="/patient" className="flex items-center gap-2 group" onClick={() => setIsMobileMenuOpen(false)}>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-blue-200 shadow-lg transition-transform group-hover:scale-105">
                  <Activity className="h-6 w-6" />
                </div>
                <div className="hidden md:block">
                  <h1 className="text-sm font-bold text-gray-900 leading-none">SmileCare Dental</h1>
                  <p className="text-[10px] font-semibold text-blue-600 uppercase tracking-widest mt-1">Patient Hub</p>
                </div>
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-2">
              {patientNavItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl transition-all ${
                      isActive 
                        ? 'bg-blue-50 text-blue-700' 
                        : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <Icon className={`h-4 w-4 ${isActive ? 'text-blue-600' : ''}`} />
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* User Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center gap-2 rounded-full border border-gray-200 p-1.5 hover:bg-gray-50 transition-all"
              >
                <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-xs text-white font-bold">
                  JD
                </div>
                <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform ${isUserMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {isUserMenuOpen && (
                <div className="absolute right-0 mt-3 w-56 origin-top-right rounded-2xl border border-gray-100 bg-white p-2 shadow-xl ring-1 ring-black/5 animate-in fade-in zoom-in-95 duration-100 z-50">
                  <div className="px-3 py-3">
                    <p className="text-sm font-bold text-gray-900">John Doe</p>
                    <p className="text-xs text-gray-500">Patient ID: #12930</p>
                  </div>
                  <hr className="my-1 border-gray-50" />
                  <Link 
                    href="/patient/profile" 
                    className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    <Settings className="h-4 w-4 text-gray-400" /> Settings & Privacy
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <LogOut className="h-4 w-4" /> Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-4 sm:py-8 sm:px-6 lg:px-8">
        {/* Admin Simulation Banner */}
        {role !== 'patient' && role !== null && (
          <div className="mb-6 flex items-center gap-3 rounded-2xl border border-blue-100 bg-blue-50/50 p-4 text-blue-800">
            <ShieldAlert className="h-5 w-5 text-blue-600" />
            <p className="text-sm font-medium">Viewing as administrator ({role}).</p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-12">
            <div className="transition-all duration-500">
              {children}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}