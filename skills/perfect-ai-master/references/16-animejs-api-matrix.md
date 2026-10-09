# Anime.js v4 advanced implementation matrix — verified official API families

**Goal:** implement behavior, not imitate a screenshot. Official docs: https://animejs.com/documentation/ (2026-10-09). Named APIs below are actual v4 entrypoints; verify version when installing. Every task: define target, timeline, state, breakpoints, alternate/reverse, pause, cleanup, keyboard, low-motion.

| Module | Main entry/API | Design responsibility | Real verification |
|---|---|---|---|
| Timer | `createTimer` | synchronized timed callbacks, replace multiple drifting JS timers | pause, playback rate, disposal, clock |
| Animation | `animate` | CSS properties, SVG attributes, objects, individual transform composition | inspect computed transform, retarget, loop settings |
| Timeline | `createTimeline` | named labels, relative positions, synchronized tracks | seek to first/mid/last, reverse, overlapping tweens |
| Animatable | `createAnimatable` | optimized recurring cursor/pointer-like updates | repeated input, bounds, unmount |
| Draggable | `createDraggable` | drag, snapping, inertia, constraints | touch, mouse, pointer cancel, keyboard equivalent |
| Layout | read version-specific layout API | animated layout transitions/FLIP, size/position | item moved vs re-created; no layout jump |
| Scope | `createScope` | media queries, root, shared defaults, revert | breakpoint changes, unmount, pref reduced motion |
| Events | event callbacks + v4 event interfaces | complete lifecycle, cancel, visibility | duplicate registration and leaks |
| SVG | `morphTo`, `createDrawable`, `createMotionPath` | paths, morphs, strokes | matching shape topology, direction, path bounds |
| Text | `splitText` | word/char/line splits and restores | graphemes, Persian words, RTL, screen reader |
| Utilities | `utils` | randomization, set/get/remove, damping, distribute | deterministic seeding where available |
| Easings | named eases, `createSpring` | acceleration, damping, velocity | overshoot constraints and settled threshold |
| WAAPI | `waapi.animate` | simple lightweight compositor motion | browser support, feature differences |
| Engine | engine configuration/API | timeline clock, FPS, visibility and frame policies | background tab and suspend behavior |
| Adapters | version-specific adapters | supported non-DOM animation targets | dependency compatibility |

## Implementation atlas: site demonstration types

The public home lists feature groups, not a finite inventory of every possible animation. See source: https://animejs.com/ ; deep docs: https://animejs.com/documentation/.

### A1 — property keyframes, per-property parameters
- Two independent targets: opacity 0→1; x=-32→0; rotate -3deg→0. Assign values/intervals per property. Observe final transform after cancel.
- Acceptance: animation can be restarted from initial values; no jumping on resize.

### A2 — function-valued transitions and composition
- Derive per-index values without mutating source array, use `composition:'blend'` only when intentional. Do not assign competing CSS transforms in same frame.
- Acceptance: repeated triggers do not add runaway transforms.

### A3 — Scroll Observer
- Use `onScroll({sync:true})` when tying an Anime.js animation to scroll; compute sticky dimensions and phase ranges on resize. For true WebGL scene, read normalized progress and write to Three.js state instead.
- Acceptance: 0→1 and 1→0 return identical states; deep-link refresh works.

### A4 — Stagger grid and timeline offsets
- Grid `stagger` time/value origins (`first`, `center`, `last`) and shape dimensions; respect DOM/RTL reading order (visual order may differ).
- Acceptance: timing order verified via recorded start timestamps.

### A5 — SVG morph
- Prefer paths with compatible anatomy / point correspondence; match closed/open contours. Use `morphTo` then test missing/empty path errors.
- Acceptance: 0%, 50%, 100% produce no jumps or invisible strokes.

### A6 — SVG draw
- Use `createDrawable`; keep linecap / pathLength correct. Avoid per-frame getTotalLength on many paths.
- Acceptance: leading/trailing cap smooth; `prefers-reduced-motion` full stroke.

### A7 — SVG follow path
- Use `createMotionPath`, verify anchor origin, CSS/CTM coordinate spaces. Avoid animated path and follower mismatch.
- Acceptance: no offscreen drift when SVG viewBox changes.

### A8 — Spring and draggable
- Constraint boundary, release friction/inertia; add touch-action and pressed state cues. Semantic draggable items require keyboard reposition controls.
- Acceptance: pointercancel and releasing outside viewport produce stable state.

### A9 — Timelines and labels
- Build beats: 0 entry, 0.2 focus, 0.45 transform, 0.7 release, 1 exit; use stable absolute/relative offsets and labels.
- Acceptance: seek to each label has valid state, no mid-frame emptiness.

### A10 — Responsive scope
- Media queries for portrait, max-width and reduce motion. Scope-specific construction + revert on disposal; no global duplication.
- Acceptance: crossing breakpoint keeps content visible and no extra listeners.

### A11 — Split text
- Wrap only visual text where semantics remain accessible; Persian shaping, punctuation and bidi are tested against unsplit baseline. Avoid char splitting of connected Arabic-script glyphs when it breaks shaping: use words or lines.
- Acceptance: copy/paste, search and screen reader contents remain meaningful.

### A12 — WAAPI
- Choose `waapi.animate` for simple compositor transitions; only rely on supported API subset, not `animate` feature parity.
- Acceptance: graceful fallback for browsers and features.

### A13 — Real 3D coordinated by Anime.js
- Three.js objects use real mesh/camera; Anime.js animates a shared numeric object OR CSS UI (not both mesh transform owners). On tick, sample progress and write scene properties; render at most once/frame.
- Acceptance: dispose GPU resources; rewind scroll; low-motion renders final still.

## Playbook for faithful motion reconstruction
1. Record site behavior through allowed browser tooling; capture frames at scroll progress 0,.1,.25,.5,.75,.9,1 for each section; extract dominant object silhouette and movement.
2. Treat exact original source code as unavailable until actually obtained legally; public feature docs do not reveal proprietary demo source or geometry.
3. Write a geometry and motion spec: orthographic/perspective, center/radius, rotations, roughness, depth, emission, camera, overlay typography, scroll anchor, progression.
4. Create original mechanics using Anime.js/Three.js. Test frame-to-frame pixel differences *after* baseline captures; report tolerance and uncertainties.
5. Implement alternate/reduced-motion still frames and accessibility fallback; avoid any assertion of 100% match without evidence.

See `examples/live-lab/` for independently implemented production-shaped code.
