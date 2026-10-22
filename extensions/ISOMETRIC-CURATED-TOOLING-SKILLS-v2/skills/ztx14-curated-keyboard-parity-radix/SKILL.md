---
name: ztx14-curated-keyboard-parity-radix
description: Audit isometric primitives and custom figures so hover and pointer behavior has a complete keyboard, focus and semantic counterpart.
---

# Preserve keyboard and screen-reader behavior in isometric controls

> Curated implementation skill. Inspect the installed project and actual component source before changing behavior. Do not assume latest APIs are installed. Preserve unrelated files and existing component ownership.

## Principle
The site's primitives are documented as Radix-based, but custom additions can still break accessible behavior. Verify the actual installed component rather than assuming a visual control is accessible.

## Review steps
1. Use native button/input semantics or preserve the existing Radix primitive instead of inventing clickable `div` controls.
2. Ensure visible focus follows keyboard movement and does not disappear under isometric depth/outline styling.
3. For custom canvas/SVG figures, provide a semantic DOM control or a keyboard-operable selection model, with accessible name and state.
4. Mirror every essential pointer-only action with keyboard activation and a touch-friendly path. Dragging must have a non-drag alternative when needed.
5. Keep `aria-pressed`, `aria-selected`, `aria-expanded`, and disabled state synchronized with actual behavior.
6. Avoid noisy screen-reader announcements for continuous motion; announce meaningful state transitions only.

## Validate
Tab order, Enter/Space, arrow navigation where appropriate, focus-visible styling, zoom/reflow and screen-reader smoke tests. Use automated audit as a first pass, not as proof of full compliance.

## Primary references
- [storybook-a11y](https://storybook.js.org/docs/writing-tests/accessibility-testing)
- [storybook-interactions](https://storybook.js.org/docs/writing-tests/interaction-testing)
- [wcag22](https://www.w3.org/TR/WCAG22/)
- [isometric](https://isometric.buildlab.in/llms.txt)

## Completion evidence
- State what was inspected, what changed, and which checks actually ran. Never report unrun tests or unverified browser behavior as passing.
