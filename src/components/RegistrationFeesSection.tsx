import React from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, CheckCircle2, ArrowUpRight, QrCode, Building, ShieldCheck, Mail, Check } from 'lucide-react';
import { REGISTRATION_CATEGORIES, CONFERENCE_INFO } from '../data/conferenceData';

interface RegistrationFeesSectionProps {
  selectedCategoryId?: string;
  onSelectCategory?: (categoryId: string) => void;
  showRegisterLink?: boolean;
}

export const RegistrationFeesSection: React.FC<RegistrationFeesSectionProps> = ({
  selectedCategoryId,
  onSelectCategory,
  showRegisterLink = true,
}) => {
  const handleSelect = (categoryId: string) => {
    if (onSelectCategory) {
      onSelectCategory(categoryId);
      const formEl = document.getElementById('registration-form');
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="fees" className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-slate-100">
          <div className="max-w-2xl">
            <div className="mb-2">
              <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-850 font-semibold tracking-wide">
                DELEGATE TIERS &amp; REGISTRATION
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Registration Fees &amp; Payment Methods
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              Transparent registration tiers for students, academics, and international participants. Payments accepted via direct bank transfer to Janata Bank PLC and nationwide Bangla QR.
            </p>
          </div>

          {showRegisterLink && (
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="#registration-form"
                onClick={(e) => {
                  const formEl = document.getElementById('registration-form');
                  if (formEl) {
                    e.preventDefault();
                    formEl.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-emerald-800 hover:bg-emerald-900 text-white text-xs sm:text-sm font-bold shadow-xs transition-all hover:scale-[1.02]"
              >
                <span>Complete Form Below</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>

        {/* 3 Fee Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {REGISTRATION_CATEGORIES.map((cat, idx) => {
            const isSelected = selectedCategoryId === cat.id;
            const isFeatured = cat.id === 'cat-professionals';
            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory && handleSelect(cat.id)}
                className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-emerald-950 text-white shadow-xl ring-2 ring-emerald-500 scale-[1.02]'
                    : isFeatured
                    ? 'bg-slate-900 text-white shadow-lg ring-1 ring-slate-800 hover:border-emerald-500/50'
                    : 'bg-slate-50/70 border border-slate-200 text-slate-900 hover:border-emerald-500/50 hover:bg-white'
                }`}
              >
                {isSelected ? (
                  <div className="mb-2">
                    <span className="bg-emerald-500 text-slate-950 text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full shadow-xs inline-flex items-center gap-1">
                      <Check className="w-3 h-3" /> Selected Category
                    </span>
                  </div>
                ) : isFeatured ? (
                  <div className="mb-2">
                    <span className="bg-emerald-500 text-slate-950 text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full shadow-xs">
                      Primary Category
                    </span>
                  </div>
                ) : null}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-[11px] font-mono font-bold uppercase tracking-wider ${
                        isSelected || isFeatured ? 'text-emerald-400' : 'text-emerald-800'
                      }`}
                    >
                      Tier 0{idx + 1}
                    </span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded font-medium ${
                        isSelected || isFeatured ? 'bg-slate-800 text-slate-300' : 'bg-slate-200/80 text-slate-600'
                      }`}
                    >
                      {cat.currency}
                    </span>
                  </div>

                  <h3 className={`text-lg sm:text-xl font-bold mb-4 ${isSelected || isFeatured ? 'text-white' : 'text-slate-900'}`}>
                    {cat.name}
                  </h3>

                  <div className="mb-6 pb-6 border-b border-slate-200/20">
                    <div className="flex items-baseline gap-1">
                      <span
                        className={`text-3xl sm:text-4xl font-extrabold font-mono tracking-tight ${
                          isSelected || isFeatured ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {cat.feeText}
                      </span>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-2.5 mb-6">
                    {cat.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs">
                        <CheckCircle2
                          className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                            isSelected || isFeatured ? 'text-emerald-400' : 'text-emerald-700'
                          }`}
                        />
                        <span className={isSelected || isFeatured ? 'text-slate-200' : 'text-slate-700'}>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200/20">
                  {onSelectCategory ? (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelect(cat.id);
                      }}
                      className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                        isSelected
                          ? 'bg-emerald-400 text-slate-950 font-extrabold'
                          : isFeatured
                          ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold'
                          : 'bg-white hover:bg-emerald-800 hover:text-white text-slate-900 border border-slate-200 shadow-2xs'
                      }`}
                    >
                      <span>{isSelected ? 'Selected Tier' : 'Select Tier & Fill Form'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <Link
                      to={`/register?category=${cat.id}#registration-form`}
                      className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                        isFeatured
                          ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold'
                          : 'bg-white hover:bg-emerald-800 hover:text-white text-slate-900 border border-slate-200 shadow-2xs'
                      }`}
                    >
                      <span>Select &amp; Register</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Payment Channels Section */}
        <div id="payment" className="bg-slate-50 rounded-2xl border border-slate-200/80 p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-6">
            <CreditCard className="w-5 h-5 text-emerald-800" />
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              Official Payment Instructions
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Channel 1: Bank Transfer */}
            <div className="lg:col-span-6 bg-white rounded-xl p-5 sm:p-6 border border-slate-200 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-emerald-700" />
                  <span className="font-bold text-sm text-slate-900">Bank Transfer / Cash Deposit</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-semibold">
                  Official Account
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Bank Name</span>
                  <span className="font-bold text-slate-900">{CONFERENCE_INFO.payment.bankName}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Branch</span>
                  <span className="font-semibold text-slate-800">{CONFERENCE_INFO.payment.branch}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Account Name</span>
                  <span className="font-bold text-slate-900">{CONFERENCE_INFO.payment.accountName}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Account Number</span>
                  <span className="font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                    {CONFERENCE_INFO.payment.accountNumber}
                  </span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Routing Number</span>
                  <span className="font-mono text-slate-800">{CONFERENCE_INFO.payment.routingNumber}</span>
                </div>
              </div>
            </div>

            {/* Channel 2: Mobile Banking & Bangla QR */}
            <div className="lg:col-span-6 bg-white rounded-xl p-5 sm:p-6 border border-slate-200 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <QrCode className="w-4 h-4 text-emerald-700" />
                  <span className="font-bold text-sm text-slate-900">Mobile Banking (Bangla QR)</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-semibold">
                  bKash · Nagad · Rocket
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Scan the official <strong>Bangla QR</strong> code at the department desk or transfer directly using any registered Bangladesh MFS app (bKash, Nagad, Rocket, Upay, or bank apps) to the conference account.
              </p>

              <div className="bg-slate-50 rounded-lg p-3.5 border border-slate-200/80 space-y-1.5 text-xs">
                <div className="font-semibold text-slate-800 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Proof of Payment Required:</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Please preserve the <strong>Transaction ID (TrxID)</strong> or deposit slip counterfoil. You will need to enter this ID and attach the screenshot/slip in the online registration form below.
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <a
                  href="#registration-form"
                  onClick={(e) => {
                    const formEl = document.getElementById('registration-form');
                    if (formEl) {
                      e.preventDefault();
                      formEl.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 inline-flex items-center gap-1"
                >
                  <span>Go to Registration Form</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href={`mailto:${CONFERENCE_INFO.contactEmail}`}
                  className="text-[11px] text-slate-500 hover:text-slate-800 flex items-center gap-1"
                >
                  <Mail className="w-3 h-3 text-emerald-700" />
                  <span>{CONFERENCE_INFO.contactEmail}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
