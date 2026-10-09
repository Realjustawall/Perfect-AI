---
name: zt-pwa
description: PWA design: production-level offline strategy, SW updates, caching. Use when implementing, reviewing or testing pwa design for React, Vite, Next.js or Perfect_AI projects.
---

# PWA design

## When to activate
Use on tasks involving **offline strategy, SW updates, caching**. For unrelated backend tasks do not load this skill.

## Implementation sequence
1. Inspect project dependencies, application entrypoints, routing and build scripts.
2. Define interfaces and state machines before visuals, preserve existing behavior.
3. Build semantic HTML and mobile-first layouts with logical CSS; integrate motion only when interaction works.
4. Validate keyboard, screen reader names, bidirectionality, input error and loading states.
5. Run typecheck, build, unit tests, browser tests, and inspect responsive overflow.

## Task-specific requirements
- Scope: **offline strategy, SW updates, caching**. Design the full execution path, not a screenshot placeholder.
- Identify dependency version and actual supported API signature; avoid inventing APIs.
- Use original code, or install licensed upstream through its maintained tool if the user wants upstream code.
- Choose measurable states, error handling, accessibility and performance budgets.

## Implementation starter
**Implementation notes:** Model offline strategy, SW updates, caching as explicit states, define input/output props and independent cleanup. Read master reference(s) below before writing code.


## Evidence / acceptance
- 320px no horizontal overflow; 200% zoom; LTR islands correct; focus order consistent.
- Test common, edge, interrupted, accessibility and responsive states; provide concrete artifacts/evidence.

## Deep references
- `../perfect-ai-master/references/04-ui-ux-system.md`
- `../perfect-ai-master/references/05-responsive-rtl.md`
- `../perfect-ai-master/references/11-workflow-architecture.md`
