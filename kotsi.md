# Small Street Photography by Baraza — Website Specification

## 1. Project Overview

A static marketing website for **Small Street Photography by Baraza**, a South African photography studio founded and led by **Letlhogonolo Kotsi**. The site serves as the brand's digital storefront — showcasing portfolio work, services, and contact channels — and is the primary lead-generation surface (driving WhatsApp/phone enquiries).

### 1.1 Brand Positioning

- **Tagline:** *"We don't just take pictures, we capture legends."*
- **Sub-tagline:** *Capturing real moments. Creating timeless memories.*
- **Slogan:** *We capture legends.*
- **Voice:** Confident, warm, story-driven, local. Speaks to milestone moments — weddings, graduations, birthdays, tombstone unveilings.
- **Visual identity:** Editorial magazine aesthetic — torn-paper textures, gold/amber accents on black, script + bold sans typography mix.

### 1.2 Business Details

| Field | Value |
|---|---|
| Business Name | Small Street Photography by Baraza |
| Founder & Lead Photographer | Letlhogonolo Kotsi |
| Location | Based in Town (South Africa) |
| WhatsApp | 062 203 0185 |
| Call | 061 369 3823 |
| Social | Facebook & Instagram — *Small Street Photography by Baraza* |

### 1.3 Services

1. Wedding Photoshoot
2. Bridal Shower
3. Graduations
4. Birthday Photoshoot
5. Tombstones (unveilings / memorial photography)

### 1.4 Goals

- Convert visitors into WhatsApp/phone enquiries (primary KPI).
- Rank locally for "[city] wedding photographer", "tombstone unveiling photographer", "graduation photographer South Africa", etc.
- Load fast on mobile networks (3G/4G common in target market).
- Communicate brand premium-ness despite being a static site.

### 1.5 Non-Goals (v1)

- No online booking / payments.
- No client login / private gallery delivery.
- No blog (deferred to v2).
- No e-commerce.

---

## 2. Tech Stack

| Layer | Choice | Rationale |
|---|---|---|
| Framework | **Next.js 15+ (App Router)** | SSG, file-based routing, first-class SEO via Metadata API. |
| Language | **TypeScript (strict)** | Type safety, consistency with preferred stack. |
| Styling | **Tailwind CSS v4** + CSS variables for design tokens | Utility-first, easy responsive, small bundle. |
| UI Primitives | **shadcn/ui** (selective) | Accessible button, dialog, sheet primitives only. |
| Icons | **lucide-react** | Tree-shakable, consistent. |
| Fonts | **next/font** (self-hosted) — `Playfair Display` (display), `Inter` (body), `Caveat` (script accents) | Layout-shift-free, performant. |
| Image | **next/image** | Automatic AVIF/WebP, responsive `sizes`, lazy loading. |
| Animation | **Framer Motion** (light usage only) | Subtle entrance animations; respects `prefers-reduced-motion`. |
| Forms (optional contact form) | **React Hook Form** + **Zod** + **Resend** | Familiar stack; transactional email to studio inbox. |
| Analytics | **Vercel Analytics** + **Vercel Speed Insights** | Privacy-friendly, zero-config. |
| Hosting | **Vercel** (static export or ISR) | Edge CDN, image optimization, automatic HTTPS. |
| Linting | ESLint + Prettier + `eslint-config-next` | Code consistency. |

### 2.1 Build Mode

Use **`output: 'export'`** for fully static output unless the contact form requires a server action — in which case use default SSG with selective server routes.

---

## 3. Information Architecture

### 3.1 Routes

```
/                     Home (single-page experience with anchored sections)
/services             Detailed services page (one section per service)
/portfolio            Gallery grid, filterable by category
/portfolio/[slug]     Optional individual shoot page (v1.1)
/about                Founder story, philosophy, behind-the-scenes
/contact              Contact form + WhatsApp/Call CTAs + map
/not-found            Custom 404
```

### 3.2 Home Page Sections (top → bottom)

