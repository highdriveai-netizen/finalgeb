import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { UserCheck } from 'lucide-react';
import { REGISTRATION_CATEGORIES } from '../data/conferenceData';
import { RegistrationFeesSection } from '../components/RegistrationFeesSection';

export const RegistrationPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('cat-students');
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get('category');
    if (cat && REGISTRATION_CATEGORIES.some((c) => c.id === cat)) {
      setSelectedCategory(cat);
    }
  }, [location.search]);

  return (
    <div className="py-12 bg-white">
      {/* Banner */}
      <div className="bg-gradient-to-r from-[#044e3b] to-[#0f766e] text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-200 text-xs font-semibold uppercase tracking-wider">
            <UserCheck className="w-3.5 h-3.5 text-emerald-300" />
            <span>Delegate Registration · IBC 2027</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Register for the Conference
          </h1>
          <p className="text-emerald-100 max-w-3xl text-sm sm:text-base leading-relaxed">
            International Biotechnology Conference 2027 on “Biotechnology for sustainable development”. 13 January 2027 at the University of Chittagong.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        {/* Registration Fees & Official Payment Section */}
        <RegistrationFeesSection
          selectedCategoryId={selectedCategory}
          onSelectCategory={(catId) => setSelectedCategory(catId)}
          showRegisterLink={false}
        />
      </div>
    </div>
  );
};
