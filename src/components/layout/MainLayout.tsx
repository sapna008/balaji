import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { AnnouncementBar } from './AnnouncementBar';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { WhatsAppSticky } from '../common/WhatsAppSticky';
import { MobileBottomBar } from './MobileBottomBar';
import { EnquiryModal } from '../forms/EnquiryModal';
import { DevotionalInvocation } from '../common/DevotionalInvocation';

export const MainLayout: React.FC = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isBlessingOpen, setIsBlessingOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-theme-bg text-theme transition-colors duration-300 w-full overflow-x-hidden">
      {/* Top Auspicious Announcement Bar */}
      <AnnouncementBar onOpenBlessingModal={() => setIsBlessingOpen(true)} />

      {/* Main Navigation */}
      <Navbar onOpenEnquiryModal={() => setIsEnquiryOpen(true)} />

      {/* Main Page Route Content (with bottom padding on mobile to accommodate bottom dock) */}
      <main className="flex-1 pb-24 lg:pb-0 w-full overflow-x-hidden">
        <Outlet context={{ openEnquiry: () => setIsEnquiryOpen(true) }} />
      </main>

      {/* Comprehensive Footer */}
      <Footer onOpenBlessingModal={() => setIsBlessingOpen(true)} />

      {/* Sticky WhatsApp Floating CTA (Desktop only) */}
      <WhatsAppSticky />

      {/* Mobile Bottom Quick Navigation Dock (Mobile only) */}
      <MobileBottomBar onOpenEnquiry={() => setIsEnquiryOpen(true)} />

      {/* Global Quick Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />

      {/* Devotional Invocation Modal (First Visit or Click) */}
      <DevotionalInvocation
        forceOpen={isBlessingOpen}
        onClose={() => setIsBlessingOpen(false)}
      />
    </div>
  );
};
