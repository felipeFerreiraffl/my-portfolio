<!-- GSD:project-start source:PROJECT.md -->

## Project

**My Portfolio**

A personal portfolio site built with Next.js 16 (App Router), React 19, and TypeScript, showcasing the developer's experience, skills, and about-me content through animated, internationalized (pt-br/en) sections. The codebase is functional and actively evolving (Hero, AboutMe, Experiences, Skills sections already shipped).

**Core Value:** The portfolio must present the developer's experience and skills clearly and reliably to visitors — but the current active milestone's core value is different: **establish a documented, discoverable set of conventions and folder-structure rules so future work (by the developer and by Claude) stays consistent** before any new features are built.

### Constraints

- **Language**: Both docs written in English — Why: standard for technical documentation even in this pt-br-first project
- **No code changes**: This milestone is documentation-only; do not modify source files to fix naming/structure inconsistencies — Why: user wants to decide standards deliberately, not have them silently applied
- **Scope boundary**: Folder-structure doc covers `/src` and `/messages` in depth, `/public` briefly, and skips root config files — Why: explicit user instruction to avoid documenting boilerplate config

<!-- GSD:project-end -->

<!-- GSD:stack-start source:codebase/STACK.md -->

## Technology Stack

## Languages

- TypeScript 5 - Full codebase (App Router, components, utilities, types)
- JavaScript - Configuration files (next.config.ts, eslint.config.mjs, postcss.config.mjs)
- Tailwind CSS 4 - Utility-first styling framework

## Runtime

- Node.js 24.12.0 (recommended)
- npm 11.6.2
- Lockfile: `package-lock.json` (present)

## Frameworks

- Next.js 16.2.7 - Full-stack React framework with App Router
- React 19.2.4 - Component library and rendering
- React DOM 19.2.4 - DOM integration
- Tailwind CSS 4 - Utility-first CSS framework
- @tailwindcss/postcss 4 - PostCSS plugin for Tailwind
- PostCSS - CSS transformation pipeline (`postcss.config.mjs`)
- next-intl 4.13.0 - Multi-language support
- motion 12.42.0 - Animation library with lazy motion features
- Lenis 1.3.25 - Smooth scroll behavior
- embla-carousel-react 8.6.0 - Carousel component library
- Testing framework: Not configured
- No test dependencies in package.json
- TypeScript 5 - Static type checking
- ESLint 9 - JavaScript/TypeScript linting
- eslint-config-next 16.2.6 - Next.js-specific ESLint configuration
- Babel React Compiler Plugin 1.0.0 - Automatic component memoization
- @svgr/webpack 8.1.0 - SVG to React component loader

## Key Dependencies

- @phosphor-icons/react 2.1.10 - Phosphor icon set
- @icons-pack/react-simple-icons 13.13.0 - Simple icon set
- devicons-react 1.5.0 - Technology/skill icons
- clsx 2.1.1 - Utility for conditional CSS class names
- tailwind-merge 3.6.0 - Merge Tailwind CSS classes intelligently
- @teispace/next-themes 2.0.2 - Theme switching (light/dark mode)
- Space Grotesk (from next/font/google) - Primary font family
- tw-animate-css 1.4.0 - Additional Tailwind animation utilities
- @types/node 20 - Node.js type definitions
- @types/react 19 - React type definitions
- @types/react-dom 19 - React DOM type definitions

## Configuration

- No environment variables required
- No .env file needed for development or production
- Timezone: America/Sao_Paulo (hardcoded in layout)
- Config file: `next.config.ts`
- TypeScript config: `tsconfig.json`
- PostCSS config: `postcss.config.mjs`
- ESLint config: `eslint.config.mjs`
- Location: `messages/` directory
- Format: JSON
- Files: `en.json`, `pt-br.json`

## Platform Requirements

- Node.js 24.12.0+ (verified working)
- npm 11.6.2+ or compatible package manager
- VSCode recommended (.vscode config present)
- Node.js 24.12.0+ or compatible
- Deployment target: Vercel (default for Next.js) or any Node.js hosting
- Build output: `.next/` directory (generated)

