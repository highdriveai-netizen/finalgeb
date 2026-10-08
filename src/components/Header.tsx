import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';
import { CONFERENCE_INFO } from '../data/conferenceData';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change or click outside
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Navigation Items matching the reference website
  const navigationItems = [
    { label: 'Home', path: '/' },
    {
      label: 'About',
      key: 'about',
      hasDropdown: true,
      items: [
        { label: 'About Conference', path: '/about#conference' },
        { label: 'About GEB Department', path: '/about#department' },
        { label: 'Organizing Committee', path: '/about#committee' },
        { label: 'Host University (CU)', path: '/about#university' },
      ],
    },
    {
      label: 'Program',
      key: 'program',
      hasDropdown: true,
      items: [
        { label: 'Conference Agenda', path: '/agenda' },
        { label: '8 Research Areas', path: '/#themes' },
        { label: '5 Key Events', path: '/about#events' },
      ],
    },
    {
      label: 'Keynote Speaker',
      path: '/speakers',
    },
    {
      label: 'Authors',
      key: 'authors',
      hasDropdown: true,
      items: [
        { label: 'Call for Abstracts', path: '/submit-article' },
        { label: 'Submission Guidelines', path: '/submit-article#guidelines' },
        { label: 'Check Submission Status', path: '/results' },
        { label: 'Google Forms Portal ↗', path: CONFERENCE_INFO.abstractPortalUrl, isExternal: true },
      ],
    },
    {
      label: 'Registration',
      key: 'registration',
      hasDropdown: true,
      items: [
        { label: 'Registration Fees', path: '/register#fees' },
        { label: 'Bank Payment & Bangla QR', path: '/register#payment' },
        { label: 'Register Online', path: '/register' },
      ],
    },
    {
      label: 'Contact',
      path: '/contact',
    },
  ];

  return (
    <>
      {/* Modern Minimal Sticky Floating Header */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2.5'
            : 'bg-white border-b border-slate-200/60 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between" ref={dropdownRef}>
            {/* Left: Official Logo & Identity */}
            <Link to="/" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded-lg">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-800 to-teal-900 p-1.5 flex items-center justify-center text-white shadow-xs transition-transform group-hover:scale-105 shrink-0 border border-emerald-700/50">
                <img
                  src="/images/university-logo.svg"
                  alt="University of Chittagong"
                  className="w-full h-full object-contain filter invert brightness-200"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-lg text-slate-900 tracking-tight leading-none group-hover:text-emerald-800 transition-colors">
                    IBC 2027
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5 hidden sm:block">
                  Dept. of GEB · University of Chittagong
                </span>
              </div>
            </Link>

            {/* Desktop Navigation with Dropdowns (Matching Reference) */}
            <nav className="hidden xl:flex items-center gap-1" aria-label="Main Navigation">
              {navigationItems.map((item) => {
                if (item.hasDropdown) {
                  const isOpen = openDropdown === item.key;
                  return (
                    <div
                      key={item.key}
                      className="relative"
                      onMouseEnter={() => setOpenDropdown(item.key)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenDropdown(isOpen ? null : item.key!)}
                        className={`inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                          isOpen ? 'text-emerald-800 bg-emerald-50/80' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                        }`}
                        aria-expanded={isOpen}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${isOpen ? 'rotate-180 text-emerald-700' : 'text-slate-400'}`} />
                      </button>

                      {/* Dropdown Menu */}
                      {isOpen && (
                        <div className="absolute top-full left-0 mt-1 min-w-[210px] bg-white rounded-xl shadow-lg border border-slate-200/90 py-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                          {item.items?.map((subItem) => (
                            subItem.isExternal ? (
                              <a
                                key={subItem.label}
                                href={subItem.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between px-3.5 py-2 text-xs font-medium text-slate-700 hover:text-emerald-800 hover:bg-emerald-50/70 transition-colors"
                              >
                                <span>{subItem.label}</span>
                                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                              </a>
                            ) : (
                              <Link
                                key={subItem.label}
                                to={subItem.path}
                                onClick={() => setOpenDropdown(null)}
                                className="block px-3.5 py-2 text-xs font-medium text-slate-700 hover:text-emerald-800 hover:bg-emerald-50/70 transition-colors"
                              >
                                {subItem.label}
                              </Link>
                            )
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    to={item.path!}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                      location.pathname === item.path
                        ? 'text-emerald-800 bg-emerald-50'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Primary Action Button (Submit Paper) */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="https://forms.gle/RzeqcFCeakhUFMVF8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-emerald-800 active:bg-emerald-950 rounded-lg shadow-xs transition-all duration-200 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
              >
                <span>Submit Paper</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center xl:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-slate-200 bg-white shadow-xl animate-in slide-in-from-top-2 duration-150 max-h-[85vh] overflow-y-auto">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-3">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                Home
              </Link>

              {/* Mobile About */}
              <div className="space-y-1 pl-3 border-l-2 border-emerald-600">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 py-1">About</div>
                <Link to="/about#conference" className="block text-xs py-1.5 text-slate-700 hover:text-emerald-700 font-medium">About Conference</Link>
                <Link to="/about#department" className="block text-xs py-1.5 text-slate-700 hover:text-emerald-700 font-medium">About GEB Department</Link>
                <Link to="/about#committee" className="block text-xs py-1.5 text-slate-700 hover:text-emerald-700 font-medium">Organizing Committee</Link>
                <Link to="/about#university" className="block text-xs py-1.5 text-slate-700 hover:text-emerald-700 font-medium">Host University (CU)</Link>
              </div>

              {/* Mobile Program */}
              <div className="space-y-1 pl-3 border-l-2 border-teal-600">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 py-1">Program</div>
                <Link to="/agenda" className="block text-xs py-1.5 text-slate-700 hover:text-emerald-700 font-medium">Conference Agenda</Link>
                <Link to="/#themes" className="block text-xs py-1.5 text-slate-700 hover:text-emerald-700 font-medium">8 Research Areas</Link>
                <Link to="/about#events" className="block text-xs py-1.5 text-slate-700 hover:text-emerald-700 font-medium">5 Key Events</Link>
              </div>

              <Link
                to="/speakers"
                className="block px-3 py-2 rounded-md text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                Keynote Speaker
              </Link>

              {/* Mobile Authors */}
              <div className="space-y-1 pl-3 border-l-2 border-emerald-600">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 py-1">Authors</div>
                <Link to="/submit-article" className="block text-xs py-1.5 text-slate-700 hover:text-emerald-700 font-medium">Call for Abstracts</Link>
                <Link to="/submit-article#guidelines" className="block text-xs py-1.5 text-slate-700 hover:text-emerald-700 font-medium">Submission Guidelines</Link>
                <Link to="/results" className="block text-xs py-1.5 text-slate-700 hover:text-emerald-700 font-medium">Check Submission Status</Link>
                <a href={CONFERENCE_INFO.abstractPortalUrl} target="_blank" rel="noopener noreferrer" className="block text-xs py-1.5 text-emerald-700 font-semibold">
                  Google Forms Portal ↗
                </a>
              </div>

              {/* Mobile Registration */}
              <div className="space-y-1 pl-3 border-l-2 border-teal-600">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 py-1">Registration</div>
                <Link to="/register#fees" className="block text-xs py-1.5 text-slate-700 hover:text-emerald-700 font-medium">Registration Fees</Link>
                <Link to="/register#payment" className="block text-xs py-1.5 text-slate-700 hover:text-emerald-700 font-medium">Bank Payment &amp; Bangla QR</Link>
                <Link to="/register" className="block text-xs py-1.5 text-slate-700 hover:text-emerald-700 font-medium">Register Online</Link>
              </div>

              <Link
                to="/contact"
                className="block px-3 py-2 rounded-md text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                Contact
              </Link>

              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href="https://forms.gle/RzeqcFCeakhUFMVF8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 py-2.5 px-4 text-xs font-bold text-white bg-slate-900 rounded-lg shadow-xs"
                >
                  <span>Submit Paper</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <Link
                  to="/register"
                  className="w-full flex items-center justify-center py-2 px-4 text-xs font-semibold text-emerald-800 bg-emerald-50 rounded-lg border border-emerald-200"
                >
                  Register Online
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
