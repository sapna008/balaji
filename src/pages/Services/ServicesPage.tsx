import { useOutletContext } from 'react-router-dom';
import {
  Building,
  Building2,
  ArrowLeftRight,
  Key,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';
import { SERVICES_DATA, type RealEstateService } from '../../data/services';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SEO } from '../../components/common/SEO';

const getServiceIcon = (name: string) => {
  switch (name) {
    case 'Home':
      return <Building className="w-6 h-6 text-theme-accent" />;
    case 'Building2':
      return <Building2 className="w-6 h-6 text-theme-accent" />;
    case 'ArrowLeftRight':
      return <ArrowLeftRight className="w-6 h-6 text-theme-accent" />;
    case 'Key':
      return <Key className="w-6 h-6 text-theme-accent" />;
    case 'TrendingUp':
      return <TrendingUp className="w-6 h-6 text-theme-accent" />;
    case 'ShieldCheck':
    default:
      return <ShieldCheck className="w-6 h-6 text-theme-accent" />;
  }
};

export const ServicesPage: React.FC = () => {
  const { openEnquiry } = useOutletContext<{ openEnquiry: () => void }>();

  return (
    <div className="bg-theme-bg text-theme transition-colors">
      <SEO
        title="Real Estate Consultancy Services | Balaji Enterprises"
        description="Comprehensive real estate consultancy services in Mumbai: Residential advisory, Grade-A commercial leasing, property acquisitions, and high-yield investments."
        canonicalPath="/services"
      />

      <Breadcrumbs items={[{ label: 'Services' }]} />

      {/* Header Banner */}
      <section className="py-6 sm:py-16 bg-theme-surface-alt border-b border-theme-border px-3 sm:px-6">
        <div className="max-w-7xl mx-auto text-center max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-theme-surface border border-theme-accent/30 text-[10px] sm:text-xs font-semibold text-theme-accent uppercase tracking-wider mb-2.5 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5 text-theme-accent" />
            <span>Fiduciary Real Estate Capabilities</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold font-display text-theme mb-2 sm:mb-4 leading-tight">
            Consultancy Services Tailored to High-Value Acquisitions
          </h1>

          <p className="text-xs sm:text-sm text-theme-muted leading-relaxed font-sans px-2">
            From residential penthouses on Mumbai’s coastline to corporate headquarters in BKC, our advisory desk provides specialized representation focused on due diligence, fair pricing, and flawless closing.
          </p>
        </div>
      </section>

      {/* Services List Detailed Deep Dive */}
      <section className="py-8 sm:py-16 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 space-y-6 sm:space-y-12">
        {SERVICES_DATA.map((service: RealEstateService, idx: number) => {
          const isEven = idx % 2 === 0;
          return (
            <article
              key={service.id}
              id={service.slug}
              className="scroll-mt-24 p-4 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-theme-surface border border-theme-border shadow-subtle"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Visual Image Column */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative rounded-2xl overflow-hidden border border-theme-border shadow-elevated group aspect-[16/11]">
                    <img
                      src={service.heroImage}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-xs font-editorial italic text-neutral-300">
                        Specialized Practice
                      </p>
                      <p className="text-sm font-bold font-display">
                        {service.title}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content Details Column */}
                <div className={`lg:col-span-7 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="space-y-2">
                    <div className="w-12 h-12 rounded-2xl bg-theme-surface-alt border border-theme-border flex items-center justify-center">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold font-display text-theme mt-2">
                      {service.title}
                    </h2>
                    <p className="text-xs font-semibold text-theme-accent uppercase tracking-wider">
                      {service.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
                    {service.fullDescription}
                  </p>

                  {/* Target Clients */}
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-theme mb-2">
                      Client Profile Focus
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.targetClients.map((client, cIdx) => (
                        <span
                          key={cIdx}
                          className="px-3 py-1 rounded-full bg-theme-surface-alt border border-theme-border text-[11px] font-medium text-theme"
                        >
                          {client}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Offerings */}
                  <div className="space-y-2.5">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-theme">
                      Scope of Advisory
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-theme-muted">
                      {service.keyOfferings.map((offering, oIdx) => (
                        <li key={oIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-theme-accent shrink-0 mt-0.5" />
                          <span>{offering}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Process Steps */}
                  <div className="pt-4 border-t border-theme-border">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-theme mb-3">
                      Advisory Workflow
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.processSteps.map((step, sIdx) => (
                        <div
                          key={sIdx}
                          className="p-3 rounded-xl bg-theme-surface-alt border border-theme-border/60 text-xs"
                        >
                          <span className="font-bold text-theme-accent mr-1">
                            {step.step}.
                          </span>
                          <strong className="text-theme font-semibold">
                            {step.title}:
                          </strong>{' '}
                          <span className="text-theme-muted text-[11px]">
                            {step.description}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={openEnquiry}
                      className="px-6 py-3 rounded-full bg-theme-primary text-white text-xs font-semibold hover:bg-theme-primary-hover border border-theme-accent/40 transition-all flex items-center gap-2 shadow-sm"
                    >
                      <span>Consult on {service.title}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-theme-accent" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-theme-secondary text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-3">
            Have a Bespoke Property Requirement?
          </h3>
          <p className="text-xs sm:text-sm text-white/80 mb-6">
            We handle private mandates, off-market commercial floors, and confidential family acquisitions across Mumbai.
          </p>
          <button
            onClick={openEnquiry}
            className="px-8 py-3.5 rounded-full bg-theme-accent text-white font-semibold text-xs sm:text-sm hover:brightness-110 transition-all shadow-lg"
          >
            Schedule a Confidential Consultation
          </button>
        </div>
      </section>
    </div>
  );
};
