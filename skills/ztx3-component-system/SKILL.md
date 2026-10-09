---
name: ztx3-component-system
description: "Component Architecture & Design System — select, implement, audit and test component system for production Codex frontend work, with responsive and accessibility checks."
---

# Component Architecture & Design System

Implement headless state/behavior, semantic accessible markup and visual skin separately. Build React/TypeScript contracts, Storybook states, automated interaction tests, RTL, responsive containers and token inheritance. Choose Radix/shadcn/Ark/Headless only per ecosystem compatibility, never mix redundant primitives without a plan.

## Workflow

1. Record explicit project requirements, business goal, content and accepted test budget.
2. Read `references/HANDBOOK.md` and pick precise technique Skill files, not the entire catalog.
3. Implement smallest meaningful working baseline, then add incremental enhancements.
4. Measure or inspect result with real devices and produce fallback.
5. Report verified/untested results. No MCP, no destructive overwrites.

## Core obligations

Define a typed component contract; implement semantic state transitions and storybook fixtures; map variants to design tokens.

Test keyboard focus/Escape, loading/error/empty and RTL using automated and manual cases.

## References

- `references/HANDBOOK.md` — full architecture and 12 deep techniques.
- Refer to `ztx3-<technique>` Skill for focused implementation and acceptance.
