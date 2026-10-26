import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { X, Send, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';
import { businessConfig } from '../../config/businessConfig';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  propertyContext?: {
    title: string;
    slug?: string;
  };
}

interface EnquiryFormData {
  fullName: string;
  phone: string;
  email: string;
  propertyCategory: 'Residential' | 'Commercial' | 'Investment';
  preferredLocation: string;
  budget: string;
  message: string;
  agreeToContact: boolean;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  propertyContext,
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionData, setSubmissionData] = useState<EnquiryFormData | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryFormData>({
    defaultValues: {
      propertyCategory: propertyContext ? 'Residential' : 'Residential',
      preferredLocation: 'Worli / South Mumbai',
      budget: 'Above ₹ 10 Cr',
      message: propertyContext
        ? `I am interested in scheduling a private consultation regarding ${propertyContext.title}.`
        : '',
      agreeToContact: true,
    },
  });

  const onSubmit = async (data: EnquiryFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmissionData(data);
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setSubmissionData(null);
    reset();
    onClose();
  };

  const handleForwardToWhatsApp = () => {
    if (!submissionData) return;
    const text = encodeURIComponent(
      `Hello Balaji Enterprises,\n\nName: ${submissionData.fullName}\nPhone: ${submissionData.phone}\nEmail: ${submissionData.email}\nRequirement: ${submissionData.propertyCategory}\nPreferred Location: ${submissionData.preferredLocation}\nBudget: ${submissionData.budget}\nMessage: ${submissionData.message}`
    );
    window.open(`https://wa.me/${businessConfig.contact.whatsapp}?text=${text}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Real Estate Consultation Enquiry"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-lg bg-theme-surface border border-theme-border rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-8 max-h-[92vh] overflow-y-auto">
        <button
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 p-2 rounded-full border border-theme-border text-theme-muted hover:text-theme hover:bg-theme-surface-alt transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="mb-4 sm:mb-6 pr-8">
              <span className="text-[10px] sm:text-[11px] font-semibold text-theme-accent uppercase tracking-wider">
                Private Consultation
              </span>
              <h2 className="text-lg sm:text-2xl font-bold font-display text-theme mt-0.5">
                {propertyContext ? `Enquire: ${propertyContext.title}` : 'Speak with Our Advisors'}
              </h2>
              <p className="text-xs text-theme-muted mt-1">
                Personalized acquisition guidance across Mumbai.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 sm:space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-theme mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rajesh Singhania"
                  {...register('fullName', { required: 'Please enter your full name' })}
                  className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-theme-border bg-theme-surface-alt text-theme focus:outline-none focus:border-theme-accent"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-[11px] mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" /> {errors.fullName.message}
                  </p>
                )}
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-theme mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    {...register('phone', {
                      required: 'Phone number is required',
                      pattern: {
                        value: /^[0-9+() -]{8,15}$/,
                        message: 'Enter valid phone',
                      },
                    })}
                    className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-theme-border bg-theme-surface-alt text-theme focus:outline-none focus:border-theme-accent"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-[11px] mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" /> {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-theme mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="rajesh@singhania.com"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Enter valid email',
                      },
                    })}
                    className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-theme-border bg-theme-surface-alt text-theme focus:outline-none focus:border-theme-accent"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-[11px] mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" /> {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Requirement Category & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-theme mb-1">
                    Requirement
                  </label>
                  <select
                    {...register('propertyCategory')}
                    className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-theme-border bg-theme-surface-alt text-theme focus:outline-none focus:border-theme-accent cursor-pointer"
                  >
                    <option value="Residential">Residential Luxury</option>
                    <option value="Commercial">Commercial Office</option>
                    <option value="Investment">Investment Asset</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-theme mb-1">
                    Preferred Location
                  </label>
                  <select
                    {...register('preferredLocation')}
                    className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-theme-border bg-theme-surface-alt text-theme focus:outline-none focus:border-theme-accent cursor-pointer"
                  >
                    <option value="Worli / South Mumbai">Worli / Marine Drive</option>
                    <option value="Bandra / Western Suburbs">Bandra West / Khar</option>
                    <option value="BKC / Commercial">Bandra Kurla Complex</option>
                    <option value="Powai / Central Suburbs">Powai / Vikhroli</option>
                    <option value="Thane / Navi Mumbai">Thane / Navi Mumbai</option>
                  </select>
                </div>
              </div>

              {/* Budget Range */}
              <div>
                <label className="block text-xs font-semibold text-theme mb-1">
                  Budget Framework
                </label>
                <select
                  {...register('budget')}
                  className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-theme-border bg-theme-surface-alt text-theme focus:outline-none focus:border-theme-accent cursor-pointer"
                >
                  <option value="₹ 5 Cr – ₹ 10 Cr">₹ 5 Cr – ₹ 10 Cr</option>
                  <option value="₹ 10 Cr – ₹ 25 Cr">₹ 10 Cr – ₹ 25 Cr</option>
                  <option value="Above ₹ 25 Cr">Above ₹ 25 Cr (Bespoke Luxury)</option>
                  <option value="Commercial Lease: ₹ 5L – ₹ 15L / mo">Commercial Lease: ₹ 5L – ₹ 15L / mo</option>
                  <option value="Commercial Lease: Above ₹ 15L / mo">Commercial Lease: Above ₹ 15L / mo</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-theme mb-1">
                  Specific Specifications
                </label>
                <textarea
                  rows={2}
                  placeholder="Carpet area preference, timeline, or amenities..."
                  {...register('message')}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-theme-border bg-theme-surface-alt text-theme focus:outline-none focus:border-theme-accent resize-none"
                />
              </div>

              {/* Consent checkbox */}
              <div className="flex items-start gap-2 pt-0.5">
                <input
                  type="checkbox"
                  id="agreeToContact"
                  {...register('agreeToContact', { required: 'Consent is required' })}
                  className="mt-0.5 w-4 h-4 rounded text-theme-accent focus:ring-theme-accent shrink-0"
                />
                <label htmlFor="agreeToContact" className="text-[11px] text-theme-muted">
                  I agree to receive confidential property briefs from Balaji Enterprises.
                </label>
              </div>
              {errors.agreeToContact && (
                <p className="text-red-500 text-[11px]">
                  {errors.agreeToContact.message}
                </p>
              )}

              {/* Submit Buttons */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-5 rounded-xl bg-theme-primary text-white font-semibold flex items-center justify-center gap-2 hover:bg-theme-primary-hover border border-theme-accent/30 transition-all text-xs sm:text-sm disabled:opacity-50 shadow-md active:scale-[0.99]"
                >
                  <Send className="w-4 h-4 text-theme-accent" />
                  <span>{isSubmitting ? 'Recording Request...' : 'Submit Consultation Request'}</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center space-y-3">
            <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold font-display text-theme">
              Consultation Request Received
            </h3>
            <p className="text-xs text-theme-muted max-w-sm mx-auto leading-relaxed">
              Thank you, <strong className="text-theme">{submissionData?.fullName}</strong>. Your enquiry for {submissionData?.preferredLocation} has been logged.
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-2.5">
              <button
                onClick={handleForwardToWhatsApp}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-semibold text-xs hover:bg-[#20ba59] transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Connect</span>
              </button>
              <button
                onClick={handleResetAndClose}
                className="w-full sm:w-auto px-6 py-3 rounded-xl border border-theme-border bg-theme-surface-alt text-theme font-medium text-xs hover:bg-theme-surface transition-all"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
