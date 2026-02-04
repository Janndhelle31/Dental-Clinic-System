'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Shield, User, Activity, Lock, RefreshCw, Terminal, ChevronRight } from 'lucide-react';

export default function LoginPage() {
  const [role, setRole] = useState('patient');
  const [storedRole, setStoredRole] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  
  useEffect(() => {
    setMounted(true);
    const role = localStorage.getItem('demo_role');
    setStoredRole(role);
  }, []);

  const handleLogin = (selectedRole: string = role) => {
    localStorage.setItem('demo_role', selectedRole);
    // Use window.location for a hard refresh to ensure the Navbar/Auth state updates
    window.location.href = selectedRole === 'patient' ? '/patient' : '/dashboard';
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0b] font-sans antialiased relative overflow-hidden p-6">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 opacity-20" 
           style={{ backgroundImage: `radial-gradient(#3b82f6 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
      
      <div className="relative z-10 max-w-lg w-full">
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 mb-6 shadow-2xl shadow-blue-500/20">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl font-[900] tracking-tighter text-white uppercase leading-none">
            Clinical <br />
            <span className="text-blue-500">Access Portal.</span>
          </h2>
          <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.4em] text-gray-500">
            Secure System Gateway v4.0.0
          </p>
        </div>

        {/* Main Login Card */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[3rem] p-8 lg:p-12 shadow-2xl">
          
          <div className="grid gap-4 mb-8">
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-2">Select Access Level</h3>
            
            {[
              { id: 'patient', label: 'Patient Portal', icon: User, color: 'blue' },
              { id: 'dentist', label: 'Clinical Staff', icon: Activity, color: 'purple' },
              { id: 'admin', label: 'System Admin', icon: Lock, color: 'emerald' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleLogin(item.id)}
                className="group relative flex items-center justify-between w-full p-5 rounded-2xl border border-white/5 bg-white/5 transition-all hover:bg-white/10 hover:border-blue-500/50"
              >
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-gray-900 border border-white/10 group-hover:text-blue-500 transition-colors">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-black uppercase tracking-widest text-gray-300 group-hover:text-white">
                    {item.label}
                  </span>
                </div>
                <ChevronRight className="h-4 w-4 text-gray-600 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
              </button>
            ))}
          </div>

          {/* System Readout (Footer of Card) */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-black/40 border border-white/5">
              <Terminal className="h-3 w-3 text-blue-500" />
              <p className="font-mono text-[10px] text-gray-500 uppercase tracking-tight">
                Current_Auth_Role: <span className="text-blue-400">{storedRole || 'NULL'}</span>
              </p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => {
                  localStorage.clear();
                  window.location.reload();
                }}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-red-500/20 text-[9px] font-black uppercase tracking-[0.2em] text-red-500 hover:bg-red-500/10 transition-all"
              >
                <RefreshCw className="h-3 w-3" />
                Reset Database
              </button>
            </div>
          </div>
        </div>

        {/* Legal/Info */}
        <p className="mt-8 text-center text-[9px] font-bold uppercase tracking-[0.3em] text-gray-600 leading-relaxed">
          Authorized Personnel Only. <br />
          All clinical sessions are encrypted and logged.
        </p>
      </div>
    </div>
  );
}