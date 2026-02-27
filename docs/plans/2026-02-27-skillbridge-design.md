# SkillBridge — Mentorship Marketplace Landing Page

## Tech Stack
- Next.js 16.1.6, App Router, Turbopack
- Tailwind CSS v4 with `@theme` directive
- Framer Motion v12
- Lucide React icons
- Inter font (cyrillic)
- Unsplash images via next/image

## Color Palette
```
orange: #F97316 (primary)
orange-dark: #EA580C (hover)
orange-light: #FFF7ED (muted bg)
orange-muted: #F9731615 (icon bg)
navy: #1E293B (headings, dark sections)
navy-light: #334155 (secondary text)
gray-500: #6B7280
gray-400: #9CA3AF
gray-200: #E5E7EB
gray-100: #F3F4F6
gray-50: #F9FAFB
white: #FFFFFF
```

## Components (10 files)

### Header.tsx
Fixed, white/90 backdrop-blur. Logo "Skill**Bridge**" (orange on "Bridge"). Nav links to sections. Two CTA: ghost "Стать ментором" + primary orange "Найти ментора". Mobile hamburger.

### Hero.tsx
`lg:grid-cols-2`. Left: h1, subtitle, 2 CTA buttons, trust line. Right: 6 floating circular Unsplash avatars (diverse professionals) with staggered float animation. Hidden below sm.

### HowItWorks.tsx
3 steps horizontal (`lg:grid-cols-3`). Each: number in orange circle, icon, title, description. Dashed line connectors between steps (hidden on mobile).
1. UserSearch — Выбери ментора
2. CalendarCheck — Забронируй сессию
3. TrendingUp — Расти

### Categories.tsx
Grid `grid-cols-2 sm:grid-cols-3 lg:grid-cols-4`. 8 cards with Lucide icons:
Code, Palette, Megaphone, Layout, DollarSign, Briefcase, Building2, BarChart3

### TopMentors.tsx
`lg:grid-cols-4`. 4 mentor cards with Unsplash photos, name, role, company, star rating, session count, price. Hover lift effect.

### Stats.tsx
bg-navy full-width. 3 numbers: 2000+ mentors, 15000+ sessions, 4.9 rating. Orange numbers, white labels.

### Reviews.tsx
Auto-carousel (5s interval) with arrow buttons and dots indicator. 4 reviews with photos, quotes, names, roles. Framer Motion AnimatePresence transitions.

### CtaBanner.tsx
Orange gradient bg, white text. "Первая сессия — бесплатно" + white CTA button.

### Footer.tsx
bg-navy, 4 columns: logo+desc, Platform links, Mentor links, Contacts.

## Section IDs
#how-it-works, #categories, #mentors, #reviews

## Unsplash Images (~12)
- 6 hero avatars (diverse professionals)
- 4 mentor photos
- 2 review avatars

## Responsive
- 320px: single column, hero avatars hidden
- 640px (sm): avatars visible smaller, 3-col categories
- 1024px (lg): full layout
