import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeId =
  | 'royal-blue'
  | 'ivory-antique-gold'
  | 'black-luxury-gold'
  | 'forest-green'
  | 'maroon-gold'
  | 'teal-white'
  | 'royal-purple'
  | 'charcoal-orange';

export interface ThemeOption {
  id: ThemeId;
  name: string;
  subtitle: string;
  primaryColor: string;
  accentColor: string;
  isDark?: boolean;
}

export const THEMES: ThemeOption[] = [
  {
    id: 'royal-blue',
    name: 'Royal Blue & Champagne Gold',
    subtitle: 'Classic Signature',
    primaryColor: '#101D35',
    accentColor: '#C9A96E',
  },
  {
    id: 'ivory-antique-gold',
    name: 'Ivory & Antique Gold',
    subtitle: 'Warm Heritage',
    primaryColor: '#282820',
    accentColor: '#B8955A',
  },
  {
    id: 'black-luxury-gold',
    name: 'Black & Luxury Gold',
    subtitle: 'Midnight Luxury',
    primaryColor: '#151515',
    accentColor: '#D4AF66',
    isDark: true,
  },
  {
    id: 'forest-green',
    name: 'Forest Green & Beige',
    subtitle: 'Botanical Harmony',
    primaryColor: '#173C32',
    accentColor: '#B58C53',
  },
  {
    id: 'maroon-gold',
    name: 'Maroon & Gold',
    subtitle: 'Imperial Elegance',
    primaryColor: '#581C2C',
    accentColor: '#C8A56A',
  },
  {
    id: 'teal-white',
    name: 'Teal & White',
    subtitle: 'Coastal Precision',
    primaryColor: '#075B60',
    accentColor: '#C69A56',
  },
  {
    id: 'royal-purple',
    name: 'Royal Purple & Gold',
    subtitle: 'Regal Majesty',
    primaryColor: '#39245B',
    accentColor: '#D0B16F',
  },
  {
    id: 'charcoal-orange',
    name: 'Charcoal & Burnt Orange',
    subtitle: 'Contemporary Modern',
    primaryColor: '#252525',
    accentColor: '#C87535',
  },
];

interface ThemeContextType {
  currentTheme: ThemeId;
  setTheme: (theme: ThemeId) => void;
  themes: ThemeOption[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = 'balaji_enterprises_theme';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentThemeState] = useState<ThemeId>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(THEME_STORAGE_KEY) as ThemeId | null;
      if (stored && THEMES.some((t) => t.id === stored)) {
        return stored;
      }
    }
    return 'royal-blue';
  });

  const setTheme = (theme: ThemeId) => {
    setCurrentThemeState(theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
    document.documentElement.setAttribute('data-theme', theme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
