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

## Project Documentation

- `docs/convention.md` — the authoritative reference for HOW things are named (case conventions for variables, constants, functions, components, hooks, utils, assets, and files). Read it before touching any naming decision.
- `docs/folder-structure.md` — the authoritative reference for WHERE code lives (folder organization for `/src`, `/messages`, `/public`, and a "Where to Add New Code" guide). Read it before adding or moving any file.
- These two documents are a pair: naming lives in `docs/convention.md`, structure lives in `docs/folder-structure.md`.

## Conventions

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

## Documentation Lookups

- Use the Context7 MCP server to fetch current official docs whenever a prompt involves a specific library, framework, plugin, or external API — even well-known ones (Next.js, React, Tailwind CSS 4, next-intl, motion, Lenis, embla-carousel-react, etc.)
- Call order: `resolve-library-id` first to get the Context7 library ID, then `query-docs` with a focused, single-topic query
- Consult Context7 before writing or reviewing code whose correctness depends on version-specific syntax, configuration, or API usage — do not rely on training-data knowledge alone
- Skip it for general programming concepts, refactoring, business-logic debugging, or code review that does not hinge on a library's current API

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
