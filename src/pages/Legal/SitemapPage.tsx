import React from 'react';
import { Link } from 'react-router-dom';
import { Map, Building, Compass, Shield } from 'lucide-react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { PROPERTIES_DATA } from '../../data/properties';
import { MUMBAI_LOCATIONS_DATA } from '../../data/locations';
import { SERVICES_DATA } from '../../data/services';
import { SEO } from '../../components/common/SEO';

export const SitemapPage: React.FC = () => {
  return (
    <div className="bg-theme-bg text-theme transition-colors min-h-screen">
      <SEO
        title="Website Sitemap | Balaji Enterprises Mumbai"
        description="Complete site index and navigation structure for Balaji Enterprises real estate platform."
        canonicalPath="/sitemap"
      />

      <Breadcrumbs items={[{ label: 'Sitemap' }]} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <header className="space-y-2 border-b border-theme-border pb-6">
          <span className="text-xs font-semibold text-theme-accent uppercase tracking-widest">
            Directory Index
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold font-display text-theme">
            Website Sitemap
          </h1>
          <p className="text-xs text-theme-muted">
            Complete index of all public pages, properties, services, and research guides.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-xs">
          {/* Main Pages */}
          <div className="p-6 rounded-2xl bg-theme-surface border border-theme-border space-y-3">
            <h3 className="text-sm font-bold font-display text-theme flex items-center gap-2">
              <Map className="w-4 h-4 text-theme-accent" />
              Core Navigation
            </h3>
            <ul className="space-y-2 text-theme-muted">
              <li>
                <Link to="/" className="hover:text-theme-accent transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-theme-accent transition-colors">
                  About Balaji Enterprises
                </Link>
              </li>
              <li>
                <Link to="/properties" className="hover:text-theme-accent transition-colors">
                  Property Portfolio Directory
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-theme-accent transition-colors">
                  Consultancy Services
                </Link>
              </li>
              <li>
                <Link to="/locations" className="hover:text-theme-accent transition-colors">
                  Mumbai Real Estate Locations
                </Link>
              </li>
              <li>
                <Link to="/insights" className="hover:text-theme-accent transition-colors">
                  Real Estate Insights & Research
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-theme-accent transition-colors">
                  Contact Advisory Desk
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="p-6 rounded-2xl bg-theme-surface border border-theme-border space-y-3">
            <h3 className="text-sm font-bold font-display text-theme flex items-center gap-2">
              <Building className="w-4 h-4 text-theme-accent" />
              Services Practices
            </h3>
            <ul className="space-y-2 text-theme-muted">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <Link
                    to={`/services#${srv.slug}`}
                    className="hover:text-theme-accent transition-colors"
                  >
                    {srv.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div className="p-6 rounded-2xl bg-theme-surface border border-theme-border space-y-3">
            <h3 className="text-sm font-bold font-display text-theme flex items-center gap-2">
              <Compass className="w-4 h-4 text-theme-accent" />
              Mumbai Neighborhoods
            </h3>
            <ul className="space-y-2 text-theme-muted">
              {MUMBAI_LOCATIONS_DATA.map((loc) => (
                <li key={loc.id}>
                  <Link
                    to={`/locations#${loc.slug}`}
                    className="hover:text-theme-accent transition-colors"
                  >
                    {loc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Properties */}
          <div className="p-6 rounded-2xl bg-theme-surface border border-theme-border space-y-3 lg:col-span-2">
            <h3 className="text-sm font-bold font-display text-theme flex items-center gap-2">
              <Building className="w-4 h-4 text-theme-accent" />
              Property Listings (Demonstration Index)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-theme-muted">
              {PROPERTIES_DATA.map((prop) => (
                <Link
                  key={prop.id}
                  to={`/properties/${prop.slug}`}
                  className="hover:text-theme-accent transition-colors truncate block"
                >
                  • {prop.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal Pages */}
          <div className="p-6 rounded-2xl bg-theme-surface border border-theme-border space-y-3">
            <h3 className="text-sm font-bold font-display text-theme flex items-center gap-2">
              <Shield className="w-4 h-4 text-theme-accent" />
              Governance & Policies
            </h3>
            <ul className="space-y-2 text-theme-muted">
              <li>
                <Link to="/privacy-policy" className="hover:text-theme-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="hover:text-theme-accent transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="hover:text-theme-accent transition-colors">
                  XML Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
