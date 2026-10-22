---
name: ztx14-motion-pointer-capture-drag
description: Apply a focused implementation and verification workflow for pointer capture drag in Isometric, React, responsive motion, or interactive UI work.
---

# Pointer Capture Drag

## Activation
Use this skill when the task includes **pointer capture drag**, a related review, a bug report, or a regression test. Load the Isometric master skill first for site-specific installation and source conventions, then only other specialists that are directly relevant.

## Scope and implementation contract
Use pointer capture for drag interactions, then handle pointerup, pointercancel, lost capture, and cleanup.

Use Pointer Events when appropriate, derive coordinates from current element bounds, coalesce high-frequency input, and keep animation ownership separate from semantic component state. Support pointercancel, focus, touch, and reduced motion; do not make essential meaning mouse-only.

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
Do not run layout reads per frame, attach competing per-object loops, or let hover be the only way to access information.
- Avoid changing an unrelated theme, route, dependency, or interaction simply to make the local example easier.
- Do not claim success based solely on a source edit; distinguish code inspection, automated tests, and real-browser validation.

## References
- https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events
- https://developer.mozilla.org/en-US/docs/Web/API/Element/pointermove_event
- https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/getCoalescedEvents
- https://motion.dev/docs/react-use-spring
