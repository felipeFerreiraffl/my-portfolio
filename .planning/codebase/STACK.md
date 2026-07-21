# Technology Stack

**Analysis Date:** 2026-07-21

## Languages

**Primary:**
- TypeScript 5 - Full codebase (App Router, components, utilities, types)
- JavaScript - Configuration files (next.config.ts, eslint.config.mjs, postcss.config.mjs)

**CSS:**
- Tailwind CSS 4 - Utility-first styling framework

## Runtime

**Environment:**
- Node.js 24.12.0 (recommended)

**Package Manager:**
- npm 11.6.2
- Lockfile: `package-lock.json` (present)

## Frameworks

**Core:**
- Next.js 16.2.7 - Full-stack React framework with App Router
  - React Compiler enabled for performance optimization
  - Turbopack bundler integration for faster builds
  - SVG import support via @svgr/webpack

**UI & Rendering:**
- React 19.2.4 - Component library and rendering
- React DOM 19.2.4 - DOM integration

**Styling:**
- Tailwind CSS 4 - Utility-first CSS framework
- @tailwindcss/postcss 4 - PostCSS plugin for Tailwind
- PostCSS - CSS transformation pipeline (`postcss.config.mjs`)

**Internationalization (i18n):**
- next-intl 4.13.0 - Multi-language support
  - Locales: Portuguese (pt-br), English (en)
  - Default: Portuguese (pt-br)
  - Request configuration: `src/libs/i18n/request.ts`
  - Routing configuration: `src/libs/i18n/routing.ts`

**Animation & Motion:**
- motion 12.42.0 - Animation library with lazy motion features
  - LazyMotion integration for performance

**Scroll & User Experience:**
- Lenis 1.3.25 - Smooth scroll behavior
- embla-carousel-react 8.6.0 - Carousel component library

**Testing:**
- Testing framework: Not configured
- No test dependencies in package.json

**Build/Dev:**
- TypeScript 5 - Static type checking
- ESLint 9 - JavaScript/TypeScript linting
- eslint-config-next 16.2.6 - Next.js-specific ESLint configuration
- Babel React Compiler Plugin 1.0.0 - Automatic component memoization
- @svgr/webpack 8.1.0 - SVG to React component loader

## Key Dependencies

**UI Components & Icons:**
- @phosphor-icons/react 2.1.10 - Phosphor icon set
- @icons-pack/react-simple-icons 13.13.0 - Simple icon set
- devicons-react 1.5.0 - Technology/skill icons
- clsx 2.1.1 - Utility for conditional CSS class names
- tailwind-merge 3.6.0 - Merge Tailwind CSS classes intelligently

**Theming:**
- @teispace/next-themes 2.0.2 - Theme switching (light/dark mode)
  - Themes defined in: `src/constants/elements.ts`
  - Server-side theme detection: `getTheme()` from provider

**Font:**
- Space Grotesk (from next/font/google) - Primary font family
  - Weights: 400, 500, 700
  - CSS variable: `--font-space_grotesk`

**Utilities:**
- tw-animate-css 1.4.0 - Additional Tailwind animation utilities

**Type Definitions:**
- @types/node 20 - Node.js type definitions
- @types/react 19 - React type definitions
- @types/react-dom 19 - React DOM type definitions

## Configuration

**Environment:**
- No environment variables required
- No .env file needed for development or production
- Timezone: America/Sao_Paulo (hardcoded in layout)

**Build:**
- Config file: `next.config.ts`
- TypeScript config: `tsconfig.json`
  - Target: ES2017
  - Module resolution: bundler
  - Path aliases: `@/*` → `./src/*`
  - Strict mode enabled
- PostCSS config: `postcss.config.mjs`
- ESLint config: `eslint.config.mjs`
  - Configurations used:
    - eslint-config-next/core-web-vitals
    - eslint-config-next/typescript

**i18n Messages:**
- Location: `messages/` directory
- Format: JSON
- Files: `en.json`, `pt-br.json`

## Platform Requirements

**Development:**
- Node.js 24.12.0+ (verified working)
- npm 11.6.2+ or compatible package manager
- VSCode recommended (.vscode config present)

**Production:**
- Node.js 24.12.0+ or compatible
- Deployment target: Vercel (default for Next.js) or any Node.js hosting
- Build output: `.next/` directory (generated)

## Scripts

**Available Commands:**
```bash
npm run dev       # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

---

*Stack analysis: 2026-07-21*
