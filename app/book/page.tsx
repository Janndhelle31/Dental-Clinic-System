'use client';

import { useState, useEffect } from 'react';
import { 
  Calendar, Clock, User, Activity, AlertCircle, 
  CheckCircle, ChevronRight, Search, MapPin, Phone,
  Mail, Star, Shield, FileText, Smartphone, Filter,
  ArrowRight, Download, Sparkles, Zap, X,
  ChevronDown, Lock, Eye, EyeOff,
  AlertTriangle, Heart
} from 'lucide-react';
import { useRouter } from 'next/navigation';

// Philippine Peso symbol
const PHP = '₱';

// Mock services data with Philippine pricing
const services = [
  { id: '1', name: 'Dental Checkup', duration: 30, price: 500, category: 'Preventive', popular: true },
  { id: '2', name: 'Teeth Cleaning', duration: 45, price: 1200, category: 'Preventive', popular: true },
  { id: '3', name: 'Dental Filling', duration: 60, price: 1500, category: 'Restorative', popular: false },
  { id: '4', name: 'Root Canal', duration: 90, price: 8000, category: 'Restorative', popular: false },
  { id: '5', name: 'Tooth Extraction', duration: 45, price: 2000, category: 'Surgical', popular: true },
  { id: '6', name: 'Teeth Whitening', duration: 60, price: 3000, category: 'Cosmetic', popular: false },
  { id: '7', name: 'Dental Crown', duration: 120, price: 10000, category: 'Restorative', popular: false },
  { id: '8', name: 'Dental Implant', duration: 180, price: 50000, category: 'Surgical', popular: false },
];

// Mock dentists data with Filipino names
const dentists = [
  { id: '1', name: 'Dr. Maria Santos', specialty: 'General Dentistry', rating: 4.9, available: true, experience: '10 years', image: '👩‍⚕️' },
  { id: '2', name: 'Dr. Juan Dela Cruz', specialty: 'Orthodontics', rating: 4.8, available: true, experience: '8 years', image: '👨‍⚕️' },
  { id: '3', name: 'Dr. Sofia Reyes', specialty: 'Pediatric Dentistry', rating: 4.9, available: false, experience: '12 years', image: '👩‍⚕️' },
  { id: '4', name: 'Dr. Miguel Tan', specialty: 'Oral Surgery', rating: 4.7, available: true, experience: '15 years', image: '👨‍⚕️' },
];

// Available time slots (Philippine business hours)
const timeSlots = [
  '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
  '11:00', '11:30', '13:00', '13:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30'
];

