---
name: ztx4-component-system-version-upgrade-policy
description: "Implement version upgrade policy for Component Architecture & Design System with concrete acceptance gates, responsive/RTL safety, and no MCP. Additive Perfect_AI extension."
---

# Component Architecture & Design System / version-upgrade-policy

## Precise purpose
Audit dependency/changelog conflicts and avoid blind mass upgrades.

## First read
- `$perfect-ai-master` and `$ztx3-nexus-master` remain available; never overwrite or replace them.
- `../../extensions/DEEP-IMPLEMENTATION-v2/references/component-system.md` inside the full pack.
- Consult corresponding existing NEXUS handbook at `extensions/handbooks/component-system.md`.
- This is a new supplemental Skill, not a claim that third-party software is bundled.

## Input contract
Inputs: props, interaction state diagram, design tokens, headless library selection and target languages.

## Implementation workflow for this technique
1. **Identify specific need:** Audit dependency/changelog conflicts and avoid blind mass upgrades.
2. **Baseline:** inspect existing code and record behavior and compatible dependency versions; keep old behavior unchanged.
3. **Build:** Implementation: type component contract, semantic DOM, controlled state, focus lifecycle, variants, empty/error/loading success; bind framework adapter to same behavior.
4. **Technique-specific output:** create a named source module, stylesheet, fixture and test targeting `version-upgrade-policy` rather than a generic screenshot.
5. **Variations:** desktop / compact container / 320px mobile / Persian RTL / English LTR / reduced motion / blocked external assets.
6. **Measure:** log what runs with concrete outputs, fail gracefully when engine or browser support unavailable.
7. **No regressions:** do not delete, reformat or overwrite unrelated existing application code.

## Technique-specific verification
- Assert: Audit dependency/changelog conflicts and avoid blind mass upgrades.
- Tests: Storybook story matrix, axe/manual keyboard, narrow container, RTL, focus return, route remount, no duplicate event owners.
- Semantic names, roles, values and focus are correct.; Every variant has loading/error/empty/disabled/keyboard where relevant.; Storybook stories cover RTL, themes and narrow containers.

## Deliverables
`implementation-notes.md`, source implementation, relevant fallback source, test fixture, screenshots if browser-run, `verified-results.json` showing passed/failed/unrun.

## Source of truth
- [storybook](https://storybook.js.org/docs)
- [radix](https://www.radix-ui.com/primitives/docs/overview/introduction)
- [ark](https://ark-ui.com/docs/overview/introduction)
- [shadcn](https://ui.shadcn.com/docs)
- [headless](https://headlessui.com/)
