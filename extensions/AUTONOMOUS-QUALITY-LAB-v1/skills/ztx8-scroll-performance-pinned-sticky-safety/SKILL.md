---
name: ztx8-scroll-performance-pinned-sticky-safety
description: Implement and verify pinned sticky safety in scroll-performance for Perfect_AI Codex. Additive, brand-driven, mobile optimized.
---

# Pinned Sticky Safety — Scroll Performance

## Activation
Use when project request or site audit indicates **pinned sticky safety**. Load relevant previous Perfect_AI Skill(s) first. Do not replace any earlier Skill or overwrite user files.

## Concrete implementation contract
**Specific technical requirement:** Avoid stacking or clipping bugs from nested transform and overflow parents.
**Domain execution policy:** Single RAF, resize-safe layout measures, passive listeners, reverse exact state.
**Working resource:** `../.agents/ztx8-execution-resources/examples/threejs/scroll-camera-controller.js` once installed. The skill is standalone guidance, but external scripts are copied to `.agents/ztx8-execution-resources` by installer.

## Execution sequence
1. Read approved brand identity, project stack, lockfile, site type, breakpoints and available evidence. Record missing inputs explicitly.
2. Map requirements to existing components and find actual source file/selector; capture before-state screenshots or failing test if it exists.
3. Implement **pinned sticky safety** concretely: Avoid stacking or clipping bugs from nested transform and overflow parents. Avoid speculative redesign, unnecessary new dependencies or disabling existing effects.
4. Mobile: preserve primary animation while adapting performance at 320/390/768 CSS pixels, low-power GPU; support touch, RTL/LTR, keyboard and reduced motion.
5. Verify this feature at source and browser levels; capture a specific screenshot path and either measured values or reproducible interaction steps. Use `NOT_TESTED` if no compatible execution environment.
6. Run unit/build/browser regression gates and compare with baseline. If visual change is subjective, submit before/after screenshots for brand owner approval.
7. Report exactly: changed files, behavior implemented, tests run, measured metrics, regressions, known limitations and resources used.

## Acceptance gates
- At least one real site route or component demonstrates the behavior in runtime, not only written instructions.
- No regression of existing approved brand, keyboard navigation, responsive layout or motion preference.
- No hidden scroll/overflow defects or model/text collision at tested viewports.
- High-severity browser errors are fixed or explicitly marked unresolved.
- A reviewer can trace the change to the requirement and evidence; no fabricated success claims.

## Relevant additional materials
- `recipes/ztx8-scroll-performance-pinned-sticky-safety.md` alongside this extension; inspect for scenario-specific implementation notes.
- `references/SELF-CORRECTION-EXECUTION.md`, `references/MOBILE-3D-BUDGETS.md` and project source.
- Prior `$perfect-ai-master`, `$ztx3-nexus-master`, `$ztx4-deep-implementation-master`, `$ztx5-motion-brand-master` when installed.
