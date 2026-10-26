import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Compass } from 'lucide-react';
import { SEO } from '../../components/common/SEO';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="bg-theme-bg text-theme transition-colors min-h-[75vh] flex items-center justify-center py-20 px-4 text-center">
      <SEO
        title="404 — Page Not Found"
        description="The requested page could not be located on Balaji Enterprises."
      />

      <div className="max-w-md mx-auto space-y-6">
        <div className="w-20 h-20 mx-auto rounded-3xl bg-theme-surface-alt border border-theme-border flex items-center justify-center text-theme-accent">
          <Compass className="w-10 h-10 animate-spin-slow" />
        </div>

        <div className="space-y-2">
          <span className="text-4xl sm:text-6xl font-bold font-display text-theme-accent">
            404
          </span>
          <h1 className="text-2xl font-bold font-display text-theme">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
            The real estate address or listing page you are looking for may have moved, been archived, or had its URL altered.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-theme-primary text-white text-xs font-semibold hover:bg-theme-primary-hover border border-theme-accent/30 transition-all shadow-sm"
          >
            <Home className="w-4 h-4 text-theme-accent" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            to="/properties"
            className="w-full sm:w-auto px-6 py-3 rounded-full border border-theme-border text-theme text-xs font-medium hover:bg-theme-surface-alt transition-colors"
          >
            Explore Properties
          </Link>
        </div>
      </div>
    </div>
  );
};
