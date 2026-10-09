# Anime.js v4 — exhaustive implementation map and motion engineering

## 0. Version sanity

Anime.js v4 is **not** the v3 `anime({targets:...})` default recipe. Install `npm i animejs`, pin the tested version in `package-lock.json`/`pnpm-lock.yaml`; verify exact exports in the installed package before writing code. Docs: https://animejs.com/documentation.

Essential v4 imports: `animate`, `createTimeline`, `stagger`, `createScope`, `onScroll`, `svg`, `splitText`, `createDraggable`, `createAnimatable`, `createTimer`, `engine`, `utils`, and optionally `waapi` (verify availability/version). Import only what is used; consult docs for version-specific methods.

## 1. Every major Anime.js tool family

| Family | Explain/use | Core engineering concerns |
|---|---|---|
| Timer | basic time progression/interval scheduling and callbacks (`createTimer`) | delay/duration/loop, teardown, pause/resume |
| Animation | animate CSS, HTML attributes, SVG properties, JS object properties with `animate` | units, defaults, transform ownership, composition |
| Per-property parameters | separate easing/duration/keyframes for each property | choreography and conflicts |
| Keyframes | array values and sequential timings | interruptions, clear final state |
| Playback | play/pause/restart/reverse/seek, alternate, loop | choose correct lifecycle; no orphan loops |
| Timeline | `createTimeline`, `.add`, labels, relative offsets, callbacks, sync | deterministic ordering, local scope |
| Stagger | `stagger` time/value/index, from first/center/random/grid | grid dimensions, RTL direction |
| Animatable | `createAnimatable` for high-frequency pointer-driven input | precomputed access, dampened motion |
| Draggable | `createDraggable`, drag constraints/snap/spring/flick | touch, scrolling, pointer capture, a11y alternative |
| Scope | `createScope` root, media queries, scoped methods, revert | React/Vue mounting/unmount cleanup |
| Scroll Observer | `onScroll` enter/leave thresholds, sync/trigger/callbacks | scroll progress, reverse, resize, sticky | 
| SVG morphing | `svg.morphTo()` | compatible paths, winding, visual continuity |
| SVG line drawing | `svg.createDrawable()` | stroke semantics, progress, vector scaling |
| SVG path motion | `svg.createMotionPath()` | position/rotation, direction, coordinate space |
| Text splitting | `splitText` lines/words/chars | accessible clone, dynamic resplitting, Farsi glyphs |
| Easings | in/out/inOut, cubic, expo, sine, back, bounce, spring | perceived weight, overshoot constraints |
| Engine | update loops, speed/timescale/defaults | avoid parallel schedulers and redundant timers |
| Utilities | `utils` selector/helpers/math, set/clean | avoid unnecessary string selectors at every frame |
| WAAPI | `waapi.animate` for browser-backed animations when suitable | feature support, playback differences, browser compatibility |

**Rule:** Don't call every API in the same section. Choose techniques by objective; 'all tools' means know/use their suitable combinations, not turning every control into animation.

## 2. Timeline anatomy

```ts
import { animate, createTimeline, stagger } from 'animejs';

const tl = createTimeline({ defaults: { duration: 650, ease: 'outCubic' } });
tl.label('start')
  .add('.hero-title', { y: ['1.3em', '0em'], opacity: [0, 1] }, 'start')
  .add('.hero-subtitle', { y: [28, 0], opacity: [0, 1] }, 'start+=120')
  .add('.hero-cta', { scale: [.96, 1], opacity: [0, 1] }, 'start+=300');
// Only one transform owner per element. Do not nest animation in a CSS infinite loop.
```

Timeline design: define beats (anticipation → entrance → hold → exit), label beats, select `ease` per visual mass, avoid unbounded looping on text. For overlapping animations use explicit offsets, handle mid-animation interaction and cleanup.

## 3. Scroll Observer; correct patterns

```ts
import { animate, onScroll } from 'animejs';

animate('.visual', {
  y: [40, -40],
  rotate: ['-3deg', '3deg'],
  autoplay: onScroll({
    target: '.chapter',
    enter: 'bottom top',
    leave: 'top bottom',
    sync: true,
    // debug: true only during calibration
  })
});
```

`enter`/`leave` pair describes target/container threshold positions. `sync:true` maps progress directly; other modes include playback control methods and eased sync, so **verify** selected mode from version-specific docs. Use `onEnter`, `onLeave`, `onUpdate` callbacks only when needed. A scroll trigger is not a magical sticky layout: CSS controls sticky/pinning. At each breakpoint verify target length; refresh thresholds on font/image layout changes and orientation.

## 4. Scroll-scrubbed 3D integration (Anime.js + Three.js)

