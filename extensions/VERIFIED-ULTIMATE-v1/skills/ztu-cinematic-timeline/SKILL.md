---
name: ztu-cinematic-timeline
description: "Drive Anime.js GSAP Motion and Three.js from one normalized deterministic playhead with seek pause reverse replay and capture."
---
# Deterministic Cinematic Timeline — Perfect_AI VERIFIED ULTIMATE

## Mission / ماموریت
Drive Anime.js GSAP Motion and Three.js from one normalized deterministic playhead with seek pause reverse replay and capture.

## When to invoke
Immersive scroll storytelling and multi-engine transitions.

## Exact workflow
1. Pick a single global logical clock in milliseconds.
2. Adapt each library with explicit pause/seek API; GSAP expects seconds, Motion time seconds, Anime.js seek milliseconds.
3. Update Three.js scene from an idempotent `renderAt(t)` function, never additive rotation increments.
4. Disable ambient animation loops in snapshot mode and coordinate scroll progression.
5. Run pure tests for clamping, pause, reverse and repeated seek; browser-test integration under installed versions.

## Acceptance criteria
- Repeated seeks to same t render same state.
- Reverse reproduces earlier keyframe.
- No double-owned transforms.
- Motion reduced-preference honors essential content.

## Evidence contract
Write a machine-readable report with `status` = `pass|fail|unverified`, measured values, runtime/browser/device, changed files, exact command, artifacts and rationale. **Never** claim hardware/browser success from unit tests alone. Preserve original project files unless user explicitly authorizes edits. Avoid MCP; use local CLI and files.

## Compatibility and precautions
Read the installed dependency versions and project conventions first; prefer official APIs. Respect reduced motion, keyboard navigation, privacy, Persian RTL and low-power devices. Do not let two animation engines own the same DOM property. Test fallback modes and undo changes when the same acceptance check regresses.

## Working files
- `../../references/cinematic-timeline-implementation.md`
- `../../examples/cinematic-timeline/README.md`

## Official references
- https://animejs.com/documentation/timeline/timeline-methods/seek/
- https://gsap.com/docs/v3/GSAP/Timeline/
- https://motion.dev/docs/animate
