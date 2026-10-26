import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { businessConfig } from '../../config/businessConfig';
import { SEO } from '../../components/common/SEO';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-theme-bg text-theme transition-colors min-h-screen">
      <SEO
        title="Privacy Policy | Balaji Enterprises Mumbai"
        description="Privacy policy and data handling practices of Balaji Enterprises real estate consultancy in Mumbai, India."
        canonicalPath="/privacy-policy"
      />

      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        <header className="space-y-2 border-b border-theme-border pb-6">
          <span className="text-xs font-semibold text-theme-accent uppercase tracking-widest">
            Legal & Governance
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold font-display text-theme">
            Privacy Policy
          </h1>
          <p className="text-xs text-theme-muted">
            Last Updated: October 2026 | Balaji Enterprises Real Estate Consultancy
          </p>
        </header>

        <div className="space-y-6 text-xs sm:text-sm text-theme leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold font-display text-theme">
              1. Introduction & Commitment to Confidentiality
            </h2>
            <p className="text-theme-muted">
              Balaji Enterprises ("we", "our", or "the Firm") is committed to respecting the privacy of our high-net-worth clients, homebuyers, corporate tenants, and investors. This Privacy Policy outlines how we collect, safeguard, and manage information shared with us through our website, telephone consultations, and WhatsApp advisory channels.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold font-display text-theme">
              2. Information We Collect
            </h2>
            <p className="text-theme-muted">
              We collect information strictly necessary to provide tailored real estate advisory services:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-theme-muted">
              <li>Full name, telephone number, and email address provided via consultation forms.</li>
              <li>Property preferences, preferred micro-locations, budget framework, and configuration requirements.</li>
              <li>Corporate designations and representation mandates for commercial transactions.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold font-display text-theme">
              3. Use of Information
            </h2>
            <p className="text-theme-muted">
              Your information is utilized solely to:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-theme-muted">
              <li>Provide personalized property recommendations matching your brief.</li>
              <li>Coordinate private site inspections and confidential viewing appointments.</li>
              <li>Facilitate title due diligence coordination and transaction support.</li>
            </ul>
            <p className="text-theme-muted mt-2">
              We never sell, rent, or monetize client contact information to third-party marketing brokers or bulk call centers.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold font-display text-theme">
              4. Data Retention & Security
            </h2>
            <p className="text-theme-muted">
              All electronic records are stored within secure, access-controlled environments in compliance with applicable Indian information technology laws. Clients may request deletion or updating of their contact records at any time by contacting our advisory desk.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold font-display text-theme">
              5. Contact Us Regarding Privacy
            </h2>
            <p className="text-theme-muted">
              For privacy queries or data modification requests, write to:
              <br />
              <strong>Email:</strong> {businessConfig.contact.email}
              <br />
              <strong>Phone:</strong> {businessConfig.contact.phoneDisplay}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
