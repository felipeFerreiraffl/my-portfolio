# External Integrations

**Analysis Date:** 2026-07-21

## Overview

This is a static portfolio website with **no external API integrations, databases, or third-party services**. All content is served as static assets with client-side rendering. Data is stored locally in TypeScript constants and JSON translation files.

## APIs & External Services

**None configured.**

This portfolio does not consume any external APIs or call any backend services. It is a fully static application that:
- Renders all content client-side from hardcoded data
- Does not make HTTP requests to external APIs
- Does not connect to backend services
- Does not use webhooks or callbacks

## Data Storage

**Databases:**
- None. No database integration.

**File Storage:**
- Local filesystem only
- Public assets in `public/` directory:
  - `favicon.ico` - Browser favicon
  - `programmer_cv.pdf` - Resume/CV file
  - Static assets referenced in app

**In-Application Data:**
- Hardcoded constants in TypeScript:
  - Skills data: `src/constants/data/skills.ts`
  - Experiences data: `src/constants/data/experiences.ts`
  - Projects data: `src/constants/data/projects.ts`
  - UI constants: `src/constants/elements.ts`, `src/constants/objects.ts`
  - Navigation and links: `src/constants/objects.ts`

**Caching:**
- None configured. Browser cache headers managed by deployment platform.

## Authentication & Identity

**Auth Provider:**
- None. Portfolio is public-facing with no authentication.

**Social Links (External URLs only):**
- GitHub: `https://github.com/felipeFerreiraffl` (hardcoded link)
- LinkedIn: `https://www.linkedin.com/in/felipe-ferreira-959bb8271/` (hardcoded link)

These are static external links only — no OAuth, no login, no session management.

## Content Localization

**Internationalization (i18n):**
- Framework: next-intl 4.13.0
- Supported languages:
  - Portuguese (pt-br) - Default
  - English (en)
- Content source: JSON translation files
  - `messages/en.json` - English translations
  - `messages/pt-br.json` - Portuguese translations
- No external translation service; translations are versioned in repository

## Monitoring & Observability

**Error Tracking:**
- None configured
- Browser console errors only

**Logs:**
- Standard Next.js server logs during development and production
- No log aggregation service

**Analytics:**
- Not configured
- No tracking service (Google Analytics, Segment, etc.)

## CI/CD & Deployment

**Hosting:**
- Designed for Vercel (default Next.js deployment)
- Can be deployed to any Node.js server
- Static pre-rendering possible

**CI Pipeline:**
- None configured
- No GitHub Actions, GitLab CI, or other automation

**Environment:**
- Single environment: static content
- No staging/production separation required

## Environment Configuration

**Required env vars:**
- None. Application has zero external dependencies.

**Optional env vars:**
- None configured.

**Secrets location:**
- Not applicable. No secrets in codebase.

## Webhooks & Callbacks

**Incoming:**
- None. No webhook endpoints.

**Outgoing:**
- None. No external callbacks.

## Font Delivery

**Web Fonts:**
- Google Fonts via Next.js Font Optimization
  - Font: Space Grotesk
  - Served from: next/font/google
  - Weights: 400, 500, 700
  - Subsets: Latin

## Icon Libraries (CDN/npm)

**Icon Sources:**
- **@icons-pack/react-simple-icons** 13.13.0 (npm)
  - Simple brand icons
  
- **@phosphor-icons/react** 2.1.10 (npm)
  - UI system icons
  
- **devicons-react** 1.5.0 (npm)
  - Technology/skill icons

All icons loaded from npm modules — no external CDN calls.

## Summary

**External Dependencies:** 0
- No backend APIs
- No databases
- No authentication services
- No payment gateways
- No email services
- No content management systems
- No analytics
- No third-party services

This is a completely self-contained static portfolio application. All dependencies are npm packages bundled at build time.

---

*Integration audit: 2026-07-21*
