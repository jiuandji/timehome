# TimeHome Realty — Premium Real Estate Platform

> Luxury real estate agency on Costa Brava — world-class multilingual website

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Styling:** CSS Modules + CSS Custom Properties
- **CMS:** Sanity.io
- **Images:** Cloudinary
- **Maps:** Mapbox GL JS
- **i18n:** next-intl (5 languages: ES, EN, RU, PT, ZH)
- **Hosting:** Vercel
- **Analytics:** Plausible (GDPR-compliant)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── app/
│   ├── [locale]/           # Locale-based routing
│   │   ├── layout.tsx      # Root layout per locale
│   │   ├── page.tsx        # Homepage
│   │   ├── properties/     # Property listings
│   │   ├── property/[slug] # Property detail
│   │   ├── areas/          # Area guides
│   │   ├── about/          # About page
│   │   ├── contact/        # Contact page
│   │   └── blog/           # Blog
│   └── api/                # API routes
├── components/
│   ├── ui/                 # Atoms: buttons, inputs, badges
│   ├── layout/             # Organisms: navbar, footer, sidebar
│   └── sections/           # Sections: hero, testimonials, features
├── lib/
│   ├── sanity/             # Sanity client & queries
│   ├── cloudinary/         # Image optimization
│   └── utils/              # Helpers
├── styles/
│   ├── globals.css         # Design tokens & base styles
│   └── variables.css       # CSS custom properties
├── messages/               # i18n translations
│   ├── en.json
│   ├── es.json
│   ├── ru.json
│   ├── pt.json
│   └── zh.json
└── types/
    └── property.ts         # TypeScript types
```

## Design System

- **Primary:** Navy `#1B2838` + Gold `#C9A96E`
- **Typography:** Playfair Display (headings) + Inter (body)
- **Grid:** 12 columns, max-width 1440px
- **Base unit:** 8px

## Performance Budget

| Metric | Target |
|---|---|
| Lighthouse Score | ≥ 95 |
| LCP | < 1.5s |
| CLS | < 0.05 |
| Page Weight | < 1.5MB |

## Languages

| Code | Language | Status |
|---|---|---|
| es | Español | Primary |
| en | English | Active |
| ru | Русский | Active |
| pt | Português | Active |
| zh | 中文 | Active |

## License
Private — TimeHome Realty © 2026
