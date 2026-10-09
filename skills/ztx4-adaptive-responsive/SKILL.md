---
name: ztx4-adaptive-responsive
description: "Deep implementation master for Adaptive Responsive Engine 3.0 with 26 targeted Codex skills, code, tests and no MCP. Additive to all existing Perfect_AI versions."
---

# Adaptive Responsive Engine 3.0

Make components reflow based on their own available space, user settings and device capability.

## Mandatory sequence
1. Start content at 320 CSS px, zoom 400%, long Persian strings and keyboard-only operation.
2. Choose intrinsic CSS Grid/Flex, minmax and clamp; apply container queries only where behavior changes.
3. Use logical properties and test dir=rtl/ltr separately; never mirror logos or physics.
4. Handle 100svh/dvh, safe areas, virtual keyboard, orientation and split-view layouts.
5. Test viewport, narrow nested container, reduced-motion, no-WebGL and high text-spacing scenarios.

## Skill routing
Choose only technique files needed for this project from `DEEP-IMPLEMENTATION-v2/references/adaptive-responsive.md`. Never indiscriminately load all 300+ skills into context.

## Runbook
Inputs: component min content width, RTL/LTR strings, container dimensions, viewport and input modality.

Implementation: intrinsic layout first, then container queries; clamp typographic scale; logical CSS; safe-area/svh fallback; change 3D framing not just canvas width.

Tests: 320..1920 width, narrow sidebar and main, 200% text/400% zoom, foldable hinge fallback, no overflow, keyboard and touch.

## Acceptance gates
1. No horizontal scroll from 320 CSS px except purposely scrollable regions.
2. 400% zoom and 200% text remain usable and focusable.
3. RTL/LTR, touch, keyboard, reduced-motion and viewport changes retain task completion.

## Runnable assets
`extensions/DEEP-IMPLEMENTATION-v2/examples` and `tools` (installed main package). See `RUNBOOK-FA.md`.

## Sources
- [mdn-containers](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment/Container_queries)
- [mdn-fold](https://developer.mozilla.org/en-US/docs/Web/API/Viewport_segments_API/Using)
- [wcag](https://www.w3.org/TR/WCAG22/)
