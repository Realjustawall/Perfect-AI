# ssim-and-perceptual-diff — independent recipe

**Domain:** Visual Reverse Engineering  
**Why it exists:** Combine pixel RMSE/SSIM with structured layout checks; avoid scoring on one metric.

## Configuration and boundaries
Inputs: user-supplied or permitted reference, screenshots/recordings, viewport states and asset rights.

## Step-by-step execution
1. State observable success behavior in one sentence: Combine pixel RMSE/SSIM with structured layout checks; avoid scoring on one metric.
2. Inspect user-owned source and choose target platform and installed versions. Do not guess API compatibility.
3. Implement the exact behavior in an isolated named module, keeping a testable input/output contract.
4. Build a fallback without external renderers or pointer-only interaction.
5. Connect semantic state changes to engine state, not vice versa. One owner per property.
6. Add acceptance tests for error, resize, rollback and RTL/reduced-motion.
7. Compare baseline and modified screenshot/trace where visual; attach actual evidence when run.

## Execution pattern
Implementation: measure layout, sample scroll/time states, document observed vs inferred, build independent semantic DOM, perform deterministic screenshot diff.

## Required acceptance
1. Reference evidence logged by viewport/interaction state.
2. Inferred unknown geometry/code called out rather than claimed exact.
3. Screenshot comparisons reproducible under same font/viewport/time.

## Example baseline (adapt to this topic)
```js
// Collect layout evidence only on pages you may inspect.
const evidence = [...document.querySelectorAll('header, main, section, h1, button')].map(el=>{
 const rect=el.getBoundingClientRect();const css=getComputedStyle(el);
 return {tag:el.tagName, box:{x:rect.x,y:rect.y,w:rect.width,h:rect.height},font:css.fontFamily,color:css.color};
});
```

## Risk checklist
- No invented asset licenses, untested library version, unexplained loss of keyboard behavior.
- No extra network services or MCP requirement.
- Never silently treat an example snippet as a fully built standalone product.
- Log execution status as PASS / FAIL / NOT RUN separately.

## Source references
- [playwright](https://playwright.dev/docs/test-snapshots)
- [mdn-containers](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment/Container_queries)
- [wcag](https://www.w3.org/TR/WCAG22/)
