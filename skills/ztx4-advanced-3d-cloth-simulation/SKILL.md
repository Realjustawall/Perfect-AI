---
name: ztx4-advanced-3d-cloth-simulation
description: "Implement cloth simulation for Advanced 3D / R3F / GPU with concrete acceptance gates, responsive/RTL safety, and no MCP. Additive Perfect_AI extension."
---

# Advanced 3D / R3F / GPU / cloth-simulation

## Precise purpose
Implement constrained particles/Verlet or verified engine with collision and low-res substitute.

## First read
- `$perfect-ai-master` and `$ztx3-nexus-master` remain available; never overwrite or replace them.
- `../../extensions/DEEP-IMPLEMENTATION-v2/references/advanced-3d.md` inside the full pack.
- Consult corresponding existing NEXUS handbook at `extensions/handbooks/advanced-3d.md`.
- This is a new supplemental Skill, not a claim that third-party software is bundled.

## Input contract
Inputs: scene brief, geometry/asset rights, GPU tier assumptions, content and accessible fallback.

## Implementation workflow for this technique
1. **Identify specific need:** Implement constrained particles/Verlet or verified engine with collision and low-res substitute.
2. **Baseline:** inspect existing code and record behavior and compatible dependency versions; keep old behavior unchanged.
3. **Build:** Implementation: prefer one R3F Canvas, useFrame delta clamp, stable geometry/material buffers; choose technique appropriate to GPU tier; bound shader steps and dispose resources.
4. **Technique-specific output:** create a named source module, stylesheet, fixture and test targeting `cloth-simulation` rather than a generic screenshot.
5. **Variations:** desktop / compact container / 320px mobile / Persian RTL / English LTR / reduced motion / blocked external assets.
6. **Measure:** log what runs with concrete outputs, fail gracefully when engine or browser support unavailable.
7. **No regressions:** do not delete, reformat or overwrite unrelated existing application code.

## Technique-specific verification
- Assert: Implement constrained particles/Verlet or verified engine with collision and low-res substitute.
- Tests: WebGL2/no-WebGL, context loss, 320/390/1440px framing, reduced motion, renderer.info counters, assert no unbounded RAF allocation.
- No WebGL still presents important text, meaning and CTA.; Low GPU tier uses fewer geometry samples/passes/texture bytes and bounded frame budget.; Resize/unmount/context loss create no leaked buffers, RAF loops or subscriptions.

## Deliverables
`implementation-notes.md`, source implementation, relevant fallback source, test fixture, screenshots if browser-run, `verified-results.json` showing passed/failed/unrun.

## Source of truth
- [three](https://threejs.org/docs/)
- [r3f](https://r3f.docs.pmnd.rs/)
- [drei](https://drei.docs.pmnd.rs/)
- [wcag](https://www.w3.org/TR/WCAG22/)
