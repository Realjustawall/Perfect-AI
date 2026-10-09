---
name: ztx3-interaction-system
description: "Advanced Interaction System — select, implement, audit and test interaction system for production Codex frontend work, with responsive and accessibility checks."
---

# Advanced Interaction System

Use one interaction state machine per complex component, semantic triggers and an explicit gesture cancellation path. Integrate physics-like animation only as presentation. Model pointer, touch, keyboard, focus and screen-reader behavior consistently. Avoid gestures that trap scrolling, motion that follows cursor on touch devices or hidden actions.

## Workflow

1. Record explicit project requirements, business goal, content and accepted test budget.
2. Read `references/HANDBOOK.md` and pick precise technique Skill files, not the entire catalog.
3. Implement smallest meaningful working baseline, then add incremental enhancements.
4. Measure or inspect result with real devices and produce fallback.
5. Report verified/untested results. No MCP, no destructive overwrites.

## Core obligations

Draw state transition table including pointercancel; add semantic control and gesture alternative.

Test pointer coarse/fine, keyboard activation/cancel and touch page scrolling.

## References

- `references/HANDBOOK.md` — full architecture and 12 deep techniques.
- Refer to `ztx3-<technique>` Skill for focused implementation and acceptance.
