---
name: ztx4-cinematic-motion
description: "Deep implementation master for Cinematic Animation / Multi-engine with 22 targeted Codex skills, code, tests and no MCP. Additive to all existing Perfect_AI versions."
---

# Cinematic Animation / Multi-engine

Choreograph intentional, reversible animation without competing animation libraries or inaccessible motion.

## Mandatory sequence
1. Create a timecode/storyboard including audio ownership and reduced-motion version.
2. Assign one engine per transform/property; orchestrate with shared normalized playback state.
3. Keep animated DOM and GPU scene driven by shared time or scroll, not nested uncontrolled RAF loops.
4. Scrub, rewind, pause, destroy and recreate cleanly; handle tab visibility and route transitions.
5. Validate reduced motion, keyboard navigation, timing continuity and mobile low-power path.

## Skill routing
Choose only technique files needed for this project from `DEEP-IMPLEMENTATION-v2/references/cinematic-motion.md`. Never indiscriminately load all 300+ skills into context.

## Runbook
Inputs: storyboard, timeline keyframe map, scroll state, semantic controls and compatible installed versions.

Implementation: define owner per animated property; use Anime.js timeline/ScrollObserver, GSAP, Rive, Theatre or CSS only for its owned property; normalize reversible progress.

Tests: scrub forward/back, pause/resume, route unmount, keyboard activation, reduced-motion information parity, no conflicting transforms.

## Acceptance gates
1. Reverse scrolling yields same scene at same normalized progress.
2. Reduced motion displays full content in useful order.
3. Single owner controls each transform property; cleanup on route change.

## Runnable assets
`extensions/DEEP-IMPLEMENTATION-v2/examples` and `tools` (installed main package). See `RUNBOOK-FA.md`.

## Sources
- [animejs](https://animejs.com/documentation/)
- [theatre](https://www.theatrejs.com/docs/latest/api/core)
- [rive](https://rive.app/docs/runtimes/react/react)
- [lottie](https://lottiefiles.com/)
