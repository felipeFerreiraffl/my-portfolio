# Coding Conventions

**Analysis Date:** 2026-07-21

## Naming Patterns

**Files:**
- React components: PascalCase (`Button.tsx`, `Icon.tsx`, `Section.tsx`)
- Utilities/helpers: camelCase (`handlers.util.ts`, `cn.ts`)
- Hooks: camelCase with `use` prefix (`useEmblaTimeline.ts`, `useSectionRefs`)
- Contexts: camelCase with `.context.tsx` suffix (`sectionRefs.context.tsx`)
- Constants: UPPERCASE or camelCase depending on scope (`AVAILABLE_THEMES`, `ICONS`, `SKILLS`)
- Types/Interfaces: PascalCase (`ButtonProps`, `IconProps`, `SectionRefsContextType`)

**Functions:**
- Component functions: PascalCase (`Button`, `Icon`, `Section`, `HomeScreen`)
- Event handlers: camelCase with `handle` prefix (`handleScrollToSection`)
- Custom hooks: camelCase with `use` prefix (`useEmblaTimeline`)
- Utility functions: camelCase (`cn`, `withFillWeight`)

**Variables:**
- Local state: camelCase (`selectedIdx`, `ringsExpanded`, `activeSec`)
- Props objects: camelCase (`emblaApi`, `slideCount`)
- Constants: UPPERCASE_SNAKE_CASE or camelCase (HEADER_OFFSET, AVAILABLE_THEMES)

**Types:**
- Interfaces: PascalCase with `Props` suffix for component props (`ButtonProps`, `IconProps`, `SectionProps`)
- Type unions/tuples: PascalCase (`SectionKey`, `SVGIcon`, `SectionRef`)
- Branded types: PascalCase with intent (`SectionRef = RefObject<HTMLElement | null>`)

## Code Style

**Formatting:**
- ESLint 9 with Next.js core-web-vitals and TypeScript configurations
- No Prettier configuration found - uses ESLint for code formatting
- Standard ESLint Next.js rules enforced
- Config file: `eslint.config.mjs` (flat config format)

**Linting:**
- Tool: ESLint 9 (flat config)
- Rules: Next.js core web vitals + TypeScript best practices
- Ignores: `.next/`, `out/`, `build/`, `next-env.d.ts`
- Run: `npm run lint`

## Import Organization

**Order:**
1. React/Next.js imports (`import { ReactNode } from "react"`)
2. External library imports (`import { m } from "motion/react"`, `import clsx from "clsx"`)
3. Internal imports using `@/` alias (`import { cn } from "@/libs/cn"`)
4. CSS/Side-effect imports placed at appropriate locations

**Path Aliases:**
- `@/*` → `./src/*` (defined in `tsconfig.json`)
- Use `@/` prefix for all internal imports, never use relative paths like `../`

**Example pattern from `src/components/ui/Button.tsx`:**
```typescript
import { cn } from "@/libs/cn";
import { Variants } from "motion";
import { ComponentProps } from "react";
import { m } from "motion/react";
```

## Client/Server Components

**Client Component Markers:**
- Use `"use client"` directive at top of file for client components
- Required for: interactive components, hooks, state management, event handlers
- Example files: `Button.tsx`, `Icon.tsx`, `Tooltip.tsx`, `HomeScreen/index.tsx`

**Server Components:**
- Layout components are server-side by default (`src/app/[locale]/layout.tsx`)
- Use for: fetching data, accessing secrets, database queries

## Error Handling

**Patterns:**
- Guard clauses for early returns: `if (!ref.current) return;`
- Throw errors for context violations: `throw new Error("useSectionRefs must be used inside SectionRefsContext")`
- No try-catch blocks found in UI code
- Rely on guard clauses to prevent errors in event handlers

**Example from `src/utils/handlers.util.ts`:**
```typescript
export const handleScrollToSection = (ref: SectionRef) => {
  if (!ref.current) return;  // Guard clause prevents null access
  const top = ref.current.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top, behavior: "smooth" });
};
```