## Scripts

<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->

## Conventions

## Naming Patterns

- React components: PascalCase (`Button.tsx`, `Icon.tsx`, `Section.tsx`)
- Utilities/helpers: camelCase (`handlers.util.ts`, `cn.ts`)
- Hooks: camelCase with `use` prefix (`useEmblaTimeline.ts`, `useSectionRefs`)
- Contexts: camelCase with `.context.tsx` suffix (`sectionRefs.context.tsx`)
- Constants: UPPERCASE or camelCase depending on scope (`AVAILABLE_THEMES`, `ICONS`, `SKILLS`)
- Types/Interfaces: PascalCase (`ButtonProps`, `IconProps`, `SectionRefsContextType`)
- Component functions: PascalCase (`Button`, `Icon`, `Section`, `HomeScreen`)
- Event handlers: camelCase with `handle` prefix (`handleScrollToSection`)
- Custom hooks: camelCase with `use` prefix (`useEmblaTimeline`)
- Utility functions: camelCase (`cn`, `withFillWeight`)
- Local state: camelCase (`selectedIdx`, `ringsExpanded`, `activeSec`)
- Props objects: camelCase (`emblaApi`, `slideCount`)
- Constants: UPPERCASE_SNAKE_CASE or camelCase (HEADER_OFFSET, AVAILABLE_THEMES)
- Interfaces: PascalCase with `Props` suffix for component props (`ButtonProps`, `IconProps`, `SectionProps`)
- Type unions/tuples: PascalCase (`SectionKey`, `SVGIcon`, `SectionRef`)
- Branded types: PascalCase with intent (`SectionRef = RefObject<HTMLElement | null>`)

## Code Style

- ESLint 9 with Next.js core-web-vitals and TypeScript configurations
- No Prettier configuration found - uses ESLint for code formatting
- Standard ESLint Next.js rules enforced
- Config file: `eslint.config.mjs` (flat config format)
- Tool: ESLint 9 (flat config)
- Rules: Next.js core web vitals + TypeScript best practices
- Ignores: `.next/`, `out/`, `build/`, `next-env.d.ts`
- Run: `npm run lint`

## Import Organization

- `@/*` → `./src/*` (defined in `tsconfig.json`)
- Use `@/` prefix for all internal imports, never use relative paths like `../`

## Client/Server Components

- Use `"use client"` directive at top of file for client components
- Required for: interactive components, hooks, state management, event handlers
- Example files: `Button.tsx`, `Icon.tsx`, `Tooltip.tsx`, `HomeScreen/index.tsx`
- Layout components are server-side by default (`src/app/[locale]/layout.tsx`)
- Use for: fetching data, accessing secrets, database queries

## Error Handling

- Guard clauses for early returns: `if (!ref.current) return;`
- Throw errors for context violations: `throw new Error("useSectionRefs must be used inside SectionRefsContext")`
- No try-catch blocks found in UI code
- Rely on guard clauses to prevent errors in event handlers

## Logging

- Console logging is minimal/absent in production code
- Error throwing preferred over logging

## Comments

- No extensive commenting observed in codebase
- Complex logic is self-documenting through clear variable names
- Animation variants and configuration are placed in component scope for clarity
- No JSDoc/TSDoc patterns found in codebase
- TypeScript interfaces serve as documentation

## Function Design

- Components: 15-60 lines (e.g., `Button`, `Icon`, `Tooltip`)
- Hooks: 10-35 lines (e.g., `useEmblaTimeline`)
- Utilities: 3-10 lines (e.g., `handleScrollToSection`, `cn`)
- Use destructuring in function signatures: `({ label, ...props }: ButtonProps)`
- Props objects preferred over multiple parameters
- Spread operator used to collect remaining props
- JSX elements from components
- Objects from hooks: `{ selectedIdx, progress }`
- Void for event handlers

## Module Design

- Components: Use `export default` for single component files
- Hooks: Use `export const` for named exports
- Utilities: Use `export const` for named exports
- Constants: Use `export const` for named exports
- Data index: `src/constants/data/index.ts` exports from `experiences`, `projects`, `skills`

