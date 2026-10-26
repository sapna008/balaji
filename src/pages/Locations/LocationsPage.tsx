import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  Train,
  CheckCircle2,
  Info,
} from 'lucide-react';
import { MUMBAI_LOCATIONS_DATA, type MumbaiLocation } from '../../data/locations';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SEO } from '../../components/common/SEO';

export const LocationsPage: React.FC = () => {
  return (
    <div className="bg-theme-bg text-theme transition-colors">
      <SEO
        title="Mumbai Real Estate Locations Guide | Balaji Enterprises"
        description="Comprehensive neighborhood guide for South Mumbai, Bandra, BKC, Powai, Andheri, and Thane. Pricing benchmarks, lifestyle highlights, and property discoveries."
        canonicalPath="/locations"
      />

      <Breadcrumbs items={[{ label: 'Locations' }]} />

      {/* Hero Banner */}
      <section className="py-6 sm:py-16 bg-theme-surface-alt border-b border-theme-border px-3 sm:px-6">
        <div className="max-w-7xl mx-auto text-center max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-theme-surface border border-theme-accent/30 text-[10px] sm:text-xs font-semibold text-theme-accent uppercase tracking-wider mb-2.5 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5 text-theme-accent" />
            <span>Micro-Market Intelligence</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold font-display text-theme mb-2 sm:mb-4 leading-tight">
            Mumbai Real Estate Micro-Markets
          </h1>

          <p className="text-xs sm:text-sm text-theme-muted leading-relaxed font-sans px-2">
            Mumbai is a metropolis of distinctive micro-markets — from historic South Mumbai coastal avenues to the corporate corridors of BKC and lakeside townships in Powai. Explore the lifestyle, infrastructure, and property benchmarks of each neighborhood.
          </p>

          {/* Explicit Office Presence Disclaimer */}
          <div className="mt-4 sm:mt-6 p-3 rounded-2xl bg-theme-surface border border-theme-border text-[11px] text-theme-muted inline-flex items-center gap-2 max-w-xl text-left">
            <Info className="w-4 h-4 text-theme-accent shrink-0" />
            <span>
              <strong>Advisory Territory Notice:</strong> Balaji Enterprises consults on transactions across all listed Mumbai zones. The listings represent advisory service territories rather than physical branch office locations.
            </span>
          </div>
        </div>
      </section>

      {/* Locations Detailed Grid */}
      <section className="py-8 sm:py-16 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 space-y-6 sm:space-y-16">
        {MUMBAI_LOCATIONS_DATA.map((loc: MumbaiLocation) => (
          <article
            key={loc.id}
            id={loc.slug}
            className="scroll-mt-32 rounded-3xl overflow-hidden bg-theme-surface border border-theme-border shadow-elevated"
          >
            {/* Top Large Hero Image with Overlay */}
            <div className="relative aspect-[21/9] sm:aspect-[24/9] w-full overflow-hidden bg-theme-surface-alt">
              <img
                src={loc.heroImage}
                alt={loc.name}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase bg-theme-accent text-white backdrop-blur-md mb-2 inline-block">
                    {loc.badge}
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-white">
                    {loc.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-300 italic font-editorial mt-1">
                    "{loc.headline}"
                  </p>
                </div>

                <Link
                  to={`/properties?location=${encodeURIComponent(loc.name.split(',')[0].trim())}`}
                  className="px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white text-xs font-semibold hover:text-[#101D35] transition-all flex items-center gap-1.5 shrink-0 self-start sm:self-auto border border-white/30"
                >
                  <span>View Properties Here</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-10 space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Overview & Lifestyle */}
                <div className="lg:col-span-7 space-y-4">
                  <h3 className="text-sm font-bold font-display uppercase tracking-wider text-theme-accent">
                    Neighborhood Character & Living Experience
                  </h3>
                  <p className="text-xs sm:text-sm text-theme leading-relaxed">
                    {loc.overview}
                  </p>
                  <p className="text-xs text-theme-muted leading-relaxed">
                    <strong className="text-theme">Lifestyle & Community:</strong>{' '}
                    {loc.lifestyle}
                  </p>

                  {/* Recommended For */}
                  <div className="pt-2">
                    <h4 className="text-xs font-semibold text-theme mb-2">
                      Ideal For:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {loc.recommendedFor.map((rec, rIdx) => (
                        <span
                          key={rIdx}
                          className="px-3 py-1 rounded-full bg-theme-surface-alt border border-theme-border text-[11px] text-theme font-medium"
                        >
                          {rec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Connectivity & Pricing Benchmarks */}
                <div className="lg:col-span-5 space-y-4 p-5 rounded-2xl bg-theme-surface-alt border border-theme-border/70">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-theme-accent flex items-center gap-1.5">
                    <Train className="w-3.5 h-3.5" />
                    <span>Key Transit Infrastructure</span>
                  </h3>
                  <ul className="space-y-2 text-xs text-theme-muted">
                    {loc.keyConnectivity.map((conn, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-theme-accent shrink-0 mt-0.5" />
                        <span>{conn}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-theme-border space-y-1">
                    <span className="text-[11px] font-semibold text-theme uppercase tracking-wider">
                      Indicative Price Benchmark
                    </span>
                    <p className="text-sm font-bold font-display text-theme">
                      {loc.samplePriceRange}
                    </p>
                    <p className="text-[10px] text-theme-muted italic">
                      Benchmark rates reflect generalized secondary and primary market trends and vary by building grade.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};
