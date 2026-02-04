'use client';
import { DollarSign, Download, Search, CreditCard, ChevronRight, TrendingUp } from 'lucide-react';

export default function BillingPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col justify-between gap-4 border-b border-gray-100 pb-8 md:flex-row md:items-end">
        <div>
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-blue-600 mb-2">
            <div className="h-1 w-1 rounded-full bg-blue-600" /> Financial Ledger
          </div>
          <h1 className="text-4xl font-black tracking-tight text-gray-900">Billing</h1>
          <p className="mt-2 text-sm font-medium text-gray-500">Track revenue, claims, and patient balances.</p>
        </div>
        <button className="flex items-center gap-2 rounded-xl bg-black px-5 py-3 text-sm font-bold text-white shadow-xl hover:bg-gray-800 transition-all">
          <Download className="h-4 w-4" /> Export Report
        </button>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <aside className="lg:col-span-3 space-y-4">
          <div className="bg-gray-900 rounded-3xl p-6 text-white shadow-2xl">
             <TrendingUp className="h-5 w-5 text-emerald-400 mb-4" />
             <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Monthly Revenue</p>
             <p className="text-3xl font-black mt-1">₱182.4k</p>
             <p className="text-[10px] font-bold text-emerald-400 mt-2">+12.5% vs last month</p>
          </div>
          <div className="rounded-3xl border border-gray-100 bg-white p-6">
             <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Total Unpaid</p>
             <p className="text-2xl font-black text-orange-500 mt-1">₱12,200</p>
          </div>
        </aside>

        <div className="lg:col-span-9 space-y-4">
          {[
            { inv: '#INV-9920', patient: 'Robert Davis', amount: '₱4,500', date: '2024-12-08', status: 'Paid' },
            { inv: '#INV-9921', patient: 'Sarah Johnson', amount: '₱1,200', date: '2024-12-08', status: 'Unpaid' }
          ].map((bill) => (
            <div key={bill.inv} className="group rounded-3xl border border-gray-100 bg-white p-6 shadow-sm hover:border-black/10 transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                   <div className="h-12 w-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                      <CreditCard className="h-5 w-5" />
                   </div>
                   <div>
                      <h3 className="text-lg font-bold text-gray-900">{bill.patient}</h3>
                      <p className="text-[10px] font-mono font-black text-gray-400 uppercase tracking-widest">{bill.inv} • {bill.date}</p>
                   </div>
                </div>
                <div className="flex items-center gap-8">
                   <p className="text-xl font-black text-gray-900">{bill.amount}</p>
                   <span className={`text-[10px] font-black uppercase px-3 py-1 rounded-full ${bill.status === 'Paid' ? 'bg-emerald-50 text-emerald-600' : 'bg-orange-50 text-orange-600'}`}>
                      {bill.status}
                   </span>
                   <button className="p-2 rounded-xl hover:bg-gray-50"><ChevronRight className="h-5 w-5 text-gray-300" /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}