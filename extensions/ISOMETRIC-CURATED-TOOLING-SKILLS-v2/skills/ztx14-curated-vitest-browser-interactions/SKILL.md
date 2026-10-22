---
name: ztx14-curated-vitest-browser-interactions
description: Test real browser DOM behavior of React interaction components using Vitest Browser Mode and a supported browser provider.
---

# Use Vitest Browser Mode for component-level interaction coverage

> Curated implementation skill. Inspect the installed project and actual component source before changing behavior. Do not assume latest APIs are installed. Preserve unrelated files and existing component ownership.

## Fit
Use for relatively focused component behavior: interaction state, pointer-to-state mapping, responsive hooks, reduced-motion branches, and lifecycle cleanup. Use Playwright for critical end-to-end journeys and cross-page integration.

## Workflow
1. Inspect installed Vitest version and current provider before copying configuration.
2. Choose a real browser provider such as Playwright when CI fidelity matters; Vitest docs caution that preview mode simulates events and recommend Playwright/WebdriverIO for local/CI browser runs.
3. Assert on rendered behavior and accessible names rather than private implementation details.
4. Test listener/observer cleanup by mounting, unmounting, and remounting where the test setup supports it.
5. Fake or control time only when needed; ensure springs and `requestAnimationFrame` are advanced deterministically.
6. Keep tests independent and avoid running multiple tests against one shared global animation scheduler.

## Primary references
- [vitest-browser](https://vitest.dev/guide/browser/)
- [react-effect](https://react.dev/reference/react/useEffect)
- [react-strictmode](https://react.dev/reference/react/StrictMode)

## Completion evidence
- State what was inspected, what changed, and which checks actually ran. Never report unrun tests or unverified browser behavior as passing.
