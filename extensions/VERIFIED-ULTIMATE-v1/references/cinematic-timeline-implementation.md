# Deterministic Cinematic Timeline — Technical production playbook

## Purpose
Drive Anime.js GSAP Motion and Three.js from one normalized deterministic playhead with seek pause reverse replay and capture.

## Architecture, invariants and algorithm
**Clock contract**: all scene updates use `tMs` from a single monotonic logical clock, `p = clamp(tMs / duration, 0,1)`. Anime.js timeline.seek(tMs), GSAP tl.time(tMs/1000), Motion controls.time=tMs/1000, and Three scene properties computed from absolute progress. Disable autoplay in all child engines; one orchestrator owns play/pause/seek. For a 3D object, rotation.y = initialAngle + p * Math.PI * 2, NEVER rotation.y += delta at snapshots. Scroll-linked scrub maps normalized page section progress to the same playhead. Build fixtures for t=0,25,50,75,100%, seek out of order (50→10→50), forward→reverse, reflow and language switch. Prevent property ownership collisions and side-effect callbacks firing on snapshot replay.

## Required end-to-end procedure
1. Pick a single global logical clock in milliseconds.
2. Adapt each library with explicit pause/seek API; GSAP expects seconds, Motion time seconds, Anime.js seek milliseconds.
3. Update Three.js scene from an idempotent `renderAt(t)` function, never additive rotation increments.
4. Disable ambient animation loops in snapshot mode and coordinate scroll progression.
5. Run pure tests for clamping, pause, reverse and repeated seek; browser-test integration under installed versions.

## Negative tests and fallback states
- Missing dependency or unsupported browser: report `unverified`, preserve the approved page and offer a nonblank fallback.
- Invalid input and incomplete brand brief: report exact failing constraint rather than silently choosing unrelated colors/layout.
- Reduced motion, keyboard-only, Persian RTL and English LTR: test individually with screenshots and DOM assertions.
- Rendering errors and low GPU budget: degrade aesthetics before removing essential content.
- Repeated same input: deterministic output; document acceptable GPU raster differences.

## Acceptance gates
- Repeated seeks to same t render same state.
- Reverse reproduces earlier keyframe.
- No double-owned transforms.
- Motion reduced-preference honors essential content.

## Operational evidence
Log environment, installed package versions, exact commands, JSON report, paths to generated screenshots/traces, failures, and unresolved items. Keep artifacts and code changes separate. **Do not** call a template success a browser-tested application.

## Official sources
- https://animejs.com/documentation/timeline/timeline-methods/seek/
- https://gsap.com/docs/v3/GSAP/Timeline/
- https://motion.dev/docs/animate
