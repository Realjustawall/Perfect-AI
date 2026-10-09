---
name: ztx3-cinematic-motion
description: "Cinematic Animation Engine — select, implement, audit and test cinematic motion for production Codex frontend work, with responsive and accessibility checks."
---

# Cinematic Animation Engine

Use a single master-clock/progress coordinator with explicit ownership over each property. Animate DOM/SVG with Anime.js/GSAP/Motion only when needed; use Rive for authored state machines, Lottie for exported vector loops, Theatre.js for precise sequenced camera/object paths. Define interruption, rewind, reduced-motion end state and background-tab behavior for every sequence.

## Workflow

1. Record explicit project requirements, business goal, content and accepted test budget.
2. Read `references/HANDBOOK.md` and pick precise technique Skill files, not the entire catalog.
3. Implement smallest meaningful working baseline, then add incremental enhancements.
4. Measure or inspect result with real devices and produce fallback.
5. Report verified/untested results. No MCP, no destructive overwrites.

## Core obligations

Define a single progress clock and ownership map; implement intro, sustain, exit and reversible seek; provide disabled-motion final state.

Seek normalized timeline at 0, 0.25, 0.5, 0.75, 1 and backward; assert no duplicate raf loops.

## References

- `references/HANDBOOK.md` — full architecture and 14 deep techniques.
- Refer to `ztx3-<technique>` Skill for focused implementation and acceptance.
