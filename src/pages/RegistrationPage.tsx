import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { UserCheck, ExternalLink, FileCheck2 } from 'lucide-react';
import { REGISTRATION_CATEGORIES, CONFERENCE_INFO } from '../data/conferenceData';
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
          showRegisterLink={true}
        />

        {/* Official Google Forms Registration Portal Card */}
        <div
          id="registration-form"
          className="scroll-mt-24 bg-slate-50 rounded-3xl border border-slate-200/90 shadow-lg p-8 sm:p-14 text-center space-y-6"
        >
          <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center shadow-2xs">
            <FileCheck2 className="w-8 h-8 text-emerald-700" />
          </div>

          <div className="space-y-2 max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Complete Delegate Registration
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              After completing your fee transfer via Janata Bank PLC or Bangla QR, click the button below to open the official IBC 2027 Registration Form on Google Forms and submit your details and Transaction ID.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={CONFERENCE_INFO.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white text-base sm:text-lg font-bold rounded-xl shadow-md transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
            >
              <span>Complete Registration Form</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>

          <div className="pt-4 border-t border-slate-200/80 max-w-md mx-auto text-xs text-slate-500">
            <span>Registration Deadline: <strong>20 December 2026</strong> · Individual registration required</span>
          </div>
        </div>
      </div>
    </div>
  );
};
