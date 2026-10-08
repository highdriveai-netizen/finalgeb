import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, ArrowUpRight, ArrowDownRight, FileText, CheckCircle2, Sparkles, Building2 } from 'lucide-react';
import { CONFERENCE_INFO } from '../data/conferenceData';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-emerald-50/20 to-white text-slate-900 pt-10 pb-10 sm:pt-14 sm:pb-12 border-b border-slate-200/70">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-teal-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Active Deadline Callout Badge */}
        <div className="flex justify-center mb-6">
          <Link
            to="/submit-article"
            className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-xs font-semibold shadow-xs hover:bg-emerald-900 transition-all duration-200"
          >
            <span className="px-1.5 py-0.5 rounded bg-emerald-500 text-slate-950 text-[10px] font-extrabold uppercase tracking-wider">
              NOW OPEN
            </span>
            <span className="text-slate-200 group-hover:text-white transition-colors">
              Abstract submission deadline: November 15, 2026
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Main Hero Typography */}
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-emerald-800 flex items-center justify-center gap-2">
            <span className="w-6 h-0.5 bg-emerald-600 inline-block" />
            <span>2ND INTERNATIONAL BIOTECHNOLOGY CONFERENCE 2027</span>
            <span className="w-6 h-0.5 bg-emerald-600 inline-block" />
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
            International Biotechnology Conference 2027 on <br />
            <span className="font-serif italic font-normal text-emerald-800 text-4xl sm:text-6xl lg:text-7xl block mt-2">
              “Biotechnology for Sustainable Development”
            </span>
          </h1>

          {/* Action Button Row */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <Link
              to="/submit-article"
              className="group inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-emerald-900 active:bg-emerald-950 rounded-lg shadow-sm transition-all duration-200 hover:scale-[1.02]"
            >
              <span>Submit abstract</span>
              <ArrowUpRight className="w-4 h-4 text-emerald-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <a
              href="#themes"
              className="group inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-all duration-200"
            >
              <span>Explore 8 themes</span>
              <ArrowDownRight className="w-4 h-4 text-slate-400 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 px-3 py-3 text-xs sm:text-sm font-semibold text-emerald-800 hover:text-emerald-950 hover:underline underline-offset-4"
            >
              <FileText className="w-4 h-4" />
              <span>Conference details &amp; brochure</span>
            </Link>
          </div>
        </div>

        {/* Minimal Information Ticker / Badges */}
        <div className="mt-8 pt-6 border-t border-slate-200/80 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-white border border-slate-200/70 shadow-2xs">
            <div className="w-9 h-9 rounded-md bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Conference Date</div>
              <div className="text-xs sm:text-sm font-bold text-slate-900">13 January 2027</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-white border border-slate-200/70 shadow-2xs">
            <div className="w-9 h-9 rounded-md bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Host Venue</div>
              <div className="text-xs sm:text-sm font-bold text-slate-900">Faculty of Biological Sciences</div>
              <div className="text-[10px] text-slate-500">University of Chittagong</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-white border border-slate-200/70 shadow-2xs">
            <div className="w-9 h-9 rounded-md bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
              <Building2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Organized by</div>
              <div className="text-xs sm:text-sm font-bold text-slate-900">Dept. of GEB, CU</div>
              <div className="text-[10px] text-slate-500">Courtesy: UGC Bangladesh</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
