# Animation pattern atlas — implementation recipes, not copied site source

Each recipe below defines: **intent → technique → state/progress → lifecycle → mobile/reduced-motion fallback**. Motion should always reinforce meaning. Official Anime.js documents provide APIs; VibeFarsi registry offers different reusable CSS/React versions, often without Anime.js. Never imply these are identical implementations.

## Typography and copy

1. **Word reveal:** split by words; enter from clipped y=1em→0, opacity 0→1, 45ms stagger; keep full accessible text; reduced static.
2. **Line wipe:** `clip-path` inset to reveal stable DOM heading; avoid clipping Persian joining/diacritics.
3. **Text shimmer:** moving subtle luminance mask, occasional only; static text with a single highlight on reduced motion.
4. **Blur reveal:** opacity+translate, blur max 4–8px briefly; avoid sustained filter animation (costly).
5. **Typewriter:** reveal Unicode graphemes, not JS UTF-16 code units; cursor decorative; user can skip to full text.
6. **Word rotate:** grid overlay crossfade between strings; reserve max word width to prevent CLS.
7. **Scramble:** glitch placeholder only, preserve final text in aria-label; avoid splitting Persian incorrectly.
8. **Gradient text:** semantic contrast against background; avoid ultra-detailed animation inside dense script.
9. **Outline-to-fill:** CSS stroke/foreground crossfade; keep readability during middle progress.
10. **Marquee:** seamless duplicate track with inert duplicated content; pause on hover/focus and reduced motion.
11. **Curved text:** SVG textPath or transformed spans; decorative; accessible parallel text.
12. **Text swap:** outgoing/incoming synchronized; fixed box or FLIP, no jump.
13. **Streaming text:** append chunks with live-region throttling; no choppy per-character aria announcements.
14. **Reasoning stream UI:** distinguish generated/status/system phases, allow pause and copy, no false claims about hidden reasoning.

## Microinteractions and controls

15. **Button ripple:** pointer local coordinates, cheap CSS radial circle, clipped, disable on reduced motion.
16. **Magnetic CTA:** map bounded pointer distance to wrapper translation (<=8px); reset via spring, no mobile faux hover.
17. **Shine button:** moving white specular line on hover/focus; never obscure label.
18. **Morph button:** width/icon/label transitions with stable layout; announce loading/success state.
19. **Pulse:** scale/opacity subtle; only as state indication, not indefinite distraction.
20. **Success check:** stroke dash drawing; accompany screen-reader status text.
21. **Error shake:** short 2–4 oscillation sequence; keep error message visible, no excessive flash.
22. **Icon swap:** outgoing/incoming within fixed hit target, preserve accessible name.
23. **Animated tabs:** shared indicator transform; ensure correct tab semantics/keyboard.
24. **FAB expansion:** radial/stack actions; preserve focus order and Escape close.
25. **Like button:** pressed semantics and optimistic update with undo/error restore.
26. **Swipe-to-confirm:** drag progress w/ threshold; keyboard submit alternative and reset on cancel.
27. **Custom cursor:** decoration only fine-pointer, off for touch and accessibility prefs.
28. **Spotlight card:** conic/linear radial gradient reacting to pointer, foreground solid and readable.
29. **Tilt card:** transform on inner wrapper with `perspective`, max 4–8°, no layout mutation, disabled mobile.
30. **Before-after slider:** actual range input overlay and keyboard, clip amount 0..100.
31. **Scratch reveal:** canvas mask with explicit reveal button and reduced-motion fallback.

## Scroll and sections

32. **Intersection reveal:** once visible or replay by intent; don't hide content without JS.
33. **Scroll progress bar:** progress=(scrollTop)/(scrollHeight-clientHeight) clamp; fixed readable indicator.
34. **Pinned scene:** sticky CSS outer length + normalized timeline, discrete chapters; reverse deterministic.
35. **Pinned list:** sticky explanatory panel updates based on active section; mobile normal flow.
36. **Parallax:** 2–3 low-velocity depth layers; avoid vestibular discomfort, turn off reduced motion.
37. **Zoom transition:** scale visual image/canvas modestly, preserve text size; no accidental page zoom.
38. **Section mask:** CSS clip-path/overflow with nested readable content, set sensible end state.
39. **Scroll-triggered SVG draw:** map observer progress to stroke progress, draw once where appropriate.
40. **Sticky table of contents:** active section via observer, keyboard focus unaffected.
41. **Stagger grid:** index/group-based delays with short total and virtualization on big lists.
42. **Card stack:** depth, scale and translate with z ordering, provide card selection controls.
43. **Page transition:** orchestrate route content, avoid flicker/blank and stale history.

