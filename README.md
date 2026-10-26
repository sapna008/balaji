# BALAJI ENTERPRISES — PREMIUM REAL ESTATE PLATFORM

> **"Your Vision. Our Expertise. The Right Property."**  
> Premier residential and commercial real estate consultancy based in Mumbai, Maharashtra, India.

---

## 🏛️ Executive Overview

**Balaji Enterprises** is a modern, production-grade real estate web application built for a premier Mumbai property consultancy. The digital experience pairs a reverent Indian cultural identity (dedicated auspicious invocation to Lord Sri Venkateswara / Balaji) with institutional-grade corporate polish, editorial typography, architectural photography, and interactive property discovery tools.

The platform specializes in:
- **Residential Luxury Homes**: Penthouses, duplexes, and sea-facing apartments in Worli, Marine Drive, Bandra West, and Malabar Hill.
- **Commercial & Corporate Real Estate**: Grade-A corporate headquarters, IT park floors, and executive boardroom suites in Bandra Kurla Complex (BKC) and Lower Parel.
- **High-Street Retail Showrooms**: Flagship retail pavilions and showrooms with prominent frontages.
- **High-Yield Property Investments**: Pre-leased commercial assets, capital appreciation corridors, and strategic land advisory.

---

## 🎨 8 Professional Luxury Color Themes

The platform features a live theme engine powered by CSS custom properties and persisted in `localStorage`. Visitors can switch themes via the palette selector in the navbar:

| # | Theme Name | Primary Tone | Accent Tone | Aesthetic Context |
|---|------------|--------------|-------------|-------------------|
| 1 | **Royal Blue & Champagne Gold** *(Default)* | Midnight Navy (`#101D35`) | Champagne Gold (`#C9A96E`) | Signature luxury real estate aesthetic |
| 2 | **Ivory & Antique Gold** | Charcoal (`#282820`) | Antique Gold (`#B8955A`) | Warm heritage & architectural elegance |
| 3 | **Black & Luxury Gold** | Obsidian (`#151515`) | Metallic Gold (`#D4AF66`) | High-contrast midnight luxury |
| 4 | **Forest Green & Beige** | Forest Green (`#173C32`) | Bronze (`#B58C53`) | Organic balance & natural serenity |
| 5 | **Maroon & Gold** | Deep Maroon (`#581C2C`) | Muted Gold (`#C8A56A`) | Imperial regality & tradition |
| 6 | **Teal & White** | Deep Teal (`#075B60`) | Warm Gold (`#C69A56`) | Coastal precision & contemporary clarity |
| 7 | **Royal Purple & Gold** | Royal Purple (`#39245B`) | Soft Gold (`#D0B16F`) | Regal prestige & sophistication |
| 8 | **Charcoal & Burnt Orange** | Charcoal (`#252525`) | Burnt Orange (`#C87535`) | Modern metropolitan corporate |

---

## 🪔 Auspicious Tirupati Balaji Invocation

The homepage and announcement ribbon feature a traditional Sanskrit invocation to Lord Sri Venkateswara rendered in Devanagari typography (`Noto Serif Devanagari`) with subtle gold radiance:

```
॥ ॐ श्री वेंकटेश्वराय नमः ॥

श्रियः कान्ताय कल्याणनिधये निधयेऽर्थिनाम्।
श्रीवेङ्कटनिवासाय श्रीनिवासाय मङ्गलम्॥
```

- **First-Visit Modal**: Automatically greets new visitors with a respectful blessing card and can be dismissed immediately with "Enter Balaji Enterprises" or "Skip".
- **Ribbon Access**: Can be reopened anytime by clicking the Sanskrit invocation in the top announcement bar.
- **Respectful Transition**: Balances authentic Indian cultural roots with corporate real estate professionalism without overwhelming business visitors.

---

## 🗺️ Complete Website Routes

