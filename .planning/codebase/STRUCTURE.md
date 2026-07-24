# Codebase Structure

**Analysis Date:** 2026-07-21

## Directory Layout

```
my-portfolio/
├── src/                              # Source code root
│   ├── app/
│   │   └── [locale]/                 # Dynamic locale segment for i18n routing
│   │       ├── layout.tsx            # Root server layout with providers
│   │       └── page.tsx              # Home page (renders HomeScreen)
│   │
│   ├── components/                   # React components (organized by scope)
│   │   ├── layout/                   # Page layout components
│   │   │   ├── Header/               # Navigation header with theme/lang switchers
│   │   │   │   ├── index.tsx
│   │   │   │   ├── LanguageChanger.tsx
│   │   │   │   ├── MobileNav.tsx
│   │   │   │   └── ThemeChanger.tsx
│   │   │   └── Sections/             # Major content sections
│   │   │       ├── Hero/             # Animated hero with rings
│   │   │       │   ├── index.tsx
│   │   │       │   └── HeroRings.tsx
│   │   │       ├── AboutMe/          # About section with hobbies/goals
│   │   │       │   ├── index.tsx
│   │   │       │   ├── AboutTopic.tsx
│   │   │       │   └── _helpers/objects.ts  # Local data for about section
│   │   │       ├── Experiences/      # Carousel of experiences
│   │   │       │   ├── index.tsx
│   │   │       │   ├── ExperienceCard.tsx
│   │   │       │   └── ExperienceTimeline.tsx
│   │   │       └── Skills/           # Skill categories display
│   │   │           ├── index.tsx
│   │   │           └── SkillSet.tsx
│   │   ├── screens/                  # Full-page screen components
│   │   │   └── Home/
│   │   │       └── index.tsx         # Orchestrates Hero + Sections
│   │   └── ui/                       # Reusable atomic UI components
│   │       ├── Button.tsx            # Animated button with rings
│   │       ├── Cursor.tsx            # Custom cursor component
│   │       ├── Icon.tsx              # Icon wrapper
│   │       ├── IconButton.tsx        # Icon-only button
│   │       ├── Section.tsx           # Section container wrapper
│   │       ├── SectionTitle.tsx      # Section title component
│   │       └── Tooltip.tsx           # Tooltip component
│   │
│   ├── constants/                    # Configuration and data constants
│   │   ├── data/                     # Content data (skills, experiences, projects)
│   │   │   ├── index.ts              # Re-exports all data
│   │   │   ├── skills.ts             # SKILLS array (frontend, backend, tools)
│   │   │   ├── experiences.ts        # EXPERIENCES array (timeline data)
│   │   │   └── projects.ts           # PROJECTS array (if used)
│   │   ├── icons.ts                  # Icon imports and mappings
│   │   ├── elements.ts               # UI element constants
│   │   └── objects.ts                # Navigation, external links, hero rings
│   │
│   ├── contexts/                     # React Context for shared state
│   │   └── sectionRefs.context.tsx   # Scroll tracking via IntersectionObserver
│   │
│   ├── hooks/                        # Custom React hooks
│   │   └── useEmblaTimeline.ts       # Carousel timeline navigation hook
│   │
│   ├── libs/                         # Library utilities and wrappers
│   │   ├── i18n/                     # Internationalization setup
│   │   │   ├── routing.ts            # Define locales and routing config
│   │   │   ├── request.ts            # Server-side i18n utilities
│   │   │   └── navigation.ts         # Client-side navigation helpers
│   │   ├── cn.ts                     # Class merging utility (clsx + twMerge)
│   │   ├── smoothScroll.tsx          # Lenis smooth scroll provider
│   │   └── withFillWeight.tsx        # Higher-order component (animation wrapper)
│   │
│   ├── styles/                       # Global CSS and theme definitions
│   │   ├── globals.css               # Root styles, imports
│   │   ├── _base.css                 # Base element styles
│   │   └── _themes.css               # CSS variables for light/dark themes
│   │
│   ├── types/                        # TypeScript type definitions
│   │   ├── core/
│   │   │   └── svgr.d.ts             # Type definitions for SVGR imports
│   │   └── elements/
│   │       ├── data.types.ts         # Data structure types (Skill, Experience, etc.)
│   │       └── elements.types.ts     # UI element types (SVGIcon, SectionRef, etc.)
│   │
│   ├── utils/                        # Utility functions
│   │   └── handlers.util.ts          # Event handlers (scroll-to-section)
│   │
│   ├── assets/                       # Static SVG assets
│   │   └── svg/                      # Organized by section
│   │       ├── aboutMe/              # About section illustrations
│   │       ├── arrows/               # Navigation arrows
│   │       ├── experiences/          # Experience section icons
│   │       ├── lang/                 # Language selector icons
│   │       ├── nav/                  # Navigation icons
│   │       └── skills/               # Skills section illustrations
│   │           └── icons/            # Skill category icons
│   │
│   └── proxy.ts                      # (Utility or configuration)
│
├── messages/                         # i18n translation files
│   ├── en.json                       # English translations
│   └── pt-br.json                    # Portuguese (Brazil) translations
│
├── public/                           # Static files (favicon, PDF, etc.)
│   ├── favicon.ico
│   └── programmer_cv.pdf
│
├── .claude/                          # Claude workspace config
├── docs/                             # Project documentation
├── .next/                            # Next.js build output (gitignored)
│
├── package.json                      # Dependencies and scripts
├── package-lock.json                 # Dependency lock
├── next.config.ts                    # Next.js configuration
├── tsconfig.json                     # TypeScript configuration
├── postcss.config.mjs                # PostCSS configuration (Tailwind)
├── eslint.config.mjs                 # ESLint configuration
└── .gitignore                        # Git ignore rules
```

