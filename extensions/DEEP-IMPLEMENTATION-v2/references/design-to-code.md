# Design-to-Code Pipeline (offline) — deep implementation playbook

**Purpose:** Convert permitted local Figma exports/reference assets to structured, accessible, maintainable UI without MCP.

This file is an original engineering manual and does not reprint proprietary site code. Use it in addition to, never instead of, the complete pre-existing TITAN PLUS/NEXUS material.

## Architecture and execution order
1. Require a local export, screenshot, token file or SVG with known rights and source.
2. Normalize layers, bounds, parent-child containment, auto-layout, token aliases and typography.
3. Derive semantic components and flex/grid constraints rather than absolute positioned pixel replica.
4. Generate framework-specific code with logical properties and available assets only.
5. Compare screenshots by viewport; validate interactions not represented in static files separately.

## Inputs / design constraints
Inputs: local Figma JSON or exported images/SVG, tokens and rights; no MCP.

## Preferred implementation approach
Implementation: normalize local layers, reconstruct auto layout as Flex/Grid, map semantics and tokens, generate TSX/CSS with responsive/RTL constraints.

## Representative source template
```js
// Figma export converter must ONLY read local JSON/SVG with explicit schema validation.
const node = JSON.parse(localJson);
if (!node || typeof node !== 'object' || !Array.isArray(node.children)) throw new Error('Unsupported export');
// Auto-layout HORIZONTAL -> display:flex; flex-direction:row; gap; padding.
// Auto-layout VERTICAL -> flex-direction:column; reverse neither text nor DOM for RTL.
```

## Cross-cutting quality gates
1. No MCP required; only local files are read.
2. Exported code uses semantic layout and responds beyond design artboard size.
3. Sanitize imported SVG and verify licensing.

## Deep technique reference — all 16 features

### 01. `figma-json-ingestion`

**Output / operation:** Parse locally exported Figma JSON with schema validation; never assume undocumented fields.

**Implementation:** Implementation: normalize local layers, reconstruct auto layout as Flex/Grid, map semantics and tokens, generate TSX/CSS with responsive/RTL constraints.

**Proof:** Tests: parse invalid exports safely, no executable unsafe SVG, no absolute-layout dependence, screenshot comparison and keyboard affordances.

[Dedicated recipe](./design-to-code/recipes/figma-json-ingestion.md) · Skill `$ztx4-design-to-code-figma-json-ingestion`
### 02. `figma-token-extraction`

**Output / operation:** Map fill/stroke/type/effect variables to stable semantic token names.

**Implementation:** Implementation: normalize local layers, reconstruct auto layout as Flex/Grid, map semantics and tokens, generate TSX/CSS with responsive/RTL constraints.

**Proof:** Tests: parse invalid exports safely, no executable unsafe SVG, no absolute-layout dependence, screenshot comparison and keyboard affordances.

[Dedicated recipe](./design-to-code/recipes/figma-token-extraction.md) · Skill `$ztx4-design-to-code-figma-token-extraction`
### 03. `auto-layout-to-css`

**Output / operation:** Convert horizontal/vertical stack and gap/padding constraints to flex/grid.

**Implementation:** Implementation: normalize local layers, reconstruct auto layout as Flex/Grid, map semantics and tokens, generate TSX/CSS with responsive/RTL constraints.

**Proof:** Tests: parse invalid exports safely, no executable unsafe SVG, no absolute-layout dependence, screenshot comparison and keyboard affordances.

[Dedicated recipe](./design-to-code/recipes/auto-layout-to-css.md) · Skill `$ztx4-design-to-code-auto-layout-to-css`
### 04. `constraints-to-responsive`

**Output / operation:** Replace fixed positions with minimum/intrinsic widths and container behavior.

**Implementation:** Implementation: normalize local layers, reconstruct auto layout as Flex/Grid, map semantics and tokens, generate TSX/CSS with responsive/RTL constraints.