1. **Hero** — full-bleed image (founder portrait from poster as inspiration), logo, tagline, primary CTAs (WhatsApp + Call), scroll cue.
2. **Intro / Manifesto** — *"Stories live in the details"* block in script + body copy.
3. **Services strip** — 5 service cards with icons + short descriptions, link to `/services`.
4. **Featured Portfolio** — masonry grid of 6–9 hero images across categories, link to `/portfolio`.
5. **About teaser** — founder photo + 2-paragraph intro, link to `/about`.
6. **Testimonials** — 3 client quotes (carousel on mobile, grid on desktop).
7. **Contact CTA band** — bold black + gold band with WhatsApp/Call buttons.
8. **Footer** — social links, copyright, sitemap links.

---

## 4. Design System

### 4.1 Color Tokens

Defined as CSS variables in `globals.css` and exposed to Tailwind via `@theme`.

```css
--color-ink: #0a0a0a;        /* near-black background */
--color-bone: #f5f1ea;       /* off-white paper */
--color-gold: #d4a017;       /* primary accent (from poster) */
--color-gold-bright: #f5b800;/* hover/active accent */
--color-muted: #6b6b6b;      /* secondary text */
--color-stone: #1a1a1a;      /* card surfaces on dark */
```

### 4.2 Typography Scale

| Token | Font | Use |
|---|---|---|
| `font-display` | Playfair Display 700 | H1, H2, hero headlines |
| `font-script` | Caveat 500 | "Letlhogonolo Kotsi" signatures, accent words |
| `font-sans` | Inter 400/500/600 | Body, buttons, navigation |

Type scale (mobile → desktop, fluid via `clamp()`):
- Display: `clamp(2.5rem, 7vw, 5rem)`
- H1: `clamp(2rem, 5vw, 3.5rem)`
- H2: `clamp(1.5rem, 4vw, 2.5rem)`
- Body: `1rem` / `1.125rem`

### 4.3 Spacing & Layout

- 4px base unit (Tailwind default).
- Max content width: `1280px` (`max-w-7xl`).
- Section vertical padding: `py-16 md:py-24 lg:py-32`.
- Consistent gutter: `px-4 sm:px-6 lg:px-8`.

### 4.4 Component Patterns (Reusable)

```
components/
  layout/
    Header.tsx           # sticky, transparent → solid on scroll
    Footer.tsx
    Container.tsx        # max-width + padding wrapper
    Section.tsx          # standard <section> with id + spacing
  ui/                    # shadcn primitives
    button.tsx
    sheet.tsx            # mobile nav drawer
  sections/
    Hero.tsx
    Manifesto.tsx
    ServicesStrip.tsx
    FeaturedPortfolio.tsx
    AboutTeaser.tsx
    Testimonials.tsx
    ContactBand.tsx
  shared/
    ServiceCard.tsx
    PortfolioImage.tsx   # wraps next/image with aspect-ratio
    WhatsAppButton.tsx   # tracks click event
    CallButton.tsx
    SocialIcons.tsx
    ScriptAccent.tsx     # renders gold script text
```

Every section accepts an `id` prop for anchor linking. Every interactive element has a discriminated variant prop (`primary | secondary | ghost`).

---

## 5. SEO Requirements (Critical)

### 5.1 Metadata API

Every route exports a typed `metadata` (or `generateMetadata`) object covering:

- `title` (template: `%s | Small Street Photography by Baraza`)
- `description` (≤155 chars, unique per page, keyword-rich)
- `keywords` (local + service combinations)
- `alternates.canonical`
- `openGraph` — `title`, `description`, `url`, `siteName`, `images[]` (1200×630), `locale: 'en_ZA'`, `type`
- `twitter` — `card: 'summary_large_image'`, image, title, description
- `robots` — `index: true, follow: true`

### 5.2 Structured Data (JSON-LD)

Inject via a typed `<StructuredData />` component in the root layout and per-page where relevant.

