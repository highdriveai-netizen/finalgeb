import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  UploadCloud,
  RefreshCw,
  Camera,
  Check,
  Info,
} from 'lucide-react';
import { DEFAULT_UNIVERSITY_PHOTOS, UniversityPhoto } from '../data/universityPhotos';

const STORAGE_KEY = 'ibc2027_custom_university_photos';

export const UniversitySlideshow: React.FC = () => {
  const [photos, setPhotos] = useState<UniversityPhoto[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length === 4) {
          return parsed;
        }
      }
    } catch {
      // Fallback
    }
    return DEFAULT_UNIVERSITY_PHOTOS;
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isUploaderOpen, setIsUploaderOpen] = useState(false);
  const [tempUrls, setTempUrls] = useState<string[]>([]);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const activeUploadSlotRef = useRef<number>(0);

  // Auto-play interval
  useEffect(() => {
    if (isPaused || isLightboxOpen || isUploaderOpen) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, isLightboxOpen, isUploaderOpen, photos.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === 1 ? 0 : (prev + 1) % photos.length));
  };

  const currentPhoto = photos[currentIndex] || photos[0];

  // Open uploader dialog
  const handleOpenUploader = () => {
    setTempUrls(photos.map((p) => p.url));
    setSaveSuccess(false);
    setIsUploaderOpen(true);
  };

  // Reset photos to defaults
  const handleResetDefaults = () => {
    localStorage.removeItem(STORAGE_KEY);
    setPhotos(DEFAULT_UNIVERSITY_PHOTOS);
    setTempUrls(DEFAULT_UNIVERSITY_PHOTOS.map((p) => p.url));
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2000);
  };

  // Save custom photos
  const handleSaveCustomPhotos = () => {
    const updated = photos.map((p, idx) => ({
      ...p,
      url: tempUrls[idx] && tempUrls[idx].trim() !== '' ? tempUrls[idx] : p.url,
    }));
    setPhotos(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // Ignore quota error if base64 too large
    }
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      setIsUploaderOpen(false);
    }, 1200);
  };

  // File upload directly from disk for a specific slot
  const handleTriggerFileUpload = (slotIndex: number) => {
    activeUploadSlotRef.current = slotIndex;
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        const slot = activeUploadSlotRef.current;
        setTempUrls((prev) => {
          const next = [...prev];
          next[slot] = reader.result as string;
          return next;
        });
      }
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  };

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden border border-slate-200/90 shadow-md bg-slate-900 flex flex-col group select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="University of Chittagong Campus Photo Slideshow"
    >
      {/* Hidden file input for uploading photos directly */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />

      {/* Main Slideshow Viewport */}
      <div className="relative aspect-16/10 sm:aspect-16/10 w-full overflow-hidden bg-slate-950">
        {/* Photos Layer */}
        {photos.map((photo, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={photo.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
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
                className="w-full h-full object-cover transform duration-1000 scale-100 group-hover:scale-102 transition-transform"
              />
              {/* Refined gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-black/30" />
            </div>
          );
        })}

        {/* Top Badges & Actions */}
        <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold border border-white/15 shadow-sm">
              <Camera className="w-3.5 h-3.5 text-emerald-400" />
              <span>CU Campus Showcase</span>
            </span>
            <span className="hidden sm:inline-flex px-2 py-0.5 rounded bg-emerald-600/90 text-white text-[10px] font-bold tracking-wide uppercase shadow-2xs">
              {currentPhoto.tag}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {/* Upload / Replace photos button */}
            <button
              type="button"
              onClick={handleOpenUploader}
              title="Add or update university photos"
              className="p-1.5 rounded-lg bg-black/60 hover:bg-emerald-700 text-white/90 hover:text-white backdrop-blur-md border border-white/20 transition-all text-xs font-medium flex items-center gap-1 shadow-sm"
              aria-label="Manage / Upload photos"
            >
              <UploadCloud className="w-3.5 h-3.5" />
              <span className="hidden md:inline text-[11px]">Upload Photos</span>
            </button>

            {/* Expand / Lightbox */}
            <button
              type="button"
              onClick={() => setIsLightboxOpen(true)}
              title="Enlarge photograph"
              className="p-1.5 rounded-lg bg-black/60 hover:bg-black/90 text-white/90 hover:text-white backdrop-blur-md border border-white/20 transition-all shadow-sm"
              aria-label="Enlarge photograph"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous photo"
          className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/50 hover:bg-emerald-700 text-white backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all opacity-80 hover:opacity-100 hover:scale-105"
        >
          <ChevronLeft className="w-5 h-5 -ml-0.5" />
        </button>
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next photo"
          className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/50 hover:bg-emerald-700 text-white backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all opacity-80 hover:opacity-100 hover:scale-105"
        >
          <ChevronRight className="w-5 h-5 -mr-0.5" />
        </button>

        {/* Bottom Slide Info & Caption */}
        <div className="absolute bottom-3 left-3 right-3 z-20 text-white pointer-events-none">
          <div className="flex items-end justify-between gap-3">
            <div className="max-w-[80%] space-y-1">
              <h4 className="text-sm sm:text-base font-bold text-white drop-shadow-sm line-clamp-1">
                {currentPhoto.title}
              </h4>
              <p className="text-[11px] sm:text-xs text-slate-200 line-clamp-2 leading-relaxed drop-shadow-xs">
                {currentPhoto.caption}
              </p>
            </div>
            {/* Photo Counter Pill */}
            <div className="shrink-0 px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-sm border border-white/20 text-[11px] font-mono text-emerald-300 font-semibold shadow-xs">
              {currentIndex + 1} / {photos.length}
            </div>
          </div>
        </div>
      </div>

      {/* Progress Dots Bar */}
      <div className="px-4 py-2.5 bg-slate-900 border-t border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          {photos.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to photo ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'w-7 bg-emerald-500 shadow-xs'
                  : 'w-2 bg-slate-600 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={handleOpenUploader}
          className="text-[11px] font-medium text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1"
        >
          <span>Change 4 photos</span>
          <UploadCloud className="w-3 h-3" />
        </button>
      </div>

      {/* Lightbox / Fullscreen Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full bg-slate-950 rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lightbox Header */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-slate-900/80 border-b border-white/10 text-white">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-emerald-600 text-white">
                  {currentPhoto.tag}
                </span>
                <span className="text-xs text-slate-300 font-mono">
                  Photo {currentIndex + 1} of {photos.length}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close photo preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Lightbox Image Viewport */}
            <div className="relative flex-1 bg-black flex items-center justify-center min-h-[350px] max-h-[65vh] overflow-hidden p-2">
              <img
                src={currentPhoto.url}
                alt={currentPhoto.title}
                onError={(e) => {
                  if (currentPhoto.fallbackUrl && e.currentTarget.src !== currentPhoto.fallbackUrl) {
                    e.currentTarget.src = currentPhoto.fallbackUrl;
                  }
                }}
                className="max-h-[60vh] max-w-full object-contain rounded-lg"
              />

              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-emerald-600 text-white border border-white/20 transition-colors"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-emerald-600 text-white border border-white/20 transition-colors"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Lightbox Caption */}
            <div className="p-4 sm:p-5 bg-slate-900 border-t border-white/10 text-white space-y-1">
              <h3 className="text-base sm:text-lg font-bold text-emerald-400">
                {currentPhoto.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {currentPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Upload & Photo Manager Modal */}
      {isUploaderOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsUploaderOpen(false)}
        >
          <div
            className="relative max-w-2xl w-full bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <Camera className="w-5 h-5 text-emerald-400" />
                  <span>Update University Campus Photos</span>
                </h3>
                <p className="text-xs text-slate-300 mt-0.5">
                  Showcase 4 photos from your university in the slideshow
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsUploaderOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 overflow-y-auto space-y-5 text-slate-800">
              {/* Guidance Info Banner */}
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200/80 text-emerald-950 text-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-emerald-900">
                  <Info className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>How to give me your 4 university photos:</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-slate-700 pl-1 text-[11.5px] leading-relaxed">
                  <li>
                    <strong>Live in your browser now:</strong> Click <em>&quot;Upload from Computer&quot;</em> below for each slot to pick your photo files or paste image URLs, then click <em>&quot;Save &amp; View Live&quot;</em>.
                  </li>
                  <li>
                    <strong>Directly in chat:</strong> Simply send me the 4 image links or file attachments here in chat, and I will permanently embed them into the project.
                  </li>
                  <li>
                    <strong>Via GitHub repository:</strong> Save your 4 images into <code className="bg-emerald-100/80 px-1 py-0.5 rounded font-mono text-[10.5px]">public/images/campus/</code> as <code className="bg-emerald-100/80 px-1 py-0.5 rounded font-mono text-[10.5px]">campus-1.jpg</code> to <code className="bg-emerald-100/80 px-1 py-0.5 rounded font-mono text-[10.5px]">campus-4.jpg</code>.
                  </li>
                </ul>
              </div>

              {/* 4 Photo Slots */}
              <div className="space-y-3.5">
                {photos.map((photo, slotIndex) => {
                  const currentPreviewUrl = tempUrls[slotIndex] || photo.url;
                  return (
                    <div
                      key={photo.id}
                      className="p-3 rounded-xl border border-slate-200 bg-slate-50/70 flex flex-col sm:flex-row items-start sm:items-center gap-3.5"
                    >
                      {/* Thumbnail Preview */}
                      <div className="relative w-20 h-16 sm:w-24 sm:h-18 rounded-lg overflow-hidden bg-slate-900 shrink-0 border border-slate-200">
                        <img
                          src={currentPreviewUrl}
                          alt={`Slot ${slotIndex + 1}`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            if (photo.fallbackUrl) e.currentTarget.src = photo.fallbackUrl;
                          }}
                        />
                        <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-black/75 text-[9px] font-mono text-white font-bold">
                          #{slotIndex + 1}
                        </span>
                      </div>

                      {/* URL input and upload button */}
                      <div className="flex-1 w-full space-y-1.5">
                        <div className="flex items-center justify-between">
                          <label className="text-xs font-bold text-slate-800">
                            Photo {slotIndex + 1}: {photo.title}
                          </label>
                          <span className="text-[10px] text-slate-500 font-medium">{photo.tag}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            placeholder="Enter image URL or upload file..."
                            value={tempUrls[slotIndex] || ''}
                            onChange={(e) => {
                              const val = e.target.value;
                              setTempUrls((prev) => {
                                const next = [...prev];
                                next[slotIndex] = val;
                                return next;
                              });
                            }}
                            className="flex-1 px-2.5 py-1.5 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-600 font-mono text-slate-700"
                          />
                          <button
                            type="button"
                            onClick={() => handleTriggerFileUpload(slotIndex)}
                            className="shrink-0 px-2.5 py-1.5 rounded-lg bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-medium flex items-center gap-1 shadow-2xs transition-colors"
                          >
                            <UploadCloud className="w-3.5 h-3.5" />
                            <span>Upload</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={handleResetDefaults}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-200/70 transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset to Default Campus Photos</span>
              </button>

              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => setIsUploaderOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-200/70 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSaveCustomPhotos}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg shadow-sm transition-all"
                >
                  {saveSuccess ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-300" />
                      <span>Saved &amp; Updated Live!</span>
                    </>
                  ) : (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Save &amp; View Live</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
