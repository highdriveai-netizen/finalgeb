import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, CheckCircle2, ArrowUpRight, BookOpen, X, Download, Maximize2 } from 'lucide-react';
import { SUBMISSION_GUIDELINES, CONFERENCE_INFO } from '../data/conferenceData';

export const CallForAbstracts: React.FC = () => {
  const [showGuidelinesModal, setShowGuidelinesModal] = useState(false);
  const [showPosterModal, setShowPosterModal] = useState(false);

  return (
    <>
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#044e3b] via-[#065f46] to-[#0f766e] text-white relative overflow-hidden">
        {/* Subtle biological background rings */}
        <div className="absolute right-0 top-0 translate-x-1/3 -translate-y-1/3 w-96 h-96 rounded-full border border-white/10 pointer-events-none" />
        <div className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/5 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Heading and Description */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 text-xs font-semibold uppercase tracking-wider">
                <span className="font-mono font-bold text-emerald-300">03 / AUTHORS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Call for Abstracts
              </h2>

              <p className="text-base sm:text-lg text-emerald-100/90 max-w-2xl leading-relaxed font-light">
                “Researchers, academics, students, and biotechnology professionals are invited to share their original research with the international biotechnology community.”
              </p>

              {/* 4 Checkmarks */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                <div className="flex items-center gap-2 text-xs text-emerald-100 font-semibold bg-white/10 backdrop-blur-xs p-2.5 rounded-lg border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span>Original Research</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-emerald-100 font-semibold bg-white/10 backdrop-blur-xs p-2.5 rounded-lg border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span>Oral Presentations</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-emerald-100 font-semibold bg-white/10 backdrop-blur-xs p-2.5 rounded-lg border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span>Poster Sessions</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-emerald-100 font-semibold bg-white/10 backdrop-blur-xs p-2.5 rounded-lg border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span>Student Spotlight</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/submit-article"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#044e3b] hover:bg-emerald-50 active:bg-emerald-100 text-xs sm:text-sm font-bold rounded-lg shadow-md transition-all hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <FileText className="w-4 h-4" />
                  <span>Submit Abstract</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <button
                  type="button"
                  onClick={() => setShowGuidelinesModal(true)}
                  className="inline-flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-semibold text-emerald-200 hover:text-white underline decoration-emerald-400 underline-offset-4"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>View Guidelines (250 words)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setShowPosterModal(true)}
                  className="inline-flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-semibold bg-emerald-800/60 hover:bg-emerald-800 text-emerald-100 hover:text-white rounded-lg border border-emerald-400/30 transition"
                >
                  <FileText className="w-4 h-4 text-emerald-300" />
                  <span>Official Conference Poster</span>
                </button>
              </div>
            </div>

            {/* Right Column: Submission Summary Card & Poster Teaser */}
            <div className="lg:col-span-4 space-y-4">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 shadow-xl space-y-4">
                <div className="flex items-center justify-between border-b border-white/15 pb-3">
                  <span className="text-xs uppercase font-bold text-emerald-300 tracking-wider">Submission Snapshot</span>
                  <span className="text-[11px] bg-emerald-400/20 text-emerald-200 px-2 py-0.5 rounded border border-emerald-400/30 font-semibold">
                    No Submission Fee
                  </span>
                </div>

                <div className="space-y-2.5 text-xs text-emerald-50">
                  <div>
                    <span className="text-emerald-300 block font-semibold">Word Limit:</span>
                    <span>{SUBMISSION_GUIDELINES.abstractLength}</span>
                  </div>
                  <div>
                    <span className="text-emerald-300 block font-semibold">Required Abstract Structure:</span>
                    <span>{SUBMISSION_GUIDELINES.structure}</span>
                  </div>
                  <div>
                    <span className="text-emerald-300 block font-semibold">Submission Deadline:</span>
                    <span className="font-bold text-white">25 November 2026</span>
                  </div>
                  <div>
                    <span className="text-emerald-300 block font-semibold">Acceptance Notification:</span>
                    <span>05 December 2026</span>
                  </div>
                </div>

                {/* Poster Thumbnail Teaser */}
                <div
                  onClick={() => setShowPosterModal(true)}
                  className="group relative cursor-pointer rounded-xl overflow-hidden border border-white/20 hover:border-emerald-300 transition bg-emerald-950/40 p-2.5 flex items-center gap-3"
                >
                  <img
                    src={CONFERENCE_INFO.flyerUrl || "/images/official-conference-poster.jpg"}
                    alt="IBC 2027 Poster Thumbnail"
                    className="w-12 h-16 object-cover rounded shadow border border-white/10 group-hover:scale-105 transition"
                  />
                  <div className="text-left flex-1 min-w-0">
                    <span className="block text-xs font-bold text-white group-hover:text-emerald-300 transition">
                      Official Circular Poster
                    </span>
                    <span className="text-[11px] text-emerald-200 block truncate">
                      Click to expand &amp; inspect
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guidelines Modal */}
      {showGuidelinesModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-emerald-900 px-6 py-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-emerald-300" />
                <h3 className="text-base sm:text-lg font-bold">
                  Guidelines for the Submission of Abstracts (IBC 2027)
                </h3>
              </div>
              <button
                onClick={() => setShowGuidelinesModal(false)}
                className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors"
                aria-label="Close guidelines"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-700">
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-900">
                <strong>From Official IBC 2027 Documentation:</strong> Please prepare your submission in accordance with the official academic instructions below.
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider text-emerald-800">
                  Categories
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                  <li><strong>Poster presentation</strong> (Interactive gallery display)</li>
                  <li><strong>Oral presentation</strong> (Technical symposia tracks)</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider text-emerald-800">
                  Official Instructions
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm leading-relaxed">
                  {SUBMISSION_GUIDELINES.instructions.map((rule, idx) => (
                    <li key={idx}>{rule}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider text-emerald-800">
                  Formatting Details
                </h4>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-1.5 text-xs">
                  <div><strong>Word limit:</strong> Maximum 250 words (Abstract body).</div>
                  <div><strong>Font:</strong> Times New Roman, Font size: 12.</div>
                  <div><strong>Contents:</strong> Background/Objective(s), Methodology, Findings, and Conclusion.</div>
                  <div><strong>Portal:</strong> {CONFERENCE_INFO.abstractPortalUrl}</div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-500">Contact: {CONFERENCE_INFO.contactEmail}</span>
              <button
                onClick={() => setShowGuidelinesModal(false)}
                className="px-4 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-md transition-colors"
              >
                Close Guidelines
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Official Poster Lightbox Modal */}
      {showPosterModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          onClick={() => setShowPosterModal(false)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[95vh] border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3 bg-slate-950 border-b border-slate-800 text-white">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-emerald-400" />
                <span className="text-xs sm:text-sm font-bold text-slate-200">
                  Official Conference Poster · IBC 2027
                </span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={CONFERENCE_INFO.flyerUrl || "/images/official-conference-poster.jpg"}
                  download="IBC2027-Conference-Poster.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-700 hover:bg-emerald-600 text-white rounded text-xs font-semibold"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Download</span>
                </a>
                <button
                  onClick={() => setShowPosterModal(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
                  aria-label="Close poster view"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="relative flex-1 bg-black flex items-center justify-center overflow-auto p-2 sm:p-4 max-h-[80vh]">
              <img
                src={CONFERENCE_INFO.flyerUrl || "/images/official-conference-poster.jpg"}
                alt="IBC 2027 Conference Poster Full Resolution"
                className="max-h-[78vh] w-auto object-contain rounded shadow-lg"
              />
            </div>

            <div className="px-5 py-2.5 bg-slate-950 border-t border-slate-800 text-slate-400 text-xs flex items-center justify-between">
              <span>Department of Genetic Engineering &amp; Biotechnology, CU</span>
              <Link
                to="/submit-article"
                className="text-emerald-400 hover:underline font-medium inline-flex items-center gap-1"
                onClick={() => setShowPosterModal(false)}
              >
                <span>Go to Submission Guidelines</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
