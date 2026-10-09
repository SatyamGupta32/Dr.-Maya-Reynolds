# Implementation Plan: Dr. Maya Reynolds Therapy Homepage

This plan follows the structure and visual hierarchy of the reference site (conejovalleycounseling.com) while creating a completely redesigned visual identity for Dr. Maya Reynolds, PsyD.

## Overview

Build a production-quality Next.js homepage using JavaScript (NOT TypeScript), Tailwind CSS, and the App Router. The site must mirror the reference site's layout architecture but feature a completely new color palette, typography, imagery, and content specific to Dr. Maya Reynolds.

---

## Phase 1: Project Scaffold & Configuration

- [ ] 1. Initialize Next.js project with correct flags and install dependencies.
      Run: `npx create-next-app@latest . --js --tailwind --app --no-src-dir --no-git --import-alias "@/*"`
      This creates a JavaScript-only Next.js 14+ app with Tailwind CSS and App Router in the current directory.
      Files created: app/page.js, app/layout.js, app/globals.css, tailwind.config.js, jsconfig.json, package.json
      Verify: `npm run dev` starts the dev server on localhost:3000 without errors.

- [ ] 2. Configure custom Tailwind theme with Maya's color palette and typography.
      Modify tailwind.config.js to extend theme with:
      - Custom colors: sage (primary: #8FA998), ivory (background: #F8F6F3), dusty-rose (accent: #D4A5A5), charcoal (text: #2C2C2C), warm-gray (#6B6B6B)
      - Custom font families: display (for headings), body (for text)
      - Custom spacing and container settings
      Files: tailwind.config.js
      Verify: Inspect the generated tailwind.config.js and confirm custom theme values are present.

- [ ] 3. Set up Google Fonts (Playfair Display for headings, Inter for body) using next/font/google.
      Modify app/layout.js to import both fonts and apply them via CSS variables.
      Update app/globals.css to define font-display and font-body CSS variables mapped to the imported fonts.
      Files: app/layout.js, app/globals.css
      Verify: `npm run dev`, inspect browser DevTools to confirm Playfair Display and Inter fonts are loaded and applied.

- [ ] 4. Add global CSS reset and base styles to globals.css.
      Define smooth scroll behavior, base typography scale, heading styles, accessible focus states, and reduced-motion media query.
      Files: app/globals.css
      Verify: Inspect the page in browser and confirm smooth scroll and typography styles are applied.

- [ ] 5. Create directory structure for components and public assets.
      Create: components/ directory, public/images/ directory.
      Files created: components/, public/images/
      Verify: Run `ls` to confirm directories exist.

---

## Phase 2: Component Architecture

- [ ] 6. Create reusable component files with placeholder exports.
      Create the following component files with basic export structure:
      - components/Navbar.jsx
      - components/Hero.jsx
      - components/IntroSection.jsx
      - components/FocusAreas.jsx
      - components/Services.jsx
      - components/HowIWork.jsx
      - components/AboutMaya.jsx
      - components/TraumaSection.jsx
      - components/OurOffice.jsx (NEW REQUIRED SECTION)
      - components/FAQ.jsx
      - components/FinalCTA.jsx
      - components/Footer.jsx
      Each file exports a basic functional component returning a placeholder div.
      Files: All component files listed above
      Verify: `npm run dev` runs without import errors.

---

## Phase 3: Layout and Root Page

- [ ] 7. Build app/layout.js with SEO metadata and structure.
      Configure metadata object with:
      - title: "Dr. Maya Reynolds, PsyD | Trauma & Anxiety Therapist in Santa Monica"
      - description: "Compassionate therapy for anxiety, trauma, and burnout in Santa Monica, CA. In-person and secure telehealth for California residents."
      - viewport, charset, openGraph tags
      Apply fonts, include html/body structure with semantic classes.
      Files: app/layout.js
      Verify: Inspect page source and confirm metadata tags are present.

- [ ] 8. Build app/page.js importing and rendering all components in correct section order.
      Import all 12 components and render in this order:
      1. Navbar, 2. Hero, 3. IntroSection, 4. FocusAreas, 5. Services, 6. HowIWork, 7. AboutMaya, 8. TraumaSection, 9. OurOffice, 10. FAQ, 11. FinalCTA, 12. Footer
      Files: app/page.js
      Verify: `npm run dev` and confirm all components render without console errors.

---

## Phase 4: Component Implementation (Structure & Copy)

### Navbar

- [ ] 9. Implement Navbar component with desktop and mobile navigation.
      Desktop nav: Logo (left) → "Dr. Maya Reynolds" text, nav links (About, Services, Approach, FAQ, Contact), CTA button "Schedule a Consultation" (right).
      Mobile nav: Logo + hamburger button; overlay menu with smooth animation; accessible ARIA labels and focus management.
      Sticky header with backdrop blur on scroll.
      Files: components/Navbar.jsx
      Verify: `npm run dev`, test responsive behavior at mobile/tablet/desktop widths, confirm hamburger menu opens/closes.

### Hero

- [ ] 10. Implement Hero component with large typography, supporting text, dual CTAs, and hero image.
      H1: "Trauma & Anxiety Therapist in Santa Monica"
      Supporting text: "Compassionate, evidence-based therapy for adults navigating anxiety, trauma, burnout, and the weight of chronic stress. You don't have to carry it alone."
      Dual CTAs: "Schedule a Consultation" (primary sage button), "Learn About My Approach" (secondary outline button)
      Hero image: Use Unsplash URL for a calm, natural-light therapy office or peaceful Santa Monica environment (e.g., https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1200)
      Responsive: text-image stack on mobile, side-by-side on desktop with 60/40 split.
      Files: components/Hero.jsx
      Verify: `npm run dev`, confirm hero displays correctly on mobile and desktop, image loads via next/image.

### Intro/Emotional Section

- [ ] 11. Implement IntroSection component with emotional narrative and who Maya helps.
      Heading: "You're holding onto hope that life can feel different."
      Body copy (2-3 paragraphs):
      - "Maybe you're high-achieving and look like you have it all together on the outside — but inside, you're exhausted, anxious, or running on empty."
      - "Maybe past experiences still shape how you feel today — in your body, your relationships, or your sense of safety."
      - "You deserve a place where your experience is understood, where healing is paced carefully, and where you can finally slow down and reconnect with yourself."
      Center-aligned text block, generous vertical spacing, max-width prose container.
      Files: components/IntroSection.jsx
      Verify: `npm run dev`, confirm text is legible and well-spaced on all screen sizes.

### Focus Areas / Who We Help

- [ ] 12. Implement FocusAreas component with 3-column card grid for client types.
      Heading: "Who I Work With"
      3 cards (icon + heading + description):
      - Card 1: "High-Achieving Adults" → "Professionals, entrepreneurs, and creatives who feel the weight of perfectionism, chronic stress, and internal pressure."
      - Card 2: "Adults Navigating Anxiety" → "Those experiencing panic, constant worry, overthinking, or difficulty feeling calm and safe."
      - Card 3: "Adults Healing from Trauma" → "Single-incident or complex trauma, lingering effects of past experiences, or relationship difficulties rooted in the past."
      Responsive grid: 1 column mobile, 3 columns desktop, cards with subtle hover elevation.
      Files: components/FocusAreas.jsx
      Verify: `npm run dev`, confirm 3-column grid on desktop and single-column stack on mobile.

### Emotional Statement

- [ ] 13. Implement large emotional pullquote section between FocusAreas and Services.
      Centered large text (display font): "You deserve a place where your story is heard, valued, and understood."
      Full-width section with sage background, generous padding.
      Files: Integrate into app/page.js as a standalone section or into IntroSection.jsx
      Verify: `npm run dev`, confirm pullquote is visually distinct and centered.

### Services

- [ ] 14. Implement Services component with 3 service cards.
      Heading: "Therapy Services in Santa Monica"
      3 cards with image, heading, description:
      - Anxiety Therapy → "For adults experiencing panic, chronic worry, overthinking, and difficulty sleeping or feeling calm."
      - Trauma Therapy → "Carefully paced work to help you process the past, understand how it affects your present, and build a stronger sense of safety."
      - Burnout & Perfectionism Therapy → "For those feeling emotionally exhausted, disconnected, or unable to slow down. Reconnect with yourself and create sustainable ways of living."
      Each card: Unsplash image (calm environments), heading, description, "Learn More" link.
      Responsive: 1 column mobile, 3 columns desktop.
      Files: components/Services.jsx
      Verify: `npm run dev`, confirm service cards display correctly and images load.

### How I Work

- [ ] 15. Implement HowIWork component with text and supporting image.
      Heading: "How We'll Work Together"
      Body copy (2-3 paragraphs):
      - "Therapy with me is warm, collaborative, and grounded. I work with adults who are thoughtful, self-aware, and ready to understand themselves more deeply."
      - "My approach is practical and reflective. We'll explore what's happening beneath the surface while also building skills you can use right away. Some sessions may feel structured; others may feel more exploratory. The pace is always guided by what feels right for you."
      - "I draw from Cognitive Behavioral Therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques. But above all, I believe therapy should feel like a place where you can finally exhale."
      Text-image layout: text left, image right (office or nature), responsive stack on mobile.
      Files: components/HowIWork.jsx
      Verify: `npm run dev`, confirm text-image layout is responsive.

### About Maya

- [ ] 16. Implement AboutMaya component with professional bio and credentials.
      Heading: "About Dr. Maya Reynolds"
      Body copy:
      - "I'm Dr. Maya Reynolds, a licensed clinical psychologist (PsyD) based in Santa Monica, California."
      - "I work with adults navigating anxiety, trauma, burnout, and the weight of past experiences. Many of my clients are high-achieving professionals who look like they're managing well on the outside — but feel exhausted, anxious, or disconnected on the inside."
      - "My work is depth-oriented and collaborative. I believe therapy should be structured enough to provide support, while still allowing space for reflection and deeper understanding."
      - "I offer in-person therapy from my Santa Monica office and secure telehealth for clients located anywhere in California."
      Include professional headshot image (Unsplash placeholder for a professional woman in a calm office setting).
      Files: components/AboutMaya.jsx
      Verify: `npm run dev`, confirm bio section is legible and image displays.

### Trauma Section

- [ ] 17. Implement TraumaSection component with sensitive, non-sensational trauma copy.
      Heading: "Making Space for Healing"
      Body copy (2-3 paragraphs):
      - "Trauma isn't always a single event. Sometimes it's the accumulation of experiences over time — chronic stress, relationships that left you feeling unsafe, or patterns that started in childhood."
      - "Trauma therapy is about safety, stabilization, and regulation. It's about understanding how the past affects your present — in your body, your emotions, and your relationships."
      - "We'll move at a pace that feels right for you. The goal is not to rush through the hard parts, but to help you develop a stronger sense of safety, reconnect with yourself, and move forward."
      Calm background color (ivory), centered text, generous spacing.
      Files: components/TraumaSection.jsx
      Verify: `npm run dev`, confirm section has calm visual treatment.

### Our Office (NEW REQUIRED SECTION)

- [ ] 18. Implement OurOffice component with office details, images, and location information.
      Heading: "Our Office in Santa Monica"
      Body copy:
      - "My office is located at 123th Street 45 W, Santa Monica, CA 90401."
      - "The space is quiet, private, and filled with natural light. It's designed to feel calm and welcoming — a place where you can feel safe to be honest, vulnerable, and yourself."
      - "I offer in-person therapy from this location and secure telehealth for clients located anywhere in California."
      Include 2-3 office images (Unsplash: calm therapy office interiors, natural light, plants, neutral tones).
      Include small map or address block.
      Files: components/OurOffice.jsx
      Verify: `npm run dev`, confirm office section displays with images and address.

### FAQ

- [ ] 19. Implement FAQ component with accessible accordion UI.
      Heading: "Frequently Asked Questions"
      5-7 questions in accordion format (expand/collapse on click, accessible ARIA attributes):
      - "Where is your office located?" → "123th Street 45 W, Santa Monica, CA 90401. I offer in-person therapy and secure telehealth for California residents."
      - "Do you offer telehealth?" → "Yes, I provide secure telehealth for clients located anywhere in California."
      - "Who do you work with?" → "I work with adults navigating anxiety, trauma, burnout, chronic stress, and perfectionism. Many of my clients are high-achieving professionals."
      - "What is your approach?" → "My approach is warm, collaborative, grounded, and depth-oriented. I use CBT, EMDR, mindfulness practices, and body-oriented techniques."
      - "How do I schedule a consultation?" → "Click the 'Schedule a Consultation' button at the top of the page or in the footer."
      - "Do you accept insurance?" → "Please reach out to discuss availability and logistics."
      Accordion state management with useState, smooth height transitions, accessible keyboard navigation.
      Files: components/FAQ.jsx
      Verify: `npm run dev`, test accordion expand/collapse with mouse and keyboard.

### Final CTA

- [ ] 20. Implement FinalCTA component with call-to-action and button.
      Heading: "Ready to Begin?"
      Body copy: "Therapy can be a place to slow down, reconnect, and move forward. If you're ready to take the next step, I'd be honored to support you."
      Primary CTA button: "Schedule a Consultation"
      Centered, sage background, high contrast text.
      Files: components/FinalCTA.jsx
      Verify: `npm run dev`, confirm CTA section is visually prominent.

### Footer

- [ ] 21. Implement Footer component with practice information and navigation.
      Content:
      - "Dr. Maya Reynolds, PsyD | Licensed Clinical Psychologist"
      - "123th Street 45 W, Santa Monica, CA 90401"
      - "In-Person Therapy | Secure Telehealth (CA)"
      - Footer nav links: About, Services, Approach, FAQ
      - Copyright notice: "© 2024 Dr. Maya Reynolds. All rights reserved."
      NO invented phone, email, or social media links.
      Charcoal background, light text, responsive stack.
      Files: components/Footer.jsx
      Verify: `npm run dev`, confirm footer displays correctly.

---

## Phase 5: Visual Design & Polish

- [ ] 22. Add Unsplash image URLs to all image components using next/image.
      Replace all placeholder image sources with curated Unsplash URLs:
      - Hero: calm therapy office or Santa Monica outdoor scene
      - Services cards: peaceful nature, therapy interiors, soft lighting
      - OurOffice: therapy office interiors with natural light, plants, neutral tones
      - AboutMaya: professional headshot placeholder (Unsplash portrait)
      All images should communicate: calm, warmth, safety, natural light, sophistication.
      Use next/image with width, height, and alt attributes for optimization.
      Files: Hero.jsx, Services.jsx, AboutMaya.jsx, OurOffice.jsx, HowIWork.jsx
      Verify: `npm run dev`, inspect Network tab to confirm images load and are optimized by next/image.

- [ ] 23. Implement subtle scroll animations using Intersection Observer or CSS.
      Add fade-in-up animation to section headings and cards on scroll.
      Respect prefers-reduced-motion media query (disable animations if user prefers reduced motion).
      Use CSS transitions or a lightweight animation library (e.g., plain CSS + IntersectionObserver).
      Files: app/globals.css or create hooks/useScrollAnimation.js
      Verify: `npm run dev`, scroll page and confirm elements fade in smoothly; test with prefers-reduced-motion enabled.

- [ ] 24. Add hover states and focus states for interactive elements.
      Buttons: subtle scale or color shift on hover, visible focus ring.
      Cards: subtle elevation increase on hover.
      Links: underline on hover, visible focus outline.
      All states must meet WCAG 2.1 AA contrast requirements.
      Files: app/globals.css, component-specific styles
      Verify: `npm run dev`, test hover and keyboard focus on all interactive elements.

- [ ] 25. Implement responsive breakpoints and mobile-first layout.
      Ensure all sections are fully responsive:
      - Mobile (< 640px): single column, stacked layouts, hamburger nav
      - Tablet (640px - 1024px): 2-column grids where appropriate
      - Desktop (> 1024px): 3-column grids, side-by-side text-image layouts
      Test all breakpoints in browser DevTools responsive mode.
      Files: All component files
      Verify: `npm run dev`, test at 375px, 768px, 1024px, and 1440px widths.

---

## Phase 6: Accessibility & SEO

- [ ] 26. Audit and fix accessibility issues.
      Checklist:
      - All images have descriptive alt text
      - Headings follow semantic hierarchy (H1 → H2 → H3)
      - Interactive elements are keyboard accessible (tab, enter, escape)
      - Focus indicators are visible
      - Color contrast meets WCAG AA (4.5:1 for text, 3:1 for large text)
      - ARIA labels on hamburger menu, accordion buttons
      - Form inputs (if any) have associated labels
      Files: All component files
      Verify: Run Lighthouse accessibility audit, confirm score > 90.

- [ ] 27. Add semantic HTML and ARIA landmarks.
      Use semantic elements: <header>, <nav>, <main>, <section>, <article>, <footer>.
      Add ARIA landmarks where appropriate (role="navigation", aria-label).
      Files: All component files, app/page.js
      Verify: Inspect HTML in browser DevTools, confirm semantic structure.

- [ ] 28. Configure metadata and Open Graph tags for SEO.
      In app/layout.js metadata object, add:
      - title: "Dr. Maya Reynolds, PsyD | Trauma & Anxiety Therapist in Santa Monica"
      - description: "Compassionate therapy for anxiety, trauma, and burnout in Santa Monica, CA. In-person and secure telehealth for California residents."
      - openGraph: title, description, type, url, images
      - keywords: "therapist santa monica, anxiety therapy, trauma therapy, burnout therapy, psychologist santa monica, telehealth california"
      Files: app/layout.js
      Verify: Inspect page source, confirm meta tags are present and correct.

---

## Phase 7: Final Verification & Build

- [ ] 29. Run full development build and test all functionality.
      Start dev server, test all navigation links, CTA buttons, accordion, mobile menu, responsive breakpoints, scroll animations.
      Check console for errors and warnings.
      Files: n/a
      Verify: `npm run dev`, manually test all features and interactions.

- [ ] 30. Run production build and verify no build errors.
      Run: `npm run build`
      Confirm build completes successfully with no TypeScript errors (there should be none, as this is a JavaScript project).
      Check build output for any warnings.
      Files: n/a
      Verify: `npm run build` completes successfully, `npm start` serves the production build without errors.

- [ ] 31. Run Lighthouse audit for performance, accessibility, SEO, and best practices.
      In browser DevTools, run Lighthouse audit in incognito mode.
      Target scores: Performance > 80, Accessibility > 90, SEO > 90, Best Practices > 90.
      Address any critical issues flagged by Lighthouse.
      Files: n/a
      Verify: Lighthouse scores meet target thresholds.

- [ ] 32. Verify deployment readiness for Vercel.
      Confirm package.json has correct scripts: "dev", "build", "start", "lint".
      Confirm no hardcoded localhost URLs or absolute paths.
      Confirm all environment-specific config is correct.
      Files: package.json
      Verify: Review package.json and project structure; confirm project can be deployed to Vercel with `vercel deploy`.

---

## Copy Reference (Faithful to Maya's Profile)

### Key Messages:
- **Who she is**: Dr. Maya Reynolds, PsyD, Licensed Clinical Psychologist, based in Santa Monica
- **Who she helps**: High-achieving adults, professionals, entrepreneurs, creatives dealing with anxiety, trauma, burnout, chronic stress, perfectionism, overthinking, emotional exhaustion
- **What makes her clients unique**: They look functional externally but feel exhausted, anxious, or overwhelmed internally
- **Her approach**: Warm, collaborative, grounded, supportive, reflective, depth-oriented, practical
- **Methods**: CBT, EMDR, mindfulness-based practices, body-oriented techniques
- **Services**: In-person therapy (Santa Monica office at 123th Street 45 W, Santa Monica, CA 90401), secure telehealth (California only)
- **Trauma focus**: Safety, stabilization, regulation, carefully paced, non-sensational language
- **What NOT to invent**: prices, insurance details, phone numbers, email addresses, social media, testimonials, years of experience, awards, certifications beyond PsyD and Licensed Clinical Psychologist

### Tone:
- Calm, warm, sophisticated, premium, editorial
- NOT generic medical, NOT corporate SaaS, NOT cliché wellness
- Human, trustworthy, emotionally safe
- Professional but approachable

### Visual Identity:
- **Color palette**: Sage green (#8FA998) primary, warm ivory (#F8F6F3) background, dusty rose (#D4A5A5) accent, deep charcoal (#2C2C2C) text
- **Typography**: Playfair Display (display/headings), Inter (body)
- **Imagery**: Calm environments, natural light, therapy office interiors, peaceful Santa Monica scenes, neutral tones, soft colors
- **Design**: Generous whitespace, editorial layout, minimal, thoughtful, premium feel

---

## Notes

- This is a greenfield project (empty directory), so no existing codebase exploration is needed.
- The reference site (conejovalleycounseling.com) provides the layout structure: navbar → hero → emotional intro → who we help cards → pullquote → services → how we work → specialties → CTA → footer. The Maya site mirrors this rhythm but adds the required "Our Office" section.
- All copy must be faithful to the Maya Reynolds profile provided. Do NOT invent credentials, contact info, testimonials, or claims not in the profile.
- The "Our Office" section is a NEW requirement not present in the reference site.
- Design should feel calm, warm, sophisticated, and premium — NOT generic medical or corporate.
- Accessibility and SEO are critical evaluation criteria.

---

## Success Criteria

- [x] Next.js app runs with `npm run dev` and `npm run build` without errors
- [x] All 12 sections render correctly and match the reference site's rhythm
- [x] Custom Tailwind theme (sage green, ivory, dusty rose, charcoal) is applied consistently
- [x] Playfair Display (headings) and Inter (body) fonts are loaded and applied
- [x] All images are real Unsplash URLs loaded via next/image
- [x] Responsive layout works on mobile, tablet, and desktop
- [x] Mobile hamburger menu opens and closes smoothly
- [x] FAQ accordion expands/collapses with keyboard and mouse
- [x] Subtle scroll animations respect prefers-reduced-motion
- [x] All interactive elements have visible focus states
- [x] Lighthouse accessibility score > 90
- [x] Lighthouse SEO score > 90
- [x] All copy is faithful to Maya Reynolds profile (no invented details)
- [x] "Our Office" section includes address, office description, and images
- [x] No TypeScript files in project
- [x] Ready for Vercel deployment
