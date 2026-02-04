'use client';

import { useState, useEffect } from 'react';
import { 
  User, Mail, Phone, MapPin, Calendar, Shield, 
  Save, Key, AlertCircle, HeartPulse, 
  Eye, EyeOff, Lock, Bell, CreditCard, Download, 
  Trash2, Activity, Award, FileText, ArrowRight, Camera
} from 'lucide-react';

export default function ProfilePage() {
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  
  const [profile, setProfile] = useState({
    name: 'Maria Dela Cruz',
    email: 'maria.delacruz@example.ph',
    phone: '+63 912 345 6789',
    address: 'Makati City, Metro Manila, Philippines',
    dateOfBirth: '1990-08-15',
    emergencyContact: '+63 987 654 3210',
    bloodType: 'O+',
    allergies: 'Penicillin, Latex, Sulfa drugs',
    medicalHistory: 'Hypertension controlled with medication. No surgical history.',
    insuranceProvider: 'PhilHealth, Maxicare',
    insuranceNumber: 'PH-2024-123456',
    occupation: 'Software Engineer',
  });

  const [security, setSecurity] = useState({
    twoFactorEnabled: true,
    biometricEnabled: false,
  });

  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    smsAlerts: true,
    appointmentReminders: true,
    marketingEmails: false,
  });

  useEffect(() => {
    setMounted(true);
    // Demo logic: bypass localstorage check for preview if needed
    setIsLoading(false);
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    alert('Profile updated and clinical records synchronized successfully.');
    setIsSaving(false);
  };

  const handleExportData = () => {
    const dataStr = JSON.stringify(profile, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', `medical-profile-${Date.now()}.json`);
    linkElement.click();
  };

  if (!mounted || isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-100 border-t-black" />
        <p className="mt-4 text-[10px] font-black uppercase tracking-widest text-gray-400">Loading Secure Profile...</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-12 animate-in fade-in duration-700">
      
      {/* --- HEADER SECTION --- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 border-b border-gray-100 pb-10">
        <div>
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-blue-600 mb-2">
            <div className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            Verified Patient Record
          </div>
          <h1 className="text-5xl font-black tracking-tight text-gray-900">Account Settings</h1>
          <p className="mt-3 text-base font-medium text-gray-500 max-w-xl">
            Manage your medical identity, privacy controls, and synchronized clinical data.
          </p>
        </div>
        
        <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-3xl border border-gray-100">
          <div className="relative">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-2xl font-black">
              MC
            </div>
            <button className="absolute -bottom-2 -right-2 p-1.5 bg-white rounded-lg shadow-md border border-gray-100 hover:bg-gray-50 transition-colors">
              <Camera className="h-4 w-4 text-gray-600" />
            </button>
          </div>
          <div>
            <p className="text-sm font-black text-gray-900">{profile.name}</p>
            <p className="text-xs font-bold text-gray-400">Patient ID: #PH-99201</p>
          </div>
        </div>
      </div>

      {/* --- STATS GRID --- */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="p-6 rounded-3xl bg-white border-2 border-gray-100 shadow-sm">
          <Activity className="h-6 w-6 text-blue-600 mb-4" />
          <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Completeness</p>
          <div className="mt-2 flex items-center gap-3">
            <div className="h-2 flex-1 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-blue-600 w-[85%]" />
            </div>
            <span className="text-sm font-black text-gray-900">85%</span>
          </div>
        </div>
        <div className="p-6 rounded-3xl bg-white border-2 border-gray-100 shadow-sm">
          <Shield className="h-6 w-6 text-emerald-600 mb-4" />
          <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Security Score</p>
          <p className="text-2xl font-black text-gray-900">Strong (92/100)</p>
        </div>
        <div className="p-6 rounded-3xl bg-white border-2 border-gray-100 shadow-sm">
          <Award className="h-6 w-6 text-purple-600 mb-4" />
          <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Clinic Connections</p>
          <p className="text-2xl font-black text-gray-900">3 Active Providers</p>
        </div>
      </div>

      <div className="grid gap-10 lg:grid-cols-3">
        {/* --- LEFT COLUMN: DATA ENTRY --- */}
        <div className="lg:col-span-2 space-y-10">
          
          {/* PERSONAL INFO */}
          <div className="bg-white rounded-[2.5rem] border-2 border-gray-100 p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-blue-50 rounded-2xl text-blue-600">
                <User className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-black text-gray-900">Personal Identity</h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {[
                { label: 'Full Name', key: 'name', type: 'text', icon: '👤' },
                { label: 'Email Address', key: 'email', type: 'email', icon: '✉️' },
                { label: 'Phone Number', key: 'phone', type: 'tel', icon: '📱' },
                { label: 'Date of Birth', key: 'dateOfBirth', type: 'date', icon: '📅' },
                { label: 'Blood Type', key: 'bloodType', type: 'text', icon: '💉' },
                { label: 'Occupation', key: 'occupation', type: 'text', icon: '💼' },
              ].map((field) => (
                <div key={field.key} className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">
                    {field.label}
                  </label>
                  <div className="relative group">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg z-10 transition-transform group-focus-within:scale-110">
                      {field.icon}
                    </span>
                    <input
                      type={field.type}
                      value={(profile as any)[field.key]}
                      onChange={(e) => setProfile({ ...profile, [field.key]: e.target.value })}
                      className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl pl-12 pr-4 py-4 text-sm font-bold text-gray-900 focus:bg-white focus:border-black focus:outline-none transition-all shadow-sm"
                    />
                  </div>
                </div>
              ))}
              <div className="sm:col-span-2 space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Residential Address</label>
                <textarea
                  value={profile.address}
                  onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                  rows={2}
                  className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-5 py-4 text-sm font-bold text-gray-900 focus:bg-white focus:border-black focus:outline-none transition-all"
                />
              </div>
            </div>
          </div>

          {/* MEDICAL SAFETY INFO */}
          <div className="bg-white rounded-[2.5rem] border-2 border-red-50 p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-red-50 rounded-2xl text-red-600">
                <HeartPulse className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-gray-900">Clinical Background</h2>
                <p className="text-xs font-bold text-red-500 uppercase tracking-widest">Emergency Critical</p>
              </div>
            </div>

            <div className="space-y-8">
              {[
                { label: 'Allergies & Reactions', key: 'allergies', color: 'border-red-100 bg-red-50/30' },
                { label: 'Known Medical Conditions', key: 'medicalHistory', color: 'border-gray-100 bg-gray-50/50' },
                { label: 'Insurance & Coverage', key: 'insuranceProvider', color: 'border-blue-100 bg-blue-50/30' },
              ].map((section) => (
                <div key={section.key} className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 flex items-center gap-2">
                    <div className="h-1 w-1 rounded-full bg-red-500" />
                    {section.label}
                  </label>
                  <textarea
                    value={(profile as any)[section.key]}
                    onChange={(e) => setProfile({ ...profile, [section.key]: e.target.value })}
                    rows={3}
                    className={`w-full border-2 ${section.color} rounded-2xl px-6 py-4 text-sm font-bold text-gray-900 focus:bg-white focus:border-black focus:outline-none transition-all`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN: ACTIONS & SETTINGS --- */}
        <div className="space-y-8">
          
          {/* PERSISTENCE BOX */}
          <div className="bg-black rounded-[2.5rem] p-8 text-white shadow-xl shadow-black/10">
            <h3 className="text-xl font-black mb-4">Finalize Profile</h3>
            <p className="text-sm text-gray-400 mb-8 leading-relaxed">
              Updates will be pushed to your active health cards and connected hospital systems.
            </p>
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="w-full flex items-center justify-center gap-3 bg-white text-black py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-emerald-400 transition-all active:scale-[0.98] disabled:opacity-50"
            >
              {isSaving ? <Activity className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
              {isSaving ? 'Syncing...' : 'Save & Synchronize'}
            </button>
          </div>

          {/* EMERGENCY CONTACT */}
          <div className="bg-red-50 rounded-[2.5rem] p-8 border-2 border-red-100">
            <h3 className="text-lg font-black text-red-900 mb-6 flex items-center gap-2">
              <AlertCircle className="h-5 w-5" /> Emergency Contact
            </h3>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2">📞</span>
              <input
                type="tel"
                value={profile.emergencyContact}
                onChange={(e) => setProfile({ ...profile, emergencyContact: e.target.value })}
                className="w-full bg-white border-2 border-red-100 rounded-xl pl-12 pr-4 py-4 text-sm font-black text-gray-900 focus:border-red-500 focus:outline-none"
              />
            </div>
          </div>

          {/* PREFERENCES TIGHT LIST */}
          <div className="bg-white rounded-[2.5rem] border-2 border-gray-100 p-8">
            <h3 className="text-lg font-black text-gray-900 mb-6 flex items-center gap-2">
              <Bell className="h-5 w-5 text-gray-400" /> Notifications
            </h3>
            <div className="space-y-5">
              {[
                { label: 'Email Reports', key: 'emailNotifications' },
                { label: 'SMS Alerts', key: 'smsAlerts' },
                { label: 'Telehealth Invites', key: 'appointmentReminders' },
              ].map((pref) => (
                <div key={pref.key} className="flex items-center justify-between">
                  <span className="text-sm font-bold text-gray-600">{pref.label}</span>
                  <input
                    type="checkbox"
                    checked={(preferences as any)[pref.key]}
                    onChange={(e) => setPreferences({...preferences, [pref.key]: e.target.checked})}
                    className="h-5 w-5 rounded border-gray-300 accent-black"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* DATA EXPORT */}
          <div className="p-4 space-y-3">
            <button 
              onClick={handleExportData}
              className="w-full flex items-center justify-between p-4 rounded-2xl bg-gray-50 border border-gray-200 hover:border-black transition-all group"
            >
              <div className="flex items-center gap-3">
                <Download className="h-4 w-4 text-gray-400 group-hover:text-black" />
                <span className="text-xs font-black text-gray-900 uppercase tracking-widest">Export Clinical Data</span>
              </div>
              <ArrowRight className="h-4 w-4 text-gray-300 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => setShowDeleteConfirm(true)}
              className="w-full flex items-center gap-3 p-4 text-red-400 hover:text-red-600 transition-colors"
            >
              <Trash2 className="h-4 w-4" />
              <span className="text-xs font-black uppercase tracking-widest">Deactivate Account</span>
            </button>
          </div>

        </div>
      </div>

      {/* MODAL: SIMPLE CENTERED OVERLAY */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-[2.5rem] p-10 max-w-md w-full animate-in zoom-in-95 duration-200">
            <AlertCircle className="h-12 w-12 text-red-500 mb-6" />
            <h3 className="text-2xl font-black text-gray-900 mb-2">Are you sure?</h3>
            <p className="text-gray-500 mb-8 font-medium">This will permanently erase your medical history and identity from our local nodes. This cannot be undone.</p>
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => setShowDeleteConfirm(false)}
                className="py-4 rounded-2xl border-2 border-gray-100 text-sm font-black uppercase tracking-widest text-gray-400 hover:border-black hover:text-black transition-all"
              >
                Cancel
              </button>
              <button 
                onClick={() => { alert('Demo: Account Deleted'); setShowDeleteConfirm(false); }}
                className="py-4 rounded-2xl bg-red-600 text-white text-sm font-black uppercase tracking-widest shadow-lg shadow-red-200 hover:bg-red-700 transition-all"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}