## Directory Purposes

**`src/app/`:**
- Purpose: Next.js App Router entry point
- Contains: Locale-based routing segment, layout and page components
- Key files: `[locale]/layout.tsx` (root provider setup), `[locale]/page.tsx` (home page)

**`src/components/layout/`:**
- Purpose: Page structure and major sections
- Contains: Header (nav, theme, language), Sections (Hero, AboutMe, Experiences, Skills)
- Key files: All section components have their own directory with sub-components

**`src/components/screens/`:**
- Purpose: Full-page screen components
- Contains: Home screen that orchestrates overall layout and animation state
- Key files: `Home/index.tsx` (main orchestrator)

**`src/components/ui/`:**
- Purpose: Reusable atomic UI components
- Contains: Button, Icon, Section, SectionTitle, Cursor, Tooltip, IconButton
- Key files: All are single-file components with export as default

**`src/constants/data/`:**
- Purpose: Centralized, typed content and configuration
- Contains: SKILLS, EXPERIENCES, PROJECTS arrays; navigation links; hero ring definitions
- Key files: `index.ts` re-exports all; individual files per category

**`src/contexts/`:**
- Purpose: React Context providers for shared state
- Contains: SectionRefsProvider for scroll tracking
- Key files: `sectionRefs.context.tsx` (IntersectionObserver + refs)

**`src/hooks/`:**
- Purpose: Custom React hooks
- Contains: useEmblaTimeline for carousel interaction
- Key files: Each hook in its own file

**`src/libs/`:**
- Purpose: Utility libraries and wrappers
- Contains: i18n configuration, class merging, smooth scroll provider, animation HOC
- Key files: `cn.ts` (used everywhere for class merging), `i18n/*` (routing config)

**`src/styles/`:**
- Purpose: Global CSS and theme variables
- Contains: Base styles, theme CSS variables, global imports
- Key files: `globals.css` (entry point), `_themes.css` (dark/light theme vars)

**`src/types/`:**
- Purpose: TypeScript type definitions
- Contains: Data shapes, UI types, icon types, SVGR types
- Key files: `elements/data.types.ts` (Skill, Experience, HeroRing), `elements/elements.types.ts` (SVGIcon, SectionRef)

