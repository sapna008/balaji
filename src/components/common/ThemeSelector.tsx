import React, { useState, useRef, useEffect } from 'react';
import { Palette, Check, ChevronDown } from 'lucide-react';
import { useTheme, type ThemeId } from '../../context/ThemeContext';

export const ThemeSelector: React.FC = () => {
  const { currentTheme, setTheme, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const activeTheme = themes.find((t) => t.id === currentTheme) || themes[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border border-theme-border bg-theme-surface hover:border-theme-accent transition-all duration-200 shadow-sm"
        aria-label="Change color theme"
        title="Change Color Theme"
      >
        <span
          className="w-3.5 h-3.5 rounded-full border border-black/10 shadow-inner shrink-0"
          style={{
            background: `linear-gradient(135deg, ${activeTheme.primaryColor} 50%, ${activeTheme.accentColor} 50%)`,
          }}
        />
        <Palette className="w-3.5 h-3.5 text-theme-muted" />
        <span className="hidden sm:inline text-theme font-medium truncate max-w-[110px]">
          {activeTheme.name.split('&')[0]}
        </span>
        <ChevronDown className="w-3 h-3 text-theme-muted" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 rounded-2xl bg-theme-surface border border-theme-border shadow-2xl py-3 px-2 z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="px-3 pb-2 mb-2 border-b border-theme-border">
            <p className="text-xs font-semibold text-theme tracking-wider uppercase">
              Palette & Aesthetics
            </p>
            <p className="text-[11px] text-theme-muted">
              Select from 8 curated luxury real estate themes
            </p>
          </div>

          <div className="space-y-1 max-h-80 overflow-y-auto pr-1">
            {themes.map((theme) => {
              const isSelected = theme.id === currentTheme;
              return (
                <button
                  key={theme.id}
                  onClick={() => {
                    setTheme(theme.id as ThemeId);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left text-xs transition-all ${
                    isSelected
                      ? 'bg-theme-surface-alt font-semibold border border-theme-accent'
                      : 'hover:bg-theme-surface-alt/60 text-theme'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-5 h-5 rounded-full border border-black/15 shadow-sm shrink-0 flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${theme.primaryColor} 50%, ${theme.accentColor} 50%)`,
                      }}
                    />
                    <div>
                      <div className="text-theme font-medium text-[12px]">{theme.name}</div>
                      <div className="text-[10px] text-theme-muted">{theme.subtitle}</div>
                    </div>
                  </div>
                  {isSelected && <Check className="w-4 h-4 text-theme-accent shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
