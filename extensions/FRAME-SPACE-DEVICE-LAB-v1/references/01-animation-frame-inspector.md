# Animation Frame Inspector — Engineering specification

## Goals
Capture reproducible intermediate animation states (not only beginning/end). Record playhead, relative scroll progress, root viewport, element geometry, CSS transform/opacity, CSS animation state, and matching PNG. Compare frame-by-frame with a baseline using aligned time/scroll coordinates. Report changes in shape, speed/easing, and timing.

## Playwright control modes
1. **App debug adapter** (strongest): application exposes `window.__ZT_MOTION_DEBUG__ = { seek(progress), state() }`; `seek` drives anime.js timelines, GSAP `.progress()`, Three.js animation mixer `.setTime()`, and `renderer.render()` in the same frame. Only test builds may expose this hook. A separate application-owned motion controller must own transforms.
2. **Clock mode**: install `page.clock` before navigation, call `runFor(milliseconds)` in bounded increments, screenshot with `animations:'allow'`. The clock covers timers/rAF but WebGL, media decoders and third-party services may remain nondeterministic. Never call `fastForward()` for frame-by-frame motion since it may skip callbacks.
3. **Scroll mode**: set absolute or normalized scrolling position; request two rAF turns and capture. For `position:sticky`, nested scrollers, scrub smoothing, momentum plugins: check measured scroll vs requested scroll and use debug hook if necessary.
4. **Reduced-motion**: make a separate measurement; never treat animation absence under reduced-motion as failure.

## Minimum matrix
width=360,768,1440; DPR=1,2; p=0,.1,.25,.5,.75,.9,1; hover=on/off when relevant; locale=fa/en; reduced-motion yes/no. Don't blindly multiply every axis for huge projects: choose pairwise coverage plus critical hero states. Capture 5-frame baseline first.

## Pass / fail
- Stable ID per shot `(viewport,mode,progress,locale,reducedMotion)`.
- At fixed logical progress, bounding rect and visual diff within project thresholds (example <2% pixels after masking dynamic date/ads; thresholds are project-specific).
- Progress monotonically maps to visual state in normal forward scroll; reverse should restore matching state within tolerance.
- Missing or failed PNG is a failure, not silent success.
- A single frame diff is NOT motion-quality proof: compare at least 3 non-collinear time positions and derivatives of geometry / opacity trajectory.

## Cases
Anime.js timeline: expose `timeline.seek(time)` matching installed API; GSAP `timeline.progress(progress)`; Three.js animation mixer `setTime(sec)` and render once; CSS scroll timeline: position scroller; Rive / external canvas: use app-owned test hook if available. Avoid hacking React internal fiber state.

## How to run
`node tools/capture-frames.mjs --url http://localhost:5173 --selector '.hero' --mode scroll --out reports/hero`
Set `--mode debug` for app adapter or `--mode clock` for timer-dependent motion. Reference: https://playwright.dev/docs/clock
