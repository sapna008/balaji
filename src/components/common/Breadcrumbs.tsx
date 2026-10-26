import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-2 sm:py-3 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <ol className="flex items-center flex-nowrap overflow-x-auto scrollbar-none gap-1.5 text-xs text-theme-muted">
        <li className="flex items-center gap-1 shrink-0">
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-theme-accent transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>

        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5 shrink-0">
              <ChevronRight className="w-3 h-3 text-theme-muted/60 shrink-0" />
              {isLast || !item.path ? (
                <span className="font-semibold text-theme truncate max-w-[140px] sm:max-w-none">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="hover:text-theme-accent transition-colors truncate max-w-[110px] sm:max-w-none"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
