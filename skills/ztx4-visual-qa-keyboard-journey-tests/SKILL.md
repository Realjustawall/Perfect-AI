---
name: ztx4-visual-qa-keyboard-journey-tests
description: "Implement keyboard journey tests for Visual QA & Self-Correction with concrete acceptance gates, responsive/RTL safety, and no MCP. Additive Perfect_AI extension."
---

# Visual QA & Self-Correction / keyboard-journey-tests

## Precise purpose
Exercise Tab, Shift+Tab, Esc, Enter and arrow keys on composite controls.

## First read
- `$perfect-ai-master` and `$ztx3-nexus-master` remain available; never overwrite or replace them.
- `../../extensions/DEEP-IMPLEMENTATION-v2/references/visual-qa.md` inside the full pack.
- Consult corresponding existing NEXUS handbook at `extensions/handbooks/visual-qa.md`.
- This is a new supplemental Skill, not a claim that third-party software is bundled.

## Input contract
Inputs: page URL/fixtures, responsive matrix, snapshots, deterministic font/time and expected functional assertions.

## Implementation workflow for this technique
1. **Identify specific need:** Exercise Tab, Shift+Tab, Esc, Enter and arrow keys on composite controls.
2. **Baseline:** inspect existing code and record behavior and compatible dependency versions; keep old behavior unchanged.
3. **Build:** Implementation: Playwright screenshots and DOM checks, keyboard flows, console/network errors, pixel-diff triage and fix verification loop.
4. **Technique-specific output:** create a named source module, stylesheet, fixture and test targeting `keyboard-journey-tests` rather than a generic screenshot.
5. **Variations:** desktop / compact container / 320px mobile / Persian RTL / English LTR / reduced motion / blocked external assets.
6. **Measure:** log what runs with concrete outputs, fail gracefully when engine or browser support unavailable.
7. **No regressions:** do not delete, reformat or overwrite unrelated existing application code.

## Technique-specific verification
- Assert: Exercise Tab, Shift+Tab, Esc, Enter and arrow keys on composite controls.
- Tests: one failing regression intentionally detected, 8 viewports, reduced motion, RTL/LTR, JS errors, focus and no horizontal overflow.
- Both regression failures and successful controls are recorded with screenshots.; Test matrix includes 320/390/768/1440 and RTL/reduced motion.; Never describe skipped tests as passed.

## Deliverables
`implementation-notes.md`, source implementation, relevant fallback source, test fixture, screenshots if browser-run, `verified-results.json` showing passed/failed/unrun.

## Source of truth
- [playwright](https://playwright.dev/docs/test-snapshots)
- [wcag](https://www.w3.org/TR/WCAG22/)