**Proof:** Tests: parse invalid exports safely, no executable unsafe SVG, no absolute-layout dependence, screenshot comparison and keyboard affordances.

[Dedicated recipe](./design-to-code/recipes/constraints-to-responsive.md) · Skill `$ztx4-design-to-code-constraints-to-responsive`
### 05. `component-variants-from-design`

**Output / operation:** Generate variants and states from design components with safe defaults.

**Implementation:** Implementation: normalize local layers, reconstruct auto layout as Flex/Grid, map semantics and tokens, generate TSX/CSS with responsive/RTL constraints.

**Proof:** Tests: parse invalid exports safely, no executable unsafe SVG, no absolute-layout dependence, screenshot comparison and keyboard affordances.

[Dedicated recipe](./design-to-code/recipes/component-variants-from-design.md) · Skill `$ztx4-design-to-code-component-variants-from-design`
### 06. `svg-asset-cleanup`

**Output / operation:** Sanitize SVG, strip scripts/foreignObject where unsafe, preserve viewBox.

**Implementation:** Implementation: normalize local layers, reconstruct auto layout as Flex/Grid, map semantics and tokens, generate TSX/CSS with responsive/RTL constraints.

**Proof:** Tests: parse invalid exports safely, no executable unsafe SVG, no absolute-layout dependence, screenshot comparison and keyboard affordances.

[Dedicated recipe](./design-to-code/recipes/svg-asset-cleanup.md) · Skill `$ztx4-design-to-code-svg-asset-cleanup`
### 07. `images-export-map`

**Output / operation:** Deduplicate exports and record source/license/size/alt semantics.

**Implementation:** Implementation: normalize local layers, reconstruct auto layout as Flex/Grid, map semantics and tokens, generate TSX/CSS with responsive/RTL constraints.

**Proof:** Tests: parse invalid exports safely, no executable unsafe SVG, no absolute-layout dependence, screenshot comparison and keyboard affordances.

[Dedicated recipe](./design-to-code/recipes/images-export-map.md) · Skill `$ztx4-design-to-code-images-export-map`
### 08. `persian-font-metrics`

**Output / operation:** Map text styles with script-safe fallback, fluid line height and RTL.

**Implementation:** Implementation: normalize local layers, reconstruct auto layout as Flex/Grid, map semantics and tokens, generate TSX/CSS with responsive/RTL constraints.

**Proof:** Tests: parse invalid exports safely, no executable unsafe SVG, no absolute-layout dependence, screenshot comparison and keyboard affordances.

[Dedicated recipe](./design-to-code/recipes/persian-font-metrics.md) · Skill `$ztx4-design-to-code-persian-font-metrics`
### 09. `color-system-normalization`

**Output / operation:** Consolidate near-equal colors by intended role, not only distance.

**Implementation:** Implementation: normalize local layers, reconstruct auto layout as Flex/Grid, map semantics and tokens, generate TSX/CSS with responsive/RTL constraints.

**Proof:** Tests: parse invalid exports safely, no executable unsafe SVG, no absolute-layout dependence, screenshot comparison and keyboard affordances.

[Dedicated recipe](./design-to-code/recipes/color-system-normalization.md) · Skill `$ztx4-design-to-code-color-system-normalization`
### 10. `local-screenshot-geometry`

**Output / operation:** Infer columns/margins from provided screenshot while labeling guesses.

**Implementation:** Implementation: normalize local layers, reconstruct auto layout as Flex/Grid, map semantics and tokens, generate TSX/CSS with responsive/RTL constraints.

**Proof:** Tests: parse invalid exports safely, no executable unsafe SVG, no absolute-layout dependence, screenshot comparison and keyboard affordances.

[Dedicated recipe](./design-to-code/recipes/local-screenshot-geometry.md) · Skill `$ztx4-design-to-code-local-screenshot-geometry`
### 11. `figma-to-react-components`

**Output / operation:** Create semantic React composition and preserve focus/label relationships.

