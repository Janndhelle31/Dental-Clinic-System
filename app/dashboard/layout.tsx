'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import {
  LayoutDashboard, Calendar, Users, FileText, Settings,
  Menu, X, LogOut, Shield, CreditCard, Package,
  Stethoscope, ClipboardList, MessageSquare, BarChart3
} from 'lucide-react';
import Link from 'next/link';

// Define which roles can see which links
const navItems = [
  { name: 'Overview', href: '/dashboard', icon: LayoutDashboard, roles: ['admin', 'dentist'] },
  { name: 'Appointments', href: '/dashboard/appointments', icon: Calendar, roles: ['admin', 'dentist'] },
  { name: 'Patient Files', href: '/dashboard/patients', icon: Users, roles: ['admin', 'dentist'] },
  { name: 'Treatment Plans', href: '/dashboard/treatments', icon: Stethoscope, roles: ['admin', 'dentist'] },
  { name: 'Clinical Notes', href: '/dashboard/records', icon: FileText, roles: ['admin', 'dentist'] },
  { name: 'Inventory & Supplies', href: '/dashboard/inventory', icon: Package, roles: ['admin'] },
  { name: 'Billing & Payments', href: '/dashboard/billing', icon: CreditCard, roles: ['admin'] },
  { name: 'Queue Manager', href: '/dashboard/queue', icon: ClipboardList, roles: ['admin', 'dentist'] },
  { name: 'Inquiries', href: '/dashboard/messages', icon: MessageSquare, roles: ['admin'] },
  { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart3, roles: ['admin'] },
  { name: 'System Settings', href: '/dashboard/settings', icon: Settings, roles: ['admin'] },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [role, setRole] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const storedRole = localStorage.getItem('demo_role')?.toLowerCase();
    
    // 1. Check if logged in
    if (!storedRole) {
      router.push('/login');
      return;
    }

    setRole(storedRole);

    // 2. Route Guard Logic
    const currentNavItem = navItems.find(item => item.href === pathname);
    if (currentNavItem && !currentNavItem.roles.includes(storedRole)) {
      // If user role is not allowed on this path, kick them to overview
      router.push('/dashboard');
    }

    setIsLoading(false);
  }, [pathname, router]);

  const handleLogout = () => {
    localStorage.removeItem('demo_role');
    router.push('/login');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="h-8 w-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // Filter menu items based on the active role
  const visibleNavItems = navItems.filter(item => item.roles.includes(role || ''));

  return (
    <div className="flex min-h-screen bg-[#FDFDFD]">
      {/* SIDEBAR (Desktop) */}
      <aside className="hidden lg:flex w-72 flex-col bg-white border-r border-gray-100 sticky top-0 h-screen">
        <div className="p-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-10 w-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest leading-none">Terminal</p>
              <h1 className="text-sm font-black uppercase tracking-tighter text-gray-900 mt-1">Valencia Hub</h1>
            </div>
          </div>

          <nav className="space-y-1">
            {visibleNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.15em] transition-all ${
                  pathname === item.href 
                    ? 'bg-gray-900 text-white shadow-lg' 
                    : 'text-gray-400 hover:text-blue-600 hover:bg-blue-50/50'
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-auto p-6 border-t border-gray-50 bg-gray-50/30">
          <div className="rounded-2xl bg-white border border-gray-100 p-4 mb-4 shadow-sm">
            <div className="flex items-center gap-2">
               <div className={`h-2 w-2 rounded-full ${role === 'admin' ? 'bg-purple-500' : 'bg-blue-500'}`} />
               <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">{role} Access</p>
            </div>
            <p className="text-xs font-bold text-gray-900 capitalize mt-1">Authorized User</p>
          </div>
          <button onClick={handleLogout} className="flex w-full items-center justify-center gap-2 py-3 rounded-xl bg-red-50 text-red-600 text-[10px] font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all">
            <LogOut className="h-3 w-3" /> Logout
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-10">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 bg-gray-50 rounded-lg text-gray-900 border border-gray-100">
            <Menu className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-4 ml-auto">
            <div className="text-right">
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 leading-none">Current Facility</p>
              <p className="text-xs font-bold text-gray-900 mt-1">Valencia Main</p>
            </div>
            <div className="h-10 w-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-black text-xs uppercase">
              {role?.slice(0, 2)}
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6 lg:p-10">
          {children}
        </main>
      </div>
    </div>
  );
}