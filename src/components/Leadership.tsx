import React from 'react';
import { Award, ShieldCheck, UserCheck, Star } from 'lucide-react';

interface LeaderMember {
  name: string;
  role: string;
  institution: string;
  image: string;
  fallbackImage: string;
}

export const Leadership: React.FC = () => {
  const chiefPatron: LeaderMember = {
    name: 'Professor Dr. Mohammad Al-Forkan',
    role: 'Vice-Chancellor',
    institution: 'University of Chittagong, Bangladesh',
    image: '/images/leadership/vc-al-forkan.jpg',
    fallbackImage: 'https://i.ibb.co/k6S7gzX3/Gemini-Generated-Image-c5wkr9c5wkr9c5wk-1.jpg',
  };

  const patrons: LeaderMember[] = [
    {
      name: 'Professor Dr. Mohammed Al-Amin',
      role: 'Pro-Vice Chancellor (Academic)',
      institution: 'University of Chittagong, Bangladesh',
      image: '/images/leadership/pvc-al-amin.jpg',
      fallbackImage: 'https://i.ibb.co/DDXq8DZ7/Gemini-Generated-Image-73av1o73av1o73av-1.jpg',
    },
    {
      name: 'Professor Dr. Md. Safiqul Islam',
      role: 'Pro-Vice Chancellor (Administration)',
      institution: 'University of Chittagong, Bangladesh',
      image: '/images/leadership/pvc-safiqul-islam.jpg',
      fallbackImage: 'https://i.ibb.co/v4q3Tq0Y/Gemini-Generated-Image-nmc4g8nmc4g8nmc4-1.jpg',
    },
    {
      name: 'Professor Dr. A. M. Masudul Azad Chowdhury',
      role: 'Dean, Faculty of Biological Sciences',
      institution: 'University of Chittagong, Bangladesh',
      image: '/images/leadership/dean-masudul-azad.jpg',
      fallbackImage: 'https://i.ibb.co/d4XzmVNJ/Gemini-Generated-Image-hccx33hccx33hccx.jpg',
    },
  ];

  const conferenceChair: LeaderMember = {
    name: 'Professor Dr. Laila Khaleda',
    role: 'Chairman, Department of Genetic Engineering and Biotechnology',
    institution: 'University of Chittagong, Bangladesh',
    image: '/images/leadership/chair-laila-khaleda.jpg',
    fallbackImage: 'https://i.ibb.co/jPpzQV6Z/Gemini-Generated-Image-o0ojxfo0ojxfo0oj.jpg',
  };

  const convener: LeaderMember = {
    name: 'Professor Dr. Lolo Wal Marzan',
    role: 'Professor, Department of Genetic Engineering and Biotechnology',
    institution: 'University of Chittagong, Bangladesh',
    image: '/images/leadership/convener-lolo-wal-marzan.jpg',
    fallbackImage: 'https://i.ibb.co/YFFXpx8r/Gemini-Generated-Image-g2wn8mg2wn8mg2wn.jpg',
  };

  return (
    <section id="leadership" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="mb-2">
            <span className="font-mono text-xs px-2.5 py-1 rounded bg-emerald-100 text-emerald-850 font-semibold tracking-wide">
              ACADEMIC GOVERNANCE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Patronage and Leadership
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Distinguished university leadership, visionary academic patrons, conference chairs, and conveners guiding the International Biotechnology Conference 2027.
          </p>
        </div>

        {/* 1. Chief Patron */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-200">
            <Star className="w-5 h-5 text-emerald-700" />
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Chief Patron
            </h3>
          </div>

          <div className="max-w-xl mx-auto sm:mx-0">
            <div className="group bg-gradient-to-b from-white to-slate-50/60 rounded-2xl p-6 sm:p-7 border border-emerald-900/15 shadow-sm hover:shadow-md hover:border-emerald-600/40 transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start gap-6">
              {/* Photo Frame */}
              <div className="relative shrink-0">
                <div className="w-36 h-44 sm:w-40 sm:h-48 rounded-xl overflow-hidden bg-slate-100 border-2 border-emerald-700 shadow-md ring-4 ring-emerald-50 group-hover:ring-emerald-100 transition-all">
                  <img
                    src={chiefPatron.image}
                    alt={chiefPatron.name}
                    onError={(e) => {
                      if (e.currentTarget.src !== chiefPatron.fallbackImage) {
                        e.currentTarget.src = chiefPatron.fallbackImage;
                      }
                    }}
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-emerald-800 text-[10px] font-bold text-white uppercase tracking-wider shadow-xs whitespace-nowrap">
                  Chief Patron
                </div>
              </div>

              {/* Bio Details */}
              <div className="text-center sm:text-left space-y-2 pt-2">
                <h4 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-snug">
                  {chiefPatron.name}
                </h4>
                <div className="text-sm font-semibold text-emerald-800">
                  {chiefPatron.role}
                </div>
                <div className="text-xs sm:text-sm text-slate-600">
                  {chiefPatron.institution}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Patrons */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-200">
            <ShieldCheck className="w-5 h-5 text-emerald-700" />
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Patrons
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {patrons.map((patron, idx) => (
              <div
                key={idx}
                className="group bg-gradient-to-b from-white to-slate-50/60 rounded-2xl p-6 border border-emerald-900/15 shadow-sm hover:shadow-md hover:border-emerald-600/40 transition-all duration-300 flex flex-col items-center text-center space-y-4"
              >
                {/* Photo Frame */}
                <div className="relative shrink-0">
                  <div className="w-36 h-44 rounded-xl overflow-hidden bg-slate-100 border-2 border-emerald-700 shadow-md ring-4 ring-emerald-50 group-hover:ring-emerald-100 transition-all">
                    <img
                      src={patron.image}
                      alt={patron.name}
                      onError={(e) => {
                        if (e.currentTarget.src !== patron.fallbackImage) {
                          e.currentTarget.src = patron.fallbackImage;
                        }
                      }}
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-emerald-800 text-[10px] font-bold text-white uppercase tracking-wider shadow-xs whitespace-nowrap">
                    Patron
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-1.5 pt-2 w-full">
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {patron.name}
                  </h4>
                  <div className="text-xs sm:text-sm font-semibold text-emerald-800">
                    {patron.role}
                  </div>
                  <div className="text-xs text-slate-600">
                    {patron.institution}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Conference Chair & Convener */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-200">
            <Award className="w-5 h-5 text-emerald-700" />
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Conference Chair &amp; Convener
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Conference Chair */}
            <div className="group bg-gradient-to-b from-white to-slate-50/60 rounded-2xl p-6 sm:p-7 border border-emerald-900/15 shadow-sm hover:shadow-md hover:border-emerald-600/40 transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="relative shrink-0">
                <div className="w-36 h-44 rounded-xl overflow-hidden bg-slate-100 border-2 border-emerald-700 shadow-md ring-4 ring-emerald-50 group-hover:ring-emerald-100 transition-all">
                  <img
                    src={conferenceChair.image}
                    alt={conferenceChair.name}
                    onError={(e) => {
                      if (e.currentTarget.src !== conferenceChair.fallbackImage) {
                        e.currentTarget.src = conferenceChair.fallbackImage;
                      }
                    }}
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-emerald-800 text-[10px] font-bold text-white uppercase tracking-wider shadow-xs whitespace-nowrap">
                  Conference Chair
                </div>
              </div>

              <div className="text-center sm:text-left space-y-1.5 pt-2">
                <span className="text-[11px] font-mono font-bold text-emerald-800 uppercase tracking-wider">
                  Organizing Leadership
                </span>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  {conferenceChair.name}
                </h4>
                <div className="text-xs sm:text-sm font-semibold text-emerald-800">
                  {conferenceChair.role}
                </div>
                <div className="text-xs text-slate-600">
                  {conferenceChair.institution}
                </div>
              </div>
            </div>

            {/* Convener */}
            <div className="group bg-gradient-to-b from-white to-slate-50/60 rounded-2xl p-6 sm:p-7 border border-emerald-900/15 shadow-sm hover:shadow-md hover:border-emerald-600/40 transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="relative shrink-0">
                <div className="w-36 h-44 rounded-xl overflow-hidden bg-slate-100 border-2 border-emerald-700 shadow-md ring-4 ring-emerald-50 group-hover:ring-emerald-100 transition-all">
                  <img
                    src={convener.image}
                    alt={convener.name}
                    onError={(e) => {
                      if (e.currentTarget.src !== convener.fallbackImage) {
                        e.currentTarget.src = convener.fallbackImage;
                      }
                    }}
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-emerald-800 text-[10px] font-bold text-white uppercase tracking-wider shadow-xs whitespace-nowrap">
                  Convener
                </div>
              </div>

              <div className="text-center sm:text-left space-y-1.5 pt-2">
                <span className="text-[11px] font-mono font-bold text-emerald-800 uppercase tracking-wider">
                  Program Secretariat
                </span>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  {convener.name}
                </h4>
                <div className="text-xs sm:text-sm font-semibold text-emerald-800">
                  {convener.role}
                </div>
                <div className="text-xs text-slate-600">
                  {convener.institution}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
