---
name: ztx14-isometric-tailwind-v4-tokens
description: Apply a focused implementation and verification workflow for tailwind css v4 integration in Isometric, React, responsive motion, or interactive UI work.
---

# Tailwind CSS v4 Integration

## Activation
Use this skill when the task includes **tailwind css v4 integration**, a related review, a bug report, or a regression test. Load the Isometric master skill first for site-specific installation and source conventions, then only other specialists that are directly relevant.

## Scope and implementation contract
Confirm Tailwind v4 is configured and that utilities and custom properties used by the component compile in production.

Keep the install additive. Check actual local React/Tailwind/shadcn versions, current components.json, path aliases, installed source, and lockfile before proposing a change. Prefer one relevant item over @isometric/all. Registry-installed code is editable local source, so review and test the installed implementation.

## Execution sequence
1. **Inspect evidence.** Identify the real component, event/state path, installed source, app conventions, and available test commands. Record uncertain assumptions instead of silently filling gaps.
2. **Define the behavior.** Write down the expected initial, active, interrupted, cancelled, and resting states for this specific task. Name the property or state owner before editing.
3. **Implement narrowly.** Apply the smallest safe change that achieves the focus above. Reuse local utilities, tokens, and existing engine behavior before adding a dependency. Preserve unrelated files and styles.
4. **Cover input variants.** Exercise pointer/mouse where applicable, touch or coarse pointer, keyboard/focus, and an equivalent non-hover path. Check reduced-motion behavior and both light/dark themes when relevant.
5. **Measure and verify.** Run the applicable test, type check, and production build. Capture a deterministic screenshot or repeatable interaction trace for visible behavior. If a browser/device is unavailable, mark that check `NOT_TESTED`.

## Acceptance gates
- The behavior is implemented in real source code, not merely described in prose.
- Target selection and visible state match after repeated, rapid, interrupted, and cancelled interactions.
- The responsive layout remains usable at 320, 390, 768, and 1280 CSS px or the project’s actual breakpoints.
- Reduced motion keeps the same information and task outcome without unnecessary continuous movement.
- No new console error, hydration mismatch, stale event listener, idle animation loop, or accidental layout shift is introduced.
- The report names changed files, commands actually run, evidence captured, unresolved issues, and any limitation.

## Failure patterns to avoid
Do not guess undocumented props, rewrite components.json wholesale, or install the whole registry as a first step.
- Avoid changing an unrelated theme, route, dependency, or interaction simply to make the local example easier.
- Do not claim success based solely on a source edit; distinguish code inspection, automated tests, and real-browser validation.

## References
- https://isometric.buildlab.in/llms.txt
- https://isometric.buildlab.in/r/registry.json
- https://github.com/Abhishek-Mallick/Isometric
- https://ui.shadcn.com/docs/registry/registry-json
- https://ui.shadcn.com/docs/registry/registry-item-json
