'use client';

import { useState, useEffect, useCallback } from 'react';

export function useAuth() {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const role = localStorage.getItem('demo_role');
    
    if (role) {
      setUser({
        role: role,
        name: role === 'patient' ? 'Patient User' : 
              role === 'admin' ? 'Admin User' : 
              'Dentist User'
      });
    }
    
    setIsLoading(false);
  }, []);

  // Use useCallback to prevent unnecessary re-renders in components using this hook
  const logout = useCallback(() => {
    localStorage.removeItem('demo_role');
    setUser(null);
    // Optional: window.location.href = '/login'; 
  }, []);

  return { user, isLoading, logout }; // 'logout' is now officially returned!
}