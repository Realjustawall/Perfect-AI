---
name: ztx14-best-css-container-query-motion
description: Use container queries and ResizeObserver intentionally so a component behaves well when embedded in narrow panels or split layouts.
---

# Adapt animation to the component container, not only the viewport

> Best-practice implementation skill. Inspect the real project, installed package versions, current component contract, and existing animation ownership before changing code. This skill adds guidance only; it does not install dependencies by itself.

## When to use
Reusable Isometric cards, side panels, dashboards, documentation embeds, resizable workspaces, and responsive components inside grids.

## Procedure
1. Define which behavior depends on the component’s own available size versus the global viewport.
2. Prefer CSS container queries for purely visual styling that can be expressed declaratively.
3. Use ResizeObserver only when JavaScript needs measured dimensions for geometry or motion ranges.
4. Keep breakpoints and motion amplitudes aligned with container size: a compact card should use less tilt/parallax and may remove decorative layers.
5. Avoid observer feedback loops by deriving an output that does not modify the measured dimension indefinitely.
6. Test the same component at multiple sizes within a single viewport, including hidden-to-visible panel transitions.

## Avoid
- Do not hardcode viewport media queries for a component that is routinely embedded in variable-width containers.
- Do not duplicate the same responsive decision in CSS, React state, and the animation engine without a reason.
- Do not let continuous motion reduce text readability in a narrow container.

## Acceptance checks
- [ ] Embedded widths produce appropriate layout and motion.
- [ ] CSS handles style-only adaptations; JS observers handle only geometry needs.
- [ ] No resize loop or breakpoint flicker.

## Primary references
- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries
- https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API

## Reporting requirement
State which files were inspected, what changed, and which checks actually ran. Do not claim a browser/device was verified unless it was tested.
