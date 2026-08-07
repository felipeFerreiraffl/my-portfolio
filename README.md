<div align="center">

# Felipe Ferreira — Professional Portfolio

Personal portfolio of a front-end developer, built as a bilingual, animated single-page experience.

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Motion](https://img.shields.io/badge/Motion-12-FFF116?style=for-the-badge&logo=framer&logoColor=black)](https://motion.dev/)
[![next-intl](https://img.shields.io/badge/next--intl-4-EC4899?style=for-the-badge&logo=googletranslate&logoColor=white)](https://next-intl.dev/)

**English** · [Português](./README.pt-BR.md)

</div>

---

## About the project

This repository holds my personal portfolio: a single-page site that presents who I am,
the experiences I've been through, the skills I work with and the projects I've built.

It runs on the Next.js App Router with a `[locale]` segment, so the whole site exists in
two languages — Brazilian Portuguese (default) and English — served from prefixed routes
(`/pt-br`, `/en`). Every piece of content is centralized in typed constants and translation
files, so a section is data plus a component, never hardcoded copy.

The interface was designed in Figma first and then implemented here, with animation treated
as part of the design rather than decoration: an intro sequence of expanding rings, smooth
scrolling, section-aware navigation, and carousels for experiences and projects.

## Motivation

- **One professional home.** Skills, experiences and projects scattered across a résumé, a
  GitHub profile and a LinkedIn page are hard to read as a whole. This site puts them in a
  single, self-contained narrative.
- **Reaching two audiences.** I write and work in Brazilian Portuguese, but front-end work
  isn't limited by language. The site is bilingual from the routing layer up, so it reads
  natively for both Brazilian and international visitors.
- **Showing the craft, not just describing it.** A front-end portfolio should demonstrate
  front-end work. The motion, the theming, the responsive layouts and the interaction details
  are the argument.
- **Treating a personal project with production discipline.** Strict TypeScript, typed
  centralized data, per-locale SEO metadata, structured data, security headers, respect for
  `prefers-reduced-motion` — plus written conventions so the codebase stays consistent as it
  grows. Those conventions are documented in [`docs/`](#documentation) and are part of the
  project, not an afterthought.

## Features

### Content sections

- **Hero** — animated intro with expanding rings, current role and status.
- **About me** — presentation, hobbies and goals.
- **Experiences** — academic and professional history in an Embla carousel with a synced
  timeline, tags, descriptions and per-experience skills.
- **Skills** — front-end, back-end and tools categories, with proficiency levels,
  "most used" highlights and connector lines between items.
- **Projects** — project cards in a carousel, each opening a details view with screenshot
  gallery, technologies, feature list and repository link.
- **Footer** — social links, Figma design link, and an e-mail action that copies the address
  on desktop and opens the mail client on mobile.

### Internationalization

- Two locales — `pt-br` (default) and `en` — handled by `next-intl`.
- Always-prefixed routes with automatic locale detection through Next.js middleware.
- All copy lives in `messages/pt-br.json` and `messages/en.json`; keys are mirrored between
  both files.
- Locale-aware metadata, `hreflang` alternates and Open Graph locales.

### Interface and interaction

- Light and dark themes resolved before the first paint (no flash of wrong theme), including
  the browser theme color.
- Lenis smooth scrolling, scroll-spy navigation that highlights the active section via
  `IntersectionObserver`, and a scroll-to-top button.
- Desktop header and a dedicated mobile navigation bar.
- Custom cursor, tooltips and animated buttons.
- Global `prefers-reduced-motion` support — animations back off when the visitor asks for it.
- Responsive layouts from mobile to large desktop.

### SEO and delivery

- Per-locale metadata (title templates, description, keywords, canonical URLs, language
  alternates).
- Open Graph and Twitter card images generated at request time from the app router.
- JSON-LD `Person` structured data, with the current job derived from the experiences data
  rather than hardcoded.
- `sitemap.ts` and `robots.ts` generated from the routing config.
- Security headers applied to every route (`Strict-Transport-Security`, `X-Frame-Options`,
  `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`).
- Static generation per locale, React Compiler enabled, and SVGs imported as React components.
- Custom `not-found` and `error` pages, both translated.
- Downloadable CV served from `public/`.

## Tech stack

| Area | Technologies |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router), [React 19](https://react.dev/) |
| Language | [TypeScript 5](https://www.typescriptlang.org/) (strict mode) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com/), PostCSS, `tw-animate-css`, `clsx` + `tailwind-merge` |
| Internationalization | [next-intl 4](https://next-intl.dev/) |
| Animation & scroll | [Motion 12](https://motion.dev/), [Lenis](https://lenis.darkroom.engineering/), [Embla Carousel](https://www.embla-carousel.com/) (+ autoplay and fade plugins) |
| Theming | `@teispace/next-themes` |
| Icons & assets | [Phosphor Icons](https://phosphoricons.com/), [Simple Icons](https://simpleicons.org/), [Devicons](https://devicon.dev/), SVGR |
| Typography | Space Grotesk via `next/font/google` |
| Analytics | Vercel Analytics, Vercel Speed Insights |
| Tooling | ESLint 9 (`eslint-config-next`), Babel React Compiler plugin |

## Getting started

### Requirements

- [Node.js](https://nodejs.org/) `24.12.0` (or newer)
- npm `11.6.2` (or newer)

### Installation

```bash
git clone https://github.com/felipeFerreiraffl/my-portfolio.git
cd my-portfolio
npm install
```

### Running

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — the middleware redirects to the detected
locale (`/pt-br` or `/en`).

### Scripts

| Script | What it does |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Creates the production build |
| `npm run start` | Serves the production build |
| `npm run lint` | Runs ESLint over the codebase |

### Environment variables

None are required to run the project locally.

| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Optional | Absolute base URL used for canonical links, `hreflang` alternates, Open Graph images and the sitemap. Falls back to the Vercel production URL, then to `http://localhost:3000`. |

## Project structure

```
my-portfolio/
├── docs/                  # Naming conventions and folder-structure references
├── messages/              # Translation files (pt-br.json, en.json)
├── public/                # Favicon and downloadable CV
└── src/
    ├── app/[locale]/      # App Router routes, layout, metadata, OG images
    ├── assets/            # SVG icons and project images
    ├── components/        # layout/ (Header, Footer, Sections), screens/, ui/
    ├── constants/         # Typed content and configuration (data, icons, seo)
    ├── contexts/          # Shared React contexts
    ├── hooks/             # Custom hooks
    ├── libs/              # i18n setup, smooth scroll, class merging
    ├── styles/            # Global stylesheet and theme variables
    ├── types/             # Type definitions
    └── utils/             # Pure helper functions
```

A folder-by-folder breakdown — including what belongs in each one and where new code should
go — lives in [`docs/folder-structure.md`](./docs/folder-structure.md).

## Documentation

The repository carries two reference documents. They are a pair: one answers *how things are
named*, the other answers *where things live*.

| Document | Covers |
|---|---|
| [`docs/convention.md`](./docs/convention.md) | Naming conventions — case rules for variables, constants, functions, components, hooks, utils, assets and file names, with examples from the source and the documented exceptions. |
| [`docs/folder-structure.md`](./docs/folder-structure.md) | Folder organization — the type-based/feature-based model, what each folder under `src/`, `messages/` and `public/` holds, and a "Where to Add New Code" guide. |

## Contact

- **GitHub** — [@felipeFerreiraffl](https://github.com/felipeFerreiraffl)
- **LinkedIn** — [Felipe Ferreira](https://www.linkedin.com/in/felipe-ferreira-959bb8271/)
- **E-mail** — [felipe.ferr.lima04@gmail.com](mailto:felipe.ferr.lima04@gmail.com)
