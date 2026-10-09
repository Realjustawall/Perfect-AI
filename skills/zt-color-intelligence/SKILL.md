---
name: zt-color-intelligence
description: Color selection engine: production-level product intent -> palette -> contrast -> tokens. Use when implementing, reviewing or testing color selection engine for React, Vite, Next.js or Perfect_AI projects.
---

# Color selection engine

## When to activate
Use on tasks involving **product intent -> palette -> contrast -> tokens**. For unrelated backend tasks do not load this skill.

## Implementation sequence
1. Write a design intent brief describing emotion, audience, trust requirement, content density, language and device.
2. Select structured palette: background/surface/foreground/secondary/accent/semantic/focus/chart.
3. Prefer OKLCH for ramp design, then gamut map to sRGB and compute WCAG contrast using linear sRGB.
4. Reject palette if body/foreground contrast fails, or if hue is sole meaning encoder; check all interaction states.
5. Ship CSS tokens, Figma-equivalent definitions, usage restrictions and screenshots in light/dark.

## Task-specific requirements
- Scope: **product intent -> palette -> contrast -> tokens**. Design the full execution path, not a screenshot placeholder.
- Identify dependency version and actual supported API signature; avoid inventing APIs.
- Use original code, or install licensed upstream through its maintained tool if the user wants upstream code.
- Choose measurable states, error handling, accessibility and performance budgets.

## Implementation starter
**Implementation notes:** Model product intent -> palette -> contrast -> tokens as explicit states, define input/output props and independent cleanup. Read master reference(s) below before writing code.


## Evidence / acceptance
- Document chosen semantic role palette and contrast table; fail visibly if accessibility thresholds are unmet.
- Test common, edge, interrupted, accessibility and responsive states; provide concrete artifacts/evidence.

## Deep references
- `../perfect-ai-master/references/03-color-theory.md`
- `../perfect-ai-master/references/18-color-decision-engine.md`
- `../perfect-ai-master/references/19-design-matrix.md`
