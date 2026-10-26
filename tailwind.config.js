/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          DEFAULT: "var(--theme-text)",
          muted: "var(--theme-text-muted)",
          subtle: "var(--theme-text-subtle)",
          bg: "var(--theme-bg)",
          surface: "var(--theme-surface)",
          "surface-alt": "var(--theme-surface-alt)",
          border: "var(--theme-border)",
          "border-subtle": "var(--theme-border-subtle)",
          primary: "var(--theme-primary)",
          "primary-hover": "var(--theme-primary-hover)",
          "primary-light": "var(--theme-primary-light)",
          secondary: "var(--theme-secondary)",
          accent: "var(--theme-accent)",
          "accent-hover": "var(--theme-accent-hover)",
          "accent-light": "var(--theme-accent-light)",
          "accent-border": "var(--theme-accent-border)",
          "on-primary": "var(--theme-text-on-primary)",
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Cinzel"', 'serif'],
        editorial: ['"Cormorant Garamond"', 'serif'],
        devanagari: ['"Noto Serif Devanagari"', 'serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(0, 0, 0, 0.04)',
        'premium': '0 10px 30px -10px rgba(16, 29, 53, 0.08), 0 4px 6px -2px rgba(16, 29, 53, 0.03)',
        'elevated': '0 20px 40px -15px rgba(16, 29, 53, 0.12), 0 0 1px 1px rgba(201, 169, 110, 0.2)',
        'glow-gold': '0 0 25px rgba(201, 169, 110, 0.25)',
      }
    },
  },
  plugins: [],
}
