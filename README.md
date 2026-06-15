# Bon Temps Salon — Website

Premium luxury unisex salon website for **Bon Temps Salon**, Noida.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19 + TypeScript |
| Build Tool | Vite 7 |
| Styling | Tailwind CSS v4 + tw-animate-css |
| Animation | Framer Motion |
| Forms | React Hook Form + Zod |
| UI Components | shadcn/ui (Radix UI primitives) |
| Routing | Wouter |
| State | TanStack Query |
| Carousel | Embla Carousel |
| Icons | Lucide React + React Icons |
| Database | None (frontend-only) |
| Backend | None (frontend-only) |

---

## Folder Structure

```
bon-temps-salon/
├── public/                  # Static assets (favicon, robots.txt, images)
├── src/
│   ├── assets/
│   │   └── images/          # AI-generated transformation photos
│   ├── components/
│   │   ├── ui/              # shadcn/ui base components (50+ components)
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── TrustStats.tsx
│   │   ├── Services.tsx
│   │   ├── SignatureExperience.tsx
│   │   ├── Gallery.tsx          # Before/after image grid
│   │   ├── BeforeAfterSlider.tsx # Interactive drag-reveal comparison
│   │   ├── WhyChooseUs.tsx
│   │   ├── Testimonials.tsx
│   │   ├── InstagramShowcase.tsx
│   │   ├── Booking.tsx          # Appointment form with time slots
│   │   ├── FAQ.tsx
│   │   ├── Location.tsx
│   │   ├── CTASection.tsx
│   │   ├── Footer.tsx
│   │   └── WhatsAppButton.tsx
│   ├── hooks/
│   │   ├── use-toast.ts
│   │   └── use-mobile.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── pages/
│   │   ├── Home.tsx             # Main single-page layout
│   │   └── not-found.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css                # Tailwind v4 theme + Google Fonts
├── index.html
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── package.json
└── .env.example
```

---

## Installation & Development

### Requirements
- **Node.js** 18+ (recommend 20 LTS)
- **npm** 9+ (comes with Node.js)

### Setup

```bash
# 1. Install dependencies
npm install

# 2. Start development server (runs at http://localhost:5173)
npm run dev
```

### Production Build

```bash
# Build for production
npm run build

# Preview the production build locally
npm run preview
```

### TypeScript Check

```bash
npm run typecheck
```

---

## Environment Variables

No environment variables are required for local development. Copy `.env.example` to `.env` if you want to add analytics or email integrations.

```bash
cp .env.example .env
```

---

## Deployment — Vercel

### Option 1: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project root
vercel

# Follow the prompts:
# - Framework preset: Vite
# - Build command: npm run build
# - Output directory: dist
# - Install command: npm install
```

### Option 2: Vercel Dashboard

1. Push your project to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repository
4. Set:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **Deploy**

### Vercel Configuration (vercel.json)

Create `vercel.json` in the project root for SPA routing:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

---

## Business Details

| Detail | Value |
|--------|-------|
| Business Name | Bon Temps Salon |
| Category | Unisex Luxury Salon & Beauty Studio |
| Phone | +91 9871843877 |
| WhatsApp | https://wa.me/919871843877 |
| Address | Shop No 3, Ground Floor, Skymark One, Sector 98, Noida, UP 201304 |
| Instagram | https://www.instagram.com/bontemps.salon |
| Hours | Mon–Sat 10AM–8PM, Sun 11AM–7PM |

---

## Customisation Guide

| What to change | Where |
|----------------|-------|
| Business name / address | `src/components/Footer.tsx`, `src/components/Location.tsx` |
| Hero headline | `src/components/Hero.tsx` |
| Services list | `src/components/Services.tsx`, `src/components/Booking.tsx` |
| Testimonials | `src/components/Testimonials.tsx` |
| Colors | `src/index.css` `:root` block |
| Fonts | `src/index.css` first line + `index.html` Google Fonts link |
| Before/After images | `src/assets/images/` + `src/components/Gallery.tsx` |
| WhatsApp number | `src/components/WhatsAppButton.tsx` |

---

## Design System

| Token | Value |
|-------|-------|
| Primary (Champagne Gold) | `#D4AF37` / `hsl(46 65% 52%)` |
| Background (Matte Black) | `#111111` / `hsl(0 0% 7%)` |
| Card Background | `#1a1a1a` / `hsl(0 0% 10%)` |
| Foreground (Warm Ivory) | `#FAF7F2` / `hsl(36 33% 96%)` |
| Heading Font | Playfair Display |
| Subheading Font | Cormorant Garamond |
| Body Font | Inter |
