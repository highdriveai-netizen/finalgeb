import React, { useState, useEffect } from 'react';
import {
  Maximize2,
  Download,
  Calendar,
  Building,
  CreditCard,
  QrCode,
  ExternalLink,
  X,
  FileCheck2,
  CheckCircle2,
} from 'lucide-react';
import { CONFERENCE_INFO } from '../data/conferenceData';

interface OfficialPosterSectionProps {
  title?: string;
  subtitle?: string;
  showDetails?: boolean;
}

export const OfficialPosterSection: React.FC<OfficialPosterSectionProps> = ({
  title = "Official Conference Poster & Circular",
  subtitle = "Department of Genetic Engineering and Biotechnology (GEB) · University of Chittagong",
  showDetails = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const posterSrc = CONFERENCE_INFO.flyerUrl || "/images/official-conference-poster.jpg";

  return (
    <>
      <div id="official-poster" className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden scroll-mt-24">
        {/* Header bar */}
        <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-800 px-6 py-5 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-700/60 border border-emerald-400/30 text-[11px] font-bold tracking-wider uppercase text-emerald-200">
              <FileCheck2 className="w-3.5 h-3.5" />
              <span>Official Circular · IBC 2027</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">{title}</h3>
            <p className="text-xs sm:text-sm text-emerald-100">{subtitle}</p>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white/10 hover:bg-white/20 active:bg-white/30 text-white rounded-xl text-xs font-semibold backdrop-blur-xs transition border border-white/20"
              title="Click to view full screen"
            >
              <Maximize2 className="w-3.5 h-3.5 text-emerald-300" />
              <span>Enlarge Poster</span>
            </button>
            <a
              href={posterSrc}
              download="IBC2027-Official-Conference-Poster.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-semibold shadow transition"
              title="Download high-resolution image"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Poster</span>
            </a>
          </div>
        </div>

        {/* Content body */}
        <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Poster Image preview column */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div
              onClick={() => setIsOpen(true)}
              className="group relative cursor-pointer rounded-2xl overflow-hidden border-2 border-slate-200 hover:border-emerald-500 shadow-lg transition-all duration-300 hover:shadow-2xl max-w-sm w-full bg-slate-100"
            >
              <img
                src={posterSrc}
                alt="International Biotechnology Conference IBC 2027 Official Poster"
                className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300"
                onError={(e) => {
                  if (e.currentTarget.src !== "https://ibb.co.com/JRztPbQP") {
                    e.currentTarget.src = "/assets/aistudio/8e422447-7c5e-4666-9c47-86c61746f85a_9d386025.jpg";
                  }
                }}
              />
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-sm backdrop-blur-[2px]">
                <Maximize2 className="w-5 h-5 text-emerald-300" />
                <span>Click to View Full Size</span>
              </div>
              <div className="absolute bottom-2 right-2 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] px-2 py-0.5 rounded font-mono">
                Official Flyer
              </div>
            </div>
            <p className="text-[11px] text-slate-500 mt-2.5 text-center">
              Click the image to expand high-resolution poster with readable details &amp; QR codes.
            </p>
          </div>

          {/* Details column */}
          {showDetails && (
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-1.5">
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">
                  Key Information from Official Poster
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Biotechnology for Sustainable Development
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The official circular issued by the Department of Genetic Engineering and Biotechnology (GEB), University of Chittagong for IBC 2027.
                </p>
              </div>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <strong className="block text-slate-900 font-semibold">Important Deadlines:</strong>
                    <div className="text-slate-600 space-y-0.5 mt-0.5">
                      <div>Abstract: <span className="font-semibold text-emerald-900">25 Nov 2026</span></div>
                      <div>Acceptance: <span className="font-semibold text-emerald-900">05 Dec 2026</span></div>
                      <div>Registration: <span className="font-semibold text-emerald-900">20 Dec 2026</span></div>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                  <Building className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <strong className="block text-slate-900 font-semibold">Venue &amp; Date:</strong>
                    <div className="text-slate-600 mt-0.5">
                      <span className="font-bold text-slate-800">13 January 2027 (Wednesday)</span>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        Auditorium, Faculty of Biological Sciences, University of Chittagong
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                  <CreditCard className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <strong className="block text-slate-900 font-semibold">Bank Details:</strong>
                    <div className="text-slate-600 text-[11px] mt-0.5 space-y-0.5">
                      <div>Janata Bank PLC (CU Branch)</div>
                      <div>A/C: <span className="font-mono font-bold text-slate-900">0103000692391</span></div>
                      <div>Routing: <span className="font-mono">135152081</span></div>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                  <QrCode className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <strong className="block text-slate-900 font-semibold">Payment &amp; Submission:</strong>
                    <div className="text-slate-600 text-[11px] mt-0.5 space-y-0.5">
                      <div>MFS: bKash / Nagad / Rocket (Bangla QR)</div>
                      <div>Submission: <span className="font-semibold text-emerald-700">No submission fee</span></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={CONFERENCE_INFO.abstractPortalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs sm:text-sm font-bold shadow-sm transition"
                >
                  <span>Submit Abstract via Google Forms</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={() => setIsOpen(true)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs sm:text-sm font-semibold transition border border-slate-200"
                >
                  <Maximize2 className="w-4 h-4 text-slate-600" />
                  <span>Inspect Full Resolution</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[95vh] border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3 bg-slate-950 border-b border-slate-800 text-white">
              <div className="flex items-center gap-2">
                <FileCheck2 className="w-4 h-4 text-emerald-400" />
                <span className="text-xs sm:text-sm font-bold text-slate-200">
                  Official Conference Poster · IBC 2027 (High Resolution)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={posterSrc}
                  download="IBC2027-Conference-Poster.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-700 hover:bg-emerald-600 text-white rounded text-xs font-semibold"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Save Image</span>
                </a>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
                  aria-label="Close poster view"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image Display */}
            <div className="relative flex-1 bg-black flex items-center justify-center overflow-auto p-2 sm:p-4 max-h-[82vh]">
              <img
                src={posterSrc}
                alt="IBC 2027 Conference Poster Full Resolution"
                className="max-h-[80vh] w-auto object-contain rounded-lg shadow-lg"
              />
            </div>

            {/* Modal Footer */}
            <div className="px-5 py-2.5 bg-slate-950 border-t border-slate-800 text-slate-400 text-xs flex flex-col sm:flex-row items-center justify-between gap-2">
              <span>Department of Genetic Engineering &amp; Biotechnology (GEB), University of Chittagong</span>
              <span className="text-emerald-400 font-medium">Conference Date: 13 January 2027</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
