import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FileText,
  Download,
  Maximize2,
  Minimize2,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Calendar,
  Building,
  CreditCard,
  QrCode,
  ExternalLink,
  ArrowLeft,
  Share2,
  Check,
  CheckCircle2,
} from 'lucide-react';
import { CONFERENCE_INFO, IMPORTANT_DATES } from '../data/conferenceData';

export const OfficialPosterPage: React.FC = () => {
  const location = useLocation();
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const posterImageSrc = CONFERENCE_INFO.flyerUrl || '/images/official-conference-poster.jpg';

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
  const handleResetZoom = () => setZoomLevel(1);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'IBC 2027 Official Conference Poster',
          text: 'Official circular and call for abstracts poster for International Biotechnology Conference 2027 at University of Chittagong.',
          url: window.location.href,
        });
      } catch {
        // User cancelled or unsupported
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 sm:py-12">
      {/* Top Breadcrumb & Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-850 hover:text-emerald-950 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 bg-white text-xs font-medium text-slate-700 hover:bg-slate-50 shadow-2xs transition"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-slate-500" />
                  <span>Share Poster</span>
                </>
              )}
            </button>

            <a
              href={posterImageSrc}
              download="IBC2027-Official-Conference-Poster.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold shadow-xs transition"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download High-Res JPG</span>
            </a>
          </div>
        </div>
      </div>

      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-gradient-to-r from-[#044e3b] via-[#065f46] to-[#0f766e] text-white rounded-3xl p-6 sm:p-10 shadow-lg space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-200 text-xs font-semibold uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5 text-emerald-300" />
            <span>Official Conference Circular · IBC 2027</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            Official Conference Poster
          </h1>
          <p className="text-emerald-100 max-w-3xl text-xs sm:text-sm md:text-base leading-relaxed">
            Department of Genetic Engineering and Biotechnology (GEB), University of Chittagong presents the International Biotechnology Conference 2027 on “Biotechnology for sustainable development”.
          </p>
        </div>
      </div>

      {/* Main Grid: Poster Display & Details Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left / Center Column: Interactive Poster Display */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden">
            {/* Poster Control Bar */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-slate-900 text-white border-b border-slate-800">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>IBC 2027 Official Flyer</span>
                <span className="hidden sm:inline text-slate-500">· 1179 × 1552 px</span>
              </div>

              {/* Zoom and Fullscreen Controls */}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handleZoomOut}
                  disabled={zoomLevel <= 0.75}
                  className="p-1.5 rounded-md hover:bg-slate-800 text-slate-300 hover:text-white disabled:opacity-40 transition"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono text-slate-400 px-1 min-w-[3rem] text-center">
                  {Math.round(zoomLevel * 100)}%
                </span>
                <button
                  type="button"
                  onClick={handleZoomIn}
                  disabled={zoomLevel >= 2.5}
                  className="p-1.5 rounded-md hover:bg-slate-800 text-slate-300 hover:text-white disabled:opacity-40 transition"
                  title="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleResetZoom}
                  className="p-1.5 rounded-md hover:bg-slate-800 text-slate-300 hover:text-white transition"
                  title="Reset Zoom"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <div className="h-4 w-px bg-slate-700 mx-1"></div>
                <button
                  type="button"
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="p-1.5 rounded-md hover:bg-slate-800 text-slate-300 hover:text-white transition"
                  title={isFullscreen ? 'Exit Fullscreen' : 'View Fullscreen'}
                >
                  {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Poster Stage */}
            <div className={`relative bg-slate-950 flex items-center justify-center overflow-auto p-4 sm:p-6 transition-all duration-300 ${
              isFullscreen ? 'fixed inset-0 z-50 p-6' : 'min-h-[500px] max-h-[85vh]'
            }`}>
              {isFullscreen && (
                <button
                  onClick={() => setIsFullscreen(false)}
                  className="absolute top-4 right-4 z-50 p-2 rounded-full bg-slate-900/80 text-white hover:bg-slate-800 border border-slate-700"
                >
                  <Minimize2 className="w-5 h-5" />
                </button>
              )}

              <div
                style={{
                  transform: `scale(${zoomLevel})`,
                  transformOrigin: 'top center',
                  transition: 'transform 0.15s ease-out',
                }}
                className="max-w-full"
              >
                <img
                  src={posterImageSrc}
                  alt="Official Conference Poster - International Biotechnology Conference IBC 2027"
                  className="rounded-xl shadow-2xl mx-auto max-h-[80vh] w-auto object-contain border border-slate-800"
                  onError={(e) => {
                    if (e.currentTarget.src !== 'https://ibb.co.com/JRztPbQP') {
                      e.currentTarget.src = '/assets/aistudio/8e422447-7c5e-4666-9c47-86c61746f85a_9d386025.jpg';
                    }
                  }}
                />
              </div>
            </div>

            {/* Bottom Actions Bar */}
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-slate-500">
                Tip: Use controls to zoom in and read fine print or scan QR codes.
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={posterImageSrc}
                  download="IBC2027-Official-Conference-Poster.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 hover:text-emerald-950"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download File</span>
                </a>
                <a
                  href="https://ibb.co.com/JRztPbQP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900"
                >
                  <span>Open on ibb.co</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Key Details & Quick Actions */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Action Card: Submit Abstract */}
            <div className="bg-emerald-900 text-white rounded-3xl p-6 sm:p-7 shadow-md space-y-4">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-800 text-emerald-200 text-xs font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Call for Abstracts Active</span>
              </div>
              <h3 className="text-xl font-bold">Ready to Submit?</h3>
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                Abstract submission is open and completely free of charge. Submit your 250-word structured manuscript abstract online.
              </p>
              <div className="pt-2 space-y-2.5">
                <a
                  href={CONFERENCE_INFO.abstractPortalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-emerald-950 font-bold text-xs sm:text-sm shadow hover:bg-emerald-50 transition"
                >
                  <span>Open Submission Form</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <Link
                  to="/submit-article#guidelines"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-800/80 hover:bg-emerald-800 text-white font-semibold text-xs transition border border-emerald-700/70"
                >
                  <span>View Author Guidelines</span>
                </Link>
              </div>
            </div>

            {/* Official Deadlines Card */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
                <Calendar className="w-5 h-5 text-emerald-700" />
                <h3 className="font-extrabold text-slate-900 text-base">Key Dates &amp; Deadlines</h3>
              </div>

              <div className="space-y-3">
                {IMPORTANT_DATES.map((item) => (
                  <div key={item.id} className="flex items-start justify-between gap-3 text-xs pb-2 border-b border-slate-50 last:border-none last:pb-0">
                    <span className="text-slate-600 font-medium">{item.title}:</span>
                    <span className="font-bold text-slate-900 shrink-0 font-mono">{item.date}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Official Bank Account & Bangla QR Details */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
                <CreditCard className="w-5 h-5 text-emerald-700" />
                <h3 className="font-extrabold text-slate-900 text-base">Payment &amp; Bank Details</h3>
              </div>

              <div className="space-y-2 text-xs text-slate-700">
                <div className="flex justify-between">
                  <span className="text-slate-500">Bank Name:</span>
                  <span className="font-semibold text-slate-900">{CONFERENCE_INFO.payment.bankName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Branch:</span>
                  <span className="font-semibold text-slate-900">{CONFERENCE_INFO.payment.branch}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Account Title:</span>
                  <span className="font-semibold text-slate-900">{CONFERENCE_INFO.payment.accountName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Account Number:</span>
                  <span className="font-mono font-bold text-emerald-800">{CONFERENCE_INFO.payment.accountNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Routing Number:</span>
                  <span className="font-mono font-semibold text-slate-900">{CONFERENCE_INFO.payment.routingNumber}</span>
                </div>
                <div className="pt-2 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-600">
                  <QrCode className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Supports bKash, Nagad, and Rocket via Bangla QR</span>
                </div>
              </div>

              <Link
                to="/register#fees"
                className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition"
              >
                <span>View Registration Fees</span>
              </Link>
            </div>

            {/* Conference Secretariat */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5 space-y-2 text-xs text-slate-600">
              <div className="font-bold text-slate-900 flex items-center gap-2">
                <Building className="w-4 h-4 text-emerald-700" />
                <span>Organized by Dept. of GEB</span>
              </div>
              <p>Faculty of Biological Sciences, University of Chittagong, Bangladesh</p>
              <div className="pt-2 text-[11px] text-slate-500 space-y-0.5">
                <div>Email: <a href="mailto:ibc2027@cu.ac.bd" className="text-emerald-800 font-medium hover:underline">ibc2027@cu.ac.bd</a></div>
                <div>Website: <a href="https://ibc2027.org" className="text-emerald-800 font-medium hover:underline">https://ibc2027.org</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