## Logging

**Framework:** None detected - uses browser console only when needed

**Patterns:**
- Console logging is minimal/absent in production code
- Error throwing preferred over logging

## Comments

**When to Comment:**
- No extensive commenting observed in codebase
- Complex logic is self-documenting through clear variable names
- Animation variants and configuration are placed in component scope for clarity

**JSDoc/TSDoc:**
- No JSDoc/TSDoc patterns found in codebase
- TypeScript interfaces serve as documentation

## Function Design

**Size:** Functions are kept small and focused
- Components: 15-60 lines (e.g., `Button`, `Icon`, `Tooltip`)
- Hooks: 10-35 lines (e.g., `useEmblaTimeline`)
- Utilities: 3-10 lines (e.g., `handleScrollToSection`, `cn`)

**Parameters:**
- Use destructuring in function signatures: `({ label, ...props }: ButtonProps)`
- Props objects preferred over multiple parameters
- Spread operator used to collect remaining props

**Return Values:**
- JSX elements from components
- Objects from hooks: `{ selectedIdx, progress }`
- Void for event handlers

## Module Design

**Exports:**
- Components: Use `export default` for single component files
- Hooks: Use `export const` for named exports
- Utilities: Use `export const` for named exports
- Constants: Use `export const` for named exports

**Barrel Files:**
- Data index: `src/constants/data/index.ts` exports from `experiences`, `projects`, `skills`

**Example from `src/components/ui/Icon.tsx`:**
```typescript
export default function Icon({ icon: Component, className, label, ariaLabel }: IconProps) {
  // Component body
}
```

## TypeScript Configuration

**Strict Mode:** Enabled
- `"strict": true` in `tsconfig.json`
- `"noEmit": true` - Type checking only, no emit
- `"isolatedModules": true` - Each file treated independently
- `"moduleResolution": "bundler"` - Modern module resolution

**Target:** ES2017

**JSX:** react-jsx (React 17+ syntax)

## Styling Conventions

**Tailwind CSS:**
- Version 4 with @tailwindcss/postcss
- Utility-first approach
- `cn()` utility for className merging: `import { cn } from "@/libs/cn"`
- `cn()` implementation uses `clsx` + `tailwind-merge`

**Custom Utilities:**
- `src/libs/cn.ts`: Merges Tailwind classes safely
- `src/libs/withFillWeight.tsx`: Higher-order component for icon styling

**Example from `src/components/ui/Button.tsx`:**
```typescript
className={cn(
  "group cursor-pointer p-2 rounded-[20px]",
  "min-w-30 whitespace-nowrap inline-flex items-center transition-colors duration-300",
  "bg-main/5 text-title hover:bg-main/20 hover:text-main",
)}
```

## Component Patterns

**Default Exports:**
- Every component file exports a default React component
- File naming matches component name in PascalCase

**Props Interfaces:**
- Extend native HTML element props: `extends ComponentProps<typeof m.button>`
- Extend HTML element props for flexibility: `extends ComponentProps<"section">`

**Example from `src/components/ui/Section.tsx`:**
```typescript
interface SectionProps extends ComponentProps<"section"> {
  title: string;
}

export default function Section({ className, children, title, ...props }: SectionProps) {
  return (
    <section className={cn("w-full flex flex-col gap-16 py-15", className)} {...props}>
      {/* Component body */}
    </section>
  );
}
```

## Type Definitions

**Location:** `src/types/elements/`
- `elements.types.ts`: UI element types (`SVGIcon`, `SectionRef`, `NavLink`)
- `data.types.ts`: Data structure types (`ExperienceData`, `SkillsData`, `HeroRingData`)

**Branded Types:**
- Template literal types for IDs: `id: \`exp-${number}\`` in `ExperienceData`
- Union types for limited values: `type: "academic" | "work"`

---

*Convention analysis: 2026-07-21*
