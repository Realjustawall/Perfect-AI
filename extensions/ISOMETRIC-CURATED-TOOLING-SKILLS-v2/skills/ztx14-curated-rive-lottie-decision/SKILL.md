---
name: ztx14-curated-rive-lottie-decision
description: Select Rive state machines or Lottie playback for authored vector animation, without replacing procedural isometric geometry unnecessarily.
---

# Choose Rive or Lottie by interaction model

> Curated implementation skill. Inspect the installed project and actual component source before changing behavior. Do not assume latest APIs are installed. Preserve unrelated files and existing component ownership.

## Select Rive when
The asset needs interaction-driven states (for example, idle/hover/pressed/error/success), inputs, and a designer-authored state machine that the application drives.

## Select Lottie when
The requirement is primarily a pre-authored vector animation that should play, pause, loop, or seek, rather than geometry computed from pointer coordinates.

## Prefer CSS/Motion/Isometric when
The effect is simple UI transition, spring-driven DOM response, or procedural line geometry. Do not serialize dynamic geometry into an animation asset merely to avoid a few lines of code.

## Integration checklist
- Validate asset/runtime license, asset size, font/image dependencies, and SSR/client-only requirements.
- Load only when the feature needs it and pause when offscreen or hidden.
- Provide reduced-motion/static states, accessible text and a fallback if the runtime or asset fails.
- Keep canvas/player input from blocking keyboard or pointer actions on surrounding UI.
- Verify package names/APIs against current official docs and the project's installed runtime version.

## Primary references
- [rive-react](https://rive.app/docs/runtimes/react/react)
- [reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/prefers-reduced-motion)
- [isometric](https://isometric.buildlab.in/llms.txt)

## Completion evidence
- State what was inspected, what changed, and which checks actually ran. Never report unrun tests or unverified browser behavior as passing.
