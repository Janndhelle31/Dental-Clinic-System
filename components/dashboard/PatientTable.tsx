'use client';

import { useState } from 'react';
import { Search, Filter, MoreVertical, Phone, Mail, UserPlus, FileText } from 'lucide-react';
import { mockPatients } from '@/lib/data';

export default function PatientTable() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPatients = mockPatients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.phone.includes(searchTerm)
  );

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      {/* Header Section */}
      <div className="border-b border-gray-100 p-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Patients</h2>
            <p className="text-sm text-gray-500">Directory of all registered patient records</p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative flex-grow md:flex-grow-0">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="search"
                placeholder="Search records..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-lg border border-gray-200 bg-gray-50 pl-10 pr-4 py-2 text-sm transition-all focus:bg-white focus:border-black focus:outline-none focus:ring-1 focus:ring-black md:w-64"
              />
            </div>
            
            <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </button>
            
            <button className="flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90">
              <UserPlus className="h-4 w-4" />
              <span>Add Patient</span>
            </button>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-gray-100 bg-gray-50/50 text-xs font-semibold uppercase tracking-wider text-gray-500">
            <tr>
              <th className="px-6 py-4">Patient Profile</th>
              <th className="px-6 py-4">Contact Details</th>
              <th className="px-6 py-4">Date of Birth</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredPatients.length > 0 ? (
              filteredPatients.map((patient) => (
                <tr key={patient.id} className="group transition-colors hover:bg-gray-50/50">
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 font-bold text-gray-600 transition-colors group-hover:bg-black group-hover:text-white">
                        {patient.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{patient.name}</div>
                        <div className="text-xs text-gray-400">Ref: #{patient.id.slice(0, 8)}</div>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center text-gray-700">
                        <Phone className="mr-2 h-3 w-3 text-gray-400" />
                        {patient.phone}
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Mail className="mr-2 h-3 w-3" />
                        {patient.email}
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-gray-600">
                    {patient.dateOfBirth}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                      Active
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-semibold text-gray-700 transition-all hover:bg-black hover:text-white hover:border-black">
                        View Profile
                      </button>
                      <button className="p-1.5 text-gray-400 transition-colors hover:text-black">
                        <MoreVertical className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="py-12 text-center">
                  <div className="flex flex-col items-center">
                    <div className="rounded-full bg-gray-50 p-3">
                      <Search className="h-6 w-6 text-gray-300" />
                    </div>
                    <p className="mt-2 text-sm font-medium text-gray-900">No patients found</p>
                    <p className="text-xs text-gray-500">Try adjusting your search or filters.</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Section */}
      <div className="flex items-center justify-between border-t border-gray-100 bg-white px-6 py-4">
        <p className="text-xs text-gray-500">
          Showing <span className="font-bold text-gray-900">1</span> to{' '}
          <span className="font-bold text-gray-900">{filteredPatients.length}</span> of{' '}
          <span className="font-bold text-gray-900">{mockPatients.length}</span> results
        </p>
        <div className="flex gap-2">
          <button className="rounded-lg border border-gray-200 px-4 py-2 text-xs font-semibold text-gray-400 disabled:opacity-50" disabled>
            Previous
          </button>
          <button className="rounded-lg bg-black px-4 py-2 text-xs font-semibold text-white">
            1
          </button>
          <button className="rounded-lg border border-gray-200 px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}