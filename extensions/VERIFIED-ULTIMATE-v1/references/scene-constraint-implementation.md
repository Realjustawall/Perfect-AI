# 3D Scene Constraint Solver — Technical production playbook

## Purpose
Place models and cameras using projected bounds, readable text, safe margins and prioritized brand composition constraints.

## Architecture, invariants and algorithm
**Geometry**: load GLB and compute Box3 after `updateMatrixWorld(true)`; project all eight AABB vertices into viewport pixels via current camera. Inspect animated clip extrema; static bounding box at frame 0 is insufficient. `textRects = [heading, subtitles, buttons, nav]`, with expanded safe margins for legibility. Hard constraints: avoid text intersection, avoid viewport crop, avoid inaccessible controls, respect camera near/far. Soft constraints: golden-ratio focal region, composition, model size, visual hierarchy, directional gaze/negative space. Enumerate candidate world translations/scale/camera FOV offsets; record rejected reasons. If unsatisfiable on mobile, place 3D below headline, use a simplified camera or switch to static accessible media. Run solver after fonts loaded and on ResizeObserver with debounce; do not loop blindly updating geometry in observer callbacks.

## Required end-to-end procedure
1. Wait for fonts/GLB load and measure DOM text rectangles.
2. Compute world-space `Box3` bounds and project its eight corners through camera.
3. Search candidate object positions, scales and optional camera poses.
4. Score off-screen, text intersections, safe margins and focal anchoring with hard constraints first.
5. Recompute on ResizeObserver, text language, model animation extremes and camera aspect changes.
6. Expose overrides for art direction and report unsatisfiable layouts instead of clipping content.

## Negative tests and fallback states
- Missing dependency or unsupported browser: report `unverified`, preserve the approved page and offer a nonblank fallback.
- Invalid input and incomplete brand brief: report exact failing constraint rather than silently choosing unrelated colors/layout.
- Reduced motion, keyboard-only, Persian RTL and English LTR: test individually with screenshots and DOM assertions.
- Rendering errors and low GPU budget: degrade aesthetics before removing essential content.
- Repeated same input: deterministic output; document acceptable GPU raster differences.

## Acceptance gates
- Hero heading never obscured at tested breakpoints.
- Bounds projection verified by unit tests.
- Extreme aspect ratio gracefully switches to 2D fallback.
- No infinite rerender/resize loop.

## Operational evidence
Log environment, installed package versions, exact commands, JSON report, paths to generated screenshots/traces, failures, and unresolved items. Keep artifacts and code changes separate. **Do not** call a template success a browser-tested application.

## Official sources
- https://threejs.org/docs/pages/Box3.html
