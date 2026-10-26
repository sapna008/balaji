import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  MapPin,
  Maximize2,
  Bed,
  Bath,
  Car,
  Compass,
  Calendar,
  Layers,
  Share2,
  Check,
  MessageSquare,
  ArrowRight,
  Sparkles,
  AlertCircle,
  CheckCircle2,
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import { propertyService } from '../../services/propertyService';
import type { Property } from '../../types/property';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { PropertyCard } from '../../components/property/PropertyCard';
import { businessConfig } from '../../config/businessConfig';
import { SEO } from '../../components/common/SEO';

interface DirectEnquiryForm {
  fullName: string;
  phone: string;
  email: string;
  preferredTiming: string;
  comments: string;
}

export const PropertyDetailsPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const [property, setProperty] = useState<Property | null>(null);
  const [similarProperties, setSimilarProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [copiedShare, setCopiedShare] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<DirectEnquiryForm>();

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    setActiveImageIndex(0);
    setFormSubmitted(false);

    propertyService.getPropertyBySlug(slug).then((prop) => {
      if (!prop) {
        setLoading(false);
        return;
      }
      setProperty(prop);
      propertyService
        .getSimilarProperties(prop.slug, prop.category, 3)
        .then((sim) => setSimilarProperties(sim));
      setLoading(false);
    });
  }, [slug]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2500);
    }
  };

  const handleDirectSubmit = async (_data: DirectEnquiryForm) => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    setFormSubmitted(true);
    reset();
  };

  const handleWhatsAppEnquiry = () => {
    if (!property) return;
    const msg = encodeURIComponent(
      `Hello Balaji Enterprises,\n\nI am interested in scheduling a private discussion regarding:\n"${property.title}" (${property.priceDisplay}, ${property.location}).\n\nPlease share the detailed brochure and viewing availability.`
    );
    window.open(`https://wa.me/${businessConfig.contact.whatsapp}?text=${msg}`, '_blank');
  };

  if (loading) {
    return (
      <div className="min-h-screen py-20 text-center">
        <div className="w-12 h-12 border-4 border-theme-accent border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-xs text-theme-muted">Loading property details...</p>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center py-20 px-4 text-center">
        <h2 className="text-2xl font-bold font-display text-theme mb-2">
          Property Listing Not Found
        </h2>
        <p className="text-xs text-theme-muted mb-6">
          The requested listing may have expired or been updated in our private records.
        </p>
        <Link
          to="/properties"
          className="px-6 py-2.5 rounded-full bg-theme-primary text-white text-xs font-semibold"
        >
          Return to All Listings
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-theme-bg text-theme transition-colors">
      <SEO
        title={property.title}
        description={property.description.slice(0, 155)}
        canonicalPath={`/properties/${property.slug}`}
      />

      <Breadcrumbs
        items={[
          { label: 'Properties', path: '/properties' },
          { label: property.title },
        ]}
      />

      {/* Main Top Header */}
      <section className="py-4 sm:py-6 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-4 sm:pb-6 border-b border-theme-border">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] font-semibold uppercase bg-theme-primary text-white tracking-wide">
                {property.category} • {property.transactionType}
              </span>
              <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] font-semibold uppercase bg-theme-accent text-white">
                {property.availability}
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/30">
                Illustrative Listing
              </span>
            </div>

            <h1 className="text-xl sm:text-3xl md:text-4xl font-bold font-display text-theme leading-tight">
              {property.title}
            </h1>

            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-theme-muted">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-theme-accent shrink-0" />
              <span>{property.location}</span>
            </div>
          </div>

          {/* Pricing & Share Action */}
          <div className="flex sm:flex-col sm:items-end justify-between items-center gap-3 pt-2 sm:pt-0">
            <div>
              <p className="text-xl sm:text-3xl font-bold font-display text-theme">
                {property.priceDisplay}
              </p>
              {property.pricePerSqFt && (
                <p className="text-[11px] sm:text-xs text-theme-muted">
                  {property.pricePerSqFt}
                </p>
              )}
            </div>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-theme-border bg-theme-surface hover:border-theme-accent text-xs font-medium text-theme transition-colors shadow-sm"
            >
              {copiedShare ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-500 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-theme-muted" />
                  <span>Share</span>
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Main Gallery Section */}
      <section className="px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-8 sm:mb-10">
        <div className="space-y-2.5 sm:space-y-3">
          {/* Active Featured Image */}
          <div className="relative aspect-[16/10] sm:aspect-[21/9] rounded-2xl sm:rounded-3xl overflow-hidden bg-theme-surface-alt border border-theme-border shadow-elevated">
            <img
              src={property.images[activeImageIndex] || property.images[0]}
              alt={`${property.title} - View ${activeImageIndex + 1}`}
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Thumbnails row */}
          {property.images.length > 1 && (
            <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-none">
              {property.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-20 sm:w-32 aspect-[16/10] rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                    activeImageIndex === idx
                      ? 'border-theme-accent scale-[1.02] shadow-md'
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          {/* Mobile Fast Action CTA Bar */}
          <div className="grid grid-cols-2 gap-2.5 mt-3 sm:hidden">
            <button
              onClick={handleWhatsAppEnquiry}
              className="py-3 px-3 rounded-xl bg-[#25D366] text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Enquiry</span>
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('enquiry-form-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="py-3 px-3 rounded-xl bg-theme-primary text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all"
            >
              <Sparkles className="w-4 h-4 text-theme-accent" />
              <span>Schedule Viewing</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Details Grid: Left Content + Right Form */}
      <section className="px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-16 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10">
          {/* LEFT COLUMN: SPECS, DESCRIPTION, AMENITIES */}
          <div className="lg:col-span-8 space-y-8 sm:space-y-10">
            {/* Key Specifications Grid */}
            <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-theme-surface border border-theme-border shadow-subtle">
              <h2 className="text-xs sm:text-sm font-bold font-display uppercase tracking-wider text-theme-accent mb-3 sm:mb-4">
                Property Specifications
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 text-xs">
                <div className="p-3 rounded-xl sm:rounded-2xl bg-theme-surface-alt border border-theme-border/70">
                  <div className="flex items-center gap-1.5 text-theme-muted mb-0.5 text-[10px] sm:text-[11px]">
                    <Maximize2 className="w-3.5 h-3.5 text-theme-accent" />
                    <span>Carpet Area</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-theme">
                    {property.carpetAreaSqFt.toLocaleString()} sq.ft
                  </p>
                </div>

                {property.bedrooms && (
                  <div className="p-3.5 rounded-2xl bg-theme-surface-alt border border-theme-border/70">
                    <div className="flex items-center gap-1.5 text-theme-muted mb-1 text-[11px]">
                      <Bed className="w-3.5 h-3.5 text-theme-accent" />
                      <span>Bedrooms</span>
                    </div>
                    <p className="text-sm font-bold text-theme">
                      {property.bedrooms} BHK
                    </p>
                  </div>
                )}

                {property.bathrooms && (
                  <div className="p-3.5 rounded-2xl bg-theme-surface-alt border border-theme-border/70">
                    <div className="flex items-center gap-1.5 text-theme-muted mb-1 text-[11px]">
                      <Bath className="w-3.5 h-3.5 text-theme-accent" />
                      <span>Bathrooms</span>
                    </div>
                    <p className="text-sm font-bold text-theme">
                      {property.bathrooms} Baths
                    </p>
                  </div>
                )}

                {property.carParking && (
                  <div className="p-3.5 rounded-2xl bg-theme-surface-alt border border-theme-border/70">
                    <div className="flex items-center gap-1.5 text-theme-muted mb-1 text-[11px]">
                      <Car className="w-3.5 h-3.5 text-theme-accent" />
                      <span>Car Parking</span>
                    </div>
                    <p className="text-sm font-bold text-theme">
                      {property.carParking} Covered Bays
                    </p>
                  </div>
                )}

                {property.floor && (
                  <div className="p-3.5 rounded-2xl bg-theme-surface-alt border border-theme-border/70">
                    <div className="flex items-center gap-1.5 text-theme-muted mb-1 text-[11px]">
                      <Layers className="w-3.5 h-3.5 text-theme-accent" />
                      <span>Floor Tier</span>
                    </div>
                    <p className="text-sm font-bold text-theme truncate" title={property.floor}>
                      {property.floor}
                    </p>
                  </div>
                )}

                {property.facing && (
                  <div className="p-3.5 rounded-2xl bg-theme-surface-alt border border-theme-border/70">
                    <div className="flex items-center gap-1.5 text-theme-muted mb-1 text-[11px]">
                      <Compass className="w-3.5 h-3.5 text-theme-accent" />
                      <span>Orientation</span>
                    </div>
                    <p className="text-sm font-bold text-theme truncate" title={property.facing}>
                      {property.facing}
                    </p>
                  </div>
                )}

                {property.possession && (
                  <div className="p-3.5 rounded-2xl bg-theme-surface-alt border border-theme-border/70">
                    <div className="flex items-center gap-1.5 text-theme-muted mb-1 text-[11px]">
                      <Calendar className="w-3.5 h-3.5 text-theme-accent" />
                      <span>Possession</span>
                    </div>
                    <p className="text-sm font-bold text-theme">
                      {property.possession}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Comprehensive Description */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold font-display text-theme">
                Architectural Overview
              </h2>
              <p className="text-xs sm:text-sm text-theme-muted leading-relaxed whitespace-pre-line">
                {property.description}
              </p>
            </div>

            {/* Curated Highlights & Luxury Finishes */}
            {property.features && property.features.length > 0 && (
              <div className="p-6 rounded-3xl bg-theme-surface border border-theme-border shadow-subtle space-y-4">
                <h3 className="text-base font-bold font-display text-theme flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-theme-accent" />
                  Key Residence Features
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-theme-muted">
                  {property.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-theme-accent mt-1.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Building & Community Amenities */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold font-display text-theme">
                Amenities & Infrastructure
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {property.amenities.map((amenity, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-theme-surface-alt border border-theme-border/60 flex items-center gap-3 text-xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-theme-accent shrink-0" />
                    <span className="font-medium text-theme">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Regulatory and sample disclaimer banner */}
            <div className="p-5 rounded-2xl bg-theme-surface-alt border border-theme-border text-xs text-theme-muted space-y-2">
              <div className="flex items-center gap-2 font-bold text-theme">
                <AlertCircle className="w-4 h-4 text-theme-accent shrink-0" />
                <span>Verification & Title Note</span>
              </div>
              <p className="leading-relaxed">
                This listing is presented as demonstration content for the Balaji Enterprises real estate platform. In live production engagements, our advisory desk conducts 30-year search reports, encumbrance checks, and MahaRERA project reconciliation prior to client contracting.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: STICKY ENQUIRY BOX */}
          <aside id="enquiry-form-section" className="lg:col-span-4 scroll-mt-20">
            <div className="p-6 rounded-3xl bg-theme-surface border border-theme-border shadow-elevated space-y-6 sticky top-28">
              <div>
                <span className="text-[11px] font-semibold text-theme-accent uppercase tracking-wider">
                  Direct Mandate Enquiry
                </span>
                <h3 className="text-xl font-bold font-display text-theme mt-1">
                  Schedule a Private Viewing
                </h3>
                <p className="text-xs text-theme-muted mt-1">
                  Connect with our dedicated consultant for this specific property.
                </p>
              </div>

              {/* Direct WhatsApp Action Button */}
              <button
                onClick={handleWhatsAppEnquiry}
                className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] text-white font-semibold text-xs flex items-center justify-center gap-2 hover:bg-[#20ba59] transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enquire via WhatsApp Instantly</span>
              </button>

              <div className="relative flex items-center justify-center">
                <div className="border-t border-theme-border w-full" />
                <span className="bg-theme-surface px-3 text-[11px] text-theme-muted uppercase tracking-widest shrink-0">
                  Or Send Request
                </span>
              </div>

              {!formSubmitted ? (
                <form onSubmit={handleSubmit(handleDirectSubmit)} className="space-y-3 text-xs">
                  <div>
                    <label className="block font-medium text-theme mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. S. K. Mehta"
                      {...register('fullName', { required: 'Name is required' })}
                      className="w-full px-3 py-2.5 rounded-xl border border-theme-border bg-theme-surface-alt text-xs text-theme focus:outline-none focus:border-theme-accent"
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-[10px] mt-0.5">{errors.fullName.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block font-medium text-theme mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      {...register('phone', { required: 'Phone number is required' })}
                      className="w-full px-3 py-2.5 rounded-xl border border-theme-border bg-theme-surface-alt text-xs text-theme focus:outline-none focus:border-theme-accent"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-[10px] mt-0.5">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block font-medium text-theme mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="mehta@example.com"
                      {...register('email', { required: 'Email is required' })}
                      className="w-full px-3 py-2.5 rounded-xl border border-theme-border bg-theme-surface-alt text-xs text-theme focus:outline-none focus:border-theme-accent"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-[10px] mt-0.5">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block font-medium text-theme mb-1">
                      Preferred Viewing Time
                    </label>
                    <select
                      {...register('preferredTiming')}
                      className="w-full px-3 py-2.5 rounded-xl border border-theme-border bg-theme-surface-alt text-xs text-theme focus:outline-none focus:border-theme-accent"
                    >
                      <option value="Weekday Morning">Weekday Morning (10 AM - 1 PM)</option>
                      <option value="Weekday Afternoon">Weekday Afternoon (2 PM - 5 PM)</option>
                      <option value="Weekend Priority">Weekend (By Appointment)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl bg-theme-primary text-white font-semibold text-xs hover:bg-theme-primary-hover border border-theme-accent/40 transition-all shadow-sm disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Request Private Viewing'}
                  </button>
                </form>
              ) : (
                <div className="py-6 text-center space-y-3 bg-theme-surface-alt rounded-2xl p-4 border border-theme-border">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                  <h4 className="text-sm font-bold font-display text-theme">
                    Viewing Request Submitted
                  </h4>
                  <p className="text-xs text-theme-muted">
                    Our property consultant will contact you promptly to confirm schedule and access credentials.
                  </p>
                </div>
              )}
            </div>
          </aside>
        </div>
      </section>

      {/* SIMILAR PROPERTIES SECTION */}
      {similarProperties.length > 0 && (
        <section className="py-16 bg-theme-surface-alt border-t border-theme-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-semibold text-theme-accent uppercase tracking-widest">
                  Related Portfolios
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-theme mt-1">
                  Similar Properties in Mumbai
                </h3>
              </div>
              <Link
                to="/properties"
                className="text-xs font-semibold text-theme-accent hover:underline flex items-center gap-1"
              >
                <span>View All</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similarProperties.map((simProp) => (
                <PropertyCard key={simProp.id} property={simProp} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
