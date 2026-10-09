---
name: zt-color-accessibility
description: Color vision and contrast: production-level WCAG contrast on composited layers. Use when implementing, reviewing or testing color vision and contrast for React, Vite, Next.js or Perfect_AI projects.
---

# Color vision and contrast

## When to activate
Use on tasks involving **WCAG contrast on composited layers**. For unrelated backend tasks do not load this skill.

## Implementation sequence
1. Write a design intent brief describing emotion, audience, trust requirement, content density, language and device.
2. Select structured palette: background/surface/foreground/secondary/accent/semantic/focus/chart.
3. Prefer OKLCH for ramp design, then gamut map to sRGB and compute WCAG contrast using linear sRGB.
4. Reject palette if body/foreground contrast fails, or if hue is sole meaning encoder; check all interaction states.
5. Ship CSS tokens, Figma-equivalent definitions, usage restrictions and screenshots in light/dark.

## Task-specific requirements
- Scope: **WCAG contrast on composited layers**. Design the full execution path, not a screenshot placeholder.
- Identify dependency version and actual supported API signature; avoid inventing APIs.
- Use original code, or install licensed upstream through its maintained tool if the user wants upstream code.
- Choose measurable states, error handling, accessibility and performance budgets.

## Implementation starter
```js
const srgbToLinear = x => x <= .04045 ? x / 12.92 : ((x+.055)/1.055)**2.4;
const luminance = ([r,g,b]) => .2126*srgbToLinear(r/255)+.7152*srgbToLinear(g/255)+.0722*srgbToLinear(b/255);
const contrast = (a,b) => { const x=luminance(a),y=luminance(b); return (Math.max(x,y)+.05)/(Math.min(x,y)+.05); };
// Normal text: >=4.5; large: >=3; non-text focus/boundaries (when necessary): >=3.
```

## Evidence / acceptance
- Document chosen semantic role palette and contrast table; fail visibly if accessibility thresholds are unmet.
- Test common, edge, interrupted, accessibility and responsive states; provide concrete artifacts/evidence.

## Deep references
- `../perfect-ai-master/references/03-color-theory.md`
- `../perfect-ai-master/references/18-color-decision-engine.md`
- `../perfect-ai-master/references/19-design-matrix.md`
