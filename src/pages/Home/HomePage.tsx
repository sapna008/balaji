import React, { useEffect, useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Building,
  Building2,
  ShieldCheck,
  Compass,
  Users,
  Award,
  Clock,
  ChevronRight,
  TrendingUp,
  CheckCircle2,
} from 'lucide-react';
import { PropertySearchFilter } from '../../components/property/PropertySearchFilter';
import { PropertyCard } from '../../components/property/PropertyCard';
import { propertyService } from '../../services/propertyService';
import type { Property } from '../../types/property';
import { MUMBAI_LOCATIONS_DATA } from '../../data/locations';
import { BLOG_ARTICLES_DATA } from '../../data/blogArticles';
import { SERVICES_DATA } from '../../data/services';
import { businessConfig } from '../../config/businessConfig';
import { SEO } from '../../components/common/SEO';

export const HomePage: React.FC = () => {
  const { openEnquiry } = useOutletContext<{ openEnquiry: () => void }>();
  const [featuredProperties, setFeaturedProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    propertyService.getFeaturedProperties().then((data) => {
      setFeaturedProperties(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      <SEO
        title="Real Estate. Redefined."
        description="Balaji Enterprises — Premier residential and commercial real estate consultancy in Mumbai. Worli, Bandra, BKC, Marine Drive, and prime Mumbai micro-markets."
        canonicalPath="/"
      />

      {/* C. HERO SECTION */}
      <section className="relative min-h-0 sm:min-h-[85vh] flex items-center justify-center overflow-hidden bg-theme-secondary py-8 sm:py-20 lg:py-28 px-3 sm:px-6">
        {/* Background Hero Image with Atmospheric Transparent Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/hero/mumbai-skyline-golden.jpg"
            alt="Mumbai Coastal Skyline at Sunset - Balaji Enterprises Real Estate"
            className="w-full h-full object-cover object-center scale-100 sm:scale-105 brightness-100 contrast-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-black/10" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full text-center text-white">
          {/* Auspicious Devotional Subtitle Tag (Desktop & Tablet only to avoid mobile duplication) */}
          <div className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-[#C9A96E]/50 mb-4 sm:mb-6 shadow-sm">
            <span className="font-devanagari text-xs sm:text-sm text-[#F7E7C4] font-medium tracking-wide">
              ॥ ॐ श्री वेंकटेश्वराय नमः ॥
            </span>
            <span className="text-white/40">•</span>
            <span className="text-xs text-white/90 font-sans font-medium">
              Mumbai Real Estate Advisory
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight text-white mb-2 sm:mb-4 leading-tight drop-shadow-lg">
            Real Estate. <span className="gold-gradient-text drop-shadow-md">Redefined.</span>
          </h1>

          {/* Supporting Headline */}
          <p className="text-xs sm:text-xl md:text-2xl font-light text-[#EFEBE4] mb-2.5 sm:mb-4 max-w-3xl mx-auto font-editorial italic tracking-wide px-2">
            "{businessConfig.promise}"
          </p>

          {/* Hero Description */}
          <p className="text-xs sm:text-sm md:text-base text-white/85 max-w-2xl mx-auto mb-5 sm:mb-8 leading-relaxed font-sans px-2 line-clamp-3 sm:line-clamp-none">
            Discover exceptional residential and commercial property opportunities across Mumbai with personalized guidance, transparent communication, and professional consultancy.
          </p>

          {/* Two Strong CTAs (Side by side on mobile for compact 1-tap action) */}
          <div className="grid grid-cols-2 gap-2.5 sm:flex sm:flex-row sm:items-center sm:justify-center sm:gap-4 mb-6 sm:mb-12 px-1 sm:px-0">
            <Link
              to="/properties"
              className="py-3 px-3 sm:px-7 rounded-full bg-gradient-to-r from-[#C9A96E] to-[#B8955A] text-[#101D35] font-semibold text-xs sm:text-sm hover:from-[#DFCA9B] hover:to-[#C9A96E] transition-all shadow-xl shadow-[#C9A96E]/20 flex items-center justify-center gap-1.5 sm:gap-2 group"
            >
              <span className="truncate">Explore Properties</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform shrink-0" />
            </Link>

            <button
              onClick={openEnquiry}
              className="py-3 px-3 sm:px-7 rounded-full bg-white/10 backdrop-blur-md text-white font-semibold text-xs sm:text-sm hover:bg-white/20 border border-white/20 transition-all flex items-center justify-center gap-1.5 sm:gap-2"
            >
              <span className="truncate">Speak to Experts</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#C9A96E] shrink-0" />
            </button>
          </div>

          {/* D. FUNCTIONAL PROPERTY SEARCH INTERFACE */}
          <div className="w-full text-left">
            <PropertySearchFilter />
          </div>
        </div>
      </section>

      {/* E. PROPERTY CATEGORY HIGHLIGHTS (Responsive 2-column grid on mobile) */}
      <section className="py-8 sm:py-16 lg:py-20 bg-theme-surface-alt transition-colors px-3 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 px-2">
            <span className="text-[10px] sm:text-xs font-semibold text-theme-accent uppercase tracking-widest">
              Specialized Portfolios
            </span>
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold font-display text-theme mt-1.5">
              Curated Property Portfolios
            </h2>
            <p className="text-xs sm:text-sm text-theme-muted mt-1.5">
              Explore bespoke real estate solutions categorized for homeowners, corporate leaders, and commercial investors.
            </p>
          </div>

          {/* 2x2 grid on mobile for compact, balanced scrolling */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {/* Category 1: Residential Homes */}
            <Link
              to="/properties?category=Residential"
              className="luxury-card group rounded-2xl p-4 sm:p-6 bg-theme-surface border border-theme-border flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-theme-surface-alt border border-theme-border flex items-center justify-center text-theme-accent mb-3 group-hover:scale-110 transition-transform">
                  <Building className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-sm sm:text-lg font-bold font-display text-theme group-hover:text-theme-accent transition-colors">
                  Residential Homes
                </h3>
                <p className="text-[11px] sm:text-xs text-theme-muted mt-1.5 leading-relaxed line-clamp-2 sm:line-clamp-none">
                  Sea-facing penthouses and prime apartments in Worli, Bandra, and South Mumbai.
                </p>
              </div>
              <div className="pt-3 sm:pt-6 flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-theme-accent">
                <span>View Homes</span>
                <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Category 2: Commercial Spaces */}
            <Link
              to="/properties?category=Commercial"
              className="luxury-card group rounded-2xl p-4 sm:p-6 bg-theme-surface border border-theme-border flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-theme-surface-alt border border-theme-border flex items-center justify-center text-theme-accent mb-3 group-hover:scale-110 transition-transform">
                  <Building2 className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-sm sm:text-lg font-bold font-display text-theme group-hover:text-theme-accent transition-colors">
                  Commercial Offices
                </h3>
                <p className="text-[11px] sm:text-xs text-theme-muted mt-1.5 leading-relaxed line-clamp-2 sm:line-clamp-none">
                  Grade-A corporate office floors and executive suites in BKC and Lower Parel.
                </p>
              </div>
              <div className="pt-3 sm:pt-6 flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-theme-accent">
                <span>View Offices</span>
                <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Category 3: Retail Properties */}
            <Link
              to="/properties?type=Luxury Flagship Retail"
              className="luxury-card group rounded-2xl p-4 sm:p-6 bg-theme-surface border border-theme-border flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-theme-surface-alt border border-theme-border flex items-center justify-center text-theme-accent mb-3 group-hover:scale-110 transition-transform">
                  <Compass className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-sm sm:text-lg font-bold font-display text-theme group-hover:text-theme-accent transition-colors">
                  Retail Showrooms
                </h3>
                <p className="text-[11px] sm:text-xs text-theme-muted mt-1.5 leading-relaxed line-clamp-2 sm:line-clamp-none">
                  High-street luxury retail pavilions and prominent glass showroom spaces.
                </p>
              </div>
              <div className="pt-3 sm:pt-6 flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-theme-accent">
                <span>View Retail</span>
                <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Category 4: Investment Opportunities */}
            <Link
              to="/services/property-investment-assistance"
              className="luxury-card group rounded-2xl p-4 sm:p-6 bg-theme-surface border border-theme-border flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-theme-surface-alt border border-theme-border flex items-center justify-center text-theme-accent mb-3 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-sm sm:text-lg font-bold font-display text-theme group-hover:text-theme-accent transition-colors">
                  Investment Assets
                </h3>
                <p className="text-[11px] sm:text-xs text-theme-muted mt-1.5 leading-relaxed line-clamp-2 sm:line-clamp-none">
                  Pre-leased commercial floors and capital preservation opportunities.
                </p>
              </div>
              <div className="pt-3 sm:pt-6 flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-theme-accent">
                <span>Investments</span>
                <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* F. ABOUT BALAJI ENTERPRISES SECTION */}
      <section className="py-8 sm:py-16 lg:py-20 bg-theme-surface transition-colors border-y border-theme-border px-3 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-2 border-theme-border group">
                <img
                  src="/assets/editorial/property-consultation.jpg"
                  alt="Balaji Enterprises Senior Real Estate Consultation"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs font-editorial italic text-neutral-300">
                    Bespoke Advisory Desk
                  </p>
                  <p className="text-sm font-bold font-display">
                    Confidential. Transparent. Client-Centric.
                  </p>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              <div>
                <span className="text-[10px] sm:text-xs font-semibold text-theme-accent uppercase tracking-widest">
                  About Our Firm
                </span>
                <h2 className="text-xl sm:text-3xl md:text-4xl font-bold font-display text-theme mt-1.5 leading-tight">
                  Guided by Trust. Defined by Mumbai Real Estate Expertise.
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
                Balaji Enterprises is a premier residential and commercial property consultancy rooted in Mumbai, Maharashtra. We provide refined, data-informed representation to homebuyers, business owners, landlords, and institutional investors seeking exceptional real estate assets across India’s financial capital.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-theme-surface-alt border border-theme-border/60">
                  <h4 className="text-xs sm:text-sm font-bold font-display text-theme mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-theme-accent shrink-0" />
                    Residential Specialization
                  </h4>
                  <p className="text-[11px] sm:text-xs text-theme-muted leading-relaxed">
                    Access to exclusive penthouses and private treaty luxury residences across South Mumbai and Bandra.
                  </p>
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-theme-surface-alt border border-theme-border/60">
                  <h4 className="text-xs sm:text-sm font-bold font-display text-theme mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-theme-accent shrink-0" />
                    Commercial Precision
                  </h4>
                  <p className="text-[11px] sm:text-xs text-theme-muted leading-relaxed">
                    Lease structuring and acquisition of Grade-A office floors and retail spaces in BKC.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4">
                <Link
                  to="/about"
                  className="px-6 py-3 rounded-full bg-theme-primary text-white font-semibold text-xs text-center hover:bg-theme-primary-hover border border-theme-accent/40 transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Read Our Philosophy</span>
                  <ArrowRight className="w-3.5 h-3.5 text-theme-accent" />
                </Link>

                <Link
                  to="/services"
                  className="px-6 py-3 rounded-full border border-theme-border text-theme hover:bg-theme-surface-alt font-medium text-xs text-center transition-all"
                >
                  Explore Consultancy Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* G. FEATURED PROPERTIES SECTION */}
      <section className="py-8 sm:py-16 lg:py-20 bg-theme-surface-alt transition-colors px-3 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8 sm:mb-12">
            <div>
              <span className="text-[10px] sm:text-xs font-semibold text-theme-accent uppercase tracking-widest">
                Curated Selection
              </span>
              <h2 className="text-xl sm:text-3xl md:text-4xl font-bold font-display text-theme mt-1">
                Featured Mumbai Properties
              </h2>
              <p className="text-xs sm:text-sm text-theme-muted mt-1 max-w-xl">
                A preview of exceptional residential and commercial listings available for private consultation.
              </p>
            </div>

            <Link
              to="/properties"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-theme-border bg-theme-surface hover:border-theme-accent text-xs font-semibold text-theme transition-all shadow-sm shrink-0"
            >
              <span>View All Properties ({featuredProperties.length}+)</span>
              <ArrowRight className="w-3.5 h-3.5 text-theme-accent" />
            </Link>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-theme-surface border border-theme-border h-80 animate-pulse"
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {featuredProperties.slice(0, 6).map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  onQuickEnquire={() => openEnquiry()}
                />
              ))}
            </div>
          )}

          {/* Demonstrative notice */}
          <div className="mt-8 p-3.5 rounded-xl border border-theme-border bg-theme-surface text-center text-[11px] sm:text-xs text-theme-muted max-w-3xl mx-auto">
            <span className="font-semibold text-theme">Listing Disclaimer:</span> All property listings and pricing benchmarks displayed are illustrative demonstration assets for preview purposes.
          </div>
        </div>
      </section>

      {/* H. OUR SERVICES SECTION */}
      <section className="py-8 sm:py-16 lg:py-20 bg-theme-surface transition-colors px-3 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <span className="text-[10px] sm:text-xs font-semibold text-theme-accent uppercase tracking-widest">
              End-to-End Capabilities
            </span>
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold font-display text-theme mt-1">
              Comprehensive Real Estate Services
            </h2>
            <p className="text-xs sm:text-sm text-theme-muted mt-1.5">
              Tailored advisory services structured to support every phase of your property journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                className="luxury-card rounded-2xl p-5 sm:p-6 bg-theme-surface-alt border border-theme-border flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-theme-surface border border-theme-border flex items-center justify-center text-theme-accent mb-3 sm:mb-4 shadow-sm">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold font-display text-theme mb-1.5">
                    {service.title}
                  </h3>
                  <p className="text-xs text-theme-muted leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-3 border-t border-theme-border">
                  <Link
                    to={`/services#${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-theme-accent hover:underline"
                  >
                    <span>Explore Service Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* I. WHY CHOOSE US SECTION */}
      <section className="py-8 sm:py-16 lg:py-20 bg-theme-secondary text-white transition-colors relative overflow-hidden px-3 sm:px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <span className="text-[10px] sm:text-xs font-semibold text-theme-accent uppercase tracking-widest">
              The Balaji Distinction
            </span>
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold font-display text-white mt-1">
              Why Discerning Clients Choose Balaji Enterprises
            </h2>
            <p className="text-xs sm:text-sm text-white/70 mt-1.5">
              Combining ethical Indian values with institutional real estate rigour.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Pillar 1 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-theme-accent mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-sm sm:text-base font-bold font-display text-white mb-1.5">
                Trust & Transparency
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Zero hidden markups. Rigorous title scrutiny, verified RERA disclosures, and unbiased advice.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-theme-accent mb-3">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-sm sm:text-base font-bold font-display text-white mb-1.5">
                Personalized Guidance
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Dedicated senior consultants managing every client engagement from brief to key handover.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-theme-accent mb-3">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-sm sm:text-base font-bold font-display text-white mb-1.5">
                Market-Informed Pricing
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Valuations anchored by actual Sub-Registrar transaction records across Mumbai.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-theme-accent mb-3">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-sm sm:text-base font-bold font-display text-white mb-1.5">
                Flawless Execution
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Seamless coordination with legal advocates, tax advisors, and registry offices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* J. MUMBAI LOCATIONS DISCOVERY SECTION */}
      <section className="py-8 sm:py-16 lg:py-20 bg-theme-surface transition-colors px-3 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8 sm:mb-12">
            <div>
              <span className="text-[10px] sm:text-xs font-semibold text-theme-accent uppercase tracking-widest">
                Micro-Market Expertise
              </span>
              <h2 className="text-xl sm:text-3xl md:text-4xl font-bold font-display text-theme mt-1">
                Explore Prime Mumbai Neighborhoods
              </h2>
              <p className="text-xs sm:text-sm text-theme-muted mt-1 max-w-xl">
                Locality intelligence across South Mumbai, coastal suburbs, and commercial corridors.
              </p>
            </div>

            <Link
              to="/locations"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-theme-border bg-theme-surface-alt hover:border-theme-accent text-xs font-semibold text-theme transition-all shadow-sm shrink-0"
            >
              <span>Explore All Neighborhoods</span>
              <ArrowRight className="w-3.5 h-3.5 text-theme-accent" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {MUMBAI_LOCATIONS_DATA.slice(0, 6).map((loc) => (
              <Link
                key={loc.id}
                to={`/locations#${loc.slug}`}
                className="luxury-card group rounded-2xl overflow-hidden bg-theme-surface border border-theme-border flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-theme-surface-alt">
                  <img
                    src={loc.heroImage}
                    alt={loc.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white">
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold uppercase bg-theme-accent text-white backdrop-blur-md">
                      {loc.badge}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold font-display mt-1 text-white">
                      {loc.name}
                    </h3>
                  </div>
                </div>

                <div className="p-4 sm:p-5 space-y-2.5">
                  <p className="text-xs text-theme-muted line-clamp-2 leading-relaxed">
                    {loc.overview}
                  </p>
                  <div className="pt-2 border-t border-theme-border flex items-center justify-between text-xs text-theme-accent font-semibold">
                    <span>View Area Insights</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* K. CLIENT TESTIMONIALS (CLEARLY MARKED DEMONSTRATION CONTENT) */}
      <section className="py-8 sm:py-16 lg:py-20 bg-theme-surface-alt transition-colors px-3 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <span className="text-[10px] sm:text-xs font-semibold text-theme-accent uppercase tracking-widest">
              Demonstration Feedback
            </span>
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold font-display text-theme mt-1">
              Client Perspectives
            </h2>
            <div className="inline-block mt-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-[10px] sm:text-[11px] text-amber-700 dark:text-amber-300">
              Note: Sample demonstration testimonials for development preview.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Demo Review 1 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-theme-surface border border-theme-border shadow-sm flex flex-col justify-between">
              <p className="text-xs text-theme-muted italic leading-relaxed mb-4 sm:mb-6">
                "Balaji Enterprises guided our family through the acquisition of our Worli sea-facing apartment with exceptional discretion. Their comparative valuation analysis saved us substantial capital during price negotiation."
              </p>
              <div className="pt-3 border-t border-theme-border">
                <p className="text-xs font-bold text-theme font-display">
                  V. K. Singhania [Illustrative Sample]
                </p>
                <p className="text-[11px] text-theme-muted">
                  Industrialist & Resident, Worli
                </p>
              </div>
            </div>

            {/* Demo Review 2 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-theme-surface border border-theme-border shadow-sm flex flex-col justify-between">
              <p className="text-xs text-theme-muted italic leading-relaxed mb-4 sm:mb-6">
                "Finding an 8,000 sq.ft Grade-A commercial floor in BKC with our specific power redundancy and parking requirements was seamless. Professional transaction coordination from LOI to lease execution."
              </p>
              <div className="pt-3 border-t border-theme-border">
                <p className="text-xs font-bold text-theme font-display">
                  Corporate Tenant Representative [Sample]
                </p>
                <p className="text-[11px] text-theme-muted">
                  Bandra Kurla Complex (BKC)
                </p>
              </div>
            </div>

            {/* Demo Review 3 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-theme-surface border border-theme-border shadow-sm flex flex-col justify-between">
              <p className="text-xs text-theme-muted italic leading-relaxed mb-4 sm:mb-6">
                "As an NRI investor based in Singapore, managing Mumbai property transactions remotely requires total confidence in your representative. Their transparent documentation and prompt updates were exemplary."
              </p>
              <div className="pt-3 border-t border-theme-border">
                <p className="text-xs font-bold text-theme font-display">
                  A. M. Merchant [Illustrative Sample]
                </p>
                <p className="text-[11px] text-theme-muted">
                  NRI Property Investor, Singapore
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* L. LATEST INSIGHTS / BLOG PREVIEW */}
      <section className="py-8 sm:py-16 lg:py-20 bg-theme-surface transition-colors px-3 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8 sm:mb-12">
            <div>
              <span className="text-[10px] sm:text-xs font-semibold text-theme-accent uppercase tracking-widest">
                Market Research
              </span>
              <h2 className="text-xl sm:text-3xl md:text-4xl font-bold font-display text-theme mt-1">
                Latest Real Estate Insights
              </h2>
              <p className="text-xs sm:text-sm text-theme-muted mt-1 max-w-xl">
                Research articles, due diligence guides, and infrastructure analyses curated by our advisory desk.
              </p>
            </div>

            <Link
              to="/insights"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-theme-border bg-theme-surface-alt hover:border-theme-accent text-xs font-semibold text-theme transition-all shadow-sm shrink-0"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-3.5 h-3.5 text-theme-accent" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {BLOG_ARTICLES_DATA.map((article) => (
              <article
                key={article.id}
                className="luxury-card group rounded-2xl overflow-hidden bg-theme-surface border border-theme-border flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-theme-surface-alt">
                  <img
                    src={article.coverImage}
                    alt={article.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase bg-theme-primary/90 text-white backdrop-blur-md">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-center gap-2 text-[11px] text-theme-muted mb-2">
                      <Clock className="w-3 h-3 text-theme-accent" />
                      <span>{article.readTime}</span>
                      <span>•</span>
                      <span>{article.publishedDate}</span>
                    </div>

                    <h3 className="text-base font-bold font-display text-theme group-hover:text-theme-accent transition-colors line-clamp-2">
                      <Link to={`/insights/${article.slug}`}>{article.title}</Link>
                    </h3>

                    <p className="text-xs text-theme-muted line-clamp-2 mt-2 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-theme-border">
                    <Link
                      to={`/insights/${article.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-theme-accent hover:underline"
                    >
                      <span>Read Full Analysis</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* M. STRONG CALL-TO-ACTION SECTION */}
      <section className="py-10 sm:py-16 lg:py-20 bg-gradient-to-r from-theme-primary to-theme-secondary text-white transition-colors relative overflow-hidden px-3 sm:px-6">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-white/10 text-theme-accent border border-theme-accent/30 text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Consultancy Mandates</span>
          </span>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-display text-white mb-3 leading-tight">
            Ready to Discover Your Next Prime Mumbai Property?
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-white/80 max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Whether acquiring an exclusive coastal residence, securing a Grade-A corporate office in BKC, or seeking high-yield investment advisory — our senior consultants are ready to assist.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={openEnquiry}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-[#C9A96E] to-[#B8955A] text-[#101D35] font-semibold text-xs sm:text-sm hover:from-[#DFCA9B] hover:to-[#C9A96E] transition-all shadow-xl shadow-[#C9A96E]/20 flex items-center justify-center gap-2"
            >
              <span>Schedule a Private Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href={businessConfig.socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/10 backdrop-blur-md text-white font-semibold text-xs sm:text-sm hover:bg-white/20 border border-white/20 transition-all flex items-center justify-center gap-2"
            >
              <span>WhatsApp Direct Advisory</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