## TypeScript Configuration

- `"strict": true` in `tsconfig.json`
- `"noEmit": true` - Type checking only, no emit
- `"isolatedModules": true` - Each file treated independently
- `"moduleResolution": "bundler"` - Modern module resolution

## Styling Conventions

- Version 4 with @tailwindcss/postcss
- Utility-first approach
- `cn()` utility for className merging: `import { cn } from "@/libs/cn"`
- `cn()` implementation uses `clsx` + `tailwind-merge`
- `src/libs/cn.ts`: Merges Tailwind classes safely
- `src/libs/withFillWeight.tsx`: Higher-order component for icon styling

## Component Patterns

- Every component file exports a default React component
- File naming matches component name in PascalCase
- Extend native HTML element props: `extends ComponentProps<typeof m.button>`
- Extend HTML element props for flexibility: `extends ComponentProps<"section">`

## Type Definitions

- `elements.types.ts`: UI element types (`SVGIcon`, `SectionRef`, `NavLink`)
- `data.types.ts`: Data structure types (`ExperienceData`, `SkillsData`, `HeroRingData`)
- Template literal types for IDs: `id: \`exp-${number}\`` in `ExperienceData`
- Union types for limited values: `type: "academic" | "work"`

<!-- GSD:conventions-end -->

<!-- GSD:architecture-start source:ARCHITECTURE.md -->

## Architecture

## System Overview

