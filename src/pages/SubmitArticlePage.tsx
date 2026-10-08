import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FileUp,
  FileText,
  ExternalLink,
  BookOpen,
  Clock,
  Sparkles,
  HelpCircle,
  ArrowRight,
} from 'lucide-react';
import { SUBMISSION_GUIDELINES, CONFERENCE_INFO } from '../data/conferenceData';

export const SubmitArticlePage: React.FC = () => {
  const location = useLocation();

  // Handle in-page anchors like #guidelines
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const googleFormEmbedUrl =
    'https://docs.google.com/forms/d/e/1FAIpQLSfrR7_Dbb-RqUJPXGyZGl9cNx5nsgO3x44ExruFNaAouVKr0g/viewform?embedded=true';
  const googleFormDirectUrl =
    'https://docs.google.com/forms/d/e/1FAIpQLSfrR7_Dbb-RqUJPXGyZGl9cNx5nsgO3x44ExruFNaAouVKr0g/viewform';

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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Quick Guidelines & Direct Link Bar */}
        <div
          id="guidelines"
          className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-4"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-sm sm:text-base font-extrabold text-slate-900">
                  Submission Guidelines &amp; Criteria
                </h2>
                <p className="text-xs text-slate-500">
                  Please review the formatting rules before completing your submission below.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href={googleFormDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold rounded-lg transition-colors shadow-xs"
              >
                <span>Open in Full Window</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Key Guidelines Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
              <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block mb-1">
                Word Count Limit
              </span>
              <p className="font-semibold text-slate-800">{SUBMISSION_GUIDELINES.abstractLength}</p>
              <p className="text-slate-500 text-[11px] mt-0.5">Abstract body strictly excluding title &amp; affiliations.</p>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
              <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block mb-1">
                Required Structure
              </span>
              <p className="font-semibold text-slate-800">4 Key Headings</p>
              <p className="text-slate-500 text-[11px] mt-0.5">Background, Methodology, Findings, and Conclusion.</p>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
              <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block mb-1">
                Presentation Types
              </span>
              <p className="font-semibold text-slate-800">Oral or Poster</p>
              <p className="text-slate-500 text-[11px] mt-0.5">Selected by technical peer-review scientific committee.</p>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
              <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block mb-1">
                Submission Fee
              </span>
              <p className="font-semibold text-emerald-700">100% Free to Submit</p>
              <p className="text-slate-500 text-[11px] mt-0.5">Registration fee applies only upon abstract acceptance.</p>
            </div>
          </div>

          <div className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-100 flex items-start gap-2.5 text-xs text-emerald-950">
            <Sparkles className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong>Font &amp; Format:</strong> Times New Roman, Font size 12. Keywords: 3 to 5 terms. The name of the presenting author must be marked in <strong>bold</strong>.
            </div>
          </div>
        </div>

        {/* Embedded Google Form Section */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden">
          {/* Form container header bar */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white px-5 py-3.5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <FileText className="w-4 h-4 text-emerald-400" />
              <span className="text-xs sm:text-sm font-bold tracking-tight">
                IBC 2027 Official Google Forms Submission
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-300">
              <span className="hidden sm:inline">Having display issues?</span>
              <a
                href={googleFormDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 hover:bg-white/20 rounded-md text-white font-semibold transition-colors text-xs"
              >
                <span>Open Form Directly</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Google Form Iframe Embed */}
          <div className="w-full bg-slate-50 flex justify-center py-2 min-h-[900px] overflow-x-auto">
            <iframe
              src={googleFormEmbedUrl}
              width="100%"
              height="1150"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="IBC 2027 Abstract Submission Google Form"
              className="w-full max-w-4xl min-h-[900px] border-0 bg-white"
            >
              Loading Google Form…
            </iframe>
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
