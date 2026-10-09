---
name: ztx4-cinematic-motion-reduced-motion-staging
description: "Implement reduced motion staging for Cinematic Animation / Multi-engine with concrete acceptance gates, responsive/RTL safety, and no MCP. Additive Perfect_AI extension."
---

# Cinematic Animation / Multi-engine / reduced-motion-staging

## Precise purpose
Preserve information order without automatic motion when user prefers reduced motion.

## First read
- `$perfect-ai-master` and `$ztx3-nexus-master` remain available; never overwrite or replace them.
- `../../extensions/DEEP-IMPLEMENTATION-v2/references/cinematic-motion.md` inside the full pack.
- Consult corresponding existing NEXUS handbook at `extensions/handbooks/cinematic-motion.md`.
- This is a new supplemental Skill, not a claim that third-party software is bundled.

## Input contract
Inputs: storyboard, timeline keyframe map, scroll state, semantic controls and compatible installed versions.

## Implementation workflow for this technique
1. **Identify specific need:** Preserve information order without automatic motion when user prefers reduced motion.
2. **Baseline:** inspect existing code and record behavior and compatible dependency versions; keep old behavior unchanged.
3. **Build:** Implementation: define owner per animated property; use Anime.js timeline/ScrollObserver, GSAP, Rive, Theatre or CSS only for its owned property; normalize reversible progress.
4. **Technique-specific output:** create a named source module, stylesheet, fixture and test targeting `reduced-motion-staging` rather than a generic screenshot.
5. **Variations:** desktop / compact container / 320px mobile / Persian RTL / English LTR / reduced motion / blocked external assets.
6. **Measure:** log what runs with concrete outputs, fail gracefully when engine or browser support unavailable.
7. **No regressions:** do not delete, reformat or overwrite unrelated existing application code.

## Technique-specific verification
- Assert: Preserve information order without automatic motion when user prefers reduced motion.
- Tests: scrub forward/back, pause/resume, route unmount, keyboard activation, reduced-motion information parity, no conflicting transforms.
- Reverse scrolling yields same scene at same normalized progress.; Reduced motion displays full content in useful order.; Single owner controls each transform property; cleanup on route change.

## Deliverables
`implementation-notes.md`, source implementation, relevant fallback source, test fixture, screenshots if browser-run, `verified-results.json` showing passed/failed/unrun.

## Source of truth
- [animejs](https://animejs.com/documentation/)
- [theatre](https://www.theatrejs.com/docs/latest/api/core)
- [rive](https://rive.app/docs/runtimes/react/react)
- [lottie](https://lottiefiles.com/)
