import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, ExternalLink, Sparkles } from 'lucide-react';
import { CONFERENCE_INFO } from '../data/conferenceData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900">
      {/* Marquee Ticker Bar below title */}
      <div className="py-2.5 bg-emerald-950/70 border-b border-emerald-900/60 overflow-hidden text-xs text-emerald-200/90 font-mono tracking-wider">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between whitespace-nowrap">
          <div className="flex items-center gap-4">
            <span>IBC 2027</span>
            <span>✦</span>
            <span>SUSTAINABLE DEVELOPMENT</span>
            <span>✦</span>
            <span>UNIVERSITY OF CHITTAGONG</span>
            <span>✦</span>
            <span>13 JANUARY 2027</span>
            <span>✦</span>
            <span>FACULTY OF BIOLOGICAL SCIENCES</span>
            <span>✦</span>
            <span>IBC 2027</span>
          </div>
          <div className="hidden lg:flex items-center gap-2 text-emerald-400 text-[11px]">
            <Sparkles className="w-3 h-3 text-emerald-300" />
            <span>Official Portal: ibc2027.org</span>
          </div>
        </div>
      </div>

      {/* Navigation Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Col 1: Institutional Leadership */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-800 to-teal-900 p-1.5 flex items-center justify-center text-white border border-emerald-700">
                <img
                  src="/images/university-logo.svg"
                  alt="University of Chittagong"
                  className="w-full h-full object-contain filter invert brightness-200"
                />
              </div>
              <div>
                <span className="font-extrabold text-lg text-white tracking-tight block leading-tight">IBC 2027</span>
                <span className="text-xs text-emerald-400 font-medium">Biotechnology for Sustainable Development</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Organized by the Department of Genetic Engineering &amp; Biotechnology (GEB), Faculty of Biological Sciences, University of Chittagong, Bangladesh.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Conference Links</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="text-slate-400 hover:text-emerald-300 transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-emerald-300 transition-colors">
                  About Conference &amp; GEB Department
                </Link>
              </li>
              <li>
                <a href="#themes" className="text-slate-400 hover:text-emerald-300 transition-colors">
                  8 Thematic Research Areas
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Authors & Submissions */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Authors &amp; Delegates</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/submit-article" className="text-slate-400 hover:text-emerald-300 transition-colors">
                  Call for Abstracts (250 words max)
                </Link>
              </li>
              <li>
                <a
                  href={CONFERENCE_INFO.abstractPortalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 font-semibold hover:text-emerald-300 transition-colors flex items-center gap-1"
                >
                  <span>Google Forms Submission Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-emerald-300 transition-colors">
                  Venue &amp; Campus Travel Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Institutional Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Department Portals</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://cu.ac.bd/dgeb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-emerald-300 transition-colors flex items-center gap-1.5"
                >
                  <span>cu.ac.bd/dgeb</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <a
                  href={CONFERENCE_INFO.facebookPage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-emerald-300 transition-colors flex items-center gap-1.5"
                >
                  <span>Facebook Page</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:ibc2027@cu.ac.bd"
                  className="text-slate-400 hover:text-emerald-300 transition-colors"
                >
                  ibc2027@cu.ac.bd
                </a>
              </li>
              <li>
                <a
                  href="mailto:geb@cu.ac.bd"
                  className="text-slate-400 hover:text-emerald-300 transition-colors"
                >
                  geb@cu.ac.bd
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-white/10 bg-black/60 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2027 Department of Genetic Engineering &amp; Biotechnology, University of Chittagong. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>Courtesy: University Grants Commission (UGC), Bangladesh</span>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
