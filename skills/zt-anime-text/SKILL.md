---
name: zt-anime-text
description: Typographic sequences: production-level splitText, words/chars, reflow and RTL. Use when implementing, reviewing or testing typographic sequences for React, Vite, Next.js or Perfect_AI projects.
---

# Typographic sequences

## When to activate
Use on tasks involving **splitText, words/chars, reflow and RTL**. For unrelated backend tasks do not load this skill.

## Implementation sequence
1. Specify timeline: targets, start/end states, duration, easing, repeat, pause, reversal, cleanup.
2. Import named Anime.js v4 APIs into client-only lifecycle; do not use v3 anime({...}) signatures.
3. Use transforms and opacity for animation; sequence with timeline rather than disconnected timeouts.
4. Bind scroll to normalized progress and apply exactly one owner per property.
5. Implement reduced-motion and cleanup; test reverse scroll, refresh at mid-scroll and resize.

## Task-specific requirements
- Scope: **splitText, words/chars, reflow and RTL**. Design the full execution path, not a screenshot placeholder.
- Identify dependency version and actual supported API signature; avoid inventing APIs.
- Use original code, or install licensed upstream through its maintained tool if the user wants upstream code.
- Choose measurable states, error handling, accessibility and performance budgets.

## Implementation starter
**Implementation notes:** Model splitText, words/chars, reflow and RTL as explicit states, define input/output props and independent cleanup. Read master reference(s) below before writing code.


## Evidence / acceptance
- Prove deterministic playback in forward/reverse scroll; no timer leaks; reduced-motion shows full content.
- Test common, edge, interrupted, accessibility and responsive states; provide concrete artifacts/evidence.

## Deep references
- `../perfect-ai-master/references/01-animejs-motion.md`
- `../perfect-ai-master/references/06-motion-recipes.md`
- `../perfect-ai-master/references/16-animejs-api-matrix.md`