**`src/utils/`:**
- Purpose: Pure utility functions
- Contains: Event handlers, calculations, transformations
- Key files: `handlers.util.ts` (scroll-to-section handler)

**`src/assets/svg/`:**
- Purpose: Static SVG assets imported as React components
- Contains: Section-specific illustrations and icons
- Key files: Organized by section (aboutMe, experiences, skills, nav, lang, arrows)

**`messages/`:**
- Purpose: i18n translation files
- Contains: JSON files with translation keys and values
- Key files: `en.json` (English), `pt-br.json` (Portuguese Brazil)

## Key File Locations

**Entry Points:**
- `src/app/[locale]/page.tsx`: Route handler → renders HomeScreen
- `src/app/[locale]/layout.tsx`: Root server layout → initializes providers
- `src/components/screens/Home/index.tsx`: Main orchestrator → coordinates sections and animation

**Configuration:**
- `tsconfig.json`: TypeScript config with path alias `@/*` → `src/*`
- `next.config.ts`: Next.js config with next-intl plugin, turbopack SVG loader
- `messages/en.json`, `messages/pt-br.json`: i18n translation strings

**Core Logic:**
- `src/contexts/sectionRefs.context.tsx`: Scroll tracking and active section management
- `src/libs/i18n/routing.ts`: Locale routing configuration (locales, prefix, detection)
- `src/utils/handlers.util.ts`: Smooth scroll navigation helper

**Styling & Theme:**
- `src/styles/globals.css`: Global imports and root styles
- `src/styles/_themes.css`: CSS variables for light/dark themes
- `postcss.config.mjs`: Tailwind CSS configuration

**Data:**
- `src/constants/data/skills.ts`: SKILLS array (frontend, backend, tools)
- `src/constants/data/experiences.ts`: EXPERIENCES array (work/academic)
- `src/constants/data/projects.ts`: PROJECTS array (if used)
- `src/constants/objects.ts`: Navigation links, external links, hero rings

## Naming Conventions

**Files:**
- **Components:** PascalCase filename matching export name (e.g., `Button.tsx`, `Header/index.tsx`)
- **Pages:** lowercase `page.tsx` (Next.js convention)
- **Layout:** lowercase `layout.tsx` (Next.js convention)
- **Type files:** `*.types.ts` suffix (e.g., `data.types.ts`)
- **Utilities:** `*.util.ts` suffix (e.g., `handlers.util.ts`)
- **Config:** `*.config.*` or explicit names (e.g., `next.config.ts`)
- **Context:** `*.context.tsx` suffix (e.g., `sectionRefs.context.tsx`)
- **Styles:** `*.css` or `_*.css` for partial files

**Directories:**
- **Feature-based:** Components organized by feature (Header, Sections, ui, screens)
- **Type-based:** Code organized by type (components, constants, hooks, libs, types, utils)
- **Locale:** Dynamic segment `[locale]` for i18n routing
- **Underscore prefix:** `_helpers/` for internal utilities, `_themes.css` for private styles

**Functions:**
- **camelCase:** All function names (e.g., `handleScrollToSection`, `useEmblaCarousel`)
- **Handler prefix:** Event handlers start with `handle` (e.g., `handleExpandComplete`, `handleScrollToSection`)
- **Hook prefix:** Custom React hooks start with `use` (e.g., `useEmblaTimeline`, `useSectionRefs`)
- **Underscore prefix:** Private/internal functions start with `_` (e.g., `_helpers/objects.ts`)

**Variables:**
- **camelCase:** All variable and constant names
- **UPPERCASE:** Constants (e.g., `SKILLS`, `EXPERIENCES`, `HERO_RINGS`, `NAV_LINKS`)
- **Descriptive:** Variant names end with `Vars` (e.g., `contentVars`, `circleVars`, `revealVars`)

**Types:**
- **PascalCase:** All type/interface names (e.g., `SectionProps`, `HeroRingData`, `ExperienceData`)
- **Suffix:** `Props` for component prop types, `Data` for data structures, `Context` for context types
- **Generic:** Type parameters use `T`, `K`, `V` (standard convention)

