'use client';

import { BarChart3, TrendingUp, Users, DollarSign, ArrowUpRight, ArrowDownRight, Activity } from 'lucide-react';

export default function AnalyticsPage() {
  const kpis = [
    { label: 'Total Revenue', value: '₱428,500', trend: '+14.2%', up: true, icon: DollarSign },
    { label: 'Patient Growth', value: '1,240', trend: '+8.1%', up: true, icon: Users },
    { label: 'Case Acceptance', value: '68%', trend: '-2.4%', up: false, icon: Activity },
    { label: 'Avg. Ticket', value: '₱3,450', trend: '+5.3%', up: true, icon: TrendingUp },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* HEADER */}
      <div className="flex flex-col justify-between gap-4 border-b border-gray-100 pb-8 md:flex-row md:items-end">
        <div>
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-blue-600 mb-2">
            <div className="h-1 w-1 rounded-full bg-blue-600" />
            Business Intelligence
          </div>
          <h1 className="text-4xl font-black tracking-tight text-gray-900">Analytics</h1>
          <p className="mt-2 text-sm font-medium text-gray-500">Real-time performance metrics for Valencia Hub.</p>
        </div>
        <button className="flex items-center gap-2 rounded-xl border border-gray-200 px-5 py-3 text-sm font-bold hover:bg-gray-50 transition-all">
          Generate Report
        </button>
      </div>

      {/* KPI GRID */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="group rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="rounded-2xl bg-gray-50 p-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <kpi.icon className="h-5 w-5" />
              </div>
              <span className={`flex items-center text-[10px] font-black uppercase tracking-widest ${kpi.up ? 'text-emerald-500' : 'text-red-500'}`}>
                {kpi.up ? <ArrowUpRight className="mr-1 h-3 w-3" /> : <ArrowDownRight className="mr-1 h-3 w-3" />}
                {kpi.trend}
              </span>
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">{kpi.label}</p>
            <p className="mt-1 text-3xl font-black text-gray-900">{kpi.value}</p>
          </div>
        ))}
      </div>

      {/* CHARTS PLACEHOLDER */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="rounded-[2.5rem] border border-gray-100 bg-white p-8 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-sm font-black uppercase tracking-widest text-gray-900">Revenue Stream</h3>
            <select className="text-xs font-bold border-none bg-gray-50 rounded-lg p-2 outline-none">
              <option>Last 6 Months</option>
            </select>
          </div>
          <div className="flex h-64 items-end gap-2 px-2">
            {[40, 70, 45, 90, 65, 80].map((h, i) => (
              <div key={i} className="group relative flex-1">
                <div 
                  className="w-full bg-blue-100 rounded-t-xl group-hover:bg-blue-600 transition-all duration-500" 
                  style={{ height: `${h}%` }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2.5rem] border border-gray-100 bg-white p-8 shadow-sm">
          <h3 className="text-sm font-black uppercase tracking-widest text-gray-900 mb-8">Top Procedures</h3>
          <div className="space-y-6">
            {[
              { name: 'Cleaning', val: 85, color: 'bg-blue-600' },
              { name: 'Extraction', val: 40, color: 'bg-black' },
              { name: 'Orthodontics', val: 65, color: 'bg-indigo-500' },
            ].map((p) => (
              <div key={p.name} className="space-y-2">
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                  <span>{p.name}</span>
                  <span className="text-gray-400">{p.val}%</span>
                </div>
                <div className="h-2 w-full bg-gray-50 rounded-full overflow-hidden">
                  <div className={`h-full ${p.color} transition-all duration-1000`} style={{ width: `${p.val}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}