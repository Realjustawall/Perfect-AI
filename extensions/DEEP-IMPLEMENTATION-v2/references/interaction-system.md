# Advanced Interaction System — deep implementation playbook

**Purpose:** Make rich gestures learnable, keyboard-equivalent, robust and conflict-free with animation.

This file is an original engineering manual and does not reprint proprietary site code. Use it in addition to, never instead of, the complete pre-existing TITAN PLUS/NEXUS material.

## Architecture and execution order
1. Define interaction states and transition diagram; each fancy effect must preserve the primary user action.
2. Use pointer events with capture and appropriate touch-action; avoid global hijacking.
3. Specify keyboard alternatives, focus indication and latency budgets.
4. Animate from input state through one renderer owner; clamp inertial or spring motion.
5. Test cancel, Esc, drag outside, multitouch, touch without hover and reduced motion.

## Inputs / design constraints
Inputs: pointer/keyboard gestures and interaction/state specification, touch-action, inertial limits.

## Preferred implementation approach
Implementation: pointer capture + cancellation, spring integration with bounded dt, accessible semantic buttons and keyboard equivalent; one animation owner.

## Representative source template
```js
const target=document.querySelector('[data-draggable]'); let active=-1;
target?.addEventListener('pointerdown',e=>{ if(e.button!==0)return;active=e.pointerId;target.setPointerCapture(active) });
target?.addEventListener('pointercancel',()=>{active=-1});
target?.addEventListener('lostpointercapture',()=>{active=-1});
// Provide keyboard Arrow/Home/End adjustments and keep original semantic control focusable.
```

## Cross-cutting quality gates
1. Keyboard users complete the same interaction.
2. Pointercancel/Escape/blur reset state without stuck drag.
3. Effects do not move or hide semantic hit target.

## Deep technique reference — all 19 features

### 01. `pointer-event-normalization`

**Output / operation:** Use pointerdown/move/up/cancel with capture and pointerId tracking.

**Implementation:** Implementation: pointer capture + cancellation, spring integration with bounded dt, accessible semantic buttons and keyboard equivalent; one animation owner.

**Proof:** Tests: pointercancel/Escape/blur, drag beyond bounds, touch no-hover, keyboard, reduced-motion and multi-pointer conflict.

[Dedicated recipe](./interaction-system/recipes/pointer-event-normalization.md) · Skill `$ztx4-interaction-system-pointer-event-normalization`
### 02. `drag-drop-keyboard`

**Output / operation:** Provide sortable dragging with keyboard pickup/drop/reorder equivalent.

**Implementation:** Implementation: pointer capture + cancellation, spring integration with bounded dt, accessible semantic buttons and keyboard equivalent; one animation owner.

**Proof:** Tests: pointercancel/Escape/blur, drag beyond bounds, touch no-hover, keyboard, reduced-motion and multi-pointer conflict.

[Dedicated recipe](./interaction-system/recipes/drag-drop-keyboard.md) · Skill `$ztx4-interaction-system-drag-drop-keyboard`
### 03. `gesture-velocity-inertia`

**Output / operation:** Estimate velocity from timestamps and apply friction with capped displacement.

**Implementation:** Implementation: pointer capture + cancellation, spring integration with bounded dt, accessible semantic buttons and keyboard equivalent; one animation owner.

**Proof:** Tests: pointercancel/Escape/blur, drag beyond bounds, touch no-hover, keyboard, reduced-motion and multi-pointer conflict.

[Dedicated recipe](./interaction-system/recipes/gesture-velocity-inertia.md) · Skill `$ztx4-interaction-system-gesture-velocity-inertia`
### 04. `spring-gesture-physics`

**Output / operation:** Integrate damped spring with bounded delta to prevent numerical blow-up.

**Implementation:** Implementation: pointer capture + cancellation, spring integration with bounded dt, accessible semantic buttons and keyboard equivalent; one animation owner.

**Proof:** Tests: pointercancel/Escape/blur, drag beyond bounds, touch no-hover, keyboard, reduced-motion and multi-pointer conflict.

[Dedicated recipe](./interaction-system/recipes/spring-gesture-physics.md) · Skill `$ztx4-interaction-system-spring-gesture-physics`
### 05. `magnetic-button`

**Output / operation:** Apply subtle pointer attraction only as decoration; keep semantic fixed hit target.

**Implementation:** Implementation: pointer capture + cancellation, spring integration with bounded dt, accessible semantic buttons and keyboard equivalent; one animation owner.

