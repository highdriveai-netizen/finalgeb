import React from 'react';
import { Users, Sparkles } from 'lucide-react';
import { FeaturedSpeaker } from '../components/FeaturedSpeaker';

export const SpeakersPage: React.FC = () => {
  return (
    <div className="py-12 bg-white">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#044e3b] to-[#0f766e] text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-200 text-xs font-semibold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5 text-emerald-300" />
            <span>Academic Faculty &amp; Invited Orators</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Conference Speakers &amp; Scholars
          </h1>
          <p className="text-emerald-100 max-w-3xl text-sm sm:text-base leading-relaxed">
            Distinguished scientists, professors, and emerging researchers convening to deliver plenary keynotes, thematic symposia, and parallel technical sessions.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
        {/* Featured Keynote Card */}
        <FeaturedSpeaker />

        {/* Invited Speakers & Panellists: Photo Frames with 'Updating Soon' */}
        <div className="pt-8 border-t border-slate-200">
          <div className="rounded-2xl bg-slate-50 border border-slate-200/90 p-8 sm:p-14 text-center space-y-8">
            <div className="max-w-xl mx-auto space-y-2">
              <div className="text-xs font-bold text-emerald-800 uppercase tracking-widest">
                Invited Speakers &amp; Panelists
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Thematic &amp; Parallel Session Speakers
              </h2>
            </div>

            {/* 3 Placeholder Photo Frames in a neat row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[1, 2, 3].map((idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs flex flex-col items-center space-y-3">
                  <div className="w-28 h-28 rounded-2xl bg-slate-100 border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400">
                    <Users className="w-10 h-10 text-slate-300" />
                  </div>
                  <div className="w-full space-y-1">
                    <div className="h-3.5 bg-slate-200/80 rounded-md w-3/4 mx-auto animate-pulse" />
                    <div className="h-2.5 bg-slate-100 rounded-md w-1/2 mx-auto" />
                  </div>
                </div>
              ))}
            </div>

            {/* Prominent Updating Soon Banner */}
            <div className="space-y-2 pt-2 max-w-md mx-auto">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/70 text-emerald-900 border border-emerald-200 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                <span>Invited Scholars Announcement</span>
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                Updating Soon
              </h3>
              <p className="text-sm text-slate-600">
                The complete directory of plenary orators, session chairs, and invited symposium speakers will be published here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
