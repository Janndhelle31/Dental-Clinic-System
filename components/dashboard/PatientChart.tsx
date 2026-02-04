'use client';

import { useState } from 'react';
import { TrendingUp, Users, Calendar } from 'lucide-react';

export default function PatientChart() {
  const [timeRange, setTimeRange] = useState('week');
  
  const patientData = {
    week: [65, 78, 45, 92, 56, 88, 72],
    month: [120, 145, 178, 195, 210, 234, 210, 245, 265, 280, 295, 310],
    year: [1200, 1350, 1420, 1560, 1780, 1950, 2100, 2250, 2400, 2550, 2700, 2850],
  };

  const data = patientData[timeRange as keyof typeof patientData];
  const maxValue = Math.max(...data);

  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Patient Statistics</h2>
          <p className="text-sm text-gray-600">New patients over time</p>
        </div>
        <div className="flex space-x-2">
          {['week', 'month', 'year'].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`rounded-lg px-3 py-1 text-sm font-medium capitalize ${
                timeRange === range
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      <div className="h-64">
        <div className="flex h-full items-end space-x-2">
          {data.map((value, index) => (
            <div key={index} className="flex-1">
              <div
                className="rounded-t-lg bg-gradient-to-t from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500"
                style={{ height: `${(value / maxValue) * 100}%` }}
                title={`${value} patients`}
              />
            </div>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-7 border-t pt-4 text-center text-xs text-gray-500">
          {data.slice(0, 7).map((_, index) => (
            <div key={index}>Day {index + 1}</div>
          ))}
        </div>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-4 border-t pt-6">
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <TrendingUp className="h-6 w-6 text-green-600" />
          </div>
          <p className="mt-2 text-sm font-medium text-gray-900">+24.5%</p>
          <p className="text-xs text-gray-600">Growth Rate</p>
        </div>
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
            <Users className="h-6 w-6 text-blue-600" />
          </div>
          <p className="mt-2 text-sm font-medium text-gray-900">3,142</p>
          <p className="text-xs text-gray-600">Total Patients</p>
        </div>
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
            <Calendar className="h-6 w-6 text-purple-600" />
          </div>
          <p className="mt-2 text-sm font-medium text-gray-900">94.2%</p>
          <p className="text-xs text-gray-600">Appointment Rate</p>
        </div>
      </div>
    </div>
  );
}