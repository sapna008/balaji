import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SEO } from '../../components/common/SEO';

export const TermsPage: React.FC = () => {
  return (
    <div className="bg-theme-bg text-theme transition-colors min-h-screen">
      <SEO
        title="Terms & Conditions | Balaji Enterprises Mumbai"
        description="Terms and conditions for consulting and utilizing real estate advisory services through Balaji Enterprises, Mumbai."
        canonicalPath="/terms-and-conditions"
      />

      <Breadcrumbs items={[{ label: 'Terms & Conditions' }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        <header className="space-y-2 border-b border-theme-border pb-6">
          <span className="text-xs font-semibold text-theme-accent uppercase tracking-widest">
            Terms of Engagement
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold font-display text-theme">
            Terms & Conditions
          </h1>
          <p className="text-xs text-theme-muted">
            Last Updated: October 2026 | Balaji Enterprises Real Estate Consultancy
          </p>
        </header>

        <div className="space-y-6 text-xs sm:text-sm text-theme leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold font-display text-theme">
              1. Nature of Advisory Services
            </h2>
            <p className="text-theme-muted">
              Balaji Enterprises acts as an independent real estate consultancy providing property search, comparative market analysis, transaction coordination, and advisory services across Mumbai. We are not developers, builders, or financial underwriters.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold font-display text-theme">
              2. Demonstration Content & Benchmarks Disclaimer
            </h2>
            <p className="text-theme-muted">
              All property images, sample rates, carpet area estimates, and floor representations on this website are provided strictly for illustrative and demonstration purposes. Final carpet areas, legal titles, pricing, and possession schedules must be independently reviewed in primary developer agreements or registered conveyance deeds.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold font-display text-theme">
              3. MahaRERA & Statutory Verification
            </h2>
            <p className="text-theme-muted">
              Clients are advised to verify project registration details on the official Maharashtra Real Estate Regulatory Authority (MahaRERA) online portal prior to signing binding agreements or releasing monetary payments. Balaji Enterprises assists with the retrieval of public regulatory disclosures.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold font-display text-theme">
              4. Professional Fees & Retainers
            </h2>
            <p className="text-theme-muted">
              Consultancy fees, brokerage, or success fees for buying, selling, or leasing properties are governed by written client mandate agreements executed prior to transaction closure in accordance with prevailing Mumbai real estate industry standards.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold font-display text-theme">
              5. Jurisdiction
            </h2>
            <p className="text-theme-muted">
              These terms are governed by the laws of India and subject to the exclusive jurisdiction of the competent courts in Mumbai, Maharashtra.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
