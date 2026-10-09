---
name: ztx4-adaptive-responsive-reduced-motion-mode
description: "Implement reduced motion mode for Adaptive Responsive Engine 3.0 with concrete acceptance gates, responsive/RTL safety, and no MCP. Additive Perfect_AI extension."
---

# Adaptive Responsive Engine 3.0 / reduced-motion-mode

## Precise purpose
Remove nonessential motion while maintaining layout, state feedback and content.

## First read
- `$perfect-ai-master` and `$ztx3-nexus-master` remain available; never overwrite or replace them.
- `../../extensions/DEEP-IMPLEMENTATION-v2/references/adaptive-responsive.md` inside the full pack.
- Consult corresponding existing NEXUS handbook at `extensions/handbooks/adaptive-responsive.md`.
- This is a new supplemental Skill, not a claim that third-party software is bundled.

## Input contract
Inputs: component min content width, RTL/LTR strings, container dimensions, viewport and input modality.

## Implementation workflow for this technique
1. **Identify specific need:** Remove nonessential motion while maintaining layout, state feedback and content.
2. **Baseline:** inspect existing code and record behavior and compatible dependency versions; keep old behavior unchanged.
3. **Build:** Implementation: intrinsic layout first, then container queries; clamp typographic scale; logical CSS; safe-area/svh fallback; change 3D framing not just canvas width.
4. **Technique-specific output:** create a named source module, stylesheet, fixture and test targeting `reduced-motion-mode` rather than a generic screenshot.
5. **Variations:** desktop / compact container / 320px mobile / Persian RTL / English LTR / reduced motion / blocked external assets.
6. **Measure:** log what runs with concrete outputs, fail gracefully when engine or browser support unavailable.
7. **No regressions:** do not delete, reformat or overwrite unrelated existing application code.

## Technique-specific verification
- Assert: Remove nonessential motion while maintaining layout, state feedback and content.
- Tests: 320..1920 width, narrow sidebar and main, 200% text/400% zoom, foldable hinge fallback, no overflow, keyboard and touch.
- No horizontal scroll from 320 CSS px except purposely scrollable regions.; 400% zoom and 200% text remain usable and focusable.; RTL/LTR, touch, keyboard, reduced-motion and viewport changes retain task completion.

## Deliverables
`implementation-notes.md`, source implementation, relevant fallback source, test fixture, screenshots if browser-run, `verified-results.json` showing passed/failed/unrun.

## Source of truth
- [mdn-containers](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment/Container_queries)
- [mdn-fold](https://developer.mozilla.org/en-US/docs/Web/API/Viewport_segments_API/Using)
- [wcag](https://www.w3.org/TR/WCAG22/)
