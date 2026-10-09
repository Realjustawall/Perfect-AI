---
name: ztx3-performance-auto
description: "Automatic Performance Optimization — select, implement, audit and test performance auto for production Codex frontend work, with responsive and accessibility checks."
---

# Automatic Performance Optimization

Record budgets for LCP, INP, CLS, JavaScript, shader execution, FPS and memory. Profile before optimizing. Implement adaptive tiers based on measured frame time, visibility and reduced-data preferences; use hysteresis and upper/lower bounds. Preserve important content, keyboard functionality and visual hierarchy in all tiers.

## Workflow

1. Record explicit project requirements, business goal, content and accepted test budget.
2. Read `references/HANDBOOK.md` and pick precise technique Skill files, not the entire catalog.
3. Implement smallest meaningful working baseline, then add incremental enhancements.
4. Measure or inspect result with real devices and produce fallback.
5. Report verified/untested results. No MCP, no destructive overwrites.

## Core obligations

Measure baseline; set explicit performance budget; implement quality governor, cleanup and repeatable trace.

Validate stable quality tiers against synthetic frame times; never claim simulated numbers are real FPS.

## References

- `references/HANDBOOK.md` — full architecture and 12 deep techniques.
- Refer to `ztx3-<technique>` Skill for focused implementation and acceptance.