**Global** (root layout):
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://smallstreetphotography.co.za/#business",
  "name": "Small Street Photography by Baraza",
  "image": "https://.../og-image.jpg",
  "founder": { "@type": "Person", "name": "Letlhogonolo Kotsi" },
  "telephone": "+27613693823",
  "address": { "@type": "PostalAddress", "addressCountry": "ZA" },
  "sameAs": ["https://facebook.com/...", "https://instagram.com/..."],
  "priceRange": "$$"
}
```

**Per-service pages:** `Service` schema with `provider` pointing to `@id` above.

**Home:** Additionally `WebSite` schema with `potentialAction` (SearchAction if site search added later).

### 5.3 Technical SEO Checklist

- [ ] `app/sitemap.ts` — dynamic sitemap covering all routes + portfolio items.
- [ ] `app/robots.ts` — allow all, point to sitemap.
- [ ] `app/icon.tsx` and `app/apple-icon.tsx` for favicons.
- [ ] `app/opengraph-image.tsx` — dynamic OG image per route using `ImageResponse`.
- [ ] Semantic HTML: one `<h1>` per page, logical heading order, `<nav>`, `<main>`, `<article>`, `<section>` used correctly.
- [ ] All images have descriptive `alt` text (never decorative-empty unless truly decorative).
- [ ] Internal linking: every service card links to `/services#service-slug`; portfolio items link to category pages.
- [ ] Human-readable URLs (kebab-case slugs).
- [ ] HTTPS only; canonical URLs always absolute.
- [ ] `lang="en-ZA"` on `<html>`.
- [ ] No client-side-only content for above-the-fold copy.
- [ ] Lighthouse SEO score target: **100**.

### 5.4 Local SEO

- Mentions of South Africa, target cities (e.g., Pretoria, Johannesburg, Gauteng) in copy where natural.
- Google Business Profile (off-site task) linked from contact page.
- Schema `areaServed` set to relevant provinces/cities.

---

## 6. Responsiveness

### 6.1 Breakpoints (Tailwind defaults)

| Name | Min width | Target |
|---|---|---|
| (base) | 0 | Mobile portrait (360–480px) |
| `sm` | 640px | Mobile landscape / small tablet |
| `md` | 768px | Tablet |
| `lg` | 1024px | Laptop |
| `xl` | 1280px | Desktop |
| `2xl` | 1536px | Large desktop |

### 6.2 Mobile-First Rules

- Design every component starting from 360px width.
- Touch targets ≥ 44×44px (WCAG 2.5.5).
- Mobile nav: hamburger → `Sheet` drawer with sections + WhatsApp CTA.
- WhatsApp floating action button (FAB) visible on `< md` only.
- Portfolio grid: 1 col → 2 col (`sm`) → 3 col (`lg`).
- Service strip: horizontal scroll-snap on mobile, grid on desktop.
- Testimonials: swipeable carousel on mobile, 3-up grid on desktop.
- Typography uses `clamp()` for fluid scaling — no breakpoint stair-steps for type.

### 6.3 Testing Matrix

Must visually verify on:
- iPhone SE (375px), iPhone 14 (390px), Pixel 7 (412px)
- iPad (768px), iPad Pro (1024px)
- Laptop (1366px), Desktop (1920px)
- Safari iOS, Chrome Android, Chrome desktop, Firefox, Edge

---

## 7. Performance Budget

| Metric | Target |
|---|---|
| Lighthouse Performance | ≥ 95 (mobile) |
| Lighthouse Accessibility | ≥ 95 |
| Lighthouse SEO | 100 |
| LCP | < 2.0s on 4G |
| CLS | < 0.05 |
| INP | < 200ms |
| Total JS (initial) | < 100KB gzipped |
| Hero image | ≤ 200KB (AVIF) |

### 7.1 Performance Tactics

- All hero/portfolio images served via `next/image` with proper `sizes` and `priority` on hero only.
- AVIF + WebP via `next.config.js` `images.formats`.
- Self-hosted fonts via `next/font/google` with `display: 'swap'` and `preload: true` on display + sans.
- Static export where possible; ISR fallback if portfolio is CMS-driven later.
- No third-party scripts above the fold (Analytics loaded with `next/script` strategy `afterInteractive`).
- Critical CSS inlined automatically by Next.js.

---

## 8. Accessibility (WCAG 2.1 AA)

- Color contrast ≥ 4.5:1 for body, 3:1 for large text. Gold-on-black combo verified.
- Visible focus rings (`focus-visible:ring-2 focus-visible:ring-gold`).
- Skip-to-content link in header.
- All form fields labelled; error messages associated via `aria-describedby`.
- `prefers-reduced-motion` respected — disables Framer Motion entrance animations.
- Keyboard-navigable everywhere; no keyboard traps.

---

## 9. Content Requirements (assets needed before launch)