```text

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

- **Provider-based architecture** - Nested providers for concerns: theme, i18n, scroll, refs
- **Ref-based tracking** - IntersectionObserver for passive scroll position tracking
- **Animation-driven UX** - Motion library for all interactive animations
- **Data constant driven** - All content lives in `constants/data/`
- **Locale-aware routing** - Dynamic routing via `[locale]` segment with next-intl
- **Tailwind-first styling** - All styling via Tailwind CSS with custom theme variables

## Layers

- Purpose: Initialize all global providers and apply root styling
- Location: `src/app/[locale]/layout.tsx`
- Contains: Provider setup, metadata, font configuration
- Depends on: next-intl plugin, next-themes, Lenis
- Used by: Next.js app router
- Purpose: Coordinate animation states and conditional rendering of sections
- Location: `src/components/screens/Home/index.tsx`
- Contains: Hero component, section list, conditional rendering logic
- Depends on: Layout sections, contexts
- Used by: Page component
- Purpose: Render major content sections (Hero, AboutMe, Experiences, Skills)
- Location: `src/components/layout/Sections/*/index.tsx`
- Contains: Section-specific logic, data mapping, internal component composition
- Depends on: UI components, data constants, contexts
- Used by: Home screen
- Purpose: Provide reusable atomic components
- Location: `src/components/ui/*.tsx`
- Contains: Button, Icon, Section, SectionTitle, Cursor, Tooltip, IconButton
- Depends on: Tailwind CSS, Motion, utilities (cn, handlers)
- Used by: Layout sections, Home screen, Header
- Purpose: Manage scroll tracking and section references
- Location: `src/contexts/sectionRefs.context.tsx`
- Contains: IntersectionObserver logic, ref management, active section tracking
- Depends on: React Context API, useEffect, useRef
- Used by: Header, sections, Home screen
- Purpose: Provide typed, centralized content and configuration
- Location: `src/constants/data/*.ts`, `src/constants/icons.ts`, `src/constants/objects.ts`
- Contains: Skills, experiences, projects data; icon maps; navigation links
- Depends on: Types definitions
- Used by: All components and sections

## Data Flow

### Primary Request Path (Page Load → Display)

### Scroll Tracking & Navigation

### Carousel (Experiences)

### Animation Orchestration

- Local component state: Animation visibility (`contentVisible`, `ringsExpanded`), carousel navigation (`canPrev`, `canNext`)
- Context state: `activeSec` (which section is in view), `refs` (section element references)
- Global state via providers: Theme (next-themes), Locale (next-intl), Smooth scroll (Lenis)

## Key Abstractions

- Purpose: Passive scroll tracking without listening to scroll events
- Examples: `src/contexts/sectionRefs.context.tsx`, used by Header, Home screen
- Pattern: IntersectionObserver + Context API to track which section is viewport-aligned
- Benefits: Performant (no scroll listeners), decoupled (header doesn't know about section structure)
- Purpose: Reusable animation definitions for Motion library
- Examples: `contentVars`, `dotToRing`, `circleVars` in components
- Pattern: Define Variants objects, apply via Motion components with `variants`, `initial`, `animate`, `whileHover`, `whileInView`
- Benefits: Consistent animation timing, easy tweaks, declarative
- Purpose: Unified icon API across different icon libraries
- Examples: `ICONS.skills.frontend`, `ICONS.social.gitHub`, `ICONS.nav.aboutMe`
- Pattern: Map icon names to imports from phosphor-icons, simple-icons, devicons; re-export from `constants/icons.ts`
- Benefits: Single source of truth, easy library swaps, type-safe
- Purpose: Centralized, typed content structure
- Examples: `SKILLS`, `EXPERIENCES`, `HERO_RINGS` in `constants/data/` and `constants/objects.ts`
- Pattern: Define as const arrays with data types; import into components for rendering
- Benefits: Easy to update without touching components, structured, i18n-ready (uses translation keys)
- Purpose: Encapsulate common operations
- Examples: `cn()` for class merging, `handleScrollToSection()` for scroll navigation
- Pattern: Pure functions in `libs/` and `utils/` directories
- Benefits: Reusable, testable, decoupled from components

## Entry Points

- Location: `src/app/[locale]/page.tsx`
- Triggers: GET `/[locale]/` route request
- Responsibilities: Renders HomeScreen component
- Location: `src/app/[locale]/layout.tsx`
- Triggers: Before page component renders (applied to all routes)
- Responsibilities: Initialize providers, set metadata, apply root HTML structure
- Location: `src/components/screens/Home/index.tsx`
- Triggers: Rendered by page.tsx
- Responsibilities: Coordinate Hero animation state, render Header/sections conditionally, render MobileNav
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

### Hardcoded Content in Components

### Inline Variant Definitions

### Direct DOM Manipulation

### Tightly Coupled State

## Error Handling

- Locale validation: If `[locale]` doesn't match routing.locales, call `notFound()` (see `src/app/[locale]/layout.tsx:49-51`)
- Ref safety: Always check `ref.current` before accessing (see `src/utils/handlers.util.ts:3-4`)
- Observer safety: MutationObserver watches for refs to appear in DOM before observing (see `src/contexts/sectionRefs.context.tsx:72-88`)
- Carousel safety: Check `emblaApi` exists before calling methods (see `src/components/layout/Sections/Experiences/index.tsx:32-33`)
- No try-catch blocks detected; relies on Next.js error boundaries and optional chaining

## Cross-Cutting Concerns

<!-- GSD:architecture-end -->

<!-- GSD:skills-start source:skills/ -->

## Project Skills

No project skills found. Add skills to any of: `.claude/skills/`, `.agents/skills/`, `.cursor/skills/`, `.github/skills/`, or `.codex/skills/` with a `SKILL.md` index file.
<!-- GSD:skills-end -->

<!-- GSD:workflow-start source:GSD defaults -->

## GSD Workflow Enforcement

Before using Edit, Write, or other file-changing tools, start work through a GSD command so planning artifacts and execution context stay in sync.

Use these entry points:

- `/gsd-quick` for small fixes, doc updates, and ad-hoc tasks
- `/gsd-debug` for investigation and bug fixing
- `/gsd-execute-phase` for planned phase work

Do not make direct repo edits outside a GSD workflow unless the user explicitly asks to bypass it.
<!-- GSD:workflow-end -->

<!-- GSD:profile-start -->

## Developer Profile

> Profile not yet configured. Run `/gsd-profile-user` to generate your developer profile.
> This section is managed by `generate-claude-profile` -- do not edit manually.
<!-- GSD:profile-end -->
