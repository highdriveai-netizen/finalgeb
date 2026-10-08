import React, { useState, useEffect } from 'react';
import { Clock, Calendar, Sparkles } from 'lucide-react';
import { CONFERENCE_INFO } from '../data/conferenceData';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

interface CountdownProps {
  className?: string;
  variant?: 'hero' | 'standalone';
}

export const Countdown: React.FC<CountdownProps> = ({ className = '', variant = 'hero' }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const target = new Date(CONFERENCE_INFO.countdownTarget).getTime();
    const now = new Date().getTime();
    const difference = target - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isExpired: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
  ];

  return (
    <div
      className={`relative rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 p-4 sm:p-5 shadow-xs transition-all duration-300 hover:border-emerald-300 hover:shadow-sm ${className}`}
      aria-label="Countdown to IBC 2027"
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Label and Conference Milestone */}
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/80 text-emerald-800 flex items-center justify-center shrink-0 shadow-2xs">
            <Clock className="w-4 h-4 text-emerald-700" />
          </div>
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                Countdown to IBC 2027
              </span>
              <span className="text-[10px] font-semibold text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">
                13 Jan 2027
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              Faculty of Biological Sciences · University of Chittagong
            </p>
          </div>
        </div>

        {/* Minimal Typographic Countdown Grid (Days, Hours, Minutes) */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {units.map((unit, index) => (
            <React.Fragment key={unit.label}>
              <div className="flex flex-col items-center justify-center min-w-[62px] sm:min-w-[72px] py-2 px-2.5 rounded-xl bg-slate-50/90 border border-slate-200/80 shadow-2xs group transition-colors hover:bg-emerald-50/50 hover:border-emerald-200">
                <span className="font-mono text-xl sm:text-2xl font-extrabold text-slate-900 tabular-nums leading-none tracking-tight">
                  {String(unit.value).padStart(2, '0')}
                </span>
                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mt-1">
                  {unit.label}
                </span>
              </div>

              {index < units.length - 1 && (
                <span className="font-mono text-slate-300 font-bold text-lg select-none px-0.5">
                  :
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
