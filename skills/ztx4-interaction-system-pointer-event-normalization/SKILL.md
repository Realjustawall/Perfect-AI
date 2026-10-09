---
name: ztx4-interaction-system-pointer-event-normalization
description: "Implement pointer event normalization for Advanced Interaction System with concrete acceptance gates, responsive/RTL safety, and no MCP. Additive Perfect_AI extension."
---

# Advanced Interaction System / pointer-event-normalization

## Precise purpose
Use pointerdown/move/up/cancel with capture and pointerId tracking.

## First read
- `$perfect-ai-master` and `$ztx3-nexus-master` remain available; never overwrite or replace them.
- `../../extensions/DEEP-IMPLEMENTATION-v2/references/interaction-system.md` inside the full pack.
- Consult corresponding existing NEXUS handbook at `extensions/handbooks/interaction-system.md`.
- This is a new supplemental Skill, not a claim that third-party software is bundled.

## Input contract
Inputs: pointer/keyboard gestures and interaction/state specification, touch-action, inertial limits.

## Implementation workflow for this technique
1. **Identify specific need:** Use pointerdown/move/up/cancel with capture and pointerId tracking.
2. **Baseline:** inspect existing code and record behavior and compatible dependency versions; keep old behavior unchanged.
3. **Build:** Implementation: pointer capture + cancellation, spring integration with bounded dt, accessible semantic buttons and keyboard equivalent; one animation owner.
4. **Technique-specific output:** create a named source module, stylesheet, fixture and test targeting `pointer-event-normalization` rather than a generic screenshot.
5. **Variations:** desktop / compact container / 320px mobile / Persian RTL / English LTR / reduced motion / blocked external assets.
6. **Measure:** log what runs with concrete outputs, fail gracefully when engine or browser support unavailable.
7. **No regressions:** do not delete, reformat or overwrite unrelated existing application code.

## Technique-specific verification
- Assert: Use pointerdown/move/up/cancel with capture and pointerId tracking.
- Tests: pointercancel/Escape/blur, drag beyond bounds, touch no-hover, keyboard, reduced-motion and multi-pointer conflict.
- Keyboard users complete the same interaction.; Pointercancel/Escape/blur reset state without stuck drag.; Effects do not move or hide semantic hit target.

## Deliverables
`implementation-notes.md`, source implementation, relevant fallback source, test fixture, screenshots if browser-run, `verified-results.json` showing passed/failed/unrun.

## Source of truth
- [rive](https://rive.app/docs/runtimes/react/react)
- [wcag](https://www.w3.org/TR/WCAG22/)
- [animejs](https://animejs.com/documentation/)
