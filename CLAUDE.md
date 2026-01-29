# CLAUDE.md — Project Context & Design Principles

## Project Overview
Personal portfolio website for Ishaan Jain — founder, researcher, and builder at the intersection of AI and healthcare. This is NOT a code-centric developer portfolio. Code is one element, not the identity.

## Tech Stack
- **Framework**: Next.js 16 (App Router, `src/` directory)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (via `@tailwindcss/postcss`)
- **Animations**: Framer Motion
- **Grid System**: Aceternity UI-style Bento Grid (`src/components/ui/bento-grid.tsx`)
- **Package Manager**: pnpm
- **Dev Server**: `pnpm dev` (Turbopack)

## Architecture

### Data-Driven Modular Cards
All content lives in `src/data/` as typed arrays with `id` fields:
- `projects.ts` — Project cards (id, title, description, tags, icon, gradient, link)
- `experience.ts` — Experience/work cards (id, title, role, description, tags, icon, gradient, link)
- `skills.ts` — Skill cards (id, category, items, description)
- `hobbies.ts` — Hobby cards (id, title, emoji, description, details)

### Modular Home Page (`src/app/page.tsx`)
The home page imports cards by ID. To customize what appears, edit these arrays at the top:
```ts
/* Hero tiles: 2 projects + 2 hobbies shown beside the intro */
const HERO_PROJECTS = ["pulse", "uplyftz"];
const HERO_HOBBIES = ["medicine", "startups"];

/* Below-the-fold sections */
const FEATURED_SKILLS = ["languages", "ai-ml", "tools"];
```

**Hero layout**: Two-column on desktop — intro text on the left, a 2×2 grid of cards (2 projects + 2 hobbies) on the right. Stacks vertically on mobile.

Each subpage (`/projects`, `/experience`, `/skills`, `/hobbies`) shows ALL cards from its data file — those pages are the single source of truth. The home page only *references* cards by ID.
Detail pages exist at `/projects/[id]`, `/experience/[id]`, `/skills/[id]`, `/hobbies/[id]`.

### Component Structure
- `src/components/ui/bento-grid.tsx` — `BentoGrid` (container) + `BentoGridItem` (card wrapper with mouse-follow glow, scroll animation, `glowColor` prop)
- `src/components/cards.tsx` — `ProjectCard`, `ExperienceCard`, `SkillCard`, `HobbyCard` built on `BentoGridItem`
- `src/components/lang-logos.tsx` — SVG logo icons for all skills (languages, AI tools, operations tools)
- `src/components/nav.tsx` — Shared nav + `SectionLabel` component
- `src/lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)

## Design Principles

### Visual Style: Frosted Glassmorphism
- **Background**: Clean smooth gradient (`#030305` → `#07070a` → `#050510`), NO noise texture, NO grid lines
- **Cards (front elements)**: Frosted glass — `backdrop-filter: blur(40px) saturate(1.2)`, translucent white bg `rgba(255,255,255,0.03)`, subtle white borders
- **Nav**: Same frosted glass treatment
- **No textures**: Background must be perfectly clean glass. All texture/grain effects have been removed intentionally.

### Card Behavior
- **All cards are square** (`aspect-ratio: 1/1`)
- **Hover effects**: Cards lift 6px (`translateY(-6px)`), deepen shadow, brighten border. All use CSS `transition` (NOT `animation`) so effects hold while hovered and release on mouse leave — no retriggering.
- **Mouse-follow glow**: Radial gradient follows cursor. Color matches card's `glowColor` prop (category color). Set via `--glow-color` CSS variable.
- **Top-edge highlight**: Subtle gradient line across top of every card (always visible)
- **Scroll-in**: Framer Motion fade+slide+scale on viewport entry, staggered by index

### Skill Cards — L-Shape Layout
- 3x3 conceptual grid inside each skill card
- 5 square logo tiles: 3 in row 1, 2 in row 2
- Remaining space (r2c3 + all of r3) forms an L-shape
- L-shape is rendered as a SINGLE `<div>` with `clip-path: polygon(...)` — not two separate elements
- A second div with same clip-path adds `inset box-shadow` for the border
- Description text is absolutely positioned over the L-shape area
- Text is `text-6xl font-black` in dark color (`#222`)

### Skill Card Hover Effects
- **Logo pop**: On card hover, logos stagger-animate with scale(1.15) + rotate(15deg) using CSS `transition` with incremental `transition-delay` (0s, 0.04s, 0.08s...). Spring-curve easing. Deep shadow pops out on logos.
- **Keyword highlight**: Specific words in the description light up in the category color with a glowing `text-shadow` (20px tight + 40px diffuse)
- **All hover effects use `transition`, never `animation`** — this prevents the retrigger glitch

### Tone & Content
- **Friendly, not corporate**: "Hey, I'm", "Nice to meet you", "Say hello", "What I'm working on"
- **NOT code-centric**: Lead with impact, purpose, and what you're building — not tech stacks. Code is present as an element but not the identity.
- **Section labels**: "What I'm working on", "What I work with", "Beyond work", "Get in touch"
- **Tags on project cards**: Domain-focused (Health-Tech, Nonprofit, Care Coordination) not language names

## Links
- GitHub: https://github.com/ijain-2028
- LinkedIn: https://www.linkedin.com/in/ishaan-jain-30112335a/
- Email: ishaanjain2024@gmail.com
- Uplyftz: https://uplyftz.org
- GrowthFactor: https://growthfactor.com

## Key Files
```
src/
  app/
    globals.css          — All CSS: glassmorphism, card system, hover effects, L-shape
    layout.tsx           — Root layout with Nav + footer
    page.tsx             — Home page (configure featured card IDs here)
    projects/page.tsx    — All projects
    projects/[id]/page.tsx
    experience/page.tsx  — All experience
    experience/[id]/page.tsx
    skills/page.tsx      — All skills
    skills/[id]/page.tsx
    hobbies/page.tsx     — All hobbies
    hobbies/[id]/page.tsx
  components/
    ui/bento-grid.tsx    — Aceternity-style BentoGrid + BentoGridItem
    cards.tsx            — ProjectCard, SkillCard, HobbyCard
    lang-logos.tsx        — SVG logos for all skill items
    nav.tsx              — Navigation + SectionLabel
  data/
    projects.ts          — Project data
    skills.ts            — Skill data
    hobbies.ts           — Hobby data
  lib/
    utils.ts             — cn() helper
```
