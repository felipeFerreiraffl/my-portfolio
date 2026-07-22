# Naming Conventions

This document is the authoritative reference for naming case conventions used throughout this codebase. It covers variables, constants, functions, main components, hooks, utils, assets, and file naming, each with real, cited examples from the source. It complements `docs/folder-structure.md`, which documents *where* code lives; this document documents *how things are named*.

This is a living reference: as the codebase evolves, keep it in sync with the actual patterns in use.

## Variables

Local variables (component state, destructured props) use `camelCase`.

- `selectedIdx` — `src/hooks/useEmblaTimeline.ts`
  ```typescript
  const [selectedIdx, setSelectedIdx] = useState(0);
  ```
- `emblaApi` (a props parameter) — `src/hooks/useEmblaTimeline.ts`
  ```typescript
  export const useEmblaTimeline = (emblaApi: EmblaCarouselType | undefined, slideCount: number) => {
  ```

## Constants

Constants follow a **scope-based rule** — not an "either/or" choice. Which case to use depends on where the constant is declared, not on personal preference.

### Module-level / exported constants → `UPPER_SNAKE_CASE`

Any constant declared at module scope (whether exported or not) — configuration values, data arrays, lookup tables — uses `UPPER_SNAKE_CASE`.

- `HEADER_OFFSET` — `src/contexts/sectionRefs.context.tsx`
  ```typescript
  const HEADER_OFFSET = 80;
  ```
- `AVAILABLE_THEMES` — `src/constants/elements.ts`
  ```typescript
  export const AVAILABLE_THEMES = ["light", "dark"];
  ```
- Also follow this rule: `SKILLS`, `EXPERIENCES` (`src/constants/data/*.ts`), `NAV_LINKS`, `EXTERNAL_LINKS`, `HERO_RINGS`, `SKILLS_NAMES` (`src/constants/objects.ts`), `ICONS` (`src/constants/icons.ts`).

Clear, common abbreviations in these names (`NAV_LINKS`, `ICONS`) are acceptable as-is — do not expand them to fully spelled-out names.

### Function/component-local `const` bindings → `camelCase`

Once a `const` is declared *inside* a function or component body, it is `camelCase` — even when its value is a complex, config-like object (for example, an animation-variants object). Scope, not shape, decides the case.

- `revealVars` — `src/components/screens/Home/index.tsx`
  ```typescript
  const revealVars: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
  };
  ```

**Counter-example — do not confuse with a module-level constant:** `contentVars` (`src/components/layout/Sections/Hero/index.tsx`) is a config-like `Variants` object, which might look like it belongs in `UPPER_SNAKE_CASE`. It does not — it is declared inside the `Hero` component body, so the local-scope rule applies and it stays `camelCase`:
  ```typescript
  const contentVars: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
  };
  ```

### Object-shaped constants: declaration vs. internal keys

For a constant whose value is an object, the rule applies per-level: the **declaration** is `UPPER_SNAKE_CASE` (it's module-scope), but its **internal keys** are `camelCase` (they're just object properties, not separate module-scope bindings).

- `EXTERNAL_LINKS` — `src/constants/objects.ts`
  ```typescript
  export const EXTERNAL_LINKS = {
    gitHub: "https://github.com/felipeFerreiraffl",
    linkedIn: "https://www.linkedin.com/in/felipe-ferreira-959bb8271/",
  };
  ```
  `EXTERNAL_LINKS` (declaration) is `UPPER_SNAKE_CASE`; `.gitHub` / `.linkedIn` (keys) are `camelCase`.
- `SKILLS_NAMES` — `src/constants/objects.ts` (same pattern: `SKILLS_NAMES.javascript`, `SKILLS_NAMES.typescript`, etc. — all keys `camelCase`)
  ```typescript
  export const SKILLS_NAMES = {
    html: "HTML",
    css: "CSS",
    javascript: "Javascript",
    typescript: "Typescript",
    // ...
  };
  ```

