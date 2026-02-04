import { ReactNode } from 'react';

export interface Patient {
  id: string;
  name: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: 'Male' | 'Female' | 'Other';
  address: string;
  emergencyContact: string;
  bloodType?: string;
  allergies: string[];
  medicalHistory: string[];
}

export interface Appointment {
  id: string;
  patientId: string;
  patientName: string;
  date: string;
  time: string;
  type: 'Checkup' | 'Cleaning' | 'Filling' | 'Root Canal' | 'Extraction' | 'Consultation';
  status: 'Scheduled' | 'Completed' | 'Cancelled' | 'No-show';
  dentist: string;
  notes: string;
  duration: number;
}

export interface DentalRecord {
  tooth: any;
  type: ReactNode;
  doctor: ReactNode;
  id: string;
  patientId: string;
  date: string;
  procedure: string;
  toothNumber?: string;
  notes: string;
  dentist: string;
  cost: number;
  paid: boolean;              // Changed from any to boolean
  location?: string;          // Changed from ReactNode to string for data consistency
  documents: string[];        // Changed from boolean to string array (FIXES YOUR ERROR)
  xray?: string;
  followUpDate?: string;
}

// ... User and Service remain the same

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'dentist' | 'patient';
  avatar?: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  duration: number;
  price: number;
  category: 'Preventive' | 'Restorative' | 'Cosmetic' | 'Emergency';
}