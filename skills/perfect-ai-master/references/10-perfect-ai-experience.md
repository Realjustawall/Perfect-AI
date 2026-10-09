# Perfect_AI — source project profile and cinematic production spec

This is a **user-requested custom product direction**; it is not the exact private implementation of animejs.com. The user's existing project (when present) has monochrome dark design, a seeded ~13,500-point custom Canvas particle orb, a tall sticky 3D scroll journey, five text chapters and later Anime.js v4-driven text/card sections. Preserve working code unless architecture change is justified. The master skill must not claim a true Three.js model already exists if source uses custom 2D Canvas 3D projection.

## User-approved brand, copy and aesthetic

Name: `Perfect_AI` / `Perfect_AI`. Hero heading: «اسکیل Perfect_AI شاهکار خلق کنید».
Value props: «بهینه‌سازی‌شده با بهترین موتورهای 3D»، «استفاده از مدرن‌ترین کتابخانه‌ها»، «پشتیبانی از CLAUDE و CODEX»، «بهینه‌سازی حداکثری».
Visual: near-black/white/grayscale; tasteful fine radial markings, technical editorial layout, crystalline light. **No random neon rainbow themes.** Preferred experience: starts directly with cinematic scroll journey, no extra separate first hero. Smooth 3D object visible through staged scroll copy.

## Existing scene architecture (verify source before editing)

1. `scrollJourney` sticky 650vh section, `.scrollSticky` 100vh; `scrollArt` canvas overlay.
2. Phases numbered 00–04: intro, engines, libraries, AI, performance; each chapter has opacity/blur/transform keyed to absolute normalized progress.
3. Orb animation: parametric point cloud and rings projected via custom canvas: depth, rotation, scale, changing figure with scroll; responsiveness changes canvas geometry and text location.
4. Later sections: capabilities, philosophy statement split text, process list, typographic marquee, interactive motion lab (stagger/orbits/SVG path), principles/counters, CTA outro.
5. Anime.js v4 expected for relevant DOM animations, but inspect source import and behavior before modifying. 3D Canvas is custom, not inherently a Three.js scene.

## Upgrade recipe: genuine Three.js geometry (when required)

Build `<OrbScene>` with `Scene`, `PerspectiveCamera`, GPU `Points/BufferGeometry/ShaderMaterial`, 4–8 orbit line meshes, optional core faceted sphere, controlled rim lighting. Match existing silhouette and camera at 5 scroll checkpoints before adding new layers. Deduplicate CPU arrays: generated once with stable seeded random. Use ShaderMaterial with uniforms `uProgress`, `uTime`, `uPointerX`, `uPointerY`, `uReducedMotion`, `uQuality`. Progress maps to sphere/ribbon radius, rotation, explode amount, alpha and focal distance; interpolation must reverse exactly.

Strict responsive composition:
- desktop orb central or off-center, text anchored on alternating sides; ensure 3D never obscures copy.
- mobile orb top ~35–42% of stage, text in lower third; clamp headings and reduce bloom/DPR/particles; no excessive overlap.
- landscape short heights: disable long pinned stage when necessary, render smaller orb and normal document flow.
- optional pointer tilt fine-pointer only, reduced motion fixed pose, no-WebGL poster fallback.

## Extended sections after journey

1. Capabilities with four cards and actual descriptions.
2. Philosophy: typographic large editorial quote with word reveal.
3. Process: four numbered steps with subtle hover spotlight/inversion, keyboard focus.
4. Motion Lab: small demos for stagger, Timeline orbits, SVG motion path with replay controls.
5. Standards: performance/a11y truthfulness; avoid fabricated benchmark stats.
6. Architecture: Three.js/Anime.js/VibeFarsi integration map and real tech stack.
7. Creative gallery: only actual demos/assets, no fake brand logos/testimonials.
8. CTA end with functional link to docs / repository / contact configured in project.

## Reference matching workflow

For animejs.com visual inspiration, decompose observed homepage and list exact observed animation beats. A central image, shape or scroll behavior inferred from screenshots must be marked as approximated. To reproduce *identically* require access to actual asset source and right to reuse; source inspect is separate from visual resemblance. No fabricated 'all code copied' claims. Prefer proven techniques, original implementation and proper attribution.

## Advanced quality acceptance

- Keyframes at story progress 0, .15, .35, .55, .75, 1.0 visually distinct, stable and reversible.
- Text transitions do not create duplicate focus targets or layout shifts.
- Orb retains recognizable volume from all intended camera angles; avoid circle flattening during scroll.
- Three.js and Anime.js property ownership clear; one scroll-controller.
- Visual read on 320px, 375px, 768px, 1440px and short landscape.
- All button actions work; copy concise Persian; language direction correct.
- Strict monochrome token compliance; enough contrast for core copy.
