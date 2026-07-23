# My Portfolio

## What This Is

A personal portfolio site built with Next.js 16 (App Router), React 19, and TypeScript, showcasing the developer's experience, skills, and about-me content through animated, internationalized (pt-br/en) sections. The codebase is functional and actively evolving (Hero, AboutMe, Experiences, Skills sections already shipped).

## Core Value

The portfolio must present the developer's experience and skills clearly and reliably to visitors — but the current active milestone's core value is different: **establish a documented, discoverable set of conventions and folder-structure rules so future work (by the developer and by Claude) stays consistent** before any new features are built.

## Requirements

### Validated

- ✓ Hero section with animated rings — existing
- ✓ AboutMe section with hobbies/goals — existing
- ✓ Experiences section with carousel (embla-carousel), timeline navigation — existing
- ✓ Skills section with categorized skill display (devicons/simple-icons) — existing
- ✓ i18n support (pt-br default, en) via next-intl — existing
- ✓ Theme switching (light/dark) and language switching in header — existing
- ✓ Smooth scroll via Lenis, section-active tracking via IntersectionObserver — existing
- ✓ Responsive navigation with mobile nav — existing
- ✓ **DOC-01**: `/docs/convention.md` documents current code-naming conventions — case styles for variables, constants, functions, components, hooks, utils, and assets, mapped from the actual codebase — validated in Phase 1
- ✓ **DOC-02**: Naming inconsistencies found while mapping conventions are surfaced to the user with a question rather than silently picked — validated in Phase 1 (constants scope-rule resolved via user decision; human-verify checkpoint confirmed no new inconsistency was silently standardized)
- ✓ **DOC-03**: `/docs/folder-structure.md` documents the project's folder organization — primarily `/src` and `/messages` — explaining responsibility separation, what belongs in each folder, and how to decide where new code goes — validated in Phase 2
- ✓ **DOC-04**: `/docs/folder-structure.md` briefly mentions `/public` (no deep mapping) — validated in Phase 2
- ✓ **DOC-05**: `/docs/folder-structure.md` excludes root-level config files (next.config, eslint.config, tsconfig, README, etc.) — validated in Phase 2
- ✓ **DOC-06**: The GSD-generated `.claude/CLAUDE.md` references both `docs/convention.md` and `docs/folder-structure.md` so they're discoverable for future work — validated in Phase 2 (unmarked section between GSD:stack-end/GSD:conventions-start; a post-SUMMARY code review also caught and fixed two accuracy gaps — a missing src/proxy.ts mention and a wrong /messages key example — before this validation)

### Active

None — all Phase 1 and Phase 2 requirements validated. Milestone v1.0 complete.

### Out of Scope

- Refactoring existing code to match the chosen conventions — this milestone only documents current state and the standard to follow going forward; fixing inconsistencies is deferred to a later pass
- New product features (new sections, pages, etc.) — explicitly deferred by the user until conventions/structure are documented first
- Documenting root-level config files (`next.config.ts`, `eslint.config.mjs`, `tsconfig.json`, `README.md`, etc.) in folder-structure.md

## Context

- This is a brownfield repo; `/gsd-map-codebase` already produced `.planning/codebase/CONVENTIONS.md` and `.planning/codebase/STRUCTURE.md`, which serve as the raw analysis feeding these docs (not a substitute for them — those are internal planning artifacts, `/docs/*.md` are the user-facing deliverables)
- Known inconsistency to resolve with the user: constants use both `UPPERCASE_SNAKE_CASE` and `camelCase` depending on scope (per CONVENTIONS.md) — needs an explicit standardization decision during doc writing
- `/docs/convention.md` and `/docs/folder-structure.md` already exist as empty placeholder files created by the user
- No CLAUDE.md exists yet anywhere in the repo; GSD will generate `.claude/CLAUDE.md` as part of this workflow

## Constraints

- **Language**: Both docs written in English — Why: standard for technical documentation even in this pt-br-first project
- **No code changes**: This milestone is documentation-only; do not modify source files to fix naming/structure inconsistencies — Why: user wants to decide standards deliberately, not have them silently applied
- **Scope boundary**: Folder-structure doc covers `/src` and `/messages` in depth, `/public` briefly, and skips root config files — Why: explicit user instruction to avoid documenting boilerplate config

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Docs written in English, not Portuguese | Standard for technical docs; conversation was in Portuguese but docs are for long-term project reference | Applied in Phase 1 — `docs/convention.md` written in English |
| Document-only scope (no refactor) this milestone | User wants to define standards first, fix inconsistencies later, deliberately | Held in Phase 1 — `git status --porcelain -- src` confirmed empty after execution |
| Use GSD-generated `.claude/CLAUDE.md` (not a root CLAUDE.md) to reference the docs | Aligns with GSD's runtime-derived instruction file policy for Claude Code | Applied in Phase 2 — additive "Project Documentation" section added outside GSD marker regions |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-07-22 after Phase 2 (Structure Documentation & Discoverability) completion — milestone v1.0 complete*
