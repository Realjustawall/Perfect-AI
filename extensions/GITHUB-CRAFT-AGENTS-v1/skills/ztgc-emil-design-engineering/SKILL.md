---
name: ztgc-emil-design-engineering
description: "Emil Design Engineering specialist for Perfect_AI; use for Apply precise motion and interaction craft, with stable interruption, predictable timing, and reduced-motion alternatives."
---

# Emil Design Engineering — Perfect_AI integration

This is a newly authored, offline skill that integrates the methods of [emilkowalski/skills](https://github.com/emilkowalski/skills/blob/main/skills/emil-design-eng/SKILL.md). It is **not** a verbatim mirror of the original upstream files. For optionally retrieving an official licensed source separately, see `tools/sync_upstreams.py`. Never silently replace previous Perfect_AI skills.

## Scope and result
Apply precise motion and interaction craft, with stable interruption, predictable timing, and reduced-motion alternatives.

## Actual procedure
1. Observe interaction frequency, input device, viewport and product tone before adding motion.
2. Use transform and opacity where possible; reserve layout animation for state changes that require it.
3. Choose durations based on distance, repetition and context; exiting frequently should rarely be slower than entering.
4. Test mid-flight reversals, rapid repeated gestures, resize and unmount cleanup.
5. Inspect at slow motion and with reduced motion; keep focus and screen reader announcements usable.

## Acceptance gates
- [ ] No overlapping ownership of transform between GSAP/Motion/CSS
- [ ] No unbounded spring oscillation or continuous decorative animation in reduced motion
- [ ] Gesture response < perceived latency budget and no jump on reversal

## Terminal workflow (verify commands on installed version)
```powershell
npm run dev  # visually verify on destination project
npx playwright test  # when project has appropriate tests
```

## Licensing, external tools and provenance
- Upstream: https://github.com/emilkowalski/skills
- Upstream source SHA: `62ce902af8dd32c590ea7203e9ab2edb1d6ef81a` (the inspected main skill, not the new original work).
- License noted at inspection: **MIT**.
- Dependencies: None for authored guidance; optional Motion/GSAP project dependencies.
- No MCP is needed or used. External npm tools are not contained in this ZIP and require separate installation and their own license acceptance.

## Interoperation with existing Perfect_AI
- Route only this skill plus a few genuinely relevant pre-existing skills; do not indiscriminately import thousands.
- Preserve user edits and established design tokens.
- Inspect source and tests before applying a code change.
- Require screenshots or test evidence before marking visual output verified.
- Write a final report separating PASS, FAIL and NOT_RUN, including commands, URLs and paths.

## Specialized skills
- `ztgc-emil-review-motion` — Read-only review with concrete frame/time observations; rate clarity, interruption, reversibility, easing, reduced motion and perceived responsiveness.
- `ztgc-emil-improve-motion` — Sequence changes by severity: correctness, performance, accessibility, then craft; one renderer owns each animated property.
- `ztgc-emil-mobile-motion-native` — Make pressed state, scroll inertia, touch target and kinetic feedback feel native; test Android 60/90/120 Hz and low-memory fallbacks.
