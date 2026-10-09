# DTCG Design Tokens Standard Engine — Technical production playbook

## Purpose
Validate typed DTCG tokens and aliases; produce consistent CSS Tailwind and Bootstrap compatible custom properties.

## Architecture, invariants and algorithm
**DTCG 2025.10**: values must have explicit `$type` or inheritable type, and `$value` of the type's correct shape (e.g. sRGB object). Aliases `{path.to.token}` should be resolved with cycle detection and type safety. Preserve `$extensions`/unknown fields in the source file; the sample CSS exporter intentionally implements a subset. Generate semantic tokens (canvas, surface, text, border, positive, danger, focus), NOT arbitrary raw accent overwrites. In Tailwind v4 map CSS custom properties through `@theme`; in Bootstrap 5.3 use documented CSS custom properties/Sass maps as appropriate. Validate actual contrast on components across dark/light, RTL, hover/focus/disabled and reduced motion. Fonts must honor license and offline availability.

## Required end-to-end procedure
1. Capture approved visual identity as tokens with `$type` and `$value`.
2. Validate primitive type, dimensions and color shape before building.
3. Resolve aliases with cycle and missing-reference detection.
4. Emit CSS custom properties, including correct sRGB components, and map to framework tokens.
5. Test dark/light and RTL as semantic mappings; preserve unknown extensions in source.

## Negative tests and fallback states
- Missing dependency or unsupported browser: report `unverified`, preserve the approved page and offer a nonblank fallback.
- Invalid input and incomplete brand brief: report exact failing constraint rather than silently choosing unrelated colors/layout.
- Reduced motion, keyboard-only, Persian RTL and English LTR: test individually with screenshots and DOM assertions.
- Rendering errors and low GPU budget: degrade aesthetics before removing essential content.
- Repeated same input: deterministic output; document acceptable GPU raster differences.

## Acceptance gates
- Cycles/missing aliases fail.
- Design Tokens CG Format (2025.10) types respected.
- Output stable and safe for CSS generation.
- Token consumers match across themes.

## Operational evidence
Log environment, installed package versions, exact commands, JSON report, paths to generated screenshots/traces, failures, and unresolved items. Keep artifacts and code changes separate. **Do not** call a template success a browser-tested application.

## Official sources
- https://www.w3.org/community/reports/design-tokens/CG-FINAL-format-20251028/
