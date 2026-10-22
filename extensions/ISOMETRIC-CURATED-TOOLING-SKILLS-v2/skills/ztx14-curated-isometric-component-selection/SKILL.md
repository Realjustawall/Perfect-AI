---
name: ztx14-curated-isometric-component-selection
description: Select the smallest relevant Isometric registry item and use its documented interaction contract before implementing isometric UI.
---

# Choose the smallest correct Isometric component

> Curated implementation skill. Inspect the installed project and actual component source before changing behavior. Do not assume latest APIs are installed. Preserve unrelated files and existing component ownership.

## When to use
Use this before building a new isometric figure, interactive object, block, world scene, or depth-based UI primitive.

## Decision workflow
1. Read the site’s current `llms.txt` and the exact component page or registry item JSON. The documented inventory currently distinguishes Figures, Interactive Objects, Blocks, World, Primitives, and Foundations; names and props can change, so recheck instead of relying on memory.
2. Map the requested behavior to the closest existing item. Examples: pointer-reactive skyline → `skyline`; layer selection → `stack`; draggable rope and load → `pulley`; block world/pan/zoom → `world`; tactile controls → `iso-button`, `iso-tabs`, or `iso-slider`.
3. Inspect item `type`, `files`, `dependencies`, `registryDependencies`, props, keyboard behavior, and whether it depends on the `isometric-engine` before installation.
4. Install only the requested item and necessary dependencies first. Treat `@isometric/all` as an opt-in bulk install, not the default.
5. After installation, read the local source. The registry installs editable source; adapt the local copy only after identifying the behavior owner and public props.

## Output
Return: chosen item(s), rejected alternatives and why, expected files, additional dependencies, keyboard/touch path, and verification plan.

## Avoid
- Installing an entire registry because a single figure is needed.
- Inventing props from screenshots or item names.
- Building a duplicate SVG figure when the registry already provides the same interaction.
- Promising compatibility before checking the actual React/Tailwind/shadcn versions.

## Primary references
- [isometric](https://isometric.buildlab.in/llms.txt)
- [registry](https://isometric.buildlab.in/r/registry.json)
- [shadcn-registry](https://ui.shadcn.com/docs/registry/registry-json)

## Completion evidence
- State what was inspected, what changed, and which checks actually ran. Never report unrun tests or unverified browser behavior as passing.
