# Adaptive Responsive Engine 3.0 — production engineering reference

Begin with intrinsic component sizing: container queries, minmax(), clamp(), logical CSS, robust flex/grid sizing, and measured content. Test reflow and 400% zoom instead of device stereotypes. Adapt 3D framing, particles, post FX and interaction complexity to actual render budget, and offer complete HTML fallback.

## Architecture

Input contract → deterministic evidence collection → decision/implementation plan → reference implementation → device and accessibility fallback → test gates → signed-off report.

## Detailed implementation index

### 1. container-query-design

**Mechanism:** Use container-type inline-size and cqi units with scoped component container names.

**Failure pressure:** Handle old browsers with sensible intrinsic default.

**Execution:** Implement intrinsic layout, container-level rules and input modality handling; measure actual content and 3D fit at each breakpoint.

**Acceptance:** Test 320/360/390/768/1024/1440, 400% zoom, 600px height, touch, RTL and reduced motion.

### 2. intrinsic-grid

**Mechanism:** Use minmax(min(100%, var(--min)),1fr) and min-width:0 for overflow control.

**Failure pressure:** Validate at 320 CSS pixels.

**Execution:** Implement intrinsic layout, container-level rules and input modality handling; measure actual content and 3D fit at each breakpoint.

**Acceptance:** Test 320/360/390/768/1024/1440, 400% zoom, 600px height, touch, RTL and reduced motion.

### 3. foldable-segments

**Mechanism:** Detect viewport segment availability and safe occlusion; avoid assumptions about hinge.

**Failure pressure:** Do not show critical action under hinge.

**Execution:** Implement intrinsic layout, container-level rules and input modality handling; measure actual content and 3D fit at each breakpoint.

**Acceptance:** Test 320/360/390/768/1024/1440, 400% zoom, 600px height, touch, RTL and reduced motion.

### 4. ultrawide-composition

**Mechanism:** Cap text measure and content width while letting decorative canvas expand.

**Failure pressure:** Avoid 200-character lines.

**Execution:** Implement intrinsic layout, container-level rules and input modality handling; measure actual content and 3D fit at each breakpoint.

**Acceptance:** Test 320/360/390/768/1024/1440, 400% zoom, 600px height, touch, RTL and reduced motion.

### 5. portrait-landscape

**Mechanism:** Handle aspect-ratio changes; avoid orientation lock.

**Failure pressure:** Test short laptop window 1024x600.

**Execution:** Implement intrinsic layout, container-level rules and input modality handling; measure actual content and 3D fit at each breakpoint.

**Acceptance:** Test 320/360/390/768/1024/1440, 400% zoom, 600px height, touch, RTL and reduced motion.

### 6. zoom-reflow-400

**Mechanism:** Test 1280 CSS viewport at 400% zoom equivalent 320px and no 2D scrolling for body.

**Failure pressure:** Allow data tables to scroll independently.

**Execution:** Implement intrinsic layout, container-level rules and input modality handling; measure actual content and 3D fit at each breakpoint.

**Acceptance:** Test 320/360/390/768/1024/1440, 400% zoom, 600px height, touch, RTL and reduced motion.

### 7. variable-user-fonts

**Mechanism:** Support text zoom, large system fonts and line-height adaptation.

**Failure pressure:** Do not set hard pixel heights on text containers.

**Execution:** Implement intrinsic layout, container-level rules and input modality handling; measure actual content and 3D fit at each breakpoint.

**Acceptance:** Test 320/360/390/768/1024/1440, 400% zoom, 600px height, touch, RTL and reduced motion.

### 8. touch-gesture-input

**Mechanism:** Use pointer events, touch-action scoping, gesture thresholds and escape hatch.

**Failure pressure:** Never hijack vertical page scrolling.

**Execution:** Implement intrinsic layout, container-level rules and input modality handling; measure actual content and 3D fit at each breakpoint.

**Acceptance:** Test 320/360/390/768/1024/1440, 400% zoom, 600px height, touch, RTL and reduced motion.

### 9. keyboard-switch

**Mechanism:** Support keyboard, screen readers, mouse, touch and reduced motion.

**Failure pressure:** No gesture-only core flows.

**Execution:** Implement intrinsic layout, container-level rules and input modality handling; measure actual content and 3D fit at each breakpoint.

**Acceptance:** Test 320/360/390/768/1024/1440, 400% zoom, 600px height, touch, RTL and reduced motion.

### 10. rtl-ltr-bi-di

**Mechanism:** Use logical CSS, bdi isolation for numbers, direction-sensitive icon flip.

**Failure pressure:** Avoid mirrored brand marks.

**Execution:** Implement intrinsic layout, container-level rules and input modality handling; measure actual content and 3D fit at each breakpoint.

**Acceptance:** Test 320/360/390/768/1024/1440, 400% zoom, 600px height, touch, RTL and reduced motion.

### 11. reduced-data-power

**Mechanism:** Use saveData, reduced-motion, visibility and DPR adaptive quality.

**Failure pressure:** Keep content functional when motion disabled.

**Execution:** Implement intrinsic layout, container-level rules and input modality handling; measure actual content and 3D fit at each breakpoint.

**Acceptance:** Test 320/360/390/768/1024/1440, 400% zoom, 600px height, touch, RTL and reduced motion.

### 12. responsive-3d-framing

**Mechanism:** Compute object projected bounds and FOV for container aspect ratio.

**Failure pressure:** Prevent clipping at mobile narrow widths.

**Execution:** Implement intrinsic layout, container-level rules and input modality handling; measure actual content and 3D fit at each breakpoint.

**Acceptance:** Test 320/360/390/768/1024/1440, 400% zoom, 600px height, touch, RTL and reduced motion.

### 13. dynamic-viewport-safearea

**Mechanism:** Use svh/dvh, env(safe-area-inset-*) and keyboard-safe forms.

**Failure pressure:** Avoid fixed footer covering inputs.

**Execution:** Implement intrinsic layout, container-level rules and input modality handling; measure actual content and 3D fit at each breakpoint.

**Acceptance:** Test 320/360/390/768/1024/1440, 400% zoom, 600px height, touch, RTL and reduced motion.

### 14. responsive-nav

**Mechanism:** Implement mobile disclosure, escape close, focus management and scroll lock.

**Failure pressure:** Do not create inaccessible hover-only menus.

**Execution:** Implement intrinsic layout, container-level rules and input modality handling; measure actual content and 3D fit at each breakpoint.

**Acceptance:** Test 320/360/390/768/1024/1440, 400% zoom, 600px height, touch, RTL and reduced motion.

### 15. container-observer

**Mechanism:** Use ResizeObserver and schedule reads outside of writes to avoid loops.

**Failure pressure:** Do not set size in ResizeObserver synchronously.

**Execution:** Implement intrinsic layout, container-level rules and input modality handling; measure actual content and 3D fit at each breakpoint.

**Acceptance:** Test 320/360/390/768/1024/1440, 400% zoom, 600px height, touch, RTL and reduced motion.

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
