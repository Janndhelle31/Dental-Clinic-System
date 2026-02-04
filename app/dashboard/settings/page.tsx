'use client';

import { useState } from 'react';
import { 
  Save, Bell, Shield, User, Globe, ArrowRight, 
  CheckCircle2, Lock, Smartphone, Mail, Phone, MapPin 
} from 'lucide-react';

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    clinicName: 'Bright Smile Valencia',
    email: 'info@brightsmile.com',
    phone: '(555) 123-4567',
    address: '123 Dental Street, City, State 12345',
    notifications: {
      email: true,
      sms: false,
      appointmentReminders: true,
      promotional: false,
    },
  });

  const handleSave = () => {
    // Logic for saving settings
    console.log("Saving settings...", settings);
    alert('Settings successfully updated!');
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* 1. TOP HEADER SECTION */}
      <div className="flex flex-col justify-between gap-4 border-b border-gray-100 pb-8 md:flex-row md:items-end">
        <div>
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-blue-600 mb-2">
            <div className="h-1 w-1 rounded-full bg-blue-600" />
            Configuration
          </div>
          <h1 className="text-4xl font-black tracking-tight text-gray-900">Settings</h1>
          <p className="mt-2 text-sm font-medium text-gray-500">
            Manage your clinic profile, security preferences, and automated alerts.
          </p>
        </div>
        
        <button
          onClick={handleSave}
          className="flex items-center gap-2 rounded-xl bg-black px-8 py-3.5 text-sm font-black uppercase tracking-widest text-white shadow-xl shadow-black/10 transition-all hover:bg-gray-800 active:scale-95"
        >
          <Save className="h-4 w-4" /> Save Changes
        </button>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        
        {/* 2. CLINIC PROFILE SECTION */}
        <section className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm transition-all hover:border-black/10">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <Globe className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl font-black tracking-tight text-gray-900">Clinic Profile</h2>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Public Information</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 flex items-center gap-2">
                <User className="h-3 w-3" /> Clinic name
              </label>
              <input
                type="text"
                value={settings.clinicName}
                onChange={(e) => setSettings({ ...settings, clinicName: e.target.value })}
                className="w-full rounded-2xl border border-gray-300 bg-gray-50/50 px-5 py-3.5 text-base font-bold text-gray-900 focus:bg-white focus:border-black focus:ring-2 focus:ring-black/5 transition-all outline-none"
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 flex items-center gap-2">
                  <Mail className="h-3 w-3" /> Email Address
                </label>
                <input
                  type="email"
                  value={settings.email}
                  onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                  className="w-full rounded-2xl border border-gray-300 bg-gray-50/50 px-5 py-3.5 text-base font-bold text-gray-900 focus:bg-white focus:border-black focus:ring-2 focus:ring-black/5 transition-all outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 flex items-center gap-2">
                  <Phone className="h-3 w-3" /> Phone
                </label>
                <input
                  type="tel"
                  value={settings.phone}
                  onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                  className="w-full rounded-2xl border border-gray-300 bg-gray-50/50 px-5 py-3.5 text-base font-bold text-gray-900 focus:bg-white focus:border-black focus:ring-2 focus:ring-black/5 transition-all outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 flex items-center gap-2">
                <MapPin className="h-3 w-3" /> Office Address
              </label>
              <textarea
                value={settings.address}
                onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                rows={3}
                className="w-full rounded-2xl border border-gray-300 bg-gray-50/50 px-5 py-3.5 text-base font-bold text-gray-900 focus:bg-white focus:border-black focus:ring-2 focus:ring-black/5 transition-all outline-none"
              />
            </div>
          </div>
        </section>

        {/* 3. NOTIFICATIONS SECTION */}
        <section className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm transition-all hover:border-black/10">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-50 text-purple-600">
                <Bell className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl font-black tracking-tight text-gray-900">Notifications</h2>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Alerts & System Emails</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {Object.entries(settings.notifications).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between rounded-2xl border border-gray-100 p-5 transition-all hover:bg-gray-50/50 hover:border-gray-200">
                <div className="space-y-1">
                  <p className="text-sm font-black text-gray-900 capitalize tracking-tight">
                    {key.replace(/([A-Z])/g, ' $1')}
                  </p>
                  <p className="text-xs font-medium text-gray-500">
                    {key === 'email' && 'Primary communication channel for clinic updates.'}
                    {key === 'sms' && 'Instant mobile text alerts for urgent changes.'}
                    {key === 'appointmentReminders' && 'Send automated 24h reminders to patients.'}
                    {key === 'promotional' && 'Marketing, newsletter, and seasonal offers.'}
                  </p>
                </div>
                <button
                  onClick={() => setSettings({
                    ...settings,
                    notifications: { ...settings.notifications, [key]: !value }
                  })}
                  className={`relative inline-flex h-7 w-12 items-center rounded-full transition-all duration-300 ${
                    value ? 'bg-black' : 'bg-gray-200'
                  }`}
                >
                  <span className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-md transition-transform duration-300 ${
                    value ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* 4. SECURITY & INTEGRITY SECTION */}
        <section className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm transition-all hover:border-black/10 lg:col-span-2">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl font-black tracking-tight text-gray-900">Account & Security</h2>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Access & Encryption</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { label: 'Update Password', desc: 'Refresh your account credentials', icon: Lock },
              { label: 'Two-Factor (2FA)', desc: 'Manage mobile verification apps', icon: Smartphone },
              { label: 'Privacy Control', desc: 'Manage your data visibility', icon: User },
            ].map((item, i) => (
              <button key={i} className="group/item flex flex-col items-start gap-4 rounded-3xl border border-gray-100 p-6 text-left transition-all hover:border-black hover:shadow-xl hover:shadow-black/5 bg-white">
                <div className="rounded-xl bg-gray-100 p-3 transition-colors group-hover/item:bg-black group-hover/item:text-white">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-base font-black text-gray-900 tracking-tight">{item.label}</p>
                  <p className="text-xs font-medium text-gray-500 mt-1">{item.desc}</p>
                </div>
                <div className="mt-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover/item:text-black">
                  Configure <ArrowRight className="h-3 w-3 transition-transform group-hover/item:translate-x-1" />
                </div>
              </button>
            ))}
          </div>

          {/* System Audit Status */}
          <div className="mt-8 flex flex-col gap-6 rounded-[2rem] bg-gray-900 p-8 text-white md:flex-row md:items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
              <CheckCircle2 className="h-8 w-8 text-emerald-400" />
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex items-center gap-3">
                <p className="text-lg font-black tracking-tight uppercase">HIPAA Compliant Status</p>
                <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-emerald-400 ring-1 ring-emerald-500/50">
                  Secured
                </span>
              </div>
              <p className="text-sm font-medium text-gray-400 max-w-2xl">
                All patient records and clinical imagery are protected by 256-bit AES encryption. 
                Last automatic security audit completed: <b className="text-white">Today at 04:00 AM</b>.
              </p>
            </div>
            <button className="rounded-xl border border-white/20 px-6 py-3 text-xs font-black uppercase tracking-widest transition-all hover:bg-white hover:text-black active:scale-95">
              View Audit Logs
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}