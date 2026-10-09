# Responsive scroll choreography / pinning / depth / motion safety

Define a **scene model** first: [phase id, progress range, pinned layout owner, 3D camera pose, content, motion direction, fallback]. Scroll follows source of truth `p=clamp((scrollY-start)/(end-start),0,1)`; protect zero-height intervals. Choreography must reverse exactly when scrolling upward, and skip safely to final state when reduced motion is on.

## Sticky section architecture
- Section owns document height; sticky stage sits in normal document flow: `position:sticky; top:0; min-block-size:100svh`.
- For short viewports, reduce scale or stack text below object; don't overlay content and 3D permanently. If the sticky stage exceeds viewport, don't pin it.
- Debounce heavy resize/re-measure through rAF; use `ResizeObserver` and `visualViewport` only if necessary. On orientation/zoom/font-load recalculate boundaries and seek current state; don't restart from the beginning.
- 3D object: prefer camera or group quaternion changes tied to p; one owner of transformations; avoid memory allocations per frame. Animation library chooses timeline progression, Three.js renders GPU state; keep DOM text independent.
- Scroll triggers must not prevent tab navigation or browser history. Provide skip-to-content and allow `prefers-reduced-motion` with static text.

## Phase map
| Phase | p | Visual | Content | Exit/fallback |
|---|---|---|---|---|
| Reveal | 0–.18 | orb rotation from 0→.5 turn | headline | static orb screenshot |
| Expand | .18–.4 | camera retreats + object unfolds | benefit A | reduced scale |
| Transition | .4–.65 | shader uniform/palette interpolates (if allowed) | benefit B | fade only |
| Detail | .65–.84 | close camera + particles decimate on mobile | demonstration | SVG still |
| Resolve | .84–1 | settle | CTA | preserve functional buttons |

## Test
slow wheel/fast flick, reverse, hash-link deep link, navigation back, keyboard PageDown, touch scroll, 320/568 viewport, Safari dynamic toolbar, orientation change during pin, reduced motion, WebGL context loss, 200% zoom and screen reader. Measure scroll jank and INP; do not rely on snap causing forced navigation.

Refs: https://animejs.com/documentation/events/onscroll ; https://threejs.org/manual/pages/responsive.html