**Proof:** Tests: pointercancel/Escape/blur, drag beyond bounds, touch no-hover, keyboard, reduced-motion and multi-pointer conflict.

[Dedicated recipe](./interaction-system/recipes/magnetic-button.md) · Skill `$ztx4-interaction-system-magnetic-button`
### 06. `custom-cursor`

**Output / operation:** Enable only fine pointers and never hide focus/required UI.

**Implementation:** Implementation: pointer capture + cancellation, spring integration with bounded dt, accessible semantic buttons and keyboard equivalent; one animation owner.

**Proof:** Tests: pointercancel/Escape/blur, drag beyond bounds, touch no-hover, keyboard, reduced-motion and multi-pointer conflict.

[Dedicated recipe](./interaction-system/recipes/custom-cursor.md) · Skill `$ztx4-interaction-system-custom-cursor`
### 07. `hover-3d-tilt`

**Output / operation:** Map normalized pointer coordinates to shallow rotations and reset on blur.

**Implementation:** Implementation: pointer capture + cancellation, spring integration with bounded dt, accessible semantic buttons and keyboard equivalent; one animation owner.

**Proof:** Tests: pointercancel/Escape/blur, drag beyond bounds, touch no-hover, keyboard, reduced-motion and multi-pointer conflict.

[Dedicated recipe](./interaction-system/recipes/hover-3d-tilt.md) · Skill `$ztx4-interaction-system-hover-3d-tilt`
### 08. `canvas-hit-testing`

**Output / operation:** Use raycaster or ID buffer with clear hover/focus alternatives.

**Implementation:** Implementation: pointer capture + cancellation, spring integration with bounded dt, accessible semantic buttons and keyboard equivalent; one animation owner.

**Proof:** Tests: pointercancel/Escape/blur, drag beyond bounds, touch no-hover, keyboard, reduced-motion and multi-pointer conflict.

[Dedicated recipe](./interaction-system/recipes/canvas-hit-testing.md) · Skill `$ztx4-interaction-system-canvas-hit-testing`
### 09. `scroll-velocity-effects`

**Output / operation:** Low-pass filter scroll velocity and avoid nausea inducing high amplitude.

**Implementation:** Implementation: pointer capture + cancellation, spring integration with bounded dt, accessible semantic buttons and keyboard equivalent; one animation owner.

**Proof:** Tests: pointercancel/Escape/blur, drag beyond bounds, touch no-hover, keyboard, reduced-motion and multi-pointer conflict.

[Dedicated recipe](./interaction-system/recipes/scroll-velocity-effects.md) · Skill `$ztx4-interaction-system-scroll-velocity-effects`
### 10. `state-machine-ui`

**Output / operation:** Specify idle/hover/pressed/loading/success/failure transitions and one animation owner.

**Implementation:** Implementation: pointer capture + cancellation, spring integration with bounded dt, accessible semantic buttons and keyboard equivalent; one animation owner.

**Proof:** Tests: pointercancel/Escape/blur, drag beyond bounds, touch no-hover, keyboard, reduced-motion and multi-pointer conflict.

[Dedicated recipe](./interaction-system/recipes/state-machine-ui.md) · Skill `$ztx4-interaction-system-state-machine-ui`
### 11. `rive-state-machine-bridge`

**Output / operation:** Bridge semantic HTML events to exported Rive state input names.

**Implementation:** Implementation: pointer capture + cancellation, spring integration with bounded dt, accessible semantic buttons and keyboard equivalent; one animation owner.

**Proof:** Tests: pointercancel/Escape/blur, drag beyond bounds, touch no-hover, keyboard, reduced-motion and multi-pointer conflict.

[Dedicated recipe](./interaction-system/recipes/rive-state-machine-bridge.md) · Skill `$ztx4-interaction-system-rive-state-machine-bridge`
### 12. `pinch-zoom`

**Output / operation:** Support two-pointer pinch where relevant with min/max and wheel/keyboard controls.

**Implementation:** Implementation: pointer capture + cancellation, spring integration with bounded dt, accessible semantic buttons and keyboard equivalent; one animation owner.

**Proof:** Tests: pointercancel/Escape/blur, drag beyond bounds, touch no-hover, keyboard, reduced-motion and multi-pointer conflict.

[Dedicated recipe](./interaction-system/recipes/pinch-zoom.md) · Skill `$ztx4-interaction-system-pinch-zoom`
### 13. `long-press-touch`

**Output / operation:** Implement clear hold affordance and cancellation; avoid inaccessible hidden-only actions.

