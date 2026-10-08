import React from 'react';
import { Link } from 'react-router-dom';
import {
  Mic2,
  Image as GalleryIcon,
  Sparkles,
  GraduationCap,
  Award,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react';
import { CONFERENCE_INFO } from '../data/conferenceData';

interface AgendaProps {
  isPreview?: boolean;
}

const FIVE_EVENTS = [
  {
    step: '01',
    title: 'Oral Symposia & Scientific Sessions',
    desc: 'Peer-reviewed oral paper presentations and thematic symposia across 8 scientific tracks.',
    icon: Mic2,
    badge: 'Oral Sessions',
    duration: 'Technical Tracks',
  },
  {
    step: '02',
    title: 'Poster Presentations & Interactive Gallery',
    desc: 'Curated interactive poster displays, author Q&A, and expert jury evaluations in the foyer.',
    icon: GalleryIcon,
    badge: 'Interactive Gallery',
    duration: 'Foyer Gallery',
  },
  {
    step: '03',
    title: 'Emerging Biotechnologists Showcase',
    desc: 'Dedicated platform highlighting high-impact projects, discoveries, and early-career innovations.',
    icon: Sparkles,
    badge: 'Showcase',
    duration: 'Special Track',
  },
  {
    step: '04',
    title: 'Student Spotlight Talks',
    desc: 'Fast-paced competitive oral presentations reserved for undergraduate and postgraduate student researchers.',
    icon: GraduationCap,
    badge: 'Student Talks',
    duration: 'Student Session',
  },
  {
    step: '05',
    title: 'Awards Ceremony & Closing Session',
    desc: 'Recognition of Best Oral and Best Poster presenters, valedictory address, and closing remarks.',
    icon: Award,
    badge: 'Ceremony & Awards',
    duration: 'Grand Finale',
  },
];

export const Agenda: React.FC<AgendaProps> = ({ isPreview = false }) => {
  return (
    <section id="agenda" className="py-14 sm:py-18 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-4 border-b border-slate-200/60">
          <div>
            <div className="mb-2">
              <span className="font-mono text-xs px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold">
                04 / PROGRAM
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Key Events
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/submit-article"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold shadow-xs transition-colors"
            >
              <span>Submit Abstract</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/agenda"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-colors"
            >
              <span>Detailed Timeline</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* The 5 Key Events Only */}
        <div className="border border-slate-200/80 rounded-2xl divide-y divide-slate-100 overflow-hidden bg-white shadow-2xs">
          {FIVE_EVENTS.map((event) => {
            const IconComponent = event.icon;
            return (
              <div
                key={event.step}
                className="group py-4 sm:py-4.5 px-4 sm:px-6 transition-colors duration-150 flex flex-col md:flex-row md:items-center justify-between gap-3 hover:bg-emerald-50/40"
              >
                <div className="flex items-start sm:items-center gap-3.5 flex-1 min-w-0">
                  {/* Step Number */}
                  <span className="font-mono text-xs font-bold text-emerald-800 bg-emerald-100/80 px-2 py-1 rounded-md shrink-0">
                    {event.step}
                  </span>

                  {/* Icon */}
                  <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-emerald-100 text-slate-600 group-hover:text-emerald-800 flex items-center justify-center shrink-0 transition-colors">
                    <IconComponent className="w-4 h-4" />
                  </div>

                  {/* Title */}
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-emerald-900 transition-colors">
                      {event.title}
                    </h3>
                  </div>
                </div>

                {/* Right Badge / Status */}
                <div className="flex items-center gap-3 shrink-0 self-start md:self-center pl-10 md:pl-0">
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200/70">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>{event.badge}</span>
                  </span>
                  <span className="text-[11px] font-medium text-slate-400 hidden lg:inline">
                    {event.duration}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
