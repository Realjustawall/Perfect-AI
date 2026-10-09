---
name: ztx4-component-system
description: "Deep implementation master for Component Architecture & Design System with 20 targeted Codex skills, code, tests and no MCP. Additive to all existing Perfect_AI versions."
---

# Component Architecture & Design System

Produce reusable, accessible, testable components with explicit contracts across headless/UI frameworks.

## Mandatory sequence
1. Define primitives/tokens and functional component requirements before selecting a library.
2. Choose one interaction implementation per component; avoid nesting competing modal/popover stacks.
3. Specify props, controlled/uncontrolled state, variants, focus handling, loading/error/empty and localization.
4. Use Storybook stories to enumerate states, including RTL and narrow container.
5. Run keyboard, screen-reader semantics, visual regression and package-size checks.

## Skill routing
Choose only technique files needed for this project from `DEEP-IMPLEMENTATION-v2/references/component-system.md`. Never indiscriminately load all 300+ skills into context.

## Runbook
Inputs: props, interaction state diagram, design tokens, headless library selection and target languages.

Implementation: type component contract, semantic DOM, controlled state, focus lifecycle, variants, empty/error/loading success; bind framework adapter to same behavior.

Tests: Storybook story matrix, axe/manual keyboard, narrow container, RTL, focus return, route remount, no duplicate event owners.

## Acceptance gates
1. Semantic names, roles, values and focus are correct.
2. Every variant has loading/error/empty/disabled/keyboard where relevant.
3. Storybook stories cover RTL, themes and narrow containers.

## Runnable assets
`extensions/DEEP-IMPLEMENTATION-v2/examples` and `tools` (installed main package). See `RUNBOOK-FA.md`.

## Sources
- [storybook](https://storybook.js.org/docs)
- [radix](https://www.radix-ui.com/primitives/docs/overview/introduction)
- [ark](https://ark-ui.com/docs/overview/introduction)
- [shadcn](https://ui.shadcn.com/docs)
- [headless](https://headlessui.com/)
