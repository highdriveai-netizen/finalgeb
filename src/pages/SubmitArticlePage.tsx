import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FileUp,
  FileText,
  ExternalLink,
  Clock,
  HelpCircle,
  ArrowRight,
  BookOpen,
  CheckCircle2,
} from 'lucide-react';
import { CONFERENCE_INFO } from '../data/conferenceData';

export const SubmitArticlePage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      {/* Banner */}
      <div className="bg-gradient-to-r from-[#044e3b] via-[#065f46] to-[#0f766e] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-200 text-xs font-semibold uppercase tracking-wider">
            <FileUp className="w-3.5 h-3.5 text-emerald-300" />
            <span>Call for Abstracts · IBC 2027</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Submit Abstract
          </h1>
          <p className="text-emerald-100 max-w-3xl text-xs sm:text-sm md:text-base leading-relaxed">
            “Biotechnology for sustainable development.” Welcome to the official manuscript abstract submission portal for the International Biotechnology Conference 2027, organized by the Department of Genetic Engineering &amp; Biotechnology (GEB), University of Chittagong.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-10">
        {/* Primary Call to Action Card with Submit Abstract Button */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-lg p-8 sm:p-14 text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center shadow-2xs">
            <FileText className="w-8 h-8 text-emerald-700" />
          </div>

          <div className="space-y-2 max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Submit Your Conference Abstract
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Click the button below to open the official IBC 2027 Abstract Submission form on Google Forms and complete your submission.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfrR7_Dbb-RqUJPXGyZGl9cNx5nsgO3x44ExruFNaAouVKr0g/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white text-base sm:text-lg font-bold rounded-xl shadow-md transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
            >
              <span>Submit Abstract</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>

          <div className="pt-4 border-t border-slate-100 max-w-md mx-auto text-xs text-slate-500">
            <span>Deadline: <strong>15 November 2026</strong> · Free of charge</span>
          </div>
        </div>

        {/* Submission Guideline Section */}
        <div id="guidelines" className="bg-white rounded-3xl border border-slate-200/90 shadow-md p-6 sm:p-10 space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0 border border-emerald-200/70">
              <BookOpen className="w-5 h-5 text-emerald-700" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Submission Guideline
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Please follow the instructions below before submitting your manuscript abstract.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                <strong>Submission &amp; Authorship:</strong> Submission must be done by the corresponding/presenting author. Name of the presenting author should be marked in <strong>bold</strong>.
              </div>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200/70 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
                <strong>Submission Fee:</strong> <span className="font-semibold text-emerald-800">No payment is required for the submission.</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                <strong>Category &amp; Area:</strong> Category and area of presentation must be mentioned on the top of the abstract.
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                <strong>Word Limit:</strong> Maximum <strong>250 words</strong> (Abstract body).
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                <strong>Typography:</strong> Font: <strong>Times New Roman</strong>, Font size: <strong>12</strong>.
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                <strong>Abstract Contents:</strong> Background/Objective(s), Methodology, Findings, and Conclusion.
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-xs sm:text-sm text-amber-950 flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong>Individual Registration Requirement:</strong> Each author of the accepted abstracts must register individually (if more than one author of the paper wants to join the conference).
            </div>
          </div>
        </div>

        {/* Post-submission Navigation & Support */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl border border-slate-200 p-5 flex items-start gap-3.5">
            <Clock className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                Key Deadlines
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Abstract Submission Deadline: <strong>15 November 2026</strong>. Notification of Acceptance: <strong>1 December 2026</strong>. Early Bird Registration: <strong>15 December 2026</strong>.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-5 flex items-start justify-between gap-3.5">
            <div className="flex items-start gap-3.5">
              <HelpCircle className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                  Secretariat Support
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Questions regarding submission? Email us at{' '}
                  <a href={`mailto:${CONFERENCE_INFO.contactEmail}`} className="text-emerald-800 font-semibold hover:underline">
                    {CONFERENCE_INFO.contactEmail}
                  </a>
                </p>
              </div>
            </div>
            <Link
              to="/results"
              className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-emerald-800 hover:text-emerald-950 shrink-0 pt-1"
            >
              <span>Results</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
