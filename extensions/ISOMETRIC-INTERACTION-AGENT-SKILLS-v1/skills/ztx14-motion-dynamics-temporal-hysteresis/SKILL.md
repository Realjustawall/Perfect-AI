---
name: ztx14-motion-dynamics-temporal-hysteresis
description: Apply a focused implementation and verification workflow for temporal hysteresis for motion in Isometric, React, responsive motion, or interactive UI work.
---

# Temporal Hysteresis for Motion

## Activation
Use this skill when the task includes **temporal hysteresis for motion**, a related review, a bug report, or a regression test. Load the Isometric master skill first for site-specific installation and source conventions, then only other specialists that are directly relevant.

## Scope and implementation contract
Prevent state chatter around thresholds with separate enter and exit criteria that remain short and explainable.

Use one owner per animated property. Keep spring values bounded, handle retargeting and interruption, stop at a rest threshold, and make elapsed-time behavior stable across frame rates. Semantic state must not depend on animation completion.

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
Do not reset velocity on every pointer move or keep frames running after the scene settles.
- Avoid changing an unrelated theme, route, dependency, or interaction simply to make the local example easier.
- Do not claim success based solely on a source edit; distinguish code inspection, automated tests, and real-browser validation.

## References
- https://motion.dev/docs/react-use-spring
- https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame
