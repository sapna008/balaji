import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Building2, Phone, MessageSquare, Send } from 'lucide-react';
import { businessConfig } from '../../config/businessConfig';

interface MobileBottomBarProps {
  onOpenEnquiry: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenEnquiry }) => {
  return (
    <nav
      aria-label="Mobile Quick Action Dock"
      className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-theme-surface border-t border-theme-border shadow-[0_-4px_25px_rgba(0,0,0,0.15)] pb-[env(safe-area-inset-bottom,0px)]"
    >
      <div className="grid grid-cols-5 h-16 max-w-md mx-auto items-center px-2">
        {/* Home */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center gap-1 text-[10px] font-semibold transition-colors py-1 ${
              isActive ? 'text-theme-accent' : 'text-theme-muted hover:text-theme'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <div className={`p-1 rounded-lg ${isActive ? 'bg-theme-surface-alt' : ''}`}>
                <Home className="w-5 h-5" />
              </div>
              <span className="tracking-tight">Home</span>
            </>
          )}
        </NavLink>

        {/* Properties */}
        <NavLink
          to="/properties"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center gap-1 text-[10px] font-semibold transition-colors py-1 ${
              isActive ? 'text-theme-accent' : 'text-theme-muted hover:text-theme'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <div className={`p-1 rounded-lg ${isActive ? 'bg-theme-surface-alt' : ''}`}>
                <Building2 className="w-5 h-5" />
              </div>
              <span className="tracking-tight">Listings</span>
            </>
          )}
        </NavLink>

        {/* Quick Enquire Floating Button */}
        <button
          onClick={onOpenEnquiry}
          className="flex flex-col items-center justify-center -mt-5 group"
          title="Quick Enquiry"
          type="button"
        >
          <div className="w-12 h-12 rounded-full bg-theme-primary text-white flex items-center justify-center shadow-lg border-2 border-theme-accent group-active:scale-95 transition-transform">
            <Send className="w-5 h-5 text-theme-accent" />
          </div>
          <span className="text-[10px] font-bold text-theme-accent mt-0.5">Enquire</span>
        </button>

        {/* Phone Call */}
        <a
          href={`tel:${businessConfig.contact.phone}`}
          className="flex flex-col items-center justify-center gap-1 text-[10px] font-semibold text-theme-muted hover:text-theme transition-colors py-1"
        >
          <div className="p-1 rounded-lg">
            <Phone className="w-5 h-5 text-theme-accent" />
          </div>
          <span className="tracking-tight">Call</span>
        </a>

        {/* WhatsApp Direct */}
        <a
          href={businessConfig.socialLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 text-[10px] font-semibold text-[#25D366] hover:brightness-110 transition-colors py-1"
        >
          <div className="p-1 rounded-lg bg-[#25D366]/10">
            <MessageSquare className="w-5 h-5" />
          </div>
          <span className="tracking-tight">WhatsApp</span>
        </a>
      </div>
    </nav>
  );
};
