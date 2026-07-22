# Folder Structure

This document is the authoritative reference for *where* code lives in this codebase. It covers `/src` (organized by type at the top level, by feature within `components/`), `/messages`, and briefly `/public`, explaining what belongs in each folder and how to decide where new code goes. It complements `docs/convention.md`, which documents *how things are named*; this document documents *where things live*.

This is a living reference: as the codebase evolves, keep it in sync with the actual folder organization in use.

## Organization Model

The codebase mixes two organizing principles, and knowing which one applies to a given folder is the key to navigating it:

- **Type-based** at the top level of `src/` — `constants/`, `contexts/`, `hooks/`, `libs/`, `styles/`, `types/`, `utils/` each group code by *what kind of thing it is* (a hook, a util, a type), regardless of which feature uses it.
- **Feature-based** within `src/components/` — `layout/Sections/*` and `screens/` group code by *which feature/section it belongs to* (Hero, AboutMe, Experiences, Skills), each as its own directory with its sub-components colocated.

`src/components/ui/` is the exception inside `components/`: it's atomic and reusable, not feature-specific, so it stays type-based (a library of standalone building blocks).

## `src/app/`

Next.js App Router entry point. Contains the `[locale]` dynamic segment that drives locale-based routing, plus the root layout and home page.

- `src/app/[locale]/layout.tsx` — root server layout; initializes theme, i18n, smooth scroll, and refs providers
- `src/app/[locale]/page.tsx` — home route; renders `HomeScreen`

## `src/components/layout/`

Page structure and major content sections — the feature-based half of `components/`.

- `src/components/layout/Header/index.tsx` — navigation header with scroll-based active section highlighting
- `src/components/layout/Header/LanguageChanger.tsx`, `ThemeChanger.tsx`, `MobileNav.tsx` — header sub-components
- `src/components/layout/Sections/Hero/index.tsx`, `HeroRings.tsx` — animated hero with rings
- `src/components/layout/Sections/AboutMe/index.tsx`, `AboutTopic.tsx`, `_helpers/objects.ts` — about section (the `_helpers/` prefix marks internal, section-local data)
- `src/components/layout/Sections/Experiences/index.tsx`, `ExperienceCard.tsx`, `ExperienceTimeline.tsx` — carousel of experience cards
- `src/components/layout/Sections/Skills/index.tsx`, `SkillSet.tsx` — skill categories display

Each section lives in its own directory under `Sections/`, with any section-specific sub-components colocated alongside its `index.tsx`.

## `src/components/screens/`

Full-page screen components that orchestrate layout sections and top-level animation state.

- `src/components/screens/Home/index.tsx` — coordinates the Hero reveal animation, then conditionally renders Header and the remaining sections

## `src/components/ui/`

Reusable, atomic UI components — the type-based exception within `components/`. Every file here is a single-file component with a default export.

- `src/components/ui/Button.tsx` — animated button with rings
- `src/components/ui/Icon.tsx`, `IconButton.tsx` — icon wrapper and icon-only button
- `src/components/ui/Section.tsx`, `SectionTitle.tsx` — section container and title wrappers
- `src/components/ui/Cursor.tsx`, `Tooltip.tsx` — custom cursor and tooltip

## `src/constants/`

Centralized, typed content and configuration — the single source of truth for data rendered across sections.

- `src/constants/data/index.ts` — re-exports all data modules
- `src/constants/data/skills.ts`, `experiences.ts`, `projects.ts` — `SKILLS`, `EXPERIENCES`, `PROJECTS` arrays
- `src/constants/icons.ts` — icon imports and mappings (`ICONS.skills.frontend`, `ICONS.nav.aboutMe`, etc.), unifying phosphor-icons, simple-icons, and devicons behind one API
- `src/constants/objects.ts` — navigation links, external links, hero ring definitions (`NAV_LINKS`, `EXTERNAL_LINKS`, `HERO_RINGS`)
- `src/constants/elements.ts` — UI element constants (e.g. `AVAILABLE_THEMES`)

## `src/contexts/`

React Context providers for state shared across the component tree.

- `src/contexts/sectionRefs.context.tsx` — tracks the active section via `IntersectionObserver`, exposes refs and `activeSec` to Header and sections

## `src/hooks/`

