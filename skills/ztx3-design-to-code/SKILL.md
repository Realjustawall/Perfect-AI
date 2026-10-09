---
name: ztx3-design-to-code
description: "Design-to-Code Pipeline (offline) — select, implement, audit and test design to code for production Codex frontend work, with responsive and accessibility checks."
---

# Design-to-Code Pipeline (offline)

Import local Figma exports in SVG/PNG/JSON and user-supplied design tokens, not MCP. Map layers to semantic components, token values to CSS variables, autolayout to CSS Flex/Grid, and prototypes to a state/transition matrix. Export accessible React or vanilla implementations, compare screenshots and document uncertain mappings.

## Workflow

1. Record explicit project requirements, business goal, content and accepted test budget.
2. Read `references/HANDBOOK.md` and pick precise technique Skill files, not the entire catalog.
3. Implement smallest meaningful working baseline, then add incremental enhancements.
4. Measure or inspect result with real devices and produce fallback.
5. Report verified/untested results. No MCP, no destructive overwrites.

## Core obligations

Parse local design exports; map frame types into semantic primitives and tokens; generate only attributable assets.

Compare screenshots and inspect generated markup; confirm no missing state inference treated as fact.

## References

- `references/HANDBOOK.md` — full architecture and 10 deep techniques.
- Refer to `ztx3-<technique>` Skill for focused implementation and acceptance.