Use this rule when adding new entries to any data object in `src/constants/`: the constant name stays `UPPER_SNAKE_CASE`, each key inside it stays `camelCase`.

## Functions

### Component functions

Main components are `PascalCase`, exported as `export default`.

- `Button` — `src/components/ui/Button.tsx`
  ```typescript
  export default function Button({ label, ...props }: ButtonProps) {
  ```

### Event handlers

Event handlers use `camelCase` with a `handle` prefix.

- `handleScrollToSection` — `src/utils/handlers.util.ts`
  ```typescript
  export const handleScrollToSection = (ref: SectionRef) => {
    if (!ref.current) return;

    const top = ref.current.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  };
  ```

### Custom hooks

Hooks use `camelCase` with a `use` prefix, are named exports (`export const`), and typically return an object.

- `useEmblaTimeline` — `src/hooks/useEmblaTimeline.ts`
  ```typescript
  export const useEmblaTimeline = (emblaApi: EmblaCarouselType | undefined, slideCount: number) => {
    // ...
    return { selectedIdx, progress };
  };
  ```

### Utility functions

Utility functions use `camelCase`, named exports (`export const`), and stay small/focused.

- `cn` — `src/libs/cn.ts`
  ```typescript
  export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
  ```

## Main Components

Main (page/section-level) components follow the same rule as component functions above: `PascalCase` function name, `export default`, and the file name matches the component name exactly (see File Naming below). Example: `Button` in `src/components/ui/Button.tsx`.

## Hooks

See "Custom hooks" under Functions above — `camelCase`, `use` prefix, named export, returns an object of related values (e.g. `{ selectedIdx, progress }`).

## Utils

See "Utility functions" under Functions above — `camelCase`, named export. Utility files are suffixed `.util.ts` (see File Naming below).

## Assets

This section covers asset **file** naming only. Asset **folder** naming (e.g. `aboutMe/`, `skills/` use `camelCase`) is documented in `docs/folder-structure.md`, since folder organization is a structural concern, not a naming-case concern.

SVG asset files use `kebab-case`:

- `about-football.svg` — `src/assets/svg/aboutMe/about-football.svg`
- `nav-experiences.svg` — `src/assets/svg/nav/nav-experiences.svg`
- `lang-pt.svg` — `src/assets/svg/lang/lang-pt.svg`

(All imported and re-exported through `src/constants/icons.ts`.)

## File Naming

| Category | Pattern | Example |
|----------|---------|---------|
| Components | `PascalCase.tsx`, matches the component name | `src/components/ui/Button.tsx` |
| Utilities | `camelCase` + `.util.ts` suffix | `src/utils/handlers.util.ts` |
| Hooks | `camelCase` + `use` prefix | `src/hooks/useEmblaTimeline.ts` |
| Contexts | `camelCase` + `.context.tsx` suffix | `src/contexts/sectionRefs.context.tsx` |
| Types | `camelCase` + `.types.ts` suffix | `src/types/elements/elements.types.ts` |
| CSS partials | leading `_` (partial/internal) | `src/styles/_base.css`, `src/styles/_themes.css` |
| Asset files (SVG) | `kebab-case` | `src/assets/svg/aboutMe/about-football.svg` |

## Exceptions

The following file names deliberately break the patterns above, for reasons outside project convention:

- **`page.tsx` / `layout.tsx`** are lowercase because the Next.js App Router *requires* these exact, lowercase file names to recognize route segments and layouts — this is a framework mandate, not a project naming choice, and does not follow the PascalCase component-file rule above. See `src/app/[locale]/layout.tsx` and `src/app/[locale]/page.tsx`.
- **`_base.css`, `_themes.css`** (`src/styles/`) use a leading underscore to signal "partial/internal" — a stylesheet not meant to be imported or treated as a standalone entry point, the same signaling convention used by underscore-prefixed partials/helpers more broadly. This is called out here rather than left inline in the File Naming table above, since it's an exception to (not an instance of) the general file-naming rules.
