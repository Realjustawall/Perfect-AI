---
name: zt-responsive-system
description: Responsive design engineering: production-level container queries, fluid type, 320 to 4K. Use when implementing, reviewing or testing responsive design engineering for React, Vite, Next.js or Perfect_AI projects.
---

# Responsive design engineering

## When to activate
Use on tasks involving **container queries, fluid type, 320 to 4K**. For unrelated backend tasks do not load this skill.

## Implementation sequence
1. Inspect project dependencies, application entrypoints, routing and build scripts.
2. Define interfaces and state machines before visuals, preserve existing behavior.
3. Build semantic HTML and mobile-first layouts with logical CSS; integrate motion only when interaction works.
4. Validate keyboard, screen reader names, bidirectionality, input error and loading states.
5. Run typecheck, build, unit tests, browser tests, and inspect responsive overflow.

## Task-specific requirements
- Scope: **container queries, fluid type, 320 to 4K**. Design the full execution path, not a screenshot placeholder.
- Identify dependency version and actual supported API signature; avoid inventing APIs.
- Use original code, or install licensed upstream through its maintained tool if the user wants upstream code.
- Choose measurable states, error handling, accessibility and performance budgets.

## Implementation starter
```css
.layout { display:grid;grid-template-columns:minmax(0,1fr);gap:clamp(1rem,2.5vw,2.5rem); }
.title { font-size:clamp(2rem,5vw,5rem); line-height:1.08; }
@container (min-width:42rem) { .layout { grid-template-columns:minmax(0,1fr) minmax(0,1fr); } }
@media (prefers-reduced-motion:reduce) { .motion { animation:none !important; transition:none !important; } }
```

## Evidence / acceptance
- 320px no horizontal overflow; 200% zoom; LTR islands correct; focus order consistent.
- Test common, edge, interrupted, accessibility and responsive states; provide concrete artifacts/evidence.

## Deep references
- `../perfect-ai-master/references/04-ui-ux-system.md`
- `../perfect-ai-master/references/05-responsive-rtl.md`
- `../perfect-ai-master/references/11-workflow-architecture.md`
