# Testing Patterns

**Analysis Date:** 2026-07-21

## Test Framework

**Current Status:** No testing framework configured

**Runner:**
- Not detected - no `jest.config.*`, `vitest.config.*`, or `playwright.config.*` files found

**Assertion Library:**
- Not installed

**Run Commands:**
```bash
npm run lint              # ESLint linting only - no tests available
npm run dev              # Development server
npm run build            # Build the Next.js app
npm run start            # Production server
```

## Test File Organization

**Location:**
- No test files detected in repository
- Recommended location (not yet implemented): Co-locate tests with source files
- Pattern would be: `Component.tsx` with `Component.test.tsx` or `Component.spec.tsx` in same directory

**Naming:**
- Not yet established - no test files exist
- Recommended pattern (when implemented): `[name].test.tsx` or `[name].spec.tsx`

**Structure:**
```
# Recommended structure (not yet implemented):
src/
├── components/
│   └── ui/
│       ├── Button.tsx
│       ├── Button.test.tsx        # Co-located test
│       ├── Icon.tsx
│       └── Icon.test.tsx
├── hooks/
│   ├── useEmblaTimeline.ts
│   └── useEmblaTimeline.test.ts
└── utils/
    ├── handlers.util.ts
    └── handlers.util.test.ts
```

## Testing Setup (To Be Implemented)

**Recommended Framework:**
- Vitest (modern, fast, ESM-first)
- Alternative: Jest with TypeScript support

**Assertion Library:**
- @testing-library/react for component testing
- Vitest built-in assertions for unit tests

**Configuration Needs:**
1. Install testing framework: `npm install -D vitest @testing-library/react @testing-library/dom jsdom`
2. Create `vitest.config.ts` configuration
3. Add test scripts to `package.json`

## Test Structure (Recommended Pattern)

**Suite Organization:**
```typescript
// Example structure for Button.test.tsx
import { describe, it, expect } from "vitest";
import Button from "@/components/ui/Button";
import { render, screen } from "@testing-library/react";

describe("Button", () => {
  it("renders with label", () => {
    render(<Button label="Click me" />);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("has correct accessibility attributes", () => {
    render(<Button label="Test Button" />);
    const button = screen.getByRole("button", { name: "Test Button" });
    expect(button).toHaveAttribute("aria-label");
  });

  describe("hover interactions", () => {
    it("responds to hover state", () => {
      render(<Button label="Hover Test" />);
      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
      // Motion animation state would require additional setup
    });
  });
});
```

**Patterns (When Framework Installed):**
- Setup: Use React Testing Library's `render()` to mount components
- Teardown: Automatic cleanup after each test
- Assertion: Standard vitest/jest matchers

## Mocking

**Framework:** Not yet implemented

**Patterns (Recommended When Setting Up):**
```typescript
// Mock hooks
vi.mock("@/hooks/useEmblaTimeline", () => ({
  useEmblaTimeline: vi.fn(() => ({
    selectedIdx: 0,
    progress: { current: 0 }
  }))
}));

// Mock contexts
vi.mock("@/contexts/sectionRefs.context", () => ({
  useSectionRefs: vi.fn(() => ({
    refs: {
      aboutMe: { current: null },
      experiences: { current: null },
      skills: { current: null },
      projects: { current: null }
    },
    activeSec: "aboutMe"
  }))
}));

// Mock motion library
vi.mock("motion/react", async () => {
  const actual = await vi.importActual("motion/react");
  return {
    ...actual,
    m: {
      button: "button",
      div: "div"
    }
  };
});
```

**What to Mock:**
- External libraries that cause side effects (motion animations, lenis smooth scroll)
- Context providers when testing components that depend on them
- Custom hooks when testing parent components in isolation

**What NOT to Mock:**
- Utility functions (`cn`, `handleScrollToSection`) - test real implementations
- HTML elements
- React built-ins

## Fixtures and Factories

**Test Data:**
- Not yet established in codebase
- Recommended location: `src/__tests__/fixtures/` or `src/__tests__/factories/`

**Example factory pattern (when implemented):**
```typescript
// src/__tests__/factories/buttonProps.factory.ts
import { ComponentProps } from "react";
import Button from "@/components/ui/Button";

export const createButtonProps = (
  overrides?: Partial<ComponentProps<typeof Button>>
): ComponentProps<typeof Button> => ({
  label: "Test Button",
  ...overrides
});
```

