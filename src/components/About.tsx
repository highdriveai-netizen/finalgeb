import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { CONFERENCE_INFO } from '../data/conferenceData';
import { UniversitySlideshow } from './UniversitySlideshow';

export const About: React.FC = () => {
  return (
    <section id="about" className="pt-4 pb-14 sm:pt-6 sm:pb-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-6 pb-4 border-b border-slate-100">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            About the Conference
          </h2>
        </div>

        {/* Narrative & University Showcase Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-5">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
              A global forum for research, bio-economy, and sustainable development.
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {CONFERENCE_INFO.aboutConference}
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Hosted by the Department of Genetic Engineering and Biotechnology (GEB) at the University of Chittagong, IBC 2027 unites leading researchers, academicians, clinicians, and industry pioneers to exchange transformative discoveries, debate bioethical priorities, and advance biotechnological solutions for Bangladesh and the wider world.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold shadow-xs transition-colors"
              >
                <span>Read Full Background &amp; Scope</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/about#committee"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors"
              >
                <span>Organizing Committee</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
              </Link>
            </div>
          </div>

          {/* University Slideshow Column */}
          <div className="lg:col-span-5 w-full">
            <UniversitySlideshow />
          </div>
        </div>
      </div>
    </section>
  );
};
