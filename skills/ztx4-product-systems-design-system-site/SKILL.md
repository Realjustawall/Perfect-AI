---
name: ztx4-product-systems-design-system-site
description: "Implement design system site for Complete Page & Product Systems with concrete acceptance gates, responsive/RTL safety, and no MCP. Additive Perfect_AI extension."
---

# Complete Page & Product Systems / design-system-site

## Precise purpose
Component docs, live controls, tokens, accessibility notes and changelog.

## First read
- `$perfect-ai-master` and `$ztx3-nexus-master` remain available; never overwrite or replace them.
- `../../extensions/DEEP-IMPLEMENTATION-v2/references/product-systems.md` inside the full pack.
- Consult corresponding existing NEXUS handbook at `extensions/handbooks/product-systems.md`.
- This is a new supplemental Skill, not a claim that third-party software is bundled.

## Input contract
Inputs: product page map, data model, permissions, journeys and error state requirements.

## Implementation workflow for this technique
1. **Identify specific need:** Component docs, live controls, tokens, accessibility notes and changelog.
2. **Baseline:** inspect existing code and record behavior and compatible dependency versions; keep old behavior unchanged.
3. **Build:** Implementation: build semantic shell plus complete forms/navigation/empty/loading/error; implement two distinct end-to-end journeys, links and responsive IA.
4. **Technique-specific output:** create a named source module, stylesheet, fixture and test targeting `design-system-site` rather than a generic screenshot.
5. **Variations:** desktop / compact container / 320px mobile / Persian RTL / English LTR / reduced motion / blocked external assets.
6. **Measure:** log what runs with concrete outputs, fail gracefully when engine or browser support unavailable.
7. **No regressions:** do not delete, reformat or overwrite unrelated existing application code.

## Technique-specific verification
- Assert: Component docs, live controls, tokens, accessibility notes and changelog.
- Tests: no dead controls, mobile-first flow, keyboard and RTL/LTR, empty data, valid errors, slow network and deep links.
- At least two functional end-to-end user journeys.; Every page includes realistic loading/error/empty state.; Keyboard/RTL/mobile deep links preserved.

## Deliverables
`implementation-notes.md`, source implementation, relevant fallback source, test fixture, screenshots if browser-run, `verified-results.json` showing passed/failed/unrun.

## Source of truth
- [wcag](https://www.w3.org/TR/WCAG22/)
- [tailwind](https://tailwindcss.com/docs/theme)
- [bootstrap](https://getbootstrap.com/docs/5.3/customize/color-modes/)