| Asset | Notes |
|---|---|
| Logo | SP monogram SVG (from poster) + wordmark |
| Founder portrait | Hi-res, multiple crops |
| Portfolio images | Min 4 per service category (wedding, bridal shower, grad, birthday, tombstone) |
| Testimonial copy | 3 client quotes + names + (optional) photos |
| Founder bio | 200–400 words for /about |
| Service descriptions | 80–120 words each, plus pricing tier or "from R___" if disclosed |
| OG image | 1200×630, branded |

---

## 10. Contact Integration

### 10.1 Click-to-Action Patterns

- **WhatsApp:** `https://wa.me/27622030185?text=Hi%20Letlhogonolo%2C%20I'd%20like%20to%20enquire%20about...`
- **Call:** `tel:+27613693823`
- Both wrapped in tracked button components (fire analytics event on click).

### 10.2 Contact Form (optional)

If included on `/contact`:
- Fields: name, email, phone (optional), service (select), event date (optional), message.
- Validated with Zod schema.
- Submits via server action → Resend → studio inbox.
- Honeypot field + rate-limit (IP-based, in-memory or Upstash) to deter spam.
- Success state with "Reply usually within 24 hours" + WhatsApp fallback CTA.

---

## 11. Project Structure

```
small-street-photography/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── opengraph-image.tsx
│   ├── icon.tsx
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── portfolio/page.tsx
│   ├── contact/page.tsx
│   └── not-found.tsx
├── components/
│   ├── layout/
│   ├── sections/
│   ├── shared/
│   └── ui/
├── content/
│   ├── services.ts          # typed service data
│   ├── portfolio.ts         # typed portfolio metadata
│   ├── testimonials.ts
│   └── site.ts              # site-wide constants (name, phone, etc.)
├── lib/
│   ├── seo.ts               # metadata helpers
│   ├── schema.ts            # JSON-LD builders
│   ├── analytics.ts         # event tracking
│   └── utils.ts             # cn(), formatters
├── public/
│   ├── images/
│   └── fonts/
├── types/
│   └── index.ts
├── next.config.ts
├── tailwind.config.ts       # if not using v4 inline @theme
├── tsconfig.json
└── package.json
```

### 11.1 Data Layer

Content kept in typed TS files (no CMS in v1) — simple, fast, type-safe.

```ts
// content/services.ts
export const services: Service[] = [
  {
    slug: 'wedding-photoshoot',
    name: 'Wedding Photoshoot',
    icon: 'Heart',
    short: '...',
    long: '...',
    images: ['/images/portfolio/wedding-1.jpg', ...],
  },
  // ...
];
```

---

## 12. Deployment & Operations

- **Repo:** GitHub, `main` branch protected.
- **CI:** Vercel auto-deploy on push to `main`; preview deploys on PRs.
- **Domain:** `smallstreetphotography.co.za` (suggested) — configure in Vercel + DNS.
- **HTTPS:** automatic via Vercel.
- **Env vars:** `RESEND_API_KEY`, `STUDIO_INBOX_EMAIL` (only if contact form is enabled).
- **Monitoring:** Vercel Analytics dashboard; weekly Lighthouse CI run.

---

## 13. Acceptance Criteria

- [ ] All 5 routes implemented and accessible from header nav.
- [ ] Lighthouse: Performance ≥ 95 (mobile), SEO = 100, A11y ≥ 95.
- [ ] Renders correctly on all devices in §6.3 testing matrix.
- [ ] All images use `next/image` with proper alt text and sizes.
- [ ] WhatsApp + Call buttons functional and tracked.
- [ ] `sitemap.xml` and `robots.txt` accessible and valid.
- [ ] LocalBusiness JSON-LD validates in Google Rich Results Test.
- [ ] Page weight (HTML+CSS+JS, first load) < 150KB on home.
- [ ] No console errors or hydration warnings.
- [ ] `prefers-reduced-motion` honored.

---

## 14. v2 Roadmap (post-launch)

- Blog (MDX) for SEO long-tail (e.g., "what to wear to a tombstone unveiling").
- Per-shoot portfolio detail pages with EXIF/story copy.
- Sanity or Payload CMS for non-technical portfolio updates.
- Client gallery delivery (Pic-Time or in-house).
- Booking calendar (Cal.com embed).
- Multilingual (English + Setswana / Sesotho / Zulu).

---

*Spec version 1.0 — drafted for Letlhogonolo Kotsi, Small Street Photography by Baraza.*
