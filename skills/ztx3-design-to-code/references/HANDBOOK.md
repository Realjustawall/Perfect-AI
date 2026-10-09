# Design-to-Code Pipeline (offline) — production engineering reference

Import local Figma exports in SVG/PNG/JSON and user-supplied design tokens, not MCP. Map layers to semantic components, token values to CSS variables, autolayout to CSS Flex/Grid, and prototypes to a state/transition matrix. Export accessible React or vanilla implementations, compare screenshots and document uncertain mappings.

## Architecture

Input contract → deterministic evidence collection → decision/implementation plan → reference implementation → device and accessibility fallback → test gates → signed-off report.

## Detailed implementation index

### 1. figma-json-import

**Mechanism:** Read local exported JSON nodes and inspect Auto Layout, constraints and component instances.

**Failure pressure:** No assumption of private Figma API access.

**Execution:** Parse local design exports; map frame types into semantic primitives and tokens; generate only attributable assets.

**Acceptance:** Compare screenshots and inspect generated markup; confirm no missing state inference treated as fact.

### 2. svg-asset-normalize

**Mechanism:** Clean viewBox, paths and fill roles while keeping attribution and shape fidelity.

**Failure pressure:** Sanitize untrusted SVG.

**Execution:** Parse local design exports; map frame types into semantic primitives and tokens; generate only attributable assets.

**Acceptance:** Compare screenshots and inspect generated markup; confirm no missing state inference treated as fact.

### 3. token-extraction

**Mechanism:** Map semantic color and typography tokens with source provenance.

**Failure pressure:** Avoid hardcoding incidental sampled pixels.

**Execution:** Parse local design exports; map frame types into semantic primitives and tokens; generate only attributable assets.

**Acceptance:** Compare screenshots and inspect generated markup; confirm no missing state inference treated as fact.

### 4. autolayout-to-css

**Mechanism:** Convert gap/padding/alignment/wrap to CSS and container queries.

**Failure pressure:** Do not represent every frame as absolute positioning.

**Execution:** Parse local design exports; map frame types into semantic primitives and tokens; generate only attributable assets.

**Acceptance:** Compare screenshots and inspect generated markup; confirm no missing state inference treated as fact.

### 5. design-variants

**Mechanism:** Translate variants and modes to component props and state machine.

**Failure pressure:** No redundant copied markup per variant.

**Execution:** Parse local design exports; map frame types into semantic primitives and tokens; generate only attributable assets.

**Acceptance:** Compare screenshots and inspect generated markup; confirm no missing state inference treated as fact.

### 6. interaction-prototype-map

**Mechanism:** Convert click/hover/key events to audited UI transitions.

**Failure pressure:** Do not infer behavior missing from design.

**Execution:** Parse local design exports; map frame types into semantic primitives and tokens; generate only attributable assets.

**Acceptance:** Compare screenshots and inspect generated markup; confirm no missing state inference treated as fact.

### 7. asset-optimization

**Mechanism:** Use responsive raster variants, SVG for vectors and critical image priority.

**Failure pressure:** Avoid data URLs for large media.

**Execution:** Parse local design exports; map frame types into semantic primitives and tokens; generate only attributable assets.

**Acceptance:** Compare screenshots and inspect generated markup; confirm no missing state inference treated as fact.

### 8. code-component-generation

**Mechanism:** Generate typed props, semantic controls and unit tests.

**Failure pressure:** No code generation with unreachable buttons.

**Execution:** Parse local design exports; map frame types into semantic primitives and tokens; generate only attributable assets.

**Acceptance:** Compare screenshots and inspect generated markup; confirm no missing state inference treated as fact.

### 9. screenshot-fidelity

**Mechanism:** Compare captured design and render across devices; sort large diff first.

**Failure pressure:** Do not overfit one viewport.

**Execution:** Parse local design exports; map frame types into semantic primitives and tokens; generate only attributable assets.

**Acceptance:** Compare screenshots and inspect generated markup; confirm no missing state inference treated as fact.

### 10. handoff-report

**Mechanism:** Record token mappings, unknown states, assets and manual decisions.

**Failure pressure:** Explicitly label inferred interactions.

**Execution:** Parse local design exports; map frame types into semantic primitives and tokens; generate only attributable assets.

**Acceptance:** Compare screenshots and inspect generated markup; confirm no missing state inference treated as fact.

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
