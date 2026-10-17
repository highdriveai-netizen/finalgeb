import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { AGENDA_DAYS } from '../data/conferenceData';

export const AgendaPage: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<number>(1);

  return (
    <div className="py-12 bg-white">
      {/* Banner */}
      <div className="bg-gradient-to-r from-[#044e3b] to-[#0f766e] text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-200 text-xs font-semibold uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5 text-emerald-300" />
            <span>3-Day Scientific Program</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Conference Agenda &amp; Schedule
          </h1>
          <p className="text-emerald-100 max-w-3xl text-sm sm:text-base leading-relaxed">
            Detailed session breakdown, keynote lectures, technical tracks, poster viewings, and academic symposiums.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-10">
        {/* Day selection and controls */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200">
          {/* Day Tabs */}
          <div className="flex items-center p-1.5 bg-slate-100 rounded-xl border border-slate-200 overflow-x-auto">
            {AGENDA_DAYS.map((day) => (
              <button
                key={day.dayNumber}
                type="button"
                onClick={() => setSelectedDay(day.dayNumber)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold transition-all whitespace-nowrap ${
                  selectedDay === day.dayNumber
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                <span>{day.label}</span>
                <span className={`text-xs font-normal ${selectedDay === day.dayNumber ? 'text-emerald-200' : 'text-slate-400'}`}>
                  · {day.dateLabel.split('—')[1]?.trim() || 'Sessions'}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Updating Soon Announcement Card */}
        <div className="p-10 sm:p-20 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm flex flex-col items-center justify-center text-center space-y-4 max-w-3xl mx-auto my-8">
          <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shadow-2xs">
            <Calendar className="w-8 h-8 text-emerald-700" />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
            <span>Schedule Announcement</span>
          </div>

          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Updating Soon
          </h3>

          <p className="text-sm sm:text-base text-slate-600 max-w-lg leading-relaxed">
            The detailed scientific agenda, keynote slots, parallel technical session timings, and hall schedules will be announced shortly following the completion of abstract peer reviews.
          </p>
        </div>
      </div>
    </div>
  );
};
