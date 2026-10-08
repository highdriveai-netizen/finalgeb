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
  ArrowUpRight,
  Dna,
  CheckCircle2,
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
};

export const ConferenceThemes: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="themes" className="py-14 sm:py-18 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Minimal Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-4 border-b border-slate-200/60">
          <div>
            <div className="mb-2">
              <span className="font-mono text-xs px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold">
                01 / THEMES
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              8 Conference Tracks &amp; Thematic Areas
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

        {/* Minimal Compact List Style (2 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
          {CONFERENCE_THEMES.map((theme: ConferenceTheme) => {
            const IconComponent = iconMap[theme.iconName] || Dna;
            const isHovered = hoveredId === theme.id;

            return (
              <Link
                key={theme.id}
                to="/submit-article"
                onMouseEnter={() => setHoveredId(theme.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`group flex items-center gap-3.5 p-3 sm:p-3.5 rounded-xl border transition-all duration-200 ${
                  isHovered
                    ? 'bg-emerald-50/70 border-emerald-300 shadow-xs translate-x-1'
                    : 'bg-slate-50/50 border-slate-200/70 hover:bg-slate-50'
                }`}
              >
                {/* Minimal Bullet / Number Badge */}
                <div className="flex items-center gap-2 shrink-0">
                  <span className={`w-6 h-6 rounded-md flex items-center justify-center font-mono text-[11px] font-bold transition-colors ${
                    isHovered
                      ? 'bg-emerald-700 text-white'
                      : 'bg-white text-slate-500 border border-slate-200'
                  }`}>
                    {theme.number}
                  </span>
                  <div className={`w-7 h-7 rounded-md flex items-center justify-center transition-colors ${
                    isHovered
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-white text-slate-400 border border-slate-200'
                  }`}>
                    <IconComponent className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Content Details */}
                <div className="flex-1 min-w-0 flex items-center justify-between gap-2">
                  <h3 className={`text-xs sm:text-sm font-bold transition-colors truncate ${
                    isHovered ? 'text-emerald-900' : 'text-slate-900'
                  }`}>
                    {theme.title}
                  </h3>
                  <ArrowUpRight className={`w-3.5 h-3.5 shrink-0 transition-all ${
                    isHovered
                      ? 'text-emerald-700 translate-x-0.5 -translate-y-0.5 opacity-100'
                      : 'text-slate-300 opacity-60'
                  }`} />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Minimal Footer Bullet Note */}
        <div className="mt-6 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 inline-block" />
            <span>All tracks align with UN Sustainable Development Goals (SDGs 2, 3, 7, 13 &amp; 14).</span>
          </div>
          <span className="text-slate-400">Oral &amp; Poster tracks evaluated by scientific peer jury</span>
        </div>
      </div>
    </section>
  );
};
