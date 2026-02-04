'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, MapPin, Calendar, Shield, Activity } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [role, setRole] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const storedRole = localStorage.getItem('demo_role');
    setRole(storedRole);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* TOP UTILITY BAR - Obsidian Blueprint Style */}
      <div className="bg-[#0a0a0b] text-white border-b border-white/5 relative overflow-hidden">
        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: `radial-gradient(#3b82f6 0.5px, transparent 0.5px)`, backgroundSize: '20px 20px' }} />
        
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between py-2.5">
            <div className="flex items-center space-x-8 text-[10px] font-black uppercase tracking-[0.2em]">
              <div className="flex items-center text-blue-500">
                <Phone className="mr-2 h-3 w-3" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="hidden items-center sm:flex text-blue-500">
                <MapPin className="mr-2 h-3 w-3" />
                <span className="text-gray-300 uppercase">Clinical Hub: Valencia City, Bukidnon</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 border-l border-white/10 pl-6">
              {mounted && role ? (
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                    System Access: <span className="text-white">{role}</span>
                  </span>
                </div>
              ) : (
                <Link href="/login" className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 hover:text-white transition-colors">
                  Client Portal login //
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar - Opens from the right side */}
      <div className={`lg:hidden fixed inset-y-0 right-0 z-50 w-80 bg-[#0a0a0b] shadow-2xl transform transition-transform duration-300 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <Link href="/" className="flex items-center gap-3 group" onClick={() => setIsMenuOpen(false)}>
              <div className="relative h-12 w-12 flex items-center justify-center rounded-xl bg-white">
                <Shield className="h-7 w-7 text-gray-900" />
                <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-blue-600 border-2 border-white" />
              </div>
              <div>
                <h1 className="text-base font-[900] tracking-tighter text-white uppercase leading-none">
                  Bright Smile <br />
                  <span className="text-blue-500">Valencia.</span>
                </h1>
              </div>
            </Link>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-gray-400 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Sidebar Navigation */}
          <div className="flex-1 overflow-y-auto p-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block rounded-xl px-5 py-4 text-sm font-[900] uppercase tracking-widest transition-all ${
                  isActive(link.href) 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            {mounted && role && (
              <Link
                href={role === 'patient' ? '/patient' : '/dashboard'}
                className="flex items-center gap-3 rounded-xl px-5 py-4 bg-white/10 text-sm font-[900] uppercase tracking-widest text-gray-300 hover:bg-white/20 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                <Activity className="h-4 w-4" />
                {role === 'patient' ? 'Patient Portal' : 'Staff Terminal'}
              </Link>
            )}
          </div>

          {/* Sidebar Footer */}
          <div className="p-6 border-t border-white/10 space-y-6">
            <Link
              href="/login"
              className="flex items-center justify-center gap-3 rounded-2xl bg-blue-600 px-6 py-4 text-sm font-[900] uppercase tracking-widest text-white hover:bg-blue-700 transition-all active:scale-95"
              onClick={() => setIsMenuOpen(false)}
            >
              <Calendar className="h-5 w-5" />
              Book Appointment
            </Link>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="h-4 w-4 text-blue-500" />
                <span className="text-sm font-medium text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="h-4 w-4 text-blue-500" />
                <span className="text-sm font-medium text-gray-300">Clinical Hub: New York, NY</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm lg:hidden animate-in fade-in duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* MAIN NAVIGATION - High Contrast Blueprint */}
      <nav className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-20 items-center justify-between">
            
            {/* Logo Group */}
            <Link href="/" className="group flex items-center space-x-3">
              <div className="relative h-11 w-11 flex items-center justify-center rounded-xl bg-gray-900 transition-transform group-hover:rotate-90">
                <Shield className="h-6 w-6 text-white" />
                <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-blue-600 border-2 border-white" />
              </div>
              <div>
                <h1 className="text-xl font-[900] tracking-tighter text-gray-900 uppercase leading-none">
                  Bright Smile <br />
                  <span className="text-blue-600">Valencia.</span>
                </h1>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center space-x-10 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[11px] font-[900] uppercase tracking-[0.2em] transition-all hover:text-blue-600 ${
                    isActive(link.href) ? 'text-blue-600' : 'text-gray-500'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              {mounted && role && (
                <Link
                  href={role === 'patient' ? '/patient' : '/dashboard'}
                  className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 text-[10px] font-[900] uppercase tracking-widest text-gray-900 hover:bg-blue-600 hover:text-white transition-all"
                >
                  <Activity className="h-3 w-3" />
                  {role === 'patient' ? 'Control Panel' : 'Staff Terminal'}
                </Link>
              )}
            </div>

            {/* CTA Button */}
            <div className="hidden items-center lg:flex">
              <Link
                href="/login"
                className="group relative flex items-center space-x-2 overflow-hidden rounded-2xl bg-blue-600 px-8 py-3.5 text-[11px] font-black uppercase tracking-[0.2em] text-white transition-all hover:bg-gray-900 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <Calendar className="h-4 w-4" />
                <span>Book Slot</span>
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-xl p-2 text-gray-900 hover:bg-gray-100 lg:hidden transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}