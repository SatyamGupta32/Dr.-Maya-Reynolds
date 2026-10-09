# Grow My Therapy — Dr. Maya Reynolds Homepage

A production-quality multi-page website for Dr. Maya Reynolds, PsyD, a licensed clinical psychologist specializing in anxiety and trauma therapy in Santa Monica, California.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

- **Next.js 15** (App Router)
- **JavaScript** (no TypeScript)
- **Tailwind CSS** for styling
- **React 19** for components
- **next/image** for optimized images
- **next/font/google** for web fonts (Playfair Display & Inter)

## Site Structure 

- **/** — Homepage with Hero, Intro, Focus Areas, Services overview
- **/about** — About Dr. Maya Reynolds page
- **/areas-of-focus** — Detailed therapy focus areas (anxiety, trauma, burnout)
- **/approach** — Therapeutic approach and methods
- **/office** — Office location and photos (NEW REQUIRED SECTION)
- **/faq** — Frequently asked questions
- **/contact** — Contact and consultation scheduling information

## Deployment

This project is ready for deployment on Vercel:

```bash
npm run build
npm start
```

Or connect your repository to Vercel for automatic deployments.

## Components

- **Navbar** — Fixed navigation with proper Next.js routing, active page highlighting, mobile hamburger menu
- **Hero** — Full-height hero section with headline, CTA buttons, and hero image
- **IntroSection** — Emotional introduction addressing the target audience
- **FocusAreas** — Visual grid of therapy focus areas (anxiety, trauma, burnout, etc.)
- **Services** — Three-column card layout for core therapy services
- **HowIWork** — Text-image section describing therapeutic approach
- **AboutMaya** — Biography and credentials for Dr. Maya Reynolds
- **TraumaSection** — Dedicated section on trauma therapy with sensitive, professional copy
- **OurOffice** — NEW REQUIRED SECTION: office location, address, service types, and office images
- **FAQ** — Accessible accordion component for common questions
- **FinalCTA** — Full-width call-to-action with consultation button
- **Footer** — Practice information, navigation with proper Next.js routing, and disclaimer

## Features

- **Multi-page architecture** with proper Next.js App Router routing
- Fully responsive design (mobile-first)
- Accessible navigation with ARIA labels, keyboard support, and active page indicators
- Smooth scroll behavior
- Reduced-motion support for accessibility
- Custom Tailwind theme with cohesive color palette (sage, cream, charcoal, dust)
- SEO-optimized metadata and Open Graph tags on every page
- Real Unsplash images with meaningful alt text
- No invented credentials, contact info, or claims beyond the provided profile

## Color Palette

- **Cream** (#FAF7F2) — Primary background
- **Sage** (#6B9E6B) — Primary brand color for CTAs and accents
- **Charcoal** (#2C2C2C) — Primary text color
- **Dust** (#C4956A) — Secondary accent
- **Warm Gray** (#E8E2D9) — Subtle backgrounds and borders

## Typography

- **Playfair Display** — Display font for headings (serif)
- **Inter** — Body font for paragraphs and UI (sans-serif)

## Build & Verification

```bash
npm run build  # Production build - generates 10 static pages
npm start      # Start production server
```

Build completed successfully with 7 pages + not-found page generated.

## Notes

- All copy is faithful to the Dr. Maya Reynolds profile provided
- No TypeScript files (.ts, .tsx) in the project
- No placeholder images — all images are real Unsplash URLs
- The "Our Office" section is visually distinct and includes address, service callouts, and office images
- Mobile hamburger menu is fully functional with accessible attributes
- FAQ accordion uses aria-expanded and aria-controls for accessibility
- Navigation uses Next.js Link components for client-side routing and active page highlighting
