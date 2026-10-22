---
name: ztx14-best-motion-exit-presence
description: Use Motion presence patterns to animate conditional React content while keeping keys and state transitions correct.
---

# Animate enter/exit without leaving stale DOM or state

> Best-practice implementation skill. Inspect the real project, installed package versions, current component contract, and existing animation ownership before changing code. This skill adds guidance only; it does not install dependencies by itself.

## When to use
Panels, tooltips, menus, object details, modals, badges, and route-adjacent overlays whose exit should finish after state changes.

## Procedure
1. Give each rendered item a stable identity key; distinguish replacement from the same item’s internal state update.
2. Wrap conditional children in `AnimatePresence` when the exit animation must run after React removes the child from the render tree.
3. Define a short, coherent exit state and make sure it does not block interaction with the next active element.
4. Keep semantic visibility and focus ownership in React; animation completion should not be the only authority for whether an item is accessible.
5. Handle rapid close/reopen and replacement scenarios; test interrupted transitions and stale callbacks.
6. For server-rendered or initially present content, explicitly decide whether the first mount should animate.

## Avoid
- Do not use array index keys for reorderable or interactive objects.
- Do not leave invisible exiting elements keyboard-focusable or pointer-intercepting.
- Do not use `setTimeout` as a substitute for presence lifecycle events.

## Acceptance checks
- [ ] Rapid reopen and replacement have deterministic results.
- [ ] Exited content no longer traps focus or pointer input.
- [ ] Initial-motion behavior is intentional.

## Primary references
- https://motion.dev/docs/react-animate-presence
- https://motion.dev/docs/react

## Reporting requirement
State which files were inspected, what changed, and which checks actually ran. Do not claim a browser/device was verified unless it was tested.
