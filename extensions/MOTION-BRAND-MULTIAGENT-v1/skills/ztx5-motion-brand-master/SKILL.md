---
name: ztx5-motion-brand-master
description: Mandatory perfect-ai motion and branding skill for every user interface task. Guarantees non-empty default text motion, correct scroll/pointer behavior, Three.js placement, language typography and independent brand-aware design review.
---
# Perfect_AI MOTION+BRAND v1 Master
Use this master alongside `$perfect-ai-master`, `$ztx3-nexus-master` and `$ztx4-deep-implementation-master`. It **adds** to them.

## Minimum output contract (always do these on a real frontend task)
1. Detect exact framework and installed versions, do not assume; load only matching recipes.
2. **Default text motion**: headings and meaningful labels must have restrained usable entrance/reveal effects by default. Install the provided `default-text-motion.js` or equivalent. Persian uses word reveal. Do not hide content before JS; honor reduced motion.
3. **Scroll**: audit scroll-linked animation ownership, pin geometry, reversal, ResizeObserver, fonts-ready refresh, mobile and direction changes.
4. **Pointer**: use local pointer coordinates, frame-throttled smoothing and keyboard/touch parity. Check mouse and scroll transforms do not compete.
5. **Three placement**: measure full bounds, normalize pivot/scale, fit camera with both FOVs and screen-anchor; validate projected model bounds at 320/390/768/1440.
6. **Language fonts**: read brand typography first; choose correct language fonts from `FONT-ATLAS.json`; load fonts and test computed style in fa and en.
7. **Brand intake**: read mandatory `brand-identity.json`; do NOT invent a missing brand. For projects without a final brand, build only labeled draft proposals until approval.
8. **Review**: use four independent roles (critic, advocate, brand identity and usability) and one arbiter. Parallel readers must never overwrite files. Fix only after arbitrated tasks are approved.
9. Preserve all previous functionality and log new files/overwrites.
10. Run `scripts/audit_site.py` or Playwright tests, run the agent orchestrator with `--dry-run` or Codex CLI, and report PASS/FAIL/NOT_TESTED truthfully.

## Reference map
- `references/TEXT-ENGINEERING.md` default animated headline CSS+Anime.js code
- `references/SCROLL-ENGINEERING.md` ScrollTrigger, Motion, onScroll and runtime measures
- `references/POINTER-ENGINEERING.md` pointer smoothing and DOM/r3f transforms
- `references/3D-ENGINEERING.md` camera and model world-space placement
- `references/FONTS-ENGINEERING.md`, `FONT-ATLAS.json` 2-language font choices and loading
- `references/MULTIAGENT-ENGINEERING.md` reviewer and adjudicator workflow
- `scripts/run_review.py` real read-only Codex CLI multi-process reviewer, or offline prompt generation with `--dry-run`
- `scripts/select_new_skills.py` task-to-skills router
- `examples/` standalone CSS/JS/React examples

Read the add-on `README-FA.md` and `INSTALL-FA.md` before install. In installed form supplementary materials live under `.agents/ztx5-resources/` (two levels up from this SKILL.md).
