'use client';

import { useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import { 
  User, LayoutDashboard, Calendar, FileText, 
  Clock, Settings, LogOut, ChevronUp, ChevronDown 
} from 'lucide-react';
import Link from 'next/link';

export default function NavigationHelper() {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(true);

  // Guard clause: Don't render if no user or in production (optional)
  // if (process.env.NODE_NODE === 'production') return null;
  if (!user) return null;

  const roleConfig = {
    patient: [
      { href: '/patient/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
      { href: '/patient/appointments', icon: Calendar, label: 'Appointments' },
      { href: '/patient/medical-records', icon: FileText, label: 'Medical Records' },
      { href: '/patient/prescriptions', icon: FileText, label: 'Prescriptions' },
      { href: '/patient/billing', icon: FileText, label: 'Billing' },
    ],
    staff: [
      { href: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
      { href: '/dashboard/appointments', icon: Calendar, label: 'Appointments' },
      { href: '/dashboard/patients', icon: User, label: 'Patients' },
      { href: '/dashboard/schedule', icon: Clock, label: 'Schedule' },
      { href: '/dashboard/reports', icon: FileText, label: 'Reports' },
    ],
    admin: [
      { href: '/dashboard/admin/users', icon: User, label: 'Users' },
      { href: '/dashboard/admin/settings', icon: Settings, label: 'Settings' },
    ]
  };

  const isPatient = user.role === 'patient';
  const isAdmin = user.role === 'admin';
  
  const currentLinks = isPatient 
    ? roleConfig.patient 
    : [...roleConfig.staff, ...(isAdmin ? roleConfig.admin : [])];

  return (
    <div className="fixed bottom-4 left-4 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 w-64 overflow-hidden transition-all duration-200">
      {/* Header */}
      <div className="flex items-center justify-between p-3 bg-gray-50 border-b">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 text-left group"
        >
          <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
            {user.name?.charAt(0) || 'U'}
          </div>
          <div>
            <p className="text-xs font-bold text-gray-900 truncate w-32">{user.name}</p>
            <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">{user.role}</p>
          </div>
          {isOpen ? <ChevronDown className="h-4 w-4 text-gray-400" /> : <ChevronUp className="h-4 w-4 text-gray-400" />}
        </button>
        
        <button
          onClick={logout}
          className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          title="Logout"
        >
          <LogOut className="h-4 w-4" />
        </button>
      </div>

      {/* Expandable Content */}
      {isOpen && (
        <div className="p-2 max-h-[70vh] overflow-y-auto">
          <nav className="space-y-1 mb-4">
            {currentLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center space-x-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition-all"
              >
                <link.icon className="h-4 w-4" />
                <span>{link.label}</span>
              </Link>
            ))}
          </nav>

          <div className="pt-3 border-t border-gray-100">
            <span className="text-[10px] font-bold text-gray-400 uppercase px-2 mb-2 block">Dev Switcher</span>
            <div className="grid grid-cols-3 gap-1">
              {[
                { role: 'patient', color: 'bg-blue-50 text-blue-700' },
                { role: 'admin', color: 'bg-green-50 text-green-700' },
                { role: 'dentist', color: 'bg-purple-50 text-purple-700' }
              ].map((btn) => (
                <Link
                  key={btn.role}
                  href={`/login?role=${btn.role}`}
                  className={`text-[10px] py-1.5 rounded text-center font-medium capitalize ${btn.color} hover:brightness-95`}
                >
                  {btn.role}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}