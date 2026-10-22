---
name: ztx14-isometric-buildlab-master
description: Implement, extend, audit, and test the Isometric buildlab registry for React 19 and Tailwind CSS v4, including pointer-reactive figures, isometric primitives, blocks, and interactive worlds.
---

# Isometric Buildlab — Master Skill

## When to use
Use this skill whenever a task mentions `https://isometric.buildlab.in`, the `@isometric` shadcn registry, line-drawn isometric figures, pointer-reactive SVG UI, isometric primitives, interactive objects, Blocks, or World.

## Verified site contract
The current public site describes Isometric as fine-line isometric drawings and UI primitives for React. Its published setup names **React 19**, **Tailwind CSS v4**, `components.json`, and installation through the shadcn CLI. Registry namespace:

```json
{
  "registries": {
    "@isometric": "https://isometric.buildlab.in/r/{name}.json"
  }
}
```

Typical targeted install:

```bash
npx shadcn@latest add @isometric/skyline @isometric/iso-button
```

The full bundle is published as:

```bash
npx shadcn@latest add @isometric/all
```

Use the full bundle only when the task genuinely needs it. The documentation says registry files are installed as editable source under `components/ui/isometric/`, with the engine under `lib/isometric/`. Isometric-specific CSS custom properties use the `--iso-*` namespace and should inherit the project’s existing shadcn tokens and `.dark` theme.

## Component families to route toward
- **Figures:** Skyline, Stack, Keys, Rack, Laptop, Bars, Steps, Files, Cylinders, Parcel, Nodes, Cube.
- **Interactive objects:** PC Case, Heart, Pulley, Church, Reactor.
- **Blocks and game UI:** Block, Chest, Torch, Tree, Block Icon, Hotbar, Inventory, Hearts Meter, XP Bar.
- **Primitives:** Iso Button, Card, Switch, Tabs, Slider, Toggle Group, Kbd, Badge, Progress, Input, Grid, and Iso Depth.
- **World:** the combined scene with pan, zoom, day/night, and build mode.

Component names and props can change. Before implementation, open the current component-specific documentation and inspect the installed source. Do not infer an undocumented prop from a component’s name.

## Safe operating procedure
1. Inspect `package.json`, lockfile, `components.json`, React and Tailwind versions, existing aliases, styling tokens, and current route/component structure.
2. Read `https://isometric.buildlab.in/llms.txt` and the relevant page under `https://isometric.buildlab.in/components/<name>.md`; consult `https://isometric.buildlab.in/r/registry.json` for registry metadata.
3. Install the smallest relevant component set. Preview the diff first and preserve existing files. Treat installed component files as project-owned code that may be edited locally.
4. Keep one owner for each animated property. Use pointer events with stable element-local coordinates; handle `pointercancel`, mouse leave, focus, touch, container resize, and component unmount.
5. Keep essential behavior available without hover. Preserve Radix/shadcn semantics, keyboard support, screen-reader states, reduced-motion meaning, RTL/layout behavior, and touch alternatives.
6. Check one real installed component and one representative primitive in the target app. Run the project’s existing type/build/test commands and browser checks where available; capture evidence rather than asserting unrun tests.

## Motion and responsive guardrails
- Do not run expensive geometry calculations or layout reads on every pointer event; coalesce transient input into a coordinated animation frame.
- Prefer a shared animation loop, pause offscreen/hidden scenes, and stop scheduling frames at rest.
- Bound spring velocity, tilt, depth displacement, and zoom. Preserve velocity on retarget where it improves continuity; reset state on cancellation or unmount.
- Test touch/coarse-pointer and 320/390/768/1280 CSS-pixel layouts or the project’s declared breakpoints.
- Under `prefers-reduced-motion: reduce`, remove decorative movement while keeping selected values, object identity, and state changes clear.
- Avoid adding Motion, GSAP, Three.js, or another animation dependency unless the existing engine cannot satisfy a concrete requirement and the trade-off is documented.

## Acceptance gates
- Requested registry source resolves and no existing local file was silently overwritten.
- Visual state agrees with semantic state after activation, cancellation, route change, and re-entry.
- Keyboard, touch/coarse pointer, reduced motion, light/dark themes, and responsive layout remain usable.
- No new console error, hydration mismatch, runaway RAF loop, layout shift, or obvious SVG/picking regression.
- Final report separates actual tests from untested checks and lists changed files, evidence, regressions, and remaining uncertainty.

## Official references
- Site and agent-readable documentation: https://isometric.buildlab.in/llms.txt
- Machine-readable registry: https://isometric.buildlab.in/r/registry.json
- Source repository: https://github.com/Abhishek-Mallick/Isometric
- shadcn registry schema: https://ui.shadcn.com/docs/registry/registry-json
- shadcn registry item schema: https://ui.shadcn.com/docs/registry/registry-item-json
- Pointer Events: https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events
- Reduced motion: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
