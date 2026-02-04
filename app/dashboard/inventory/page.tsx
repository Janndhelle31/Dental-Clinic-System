'use client';
import { Package, Search, AlertCircle, Plus, Filter, ArrowDown } from 'lucide-react';

export default function InventoryPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col justify-between gap-4 border-b border-gray-100 pb-8 md:flex-row md:items-end">
        <div>
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-blue-600 mb-2">
            <div className="h-1 w-1 rounded-full bg-blue-600" /> Stock Control
          </div>
          <h1 className="text-4xl font-black tracking-tight text-gray-900">Inventory</h1>
          <p className="mt-2 text-sm font-medium text-gray-500">Monitor clinical supplies and material levels.</p>
        </div>
        <button className="flex items-center gap-2 rounded-xl bg-black px-5 py-3 text-sm font-bold text-white shadow-xl hover:bg-gray-800 transition-all">
          <Plus className="h-4 w-4" /> Add Item
        </button>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <aside className="lg:col-span-3 space-y-6">
           <div className="relative">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Search stock..." className="w-full rounded-2xl border border-gray-200 py-3 pl-11 pr-4 text-sm font-medium focus:ring-1 focus:ring-black" />
           </div>
           <div className="rounded-3xl border border-red-100 bg-red-50/50 p-6">
              <AlertCircle className="h-5 w-5 text-red-600 mb-4" />
              <p className="text-[10px] font-black uppercase tracking-widest text-red-600">Low Stock Warning</p>
              <p className="mt-2 text-sm font-bold text-red-900">Lidocaine 2% is below threshold (4 units left).</p>
           </div>
        </aside>

        <div className="lg:col-span-9 grid gap-4 sm:grid-cols-2">
          {[
            { name: 'Composite Resin (A2)', cat: 'Restorative', qty: 12, status: 'Optimal' },
            { name: 'Lidocaine 2%', cat: 'Anesthetic', qty: 4, status: 'Low Stock' },
            { name: 'Ortho Archwires', cat: 'Orthodontics', qty: 2, status: 'Critical' },
            { name: 'Latex Gloves (M)', cat: 'Disposable', qty: 45, status: 'Optimal' }
          ].map((item) => (
            <div key={item.name} className="group rounded-3xl border border-gray-100 bg-white p-6 transition-all hover:border-black/10 hover:shadow-xl">
              <div className="flex justify-between items-start">
                <div className="p-3 rounded-2xl bg-gray-50 group-hover:bg-black group-hover:text-white transition-colors">
                  <Package className="h-5 w-5" />
                </div>
                <span className={`text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${item.status === 'Optimal' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
                  {item.status}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-900">{item.name}</h3>
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mt-1">{item.cat}</p>
              <div className="mt-6 flex items-end justify-between">
                 <p className="text-3xl font-black text-gray-900">{item.qty}</p>
                 <button className="text-[10px] font-black text-blue-600 uppercase border-b-2 border-blue-600 pb-0.5">Restock</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}