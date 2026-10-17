import React from 'react';
import { Award, Sparkles } from 'lucide-react';

export const FeaturedSpeaker: React.FC = () => {

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8">
          <div className="text-xs sm:text-sm font-bold text-emerald-800 uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="w-6 h-0.5 bg-emerald-600 inline-block" />
            <span>Plenary Leadership</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Featured Keynote Speaker
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Distinguished scholars and international leaders in genetic engineering and biotechnology delivering inaugural plenary addresses.
          </p>
        </div>

        {/* Keynote Card: Elegant Photo Frame with 'Updating Soon' */}
        <div className="relative rounded-2xl bg-white border border-emerald-900/10 shadow-lg overflow-hidden p-8 sm:p-12">
          {/* Green accent border on top */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-700" />

          <div className="flex flex-col items-center justify-center text-center space-y-6 max-w-xl mx-auto">
            {/* Elegant Portrait Frame */}
            <div className="relative w-52 h-52 sm:w-60 sm:h-60 rounded-3xl overflow-hidden shadow-md border-4 border-white bg-slate-100 ring-1 ring-slate-200/80 flex items-center justify-center group">
              <div className="w-full h-full bg-gradient-to-b from-slate-100 via-slate-50 to-emerald-50/40 flex flex-col items-center justify-center p-6 text-slate-400">
                <div className="w-20 h-20 rounded-2xl bg-white shadow-2xs border border-slate-200 flex items-center justify-center text-slate-400 mb-3">
                  <Award className="w-10 h-10 text-emerald-700/60" />
                </div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Distinguished Keynote Speaker
                </span>
              </div>
            </div>

            {/* Prominent 'Updating Soon' Notice */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>Plenary Announcement</span>
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                Updating Soon
              </h3>
              <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto leading-relaxed">
                The official keynote speaker profile, biographical overview, and plenary lecture topic will be announced shortly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