**Implementation:** Implementation: normalize local layers, reconstruct auto layout as Flex/Grid, map semantics and tokens, generate TSX/CSS with responsive/RTL constraints.

**Proof:** Tests: parse invalid exports safely, no executable unsafe SVG, no absolute-layout dependence, screenshot comparison and keyboard affordances.

[Dedicated recipe](./design-to-code/recipes/figma-to-react-components.md) · Skill `$ztx4-design-to-code-figma-to-react-components`
### 12. `figma-to-tailwind-v4`

**Output / operation:** Generate Tailwind v4 classes and @theme from local semantic tokens.

**Implementation:** Implementation: normalize local layers, reconstruct auto layout as Flex/Grid, map semantics and tokens, generate TSX/CSS with responsive/RTL constraints.

**Proof:** Tests: parse invalid exports safely, no executable unsafe SVG, no absolute-layout dependence, screenshot comparison and keyboard affordances.

[Dedicated recipe](./design-to-code/recipes/figma-to-tailwind-v4.md) · Skill `$ztx4-design-to-code-figma-to-tailwind-v4`
### 13. `figma-to-bootstrap-53`

**Output / operation:** Generate Bootstrap structure, CSS var bridges and RTL stylesheet plan.

**Implementation:** Implementation: normalize local layers, reconstruct auto layout as Flex/Grid, map semantics and tokens, generate TSX/CSS with responsive/RTL constraints.

**Proof:** Tests: parse invalid exports safely, no executable unsafe SVG, no absolute-layout dependence, screenshot comparison and keyboard affordances.

[Dedicated recipe](./design-to-code/recipes/figma-to-bootstrap-53.md) · Skill `$ztx4-design-to-code-figma-to-bootstrap-53`
### 14. `figma-to-vanilla-css`

**Output / operation:** Generate semantic HTML/CSS with progressive enhancement for simple sites.

**Implementation:** Implementation: normalize local layers, reconstruct auto layout as Flex/Grid, map semantics and tokens, generate TSX/CSS with responsive/RTL constraints.

**Proof:** Tests: parse invalid exports safely, no executable unsafe SVG, no absolute-layout dependence, screenshot comparison and keyboard affordances.

[Dedicated recipe](./design-to-code/recipes/figma-to-vanilla-css.md) · Skill `$ztx4-design-to-code-figma-to-vanilla-css`
### 15. `design-diff-roundtrip`

**Output / operation:** Capture implementation screenshot and record matched/mismatched regions.

**Implementation:** Implementation: normalize local layers, reconstruct auto layout as Flex/Grid, map semantics and tokens, generate TSX/CSS with responsive/RTL constraints.

**Proof:** Tests: parse invalid exports safely, no executable unsafe SVG, no absolute-layout dependence, screenshot comparison and keyboard affordances.

[Dedicated recipe](./design-to-code/recipes/design-diff-roundtrip.md) · Skill `$ztx4-design-to-code-design-diff-roundtrip`
### 16. `design-asset-license-check`

**Output / operation:** Verify user rights to exports before bundling; report unlicensed assets.

**Implementation:** Implementation: normalize local layers, reconstruct auto layout as Flex/Grid, map semantics and tokens, generate TSX/CSS with responsive/RTL constraints.

**Proof:** Tests: parse invalid exports safely, no executable unsafe SVG, no absolute-layout dependence, screenshot comparison and keyboard affordances.

[Dedicated recipe](./design-to-code/recipes/design-asset-license-check.md) · Skill `$ztx4-design-to-code-design-asset-license-check`


## Honesty about execution
- The source templates in this pack illustrate the mechanisms. A validated install/build of an optional third-party package is required before claiming its integration works.
- Re-check current API versions in the lockfile and official references.
- Do not claim real GPU frame time, pixel-perfect reconstruction, or site ownership without data.

## Official / maintained references
- [tailwind](https://tailwindcss.com/docs/theme)
- [bootstrap](https://getbootstrap.com/docs/5.3/customize/color-modes/)
- [storybook](https://storybook.js.org/docs)
