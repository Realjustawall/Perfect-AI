---
name: ztx14-curated-storybook-interaction-a11y
description: Create reproducible component stories and automate interactions and accessibility checks for isometric UI pieces.
---

# Use Storybook as an interactive component lab

> Curated implementation skill. Inspect the installed project and actual component source before changing behavior. Do not assume latest APIs are installed. Preserve unrelated files and existing component ownership.

## Workflow
1. Write a story for a stable default state and meaningful states such as active, disabled, loading, selected, pointer-reactive and reduced-motion.
2. Use a `play` function to simulate user steps and assert state transitions; choose accessible queries.
3. Add accessibility checks with the Storybook a11y addon and keep manual review for issues tools mark incomplete.
4. Give pointer-reactive components deterministic controls or fixtures so a reviewer can reproduce the same state.
5. Test keyboard navigation and focus visibility, not only mouse interaction.
6. Use stories to discuss visual diffs and component API changes without depending on an entire application route.

## Boundary
Storybook tests improve component-level feedback but do not replace production-build, route integration, or real-device touch checks.

## Primary references
- [storybook-interactions](https://storybook.js.org/docs/writing-tests/interaction-testing)
- [storybook-a11y](https://storybook.js.org/docs/writing-tests/accessibility-testing)
- [wcag22](https://www.w3.org/TR/WCAG22/)

## Completion evidence
- State what was inspected, what changed, and which checks actually ran. Never report unrun tests or unverified browser behavior as passing.
