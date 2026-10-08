import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, ArrowUpRight, Compass, Camera, Sparkles } from 'lucide-react';
import { CONFERENCE_INFO } from '../data/conferenceData';

export const CampusShowcase: React.FC = () => {
  // Active photo tab
  const [activePhoto, setActivePhoto] = useState(0);

  const campusPhotos = [
    {
      title: "University of Chittagong Main Entrance Gate",
      subtitle: "Main Archway · চট্টগ্রাম বিশ্ববিদ্যালয়",
      desc: "The monumental entrance to the University of Chittagong framed by red blooming flowers and lush forest canopy.",
      src: "/images/cu-entrance.jpg",
      fallback: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Campus Buildings Nestled in Scenic Hills",
      subtitle: "Faculty of Biological Sciences & Hilly Landscape",
      desc: "One of the most scenic university campuses in South Asia, spread across the picturesque hills of Hathazari, Chattogram.",
      src: "/images/cu-campus-hills.jpg",
      fallback: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Historic 'Joy Bangla' Monument",
      subtitle: "Symbol of Academic Heritage & Liberation",
      desc: "The landmark sculpture honoring Bangladesh's Liberation War heroes along the tranquil tree-lined campus thoroughfare.",
      src: "/images/cu-sculpture.jpg",
      fallback: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "University Campus Transportation",
      subtitle: "Campus Shuttle Bus & Nature Roads",
      desc: "Chittagong University's iconic commuter transport navigating the lush green winding roads through the academic complex.",
      src: "/images/cu-bus.jpg",
      fallback: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const current = campusPhotos[activePhoto];

  return (
    <section id="venue" className="relative overflow-hidden bg-slate-950 text-white py-20 sm:py-28 border-b border-slate-900">
      {/* Background panoramic image with smooth overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={current.src}
          onError={(e) => {
            // Graceful fallback to high-resolution campus photo if local path not yet dropped
            (e.target as HTMLImageElement).src = current.fallback;
          }}
          alt={current.title}
          className="w-full h-full object-cover opacity-35 filter brightness-75 scale-105 transition-all duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Eyebrow & Title */}
        <div className="max-w-3xl space-y-4">
          <div>
            <span className="font-mono text-xs px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/40 text-emerald-300 font-semibold">
              06 / VENUE &amp; CAMPUS
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
            Meet where <br />
            <span className="font-serif italic font-normal text-emerald-300">
              ideas have room to move.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            Department of Genetic Engineering &amp; Biotechnology, University of Chittagong welcomes the international biotechnology community to its lush green, hilly campus on <strong>13 January 2027</strong>.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold transition-all hover:scale-[1.02] shadow-sm"
            >
              <Compass className="w-4 h-4" />
              <span>Explore the venue &amp; travel</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              to="/submit-article"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-semibold transition-all"
            >
              <span>Submit an abstract</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Interactive Campus Photo Navigator (Thumbnails with CU Photos) */}
        <div className="pt-6 border-t border-white/10">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
            <Camera className="w-3.5 h-3.5 text-emerald-400" />
            <span>Chittagong University Campus Landmarks (Click to switch view):</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {campusPhotos.map((photo, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActivePhoto(idx)}
                className={`p-3 rounded-xl text-left border transition-all duration-200 group relative overflow-hidden ${
                  activePhoto === idx
                    ? 'bg-white/20 border-emerald-400 shadow-md ring-2 ring-emerald-400/40'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <div className="text-[10px] font-mono font-bold text-emerald-300 mb-1">
                  0{idx + 1} · {photo.subtitle.split('·')[0]}
                </div>
                <div className="text-xs font-bold text-white group-hover:text-emerald-200 transition-colors line-clamp-1">
                  {photo.title}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-4 text-xs text-slate-400 italic">
            * Selected view: <strong>{current.title}</strong> — {current.desc}
          </div>
        </div>
      </div>
    </section>
  );
};
