'use client';

import { useState, useEffect } from 'react';
import { X, Bug } from 'lucide-react';

export default function Debug() {
  const [isVisible, setIsVisible] = useState(false);
  const [path, setPath] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    setPath(window.location.pathname);
    setRole(localStorage.getItem('demo_role') || 'none');
  }, []);

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 z-50"
      >
        <Bug className="h-5 w-5" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-gray-900 text-white p-4 rounded-lg shadow-xl z-50 max-w-xs">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-bold text-sm flex items-center">
          <Bug className="h-4 w-4 mr-2" />
          Debug Info
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      <div className="text-xs space-y-1">
        <div>Path: {path}</div>
        <div>Role: {role}</div>
        <div className="mt-2">
          <button
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
            className="bg-red-600 hover:bg-red-700 px-2 py-1 rounded text-xs"
          >
            Clear Storage
          </button>
        </div>
      </div>
    </div>
  );
}