## Advanced visual systems

44. **Orbit:** spline/sine param 3D/2D, deterministic period, vary orbital planes.
45. **Particle field:** seeded positions, shader time, cap count; optional pointer disturbance.
46. **Volumetric orb:** true depth + nucleus/bands/spline rings + sparkles + depth-aware shading.
47. **Morphing points:** equal topology, interpolate to target with uniform, avoid CPU buffer rewrites.
48. **Calibration rings:** eccentric ring layers and tick marks, use motion synchronized with orb.
49. **SVG morph:** compatible sampled paths, preserve path orientation, reset on reverse.
50. **Motion path:** tangent rotation + progress sampling, consider viewBox scale.
51. **Radial intro:** spring/expand from center, keep headline visible and contrast readable.
52. **Animated beam:** path-following emission; progress and alpha so no infinite harsh glare.
53. **Floating labels:** subtle sin oscillation in y, no large text displacement.
54. **Glass overlay:** neutral blur/fill, avoid expensive large backdrop filters on mobile.
55. **Grid reveal:** rows/cols with stagger from focal cell, offscreen pause.
56. **Dither background:** shader/color quantization, grayscale support, avoid seizures/flicker.
57. **Metaballs:** SDF threshold blending in fragment shader; cap shader complexity.
58. **Kaleidoscope:** polar-coordinate repetition, cap aliasing and high-frequency flashing.
59. **Warp grid:** displacement shader preserving horizon/legible copy.
60. **Fog/god rays:** background/scene depth with contrast-safe foreground.
61. **Marble/plasma/nebula:** evolving noise; decorative and quality-tier controlled.
62. **Voronoi/truchet/halftone:** pattern density scalable with DPR and typography.
63. **Cursor trail:** pooling + fade, never block links or focus.
64. **Number counter:** format intl digits and numeral grouping *after* interpolating the number.
65. **Odometer:** translate digit reels per place value; numeric accessibility static final value.
66. **Progress ring:** stroke dasharray/dashoffset; role progressbar with aria values.
67. **Alert stack:** coordinated entry/exit and max visible count; announce only new data.
68. **Loading skeleton:** geometric placeholders with reserved dimensions, no perpetual shimmer if reduced motion.
69. **Compare transition:** blend frames of feature differences with actual functional control.
70. **Scene chapter transitions:** time-scrubbed camera/orb + text chapter state + navigation progress.

## Scroll storyboard template

| Phase | Scroll progress | Copy | Orb pose | Exit / accessibility |
| --- | --- | --- | --- | --- |
| Intro | 0–.18 | core headline | dense shell with slow rotation | fade copy after hold |
| Reveal tech | .18–.37 | 3D engines | expand ring planes | maintain high text contrast |
| Stack | .37–.56 | library ecosystem | morph stacked ribbons | no focusable hidden links |
| AI workflow | .56–.77 | Claude + Codex | align two orbit systems | stable animation under reverse |
| Performance | .77–1 | optimized | tighten to emblem / calm finale | safe crossfade into next section |

Use smoothstep `(t*t*(3-2*t))` for transitions *inside* chapters; preserve absolute scroll as canonical. Evaluate progress on window resize/scroll, including history restoration.

## Additional detailed pattern inventory

See `07-vibefarsi-full-catalog.md` for each of the **63 named VibeFarsi animations** and **44 named backgrounds**: these are distinct catalog items, not a claim they were all used together. When requested, select a small set with meaningful hierarchy, document the exact items and install them with VibeFarsi CLI. For home-page mimicry, use direct screenshot references and record section/scroll positions rather than guessing a source animation's internals.
