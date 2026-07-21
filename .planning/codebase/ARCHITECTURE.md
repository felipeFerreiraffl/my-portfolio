# Architecture

**Analysis Date:** 2026-07-21

## System Overview

```text
┌──────────────────────────────────────────────────────────────────────────┐
│                        Root Layout (Server)                              │
│               `src/app/[locale]/layout.tsx`                              │
│  Sets up providers: Fonts, Themes, i18n, SectionRefs, Smooth Scroll      │
└────────────────────────────────────────────────────────────────────────┬─┘
                                    │
                                    ▼
┌──────────────────────────────────────────────────────────────────────────┐
│                        Home Screen (Client)                              │
│               `src/components/screens/Home/index.tsx`                    │
│  Orchestrates: Hero animation → conditional section reveal              │
└────────────────────────────────────────────────────────────────────────┬─┘
                                    │
          ┌─────────────────────────┼─────────────────────────┐
          │                         │                         │
          ▼                         ▼                         ▼
┌──────────────────────┐  ┌──────────────────────┐  ┌──────────────────────┐
│     Header          │  │  Layout Sections     │  │    Mobile Nav        │
│  `components/layout/│  │  `components/layout/ │  │  `components/layout/ │
│   Header/index.tsx` │  │   Sections/*`         │  │   Header/Mobile*`    │
│                     │  │ ├─ Hero              │  └──────────────────────┘
│ Navigation with     │  │ ├─ AboutMe           │
│ scroll tracking     │  │ ├─ Experiences       │
└──────────────────────┘  │ └─ Skills            │
                          │                     │
                          │ All use refs for    │
                          │ IntersectionObserver│
                          └─────────────────────┘
          │
          ▼
┌──────────────────────────────────────────────────────────────────────────┐
│                          UI Components Layer                             │
│         `src/components/ui/*.tsx` (atomic components)                   │
│  Button, IconButton, Icon, Section, SectionTitle, Cursor, Tooltip       │
└──────────────────────────────────────────────────────────────────────────┘
          │
          ▼
┌──────────────────────────────────────────────────────────────────────────┐
│                      Context & Business Logic                            │
│  ┌─────────────────────────────────────────────────────────────────┐    │
│  │ SectionRefsContext: `src/contexts/sectionRefs.context.tsx`      │    │
│  │  - Manages refs to all scrollable sections                      │    │
│  │  - Tracks active section via IntersectionObserver              │    │
│  │  - Provides refs and activeSec to consumers                    │    │
│  └─────────────────────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────────────────────┘
          │
          ▼
┌──────────────────────────────────────────────────────────────────────────┐
│                    Data & Constants Layer                                │
│  ┌─────────────────────┐  ┌──────────────────┐  ┌──────────────────┐   │
│  │ Data Constants      │  │ Icon Constants   │  │ Object Constants │   │
│  │ `constants/data/*`  │  │ `constants/icons │  │ `constants/      │   │
│  │ ├─ skills.ts       │  │  .ts`            │  │  objects.ts`     │   │
│  │ ├─ experiences.ts  │  │                  │  │                  │   │
│  │ └─ projects.ts     │  │ All icons mapped │  │ Navigation links │   │
│  │                     │  │ from libraries   │  │ Hero rings       │   │
│  │ Typed w/ data types │  │                  │  │ External links   │   │
│  └─────────────────────┘  └──────────────────┘  └──────────────────┘   │
└──────────────────────────────────────────────────────────────────────────┘
```

## Component Responsibilities

| Component | Responsibility | File |
|-----------|----------------|------|
| Root Layout | Initialize providers (theme, i18n, smooth scroll, refs context) | `src/app/[locale]/layout.tsx` |
| Home Screen | Coordinate Hero animation and conditional section rendering | `src/components/screens/Home/index.tsx` |
| Header | Navigation with scroll-based active section highlighting | `src/components/layout/Header/index.tsx` |
| Hero | Animated rings + content reveal + scroll trigger | `src/components/layout/Sections/Hero/index.tsx` |
| AboutMe | Display hobbies, goals, presentation with animations | `src/components/layout/Sections/AboutMe/index.tsx` |
| Experiences | Carousel of experience cards with navigation controls | `src/components/layout/Sections/Experiences/index.tsx` |
| Skills | Display skill categories with icons and highlights | `src/components/layout/Sections/Skills/index.tsx` |
| SectionRefsContext | Track active section via IntersectionObserver | `src/contexts/sectionRefs.context.tsx` |
| UI Components | Reusable atomic elements (Button, Icon, Section, etc.) | `src/components/ui/*.tsx` |

## Pattern Overview

**Overall:** Component-Based Single-Page Application with Server-Side Rendering

**Key Characteristics:**
- **Provider-based architecture** - Nested providers for concerns: theme, i18n, scroll, refs
- **Ref-based tracking** - IntersectionObserver for passive scroll position tracking
- **Animation-driven UX** - Motion library for all interactive animations
- **Data constant driven** - All content lives in `constants/data/`
- **Locale-aware routing** - Dynamic routing via `[locale]` segment with next-intl
- **Tailwind-first styling** - All styling via Tailwind CSS with custom theme variables

## Layers

**Root Layout Layer:**
- Purpose: Initialize all global providers and apply root styling
- Location: `src/app/[locale]/layout.tsx`
- Contains: Provider setup, metadata, font configuration
- Depends on: next-intl plugin, next-themes, Lenis
- Used by: Next.js app router

**Home Screen (Orchestration) Layer:**
- Purpose: Coordinate animation states and conditional rendering of sections
- Location: `src/components/screens/Home/index.tsx`
- Contains: Hero component, section list, conditional rendering logic
- Depends on: Layout sections, contexts
- Used by: Page component

**Layout Sections Layer:**
- Purpose: Render major content sections (Hero, AboutMe, Experiences, Skills)
- Location: `src/components/layout/Sections/*/index.tsx`
- Contains: Section-specific logic, data mapping, internal component composition
- Depends on: UI components, data constants, contexts
- Used by: Home screen

**UI Components Layer:**
- Purpose: Provide reusable atomic components
- Location: `src/components/ui/*.tsx`
- Contains: Button, Icon, Section, SectionTitle, Cursor, Tooltip, IconButton
- Depends on: Tailwind CSS, Motion, utilities (cn, handlers)
- Used by: Layout sections, Home screen, Header

**Context & State Layer:**
- Purpose: Manage scroll tracking and section references
- Location: `src/contexts/sectionRefs.context.tsx`
- Contains: IntersectionObserver logic, ref management, active section tracking
- Depends on: React Context API, useEffect, useRef
- Used by: Header, sections, Home screen

**Data Constants Layer:**
- Purpose: Provide typed, centralized content and configuration
- Location: `src/constants/data/*.ts`, `src/constants/icons.ts`, `src/constants/objects.ts`
- Contains: Skills, experiences, projects data; icon maps; navigation links
- Depends on: Types definitions
- Used by: All components and sections

## Data Flow

### Primary Request Path (Page Load → Display)

1. User requests `/[locale]/` → Next.js loads `page.tsx` (renders HomeScreen)
2. RootLayout renders → Initializes providers stack (`src/app/[locale]/layout.tsx:43-83`)
   - Applies theme, i18n, smooth scroll, section refs context
3. HomeScreen mounts → Sets up Hero with animation state (`src/components/screens/Home/index.tsx:13-43`)
4. Hero component renders rings → Calls `onRingsExpandComplete` callback after animation (`src/components/layout/Sections/Hero/index.tsx:44-47`)
5. HomeScreen receives callback → Sets `ringsExpanded = true` → Renders main section (`src/components/screens/Home/index.tsx:30-36`)
6. Sections (AboutMe, Experiences, Skills) render with refs → Register with IntersectionObserver (`src/contexts/sectionRefs.context.tsx:72-88`)
7. Observer tracks visibility → Updates `activeSec` state as user scrolls (`src/contexts/sectionRefs.context.tsx:45-64`)
8. Header reads `activeSec` from context → Updates active nav link styling (`src/components/layout/Header/index.tsx:13-51`)

### Scroll Tracking & Navigation

1. User clicks navigation link in Header (`src/components/layout/Header/index.tsx:34-46`)
2. Handler retrieves ref for target section (`src/components/layout/Header/index.tsx:16-27`)
3. Calls `handleScrollToSection(ref)` → Calculates scroll position and smoothly scrolls (`src/utils/handlers.util.ts:3-8`)
4. Scroll triggers IntersectionObserver callbacks → Updates active section (`src/contexts/sectionRefs.context.tsx:45-70`)
5. Header detects new `activeSec` → Visual feedback on navigation

### Carousel (Experiences)

1. Embla carousel mounts via `useEmblaCarousel` hook (`src/components/layout/Sections/Experiences/index.tsx:20`)
2. User hovers over section → Arrow buttons fade in (`src/components/layout/Sections/Experiences/index.tsx:53-82`)
3. Click prev/next button → `emblaApi.scrollPrev()/scrollNext()` → Updates carousel state
4. Observer callbacks update `canPrev`/`canNext` button visibility (`src/components/layout/Sections/Experiences/index.tsx:31-48`)

### Animation Orchestration

1. Motion variants defined per component (e.g., `dotToRing`, `contentVars`, `circleVars`)
2. Components use `whileHover`, `animate`, `initial`, `whileInView` props
3. Motion library interpolates CSS transforms and opacity based on variants
4. Scroll-linked animations use `useScroll()` + `useTransform()` (Hero rings scale/fade on scroll)

**State Management:**
- Local component state: Animation visibility (`contentVisible`, `ringsExpanded`), carousel navigation (`canPrev`, `canNext`)
- Context state: `activeSec` (which section is in view), `refs` (section element references)
- Global state via providers: Theme (next-themes), Locale (next-intl), Smooth scroll (Lenis)

## Key Abstractions

**Section Ref Tracking:**
- Purpose: Passive scroll tracking without listening to scroll events
- Examples: `src/contexts/sectionRefs.context.tsx`, used by Header, Home screen
- Pattern: IntersectionObserver + Context API to track which section is viewport-aligned
- Benefits: Performant (no scroll listeners), decoupled (header doesn't know about section structure)

**Variant Animations:**
- Purpose: Reusable animation definitions for Motion library
- Examples: `contentVars`, `dotToRing`, `circleVars` in components
- Pattern: Define Variants objects, apply via Motion components with `variants`, `initial`, `animate`, `whileHover`, `whileInView`
- Benefits: Consistent animation timing, easy tweaks, declarative

**Icon Abstraction:**
- Purpose: Unified icon API across different icon libraries
- Examples: `ICONS.skills.frontend`, `ICONS.social.gitHub`, `ICONS.nav.aboutMe`
- Pattern: Map icon names to imports from phosphor-icons, simple-icons, devicons; re-export from `constants/icons.ts`
- Benefits: Single source of truth, easy library swaps, type-safe

**Data Constants:**
- Purpose: Centralized, typed content structure
- Examples: `SKILLS`, `EXPERIENCES`, `HERO_RINGS` in `constants/data/` and `constants/objects.ts`
- Pattern: Define as const arrays with data types; import into components for rendering
- Benefits: Easy to update without touching components, structured, i18n-ready (uses translation keys)

**Utility Helpers:**
- Purpose: Encapsulate common operations
- Examples: `cn()` for class merging, `handleScrollToSection()` for scroll navigation
- Pattern: Pure functions in `libs/` and `utils/` directories
- Benefits: Reusable, testable, decoupled from components

## Entry Points

**App Entry Point:**
- Location: `src/app/[locale]/page.tsx`
- Triggers: GET `/[locale]/` route request
- Responsibilities: Renders HomeScreen component

**Root Server Layout:**
- Location: `src/app/[locale]/layout.tsx`
- Triggers: Before page component renders (applied to all routes)
- Responsibilities: Initialize providers, set metadata, apply root HTML structure

**Home Screen:**
- Location: `src/components/screens/Home/index.tsx`
- Triggers: Rendered by page.tsx
- Responsibilities: Coordinate Hero animation state, render Header/sections conditionally, render MobileNav

**Context Provider:**
- Location: `src/contexts/sectionRefs.context.tsx` (SectionRefsProvider)
- Triggers: Mounted in RootLayout
- Responsibilities: Set up IntersectionObserver, provide refs and activeSec to tree

## Architectural Constraints

- **Threading:** Single-threaded event loop (browser). Lenis handles smooth scroll on main thread with requestAnimationFrame.
- **Global state:** ThemeProvider and NextIntlClientProvider manage theme and locale globally. SectionRefsContext for refs. No module-level mutable state outside providers.
- **Circular imports:** None detected. Clean dependency tree: app → screens → sections → ui → libs. Data flows unidirectionally.
- **Scroll tracking:** IntersectionObserver is the source of truth for active section. Header subscribes via context, avoids direct scroll event listeners.
- **Animation coordination:** Motion library handles all animations. Home screen coordinates Hero reveal → main content show sequence via state flag.
- **Hydration:** Root layout uses `suppressHydrationWarning` on `<html>` tag due to theme provider client-side initialization.
- **Locale routing:** Dynamic `[locale]` segment enforced at route level; RootLayout validates locale and calls `notFound()` if invalid.
- **Image/Asset Loading:** SVGs imported as React components via @svgr/webpack. Turbopack configured to load *.svg files as JS.

## Anti-Patterns

### Scroll Event Listeners

**What happens:** Could listen to window scroll events directly in components to track active section
**Why it's wrong:** Scroll events fire many times per second (performance hit), causes jank during animations, couples components to scroll behavior
**Do this instead:** Use IntersectionObserver pattern in context (see `src/contexts/sectionRefs.context.tsx:40-88`). Fire once per section entry/exit, decoupled from scroll.

### Hardcoded Content in Components

**What happens:** Writing skill names, experience titles directly in JSX
**Why it's wrong:** Content becomes scattered, hard to update, not i18n-ready, duplicates data across files
**Do this instead:** Centralize in `src/constants/data/` (e.g., `SKILLS`, `EXPERIENCES`), import and map in components. Use translation keys for i18n (`skills.title`, `experiences.title`).

### Inline Variant Definitions

**What happens:** Defining Motion variants inline every time they're used
**Why it's wrong:** Duplicates animation logic, hard to keep animations consistent, bloats component files
**Do this instead:** Define `Variants` at component level, reuse in Motion components. Example: `contentVars` in Hero, AboutMe (predictable fade + slide animations).

### Direct DOM Manipulation

**What happens:** Using refs to directly call DOM methods like `element.scrollIntoView()` or setting `innerHTML`
**Why it's wrong:** Bypasses React's rendering model, hard to test, conflicts with animations
**Do this instead:** Use utility functions that calculate and use `window.scrollTo()` with smooth behavior (see `src/utils/handlers.util.ts:3-8`).

### Tightly Coupled State

**What happens:** Passing refs and states through deep component props chains
**Why it's wrong:** Hard to refactor, unclear data flow, props drilling
**Do this instead:** Use Context API for cross-cutting concerns like refs and active section (see `src/contexts/sectionRefs.context.tsx`).

## Error Handling

**Strategy:** Graceful degradation with fallbacks.

**Patterns:**
- Locale validation: If `[locale]` doesn't match routing.locales, call `notFound()` (see `src/app/[locale]/layout.tsx:49-51`)
- Ref safety: Always check `ref.current` before accessing (see `src/utils/handlers.util.ts:3-4`)
- Observer safety: MutationObserver watches for refs to appear in DOM before observing (see `src/contexts/sectionRefs.context.tsx:72-88`)
- Carousel safety: Check `emblaApi` exists before calling methods (see `src/components/layout/Sections/Experiences/index.tsx:32-33`)
- No try-catch blocks detected; relies on Next.js error boundaries and optional chaining

## Cross-Cutting Concerns

**Logging:** No centralized logging detected. Console.logs would be added per component as needed for debugging.

**Validation:** Type safety via TypeScript (`strict: true` in tsconfig). No runtime validation library. Data structure validated by types: `ExperienceData`, `SkillsData`, `HeroRingData`, etc.

**Authentication:** Not applicable (portfolio, public site).

**Internationalization:** Handled by next-intl. All UI strings use `useTranslations()` hook. Content data uses translation keys (e.g., `"frontend.title"`, `"nav.aboutMe"`). Routing uses locale segment (`[locale]`). Messages in `/messages/` directory as JSON files.

**Theming:** Handled by next-themes. Theme provider wraps tree in RootLayout. Components use theme-aware CSS variables (e.g., `bg-main`, `text-title`, `text-text`, `text-star`). Smooth transition on theme change (fade 300ms).

---

*Architecture analysis: 2026-07-21*
