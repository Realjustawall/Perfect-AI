---
name: ztx4-product-systems
description: "Deep implementation master for Complete Page & Product Systems with 22 targeted Codex skills, code, tests and no MCP. Additive to all existing Perfect_AI versions."
---

# Complete Page & Product Systems

Produce functioning multi-page product flows, not isolated decorative landing screenshots.

## Mandatory sequence
1. Select a product archetype and define information architecture and end-to-end journeys.
2. Build shared shell, navigation, states, tokens, content model and responsive behavior.
3. Implement auth/permission boundaries, form validation and async/loading/error/empty states where relevant.
4. Add at least two real user flows and navigation deep links, not inert cards or buttons.
5. Test mobile RTL/LTR, keyboard, accessibility, empty datasets and realistic copy.

## Skill routing
Choose only technique files needed for this project from `DEEP-IMPLEMENTATION-v2/references/product-systems.md`. Never indiscriminately load all 300+ skills into context.

## Runbook
Inputs: product page map, data model, permissions, journeys and error state requirements.

Implementation: build semantic shell plus complete forms/navigation/empty/loading/error; implement two distinct end-to-end journeys, links and responsive IA.

Tests: no dead controls, mobile-first flow, keyboard and RTL/LTR, empty data, valid errors, slow network and deep links.

## Acceptance gates
1. At least two functional end-to-end user journeys.
2. Every page includes realistic loading/error/empty state.
3. Keyboard/RTL/mobile deep links preserved.

## Runnable assets
`extensions/DEEP-IMPLEMENTATION-v2/examples` and `tools` (installed main package). See `RUNBOOK-FA.md`.

## Sources
- [wcag](https://www.w3.org/TR/WCAG22/)
- [tailwind](https://tailwindcss.com/docs/theme)
- [bootstrap](https://getbootstrap.com/docs/5.3/customize/color-modes/)