export default function GuestBookAppointmentPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedDentist, setSelectedDentist] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [patientInfo, setPatientInfo] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    birthdate: '',
    gender: '',
    address: '',
    notes: '',
    password: '',
    confirmPassword: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [appointmentDetails, setAppointmentDetails] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [showMobileSummary, setShowMobileSummary] = useState(false);
  const [createAccount, setCreateAccount] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setShowMobileSummary(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Get today's date for min date
  const today = new Date().toISOString().split('T')[0];
  
  // Get max date (3 months from now)
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);
  const maxDateString = maxDate.toISOString().split('T')[0];

  // Filter services based on search and category
  const categories = ['all', 'Preventive', 'Restorative', 'Surgical', 'Cosmetic'];
  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || service.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  // Filter available dentists based on selected service
  const filteredDentists = selectedService 
    ? dentists.filter(dentist => dentist.available)
    : dentists;

  // Get selected service details
  const serviceDetails = services.find(s => s.id === selectedService);
  
  // Get selected dentist details
  const dentistDetails = dentists.find(d => d.id === selectedDentist);

  // Handle next step
  const handleNextStep = () => {
    if (currentStep === 1 && !selectedService) {
      alert('Please select a service');
      return;
    }
    if (currentStep === 2 && (!selectedDate || !selectedTime)) {
      alert('Please select date and time');
      return;
    }
    if (currentStep === 3) {
      if (!patientInfo.firstName || !patientInfo.lastName || !patientInfo.phone || !patientInfo.email) {
        alert('Please fill in all required fields');
        return;
      }
      if (createAccount) {
        if (!patientInfo.password || !patientInfo.confirmPassword) {
          alert('Please enter password and confirmation');
          return;
        }
        if (patientInfo.password !== patientInfo.confirmPassword) {
          alert('Passwords do not match');
          return;
        }
        if (!agreedToTerms) {
          alert('Please agree to the terms and conditions');
          return;
        }
      }
    }
    setCurrentStep(currentStep + 1);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    const appointmentData = {
      id: 'GUEST-' + Date.now().toString().slice(-6),
      service: serviceDetails,
      dentist: dentistDetails,
      date: selectedDate,
      time: selectedTime,
      patient: patientInfo,
      guest: true,
      accountCreated: createAccount,
      status: 'pending-confirmation',
      createdAt: new Date().toISOString()
    };

    setAppointmentDetails(appointmentData);
    setIsSuccess(true);
    setIsSubmitting(false);
  };

  // Reset form
  const handleReset = () => {
    setCurrentStep(1);
    setSelectedService('');
    setSelectedDentist('');
    setSelectedDate('');
    setSelectedTime('');
    setPatientInfo({ 
      firstName: '', 
      lastName: '', 
      phone: '', 
      email: '', 
      birthdate: '', 
      gender: '', 
      address: '', 
      notes: '',
      password: '',
      confirmPassword: ''
    });
    setCreateAccount(false);
    setAgreedToTerms(false);
    setIsSuccess(false);
    setAppointmentDetails(null);
  };

  // Format date to readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-PH', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Format phone number
  const formatPhone = (phone: string) => {
    const cleaned = phone.replace(/\D/g, '');
    return cleaned.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3');
  };

  // Clear all filters
  const clearAllFilters = () => {
    setSearchQuery('');
    setCategoryFilter('all');
  };

  // Mobile progress bar
  const MobileProgressBar = () => (
    <div className="lg:hidden mb-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-medium uppercase tracking-widest text-gray-500">
          Step {currentStep} of 4
        </span>
        <span className="text-xs font-semibold text-teal-600">
          {['Service', 'Schedule', 'Details', 'Confirm'][currentStep - 1]}
        </span>
      </div>
      <div className="h-2 w-full rounded-full bg-gray-100">
        <div 
          className="h-full rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 transition-all duration-500"
          style={{ width: `${(currentStep / 4) * 100}%` }}
        />
      </div>
    </div>
  );

  // Mobile floating action button
  const MobileFAB = () => (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-100 p-4 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={() => setShowMobileSummary(!showMobileSummary)}
            className="flex items-center gap-2 text-sm font-medium text-gray-700"
          >
            <ChevronDown className={`h-4 w-4 transition-transform ${showMobileSummary ? 'rotate-180' : ''}`} />
            Summary
          </button>
          <button
            onClick={currentStep === 4 ? handleSubmit : handleNextStep}
            disabled={isSubmitting}
            className={`flex-1 rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed ${
              currentStep === 4
                ? 'bg-gradient-to-r from-emerald-500 to-green-500'
                : 'bg-gradient-to-r from-teal-500 to-cyan-500'
            }`}
          >
            {isSubmitting ? 'Processing...' : currentStep === 4 ? 'Confirm Booking' : 'Continue'}
          </button>
        </div>
      </div>
    </div>
  );

  // Mobile summary sheet
  const MobileSummarySheet = () => (
    <div className={`lg:hidden fixed inset-0 z-50 transform transition-transform duration-300 ease-out ${
      showMobileSummary ? 'translate-y-0' : 'translate-y-full'
    }`}>
      <div className="absolute inset-0 bg-black/40" onClick={() => setShowMobileSummary(false)} />
      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl max-h-[80vh] overflow-auto shadow-xl">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Appointment Summary</h3>
            <button 
              onClick={() => setShowMobileSummary(false)}
              className="p-2 rounded-lg hover:bg-gray-50"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>
          
          {serviceDetails ? (
            <div className="space-y-6">
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-2">Service</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold text-gray-800">{serviceDetails.name}</p>
                    <p className="text-sm text-gray-500">{serviceDetails.category}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-semibold text-gray-800">{PHP}{serviceDetails.price.toLocaleString()}</p>
                    <p className="text-sm text-gray-500">{serviceDetails.duration} min</p>
                  </div>
                </div>
              </div>

              {dentistDetails && (
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-2">Dentist</p>
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 p-2 text-lg">
                      {dentistDetails.image}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800">{dentistDetails.name}</p>
                      <p className="text-sm text-gray-500">{dentistDetails.specialty}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        <span className="text-xs font-medium">{dentistDetails.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectedDate && (
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-2">Schedule</p>
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-emerald-50 p-2">
                      <Calendar className="h-4 w-4 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">
                        {new Date(selectedDate).toLocaleDateString('en-PH', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </p>
                      <p className="text-sm text-gray-500">{selectedTime || 'Select time'}</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-base font-semibold text-gray-800">Estimated Total</span>
                  <span className="text-2xl font-semibold text-gray-800">
                    {PHP}{serviceDetails.price.toLocaleString()}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-1">Payment at clinic</p>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-50">
                <Activity className="h-7 w-7 text-gray-400" />
              </div>
              <p className="text-sm font-medium text-gray-600">Select a service</p>
              <p className="mt-1 text-xs text-gray-400">Philippine pricing shown</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  if (!mounted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-100 border-t-teal-400" />
        <p className="mt-4 text-xs font-medium uppercase tracking-widest text-gray-400">Loading Guest Booking...</p>
      </div>
    );
  }

  if (isSuccess && appointmentDetails) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-12 space-y-8 sm:space-y-12 animate-in fade-in slide-in-from-top-4 duration-700">
          
          {/* SUCCESS HEADER - Light Version */}
          <div className="flex flex-col justify-between gap-4 border-b border-gray-200 pb-6 sm:pb-8 md:flex-row md:items-end">
            <div>
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-emerald-500 mb-2">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="hidden sm:inline">Guest Booking Confirmed</span>
                <span className="sm:hidden">Guest Booking</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">Booking Received!</h1>
              <p className="mt-2 text-sm text-gray-600">
                Your appointment request has been submitted. Check your email for confirmation details.
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-emerald-100 p-2.5">
                <CheckCircle className="h-5 w-5 text-emerald-500" />
              </div>
              <span className="text-xs font-medium uppercase tracking-widest text-emerald-600">
                <span className="hidden sm:inline">Pending Confirmation</span>
                <span className="sm:hidden">Pending</span>
              </span>
            </div>
          </div>

          <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6 sm:space-y-8">
              
              {/* SUCCESS HERO - Light Version */}
              <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-100 p-6 sm:p-8 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                  <div className="rounded-2xl bg-white border border-emerald-200 p-4 self-start">
                    <CheckCircle className="h-8 w-8 text-emerald-500" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-semibold tracking-tight leading-tight text-gray-900">✓ Appointment Request Sent</h2>
                    <p className="mt-2 text-sm text-emerald-700 leading-relaxed max-w-md">
                      Your booking is pending confirmation. We'll contact you within 24 hours via phone or email. 
                      {createAccount && " Your account has been created. Check your email for login details."}
                    </p>
                  </div>
                </div>
              </div>

              {/* APPOINTMENT DETAILS CARD - Light Version */}
              <div className="rounded-2xl sm:rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
                  <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900">Appointment Request</h2>
                  <div className="flex flex-col items-end gap-2">
                    <span className="rounded-full bg-amber-100 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-amber-700 self-start sm:self-auto">
                      Guest Booking
                    </span>
                    <span className="text-sm text-gray-500">
                      ID: {appointmentDetails.id}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-6 sm:space-y-8">
                  {/* Service */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-200">
                    <div className="flex items-center gap-4">
                      <div className="rounded-2xl bg-blue-50 p-3">
                        <Activity className="h-6 w-6 text-blue-500" />
                      </div>
                      <div className="flex-1">
                        <p className="text-lg font-semibold text-gray-900">{appointmentDetails.service.name}</p>
                        <p className="text-sm text-gray-500">{appointmentDetails.service.category}</p>
                      </div>
                    </div>
                    <div className="text-right sm:text-left">
                      <p className="text-2xl font-semibold text-gray-900">{PHP}{appointmentDetails.service.price.toLocaleString()}</p>
                      <p className="text-sm text-gray-500">{appointmentDetails.service.duration} min</p>
                    </div>
                  </div>

                  {/* Dentist */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-200">
                    <div className="flex items-center gap-4">
                      <div className="rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 p-3 text-xl">
                        {appointmentDetails.dentist.image}
                      </div>
                      <div className="flex-1">
                        <p className="text-lg font-semibold text-gray-900">{appointmentDetails.dentist.name}</p>
                        <p className="text-sm text-gray-500">{appointmentDetails.dentist.specialty}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`h-4 w-4 ${i < Math.floor(appointmentDetails.dentist.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="text-sm font-medium text-gray-900">{appointmentDetails.dentist.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Date & Time */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-200">
                    <div className="flex items-center gap-4">
                      <div className="rounded-2xl bg-emerald-50 p-3">
                        <Calendar className="h-6 w-6 text-emerald-500" />
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-gray-900">
                          <span className="hidden sm:inline">{formatDate(appointmentDetails.date)}</span>
                          <span className="sm:hidden">
                            {new Date(appointmentDetails.date).toLocaleDateString('en-PH', {
                              weekday: 'short',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </span>
                        </p>
                        <p className="text-sm text-gray-500">{appointmentDetails.time}</p>
                      </div>
                    </div>
                  </div>

                  {/* Patient Info */}
                  <div className="rounded-2xl bg-gray-100 p-6">
                    <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-gray-500 mb-4">
                      <User className="h-3.5 w-3.5" /> PATIENT INFORMATION
                      {appointmentDetails.accountCreated && (
                        <span className="ml-2 rounded-full bg-emerald-100 px-2 py-1 text-[8px] font-medium uppercase tracking-widest text-emerald-700">
                          Account Created
                        </span>
                      )}
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-widest text-gray-400">Name</p>
                        <p className="text-lg font-semibold text-gray-900">
                          {appointmentDetails.patient.firstName} {appointmentDetails.patient.lastName}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-widest text-gray-400">Mobile</p>
                        <p className="text-lg font-semibold text-gray-900">+63 {formatPhone(appointmentDetails.patient.phone)}</p>
                      </div>
                      <div className="sm:col-span-2">
                        <p className="text-xs font-medium uppercase tracking-widest text-gray-400">Email</p>
                        <p className="text-lg font-semibold text-gray-900">{appointmentDetails.patient.email}</p>
                      </div>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="flex items-center justify-between pt-4">
                    <div>
                      <p className="text-sm font-medium uppercase tracking-widest text-gray-500">Total Amount</p>
                      <p className="text-xs text-gray-500">Payment at clinic</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">{PHP}{appointmentDetails.service.price.toLocaleString()}</p>
                      <p className="text-xs text-gray-500 hidden sm:block">Appointment ID: {appointmentDetails.id}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* NEXT STEPS - Light Version */}
              <div className="grid gap-4 sm:gap-6 sm:grid-cols-3">
                {[
                  { 
                    icon: '📧', 
                    title: 'Email Confirmation', 
                    desc: 'Check your inbox', 
                    color: 'bg-blue-50 border border-blue-100',
                    detail: 'Confirmation email sent within 15 minutes'
                  },
                  { 
                    icon: '⏳', 
                    title: 'Pending Approval', 
                    desc: '24-48 hours', 
                    color: 'bg-amber-50 border border-amber-100',
                    detail: 'We\'ll confirm via phone/email'
                  },
                  { 
                    icon: '🔐', 
                    title: appointmentDetails.accountCreated ? 'Account Created' : 'No Account', 
                    desc: appointmentDetails.accountCreated ? 'Check email for login' : 'Create account anytime', 
                    color: appointmentDetails.accountCreated ? 'bg-emerald-50 border border-emerald-100' : 'bg-gray-50 border border-gray-100',
                    detail: appointmentDetails.accountCreated ? 'Login details emailed' : 'You can create account later'
                  },
                ].map((step, i) => (
                  <div 
                    key={i} 
                    className="rounded-2xl border border-gray-200 bg-white p-6 text-center transition-all hover:shadow-sm hover:border-teal-200"
                  >
                    <div className={`mx-auto mb-4 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl ${step.color}`}>
                      <span className="text-xl">{step.icon}</span>
                    </div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900">{step.title}</h4>
                    <p className="mt-1 text-sm text-gray-600">{step.desc}</p>
                    <p className="mt-2 text-xs text-gray-500">{step.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* SIDEBAR ACTIONS - Light Version */}
            <div className="hidden lg:block space-y-8">
              <div className="rounded-3xl bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-100 p-8 shadow-sm">
                <h3 className="text-2xl font-semibold tracking-tight leading-tight text-gray-900 mb-4">Save Details</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Download your appointment request for reference. {!appointmentDetails.accountCreated && "Create an account to manage future bookings."}
                </p>
                <div className="space-y-4">
                  <button
                    onClick={() => window.print()}
                    className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-white border border-gray-300 py-4 text-xs font-semibold uppercase tracking-widest text-gray-700 transition-all hover:border-teal-400 hover:bg-teal-50"
                  >
                    <Download className="h-4 w-4" />
                    Save as PDF
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                  {!appointmentDetails.accountCreated && (
                    <button
                      onClick={() => router.push('/register')}
                      className="w-full rounded-2xl bg-white border border-teal-400 py-4 text-xs font-semibold uppercase tracking-widest text-teal-600 transition-all hover:bg-teal-50"
                    >
                      Create Account
                    </button>
                  )}
                </div>
              </div>

              <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Need Help?</h3>
                <div className="space-y-4">
                  <button
                    onClick={() => router.push('/contact')}
                    className="w-full rounded-xl border border-gray-300 py-3 text-sm font-medium text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50"
                  >
                    Contact Us
                  </button>
                  <button
                    onClick={handleReset}
                    className="w-full rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:shadow-md"
                  >
                    Book Another
                  </button>
                </div>
              </div>

              <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-gray-500 mb-4">
                  <MapPin className="h-3.5 w-3.5" /> CLINIC INFORMATION
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-gray-100 p-2">
                      <MapPin className="h-4 w-4 text-gray-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Makati Medical Center, Metro Manila</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-gray-100 p-2">
                      <Phone className="h-4 w-4 text-gray-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">(02) 8888-9999</span>
                  </div>
                </div>
              </div>
            </div>

            {/* MOBILE ACTIONS - Light Version */}
            <div className="lg:hidden space-y-6">
              <div className="rounded-2xl bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-100 p-6 shadow-sm">
                <h3 className="text-xl font-semibold tracking-tight leading-tight text-gray-900 mb-4">Save Details</h3>
                <p className="text-sm text-gray-600 mb-6">
                  Download your appointment confirmation for reference.
                  {!appointmentDetails.accountCreated && " Create an account to manage bookings."}
                </p>
                <div className="space-y-3">
                  <button
                    onClick={() => window.print()}
                    className="w-full flex items-center justify-center gap-3 rounded-2xl bg-white border border-gray-300 py-3 text-xs font-medium uppercase tracking-widest text-gray-700"
                  >
                    <Download className="h-4 w-4" />
                    Save as PDF
                  </button>
                  {!appointmentDetails.accountCreated && (
                    <button
                      onClick={() => router.push('/register')}
                      className="w-full rounded-2xl bg-white border border-teal-400 py-3 text-xs font-medium uppercase tracking-widest text-teal-600"
                    >
                      Create Account
                    </button>
                  )}
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Help?</h3>
                <div className="space-y-3">
                  <button
                    onClick={() => router.push('/contact')}
                    className="w-full rounded-xl border border-gray-300 py-3 text-sm font-medium text-gray-700"
                  >
                    Contact Us
                  </button>
                  <button
                    onClick={handleReset}
                    className="w-full rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 py-3 text-sm font-semibold text-white shadow-sm"
                  >
                    Book Another
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-12 space-y-8 sm:space-y-12 animate-in fade-in slide-in-from-top-4 duration-700">
        
        {/* Mobile Progress Bar */}
        <MobileProgressBar />

        {/* 1. TOP HEADER SECTION - Light Version */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-8 border-b border-gray-200 pb-6 sm:pb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-teal-500 mb-2">
              <div className="h-1.5 w-1.5 rounded-full bg-teal-400" />
              <span className="hidden sm:inline">Guest Booking</span>
              <span className="sm:hidden">Guest</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">Book Appointment</h1>
            <p className="mt-2 text-sm text-gray-600 hidden sm:block">
              Schedule your dental visit as a guest. Create an account during booking for easier management.
            </p>
            <p className="mt-2 text-sm text-gray-600 sm:hidden">
              Book as guest or create account.
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => router.push('/login')}
              className="rounded-xl border border-gray-300 px-4 py-2 text-xs font-medium text-gray-700 transition-all hover:border-teal-400 hover:text-teal-600"
            >
              Login
            </button>
            <span className="text-xs font-medium uppercase tracking-widest text-gray-400">
              Guest Mode
            </span>
          </div>
        </div>

        {/* 2. DESKTOP PROGRESS BAR - Light Version */}
        <div className="hidden lg:block rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between overflow-x-auto">
            {['Service', 'Schedule', 'Details', 'Confirm'].map((step, index) => (
              <div key={step} className="flex items-center min-w-0">
                <div className={`relative h-14 w-14 rounded-2xl border-2 flex items-center justify-center transition-all duration-500 ${
                  currentStep > index + 1
                    ? 'border-emerald-400 bg-emerald-50'
                    : currentStep === index + 1
                    ? 'border-teal-500 bg-teal-500 text-white shadow-md'
                    : 'border-gray-200 bg-white text-gray-400'
                }`}>
                  {currentStep > index + 1 ? (
                    <CheckCircle className="h-6 w-6 text-emerald-500" />
                  ) : (
                    <span className="text-lg font-semibold">{index + 1}</span>
                  )}
                  {currentStep === index + 1 && (
                    <div className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-emerald-400 animate-pulse" />
                  )}
                </div>
                <div className="ml-4 min-w-0">
                  <span className={`text-xs font-medium uppercase tracking-widest ${
                    currentStep >= index + 1 ? 'text-gray-700' : 'text-gray-400'
                  }`}>
                    Step {index + 1}
                  </span>
                  <p className={`text-sm font-semibold truncate ${
                    currentStep >= index + 1 ? 'text-gray-900' : 'text-gray-400'
                  }`}>
                    {step}
                  </p>
                </div>
                {index < 3 && (
                  <div className={`mx-4 sm:mx-8 h-1 w-8 sm:w-16 rounded-full transition-all duration-500 ${
                    currentStep > index + 1 ? 'bg-emerald-400' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 3. MAIN CONTENT */}
        <div className="grid gap-6 sm:gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            
            {/* STEP 1: SERVICE SELECTION */}
            {currentStep === 1 && (
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-center justify-between px-2">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900">Select Service</h2>
                    <p className="text-xs font-medium uppercase tracking-widest text-gray-400 hidden sm:block">Philippine Pricing - Guest Booking</p>
                    <p className="text-xs font-medium uppercase tracking-widest text-gray-400 sm:hidden">Guest - PHP</p>
                  </div>
                  <span className="rounded-full bg-teal-50 px-3 sm:px-4 py-1 text-xs font-medium uppercase tracking-widest text-teal-600">
                    {filteredServices.length}
                  </span>
                </div>

                {/* SEARCH & FILTER BAR - Fixed Input Text Color */}
                <div className="rounded-2xl sm:rounded-3xl border border-gray-200 bg-white shadow-sm">
                  <div className="relative p-4 border-b border-gray-200">
                    <div className="relative">
                      <Search className="absolute left-4 top-1/2 h-4 w-4 sm:h-5 sm:w-5 -translate-y-1/2 text-gray-400" />
                      <input
                        type="search"
                        placeholder="Search services..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full rounded-xl border border-gray-300 bg-gray-50 pl-10 sm:pl-12 pr-10 py-3 text-sm font-medium text-gray-900 placeholder:text-gray-500 focus:bg-white focus:border-teal-400 focus:outline-none transition-all"
                      />
                      {searchQuery && (
                        <button
                          onClick={() => setSearchQuery('')}
                          className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <X className="h-4 w-4 text-gray-400" />
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Filter className="h-4 w-4 text-gray-400" />
                          <span className="text-xs font-medium uppercase tracking-widest text-gray-400">Categories</span>
                        </div>
                        {categoryFilter !== 'all' && (
                          <button
                            onClick={() => setCategoryFilter('all')}
                            className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
                          >
                            Reset
                          </button>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                          <button
                            key={category}
                            onClick={() => setCategoryFilter(category)}
                            className={`relative rounded-xl px-3 sm:px-4 py-2 text-center transition-all ${
                              categoryFilter === category
                                ? 'bg-teal-500 text-white shadow-sm'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                          >
                            <span className={`text-xs font-medium uppercase tracking-widest ${
                              categoryFilter === category ? 'text-white' : 'text-gray-600'
                            }`}>
                              {category === 'all' ? 'All' : category.slice(0, 3)}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {searchQuery && (
                      <div className="pt-4 border-t border-gray-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-700">
                              Results for "{searchQuery}"
                            </p>
                            <p className="text-xs text-gray-500">
                              {filteredServices.length} found
                            </p>
                          </div>
                          <button
                            onClick={clearAllFilters}
                            className="text-xs font-medium uppercase tracking-widest text-gray-400 hover:text-gray-600 transition-colors flex items-center gap-1"
                          >
                            <X className="h-3 w-3" />
                            Clear
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* SERVICES GRID - Light Version */}
                <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
                  {filteredServices.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={`group rounded-2xl border border-gray-200 bg-white p-4 sm:p-6 text-left transition-all hover:shadow-sm ${
                        selectedService === service.id
                          ? 'border-teal-400 bg-gradient-to-r from-teal-50 to-cyan-50'
                          : 'hover:border-teal-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`rounded-xl p-2 transition-colors group-hover:bg-teal-500 group-hover:text-white ${
                            selectedService === service.id ? 'bg-teal-500 text-white' : 'bg-gray-100 text-gray-700'
                          }`}>
                            <Activity className="h-4 w-4 sm:h-5 sm:w-5" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="text-base sm:text-lg font-semibold text-gray-900 truncate">{service.name}</h3>
                            <p className="text-xs sm:text-sm text-gray-500 truncate">{service.category}</p>
                          </div>
                        </div>
                        {service.popular && (
                          <>
                            <span className="rounded-full bg-emerald-100 px-2 py-1 text-[8px] sm:text-[10px] font-medium uppercase tracking-widest text-emerald-700 hidden sm:inline-flex items-center">
                              <Sparkles className="h-2 w-2 sm:h-3 sm:w-3 mr-1" /> Popular
                            </span>
                            <span className="rounded-full bg-emerald-100 px-2 py-1 text-[8px] font-medium uppercase tracking-widest text-emerald-700 sm:hidden">
                              ★
                            </span>
                          </>
                        )}
                      </div>
                      <div className="mt-4 sm:mt-6 flex items-center justify-between">
                        <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium text-gray-600">
                          <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                          {service.duration} min
                        </div>
                        <div className="text-right">
                          <p className="text-lg sm:text-2xl font-semibold text-gray-900">
                            {PHP}{service.price.toLocaleString()}
                          </p>
                          <p className="text-xs font-medium text-gray-500 uppercase tracking-tight hidden sm:block">Philippine Peso</p>
                          <p className="text-xs font-medium text-gray-500 uppercase tracking-tight sm:hidden">PHP</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Empty State */}
                {filteredServices.length === 0 && (
                  <div className="text-center py-8 sm:py-12">
                    <div className="mx-auto mb-4 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gray-50">
                      <Search className="h-5 w-5 sm:h-7 sm:w-7 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No services found</h3>
                    <p className="text-gray-500 mb-4 sm:mb-6 text-sm">
                      No results for "{searchQuery}"
                      {categoryFilter !== 'all' && ` in ${categoryFilter}`}
                    </p>
                    <button
                      onClick={clearAllFilters}
                      className="rounded-xl border border-gray-300 px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-gray-700 transition-all hover:border-teal-400 hover:text-teal-600"
                    >
                      Clear filters
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* STEP 2: SCHEDULE */}
            {currentStep === 2 && (
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-center justify-between px-2">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900">Select Schedule</h2>
                    <p className="text-xs font-medium uppercase tracking-widest text-gray-400">Available Time Slots</p>
                  </div>
                  {serviceDetails && (
                    <span className="rounded-full bg-teal-50 px-3 sm:px-4 py-1 text-xs font-medium uppercase tracking-widest text-teal-600 truncate max-w-[120px]">
                      {serviceDetails.name.split(' ')[0]}
                    </span>
                  )}
                </div>

                {/* DENTIST SELECTION - Light Version */}
                <div className="rounded-2xl sm:rounded-3xl border border-gray-200 bg-white p-4 sm:p-8 shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-gray-500 mb-4 sm:mb-6">
                    <User className="h-3.5 w-3.5" /> CHOOSE DENTIST
                  </div>
                  <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
                    {filteredDentists.map((dentist) => (
                      <button
                        key={dentist.id}
                        onClick={() => setSelectedDentist(dentist.id)}
                        className={`group rounded-2xl border border-gray-200 bg-white p-4 sm:p-6 text-left transition-all hover:shadow-sm ${
                          selectedDentist === dentist.id
                            ? 'border-purple-400 bg-gradient-to-r from-purple-50 to-pink-50'
                            : 'hover:border-purple-300'
                        }`}
                      >
                        <div className="flex items-center gap-3 sm:gap-4">
                          <div className={`rounded-2xl p-2 sm:p-3 text-lg transition-colors group-hover:bg-purple-500 group-hover:text-white ${
                            selectedDentist === dentist.id ? 'bg-purple-500 text-white' : 'bg-gradient-to-r from-purple-50 to-pink-50'
                          }`}>
                            {dentist.image}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between">
                              <div className="min-w-0">
                                <h4 className="text-base sm:text-lg font-semibold text-gray-900 truncate">{dentist.name}</h4>
                                <p className="text-xs sm:text-sm text-gray-500 truncate">{dentist.specialty}</p>
                              </div>
                              <div className="flex items-center ml-2">
                                <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
                                <span className="ml-1 text-sm font-medium text-gray-900">{dentist.rating}</span>
                              </div>
                            </div>
                            <div className="mt-3 sm:mt-4 flex items-center justify-between">
                              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-1 text-[8px] sm:text-[10px] font-medium uppercase tracking-widest text-emerald-700">
                                <CheckCircle className="h-2 w-2 sm:h-3 sm:w-3" />
                                Available
                              </span>
                              <p className="text-xs sm:text-sm font-medium text-gray-500">{dentist.experience}</p>
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* DATE & TIME SELECTION - Fixed Input Text Color */}
                <div className="grid gap-4 sm:gap-8 sm:grid-cols-2">
                  <div className="rounded-2xl sm:rounded-3xl border border-gray-200 bg-white p-4 sm:p-8 shadow-sm">
                    <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-gray-500 mb-4 sm:mb-6">
                      <Calendar className="h-3.5 w-3.5" /> SELECT DATE
                    </div>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 h-4 w-4 sm:h-5 sm:w-5 -translate-y-1/2 text-gray-400" />
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        min={today}
                        max={maxDateString}
                        className="w-full rounded-xl border border-gray-300 bg-gray-50 pl-10 sm:pl-12 pr-4 py-3 text-sm font-medium text-gray-900 focus:bg-white focus:border-teal-400 focus:outline-none transition-all"
                      />
                    </div>
                    <p className="mt-3 sm:mt-4 text-xs sm:text-sm font-medium text-gray-500">
                      Today - {new Date(maxDateString).toLocaleDateString('en-PH', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </p>
                  </div>

                  <div className="rounded-2xl sm:rounded-3xl border border-gray-200 bg-white p-4 sm:p-8 shadow-sm">
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-gray-500">
                        <Clock className="h-3.5 w-3.5" /> TIME SLOTS
                      </div>
                      {selectedDate && (
                        <span className="text-xs sm:text-sm font-medium text-teal-600 truncate max-w-[100px]">
                          {new Date(selectedDate).toLocaleDateString('en-PH', {
                            month: 'short',
                            day: 'numeric'
                          })}
                        </span>
                      )}
                    </div>
                    {selectedDate ? (
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`group rounded-xl border border-gray-300 py-2 sm:py-3 text-xs sm:text-sm font-medium text-gray-700 transition-all hover:shadow-sm ${
                              selectedTime === time
                                ? 'border-teal-500 bg-teal-500 text-white shadow-sm'
                                : 'bg-white hover:border-teal-400'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center py-8 sm:py-12">
                        <Calendar className="h-8 w-8 sm:h-12 sm:w-12 text-gray-300 mb-3 sm:mb-4" />
                        <p className="text-sm font-medium text-gray-600">Select a date first</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: PATIENT DETAILS - Fixed Input Text Colors */}
            {currentStep === 3 && (
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-center justify-between px-2">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900">Your Information</h2>
                    <p className="text-xs font-medium uppercase tracking-widest text-gray-400">Guest Registration</p>
                  </div>
                  <span className="rounded-full bg-gray-100 px-3 sm:px-4 py-1 text-xs font-medium uppercase tracking-widest text-gray-500">
                    Step 3 of 4
                  </span>
                </div>

                <div className="rounded-2xl sm:rounded-3xl border border-gray-200 bg-white p-4 sm:p-8 shadow-sm">
                  <form onSubmit={(e) => { e.preventDefault(); handleNextStep(); }}>
                    <div className="space-y-6 sm:space-y-8">
                      {/* Personal Info */}
                      <div className="grid gap-4 sm:gap-8 sm:grid-cols-2">
                        <div>
                          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-gray-500 mb-3">
                            <User className="h-3.5 w-3.5" /> FIRST NAME *
                          </div>
                          <div className="relative">
                            <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg text-gray-400">
                              👤
                            </div>
                            <input
                              type="text"
                              value={patientInfo.firstName}
                              onChange={(e) => setPatientInfo({...patientInfo, firstName: e.target.value})}
                              required
                              className="w-full rounded-xl border border-gray-300 bg-gray-50 pl-12 pr-4 py-3 text-sm font-medium text-gray-900 placeholder:text-gray-500 focus:bg-white focus:border-teal-400 focus:outline-none transition-all"
                              placeholder="Juan"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-gray-500 mb-3">
                            <User className="h-3.5 w-3.5" /> LAST NAME *
                          </div>
                          <div className="relative">
                            <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg text-gray-400">
                              👤
                            </div>
                            <input
                              type="text"
                              value={patientInfo.lastName}
                              onChange={(e) => setPatientInfo({...patientInfo, lastName: e.target.value})}
                              required
                              className="w-full rounded-xl border border-gray-300 bg-gray-50 pl-12 pr-4 py-3 text-sm font-medium text-gray-900 placeholder:text-gray-500 focus:bg-white focus:border-teal-400 focus:outline-none transition-all"
                              placeholder="Dela Cruz"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Contact Info */}
                      <div className="grid gap-4 sm:gap-8 sm:grid-cols-2">
                        <div>
                          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-gray-500 mb-3">
                            <Smartphone className="h-3.5 w-3.5" /> MOBILE NUMBER *
                          </div>
                          <div className="relative">
                            <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg text-gray-400">
                              📱
                            </div>
                            <div className="pointer-events-none absolute left-12 top-1/2 -translate-y-1/2 text-sm font-medium text-gray-700">
                              +63
                            </div>
                            <input
                              type="tel"
                              value={patientInfo.phone}
                              onChange={(e) => {
                                const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                                setPatientInfo({...patientInfo, phone: value});
                              }}
                              required
                              className="w-full rounded-xl border border-gray-300 bg-gray-50 pl-20 pr-4 py-3 text-sm font-medium text-gray-900 placeholder:text-gray-500 focus:bg-white focus:border-teal-400 focus:outline-none transition-all"
                              placeholder="912 345 6789"
                            />
                          </div>
                          <p className="mt-2 text-xs font-medium text-gray-500">+63 format</p>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-gray-500 mb-3">
                            <Mail className="h-3.5 w-3.5" /> EMAIL ADDRESS *
                          </div>
                          <div className="relative">
                            <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg text-gray-400">
                              ✉️
                            </div>
                            <input
                              type="email"
                              value={patientInfo.email}
                              onChange={(e) => setPatientInfo({...patientInfo, email: e.target.value})}
                              required
                              className="w-full rounded-xl border border-gray-300 bg-gray-50 pl-12 pr-4 py-3 text-sm font-medium text-gray-900 placeholder:text-gray-500 focus:bg-white focus:border-teal-400 focus:outline-none transition-all"
                              placeholder="juan@example.com"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Additional Info */}
                      <div className="grid gap-4 sm:gap-8 sm:grid-cols-2">
                        <div>
                          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-gray-500 mb-3">
                            <Calendar className="h-3.5 w-3.5" /> BIRTHDATE
                          </div>
                          <div className="relative">
                            <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg text-gray-400">
                              🎂
                            </div>
                            <input
                              type="date"
                              value={patientInfo.birthdate}
                              onChange={(e) => setPatientInfo({...patientInfo, birthdate: e.target.value})}
                              max={today}
                              className="w-full rounded-xl border border-gray-300 bg-gray-50 pl-12 pr-4 py-3 text-sm font-medium text-gray-900 focus:bg-white focus:border-teal-400 focus:outline-none transition-all"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-gray-500 mb-3">
                            <User className="h-3.5 w-3.5" /> GENDER
                          </div>
                          <div className="relative">
                            <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg text-gray-400">
                              ⚧
                            </div>
                            <select
                              value={patientInfo.gender}
                              onChange={(e) => setPatientInfo({...patientInfo, gender: e.target.value})}
                              className="w-full rounded-xl border border-gray-300 bg-gray-50 pl-12 pr-4 py-3 text-sm font-medium text-gray-900 focus:bg-white focus:border-teal-400 focus:outline-none transition-all"
                            >
                              <option value="" className="text-gray-500">Select</option>
                              <option value="male" className="text-gray-900">Male</option>
                              <option value="female" className="text-gray-900">Female</option>
                              <option value="other" className="text-gray-900">Other</option>
                              <option value="prefer-not-to-say" className="text-gray-900">Prefer not to say</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Address */}
                      <div>
                        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-gray-500 mb-3">
                          <MapPin className="h-3.5 w-3.5" /> ADDRESS
                        </div>
                        <div className="relative">
                          <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg text-gray-400">
                            🏠
                          </div>
                          <input
                            type="text"
                            value={patientInfo.address}
                            onChange={(e) => setPatientInfo({...patientInfo, address: e.target.value})}
                            className="w-full rounded-xl border border-gray-300 bg-gray-50 pl-12 pr-4 py-3 text-sm font-medium text-gray-900 placeholder:text-gray-500 focus:bg-white focus:border-teal-400 focus:outline-none transition-all"
                            placeholder="123 Street, City, Province"
                          />
                        </div>
                      </div>

                      {/* Account Creation - Fixed Input Text Colors */}
                      <div className="rounded-2xl border border-gray-200 bg-gray-100 p-4 sm:p-6">
                        <div className="flex items-start gap-4">
                          <input
                            type="checkbox"
                            id="createAccount"
                            checked={createAccount}
                            onChange={(e) => setCreateAccount(e.target.checked)}
                            className="mt-1 h-5 w-5 rounded border border-gray-300 text-teal-500 focus:ring-teal-400 focus:ring-2 focus:ring-offset-2 flex-shrink-0"
                          />
                          <div className="flex-1">
                            <label htmlFor="createAccount" className="block text-sm font-medium text-gray-900 mb-2">
                              Create Account (Optional)
                            </label>
                            <p className="text-sm text-gray-600 mb-4">
                              Create an account to track appointments, view history, and manage bookings easily.
                            </p>
                            
                            {createAccount && (
                              <div className="space-y-4 mt-4">
                                <div className="grid gap-4 sm:grid-cols-2">
                                  <div>
                                    <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-gray-500 mb-3">
                                      <Lock className="h-3.5 w-3.5" /> PASSWORD *
                                    </div>
                                    <div className="relative">
                                      <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg text-gray-400">
                                        🔒
                                      </div>
                                      <input
                                        type={showPassword ? "text" : "password"}
                                        value={patientInfo.password}
                                        onChange={(e) => setPatientInfo({...patientInfo, password: e.target.value})}
                                        required={createAccount}
                                        className="w-full rounded-xl border border-gray-300 bg-gray-50 pl-12 pr-10 py-3 text-sm font-medium text-gray-900 placeholder:text-gray-500 focus:bg-white focus:border-teal-400 focus:outline-none transition-all"
                                        placeholder="••••••••"
                                      />
                                      <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                      >
                                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                      </button>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-gray-500 mb-3">
                                      <Lock className="h-3.5 w-3.5" /> CONFIRM *
                                    </div>
                                    <div className="relative">
                                      <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg text-gray-400">
                                        🔒
                                      </div>
                                      <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        value={patientInfo.confirmPassword}
                                        onChange={(e) => setPatientInfo({...patientInfo, confirmPassword: e.target.value})}
                                        required={createAccount}
                                        className="w-full rounded-xl border border-gray-300 bg-gray-50 pl-12 pr-10 py-3 text-sm font-medium text-gray-900 placeholder:text-gray-500 focus:bg-white focus:border-teal-400 focus:outline-none transition-all"
                                        placeholder="••••••••"
                                      />
                                      <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                      >
                                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex items-start gap-3">
                                  <input
                                    type="checkbox"
                                    id="terms"
                                    checked={agreedToTerms}
                                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                                    required={createAccount}
                                    className="mt-1 h-4 w-4 rounded border border-gray-300 text-teal-500 focus:ring-teal-400 focus:ring-2 focus:ring-offset-2 flex-shrink-0"
                                  />
                                  <label htmlFor="terms" className="text-xs text-gray-600">
                                    I agree to the <a href="/terms" className="text-teal-600 hover:underline">Terms of Service</a> and <a href="/privacy" className="text-teal-600 hover:underline">Privacy Policy</a>
                                  </label>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Notes - Fixed Textarea Text Color */}
                      <div>
                        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-gray-500 mb-3">
                          <FileText className="h-3.5 w-3.5" /> ADDITIONAL NOTES
                        </div>
                        <textarea
                          value={patientInfo.notes}
                          onChange={(e) => setPatientInfo({...patientInfo, notes: e.target.value})}
                          rows={3}
                          className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-900 placeholder:text-gray-500 focus:bg-white focus:border-teal-400 focus:outline-none transition-all"
                          placeholder="Any concerns, symptoms, or special requests..."
                        />
                        <p className="mt-2 text-xs font-medium text-gray-500">
                          Help your dentist prepare for your visit
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* STEP 4: REVIEW - Light Version */}
            {currentStep === 4 && (
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-center justify-between px-2">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900">Review Appointment</h2>
                    <p className="text-xs font-medium uppercase tracking-widest text-gray-400">Final Confirmation - Guest Booking</p>
                  </div>
                  <span className="rounded-full bg-emerald-100 px-3 sm:px-4 py-1 text-xs font-medium uppercase tracking-widest text-emerald-700">
                    Last Step
                  </span>
                </div>

                <div className="rounded-2xl sm:rounded-3xl border border-gray-200 bg-white p-4 sm:p-8 shadow-sm">
                  <div className="space-y-6 sm:space-y-8">
                    {/* Guest Notice */}
                    <div className="rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 p-4 sm:p-6">
                      <div className="flex gap-3 sm:gap-4">
                        <div className="rounded-xl bg-amber-100 p-2 sm:p-2.5 flex-shrink-0">
                          <AlertTriangle className="h-5 w-5 sm:h-6 sm:w-6 text-amber-500" />
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-amber-800 mb-3">📝 Guest Booking Notice</h4>
                          <ul className="space-y-1 sm:space-y-2 text-sm text-amber-700">
                            <li className="flex items-center gap-2">• This is a booking request - confirmation pending</li>
                            <li className="flex items-center gap-2">• We'll contact you within 24 hours via phone/email</li>
                            <li className="flex items-center gap-2">• Arrive 15 minutes before appointment time</li>
                            {createAccount && (
                              <li className="flex items-center gap-2">• Account will be created - check email for login details</li>
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Summary Card */}
                    <div className="rounded-2xl bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-100 p-6 sm:p-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-6">Appointment Request Summary</h3>
                      <div className="space-y-4 sm:space-y-6">
                        {serviceDetails && (
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 sm:pb-6 border-b border-teal-200">
                            <div className="flex items-center gap-3 sm:gap-4">
                              <div className="rounded-2xl bg-white border border-teal-200 p-3">
                                <Activity className="h-6 w-6 text-teal-500" />
                              </div>
                              <div>
                                <p className="text-lg font-semibold text-gray-900">{serviceDetails.name}</p>
                                <p className="text-sm text-gray-500">{serviceDetails.category}</p>
                              </div>
                            </div>
                            <div className="text-right sm:text-left">
                              <p className="text-2xl font-semibold text-gray-900">{PHP}{serviceDetails.price.toLocaleString()}</p>
                              <p className="text-sm text-gray-500">{serviceDetails.duration} min</p>
                            </div>
                          </div>
                        )}

                        {dentistDetails && selectedDate && selectedTime && (
                          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
                            <div className="flex items-center gap-3 sm:gap-4">
                              <div className="rounded-2xl bg-white border border-purple-200 p-3">
                                <div className="text-xl">{dentistDetails.image}</div>
                              </div>
                              <div className="min-w-0">
                                <p className="text-lg font-semibold text-gray-900 truncate">{dentistDetails.name}</p>
                                <p className="text-sm text-gray-500 truncate">{dentistDetails.specialty}</p>
                                <div className="flex items-center gap-2 mt-2">
                                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                  <span className="text-sm font-medium">{dentistDetails.rating}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 sm:gap-4">
                              <div className="rounded-2xl bg-white border border-emerald-200 p-3">
                                <Calendar className="h-6 w-6 text-emerald-500" />
                              </div>
                              <div>
                                <p className="text-lg font-semibold text-gray-900">
                                  <span className="hidden sm:inline">{formatDate(selectedDate)}</span>
                                  <span className="sm:hidden">
                                    {new Date(selectedDate).toLocaleDateString('en-PH', {
                                      weekday: 'short',
                                      month: 'short',
                                      day: 'numeric'
                                    })}
                                  </span>
                                </p>
                                <p className="text-sm text-gray-500">{selectedTime}</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Patient Info Summary */}
                    <div className="rounded-2xl border border-gray-200 bg-gray-100 p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Patient Information</h4>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <p className="text-xs font-medium uppercase tracking-widest text-gray-400">Name</p>
                          <p className="text-base font-semibold text-gray-900">
                            {patientInfo.firstName} {patientInfo.lastName}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-medium uppercase tracking-widest text-gray-400">Mobile</p>
                          <p className="text-base font-semibold text-gray-900">+63 {formatPhone(patientInfo.phone)}</p>
                        </div>
                        <div>
                          <p className="text-xs font-medium uppercase tracking-widest text-gray-400">Email</p>
                          <p className="text-base font-semibold text-gray-900 truncate">{patientInfo.email}</p>
                        </div>
                        {createAccount && (
                          <div>
                            <p className="text-xs font-medium uppercase tracking-widest text-gray-400">Account</p>
                            <p className="text-base font-semibold text-emerald-600">Will be created</p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Consent - Light Version */}
                    <div className="rounded-2xl border border-gray-200 bg-gray-100 p-4 sm:p-6">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <input
                          type="checkbox"
                          id="consent"
                          required
                          className="mt-1 h-5 w-5 rounded border border-gray-300 text-teal-500 focus:ring-teal-400 focus:ring-2 focus:ring-offset-2 flex-shrink-0"
                        />
                        <div>
                          <label htmlFor="consent" className="block text-sm font-medium text-gray-900 mb-2">
                            Consent & Confirmation
                          </label>
                          <p className="text-sm text-gray-600">
                            I understand this is a guest booking request and confirmation is pending. 
                            I agree to be contacted via phone/email for appointment confirmation. 
                            I confirm all information provided is accurate.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* DESKTOP NAVIGATION - Light Version */}
            <div className="hidden lg:flex items-center justify-between pt-8">
              {currentStep > 1 && (
                <button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="group rounded-xl border border-gray-300 px-8 py-3 text-sm font-medium text-gray-700 transition-all hover:border-teal-400 hover:text-teal-600"
                >
                  ← Previous Step
                </button>
              )}
              <button
                onClick={currentStep === 4 ? handleSubmit : handleNextStep}
                disabled={isSubmitting}
                className={`group ml-auto rounded-xl px-10 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:shadow-md active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed ${
                  currentStep === 4
                    ? 'bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600'
                    : 'bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Processing...
                  </span>
                ) : currentStep === 4 ? (
                  <span className="flex items-center gap-2">
                    Submit Booking Request
                    <Zap className="h-4 w-4" />
                  </span>
                ) : (
                  'Continue →'
                )}
              </button>
            </div>
          </div>

          {/* DESKTOP SIDEBAR - Light Version */}
          <div className="hidden lg:block space-y-8">
            {/* SUMMARY CARD */}
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Summary</h3>
                <div className="flex items-center gap-1 text-xs font-medium uppercase tracking-widest text-teal-600">
                  <Shield className="h-3.5 w-3.5" />
                  Guest
                </div>
              </div>
              <div className="space-y-6">
                {serviceDetails ? (
                  <>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-2">Service</p>
                      <p className="text-lg font-semibold text-gray-900">{serviceDetails.name}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-sm text-gray-500">{serviceDetails.duration} min</span>
                        <span className="text-lg font-semibold text-gray-900">{PHP}{serviceDetails.price.toLocaleString()}</span>
                      </div>
                    </div>

                    {dentistDetails && (
                      <div>
                        <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-2">Dentist</p>
                        <div className="flex items-center gap-3">
                          <div className="rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 p-2 text-lg">
                            {dentistDetails.image}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">{dentistDetails.name}</p>
                            <p className="text-sm text-gray-500">{dentistDetails.specialty}</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {selectedDate && (
                      <div>
                        <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-2">Schedule</p>
                        <div className="flex items-center gap-3">
                          <div className="rounded-xl bg-emerald-50 p-2">
                            <Calendar className="h-4 w-4 text-emerald-500" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">{new Date(selectedDate).toLocaleDateString('en-PH', { 
                              month: 'short', 
                              day: 'numeric' 
                            })}</p>
                            <p className="text-sm text-gray-500">{selectedTime || 'Select time'}</p>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="pt-6 border-t border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-gray-900">Estimated Total</span>
                        <span className="text-3xl font-semibold text-gray-900">
                          {PHP}{serviceDetails.price.toLocaleString()}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">Payment at clinic</p>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-50">
                      <Activity className="h-7 w-7 text-gray-400" />
                    </div>
                    <p className="text-sm font-medium text-gray-600">Select a service</p>
                    <p className="mt-1 text-xs text-gray-400">Philippine pricing shown</p>
                  </div>
                )}
              </div>
            </div>

            {/* GUEST BENEFITS - Light Version */}
            <div className="rounded-3xl bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-100 p-8 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight leading-tight text-gray-900 mb-6">✨ Guest Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-white border border-teal-200 p-2">
                    <CheckCircle className="h-4 w-4 text-teal-500" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Easy booking without login</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-white border border-teal-200 p-2">
                    <CheckCircle className="h-4 w-4 text-teal-500" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Optional account creation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-white border border-teal-200 p-2">
                    <CheckCircle className="h-4 w-4 text-teal-500" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">24-hour confirmation</span>
                </div>
              </div>
            </div>

            {/* CREATE ACCOUNT CTA - Light Version */}
            {!createAccount && currentStep >= 3 && (
              <div className="rounded-3xl border border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50 p-8 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-white border border-purple-200 p-3">
                    <Lock className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-purple-800 mb-2">🔐 Create Account?</h4>
                    <p className="text-sm text-purple-700 mb-3">
                      Track appointments, view history, and manage bookings easily.
                    </p>
                    <div className="rounded-xl bg-white border border-purple-200 p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <input
                          type="checkbox"
                          id="sidebarCreateAccount"
                          checked={createAccount}
                          onChange={(e) => setCreateAccount(e.target.checked)}
                          className="h-4 w-4 rounded border border-purple-300 text-purple-500 focus:ring-purple-400"
                        />
                        <label htmlFor="sidebarCreateAccount" className="text-sm font-medium text-purple-800">
                          Create account during booking
                        </label>
                      </div>
                      <button
                        onClick={() => router.push('/register')}
                        className="w-full rounded-xl bg-white border border-purple-500 py-2 text-sm font-medium text-purple-600 transition-all hover:bg-purple-50"
                      >
                        Register Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Floating Action Button */}
        <MobileFAB />

        {/* Mobile Summary Sheet */}
        <MobileSummarySheet />
      </div>
    </div>
  );
}