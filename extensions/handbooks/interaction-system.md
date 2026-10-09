# Advanced Interaction System — production engineering reference

Use one interaction state machine per complex component, semantic triggers and an explicit gesture cancellation path. Integrate physics-like animation only as presentation. Model pointer, touch, keyboard, focus and screen-reader behavior consistently. Avoid gestures that trap scrolling, motion that follows cursor on touch devices or hidden actions.

## Architecture

Input contract → deterministic evidence collection → decision/implementation plan → reference implementation → device and accessibility fallback → test gates → signed-off report.

## Detailed implementation index

### 1. pointer-state-machine

**Mechanism:** Model idle/hover/press/drag/release/cancel and pointer capture.

**Failure pressure:** Do not rely on mouse events alone.

**Execution:** Draw state transition table including pointercancel; add semantic control and gesture alternative.

**Acceptance:** Test pointer coarse/fine, keyboard activation/cancel and touch page scrolling.

### 2. drag-drop-accessible

**Mechanism:** Offer keyboard pick/reorder and announcements alongside pointer drag.

**Failure pressure:** No inaccessible sortable list.

**Execution:** Draw state transition table including pointercancel; add semantic control and gesture alternative.

**Acceptance:** Test pointer coarse/fine, keyboard activation/cancel and touch page scrolling.

### 3. gesture-physics

**Mechanism:** Add bounded inertia with spring/damping and reduced-motion override.

**Failure pressure:** No unpredictable fling on mobile.

**Execution:** Draw state transition table including pointercancel; add semantic control and gesture alternative.

**Acceptance:** Test pointer coarse/fine, keyboard activation/cancel and touch page scrolling.

### 4. magnetic-button

**Mechanism:** Calculate local pointer offset with bounded transform and reset on leave.

**Failure pressure:** Disable fine pointer magnetism for coarse touch.

**Execution:** Draw state transition table including pointercancel; add semantic control and gesture alternative.

**Acceptance:** Test pointer coarse/fine, keyboard activation/cancel and touch page scrolling.

### 5. cursor-follow

**Mechanism:** Use transform/rAF and pointer fine media query with fallback.

**Failure pressure:** Never hide real cursor on touch.

**Execution:** Draw state transition table including pointercancel; add semantic control and gesture alternative.

**Acceptance:** Test pointer coarse/fine, keyboard activation/cancel and touch page scrolling.

### 6. hover-3d

**Mechanism:** Use raycasting and cheap hover state on meshes with focusable DOM analog.

**Failure pressure:** No 3D-only product interaction.

**Execution:** Draw state transition table including pointercancel; add semantic control and gesture alternative.

**Acceptance:** Test pointer coarse/fine, keyboard activation/cancel and touch page scrolling.

### 7. canvas-hit-targets

**Mechanism:** Map physical pointer coordinates to DPR-scaled canvas hits.

**Failure pressure:** Prevent mistaken mobile taps.

**Execution:** Draw state transition table including pointercancel; add semantic control and gesture alternative.

**Acceptance:** Test pointer coarse/fine, keyboard activation/cancel and touch page scrolling.

### 8. velocity-scroll-effects

**Mechanism:** Filter scroll velocity; decouple velocity from position; clamp displacement.

**Failure pressure:** Avoid motion sickness and reverse jitter.

**Execution:** Draw state transition table including pointercancel; add semantic control and gesture alternative.

**Acceptance:** Test pointer coarse/fine, keyboard activation/cancel and touch page scrolling.

### 9. interactive-state-animation

**Mechanism:** Drive visual response from durable application state rather than magic delays.

**Failure pressure:** No animation that changes business state.

**Execution:** Draw state transition table including pointercancel; add semantic control and gesture alternative.

**Acceptance:** Test pointer coarse/fine, keyboard activation/cancel and touch page scrolling.

### 10. touch-swipe-cancel

**Mechanism:** Use pan-x on carousel, release at edges and respect page scroll.

**Failure pressure:** No touch-action none on document.

**Execution:** Draw state transition table including pointercancel; add semantic control and gesture alternative.

**Acceptance:** Test pointer coarse/fine, keyboard activation/cancel and touch page scrolling.

### 11. feedback-haptics

**Mechanism:** Use optional navigator.vibrate only on eligible environments and user settings.

**Failure pressure:** Never depend on vibration as confirmation.

**Execution:** Draw state transition table including pointercancel; add semantic control and gesture alternative.

**Acceptance:** Test pointer coarse/fine, keyboard activation/cancel and touch page scrolling.

### 12. microinteractions

**Mechanism:** Use proportionate active/disabled/success/error states with clear language.

**Failure pressure:** Do not animate every click for 800ms.

**Execution:** Draw state transition table including pointercancel; add semantic control and gesture alternative.

**Acceptance:** Test pointer coarse/fine, keyboard activation/cancel and touch page scrolling.

## Gate checklist

- [ ] Inputs, constraints and assets have evidence.
- [ ] Implementation has a real code path, not a prompt-only promise.
- [ ] Minimal or static fallback preserves actual user task.
- [ ] Proper cleanup and reduced-motion when relevant.
- [ ] Persian RTL and English LTR components tested when language is supported.
- [ ] Version compatibility and license assumptions documented.
- [ ] Verified tests distinguished from suggestions.

## Codex handoff

Report actual files edited, references consulted, runtime version and selected skills. Preserve original user content; do not install MCP.
