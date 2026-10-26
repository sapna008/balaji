import React, { useState, useEffect } from 'react';
import { Sparkles, X, ChevronRight } from 'lucide-react';

interface DevotionalInvocationProps {
  forceOpen?: boolean;
  onClose?: () => void;
}

export const DevotionalInvocation: React.FC<DevotionalInvocationProps> = ({
  forceOpen = false,
  onClose,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (forceOpen) {
      setIsOpen(true);
      return;
    }
    const hasSeen = sessionStorage.getItem('balaji_invocation_dismissed');
    if (!hasSeen) {
      setIsOpen(true);
    }
  }, [forceOpen]);

  const handleDismiss = () => {
    sessionStorage.setItem('balaji_invocation_dismissed', 'true');
    setIsOpen(false);
    if (onClose) onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Auspicious Invocation to Lord Venkateswara"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-lg bg-gradient-to-b from-[#101D35] to-[#0A1222] border border-[#C9A96E]/40 rounded-3xl shadow-2xl p-5 sm:p-8 text-center text-white overflow-hidden max-h-[92vh] overflow-y-auto">
        {/* Decorative corner temple motifs */}
        <div className="absolute top-0 left-0 w-16 h-16 sm:w-24 sm:h-24 border-t-2 border-l-2 border-[#C9A96E]/30 rounded-tl-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-24 sm:h-24 border-b-2 border-r-2 border-[#C9A96E]/30 rounded-br-3xl pointer-events-none" />

        {/* Close / Skip button */}
        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 text-white/70 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Skip invocation"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Lord Venkateswara Sacred Artwork */}
        <div className="relative mx-auto mb-4 w-20 h-20 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-[#C9A96E] shadow-xl p-1 bg-[#101D35]/50 group">
          <img
            src="/assets/devotional/balaji-sacred.jpg"
            alt="Lord Sri Venkateswara Swamy Tirupati Balaji"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Auspicious Chanting Header */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9A96E]/15 border border-[#C9A96E]/30 text-[#E5C78A] text-[10px] sm:text-xs font-medium tracking-widest uppercase mb-3">
          <Sparkles className="w-3 h-3 text-[#C9A96E]" />
          <span>Auspicious Invocation</span>
          <Sparkles className="w-3 h-3 text-[#C9A96E]" />
        </div>

        {/* Primary Sacred Mantra in Devanagari */}
        <h2 className="text-xl sm:text-3xl font-bold font-devanagari text-transparent bg-clip-text bg-gradient-to-r from-[#F7E7C4] via-[#D8BE8E] to-[#C9A96E] tracking-wide mb-2 leading-relaxed">
          ॥ ॐ श्री वेंकटेश्वराय नमः ॥
        </h2>

        {/* Mangala Shloka */}
        <div className="my-3 py-2.5 px-3 sm:px-4 bg-white/5 border border-white/10 rounded-2xl">
          <p className="text-xs sm:text-base font-devanagari text-[#F7F5EF] leading-relaxed font-medium">
            श्रियः कान्ताय कल्याणनिधये निधयेऽर्थिनाम्।
            <br />
            श्रीवेङ्कटनिवासाय श्रीनिवासाय मङ्गलम्॥
          </p>
        </div>

        {/* English Translation & Meaning */}
        <p className="text-[11px] sm:text-xs text-neutral-300 leading-relaxed mb-6 max-w-md mx-auto italic">
          "To the beloved consort of Sri Lakshmi, the reservoir of all auspiciousness and prosperity — may all glory and blessings be upon Lord Srinivasa."
        </p>

        {/* Enter Website CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5">
          <button
            onClick={handleDismiss}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#C9A96E] to-[#B8955A] text-[#101D35] font-semibold text-xs sm:text-sm hover:from-[#DFCA9B] hover:to-[#C9A96E] transition-all shadow-lg"
          >
            <span>Enter Balaji Enterprises</span>
            <ChevronRight className="w-4 h-4" />
          </button>
          <button
            onClick={handleDismiss}
            className="w-full sm:w-auto py-2 text-xs text-white/60 hover:text-white transition-colors"
          >
            Skip
          </button>
        </div>
      </div>
    </div>
  );
};
