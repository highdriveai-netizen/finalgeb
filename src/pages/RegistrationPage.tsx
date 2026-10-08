import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserCheck, CheckCircle2, AlertCircle, FileText, Printer, ArrowRight } from 'lucide-react';
import { REGISTRATION_CATEGORIES, CONFERENCE_INFO } from '../data/conferenceData';
import { RegistrationFeesSection } from '../components/RegistrationFeesSection';

interface RegistrationForm {
  fullName: string;
  email: string;
  phone: string;
  institution: string;
  designation: string;
  country: string;
  participantType: string;
  registrationCategory: string;
  paymentMethod: string;
  transactionId: string;
  dietaryRequirements: string;
  specialRequirements: string;
  message: string;
  termsAgreed: boolean;
}

export const RegistrationPage: React.FC = () => {
  const [formData, setFormData] = useState<RegistrationForm>({
    fullName: '',
    email: '',
    phone: '',
    institution: '',
    designation: '',
    country: 'Bangladesh',
    participantType: 'Student',
    registrationCategory: 'cat-students',
    paymentMethod: 'Bank Transfer (Janata Bank PLC)',
    transactionId: '',
    dietaryRequirements: 'None / Standard',
    specialRequirements: '',
    message: '',
    termsAgreed: false,
  });

  const [referenceNumber, setReferenceNumber] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get('category');
    if (cat && REGISTRATION_CATEGORIES.some((c) => c.id === cat)) {
      const mappedType =
        cat === 'cat-students'
          ? 'Student'
          : cat === 'cat-professionals'
          ? 'Academic / Researcher'
          : 'International Delegate';
      setFormData((prev) => ({
        ...prev,
        registrationCategory: cat,
        participantType: mappedType,
      }));
    }
  }, [location.search]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required.';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid institutional or personal email is required.';
    if (!formData.phone.trim()) errs.phone = 'Contact telephone or mobile number is required.';
    if (!formData.institution.trim()) errs.institution = 'Institution or organization is required.';
    if (!formData.designation.trim()) errs.designation = 'Current academic designation is required.';
    if (!formData.country.trim()) errs.country = 'Country is required.';
    if (!formData.termsAgreed) errs.termsAgreed = 'You must agree to the conference participation terms.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Generate Official Format Demo Reference
    const generatedRef = `IBC27-REG-${Math.floor(10000 + Math.random() * 90000)}`;
    setReferenceNumber(generatedRef);

    // Save to localStorage for demo persistence
    try {
      const existing = JSON.parse(localStorage.getItem('ibc2027_registrations') || '[]');
      existing.push({
        referenceNumber: generatedRef,
        ...formData,
        date: new Date().toISOString(),
      });
      localStorage.setItem('ibc2027_registrations', JSON.stringify(existing));
    } catch (e) {
      console.warn('LocalStorage save skipped', e);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="py-12 bg-white">
      {/* Banner */}
      <div className="bg-gradient-to-r from-[#044e3b] to-[#0f766e] text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-200 text-xs font-semibold uppercase tracking-wider">
            <UserCheck className="w-3.5 h-3.5 text-emerald-300" />
            <span>Delegate Registration · IBC 2027</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Register for the Conference
          </h1>
          <p className="text-emerald-100 max-w-3xl text-sm sm:text-base leading-relaxed">
            International Biotechnology Conference 2027 on “Biotechnology for sustainable development”. 13 January 2027 at the University of Chittagong.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        {/* Registration Fees & Official Payment Section */}
        <RegistrationFeesSection
          selectedCategoryId={formData.registrationCategory}
          onSelectCategory={(catId) => {
            const mappedType =
              catId === 'cat-students'
                ? 'Student'
                : catId === 'cat-professionals'
                ? 'Academic / Researcher'
                : 'International Delegate';
            setFormData((prev) => ({
              ...prev,
              registrationCategory: catId,
              participantType: mappedType,
            }));
          }}
        />

        {/* Registration Success Screen or Form */}
        {referenceNumber ? (
          <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-slate-200 p-8 shadow-lg text-center space-y-6 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-extrabold text-slate-900">
                Registration Submitted Successfully
              </h2>
              <p className="text-sm text-slate-600">
                Thank you for enrolling for the <strong>International Biotechnology Conference 2027</strong>.
              </p>
            </div>

            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 max-w-md mx-auto space-y-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                Registration Reference
              </span>
              <div className="text-2xl font-mono font-extrabold text-emerald-800 tracking-wider">
                {referenceNumber}
              </div>
              <p className="text-xs text-slate-500 pt-1">
                Please retain this reference for correspondence with the Secretariat.
              </p>
            </div>

            <div className="text-left text-xs text-slate-600 bg-emerald-50/60 p-4 rounded-lg border border-emerald-100 space-y-1.5">
              <div><strong>Registered Delegate:</strong> {formData.fullName}</div>
              <div><strong>Email:</strong> {formData.email}</div>
              <div><strong>Institution:</strong> {formData.institution}</div>
              <div><strong>Category:</strong> {formData.participantType}</div>
              {formData.transactionId && <div><strong>Transaction / TrxID:</strong> {formData.transactionId}</div>}
            </div>

            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-md hover:bg-slate-50 shadow-2xs"
              >
                <Printer className="w-4 h-4 text-slate-600" />
                <span>Print Confirmation</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setReferenceNumber(null);
                  setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    institution: '',
                    designation: '',
                    country: 'Bangladesh',
                    participantType: 'Student',
                    registrationCategory: 'cat-students',
                    paymentMethod: 'Bank Transfer (Janata Bank PLC)',
                    transactionId: '',
                    dietaryRequirements: 'None / Standard',
                    specialRequirements: '',
                    message: '',
                    termsAgreed: false,
                  });
                }}
                className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-md shadow-2xs"
              >
                <span>New Registration</span>
              </button>
            </div>
          </div>
        ) : (
          <div id="registration-form" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm max-w-4xl mx-auto">
            <div className="mb-8 pb-4 border-b border-slate-200">
              <h3 className="text-xl font-bold text-slate-900">Delegate Registration Form</h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                All fields marked with (*) are required.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="reg-name" className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="reg-name"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Dr. Sabrina Rahman / Md. Tanvir Ahmed"
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                  />
                  {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label htmlFor="reg-email" className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="reg-email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="delegate@institution.edu"
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                  />
                  {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Row 2: Phone and Country */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="reg-phone" className="block text-xs font-semibold text-slate-700 mb-1">
                    Telephone / Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="reg-phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+880 1XXXXXXXXX"
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                  />
                  {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="reg-country" className="block text-xs font-semibold text-slate-700 mb-1">
                    Country of Residence <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="reg-country"
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    placeholder="Bangladesh / Overseas"
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                  />
                  {errors.country && <p className="text-xs text-red-600 mt-1">{errors.country}</p>}
                </div>
              </div>

              {/* Row 3: Institution and Designation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="reg-inst" className="block text-xs font-semibold text-slate-700 mb-1">
                    Institution / University / Company <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="reg-inst"
                    required
                    value={formData.institution}
                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                    placeholder="University of Chittagong / Other Institution"
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                  />
                  {errors.institution && <p className="text-xs text-red-600 mt-1">{errors.institution}</p>}
                </div>

                <div>
                  <label htmlFor="reg-desig" className="block text-xs font-semibold text-slate-700 mb-1">
                    Designation / Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="reg-desig"
                    required
                    value={formData.designation}
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                    placeholder="Professor / Student / Researcher"
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                  />
                  {errors.designation && <p className="text-xs text-red-600 mt-1">{errors.designation}</p>}
                </div>
              </div>

              {/* Row 4: Participant Type & Payment */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="reg-part-type" className="block text-xs font-semibold text-slate-700 mb-1">
                    Participant Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="reg-part-type"
                    value={formData.participantType}
                    onChange={(e) => setFormData({ ...formData, participantType: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                  >
                    <option value="Student">Student (Tk 1000)</option>
                    <option value="Professional / Researcher">Professionals &amp; Researchers (Tk 2000)</option>
                    <option value="International Participant">International Participant ($50 / Tk 5000)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="reg-trx" className="block text-xs font-semibold text-slate-700 mb-1">
                    Transaction ID / Deposit Slip No. (Optional)
                  </label>
                  <input
                    type="text"
                    id="reg-trx"
                    value={formData.transactionId}
                    onChange={(e) => setFormData({ ...formData, transactionId: e.target.value })}
                    placeholder="e.g. TrxID / Deposit Scroll Number"
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white font-mono"
                  />
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.termsAgreed}
                    onChange={(e) => setFormData({ ...formData, termsAgreed: e.target.checked })}
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                  />
                  <span className="text-xs text-slate-600 leading-relaxed">
                    I agree to the conference participation terms, academic code of conduct, and privacy policy for the International Biotechnology Conference 2027.
                  </span>
                </label>
                {errors.termsAgreed && <p className="text-xs text-red-600 mt-1">{errors.termsAgreed}</p>}
              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-400">
                  Instant reference number will be generated.
                </span>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-slate-900 hover:bg-emerald-800 active:bg-emerald-950 text-white font-bold text-xs sm:text-sm rounded-lg shadow-md transition-colors"
                >
                  COMPLETE REGISTRATION
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
