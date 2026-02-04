'use client';

import { useState, useEffect } from 'react';
import { 
  CreditCard, DollarSign, Download, ArrowUpRight, 
  Clock, CheckCircle2, AlertCircle, Receipt, ExternalLink
} from 'lucide-react';

const InvoiceCard = ({ invoice }: { invoice: any }) => (
  <div className="bg-white rounded-xl sm:rounded-[2rem] border border-gray-100 p-4 sm:p-6 shadow-sm hover:shadow-md transition-all group">
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6">
      <div className="flex gap-3 sm:gap-4">
        <div className={`h-10 w-10 sm:h-14 sm:w-14 rounded-lg sm:rounded-2xl flex items-center justify-center text-base sm:text-xl transition-colors ${
          invoice.status === 'Paid' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
        }`}>
          <Receipt className="h-4 w-4 sm:h-6 sm:w-6" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 sm:gap-2 mb-1">
            <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-blue-600">{invoice.date}</span>
            <span className="h-1 w-1 rounded-full bg-gray-300" />
            <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-gray-400">OR: {invoice.id}</span>
          </div>
          <h3 className="text-base sm:text-xl font-black text-gray-900 tracking-tight truncate">{invoice.description}</h3>
          <div className="flex items-center gap-1.5 sm:gap-2 mt-0.5 sm:mt-1">
            <div className={`h-1.5 w-1.5 rounded-full ${invoice.status === 'Paid' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
            <p className="text-xs font-bold text-gray-500">{invoice.status}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between sm:justify-end gap-4 mt-2 sm:mt-0">
        <div className="text-right">
          <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-gray-400">Total Amount</p>
          <p className="text-lg sm:text-2xl font-black text-gray-900">₱{invoice.amount.toLocaleString()}</p>
        </div>
        <button className="h-8 w-8 sm:h-12 sm:w-12 rounded-lg sm:rounded-xl bg-gray-50 text-gray-400 hover:bg-black hover:text-white flex items-center justify-center transition-all flex-shrink-0">
          <Download className="h-3 w-3 sm:h-5 sm:w-5" />
        </button>
      </div>
    </div>
  </div>
);

export default function BillingPage() {
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const invoices = [
    { id: '2024-8801', date: 'Nov 15, 2024', description: 'Oral Prophylaxis & X-Ray', amount: 1500, status: 'Paid' },
    { id: '2024-8802', date: 'Aug 22, 2024', description: 'Light-Cure Filling (Tooth #3)', amount: 2500, status: 'Paid' },
    { id: '2024-8803', date: 'Jan 10, 2024', description: 'Orthodontic Consultation', amount: 800, status: 'Pending' },
  ];

  useEffect(() => {
    setMounted(true);
    setIsLoading(false);
  }, []);

  if (!mounted || isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-100 border-t-black" />
        <p className="mt-4 text-[10px] font-black uppercase tracking-widest text-gray-400">Loading Billing Records...</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-12 space-y-8 sm:space-y-12 animate-in fade-in duration-700">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-gray-100 pb-6 sm:pb-10">
        <div>
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-blue-600 mb-2">
            <div className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            Financial Records
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-gray-900">Billing & Payments</h1>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base font-medium text-gray-500 max-w-xl">
            Manage your invoices, official receipts (OR), and HMO coverage in one place.
          </p>
        </div>
        
        <button className="flex items-center justify-center gap-2 sm:gap-3 bg-black text-white px-5 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-600 transition-all active:scale-95 shadow-xl shadow-black/10 mt-4 sm:mt-0">
          <CreditCard className="h-3 w-3 sm:h-4 sm:w-4" /> 
          <span>Add Payment Method</span>
        </button>
      </div>

      {/* STATS GRID */}
      <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
        <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border-2 border-gray-100 shadow-sm">
          <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600 mb-3 sm:mb-4" />
          <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Total Paid</p>
          <p className="text-xl sm:text-2xl font-black text-gray-900">₱4,000.00</p>
        </div>
        <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border-2 border-gray-100 shadow-sm">
          <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-amber-600 mb-3 sm:mb-4" />
          <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Pending Dues</p>
          <p className="text-xl sm:text-2xl font-black text-gray-900">₱800.00</p>
        </div>
        <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border-2 border-gray-100 shadow-sm">
          <DollarSign className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600 mb-3 sm:mb-4" />
          <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Records</p>
          <p className="text-xl sm:text-2xl font-black text-gray-900">{invoices.length} Invoices</p>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* LEFT COLUMN: INVOICES */}
        <div className="lg:col-span-2 space-y-8 sm:space-y-10">
          <div className="bg-white rounded-2xl sm:rounded-[2.5rem] border-2 border-gray-100 p-5 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-10">
              <div className="p-2 sm:p-3 bg-blue-50 rounded-xl sm:rounded-2xl text-blue-600">
                <Receipt className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-gray-900">Recent Transactions</h2>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {invoices.map((invoice, index) => (
                <div 
                  key={invoice.id} 
                  className="animate-in fade-in slide-in-from-left-4"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <InvoiceCard invoice={invoice} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: ACTIONS & INFO */}
        <div className="space-y-6 sm:space-y-8">
          {/* HMO BOX */}
          <div className="bg-black rounded-2xl sm:rounded-[2.5rem] p-5 sm:p-8 text-white shadow-xl shadow-black/10">
            <h3 className="text-lg sm:text-xl font-black mb-3 sm:mb-4">HMO Policy</h3>
            <p className="text-sm text-gray-400 mb-6 sm:mb-8 leading-relaxed">
              Maxicare Gold Plus — Active dental coverage including biannual cleaning.
            </p>
            <button className="w-full flex items-center justify-center gap-2 sm:gap-3 bg-white text-black py-3 sm:py-4 rounded-xl sm:rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-emerald-400 transition-all active:scale-[0.98]">
              <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>Check Benefits</span>
            </button>
          </div>

          {/* HMO DETAILS */}
          <div className="bg-white rounded-2xl sm:rounded-[2.5rem] border-2 border-gray-100 p-5 sm:p-8">
            <h3 className="text-base sm:text-lg font-black text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
              <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" /> 
              <span>Coverage Status</span>
            </h3>
            <div className="space-y-4 sm:space-y-6">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Annual Limit Used</p>
                <div className="flex items-center gap-3">
                  <div className="h-2 flex-1 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 w-[35%]" />
                  </div>
                  <span className="text-xs font-black text-gray-900">₱7k/₱20k</span>
                </div>
              </div>
            </div>
          </div>

          {/* HELP SECTION */}
          <div className="p-4 space-y-3">
            <button className="w-full flex items-center justify-between p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gray-50 border border-gray-200 hover:border-black transition-all group">
              <div className="flex items-center gap-2 sm:gap-3">
                <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400 group-hover:text-black" />
                <span className="text-xs font-black text-gray-900 uppercase tracking-widest">Message Billing</span>
              </div>
              <ArrowUpRight className="h-3 w-3 sm:h-4 sm:w-4 text-gray-300 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}