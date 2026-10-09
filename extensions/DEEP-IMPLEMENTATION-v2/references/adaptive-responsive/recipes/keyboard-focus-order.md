# keyboard-focus-order — independent recipe

**Domain:** Adaptive Responsive Engine 3.0  
**Why it exists:** Ensure DOM focus follows visual hierarchy across reordering and drawers.

## Configuration and boundaries
Inputs: component min content width, RTL/LTR strings, container dimensions, viewport and input modality.

## Step-by-step execution
1. State observable success behavior in one sentence: Ensure DOM focus follows visual hierarchy across reordering and drawers.
2. Inspect user-owned source and choose target platform and installed versions. Do not guess API compatibility.
3. Implement the exact behavior in an isolated named module, keeping a testable input/output contract.
4. Build a fallback without external renderers or pointer-only interaction.
5. Connect semantic state changes to engine state, not vice versa. One owner per property.
6. Add acceptance tests for error, resize, rollback and RTL/reduced-motion.
7. Compare baseline and modified screenshot/trace where visual; attach actual evidence when run.

## Execution pattern
Implementation: intrinsic layout first, then container queries; clamp typographic scale; logical CSS; safe-area/svh fallback; change 3D framing not just canvas width.

## Required acceptance
1. No horizontal scroll from 320 CSS px except purposely scrollable regions.
2. 400% zoom and 200% text remain usable and focusable.
3. RTL/LTR, touch, keyboard, reduced-motion and viewport changes retain task completion.

## Example baseline (adapt to this topic)
```css
.responsive-shell { inline-size: 100%; max-inline-size: 80rem; margin-inline: auto; padding-inline: clamp(1rem, 4cqi, 4rem); }
.panel-container { container: component / inline-size; }
.panel-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 17rem), 1fr)); gap: clamp(.75rem, 2cqi, 1.5rem); }
@container component (inline-size < 34rem) { .panel-grid { grid-template-columns: minmax(0, 1fr); } }
main { min-inline-size: 0; }
@media (prefers-reduced-motion: reduce) { *,*::before,*::after { animation-duration: .01ms !important; scroll-behavior: auto !important; } }
```

## Risk checklist
- No invented asset licenses, untested library version, unexplained loss of keyboard behavior.
- No extra network services or MCP requirement.
- Never silently treat an example snippet as a fully built standalone product.
- Log execution status as PASS / FAIL / NOT RUN separately.

## Source references
- [mdn-containers](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment/Container_queries)
- [mdn-fold](https://developer.mozilla.org/en-US/docs/Web/API/Viewport_segments_API/Using)
- [wcag](https://www.w3.org/TR/WCAG22/)