- Let Anime.js animate a plain JS state object (`sceneState`), not `mesh.rotation` and the same CSS transforms simultaneously.
- In Three.js render loop, sample `sceneState` and apply position/rotation/scale/opacity to mesh/material; ideally use a central render loop.
- `onScroll` scrubs `progress`; map sections into normalized intervals (`[0,.2]` etc); apply easing deliberately to individual *visual properties*, not raw navigation distance.
- Never derive movement from `wheel` deltas alone: keyboard scrolling, dragging scrollbar, browser history and touch must work.
- For huge point clouds update uniforms for global shape changes rather than rewriting CPU arrays every frame; use GLSL vertex shader for displacement.
- On reduced motion keep content and choose a static representative pose; user-controlled scroll may shift sections without cinematic spin.

## 5. Split text for Persian / bilingual headings

```ts
import { splitText, animate, stagger } from 'animejs';
const { words } = splitText(document.querySelector('.heading')!, {
  words: { wrap: 'clip' }
});
animate(words, { y: ['100%', '0%'], opacity: [0, 1], delay: stagger(55), duration: 600, ease: 'outCubic' });
```

- Fonts must load **before** splitting: `await document.fonts.ready` where available; resplit on width or font changes and revert old wrappers on teardown.
- Do **not** split Persian words into naive JS string chars: ZWNJ, Arabic joining, emoji and graphemes would break. Prefer words or `Intl.Segmenter` grapheme handling plus accessibility clone. Check exact `splitText` API in installed v4/v4.2.
- Keep screen-reader text unchanged/accessibly cloned. Test mixed `Perfect_AI`, `CLAUDE`, `CODEX`, numbers in RTL headings with `<bdi>` as needed.

## 6. Stagger and grid choreography

- Ordered reveal: 30–90ms item offset for a short series, 150–600ms total cascade; long lists need paging/virtualization rather than 1000 staggered DOM nodes.
- From center for radial composition; from start/end for direction; random only when narration allows.
- Use transform+opacity primarily; opacity is not enough to remove an invisible button from tab order.
- On repeated list updates use stable keys and only animate newly inserted elements.
- RTL: an index-based stagger should follow **visual** order as desired, not assume DOM order automatically matches perception.

## 7. SVG toolset and geometry

- Morph: same path winding and compatible point sampling; watch self-intersections, joins and edge aliasing.
- Draw: line progress should match pathLength and preserve antialiasing; avoid animating massive stroked SVGs on every frame.
- Motion path: path guides DOM badge/particle; measure SVG viewBox scaling, offset anchor center and marker rotation; keyboard access for controls.
- Production SVG: use `<title>`, accessible label when informative; hide decorative SVG.

## 8. Easing design book

| Motion | Preferred ease and feel | Typical duration (illustrative, not fixed) |
| --- | --- | --- |
| Tooltip / popover | outCubic, fast | 120–220ms |
| UI action feedback | outQuad / inOutSine | 100–220ms |
| Card entry | outCubic/outExpo | 400–700ms |
| Page transitions | inOutCubic | 450–900ms |
| Heavy orb rotation | smooth damped interpolation | scroll-driven |
| Magnetic control | spring / damped | 150–380ms |
| Background ambience | linear/sine, subtle | 8–25s |
| Counter | outCubic, large-number interpolation | 500–1200ms |
| Error shake | short damped x oscillation | 250–450ms |

Only animate layout values (width, height, top) where FLIP/measure technique is intentional and tested. Use `transform-origin` with radial reveals and 3D tilt.

## 9. Draggable design

Input contract: pointer/touch/key (if necessary), min/max, snap behavior, drag handle region, drag-cancel on Escape, inertia bound to a container, scrolling gesture priority. Interactions like swipe-to-confirm need an ordinary keyboard-operable control and accessibility text. In VibeFarsi `swipe-to-confirm`, use native component if available rather than improvising inaccessible gestures.

## 10. CSS + Anime coordination

Treat CSS as the look/normal states; Anime as motion state. Never have both writing `transform` on the same target unpredictably. If hover tilt and timeline entry share an item, use wrappers: `.enter-shell` (Anime) around `.tilt-surface` (pointer/CSS). Animate `opacity` but keep initial SSR content available where JS is disabled; avoid a global `opacity:0` no-JS blank page.

## 11. Lifecycle, leaks, QA

- Create animation after element exists; release/revert instances on unmount/route transitions.
- Pause loops when `document.hidden` and via `IntersectionObserver` when offscreen.
- Handle resize/visibility without spawning duplicate observers and duplicate rAF loops.
- Distinguish transform effect in CSS vs WebGL scene to debug any mismatch.
- Test scrolling both directions, wheel/touch/keyboard, short pages, memory use after repeated route changes, 200% zoom, reduced motion, and RTL mixed-language headings.

Official references:
- https://animejs.com/documentation
- https://animejs.com/documentation/events/onscroll
- https://animejs.com/documentation/timeline
- https://animejs.com/documentation/scope
- https://animejs.com/documentation/svg
- https://animejs.com/documentation/text/splittext/
