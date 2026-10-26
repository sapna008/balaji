import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Maximize2, Bed, ArrowUpRight, ShieldCheck } from 'lucide-react';
import type { Property } from '../../types/property';

interface PropertyCardProps {
  property: Property;
  onQuickEnquire?: (property: Property) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  onQuickEnquire,
}) => {
  return (
    <article className="luxury-card group rounded-2xl overflow-hidden flex flex-col justify-between h-full bg-theme-surface border border-theme-border">
      {/* Top Image & Badges */}
      <div className="relative aspect-[16/10] overflow-hidden bg-theme-surface-alt">
        <img
          src={property.images[0] || '/assets/hero/mumbai-skyline-golden.jpg'}
          alt={property.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wide uppercase bg-theme-primary/90 text-white backdrop-blur-md border border-white/20">
            {property.category} • {property.transactionType}
          </span>
          <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wide uppercase bg-theme-accent text-white backdrop-blur-md shadow-sm">
            {property.availability}
          </span>
        </div>

        {/* Illustrative Notice Pill */}
        <div className="absolute bottom-3 left-3 z-10">
          <span className="px-2 py-0.5 rounded-md text-[9px] font-medium tracking-wider uppercase bg-black/60 text-white/80 backdrop-blur-md border border-white/10">
            Illustrative Listing
          </span>
        </div>

        {/* Price on Image Bottom Right */}
        <div className="absolute bottom-3 right-3 z-10 text-right">
          <p className="text-white text-base sm:text-lg font-bold font-display drop-shadow-md">
            {property.priceDisplay}
          </p>
          {property.pricePerSqFt && (
            <p className="text-white/80 text-[10px] drop-shadow">
              {property.pricePerSqFt}
            </p>
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center gap-1.5 text-theme-muted text-xs mb-1.5">
            <MapPin className="w-3.5 h-3.5 text-theme-accent shrink-0" />
            <span className="truncate">{property.location}</span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-theme font-display group-hover:text-theme-accent transition-colors line-clamp-1">
            <Link to={`/properties/${property.slug}`}>{property.title}</Link>
          </h3>

          <p className="text-xs text-theme-muted line-clamp-2 mt-1 leading-relaxed">
            {property.tagline}
          </p>
        </div>

        {/* Specifications Matrix */}
        <div className="pt-3 border-t border-theme-border grid grid-cols-3 gap-2 text-center text-xs text-theme">
          <div className="p-2 rounded-xl bg-theme-surface-alt/70 border border-theme-border/60">
            <div className="flex items-center justify-center gap-1 text-theme-muted text-[10px] uppercase tracking-wider mb-0.5">
              <Maximize2 className="w-3 h-3 text-theme-accent" />
              <span>Area</span>
            </div>
            <span className="font-semibold">{property.carpetAreaSqFt.toLocaleString()} sq.ft</span>
          </div>

          {property.bedrooms ? (
            <div className="p-2 rounded-xl bg-theme-surface-alt/70 border border-theme-border/60">
              <div className="flex items-center justify-center gap-1 text-theme-muted text-[10px] uppercase tracking-wider mb-0.5">
                <Bed className="w-3 h-3 text-theme-accent" />
                <span>Config</span>
              </div>
              <span className="font-semibold">{property.bedrooms} BHK</span>
            </div>
          ) : (
            <div className="p-2 rounded-xl bg-theme-surface-alt/70 border border-theme-border/60">
              <div className="flex items-center justify-center gap-1 text-theme-muted text-[10px] uppercase tracking-wider mb-0.5">
                <ShieldCheck className="w-3 h-3 text-theme-accent" />
                <span>Grade</span>
              </div>
              <span className="font-semibold">Grade A</span>
            </div>
          )}

          <div className="p-2 rounded-xl bg-theme-surface-alt/70 border border-theme-border/60">
            <div className="text-theme-muted text-[10px] uppercase tracking-wider mb-0.5">
              Zone
            </div>
            <span className="font-semibold truncate block" title={property.neighborhood}>
              {property.neighborhood}
            </span>
          </div>
        </div>

        {/* Card Actions */}
        <div className="pt-2 flex items-center gap-2">
          <Link
            to={`/properties/${property.slug}`}
            className="flex-1 py-2.5 px-4 rounded-xl bg-theme-primary text-white text-xs font-semibold text-center hover:bg-theme-primary-hover border border-theme-accent/30 transition-all flex items-center justify-center gap-1.5 shadow-sm"
          >
            <span>View Details</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-theme-accent" />
          </Link>

          {onQuickEnquire && (
            <button
              onClick={() => onQuickEnquire(property)}
              className="py-2.5 px-3.5 rounded-xl border border-theme-border bg-theme-surface-alt hover:border-theme-accent text-xs font-medium text-theme transition-all"
              title="Quick Enquiry"
            >
              Enquire
            </button>
          )}
        </div>
      </div>
    </article>
  );
};
