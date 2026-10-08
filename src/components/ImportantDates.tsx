import React, { useState } from 'react';
import { Calendar, ArrowUpRight } from 'lucide-react';
import { IMPORTANT_DATES, ImportantDate } from '../data/conferenceData';
import { Link } from 'react-router-dom';

export const ImportantDates: React.FC = () => {
  const [hoveredDate, setHoveredDate] = useState<string | null>(null);

  return (
    <section id="dates" className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Minimal Header without cards */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-4 border-b border-slate-100">
          <div>
            <div className="mb-2">
              <span className="font-mono text-xs px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold">
                02 / DATES
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Important Dates
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/submit-article"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold shadow-xs transition-all hover:scale-[1.02]"
            >
              <span>Submit Abstract</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/register"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
            >
              <span>Registration Fees</span>
            </Link>
          </div>
        </div>

        {/* Minimal Ordered List with Hover Micro-Interactions */}
        <div className="border border-slate-200/80 rounded-2xl divide-y divide-slate-100 overflow-hidden bg-slate-50/30">
          {IMPORTANT_DATES.map((item: ImportantDate) => {
            const isHovered = hoveredDate === item.id;
            const isActive = item.status === 'active';

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredDate(item.id)}
                onMouseLeave={() => setHoveredDate(null)}
                className={`group py-4 px-4 sm:px-6 transition-all duration-200 flex flex-col md:flex-row md:items-center justify-between gap-3 ${
                  isActive
                    ? 'bg-emerald-50/70'
                    : isHovered
                    ? 'bg-white shadow-xs'
                    : 'hover:bg-white'
                }`}
              >
                {/* Left: Step, Date, and Details */}
                <div className="flex items-start sm:items-center gap-4 sm:gap-6 flex-1 min-w-0">
                  {/* Step Number Badge */}
                  <span
                    className={`font-mono text-xs font-bold w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isActive
                        ? 'bg-emerald-800 text-white'
                        : isHovered
                        ? 'bg-slate-900 text-white'
                        : 'bg-white text-slate-500 border border-slate-200'
                    }`}
                  >
                    {item.step}
                  </span>

                  {/* Calendar Date Block */}
                  <div className="flex items-center gap-2 w-44 sm:w-48 shrink-0">
                    <Calendar
                      className={`w-4 h-4 shrink-0 transition-colors ${
                        isActive ? 'text-emerald-700' : 'text-slate-400 group-hover:text-emerald-700'
                      }`}
                    />
                    <span
                      className={`font-mono text-xs sm:text-sm font-bold transition-colors ${
                        isActive ? 'text-emerald-950 font-extrabold' : 'text-slate-800'
                      }`}
                    >
                      {item.date}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="min-w-0 flex-1 flex items-center gap-2">
                    <h3
                      className={`text-xs sm:text-sm font-bold transition-colors ${
                        isActive
                          ? 'text-emerald-950'
                          : isHovered
                          ? 'text-emerald-800'
                          : 'text-slate-900'
                      }`}
                    >
                      {item.title}
                    </h3>
                    {isActive && (
                      <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-bold text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-ping" />
                        Open for submissions
                      </span>
                    )}
                  </div>
                </div>

                {/* Right: Status Pill & Action */}
                <div className="flex items-center justify-between md:justify-end gap-3 shrink-0 pl-11 md:pl-0">
                  <span
                    className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md transition-colors ${
                      isActive
                        ? 'bg-emerald-800 text-white'
                        : 'bg-white text-slate-500 border border-slate-200 group-hover:border-slate-300'
                    }`}
                  >
                    {isActive ? 'Active Now' : 'Upcoming'}
                  </span>

                  {isActive ? (
                    <Link
                      to="/submit-article"
                      className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 hover:text-emerald-950 hover:underline"
                    >
                      <span>Submit</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  ) : (
                    <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-slate-600 transition-colors hidden md:block" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Minimal Bottom Note Strip */}
        <div className="mt-4 flex items-center justify-end gap-3 text-[11px] text-slate-500">
          <Link to="/submit-article#guidelines" className="text-emerald-800 hover:underline font-semibold">
            Author Guidelines →
          </Link>
        </div>
      </div>
    </section>
  );
};
