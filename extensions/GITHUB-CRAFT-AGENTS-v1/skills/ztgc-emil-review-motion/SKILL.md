---
name: ztgc-emil-review-motion
description: "Focused Perfect_AI Emil Design Engineering specialist: review motion"
---

# Review Motion

## Responsibility
Read-only review with concrete frame/time observations; rate clarity, interruption, reversibility, easing, reduced motion and perceived responsiveness.

## Entry conditions
- Load the parent `$ztgc-emil-design-engineering` only when Emil Design Engineering is relevant to this task.
- Collect concrete routes/files, user objective, dependency versions and current behavior.
- Do not rename or delete old skills or overwrite existing project content.

## Method
1. Observe interaction frequency, input device, viewport and product tone before adding motion.
2. Use transform and opacity where possible; reserve layout animation for state changes that require it.
3. Choose durations based on distance, repetition and context; exiting frequently should rarely be slower than entering.
4. Test mid-flight reversals, rapid repeated gestures, resize and unmount cleanup.
5. Inspect at slow motion and with reduced motion; keep focus and screen reader announcements usable.

## Specialized verification
- [ ] No overlapping ownership of transform between GSAP/Motion/CSS
- [ ] No unbounded spring oscillation or continuous decorative animation in reduced motion
- [ ] Gesture response < perceived latency budget and no jump on reversal

## Tool usage and artifacts
- Tools: None for authored guidance; optional Motion/GSAP project dependencies.
- Evidence: baseline, exact reproduction command, before/after details, screenshot or console logs when relevant.
- Minimum outcome: separate PASS/FAIL/NOT_RUN records, with a description of any unavailable runtime or device.
- Reference: `https://github.com/emilkowalski/skills/blob/main/skills/emil-design-eng/SKILL.md`. This locally authored guidance is not a copied GitHub Skill.
