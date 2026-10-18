import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Fish,
  Cpu,
  Zap,
  Leaf,
  Factory,
  Stethoscope,
  Microscope,
  Sprout,
  Activity,
  ArrowUpRight,
  Dna,
} from 'lucide-react';
import { CONFERENCE_THEMES, ConferenceTheme } from '../data/conferenceData';

const iconMap: Record<string, React.ElementType> = {
  Fish,
  Cpu,
  Zap,
  Leaf,
  Factory,
  Stethoscope,
  Microscope,
  Sprout,
  Activity,
};

export const ConferenceThemes: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="themes" className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-slate-200/60">
          <div>
            <div className="mb-2">
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-emerald-100 text-emerald-850 font-semibold tracking-wide">
                01 / THEMES
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              9 Conference Tracks &amp; Thematic Areas
            </h2>
          </div>

          <Link
            to="/submit-article"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950 hover:underline shrink-0"
          >
            <span>Submission guidelines &amp; formatting</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 9 Thematic Area Cards (3 Columns on Desktop, 2 on Tablet, 1 on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {CONFERENCE_THEMES.map((theme: ConferenceTheme) => {
            const IconComponent = iconMap[theme.iconName] || Dna;
            const isHovered = hoveredId === theme.id;

            return (
              <Link
                key={theme.id}
                to="/submit-article"
                onMouseEnter={() => setHoveredId(theme.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`group flex flex-col justify-between p-4 sm:p-5 rounded-2xl border-2 transition-all duration-200 ${
                  isHovered
                    ? 'bg-white border-emerald-600 shadow-md ring-4 ring-emerald-50 -translate-y-1'
                    : 'bg-white border-emerald-800/25 hover:border-emerald-600 shadow-xs'
                }`}
              >
                <div>
                  {/* Top Bar with Number Badge and Icon */}
                  <div className="flex items-center justify-between mb-3.5">
                    <span
                      className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-bold transition-colors ${
                        isHovered
                          ? 'bg-emerald-800 text-white'
                          : 'bg-emerald-50 text-emerald-850 border border-emerald-200/60'
                      }`}
                    >
                      {theme.number}
                    </span>

                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                        isHovered
                          ? 'bg-emerald-100 text-emerald-800 scale-105'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-sm sm:text-base font-bold leading-snug transition-colors ${
                      isHovered ? 'text-emerald-900' : 'text-slate-900'
                    }`}
                  >
                    {theme.title}
                  </h3>
                </div>

                {/* Card Action Link */}
                <div className="pt-3.5 mt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold">
                  <span className={isHovered ? 'text-emerald-800 font-bold' : 'text-slate-500'}>
                    Submit Abstract
                  </span>
                  <ArrowUpRight
                    className={`w-3.5 h-3.5 transition-transform ${
                      isHovered
                        ? 'text-emerald-700 translate-x-0.5 -translate-y-0.5'
                        : 'text-slate-400'
                    }`}
                  />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Minimal Footer Bullet Note */}
        <div className="mt-8 pt-4 border-t border-slate-200/60 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block" />
            <span>All 9 tracks align with UN Sustainable Development Goals (SDGs 2, 3, 7, 13, 14 &amp; 15).</span>
          </div>
          <span className="text-slate-400">Oral &amp; Poster tracks evaluated by scientific peer jury</span>
        </div>
      </div>
    </section>
  );
};
