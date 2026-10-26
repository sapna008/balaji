import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
} from 'lucide-react';
import { businessConfig } from '../../config/businessConfig';

interface FooterProps {
  onOpenBlessingModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBlessingModal }) => {
  return (
    <footer className="bg-theme-secondary text-white/90 border-t border-theme-border/40 transition-colors">
      {/* Upper Footer - Brand & Devotional Auspicious Ribbon */}
      <div className="border-b border-white/10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="h-12 bg-white/95 rounded-xl p-1.5 shadow-md flex items-center">
              <img
                src="/assets/branding/balaji-logo.png"
                alt="Balaji Enterprises"
                className="h-full w-auto object-contain"
              />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-wide text-white">
                {businessConfig.name}
              </p>
              <p className="text-xs text-theme-accent italic">
                {businessConfig.promise}
              </p>
            </div>
          </div>

          {/* Devotional invocation trigger */}
          <button
            onClick={onOpenBlessingModal}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-theme-accent/40 text-xs text-theme-accent hover:bg-white/10 transition-colors"
          >
            <span className="font-devanagari font-medium text-sm">
              ॥ ॐ श्री वेंकटेश्वराय नमः ॥
            </span>
            <span className="text-white/60 text-[11px] hidden sm:inline">
              — Auspicious Invocation
            </span>
          </button>
        </div>
      </div>

      {/* Main Footer Links & Directory */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-10">
          {/* Column 1: Brand & Philosophy */}
          <div className="col-span-2 lg:col-span-2 space-y-3 sm:space-y-4">
            <h3 className="text-lg font-display font-semibold text-white tracking-wide">
              Real Estate. Redefined.
            </h3>
            <p className="text-xs text-white/70 leading-relaxed pr-6">
              Balaji Enterprises delivers bespoke residential and commercial property advisory across prime Mumbai micro-markets. We combine deep architectural appreciation, transactional integrity, and market-informed counsel to guide high-value property acquisitions.
            </p>
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[11px] text-white/80">
                <ShieldCheck className="w-3.5 h-3.5 text-theme-accent" />
                <span>MahaRERA Compliance: Pending Regulatory Filing</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-theme-accent mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-white/80">
              <li>
                <Link to="/" className="hover:text-theme-accent transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-theme-accent transition-colors">
                  About Our Firm
                </Link>
              </li>
              <li>
                <Link to="/properties" className="hover:text-theme-accent transition-colors">
                  Property Portfolio
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-theme-accent transition-colors">
                  Consultancy Services
                </Link>
              </li>
              <li>
                <Link to="/locations" className="hover:text-theme-accent transition-colors">
                  Mumbai Neighborhoods
                </Link>
              </li>
              <li>
                <Link to="/insights" className="hover:text-theme-accent transition-colors">
                  Real Estate Insights
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-theme-accent transition-colors">
                  Contact Advisory Desk
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Prime Locations */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-theme-accent mb-4">
              Mumbai Locations
            </h4>
            <ul className="space-y-2.5 text-xs text-white/80">
              <li>
                <Link to="/locations#south-mumbai" className="hover:text-theme-accent transition-colors">
                  South Mumbai (Worli / Marine Dr)
                </Link>
              </li>
              <li>
                <Link to="/locations#bandra-khar" className="hover:text-theme-accent transition-colors">
                  Bandra West & Khar
                </Link>
              </li>
              <li>
                <Link to="/locations#commercial-hubs" className="hover:text-theme-accent transition-colors">
                  Bandra Kurla Complex (BKC)
                </Link>
              </li>
              <li>
                <Link to="/locations#powai-vikhroli" className="hover:text-theme-accent transition-colors">
                  Powai & Vikhroli
                </Link>
              </li>
              <li>
                <Link to="/locations#andheri-goregaon" className="hover:text-theme-accent transition-colors">
                  Andheri & Goregaon
                </Link>
              </li>
              <li>
                <Link to="/locations#thane-navi-mumbai" className="hover:text-theme-accent transition-colors">
                  Thane & Navi Mumbai
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office Desk */}
          <div className="col-span-2 lg:col-span-1 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/10">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-theme-accent mb-4">
              Consultancy Desk
            </h4>
            <div className="space-y-3 text-xs text-white/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-theme-accent shrink-0 mt-0.5" />
                <span>
                  {businessConfig.office.addressLine1}
                  <br />
                  {businessConfig.office.addressLine2}, {businessConfig.office.city}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-theme-accent shrink-0" />
                <a
                  href={`tel:${businessConfig.contact.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {businessConfig.contact.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-theme-accent shrink-0" />
                <a
                  href={`mailto:${businessConfig.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {businessConfig.contact.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-3.5 h-3.5 text-theme-accent shrink-0 mt-0.5" />
                <span>
                  {businessConfig.businessHours.days}: {businessConfig.businessHours.hours}
                  <br />
                  <span className="text-theme-accent/80">
                    {businessConfig.businessHours.sunday}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Disclaimer & Regulatory Disclosures */}
      <div className="border-t border-white/10 bg-black/30 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-white/60">
          <p className="text-center md:text-left leading-relaxed">
            © {new Date().getFullYear()} {businessConfig.legalName}. All rights reserved.
            <span className="block sm:inline sm:ml-2 text-white/40">
              Demonstration real estate listings and illustrative benchmarks only. Formal MahaRERA numbers pending verification.
            </span>
          </p>

          <div className="flex items-center gap-5 shrink-0">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/20">•</span>
            <Link to="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-white/20">•</span>
            <Link to="/sitemap" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
