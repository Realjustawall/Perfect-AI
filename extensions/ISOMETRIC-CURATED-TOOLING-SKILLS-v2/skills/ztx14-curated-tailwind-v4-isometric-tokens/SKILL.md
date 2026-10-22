---
name: ztx14-curated-tailwind-v4-isometric-tokens
description: Adapt Isometric colors and depth styling to the current shadcn/Tailwind v4 theme without global leakage or token collisions.
---

# Integrate Tailwind v4 and Isometric tokens cleanly

> Curated implementation skill. Inspect the installed project and actual component source before changing behavior. Do not assume latest APIs are installed. Preserve unrelated files and existing component ownership.

## Contract
- Inspect the project's actual Tailwind v4 entry CSS and shadcn semantic tokens before adding styles.
- Isometric documents `--iso-*` custom properties for theme overrides and shadcn tokens for light/dark parity. Use documented variables rather than styling internal paths with global selectors.
- Prefer theme-layer changes scoped to the existing design system; avoid a second reset or a second theme provider.
- Validate light and dark themes plus contrast in hover, pressed, disabled and focus states.
- Keep decorative face-shading and outline tokens visually coherent with adjacent Radix/shadcn primitives.
- Test production CSS generation; a class that works only in dev is not a completed styling fix.

## Avoid
Changing the global base font, replacing `components.json`, adding Tailwind v3-era configuration assumptions, or introducing inline styles for static tokens without need.

## Primary references
- [isometric](https://isometric.buildlab.in/llms.txt)
- [tailwind-responsive](https://tailwindcss.com/docs/responsive-design)
- [shadcn-config](https://ui.shadcn.com/docs/components-json)

## Completion evidence
- State what was inspected, what changed, and which checks actually ran. Never report unrun tests or unverified browser behavior as passing.