| Route | Page Name | Features & Highlights |
|-------|-----------|------------------------|
| `/` | **Home** | Hero with Mumbai coastal skyline, interactive search interface, category highlights, about teaser, featured property cards, services overview, why choose us pillars, Mumbai micro-market showcase, client perspectives (demo), latest insights, and CTA |
| `/about` | **About Us** | Brand philosophy, vision, mission, core values, and 5-step advisory workflow |
| `/properties` | **Property Listings** | Multi-parameter search, category filters, buy/rent filters, neighborhood selector, BHK filters, sorting, and Grid / List view toggle |
| `/properties/:slug` | **Property Details** | High-res image gallery, key specifications grid, architectural highlights, amenities, WhatsApp direct link, private viewing form, and similar properties |
| `/services` | **Services** | 6 dedicated real estate practices with target client profiles, scope of advisory, and workflows |
| `/locations` | **Locations Guide** | South Mumbai, Bandra/Khar, BKC & Lower Parel, Powai & Vikhroli, Andheri & Goregaon, and Thane & Navi Mumbai |
| `/insights` | **Real Estate Insights** | Research articles, legal due diligence checklists, and commercial leasing guides with reading times |
| `/insights/:slug` | **Article View** | Long-form reading experience with sticky table of contents, callouts, and related research |
| `/contact` | **Contact Us** | Validated requirement submission form, telephone advisory desk, direct WhatsApp link, office hours, and interactive Google Maps embed |
| `/privacy-policy` | **Privacy Policy** | Client data confidentiality and fiduciary protection standards |
| `/terms-and-conditions` | **Terms & Conditions** | Professional engagement terms, MahaRERA notices, and disclaimer guidelines |
| `/sitemap` | **Sitemap** | Full directory of all public pages, properties, and micro-markets |

---

## ⚙️ Centralized Configuration Guide

All business details, phone numbers, WhatsApp links, and office address placeholders are managed in a single file:

```typescript
// File: src/config/businessConfig.ts
export const businessConfig = {
  name: "Balaji Enterprises",
  legalName: "Balaji Enterprises Real Estate Consultancy",
  tagline: "Real Estate. Redefined.",
  secondaryTagline: "Divine Blessings. Trusted Relationships. Lasting Value.",
  promise: "Your Vision. Our Expertise. The Right Property.",
  primaryLocation: "Mumbai, Maharashtra, India",
  contact: {
    phone: "+919876543210", 
    phoneDisplay: "+91 98765 43210 (Direct Consultancy Desk)",
    whatsapp: "919876543210",
    email: "consult@balajienterprisesmumbai.com",
  },
  office: {
    addressLine1: "[Office Suite / Tower Name Pending Verification]",
    addressLine2: "Bandra Kurla Complex (BKC) / Lower Parel Axis",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400051",
    googleMapsEmbedUrl: "...",
  },
  // ...
};
```

Update this single configuration file whenever verified corporate addresses, phones, or regulatory numbers are provided.

---

## 📁 Project Asset Organization

All media assets are stored cleanly inside `public/assets/`:

```
public/
├── assets/
│   ├── branding/
│   │   └── balaji-logo.png          # Official Balaji Enterprise identity
│   ├── devotional/
│   │   └── balaji-sacred.jpg        # Sacred Lord Venkateswara artwork
│   ├── hero/
│   │   ├── mumbai-skyline-golden.jpg# Coastal Mumbai skyline at sunset
│   │   └── bandra-worli-sealink.jpg # Bandra-Worli Sea Link twilight
│   ├── properties/
│   │   ├── luxury-penthouse-worli.jpg
│   │   ├── corporate-office-bkc.jpg
│   │   ├── luxury-retail-showroom.jpg
│   │   ├── luxury-tower-exterior.jpg
│   │   ├── grand-entrance-lobby.jpg
│   │   └── luxury-bedroom-marine-drive.jpg
│   ├── locations/
│   │   ├── south-mumbai.jpg
│   │   ├── bandra-khar.jpg
│   │   ├── powai-vikhroli.jpg
│   │   ├── andheri-goregaon.jpg
│   │   └── thane.jpg
│   └── editorial/
│       └── property-consultation.jpg# Private advisory session
├── favicon.svg                      # Custom vector emblem favicon
├── robots.txt                       # Search engine crawler directives
└── sitemap.xml                      # XML sitemap for SEO discovery
```

---

## 🚀 Development & Build Instructions

### Prerequisites
- Node.js `v18.x` or higher (tested on Node `v24.x`)
- npm `v9.x` or higher

### Install Dependencies
```bash
npm install --legacy-peer-deps
```

### Start Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### Run Production Build
```bash
npm run build
```
Creates an optimized static bundle in `dist/`.

### Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deployment Guidelines

The project outputs static web assets in `dist/` that can be deployed to any modern hosting environment:

### Vercel
```bash
npx vercel deploy --prod
```

### Netlify
Add `public/_redirects` for Single-Page Application routing:
```
/*    /index.html   200
```
Deploy via Netlify CLI:
```bash
npx netlify deploy --prod --dir=dist
```

### Nginx (Custom VPS)
```nginx
server {
    listen 80;
    server_name balajienterprisesmumbai.com www.balajienterprisesmumbai.com;
    root /var/www/balaji/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

---

## ⚖️ Regulatory & Demonstration Notice
All property listings, pricing benchmarks, and floor plans displayed on this website are illustrative demonstration assets designed for platform evaluation. Formal MAHARERA registration numbers and verified corporate credentials will be updated upon regulatory submission.
