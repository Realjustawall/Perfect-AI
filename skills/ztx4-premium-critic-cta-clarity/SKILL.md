---
name: ztx4-premium-critic-cta-clarity
description: "Implement cta clarity for Premium Design Critic with concrete acceptance gates, responsive/RTL safety, and no MCP. Additive Perfect_AI extension."
---

# Premium Design Critic / cta-clarity

## Precise purpose
Check that primary action is obvious, correct and placed where user can act.

## First read
- `$perfect-ai-master` and `$ztx3-nexus-master` remain available; never overwrite or replace them.
- `../../extensions/DEEP-IMPLEMENTATION-v2/references/premium-critic.md` inside the full pack.
- Consult corresponding existing NEXUS handbook at `extensions/handbooks/premium-critic.md`.
- This is a new supplemental Skill, not a claim that third-party software is bundled.

## Input contract
Inputs: target brief, rendered screenshots/recordings, interaction QA and brand evidence.

## Implementation workflow for this technique
1. **Identify specific need:** Check that primary action is obvious, correct and placed where user can act.
2. **Baseline:** inspect existing code and record behavior and compatible dependency versions; keep old behavior unchanged.
3. **Build:** Implementation: score visual hierarchy, content credibility, distinctiveness, motion meaning, typography, color and mobile; propose ranked fix list backed by screenshots.
4. **Technique-specific output:** create a named source module, stylesheet, fixture and test targeting `cta-clarity` rather than a generic screenshot.
5. **Variations:** desktop / compact container / 320px mobile / Persian RTL / English LTR / reduced motion / blocked external assets.
6. **Measure:** log what runs with concrete outputs, fail gracefully when engine or browser support unavailable.
7. **No regressions:** do not delete, reformat or overwrite unrelated existing application code.

## Technique-specific verification
- Assert: Check that primary action is obvious, correct and placed where user can act.
- Tests: no fabricated evaluation evidence, before/after diff, functional/accessibility regression and independent mobile treatment.
- Each critique includes screenshot evidence and severity.; Rejected clichés explained relative to product brief.; Recommended redesign tested for regressions.

## Deliverables
`implementation-notes.md`, source implementation, relevant fallback source, test fixture, screenshots if browser-run, `verified-results.json` showing passed/failed/unrun.

## Source of truth
- [github-awesome](https://github.com/frankxai/awesome-design-agent-skills)
- [github-frontend](https://github.com/hueyexe/frontend-agent-skills)
- [playwright](https://playwright.dev/docs/test-snapshots)
