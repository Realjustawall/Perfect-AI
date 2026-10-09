---
name: ztx3-adaptive-responsive
description: "Adaptive Responsive Engine 3.0 — select, implement, audit and test adaptive responsive for production Codex frontend work, with responsive and accessibility checks."
---

# Adaptive Responsive Engine 3.0

Begin with intrinsic component sizing: container queries, minmax(), clamp(), logical CSS, robust flex/grid sizing, and measured content. Test reflow and 400% zoom instead of device stereotypes. Adapt 3D framing, particles, post FX and interaction complexity to actual render budget, and offer complete HTML fallback.

## Workflow

1. Record explicit project requirements, business goal, content and accepted test budget.
2. Read `references/HANDBOOK.md` and pick precise technique Skill files, not the entire catalog.
3. Implement smallest meaningful working baseline, then add incremental enhancements.
4. Measure or inspect result with real devices and produce fallback.
5. Report verified/untested results. No MCP, no destructive overwrites.

## Core obligations

Implement intrinsic layout, container-level rules and input modality handling; measure actual content and 3D fit at each breakpoint.

Test 320/360/390/768/1024/1440, 400% zoom, 600px height, touch, RTL and reduced motion.

## References

- `references/HANDBOOK.md` — full architecture and 15 deep techniques.
- Refer to `ztx3-<technique>` Skill for focused implementation and acceptance.
