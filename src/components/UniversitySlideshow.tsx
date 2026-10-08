import React, { useState, useEffect } from 'react';
import { DEFAULT_UNIVERSITY_PHOTOS, UniversityPhoto } from '../data/universityPhotos';

export const UniversitySlideshow: React.FC = () => {
  const photos: UniversityPhoto[] = DEFAULT_UNIVERSITY_PHOTOS;
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play slideshow (smooth transition every 4 seconds)
  useEffect(() => {
    // Clear any previous custom upload from localStorage if it exists
    try {
      localStorage.removeItem('ibc2027_custom_university_photos');
    } catch {
      // Ignore
    }

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [photos.length]);

  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200/90 bg-slate-900 shadow-md">
      {/* Aspect Ratio Container for 4:3 / 16:10 campus photos */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] max-h-[460px] overflow-hidden bg-slate-950">
        {photos.map((photo, index) => {
          const isActive = index === currentIndex;

          return (
            <div
              key={photo.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={photo.url}
                alt={photo.title}
                onError={(e) => {
                  if (photo.fallbackUrl && e.currentTarget.src !== photo.fallbackUrl) {
                    e.currentTarget.src = photo.fallbackUrl;
                  }
                }}
                className={`w-full h-full object-cover transition-transform duration-7000 ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
                loading={index === 0 ? 'eager' : 'lazy'}
              />

              {/* Gentle subtle vignette if needed, without text overlays */}
            </div>
          );
        })}

        {/* Subtle Indicator Dots */}
        <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 bg-black/40 backdrop-blur-xs px-2.5 py-1.5 rounded-full border border-white/15">
          {photos.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={() => setCurrentIndex(dotIdx)}
              aria-label={`View photo ${dotIdx + 1}`}
              className={`transition-all duration-300 rounded-full ${
                dotIdx === currentIndex
                  ? 'w-5 h-1.5 bg-emerald-400'
                  : 'w-1.5 h-1.5 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
