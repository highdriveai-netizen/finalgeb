import React from 'react';
import { Mail, Globe, MapPin, ExternalLink } from 'lucide-react';
import { CONFERENCE_INFO } from '../data/conferenceData';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="pt-8 pb-14 sm:pt-10 sm:pb-20 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8">
          <div className="text-xs font-bold text-emerald-800 uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="w-6 h-0.5 bg-emerald-600 inline-block" />
            <span>Conference Secretariat</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contact
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            For abstract guidelines, registration verification, paper presentation logistics, or accommodation guidance, contact the IBC 2027 organizing secretariat.
          </p>
        </div>

        {/* Secretariat Details - Expanded Full Section */}
        <div className="w-full bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Postal Address */}
            <div className="p-5 sm:p-6 rounded-xl bg-slate-50/80 border border-slate-200/80 space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  <span>Official Postal Address</span>
                </div>
                <div className="text-xs sm:text-sm text-slate-600 space-y-1 leading-relaxed">
                  <p className="font-semibold text-slate-900">
                    Department of Genetic Engineering &amp; Biotechnology (GEB)
                  </p>
                  <p>Faculty of Biological Sciences</p>
                  <p>University of Chittagong</p>
                  <p>Chattogram 4331, Bangladesh</p>
                </div>
              </div>
              <div className="pt-3 border-t border-slate-200/60 text-xs text-slate-500">
                Campus: University of Chittagong, Hathazari
              </div>
            </div>

            {/* Email Channels */}
            <div className="p-5 sm:p-6 rounded-xl bg-slate-50/80 border border-slate-200/80 space-y-3 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <Mail className="w-4 h-4 text-emerald-600" />
                  <span>Direct Email Channels</span>
                </div>
                <div className="space-y-3 text-xs sm:text-sm">
                  <div>
                    <span className="text-slate-500 block text-xs font-medium mb-0.5">Conference Desk</span>
                    <a
                      href={`mailto:${CONFERENCE_INFO.contactEmail}`}
                      className="text-emerald-800 font-mono font-bold hover:underline block"
                    >
                      {CONFERENCE_INFO.contactEmail}
                    </a>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-xs font-medium mb-0.5">Department Office</span>
                    <a
                      href={`mailto:${CONFERENCE_INFO.departmentEmail}`}
                      className="text-emerald-800 font-mono font-bold hover:underline block"
                    >
                      {CONFERENCE_INFO.departmentEmail}
                    </a>
                  </div>
                </div>
              </div>
              <div className="pt-3 border-t border-slate-200/60 text-xs text-slate-500">
                Inquiries typically answered within 24-48 business hours
              </div>
            </div>

            {/* Portals & Social */}
            <div className="p-5 sm:p-6 rounded-xl bg-slate-50/80 border border-slate-200/80 space-y-3 flex flex-col justify-between">
              <div className="space-y-3.5">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <Globe className="w-4 h-4 text-emerald-600" />
                  <span>Portals &amp; Social Connect</span>
                </div>
                <div className="space-y-2.5 text-xs sm:text-sm">
                  <div>
                    <span className="text-slate-500 block text-xs font-medium mb-0.5">Conference Portal</span>
                    <a
                      href={CONFERENCE_INFO.officialWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-bold text-emerald-700 hover:underline"
                    >
                      <span>ibc2027.org</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-xs font-medium mb-0.5">Department Webpage</span>
                    <a
                      href={CONFERENCE_INFO.departmentPortal}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-slate-700 hover:text-emerald-700 hover:underline"
                    >
                      <span>cu.ac.bd/dgeb</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="pt-3 border-t border-slate-200/60 text-xs flex items-center justify-between">
                <span className="text-slate-500">Facebook:</span>
                <a
                  href={CONFERENCE_INFO.facebookPage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-emerald-700 hover:underline"
                >
                  <span>facebook.com/geb.cu</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

