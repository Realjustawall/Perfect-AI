---
name: ztx14-best-a11y-axe-plus-manual-review
description: Use axe-core or Storybook a11y checks as a first pass, then manually verify keyboard, focus, semantics, and spatial interaction alternatives.
---

# Combine automated accessibility scans with manual interaction review

> Best-practice implementation skill. Inspect the real project, installed package versions, current component contract, and existing animation ownership before changing code. This skill adds guidance only; it does not install dependencies by itself.

## When to use
Interactive SVG, custom controls, Isometric objects, hover details, drag controls, modals, menus, and reusable component releases.

## Procedure
1. Run automated rendered-DOM accessibility checks in the project’s supported test workflow.
2. Resolve violations and inspect incomplete findings; automated tools do not establish full WCAG conformance.
3. Navigate with keyboard alone: focus order, visible focus, activation, escape/close paths, and focus return after overlays close.
4. Ensure object state is conveyed by more than color or movement and semantic controls have accessible names and roles.
5. For drag or spatial interactions, provide a simple pointer alternative such as click-to-select and click-to-place, keyboard movement, or directional controls as suitable.
6. Test zoom/reflow, reduced motion, contrast/forced colors, and a screen-reader smoke path for high-priority flows.

## Avoid
- Do not claim full accessibility from an axe scan alone.
- Do not put key actions only in hover-only tooltips.
- Do not assign ARIA roles that conflict with native semantic elements.

## Acceptance checks
- [ ] Automated findings are triaged.
- [ ] Keyboard and focus behavior are checked manually.
- [ ] A non-drag alternative exists for essential drag actions.

## Primary references
- https://storybook.js.org/docs/writing-tests/accessibility-testing
- https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html
- https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/prefers-reduced-motion

## Reporting requirement
State which files were inspected, what changed, and which checks actually ran. Do not claim a browser/device was verified unless it was tested.
