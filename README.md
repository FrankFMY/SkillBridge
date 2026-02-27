# SkillBridge

Landing page for a mentorship marketplace. Warm design with orange palette, mentor profiles with Unsplash photos, auto-carousel testimonials, category grid, and statistics section.

## Tech Stack

- **Next.js 16** — App Router, Turbopack
- **Tailwind CSS v4** — `@theme` directive for custom design tokens
- **Framer Motion** — Scroll-triggered animations and AnimatePresence carousel
- **Lucide React** — Icon system

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
components/
  Header.tsx       — Fixed navbar with mobile hamburger menu
  Hero.tsx         — Hero with floating mentor avatars
  HowItWorks.tsx   — Three-step onboarding flow
  Categories.tsx   — Mentorship category grid
  TopMentors.tsx   — Featured mentor profiles
  Stats.tsx        — Platform statistics
  Reviews.tsx      — Auto-rotating testimonial carousel
  CtaBanner.tsx    — Call-to-action banner
  Footer.tsx       — Site footer with navigation
```
