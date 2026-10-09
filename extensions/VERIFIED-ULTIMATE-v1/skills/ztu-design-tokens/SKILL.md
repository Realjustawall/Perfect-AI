---
name: ztu-design-tokens
description: "Validate typed DTCG tokens and aliases; produce consistent CSS Tailwind and Bootstrap compatible custom properties."
---
# DTCG Design Tokens Standard Engine — Perfect_AI VERIFIED ULTIMATE

## Mission / ماموریت
Validate typed DTCG tokens and aliases; produce consistent CSS Tailwind and Bootstrap compatible custom properties.

## When to invoke
Any brand-driven or bilingual multi-framework website.

## Exact workflow
1. Capture approved visual identity as tokens with `$type` and `$value`.
2. Validate primitive type, dimensions and color shape before building.
3. Resolve aliases with cycle and missing-reference detection.
4. Emit CSS custom properties, including correct sRGB components, and map to framework tokens.
5. Test dark/light and RTL as semantic mappings; preserve unknown extensions in source.

## Acceptance criteria
- Cycles/missing aliases fail.
- Design Tokens CG Format (2025.10) types respected.
- Output stable and safe for CSS generation.
- Token consumers match across themes.

## Evidence contract
Write a machine-readable report with `status` = `pass|fail|unverified`, measured values, runtime/browser/device, changed files, exact command, artifacts and rationale. **Never** claim hardware/browser success from unit tests alone. Preserve original project files unless user explicitly authorizes edits. Avoid MCP; use local CLI and files.

## Compatibility and precautions
Read the installed dependency versions and project conventions first; prefer official APIs. Respect reduced motion, keyboard navigation, privacy, Persian RTL and low-power devices. Do not let two animation engines own the same DOM property. Test fallback modes and undo changes when the same acceptance check regresses.

## Working files
- `../../references/design-tokens-implementation.md`
- `../../examples/design-tokens/README.md`

## Official references
- https://www.w3.org/community/reports/design-tokens/CG-FINAL-format-20251028/
