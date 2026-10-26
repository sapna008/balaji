import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ArrowUpRight,
  Phone,
  MessageSquare,
  Home,
  Building,
  Building2,
  Compass,
  BookOpen,
  Mail,
  Palette,
  Check,
} from 'lucide-react';
import { useTheme, type ThemeId } from '../../context/ThemeContext';
import { businessConfig } from '../../config/businessConfig';

interface NavbarProps {
  onOpenEnquiryModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiryModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { currentTheme, setTheme, themes } = useTheme();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle sticky navbar styling on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home className="w-4 h-4 text-theme-accent" /> },
    { name: 'About Us', path: '/about', icon: <Building className="w-4 h-4 text-theme-accent" /> },
    { name: 'Properties', path: '/properties', icon: <Building2 className="w-4 h-4 text-theme-accent" /> },
    { name: 'Services', path: '/services', icon: <Compass className="w-4 h-4 text-theme-accent" /> },
    { name: 'Locations', path: '/locations', icon: <Compass className="w-4 h-4 text-theme-accent" /> },
    { name: 'Insights', path: '/insights', icon: <BookOpen className="w-4 h-4 text-theme-accent" /> },
    { name: 'Contact', path: '/contact', icon: <Mail className="w-4 h-4 text-theme-accent" /> },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 w-full ${
        isScrolled
          ? 'bg-theme-surface/95 backdrop-blur-md shadow-premium border-b border-theme-border'
          : 'bg-theme-surface border-b border-theme-border/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2 group focus:outline-none">
            <div className="relative h-9 sm:h-12 flex items-center">
              <img
                src="/assets/branding/balaji-logo.png"
                alt="Balaji Enterprise Real Estate Consultancy Mumbai"
                className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-2 text-xs xl:text-sm font-medium tracking-wide transition-all rounded-lg ${
                    isActive
                      ? 'text-theme-accent font-semibold bg-theme-surface-alt'
                      : 'text-theme hover:text-theme-accent hover:bg-theme-surface-alt/40'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Right Controls (Enquire CTA) */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenEnquiryModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-theme-primary text-white text-xs font-semibold hover:bg-theme-primary-hover border border-theme-accent/30 transition-all shadow-sm hover:shadow-md hover:border-theme-accent"
            >
              <span>Enquire Now</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-theme-accent" />
            </button>
          </div>

          {/* Mobile Right Controls (Border-free burger menu) */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 sm:p-2.5 rounded-xl text-theme hover:bg-theme-surface-alt transition-colors touch-manipulation focus:outline-none"
              aria-label="Open mobile navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* FULL-SCREEN MOBILE NAVIGATION DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex flex-col justify-end animate-in fade-in duration-200">
          <div className="w-full bg-theme-surface border-t border-theme-border rounded-t-3xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden">
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-theme-border">
              <div className="h-8 flex items-center">
                <img
                  src="/assets/branding/balaji-logo.png"
                  alt="Balaji Enterprise"
                  className="h-full w-auto object-contain"
                />
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full border border-theme-border bg-theme-surface-alt text-theme hover:bg-theme-surface transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Navigation Body */}
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-5">
              {/* Primary Links */}
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-theme-surface-alt text-theme-accent font-semibold border border-theme-accent/30'
                          : 'text-theme hover:bg-theme-surface-alt/60'
                      }`
                    }
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </NavLink>
                ))}
              </div>

              {/* Mobile Palette Theme Switcher */}
              <div className="p-4 rounded-2xl bg-theme-surface-alt border border-theme-border space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold text-theme">
                  <div className="flex items-center gap-2">
                    <Palette className="w-4 h-4 text-theme-accent" />
                    <span>Choose Color Theme</span>
                  </div>
                  <span className="text-[11px] text-theme-muted capitalize">
                    {currentTheme.replace('-', ' ')}
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2 pt-1">
                  {themes.map((t) => {
                    const isSelected = t.id === currentTheme;
                    return (
                      <button
                        key={t.id}
                        onClick={() => setTheme(t.id as ThemeId)}
                        className={`flex flex-col items-center gap-1 p-2 rounded-xl border text-[10px] text-center transition-all ${
                          isSelected
                            ? 'border-theme-accent bg-theme-surface shadow-sm font-semibold'
                            : 'border-transparent bg-theme-surface/50 text-theme-muted'
                        }`}
                      >
                        <span
                          className="w-5 h-5 rounded-full border border-black/15 shadow-sm relative flex items-center justify-center"
                          style={{
                            background: `linear-gradient(135deg, ${t.primaryColor} 50%, ${t.accentColor} 50%)`,
                          }}
                        >
                          {isSelected && <Check className="w-3 h-3 text-white drop-shadow" />}
                        </span>
                        <span className="truncate max-w-[55px]">{t.name.split(' ')[0]}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-1">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEnquiryModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-theme-primary text-white text-sm font-semibold shadow-md border border-theme-accent/40"
                >
                  <span>Enquire Now</span>
                  <ArrowUpRight className="w-4 h-4 text-theme-accent" />
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${businessConfig.contact.phone}`}
                    className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl border border-theme-border bg-theme-surface text-xs font-semibold text-theme"
                  >
                    <Phone className="w-3.5 h-3.5 text-theme-accent" />
                    <span>Call Desk</span>
                  </a>
                  <a
                    href={businessConfig.socialLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl border border-[#25D366]/30 bg-[#25D366]/10 text-xs font-semibold text-[#1fa851]"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