Custom React hooks, one per file.

- `src/hooks/useEmblaTimeline.ts` — carousel timeline navigation logic for the Experiences section

## `src/libs/`

Library utilities and wrappers — shared logic that isn't a hook or a plain utility function.

- `src/libs/i18n/routing.ts`, `request.ts`, `navigation.ts` — internationalization setup (locales, server-side request handling, client-side navigation helpers)
- `src/libs/cn.ts` — class merging utility (`clsx` + `tailwind-merge`), used throughout for conditional Tailwind classes
- `src/libs/smoothScroll.tsx` — Lenis smooth scroll provider
- `src/libs/withFillWeight.tsx` — higher-order component for icon animation styling

## `src/styles/`

Global CSS and theme definitions.

- `src/styles/globals.css` — root styles and imports
- `src/styles/_base.css`, `_themes.css` — partial stylesheets (leading `_` marks them as internal/not a standalone entry point); `_themes.css` holds the light/dark CSS variables

## `src/types/`

TypeScript type definitions, split by concern.

- `src/types/elements/data.types.ts` — data structure types (`SkillsData`, `ExperienceData`, `HeroRingData`)
- `src/types/elements/elements.types.ts` — UI element types (`SVGIcon`, `SectionRef`, `NavLink`)
- `src/types/core/svgr.d.ts` — type augmentation for SVGR (`*.svg` imports as React components)

## `src/utils/`

Pure, small utility functions — event handlers, calculations, transformations that don't need React.

- `src/utils/handlers.util.ts` — `handleScrollToSection`, the smooth-scroll navigation handler

## `src/assets/svg/`

Static SVG assets, imported as React components via `@svgr/webpack`, organized into one subfolder per section/feature. Subfolders use `camelCase`:

- `src/assets/svg/aboutMe/` — About section illustrations
- `src/assets/svg/arrows/` — navigation arrows
- `src/assets/svg/experiences/` — Experience section icons
- `src/assets/svg/lang/` — language selector icons
- `src/assets/svg/nav/` — navigation icons
- `src/assets/svg/skills/`, `skills/icons/` — Skills section illustrations and category icons

This section covers asset **folder** naming only. Asset **file** naming (SVG files use `kebab-case`, e.g. `about-football.svg`) is documented in `docs/convention.md`, since file-naming case is a naming concern, not a folder-organization concern.

## `/messages`

Translation files for i18n, consumed via `useTranslations()`. `messages/en.json` (English) and `messages/pt-br.json` (Portuguese, the project's default locale) exist as parallel files — every key added to one must be mirrored in the other. Keys are nested by section/subsection, e.g. `nav.aboutMe` or `frontend.title`.

## `/public`

Static files served as-is: `public/favicon.ico` (site favicon) and `public/programmer_cv.pdf` (downloadable CV). No deeper mapping — this folder is intentionally shallow.

## Root Configuration

Root-level build and tooling configuration files are intentionally out of scope for this document.

## Where to Add New Code

| Artifact type | Location | Example |
|---|---|---|
| New feature section | `src/components/layout/Sections/<Name>/index.tsx` (+ colocated sub-components) | `src/components/layout/Sections/Projects/index.tsx` |
| New UI component | `src/components/ui/<Name>.tsx` (single file, default export) | `src/components/ui/Badge.tsx` |
| New utility function | `src/utils/<category>.util.ts` (named export) | `src/utils/format.util.ts` |
| New hook | `src/hooks/use<Name>.ts` | `src/hooks/useCarouselDots.ts` |
| New constants/data | `src/constants/data/<category>.ts`, re-exported from `src/constants/data/index.ts` | `src/constants/data/projects.ts` |
| New i18n string | Add the same key to both `messages/en.json` and `messages/pt-br.json`, read via `useTranslations()` | `messages/en.json` + `messages/pt-br.json` |
| New type definition | `src/types/elements/data.types.ts` (data shapes) or `elements.types.ts` (UI/component types) | `src/types/elements/data.types.ts` |
| New page/route | `src/app/[locale]/<route-name>/page.tsx`, keeping the `[locale]` segment | `src/app/[locale]/projects/page.tsx` |

For how to *name* whatever you add above — case style, suffixes, file-naming patterns — see `docs/convention.md`; this table only answers *where*.
