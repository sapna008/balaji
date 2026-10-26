import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { businessConfig } from '../../config/businessConfig';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SEO } from '../../components/common/SEO';

interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  category: 'Residential' | 'Commercial' | 'General';
  preferredLocation: string;
  budget: string;
  message: string;
  consent: boolean;
}

export const ContactPage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submission, setSubmission] = useState<ContactFormData | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    defaultValues: {
      category: 'Residential',
      preferredLocation: 'Worli / South Mumbai',
      budget: '₹ 10 Cr – ₹ 25 Cr',
      consent: true,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmission(data);
    setIsSubmitted(true);
    reset();
  };

  const handleWhatsAppForward = () => {
    if (!submission) return;
    const msg = encodeURIComponent(
      `Hello Balaji Enterprises,\n\nName: ${submission.fullName}\nPhone: ${submission.phone}\nEmail: ${submission.email}\nInquiry Type: ${submission.category}\nPreferred Location: ${submission.preferredLocation}\nBudget Framework: ${submission.budget}\nMessage: ${submission.message}`
    );
    window.open(`https://wa.me/${businessConfig.contact.whatsapp}?text=${msg}`, '_blank');
  };

  return (
    <div className="bg-theme-bg text-theme transition-colors min-h-screen w-full overflow-x-hidden">
      <SEO
        title="Contact Our Property Advisory Desk | Balaji Enterprises Mumbai"
        description="Connect with Balaji Enterprises real estate consultants in Mumbai for private residential viewings, commercial leasing, and property investment guidance."
        canonicalPath="/contact"
      />

      <Breadcrumbs items={[{ label: 'Contact Us' }]} />

      {/* Header Banner */}
      <section className="py-6 sm:py-14 bg-theme-surface-alt border-b border-theme-border px-3 sm:px-6">
        <div className="max-w-7xl mx-auto text-center max-w-3xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-theme-surface border border-theme-accent/30 text-[10px] sm:text-xs font-semibold text-theme-accent uppercase tracking-wider mb-2.5 sm:mb-4">
            <span>Consultancy Desk</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold font-display text-theme mb-2 sm:mb-3 leading-tight">
            Connect with Our Mumbai Advisors
          </h1>

          <p className="text-xs sm:text-sm text-theme-muted leading-relaxed font-sans px-2">
            Whether seeking an off-market luxury residence, securing an executive office floor in BKC, or evaluating high-yield property assets, our advisory team is at your disposal.
          </p>

          {/* 1-Tap Mobile Fast Action Buttons */}
          <div className="grid grid-cols-2 gap-2.5 mt-5 sm:hidden max-w-sm mx-auto">
            <a
              href={`tel:${businessConfig.contact.phone}`}
              className="py-2.5 px-3 rounded-xl bg-theme-primary text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-theme-accent" />
              <span>Call Desk</span>
            </a>
            <a
              href={businessConfig.socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-3 rounded-xl bg-[#25D366] text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Grid: Form First on Mobile (order-1), Details Second (order-2) */}
      <section className="py-6 sm:py-16 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
          {/* RIGHT ON DESKTOP, FIRST ON MOBILE: INTERACTIVE VALIDATED CONTACT FORM */}
          <div className="order-1 lg:order-2 lg:col-span-7">
            <div className="p-4 sm:p-10 rounded-2xl sm:rounded-3xl bg-theme-surface border border-theme-border shadow-elevated">
              <div className="mb-5 sm:mb-8">
                <span className="text-[10px] sm:text-xs font-semibold text-theme-accent uppercase tracking-widest">
                  Consultation Request
                </span>
                <h2 className="text-xl sm:text-3xl font-bold font-display text-theme mt-1">
                  Send Your Property Requirement
                </h2>
                <p className="text-xs text-theme-muted mt-1 leading-relaxed">
                  Fill out the parameters below. Our senior advisory desk will analyze your criteria and prepare a curated response.
                </p>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-theme mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Anand Mahindra"
                      {...register('fullName', { required: 'Please enter your full name' })}
                      className="w-full px-4 py-3 rounded-xl border border-theme-border bg-theme-surface-alt text-theme focus:outline-none focus:border-theme-accent transition-colors"
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-[11px] mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" /> {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
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
                            message: 'Please enter a valid phone number',
                          },
                        })}
                        className="w-full px-4 py-3 rounded-xl border border-theme-border bg-theme-surface-alt text-theme focus:outline-none focus:border-theme-accent transition-colors"
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
                        placeholder="anand@example.com"
                        {...register('email', {
                          required: 'Email address is required',
                          pattern: {
                            value: /^\S+@\S+$/i,
                            message: 'Please enter a valid email',
                          },
                        })}
                        className="w-full px-4 py-3 rounded-xl border border-theme-border bg-theme-surface-alt text-theme focus:outline-none focus:border-theme-accent transition-colors"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-[11px] mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" /> {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Category & Preferred Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-theme mb-1">
                        Property Category
                      </label>
                      <select
                        {...register('category')}
                        className="w-full px-4 py-3 rounded-xl border border-theme-border bg-theme-surface-alt text-theme focus:outline-none focus:border-theme-accent transition-colors"
                      >
                        <option value="Residential">Residential Luxury Homes</option>
                        <option value="Commercial">Commercial Office / IT Parks</option>
                        <option value="General">General Consultancy / Land</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-theme mb-1">
                        Preferred Mumbai Location
                      </label>
                      <select
                        {...register('preferredLocation')}
                        className="w-full px-4 py-3 rounded-xl border border-theme-border bg-theme-surface-alt text-theme focus:outline-none focus:border-theme-accent transition-colors"
                      >
                        <option value="Worli / South Mumbai">Worli / Marine Drive / Malabar Hill</option>
                        <option value="Bandra / Khar">Bandra West / Khar / Juhu</option>
                        <option value="BKC / Lower Parel">Bandra Kurla Complex / Lower Parel</option>
                        <option value="Powai / Vikhroli">Powai / Vikhroli</option>
                        <option value="Andheri / Western Suburbs">Andheri / Goregaon</option>
                        <option value="Thane / Navi Mumbai">Thane / Navi Mumbai</option>
                      </select>
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-xs font-semibold text-theme mb-1">
                      Budget Framework
                    </label>
                    <select
                      {...register('budget')}
                      className="w-full px-4 py-3 rounded-xl border border-theme-border bg-theme-surface-alt text-theme focus:outline-none focus:border-theme-accent transition-colors"
                    >
                      <option value="₹ 5 Cr – ₹ 10 Cr">₹ 5 Cr – ₹ 10 Cr</option>
                      <option value="₹ 10 Cr – ₹ 25 Cr">₹ 10 Cr – ₹ 25 Cr</option>
                      <option value="₹ 25 Cr – ₹ 50 Cr+">₹ 25 Cr – ₹ 50 Cr+ (Ultra HNI Luxury)</option>
                      <option value="Commercial Lease: ₹ 5L – ₹ 15L / mo">Commercial Lease: ₹ 5L – ₹ 15L / mo</option>
                      <option value="Commercial Lease: Above ₹ 15L / mo">Commercial Lease: Above ₹ 15L / mo</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-theme mb-1">
                      Detailed Requirement or Timeline
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share your carpet area requirements, family preferences, or corporate lease timelines..."
                      {...register('message')}
                      className="w-full px-4 py-3 rounded-xl border border-theme-border bg-theme-surface-alt text-theme focus:outline-none focus:border-theme-accent resize-none transition-colors"
                    />
                  </div>

                  {/* Consent Checkbox */}
                  <div className="flex items-start gap-2.5 pt-1">
                    <input
                      type="checkbox"
                      id="consent"
                      {...register('consent', { required: 'Consent is required' })}
                      className="mt-1 w-4 h-4 rounded text-theme-accent focus:ring-theme-accent shrink-0"
                    />
                    <label htmlFor="consent" className="text-[11px] text-theme-muted leading-relaxed">
                      I consent to Balaji Enterprises reaching out to me via phone, email, or WhatsApp with relevant property details.
                    </label>
                  </div>
                  {errors.consent && (
                    <p className="text-red-500 text-[11px]">{errors.consent.message}</p>
                  )}

                  {/* Submission Notice */}
                  <div className="p-3 rounded-xl bg-theme-surface-alt border border-theme-border text-[11px] text-theme-muted flex items-start gap-2">
                    <AlertCircle className="w-3.5 h-3.5 text-theme-accent shrink-0 mt-0.5" />
                    <span>
                      <strong>Submission Note:</strong> Requests are logged locally and can also be forwarded directly to WhatsApp below.
                    </span>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 sm:py-4 px-6 rounded-xl bg-theme-primary text-white font-semibold text-xs sm:text-sm hover:bg-theme-primary-hover border border-theme-accent/40 transition-all flex items-center justify-center gap-2 shadow-md disabled:opacity-50 active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4 text-theme-accent" />
                    <span>{isSubmitting ? 'Recording Inquiry...' : 'Submit Inquiry Request'}</span>
                  </button>
                </form>
              ) : (
                /* Success Message */
                <div className="py-8 sm:py-12 text-center space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-theme">
                    Inquiry Received
                  </h3>
                  <p className="text-xs sm:text-sm text-theme-muted max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-theme">{submission?.fullName}</strong>. We have logged your request for {submission?.preferredLocation} ({submission?.category}).
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-2.5">
                    <button
                      onClick={handleWhatsAppForward}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] text-white font-semibold text-xs hover:bg-[#20ba59] transition-all shadow-md"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Forward to WhatsApp Desk</span>
                    </button>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-theme-border text-theme text-xs font-medium hover:bg-theme-surface-alt transition-colors"
                    >
                      Submit Another Requirement
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* LEFT ON DESKTOP, SECOND ON MOBILE: CONTACT DETAILS & CHANNELS */}
          <div className="order-2 lg:order-1 lg:col-span-5 space-y-6 sm:space-y-8">
            <div>
              <span className="text-[10px] sm:text-xs font-semibold text-theme-accent uppercase tracking-widest">
                Direct Communication
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-display text-theme mt-1">
                Advisory Office & Channels
              </h2>
              <p className="text-xs text-theme-muted mt-1 leading-relaxed">
                Prompt, professional, and discreet communication for all high-value property mandates.
              </p>
            </div>

            {/* Contact Cards (Responsive 2-col on tablet/mobile for fast tap, full on desktop) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
              {/* Phone Desk */}
              <div className="p-4 sm:p-5 rounded-2xl bg-theme-surface border border-theme-border flex items-start gap-3.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-theme-surface-alt border border-theme-border flex items-center justify-center text-theme-accent shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[11px] font-bold uppercase tracking-wider text-theme">
                    Telephone Advisory
                  </h3>
                  <a
                    href={`tel:${businessConfig.contact.phone}`}
                    className="text-xs sm:text-sm font-semibold text-theme hover:text-theme-accent transition-colors block mt-0.5 truncate"
                  >
                    {businessConfig.contact.phoneDisplay.split('(')[0]}
                  </a>
                  <p className="text-[10px] text-theme-muted mt-0.5">
                    Direct consultancy desk
                  </p>
                </div>
              </div>

              {/* WhatsApp Priority */}
              <div className="p-4 sm:p-5 rounded-2xl bg-theme-surface border border-theme-border flex items-start gap-3.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] shrink-0 mt-0.5">
                  <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[11px] font-bold uppercase tracking-wider text-theme">
                    WhatsApp Advisory
                  </h3>
                  <a
                    href={businessConfig.socialLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-semibold text-[#1fa851] hover:underline block mt-0.5 truncate"
                  >
                    {businessConfig.contact.whatsappDisplay.split('(')[0]}
                  </a>
                  <p className="text-[10px] text-theme-muted mt-0.5">
                    Instant chat & brochure sharing
                  </p>
                </div>
              </div>

              {/* Email Desk */}
              <div className="p-4 sm:p-5 rounded-2xl bg-theme-surface border border-theme-border flex items-start gap-3.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-theme-surface-alt border border-theme-border flex items-center justify-center text-theme-accent shrink-0 mt-0.5">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[11px] font-bold uppercase tracking-wider text-theme">
                    Email Desk
                  </h3>
                  <a
                    href={`mailto:${businessConfig.contact.email}`}
                    className="text-xs sm:text-sm font-semibold text-theme hover:text-theme-accent transition-colors block mt-0.5 truncate"
                  >
                    {businessConfig.contact.email}
                  </a>
                  <p className="text-[10px] text-theme-muted mt-0.5">
                    Formal briefs & RFP submissions
                  </p>
                </div>
              </div>

              {/* Office Address */}
              <div className="p-4 sm:p-5 rounded-2xl bg-theme-surface border border-theme-border flex items-start gap-3.5 sm:col-span-2 lg:col-span-1">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-theme-surface-alt border border-theme-border flex items-center justify-center text-theme-accent shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="text-[11px] font-bold uppercase tracking-wider text-theme">
                    Consultancy Office
                  </h3>
                  <p className="text-xs text-theme mt-1 leading-relaxed">
                    {businessConfig.office.addressLine1}
                    <br />
                    {businessConfig.office.addressLine2}, {businessConfig.office.city} – {businessConfig.office.pincode}
                  </p>
                  <p className="text-[10px] text-amber-600 dark:text-amber-400 mt-0.5">
                    * Physical suite number placeholder pending final lease publication.
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="p-4 sm:p-5 rounded-2xl bg-theme-surface border border-theme-border flex items-start gap-3.5 sm:col-span-2 lg:col-span-1">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-theme-surface-alt border border-theme-border flex items-center justify-center text-theme-accent shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="text-[11px] font-bold uppercase tracking-wider text-theme">
                    Operating Hours
                  </h3>
                  <p className="text-xs text-theme mt-0.5">
                    {businessConfig.businessHours.days}: {businessConfig.businessHours.hours}
                  </p>
                  <p className="text-[10px] text-theme-muted mt-0.5">
                    Sunday: {businessConfig.businessHours.sunday}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MAP SECTION */}
        <div className="mt-12 sm:mt-20 rounded-2xl sm:rounded-3xl overflow-hidden border border-theme-border shadow-elevated bg-theme-surface p-1.5 sm:p-2">
          <div className="p-3 sm:p-4 flex items-center justify-between text-xs border-b border-theme-border">
            <div className="flex items-center gap-1.5 font-semibold text-theme">
              <MapPin className="w-3.5 h-3.5 text-theme-accent shrink-0" />
              <span className="truncate">Location Map — BKC Axis, Mumbai</span>
            </div>
            <span className="text-[10px] text-theme-muted hidden sm:inline">
              Interactive Google Maps Embed
            </span>
          </div>
          <div className="aspect-[16/9] sm:aspect-[24/8] w-full rounded-xl sm:rounded-2xl overflow-hidden">
            <iframe
              src={businessConfig.office.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Balaji Enterprises Advisory Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
