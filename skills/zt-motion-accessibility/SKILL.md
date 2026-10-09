---
name: zt-motion-accessibility
description: Accessible motion: production-level reduced motion, seizure prevention, pause controls. Use when implementing, reviewing or testing accessible motion for React, Vite, Next.js or Perfect_AI projects.
---

# Accessible motion

## When to activate
Use on tasks involving **reduced motion, seizure prevention, pause controls**. For unrelated backend tasks do not load this skill.

## Implementation sequence
1. Specify timeline: targets, start/end states, duration, easing, repeat, pause, reversal, cleanup.
2. Import named Anime.js v4 APIs into client-only lifecycle; do not use v3 anime({...}) signatures.
3. Use transforms and opacity for animation; sequence with timeline rather than disconnected timeouts.
4. Bind scroll to normalized progress and apply exactly one owner per property.
5. Implement reduced-motion and cleanup; test reverse scroll, refresh at mid-scroll and resize.

## Task-specific requirements
- Scope: **reduced motion, seizure prevention, pause controls**. Design the full execution path, not a screenshot placeholder.
- Identify dependency version and actual supported API signature; avoid inventing APIs.
- Use original code, or install licensed upstream through its maintained tool if the user wants upstream code.
- Choose measurable states, error handling, accessibility and performance budgets.

## Implementation starter
**Implementation notes:** Model reduced motion, seizure prevention, pause controls as explicit states, define input/output props and independent cleanup. Read master reference(s) below before writing code.


## Evidence / acceptance
- Prove deterministic playback in forward/reverse scroll; no timer leaks; reduced-motion shows full content.
- Test common, edge, interrupted, accessibility and responsive states; provide concrete artifacts/evidence.

## Deep references
- `../perfect-ai-master/references/01-animejs-motion.md`
- `../perfect-ai-master/references/06-motion-recipes.md`
- `../perfect-ai-master/references/16-animejs-api-matrix.md`