**Location:**
- Recommended: `src/__tests__/fixtures/` for static test data
- Recommended: `src/__tests__/factories/` for factory functions

## Coverage

**Requirements:** Not enforced
- No coverage configuration in place
- No minimum threshold set

**View Coverage (When Configured):**
```bash
npm run test:coverage    # Command to be added
# Would generate coverage report in coverage/ directory
```

## Test Types (Recommended Structure)

**Unit Tests:**
- Scope: Test individual functions, utilities, small components in isolation
- Approach: Mock dependencies, test behavior and return values
- Location: Co-located with source files

**Integration Tests:**
- Scope: Test multiple components working together, hooks with contexts
- Approach: Minimal mocking, test actual behavior
- Location: `src/__tests__/integration/` (recommended)

**Example integration test (recommended):**
```typescript
// Test useSectionRefs hook with actual SectionRefsProvider
import { render, screen } from "@testing-library/react";
import { SectionRefsProvider, useSectionRefs } from "@/contexts/sectionRefs.context";

function TestComponent() {
  const { refs, activeSec } = useSectionRefs();
  return <div>{activeSec || "none"}</div>;
}

describe("SectionRefsProvider Integration", () => {
  it("provides context to children", () => {
    render(
      <SectionRefsProvider>
        <TestComponent />
      </SectionRefsProvider>
    );
    expect(screen.getByText("none")).toBeInTheDocument();
  });
});
```

**E2E Tests:**
- Framework: Not used
- Recommendation: Consider Playwright or Cypress for future E2E coverage
- Would test: Full user flows like navigation, smooth scrolling, section scrolling

## Common Testing Patterns (To Be Implemented)

**Async Testing:**
```typescript
import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";

// Test async hook
describe("Async Hook Pattern", () => {
  it("waits for async operation", async () => {
    // Component that uses useEffect
    render(<AsyncComponent />);
    
    await waitFor(() => {
      expect(screen.getByText("loaded")).toBeInTheDocument();
    });
  });
});
```

**Event Testing:**
```typescript
import userEvent from "@testing-library/user-event";

describe("Event Handling", () => {
  it("calls handler on click", async () => {
    const handleClick = vi.fn();
    render(<Button label="Click" onClick={handleClick} />);
    
    await userEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalled();
  });
});
```

**Error Testing:**
```typescript
describe("Error Handling", () => {
  it("throws when hook used outside context", () => {
    expect(() => {
      render(<ComponentUsingHook />);
    }).toThrow("useSectionRefs must be used inside SectionRefsContext");
  });
});
```

## Critical Testing Gaps

**High Priority:**
1. **No context/hook tests** - `useSectionRefs` hook has complex logic (IntersectionObserver, MutationObserver) that needs testing
2. **No animation tests** - Motion library interactions not tested
3. **No accessibility tests** - Components use ARIA attributes but no tests verify them
4. **No component render tests** - Basic rendering not verified

**Medium Priority:**
1. **Utility function tests** - `handleScrollToSection`, `cn` utility
2. **Hook tests** - `useEmblaTimeline` behavior with carousel
3. **Type validation** - TypeScript provides some safety but no runtime validation tests

## Recommended Setup Steps

1. Install testing dependencies:
   ```bash
   npm install -D vitest @testing-library/react @testing-library/dom @testing-library/user-event jsdom
   ```

2. Create `vitest.config.ts`:
   ```typescript
   import { defineConfig } from "vitest/config";
   import react from "@vitejs/plugin-react";
   import path from "path";

   export default defineConfig({
     plugins: [react()],
     test: {
       environment: "jsdom",
       globals: true,
       setupFiles: [],
     },
     resolve: {
       alias: {
         "@": path.resolve(__dirname, "./src"),
       },
     },
   });
   ```

3. Add test scripts to `package.json`:
   ```json
   {
     "scripts": {
       "test": "vitest",
       "test:watch": "vitest --watch",
       "test:coverage": "vitest --coverage"
     }
   }
   ```

4. Create first test file for critical hook: `src/contexts/sectionRefs.context.test.tsx`

---

*Testing analysis: 2026-07-21*
