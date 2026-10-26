import React from 'react';
import { Phone, Mail, MessageSquare } from 'lucide-react';
import { businessConfig } from '../../config/businessConfig';

interface AnnouncementBarProps {
  onOpenBlessingModal?: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({
  onOpenBlessingModal,
}) => {
  return (
    <aside
      aria-label="Announcement & Auspicious Invocation"
      className="bg-theme-secondary text-white/90 text-[10px] sm:text-xs py-1.5 px-3 sm:px-4 border-b border-white/10 transition-colors w-full"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        {/* Sanskrit Auspicious Invocation */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            onClick={onOpenBlessingModal}
            className="group flex items-center gap-1 text-theme-accent hover:text-white transition-colors"
            title="Click to view full Auspicious Invocation to Lord Venkateswara"
          >
            <span className="font-devanagari font-semibold tracking-wide text-[11px] sm:text-xs whitespace-nowrap">
              ॥ ॐ श्री वेंकटेश्वराय नमः ॥
            </span>
          </button>
          <span className="hidden md:inline text-white/30">|</span>
          <span className="hidden md:inline text-white/70 italic text-[11px] truncate">
            {businessConfig.secondaryTagline}
          </span>
        </div>

        {/* Quick Contact & WhatsApp on Mobile / Desktop */}
        <div className="flex items-center gap-3 sm:gap-4 text-white/80 shrink-0">
          <a
            href={`tel:${businessConfig.contact.phone}`}
            className="hidden sm:flex items-center gap-1 hover:text-white transition-colors"
          >
            <Phone className="w-3 h-3 text-theme-accent" />
            <span className="hidden lg:inline">{businessConfig.contact.phoneDisplay.split('(')[0]}</span>
            <span className="lg:hidden">{businessConfig.contact.phone}</span>
          </a>
          <span className="hidden sm:inline text-white/30">•</span>
          <a
            href={`mailto:${businessConfig.contact.email}`}
            className="hidden md:flex items-center gap-1 hover:text-white transition-colors"
          >
            <Mail className="w-3 h-3 text-theme-accent" />
            <span>{businessConfig.contact.email}</span>
          </a>
          <a
            href={businessConfig.socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[#25D366] hover:text-[#2ee873] font-medium transition-colors text-[10px] sm:text-xs"
          >
            <MessageSquare className="w-2.5 h-2.5 sm:hidden" />
            <span>WhatsApp Advisory</span>
          </a>
        </div>
      </div>
    </aside>
  );
};
