---
name: ztx3-advanced-typography
description: "Advanced Typography Engine — select, implement, audit and test advanced typography for production Codex frontend work, with responsive and accessibility checks."
---

# Advanced Typography Engine

Treat type as layout geometry. Select native readable Persian and Latin families for content, variable axes for hierarchy, fluid type ramps, language-specific tracking, line breaking, metrics-aligned fallbacks, bidi isolation and user override support. Implement CSS-only and animated text without breaking selection or screen reader reading order.

## Workflow

1. Record explicit project requirements, business goal, content and accepted test budget.
2. Read `references/HANDBOOK.md` and pick precise technique Skill files, not the entire catalog.
3. Implement smallest meaningful working baseline, then add incremental enhancements.
4. Measure or inspect result with real devices and produce fallback.
5. Report verified/untested results. No MCP, no destructive overwrites.

## Core obligations

Set a fluid type ramp and font metrics; construct language-specific variants and fallback font strategy.

Inspect glyph joining, line wraps at 320px, RTL+Latin mixed values, font-disabled and 400% zoom.

## References

- `references/HANDBOOK.md` — full architecture and 12 deep techniques.
- Refer to `ztx3-<technique>` Skill for focused implementation and acceptance.
