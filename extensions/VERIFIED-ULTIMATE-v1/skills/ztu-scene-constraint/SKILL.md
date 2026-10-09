---
name: ztu-scene-constraint
description: "Place models and cameras using projected bounds, readable text, safe margins and prioritized brand composition constraints."
---
# 3D Scene Constraint Solver — Perfect_AI VERIFIED ULTIMATE

## Mission / ماموریت
Place models and cameras using projected bounds, readable text, safe margins and prioritized brand composition constraints.

## When to invoke
Every hero or scroll scene combining texts and Three.js model.

## Exact workflow
1. Wait for fonts/GLB load and measure DOM text rectangles.
2. Compute world-space `Box3` bounds and project its eight corners through camera.
3. Search candidate object positions, scales and optional camera poses.
4. Score off-screen, text intersections, safe margins and focal anchoring with hard constraints first.
5. Recompute on ResizeObserver, text language, model animation extremes and camera aspect changes.
6. Expose overrides for art direction and report unsatisfiable layouts instead of clipping content.

## Acceptance criteria
- Hero heading never obscured at tested breakpoints.
- Bounds projection verified by unit tests.
- Extreme aspect ratio gracefully switches to 2D fallback.
- No infinite rerender/resize loop.

## Evidence contract
Write a machine-readable report with `status` = `pass|fail|unverified`, measured values, runtime/browser/device, changed files, exact command, artifacts and rationale. **Never** claim hardware/browser success from unit tests alone. Preserve original project files unless user explicitly authorizes edits. Avoid MCP; use local CLI and files.

## Compatibility and precautions
Read the installed dependency versions and project conventions first; prefer official APIs. Respect reduced motion, keyboard navigation, privacy, Persian RTL and low-power devices. Do not let two animation engines own the same DOM property. Test fallback modes and undo changes when the same acceptance check regresses.

## Working files
- `../../references/scene-constraint-implementation.md`
- `../../examples/scene-constraint/README.md`

## Official references
- https://threejs.org/docs/pages/Box3.html
