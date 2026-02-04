'use client';

import { 
  Calendar, Users, DollarSign, TrendingUp, ArrowUpRight, 
  CheckCircle2, Clock, MoreVertical, Activity 
} from 'lucide-react';

export default function DashboardPage() {
  const stats = [
    { title: 'Today\'s Appointments', value: '12', icon: Calendar, color: 'bg-blue-50 text-blue-600', trend: '+2 from yesterday', trendUp: true },
    { title: 'Total Patients', value: '1,234', icon: Users, color: 'bg-emerald-50 text-emerald-600', trend: '+12% this month', trendUp: true },
    { title: 'Monthly Revenue', value: '$45,230', icon: DollarSign, color: 'bg-purple-50 text-purple-600', trend: '+8.4% vs last month', trendUp: true },
    { title: 'Appointment Rate', value: '94%', icon: TrendingUp, color: 'bg-orange-50 text-orange-600', trend: 'Steady', trendUp: null },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* 1. TOP HEADER SECTION */}
      <div className="flex flex-col justify-between gap-4 border-b border-gray-100 pb-8 md:flex-row md:items-end">
        <div>
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-blue-600 mb-2">
            <div className="h-1 w-1 rounded-full bg-blue-600" />
            Clinic Overview
          </div>
          <h1 className="text-4xl font-black tracking-tight text-gray-900">Health Dashboard</h1>
          <p className="mt-2 text-sm font-medium text-gray-500">
            Welcome back. Here is the real-time performance of your practice today.
          </p>
        </div>
        
        <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">System Live</span>
        </div>
      </div>

      {/* 2. STATS GRID (Updated for Visibility) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.title} className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-black/10 hover:shadow-xl hover:shadow-black/5">
            <div className="flex items-center justify-between">
              <div className={`rounded-2xl p-3 ${stat.color} transition-colors group-hover:bg-black group-hover:text-white`}>
                <stat.icon className="h-5 w-5" />
              </div>
              <Activity className="h-4 w-4 text-gray-100 group-hover:text-gray-200 transition-colors" />
            </div>
            
            <div className="mt-6 space-y-1">
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">{stat.title}</p>
              <div className="flex items-end justify-between">
                <p className="text-3xl font-black text-gray-900 tracking-tight">{stat.value}</p>
                <div className={`text-[10px] font-black px-2 py-1 rounded-lg ${
                    stat.trendUp === true ? 'bg-emerald-50 text-emerald-600' : 
                    stat.trendUp === false ? 'bg-red-50 text-red-600' : 'bg-gray-50 text-gray-500'
                }`}>
                    {stat.trend}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* 3. MAIN ACTIVITY FEED */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <div>
                <h2 className="text-xl font-black tracking-tight text-gray-900">Recent Activity</h2>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Live Updates</p>
            </div>
            <button className="rounded-xl border border-gray-200 px-4 py-2 text-xs font-black uppercase tracking-widest text-gray-600 hover:bg-black hover:text-white transition-all">
                View All
            </button>
          </div>
          
          <div className="space-y-4">
            {[
              { name: 'John Smith', procedure: 'Annual Checkup', time: '9:00 AM', status: 'Confirmed', icon: Clock, statusColor: 'bg-blue-50 text-blue-700 border-blue-100' },
              { name: 'Emma Wilson', procedure: 'Dental Cleaning', time: '2:30 PM', status: 'Completed', icon: CheckCircle2, statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
              { name: 'Michael Chen', procedure: 'X-Ray Consultation', time: '4:15 PM', status: 'In Progress', icon: Clock, statusColor: 'bg-orange-50 text-orange-700 border-orange-100' },
            ].map((activity, i) => (
              <div key={i} className="group flex items-center justify-between rounded-[2rem] border border-gray-200 bg-white p-5 transition-all hover:border-black/20 hover:shadow-lg hover:shadow-black/5">
                <div className="flex items-center gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-900 text-sm font-black text-white transition-transform group-hover:scale-110">
                    {activity.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-base font-black text-gray-900">{activity.name}</p>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-tight">
                      {activity.procedure} <span className="mx-2 text-gray-300">•</span> {activity.time}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`hidden sm:inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-widest ${activity.statusColor}`}>
                    <activity.icon className="h-3 w-3" />
                    {activity.status}
                  </span>
                  <button className="rounded-xl p-2 text-gray-400 hover:bg-gray-50 hover:text-black transition-colors">
                    <MoreVertical className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. SIDEBAR - INSIGHTS & GOALS */}
        <div className="space-y-8">
          <div className="rounded-[2rem] bg-gray-900 p-8 text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-white/5 transition-transform group-hover:scale-150" />
            <h3 className="text-2xl font-black tracking-tight leading-tight">Practice Insights</h3>
            <p className="mt-4 text-sm font-medium text-gray-400 leading-relaxed">
              Your patient retention has increased by <span className="text-emerald-400 font-bold">12%</span> this month. Predictive data suggests a strong Q1.
            </p>
            <button className="group mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-white py-4 text-xs font-black uppercase tracking-widest text-black transition-all hover:bg-emerald-400 active:scale-95">
              Full Analytics Report
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>

          <div className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-black text-gray-900 mb-6 tracking-tight">Performance Goals</h3>
            <div className="space-y-6">
              {[
                { label: 'Patient Reviews', progress: '85%', color: 'bg-blue-600' },
                { label: 'Monthly Revenue', progress: '62%', color: 'bg-purple-600' },
                { label: 'Staff Efficiency', progress: '91%', color: 'bg-emerald-600' },
              ].map((goal, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex justify-between items-end">
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{goal.label}</span>
                    <span className="text-sm font-black text-gray-900">{goal.progress}</span>
                  </div>
                  <div className="h-2.5 w-full rounded-full bg-gray-100 overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-1000 ${goal.color}`} 
                      style={{ width: goal.progress }} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}