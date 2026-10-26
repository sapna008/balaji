import React from 'react';
import { MessageSquare } from 'lucide-react';
import { businessConfig } from '../../config/businessConfig';

export const WhatsAppSticky: React.FC = () => {
  return (
    <aside
      aria-label="Direct WhatsApp Advisory"
      className="hidden lg:flex fixed bottom-6 right-6 z-30 items-center group"
    >
      <div className="mr-3 px-3.5 py-1.5 rounded-full bg-theme-surface border border-theme-border shadow-elevated text-xs font-medium text-theme opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Chat with Property Advisor
      </div>
      <a
        href={businessConfig.socialLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Balaji Enterprises on WhatsApp"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 ring-4 ring-[#25D366]/20"
      >
        <MessageSquare className="w-6 h-6 fill-current" />
      </a>
    </aside>
  );
};
