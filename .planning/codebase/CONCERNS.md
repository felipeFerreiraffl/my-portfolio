# Codebase Concerns

**Analysis Date:** 2026-07-21

## Known Bugs

### Typo in rel Attribute (Security/Correctness)

**Issue:** Multiple links use incorrect `rel` attribute value `noreferer` instead of `noreferrer`
- **Files:** 
  - `src/components/layout/Sections/Hero/index.tsx` (lines 68, 71, 85)
  - `src/components/layout/Sections/AboutMe/index.tsx` (line 72)
- **Impact:** The incorrect attribute value is silently ignored by browsers, providing no referrer protection for external links
- **Fix approach:** Replace `rel="noopener noreferer"` with `rel="noopener noreferrer"` in all 4 instances

### Hardcoded Experience Type

**Issue:** In the Experiences component, the `type` prop is hardcoded to `"academic"` for all experience cards
- **Files:** `src/components/layout/Sections/Experiences/index.tsx` (line 89)
- **Impact:** All experiences display as "academic" type regardless of actual type in data; `type="work"` experiences are mislabeled
- **Fix approach:** Replace `type="academic"` with `type={exp.type}` to use the actual experience type from data

### Copy-Paste Error in Experience Data

**Issue:** Experience `exp-3` has incorrect description and skills references
- **File:** `src/constants/data/experiences.ts` (lines 54-60)
- **Problem:** 
  - Line 54: Uses `"exp_1.description"` instead of `"exp_3.description"`
  - Lines 56-59: Skills array references `"exp_1.skills.*"` instead of `"exp_3.skills.*"`
- **Impact:** Experience 3 displays content from Experience 1
- **Fix approach:** Update keys to reference `"exp_3.description"` and `"exp_3.skills.*"`

## Tech Debt

### Unused Dependency

**Issue:** `devicons-react` is listed in package.json but not imported anywhere in the codebase
- **File:** `package.json` (line 16)
- **Context:** Recent refactor replaced devicons with `@icons-pack/react-simple-icons`
- **Fix approach:** Remove `"devicons-react": "^1.5.0"` from dependencies and run `npm prune`

### Code Duplication

**Issue:** `resolveIdToRef` function is duplicated in Header and MobileNav components
- **Files:** 
  - `src/components/layout/Header/index.tsx` (lines 16-27)
  - `src/components/layout/Header/MobileNav.tsx` (lines 17-28)
- **Impact:** Switch statement logic must be maintained in two places; inconsistencies could arise
- **Fix approach:** Extract to shared utility function in `src/libs/` or `src/utils/`

### Redundant CSS Class

**Issue:** SkillSet component has duplicate `size` attribute in Tailwind class string
- **File:** `src/components/layout/Sections/Skills/SkillSet.tsx` (line 46)
- **Problem:** `className="lg:size-94 size-62 grid place-items-center lg:grid-cols-3 grid-cols-2 gap-y-5 gap-x-8 lg:py-25 py-9 px-15 border border-main rounded-full shrink-0"`
  - Contains both `size` and `size-62` which is redundant
- **Impact:** Minor - the second class overrides the first anyway
- **Fix approach:** Remove the standalone `size` class

## Fragile Areas

### MutationObserver Performance Issue

**Issue:** SectionRefsContext continuously observes entire document.body for mutations
- **File:** `src/contexts/sectionRefs.context.tsx` (lines 85-86)
- **Problem:** 
  - `new MutationObserver(tryObserveAll)` watches `document.body` with `{ childList: true, subtree: true }`
  - `domWatcher.disconnect()` only when all nodes are observed, but if new sections are added later, monitoring stops
  - Each mutation fires the callback, which could be expensive on pages with frequent DOM updates
- **Impact:** 
  - Memory usage: MutationObserver never re-monitors after first completion
  - Performance: Every DOM mutation triggers `tryObserveAll`, which iterates all refs
  - Breaks if sections are dynamically added after initial load
- **Mitigation:** Works for static portfolio (sections exist at page load)
- **Improvement path:** 
  - Use `IntersectionObserver` alone with `document.querySelectorAll` on effect mount instead of mutation watching
  - Or set a reasonable disconnect timer and re-observe if needed
  - Or use a more targeted approach: only watch for specific section elements

## Missing Critical Features

### No Test Coverage

**Issue:** The project has no test files for source code
- **Files:** No `*.test.ts`, `*.test.tsx`, `*.spec.ts`, or `*.spec.tsx` files in `src/`
- **Blocks:** 
  - Cannot verify component behavior without manual testing
  - Refactoring is risky — hard to know what breaks
  - No regression protection
- **Priority:** Medium
- **Recommendation:** Add unit tests for:
  - Utility functions in `src/utils/` and `src/libs/`
  - Context providers (`SectionRefsContext`)
  - Components with complex logic (carousel state, scroll detection)

### Empty README

**Issue:** README.md exists but is completely empty
- **File:** `README.md`
- **Impact:** 
  - No onboarding documentation
  - No setup instructions for future developers
  - No project overview or feature description
- **Recommendation:** Add sections for:
  - Project description
  - Getting started (Node version, npm install, npm run dev)
  - Build process
  - Deployment instructions
  - Project structure overview
  - Technology stack summary

## Architectural Concerns

### Missing endingTime Handling

**Issue:** Experience `exp-3` is missing `endingTime` field (intentional for "current" role)
- **File:** `src/constants/data/experiences.ts` (lines 45-61)
- **Status:** Actually handled correctly (line 29 in Experiences/index.tsx)
- **Note:** This is not a bug — it's intentional that the field is optional and displays as "current" when missing. Listed here for clarity that this pattern is in use.

## Security Considerations

### rel="noreferrer" Missing (Referrer Policy)

**Issue:** The typo `noreferer` instead of `noreferrer` means referrer policy is not enforced on external links
- **Files:** All external links to GitHub, LinkedIn, and CV PDF
- **Risk:** 
  - External sites can access the `Referer` header and know user came from your portfolio
  - Minor privacy risk; not a critical vulnerability but a best practice violation
- **Current mitigation:** None explicit
- **Recommendation:** Fix typo to `noreferrer` to prevent referrer leaking

---

*Concerns audit: 2026-07-21*