**Implementation:** Implementation: pointer capture + cancellation, spring integration with bounded dt, accessible semantic buttons and keyboard equivalent; one animation owner.

**Proof:** Tests: pointercancel/Escape/blur, drag beyond bounds, touch no-hover, keyboard, reduced-motion and multi-pointer conflict.

[Dedicated recipe](./interaction-system/recipes/long-press-touch.md) · Skill `$ztx4-interaction-system-long-press-touch`
### 14. `swipe-carousel`

**Output / operation:** Avoid horizontal page-scroll traps and show arrow alternatives.

**Implementation:** Implementation: pointer capture + cancellation, spring integration with bounded dt, accessible semantic buttons and keyboard equivalent; one animation owner.

**Proof:** Tests: pointercancel/Escape/blur, drag beyond bounds, touch no-hover, keyboard, reduced-motion and multi-pointer conflict.

[Dedicated recipe](./interaction-system/recipes/swipe-carousel.md) · Skill `$ztx4-interaction-system-swipe-carousel`
### 15. `gesture-conflict-arbitration`

**Output / operation:** Resolve nested scroll, drag and zoom ownership with touch-action policy.

**Implementation:** Implementation: pointer capture + cancellation, spring integration with bounded dt, accessible semantic buttons and keyboard equivalent; one animation owner.

**Proof:** Tests: pointercancel/Escape/blur, drag beyond bounds, touch no-hover, keyboard, reduced-motion and multi-pointer conflict.

[Dedicated recipe](./interaction-system/recipes/gesture-conflict-arbitration.md) · Skill `$ztx4-interaction-system-gesture-conflict-arbitration`
### 16. `pointer-capture-cleanup`

**Output / operation:** Release capture on cancellation/unmount and reset stuck state.

**Implementation:** Implementation: pointer capture + cancellation, spring integration with bounded dt, accessible semantic buttons and keyboard equivalent; one animation owner.

**Proof:** Tests: pointercancel/Escape/blur, drag beyond bounds, touch no-hover, keyboard, reduced-motion and multi-pointer conflict.

[Dedicated recipe](./interaction-system/recipes/pointer-capture-cleanup.md) · Skill `$ztx4-interaction-system-pointer-capture-cleanup`
### 17. `haptic-and-sound-optional`

**Output / operation:** Use optional feedback with user gesture and preference; do not autoplay audio.

**Implementation:** Implementation: pointer capture + cancellation, spring integration with bounded dt, accessible semantic buttons and keyboard equivalent; one animation owner.

**Proof:** Tests: pointercancel/Escape/blur, drag beyond bounds, touch no-hover, keyboard, reduced-motion and multi-pointer conflict.

[Dedicated recipe](./interaction-system/recipes/haptic-and-sound-optional.md) · Skill `$ztx4-interaction-system-haptic-and-sound-optional`
### 18. `input-latency-budget`

**Output / operation:** Keep interaction handler work low and defer nonessential computation.

**Implementation:** Implementation: pointer capture + cancellation, spring integration with bounded dt, accessible semantic buttons and keyboard equivalent; one animation owner.

**Proof:** Tests: pointercancel/Escape/blur, drag beyond bounds, touch no-hover, keyboard, reduced-motion and multi-pointer conflict.

[Dedicated recipe](./interaction-system/recipes/input-latency-budget.md) · Skill `$ztx4-interaction-system-input-latency-budget`
### 19. `reduced-motion-interactions`

**Output / operation:** Preserve affordance and success feedback without spatial motion.

**Implementation:** Implementation: pointer capture + cancellation, spring integration with bounded dt, accessible semantic buttons and keyboard equivalent; one animation owner.

**Proof:** Tests: pointercancel/Escape/blur, drag beyond bounds, touch no-hover, keyboard, reduced-motion and multi-pointer conflict.

[Dedicated recipe](./interaction-system/recipes/reduced-motion-interactions.md) · Skill `$ztx4-interaction-system-reduced-motion-interactions`


## Honesty about execution
- The source templates in this pack illustrate the mechanisms. A validated install/build of an optional third-party package is required before claiming its integration works.
- Re-check current API versions in the lockfile and official references.
- Do not claim real GPU frame time, pixel-perfect reconstruction, or site ownership without data.

## Official / maintained references
- [rive](https://rive.app/docs/runtimes/react/react)
- [wcag](https://www.w3.org/TR/WCAG22/)
- [animejs](https://animejs.com/documentation/)
