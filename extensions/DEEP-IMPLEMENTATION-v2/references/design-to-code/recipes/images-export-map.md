# images-export-map — independent recipe

**Domain:** Design-to-Code Pipeline (offline)  
**Why it exists:** Deduplicate exports and record source/license/size/alt semantics.

## Configuration and boundaries
Inputs: local Figma JSON or exported images/SVG, tokens and rights; no MCP.

## Step-by-step execution
1. State observable success behavior in one sentence: Deduplicate exports and record source/license/size/alt semantics.
2. Inspect user-owned source and choose target platform and installed versions. Do not guess API compatibility.
3. Implement the exact behavior in an isolated named module, keeping a testable input/output contract.
4. Build a fallback without external renderers or pointer-only interaction.
5. Connect semantic state changes to engine state, not vice versa. One owner per property.
6. Add acceptance tests for error, resize, rollback and RTL/reduced-motion.
7. Compare baseline and modified screenshot/trace where visual; attach actual evidence when run.

## Execution pattern
Implementation: normalize local layers, reconstruct auto layout as Flex/Grid, map semantics and tokens, generate TSX/CSS with responsive/RTL constraints.

## Required acceptance
1. No MCP required; only local files are read.
2. Exported code uses semantic layout and responds beyond design artboard size.
3. Sanitize imported SVG and verify licensing.

## Example baseline (adapt to this topic)
```js
// Figma export converter must ONLY read local JSON/SVG with explicit schema validation.
const node = JSON.parse(localJson);
if (!node || typeof node !== 'object' || !Array.isArray(node.children)) throw new Error('Unsupported export');
// Auto-layout HORIZONTAL -> display:flex; flex-direction:row; gap; padding.
// Auto-layout VERTICAL -> flex-direction:column; reverse neither text nor DOM for RTL.
```

## Risk checklist
- No invented asset licenses, untested library version, unexplained loss of keyboard behavior.
- No extra network services or MCP requirement.
- Never silently treat an example snippet as a fully built standalone product.
- Log execution status as PASS / FAIL / NOT RUN separately.

## Source references
- [tailwind](https://tailwindcss.com/docs/theme)
- [bootstrap](https://getbootstrap.com/docs/5.3/customize/color-modes/)
- [storybook](https://storybook.js.org/docs)
