# rive-state-machine-bridge — independent recipe

**Domain:** Advanced Interaction System  
**Why it exists:** Bridge semantic HTML events to exported Rive state input names.

## Configuration and boundaries
Inputs: pointer/keyboard gestures and interaction/state specification, touch-action, inertial limits.

## Step-by-step execution
1. State observable success behavior in one sentence: Bridge semantic HTML events to exported Rive state input names.
2. Inspect user-owned source and choose target platform and installed versions. Do not guess API compatibility.
3. Implement the exact behavior in an isolated named module, keeping a testable input/output contract.
4. Build a fallback without external renderers or pointer-only interaction.
5. Connect semantic state changes to engine state, not vice versa. One owner per property.
6. Add acceptance tests for error, resize, rollback and RTL/reduced-motion.
7. Compare baseline and modified screenshot/trace where visual; attach actual evidence when run.

## Execution pattern
Implementation: pointer capture + cancellation, spring integration with bounded dt, accessible semantic buttons and keyboard equivalent; one animation owner.

## Required acceptance
1. Keyboard users complete the same interaction.
2. Pointercancel/Escape/blur reset state without stuck drag.
3. Effects do not move or hide semantic hit target.

## Example baseline (adapt to this topic)
```js
const target=document.querySelector('[data-draggable]'); let active=-1;
target?.addEventListener('pointerdown',e=>{ if(e.button!==0)return;active=e.pointerId;target.setPointerCapture(active) });
target?.addEventListener('pointercancel',()=>{active=-1});
target?.addEventListener('lostpointercapture',()=>{active=-1});
// Provide keyboard Arrow/Home/End adjustments and keep original semantic control focusable.
```

## Risk checklist
- No invented asset licenses, untested library version, unexplained loss of keyboard behavior.
- No extra network services or MCP requirement.
- Never silently treat an example snippet as a fully built standalone product.
- Log execution status as PASS / FAIL / NOT RUN separately.

## Source references
- [rive](https://rive.app/docs/runtimes/react/react)
- [wcag](https://www.w3.org/TR/WCAG22/)
- [animejs](https://animejs.com/documentation/)
