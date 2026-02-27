# SkillBridge Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a mentorship marketplace landing page with auto-carousel reviews, floating avatar hero, and Unsplash images.

**Architecture:** Next.js App Router static page with 10 client components. Unsplash images via next/image. Framer Motion for animations. Tailwind v4 @theme for custom colors.

**Tech Stack:** Next.js 16.1.6, Tailwind CSS v4, Framer Motion v12, Lucide React, Inter font (cyrillic)

---

### Task 1: Config files

**Files:**
- Create: `package.json`
- Create: `postcss.config.mjs`
- Create: `next.config.ts`
- Create: `tsconfig.json`
- Create: `.gitignore`

**Step 1: Create package.json**

```json
{
  "name": "skillbridge",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "framer-motion": "^12.34.3",
    "lucide-react": "^0.575.0",
    "next": "^16.1.6",
    "react": "^19.2.4",
    "react-dom": "^19.2.4"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.2.1",
    "@types/node": "^25.3.2",
    "@types/react": "^19.2.14",
    "postcss": "^8.5.6",
    "tailwindcss": "^4.2.1",
    "typescript": "^5.9.3"
  }
}
```

**Step 2: Create postcss.config.mjs**

```js
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
export default config;
```

**Step 3: Create next.config.ts** (with Unsplash remotePatterns)

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
```

**Step 4: Create tsconfig.json, .gitignore** (copy from TaskFlow pattern)

**Step 5: Run `npm install`**

---

### Task 2: App files (globals.css, layout.tsx, page.tsx)

**Files:**
- Create: `app/globals.css`
- Create: `app/layout.tsx`
- Create: `app/page.tsx`

**Step 1: Create globals.css**

Color tokens via @theme:
- orange: #F97316, orange-dark: #EA580C, orange-light: #FFF7ED, orange-muted: #F9731615
- navy: #1E293B, navy-light: #334155
- Standard grays (500, 400, 200, 100, 50), white
- Font: --font-sans using --font-inter
- scroll-behavior: smooth, scroll-padding-top: 5rem
- @keyframes float (translateY -12px, 6s ease-in-out infinite)

**Step 2: Create layout.tsx**

Inter font with cyrillic subset. Russian metadata: "SkillBridge — Найди ментора, ускорь карьеру".

**Step 3: Create page.tsx**

Import and compose: Header, Hero, HowItWorks, Categories, TopMentors, Stats, Reviews, CtaBanner, Footer.

---

### Task 3: Header.tsx

**Files:**
- Create: `components/Header.tsx`

**Implementation:**

- "use client", useState for mobile menu
- Fixed header, h-16 lg:h-20, bg-white/90 backdrop-blur-md, border-b
- Logo: "Skill" navy + "Bridge" orange, font-bold text-xl
- Nav links: Как это работает (#how-it-works), Категории (#categories), Менторы (#mentors), Отзывы (#reviews)
- Desktop right side: ghost "Стать ментором" + primary orange "Найти ментора"
- Mobile: hamburger with AnimatePresence dropdown
- All nav text: text-sm font-medium text-navy-light hover:text-orange

---

### Task 4: Hero.tsx

**Files:**
- Create: `components/Hero.tsx`

**Implementation:**

- "use client", motion from framer-motion
- Section: pt-28 lg:pt-36 pb-20 lg:pb-28
- Grid lg:grid-cols-2, gap-12 lg:gap-16, items-center
- Left column (motion.div fadeUp):
  - h1: "Найди ментора." + span.text-orange "Ускорь карьеру."
    - text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-[1.1]
  - Subtitle: "Персональные сессии с экспертами из топ-компаний. Развивай навыки, получай обратную связь, строй карьеру мечты."
  - Two CTA buttons: primary orange "Найти ментора" (ArrowRight icon) + ghost "Стать ментором"
  - Trust line: flex with orange dots + "2 000+ менторов · 4.9 средний рейтинг"

- Right column (hidden sm:block): relative container ~h-80 lg:h-96
  - 6 circular Unsplash avatars absolutely positioned at different coords
  - Each: next/image, rounded-full, border-4 border-white, shadow-xl
  - CSS animation: float 6s ease-in-out infinite, with different animation-delay per avatar
  - Sizes vary: w-20 h-20, w-16 h-16, w-24 h-24, etc.

**Unsplash avatar URLs (diverse professionals, face crops):**
1. photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face
2. photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face
3. photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face
4. photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face
5. photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face
6. photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face

---

### Task 5: HowItWorks.tsx

**Files:**
- Create: `components/HowItWorks.tsx`

**Implementation:**

- Section id="how-it-works", bg-gray-50
- Heading centered: "Как это работает"
- Grid lg:grid-cols-3, gap-8 lg:gap-12
- Each step: text-center, relative (for connector)
  - Number circle: w-12 h-12 rounded-full bg-orange text-white font-bold flex center
  - Icon below: in orange-muted bg circle
  - Title: text-xl font-bold text-navy
  - Description: text-gray-500
- Steps:
  1. UserSearch icon, "Выбери ментора", "Фильтруй по навыкам, опыту и отзывам. Найди идеального эксперта для своих целей."
  2. CalendarCheck icon, "Забронируй сессию", "Выбери удобное время и формат. Видеозвонок, чат или ревью кода — решать тебе."
  3. TrendingUp icon, "Расти", "Получай знания, обратную связь и поддержку. Отслеживай свой прогресс."
- Dashed connector: hidden lg:block, absolute horizontal dashed line between steps (border-dashed border-t-2 border-gray-300)

---

### Task 6: Categories.tsx

**Files:**
- Create: `components/Categories.tsx`

**Implementation:**

- Section id="categories"
- Heading: "Направления менторства"
- Grid: grid-cols-2 sm:grid-cols-3 lg:grid-cols-4, gap-4
- 8 cards, each: rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-orange/30 transition-all cursor-pointer
  - Icon in orange-muted bg rounded-xl w-12 h-12 center
  - Name below: text-sm font-semibold text-navy
- Categories data:
  1. Code — "IT и разработка"
  2. Palette — "Дизайн"
  3. Megaphone — "Маркетинг"
  4. Layout — "Продукт"
  5. DollarSign — "Финансы"
  6. Briefcase — "Карьера"
  7. Building2 — "Бизнес"
  8. BarChart3 — "Аналитика"
- whileInView fade-up animation per card with staggered delay

---

### Task 7: TopMentors.tsx

**Files:**
- Create: `components/TopMentors.tsx`

**Implementation:**

- Section id="mentors"
- Heading: "Топ менторы", subtitle
- Grid: sm:grid-cols-2 lg:grid-cols-4, gap-6
- Each card: rounded-2xl bg-white border border-gray-200 overflow-hidden, hover:-translate-y-1 hover:shadow-xl transition-all
  - next/image photo (Unsplash, w=400&h=400&fit=crop&crop=face), aspect-[4/3] object-cover w-full
  - Content padding p-5:
    - Name: font-semibold text-navy
    - Role + Company: text-sm text-gray-500
    - Star rating: 5 Star icons (filled with fill="currentColor"), rating number
    - Flex row: badge "N сессий" (orange-light bg) + "$N/сессия" (text-navy font-semibold)
    - CTA button: w-full rounded-lg bg-orange text-white hover:bg-orange-dark

**Mentor data + Unsplash photos:**
1. Алексей Ковалёв, Senior Developer, Яндекс, 4.9★, 180 сессий, $45 — photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face
2. Мария Иванова, UX Lead, VK, 5.0★, 220 сессий, $55 — photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face
3. Дмитрий Петров, Product Director, Тинькофф, 4.8★, 150 сессий, $60 — photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face
4. Анна Смирнова, Marketing Head, Сбер, 4.9★, 190 сессий, $50 — photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face

---

### Task 8: Stats.tsx

**Files:**
- Create: `components/Stats.tsx`

**Implementation:**

- Section: bg-navy, py-16 lg:py-20
- Grid lg:grid-cols-3, text-center, gap-8
- Each stat:
  - Number: text-4xl lg:text-5xl font-bold text-orange
  - Label: text-white/80 mt-2
- Data: "2 000+" / "менторов", "15 000+" / "проведённых сессий", "4.9" / "средний рейтинг"
- whileInView fade-up animation

---

### Task 9: Reviews.tsx (auto-carousel)

**Files:**
- Create: `components/Reviews.tsx`

**Implementation:**

- "use client", useState(activeIndex), useEffect for auto-advance (5s setInterval)
- Section id="reviews", bg-gray-50
- Heading: "Отзывы менти"
- Carousel container: relative, overflow-hidden
  - AnimatePresence mode="wait"
  - Active review card: motion.div with key={activeIndex}, initial/animate/exit opacity+x slide
  - Card content: flex lg:flex-row with image left + text right
    - Image: next/image rounded-full w-16 h-16
    - Quote: text-lg text-navy italic
    - Name, role: below quote
    - 5 Star icons filled
  - Navigation: ChevronLeft/ChevronRight buttons on sides, absolute positioned
  - Dots indicator: flex gap-2 centered below, active=bg-orange, inactive=bg-gray-300

- Auto-advance: useEffect with setInterval, clear on unmount and on manual nav
- Pause on hover (optional: onMouseEnter/Leave toggle)

**Review data:**
1. "Ментор помог мне перейти из маркетинга в продакт-менеджмент за 3 месяца. Лучшая инвестиция в карьеру!" — Елена Козлова, Product Manager — photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&crop=face
2. "Благодаря менторству наконец разобрался в системном дизайне. Получил оффер в FAANG." — Артём Новиков, Software Engineer — photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face
3. "Регулярные сессии с ментором дали мне уверенность и структуру в работе. Рекомендую!" — Дарья Белова, UX Designer — photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face
4. "За полгода менторства вырос от джуниора до мидла. Ментор давал реальные задачи и ревью кода." — Максим Орлов, Frontend Developer — photo-1507591064344-4c6ce005b128?w=200&h=200&fit=crop&crop=face

---

### Task 10: CtaBanner.tsx + Footer.tsx

**Files:**
- Create: `components/CtaBanner.tsx`
- Create: `components/Footer.tsx`

**CtaBanner:**
- Section: bg-gradient from orange to orange-dark, py-20 text-center
- h2: "Первая сессия — бесплатно", white, text-3xl sm:text-4xl lg:text-5xl
- Subtitle: white/80
- CTA: bg-white text-orange rounded-xl px-8 py-4 hover:bg-gray-50

**Footer:**
- bg-navy text-white py-14 lg:py-20
- Grid sm:grid-cols-2 lg:grid-cols-4, gap-10
- Col 1: Logo "Skill<orange>Bridge</orange>" + description
- Col 2: "Платформа" — Как это работает, Категории, Менторы, Отзывы
- Col 3: "Менторам" — Стать ментором, Правила, FAQ
- Col 4: "Контакты" — hello@skillbridge.io, Москва, Россия
- Copyright line: © 2026 SkillBridge

---

### Task 11: Build, verify, git init, push

**Step 1:** `npm run build` — must pass

**Step 2:** Verify:
- grep for .kz, ₸, ТОО — must be empty
- Check all Unsplash URLs resolve (images.unsplash.com only)
- Verify section IDs match nav hrefs

**Step 3:** Git:
```bash
git init
git add -A
git commit -m "Initial commit"
git branch -M main
git remote add origin git@github.com:FrankFMY/SkillBridge.git
git push -u origin main
```
Note: Use SSH remote (gh auth configured for SSH).
