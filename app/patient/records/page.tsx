'use client';

import { useState, useEffect } from 'react';
import { 
  Database, FileText, Image as ImageIcon, Search, 
  ExternalLink, ShieldCheck, Plus, Layers, Info,
  CheckCircle2, Eye
} from 'lucide-react';

export default function RecordsPage() {
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const records = [
    { title: 'Panoramic X-Ray', type: 'Imaging', date: 'Oct 12, 2024', doctor: 'Dr. Sarah Chen' },
    { title: 'Periodontal Charting', type: 'Report', date: 'Jan 10, 2024', doctor: 'Dr. Sarah Chen' },
    { title: 'Invisalign Treatment Plan', type: 'Clinical', date: 'Dec 05, 2023', doctor: 'Dr. Mark Wilson' },
  ];

  // Base64 encoded dummy dental X-ray image
  const dentalXRayImage = "data:image/png;base64,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";

  const dummyImages = [
    { 
      id: 1, 
      name: 'PANORAMIC_001.dcm',
      description: 'Full mouth panoramic X-ray',
      date: 'Oct 12, 2024',
      size: '2.4 MB'
    },
    { 
      id: 2, 
      name: 'BITEWING_002.dcm',
      description: 'Bitewing series (left side)',
      date: 'Jan 10, 2024',
      size: '1.8 MB'
    },
    { 
      id: 3, 
      name: 'PERIAPICAL_003.dcm',
      description: 'Periapical view - Tooth #3',
      date: 'Aug 22, 2024',
      size: '1.2 MB'
    }
  ];

  // Updated DentalXRayPattern with actual image
  const DentalXRayPattern = () => (
    <div className="h-full w-full relative overflow-hidden rounded-xl">
      {/* Dummy dental X-ray image */}
      <img 
        src={dentalXRayImage}
        alt="Dental X-ray"
        className="h-full w-full object-cover"
        style={{
          filter: 'contrast(1.2) brightness(1.1)',
          mixBlendMode: 'multiply'
        }}
      />
      
      {/* Overlay grid for X-ray effect */}
      <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%" className="opacity-20">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#60a5fa" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );

  useEffect(() => {
    setMounted(true);
    setIsLoading(false);
  }, []);

  const handleImageClick = (imageName: string) => {
    setSelectedImage(imageName);
    // Simulate opening image viewer
    setTimeout(() => {
      alert(`Opening ${imageName} in DICOM viewer...`);
      setSelectedImage(null);
    }, 300);
  };

  if (!mounted || isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-100 border-t-black" />
        <p className="mt-4 text-[10px] font-black uppercase tracking-widest text-gray-400">Loading Clinical Records...</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8 sm:space-y-12 animate-in fade-in duration-700">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-gray-100 pb-6 sm:pb-10">
        <div>
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-blue-600 mb-2 sm:mb-3">
            <div className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            Vault v2.4
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-gray-900">Dental Records</h1>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base font-medium text-gray-500 max-w-xl">
            Complete access to your DICOM imaging data and digital clinical charts.
          </p>
        </div>
        
        <div className="flex items-center gap-3 sm:gap-4 bg-gray-50 p-4 rounded-2xl sm:rounded-3xl border border-gray-100 mt-4 sm:mt-0">
          <div className="p-2 sm:p-3 bg-blue-100 rounded-xl sm:rounded-2xl">
            <Database className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
          </div>
          <div>
            <p className="text-sm font-black text-gray-900">3 Active Records</p>
            <p className="text-xs font-bold text-gray-400">Encrypted & Secure</p>
          </div>
        </div>
      </div>

      {/* STATS GRID */}
      <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
        <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border-2 border-gray-100 shadow-sm">
          <ImageIcon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mb-3 sm:mb-4" />
          <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Imaging Files</p>
          <p className="text-xl sm:text-2xl font-black text-gray-900">3 DICOM</p>
        </div>
        <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border-2 border-gray-100 shadow-sm">
          <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600 mb-3 sm:mb-4" />
          <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Documents</p>
          <p className="text-xl sm:text-2xl font-black text-gray-900">5 Reports</p>
        </div>
        <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border-2 border-gray-100 shadow-sm">
          <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600 mb-3 sm:mb-4" />
          <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Security</p>
          <p className="text-xl sm:text-2xl font-black text-gray-900">HIPAA Compliant</p>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* LEFT COLUMN: RECORDS */}
        <div className="lg:col-span-2 space-y-8 sm:space-y-10">
          
          {/* IMAGING GALLERY */}
          <div className="bg-white rounded-2xl sm:rounded-[2.5rem] border-2 border-gray-100 p-5 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-10">
              <div className="p-2 sm:p-3 bg-blue-50 rounded-xl sm:rounded-2xl text-blue-600">
                <ImageIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-gray-900">Recent Imaging</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {dummyImages.map((image, index) => (
                <div 
                  key={image.id} 
                  className="group relative overflow-hidden rounded-xl sm:rounded-2xl border-2 border-gray-100 hover:border-blue-300 transition-all cursor-pointer animate-in fade-in slide-in-from-left-4"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => handleImageClick(image.name)}
                >
                  {/* Dummy Image Container */}
                  <div className="aspect-square bg-gray-900 overflow-hidden">
                    <div className="h-full w-full">
                      <DentalXRayPattern />
                    </div>
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <Eye className="h-6 w-6 sm:h-8 sm:w-8 text-white drop-shadow-lg" />
                      </div>
                    </div>
                    
                    {/* DICOM Badge */}
                    <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-black/70 text-white px-1.5 sm:px-2 py-1 rounded-lg text-[8px] sm:text-[10px] font-black uppercase tracking-wider">
                      DICOM
                    </div>
                  </div>
                  
                  {/* Image Info */}
                  <div className="p-3 sm:p-4 bg-white">
                    <div className="flex items-center justify-between mb-1 sm:mb-2">
                      <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-blue-600">
                        {image.name.split('_')[0]}
                      </span>
                      <span className="text-[9px] sm:text-[10px] font-bold text-gray-500">{image.size}</span>
                    </div>
                    <p className="text-sm font-medium text-gray-900 truncate">{image.description}</p>
                    <p className="text-xs font-bold text-gray-400 mt-1">{image.date}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button 
              className="w-full flex items-center justify-center gap-2 sm:gap-3 bg-gray-50 border-2 border-gray-200 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-black uppercase tracking-widest text-xs text-gray-900 hover:border-black hover:bg-black hover:text-white transition-all"
              onClick={() => alert('Opening full DICOM viewer with all images...')}
            >
              <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
              Open Full DICOM Viewer
            </button>
          </div>

          {/* DOCUMENTS & REPORTS */}
          <div className="bg-white rounded-2xl sm:rounded-[2.5rem] border-2 border-gray-100 p-5 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-10">
              <div className="p-2 sm:p-3 bg-emerald-50 rounded-xl sm:rounded-2xl text-emerald-600">
                <FileText className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-gray-900">Documents & Reports</h2>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {records.map((record, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-4 sm:p-6 bg-gray-50 border-2 border-gray-100 rounded-xl sm:rounded-2xl hover:border-blue-300 transition-all group animate-in fade-in slide-in-from-left-4"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className={`h-10 w-10 sm:h-12 sm:w-12 rounded-lg sm:rounded-xl flex items-center justify-center ${
                      record.type === 'Imaging' ? 'bg-blue-100 text-blue-600' : 
                      record.type === 'Report' ? 'bg-emerald-100 text-emerald-600' : 
                      'bg-purple-100 text-purple-600'
                    }`}>
                      <FileText className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div>
                      <h4 className="font-black text-gray-900 text-sm sm:text-base">{record.title}</h4>
                      <div className="flex items-center gap-1.5 sm:gap-2 mt-0.5 sm:mt-1">
                        <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-gray-400">{record.type}</span>
                        <span className="h-0.5 w-0.5 sm:h-1 sm:w-1 rounded-full bg-gray-300" />
                        <span className="text-xs font-bold text-gray-500">{record.date}</span>
                        <span className="h-0.5 w-0.5 sm:h-1 sm:w-1 rounded-full bg-gray-300" />
                        <span className="text-xs font-bold text-gray-500">{record.doctor}</span>
                      </div>
                    </div>
                  </div>
                  <button 
                    className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg sm:rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-black hover:text-white hover:border-black transition-all"
                    onClick={() => alert(`Opening ${record.title}...`)}
                  >
                    <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: ACTIONS */}
        <div className="space-y-6 sm:space-y-8">
          
          {/* SECURITY BOX */}
          <div className="bg-black rounded-2xl sm:rounded-[2.5rem] p-5 sm:p-8 text-white shadow-xl shadow-black/10">
            <h3 className="text-lg sm:text-xl font-black mb-3 sm:mb-4">HIPAA Compliant</h3>
            <p className="text-sm text-gray-400 mb-6 sm:mb-8 leading-relaxed">
              Your records are encrypted with AES-256 and only accessible by authorized clinical staff.
            </p>
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-400" />
              <span className="text-xs font-black uppercase tracking-widest text-emerald-400">Security Active</span>
            </div>
            <button 
              className="w-full flex items-center justify-center gap-2 sm:gap-3 bg-white text-black py-3 sm:py-4 rounded-xl sm:rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-emerald-400 transition-all active:scale-[0.98]"
              onClick={() => alert('Opening security audit log...')}
            >
              <ShieldCheck className="h-3 w-3 sm:h-4 sm:w-4" />
              View Audit Log
            </button>
          </div>

          {/* UPLOAD SECTION */}
          <div className="bg-white rounded-2xl sm:rounded-[2.5rem] border-2 border-gray-100 p-5 sm:p-8">
            <h3 className="text-base sm:text-lg font-black text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
              <Plus className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" /> Upload External Record
            </h3>
            <p className="text-sm font-medium text-gray-500 mb-4 sm:mb-6">
              Transferring from another clinic? Upload your PDF or DICOM files here.
            </p>
            <div className="space-y-3">
              <button 
                className="w-full flex items-center justify-between p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gray-50 border border-gray-200 hover:border-black transition-all group"
                onClick={() => alert('Opening PDF upload dialog...')}
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <FileText className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400 group-hover:text-black" />
                  <span className="text-xs font-black text-gray-900 uppercase tracking-widest">Upload PDF</span>
                </div>
                <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 text-gray-300 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                className="w-full flex items-center justify-between p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gray-50 border border-gray-200 hover:border-black transition-all group"
                onClick={() => alert('Opening DICOM upload dialog...')}
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <ImageIcon className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400 group-hover:text-black" />
                  <span className="text-xs font-black text-gray-900 uppercase tracking-widest">Upload DICOM</span>
                </div>
                <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 text-gray-300 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* SEARCH SECTION */}
          <div className="p-4 space-y-3">
            <div className="relative">
              <Search className="absolute left-3 sm:left-4 top-1/2 h-3 w-3 sm:h-4 sm:w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="search"
                placeholder="Search records..."
                className="w-full rounded-xl sm:rounded-2xl border-2 border-gray-100 bg-gray-50 pl-9 sm:pl-12 pr-4 sm:pr-6 py-2.5 sm:py-3 text-sm font-bold placeholder:text-gray-400 focus:bg-white focus:border-black focus:outline-none transition-all"
              />
            </div>
            <button 
              className="w-full flex items-center justify-between p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gray-50 border border-gray-200 hover:border-black transition-all group"
              onClick={() => alert('Opening Records FAQ...')}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <Info className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400 group-hover:text-black" />
                <span className="text-xs font-black text-gray-900 uppercase tracking-widest">Record FAQ</span>
              </div>
              <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 text-gray-300 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}