## Where to Add New Code

**New Feature (e.g., Projects section):**
- Primary code: `src/components/layout/Sections/Projects/index.tsx` (main component), `src/components/layout/Sections/Projects/ProjectCard.tsx` (card component)
- Data: `src/constants/data/projects.ts` (PROJECTS array)
- Types: Add to `src/types/elements/data.types.ts` (ProjectData interface)
- i18n: Add keys to `messages/en.json` and `messages/pt-br.json`
- Icons: If new icons needed, import in `src/constants/icons.ts` and reference
- Styling: Use Tailwind classes in component JSX, add CSS variables to `_themes.css` if needed

**New UI Component:**
- Location: `src/components/ui/ComponentName.tsx` (single file, default export)
- Pattern: Functional component with TypeScript props interface
- Example: Follow `Button.tsx` or `Icon.tsx` pattern with Motion variants if animated
- Styling: Tailwind CSS with `cn()` utility for conditional classes
- Export: Default export from component file

**New Utility Function:**
- Location: `src/utils/category.util.ts` (grouped by category)
- Pattern: Pure function, type-safe with TypeScript
- Example: Follow `handlers.util.ts` pattern
- Export: Named export from utility file
- Usage: Import in components that need it

**New Hook:**
- Location: `src/hooks/useNameHook.ts` (single file, default export)
- Pattern: Custom React hook following React conventions (use* prefix)
- Example: Follow `useEmblaTimeline.ts` pattern
- Export: Default export or named export
- Usage: Import and call in client components

**New Constants/Data:**
- Static config: `src/constants/elements.ts` or `src/constants/objects.ts`
- Content data: `src/constants/data/category.ts` (new file per category)
- Icons: Add import to `src/constants/icons.ts` and map to object key
- Navigation: Update `NAV_LINKS` in `src/constants/objects.ts`

**New i18n Strings:**
- Add keys to `messages/en.json` (English)
- Add corresponding keys to `messages/pt-br.json` (Portuguese)
- Use in components via `useTranslations()` hook
- Nested keys: `section.subsection.key` (e.g., `"frontend.title"`, `"nav.aboutMe"`)

**New Type Definition:**
- Element types: `src/types/elements/elements.types.ts` (UI/component types)
- Data types: `src/types/elements/data.types.ts` (data structure types)
- Core types: `src/types/core/*.d.ts` (library augmentations, e.g., SVGR)

**New Page/Route:**
- File: `src/app/[locale]/route-name/page.tsx` (or nested directory)
- Layout: `src/app/[locale]/route-name/layout.tsx` (if custom layout needed)
- Note: Must maintain `[locale]` segment for i18n routing

## Special Directories

**`src/assets/svg/`:**
- Purpose: SVG source files imported as React components
- Generated: No (manually created)
- Committed: Yes
- Loader: @svgr/webpack configured in `next.config.ts` to transform *.svg → React component
- Usage: Import as component (`import { MyIcon } from "@/assets/svg/..."`) and render

**`.next/`:**
- Purpose: Next.js build output and cache
- Generated: Yes (by Next.js during build)
- Committed: No (in .gitignore)
- Contents: Compiled code, server functions, type definitions

**`messages/`:**
- Purpose: i18n translation files
- Generated: No (manually created)
- Committed: Yes
- Format: JSON with translation keys and locale-specific strings
- Usage: `useTranslations()` hook reads from these files at runtime

**`node_modules/`:**
- Purpose: Installed dependencies
- Generated: Yes (by npm/yarn)
- Committed: No (in .gitignore)
- Management: Locked in `package-lock.json`

**`.claude/`:**
- Purpose: Claude workspace configuration
- Generated: Yes (by Claude)
- Committed: Yes (planning directory)
- Contents: GSD phase files, planning documents

**`docs/`:**
- Purpose: Project documentation
- Generated: Partially (some may be auto-generated)
- Committed: Yes
- Contents: Architecture, setup, and usage guides

---

*Structure analysis: 2026-07-21*
