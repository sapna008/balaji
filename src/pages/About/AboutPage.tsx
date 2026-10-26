import { useOutletContext } from 'react-router-dom';
import {
  Shield,
  Eye,
  Target,
  Sparkles,
  Users,
  Award,
  Scale,
  FileText,
} from 'lucide-react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SEO } from '../../components/common/SEO';

export const AboutPage: React.FC = () => {
  const { openEnquiry } = useOutletContext<{ openEnquiry: () => void }>();

  return (
    <div className="bg-theme-bg text-theme transition-colors">
      <SEO
        title="About Us | Trusted Real Estate Advisory"
        description="Learn about Balaji Enterprises — our philosophy, ethical real estate standards, and residential & commercial property consultancy across Mumbai."
        canonicalPath="/about"
      />

      <Breadcrumbs items={[{ label: 'About Us' }]} />

      {/* Hero Banner */}
      <section className="relative py-8 sm:py-16 lg:py-20 bg-theme-surface-alt border-b border-theme-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-theme-surface border border-theme-accent/30 text-xs font-semibold text-theme-accent uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ethical Heritage & Modern Rigor</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-theme mb-4 leading-tight">
              Shaping High-Value Property Decisions with Integrity.
            </h1>

            <p className="text-sm sm:text-base text-theme-muted leading-relaxed font-sans">
              Balaji Enterprises was established with a singular commitment: to provide transparent, sophisticated, and genuinely client-centric real estate consultancy across Mumbai’s prime residential and commercial corridors.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Philosophy & Cultural Grounding */}
      <section className="py-8 sm:py-16 lg:py-20 bg-theme-surface border-b border-theme-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold text-theme-accent uppercase tracking-widest">
                Our Guiding Philosophy
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-theme">
                Divine Blessings. Trusted Relationships. Lasting Value.
              </h2>
              <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
                In Indian culture, a home or business premise is more than an asset class — it is a sanctuary of family prosperity, positive energy, and lasting legacy. Our brand carries the sacred blessings of Lord Sri Venkateswara (Balaji), anchoring every transaction in absolute honesty, mutual respect, and ethical stewardship.
              </p>
              <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
                We combine this deep-rooted cultural ethic with state-of-the-art market intelligence, architectural layout appraisal, and rigorous legal scrutiny to ensure that your property acquisitions deliver enduring capital preservation.
              </p>

              {/* Verified Placeholder Disclosure */}
              <div className="p-4 rounded-2xl bg-theme-surface-alt border border-theme-border text-[11px] text-theme-muted flex items-start gap-3">
                <FileText className="w-4 h-4 text-theme-accent shrink-0 mt-0.5" />
                <div>
                  <strong className="text-theme">Corporate Profile Note:</strong> In accordance with our strict policy of complete transparency, formal registration dates, client transaction milestones, and MAHARERA credentials will be updated upon final statutory verification. We never publish unverified marketing claims.
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden border border-theme-border shadow-elevated">
                <img
                  src="/assets/hero/bandra-worli-sealink.jpg"
                  alt="Bandra Worli Sea Link Architecture - Balaji Enterprises Mumbai"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Values */}
      <section className="py-8 sm:py-16 lg:py-20 bg-theme-surface-alt border-b border-theme-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Vision */}
            <div className="p-8 rounded-3xl bg-theme-surface border border-theme-border shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-theme-surface-alt border border-theme-border flex items-center justify-center text-theme-accent mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-theme mb-3">
                Our Vision
              </h3>
              <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
                To be recognized as Mumbai’s most reputable, trusted, and client-centric boutique real estate consultancy — setting the gold standard for fiduciary transparency, architectural discernment, and flawless transaction execution.
              </p>
            </div>

            {/* Mission */}
            <div className="p-8 rounded-3xl bg-theme-surface border border-theme-border shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-theme-surface-alt border border-theme-border flex items-center justify-center text-theme-accent mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-theme mb-3">
                Our Mission
              </h3>
              <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
                To empower our clients through uncompromising advocacy, verified market data, and personalized consultation — ensuring every homebuyer finds their ideal sanctuary and every business secures a high-performing commercial premise.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold text-theme-accent uppercase tracking-widest">
              Foundational Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-theme mt-2">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-theme-surface border border-theme-border text-center">
              <Shield className="w-8 h-8 text-theme-accent mx-auto mb-3" />
              <h4 className="text-base font-bold font-display text-theme mb-2">Uncompromising Integrity</h4>
              <p className="text-xs text-theme-muted leading-relaxed">Full disclosure on titles, approvals, carpet areas, and market valuations.</p>
            </div>

            <div className="p-6 rounded-2xl bg-theme-surface border border-theme-border text-center">
              <Users className="w-8 h-8 text-theme-accent mx-auto mb-3" />
              <h4 className="text-base font-bold font-display text-theme mb-2">Client-First Fiduciary</h4>
              <p className="text-xs text-theme-muted leading-relaxed">We represent your best interests above all else throughout negotiations.</p>
            </div>

            <div className="p-6 rounded-2xl bg-theme-surface border border-theme-border text-center">
              <Scale className="w-8 h-8 text-theme-accent mx-auto mb-3" />
              <h4 className="text-base font-bold font-display text-theme mb-2">Verified Due Diligence</h4>
              <p className="text-xs text-theme-muted leading-relaxed">Every property undergoes multi-point technical, legal, and regulatory checks.</p>
            </div>

            <div className="p-6 rounded-2xl bg-theme-surface border border-theme-border text-center">
              <Award className="w-8 h-8 text-theme-accent mx-auto mb-3" />
              <h4 className="text-base font-bold font-display text-theme mb-2">Bespoke Excellence</h4>
              <p className="text-xs text-theme-muted leading-relaxed">Tailored consultation suited to HNIs, business leaders, and NRI investors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Systematic Process */}
      <section className="py-8 sm:py-16 lg:py-20 bg-theme-surface border-b border-theme-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold text-theme-accent uppercase tracking-widest">
              Methodical Execution
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-theme mt-2">
              Our 5-Step Advisory Process
            </h2>
            <p className="text-xs sm:text-sm text-theme-muted mt-2">
              How we ensure smooth, risk-mitigated acquisitions for every client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { num: '01', title: 'Consultation', desc: 'Detailed requirement blueprint and lifestyle mapping.' },
              { num: '02', title: 'Portfolio Curation', desc: 'Strict screening of verified titles and floorplates.' },
              { num: '03', title: 'Private Viewings', desc: 'Coordinated tours accompanied by senior partners.' },
              { num: '04', title: 'Negotiation', desc: 'Sub-Registrar benchmark-based strategic offer structuring.' },
              { num: '05', title: 'Legal Closing', desc: 'Complete registration assistance and title handover.' },
            ].map((step) => (
              <div
                key={step.num}
                className="p-6 rounded-2xl bg-theme-surface-alt border border-theme-border text-center flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-bold font-display text-theme-accent mb-2 block">
                    {step.num}
                  </span>
                  <h4 className="text-sm font-bold font-display text-theme mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-theme-muted leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-theme-secondary text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-3">
            Experience Transparent Real Estate Advisory
          </h2>
          <p className="text-xs sm:text-sm text-white/80 mb-6">
            Speak directly with our senior consultants regarding residential or commercial mandates in Mumbai.
          </p>
          <button
            onClick={openEnquiry}
            className="px-8 py-3.5 rounded-full bg-theme-accent text-white font-semibold text-xs sm:text-sm hover:brightness-110 transition-all shadow-lg"
          >
            Schedule a Confidential Discussion
          </button>
        </div>
      </section>
    </div>
  );
};
