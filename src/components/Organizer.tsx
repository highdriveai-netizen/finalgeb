import React from 'react';
import { ExternalLink, Mail } from 'lucide-react';
import { CONFERENCE_INFO } from '../data/conferenceData';

export const Organizer: React.FC = () => {
  return (
    <section id="organizer" className="pt-12 pb-8 sm:pt-16 sm:pb-10 bg-slate-50/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8">
          <div className="mb-2">
            <span className="font-mono text-xs px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold">
              05 / HOST &amp; LEADERSHIP
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About GEB
          </h2>
        </div>

        {/* Institutional Host Card */}
        <div className="w-full bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 space-y-6 shadow-xs">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-6 border-b border-slate-200">
            <div className="w-20 h-20 rounded-2xl bg-white border border-slate-200 p-2 shrink-0 shadow-xs flex items-center justify-center">
              <img
                src="/images/department-logo.svg"
                alt="Department of GEB, University of Chittagong"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                Department of Genetic Engineering &amp; Biotechnology (GEB)
              </h3>
              <p className="text-xs sm:text-sm font-medium text-slate-500">
                Faculty of Biological Sciences, University of Chittagong · Est. 2004
              </p>
            </div>
          </div>

          <div className="text-xs sm:text-sm text-slate-700 space-y-3 leading-relaxed">
            <p>
              {CONFERENCE_INFO.aboutDepartment}
            </p>
          </div>

          <div className="pt-2 flex flex-wrap gap-3">
            <a
              href={CONFERENCE_INFO.departmentPortal}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-100/70 px-3.5 py-2 rounded-lg hover:bg-emerald-100 transition-colors"
            >
              <span>Visit Department Webpage (cu.ac.bd/dgeb)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="mailto:geb@cu.ac.bd"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 px-3.5 py-2 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>geb@cu.ac.bd</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
