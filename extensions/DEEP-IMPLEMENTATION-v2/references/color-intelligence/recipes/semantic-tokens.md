# semantic-tokens — independent recipe

**Domain:** Color Intelligence 3.0  
**Why it exists:** Emit background/surface/text/secondary/border/action/status/focus tokens by role.

## Configuration and boundaries
Inputs: product intent, user palette constraints, brand evidence, themes and semantic roles.

## Step-by-step execution
1. State observable success behavior in one sentence: Emit background/surface/text/secondary/border/action/status/focus tokens by role.
2. Inspect user-owned source and choose target platform and installed versions. Do not guess API compatibility.
3. Implement the exact behavior in an isolated named module, keeping a testable input/output contract.
4. Build a fallback without external renderers or pointer-only interaction.
5. Connect semantic state changes to engine state, not vice versa. One owner per property.
6. Add acceptance tests for error, resize, rollback and RTL/reduced-motion.
7. Compare baseline and modified screenshot/trace where visual; attach actual evidence when run.

## Execution pattern
Implementation: propose 5 OKLCH palettes; gamut-map by chroma reduction; calculate WCAG pair contrast; choose transparent multiobjective scores and emit role tokens.

## Required acceptance
1. Five alternative palettes with output tokens and explicit scored reasons.
2. Normal/large text, non-text/focus pairs checked for appropriate contrast.
3. Color is never sole signifier for state/error/series.

## Example baseline (adapt to this topic)
```css
:root { --color-canvas: #fff; --color-ink: #161616; --color-accent: #315a8e; --color-focus: #0e558d; }
[data-theme='dark'] { --color-canvas: #111; --color-ink: #f3f3f3; --color-accent: #9abce4; --color-focus: #b4d6ff; }
body { background:var(--color-canvas); color:var(--color-ink); }
:focus-visible { outline: 3px solid var(--color-focus); outline-offset: 3px; }
/* Real foreground/background WCAG contrast is verified by tools/colors.mjs, not assumed. */
```

## Risk checklist
- No invented asset licenses, untested library version, unexplained loss of keyboard behavior.
- No extra network services or MCP requirement.
- Never silently treat an example snippet as a fully built standalone product.
- Log execution status as PASS / FAIL / NOT RUN separately.

## Source references
- [wcag](https://www.w3.org/TR/WCAG22/)
- [tailwind](https://tailwindcss.com/docs/theme)
- [bootstrap](https://getbootstrap.com/docs/5.3/customize/color-modes/)
