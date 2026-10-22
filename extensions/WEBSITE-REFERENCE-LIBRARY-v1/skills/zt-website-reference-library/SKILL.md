---
name: zt-website-reference-library
description: Search and selectively apply the isolated Perfect AI website design reference library (494 brand/style entries with design notes, CSS themes, design tokens and CSS variables). Use only when a task asks for website inspiration, brand/style comparisons, visual direction, or a specific reference pattern; do not load the full library or merge brands by default.
---

# Website Design Reference Library — on-demand skill

## Activation

Invoke this skill only when visual reference research materially helps, or the user asks for a sample/reference website, design inspiration, or style comparison. It is optional; it must not become a default dependency for ordinary implementation tasks.

## Where the library lives

Resolve the library relative to the current workspace:
1. Source checkout: `extensions/WEBSITE-REFERENCE-LIBRARY-v1/`.
2. Installed project assets: `.perfect-ai/extensions/WEBSITE-REFERENCE-LIBRARY-v1/`.

Search for the nearest existing path rather than copying the library into the user's app. If only the installed Skill exists and the assets are absent, explain that the extension assets must be installed with `-CopyExtensionAssets`; do not invent content.

## Search workflow

1. Search the catalog first, then inspect only 1–3 matches:
   - Source checkout: `python extensions/WEBSITE-REFERENCE-LIBRARY-v1/tools/find-website-reference.py "<keywords>" --deep`
   - Installed assets: `python .perfect-ai/extensions/WEBSITE-REFERENCE-LIBRARY-v1/tools/find-website-reference.py "<keywords>" --deep`
2. Read the selected entry's `DESIGN.md` first to understand intent, typography, composition, component treatment and responsive behavior.
3. Read that same entry's `tokens.json` and `variables.css` only if actual implementation requires color/typography/spacing values. Use `theme.css` only when the target uses a compatible CSS system and its integration has been reviewed.
4. Return to the target app's own component, token and responsive architecture before implementation. Do not dump reference files into the prompt or application.

## Non-mixing and priority rules

Use this priority order:
1. Explicit user requirements and approved brand identity.
2. The existing project's design tokens, architecture, localization and accessibility constraints.
3. One selected reference as visual inspiration.
4. A second reference only when the user requests comparison or an intentionally blended direction.

Never combine two or more full `theme.css` files by default. Similar-looking token names are not proof of compatible values. Avoid collisions by mapping selected values to the target's own token names or a clearly namespaced layer such as `--ref-<reference-id>-*`; remove the temporary namespace only after the final normalized tokens are approved.

## Scale, responsiveness and visual coherence

- Keep one coherent scale per implementation. Normalize font sizes, line heights, letter spacing, spacing steps, radii, shadows, container widths and breakpoints instead of blindly mixing source values.
- Preserve measurement intent, but prefer `rem` for type and spacing, and `clamp()` for fluid type/spacing when appropriate. Do not use `transform: scale()` as a substitute for responsive layout or correct type sizing.
- Use one root/type scale and one spacing scale across components; map reference values into those tokens rather than adding near-duplicate values for each component.
- Check the current project's documented viewport matrix. If none exists, at minimum inspect 320, 360, 390, 430, 768, 1024, 1440 and 1920 CSS-pixel widths; include RTL/LTR and reduced-motion checks when relevant.
- Keep keyboard focus, contrast, semantic structure and touch targets valid after adaptation. A reference's appearance never overrides accessibility or usability.

## Attribution and safe use

The library is a set of design references, not a bundle of runnable brand websites or permission to clone them. Never state that Perfect AI authored or owns a referenced website. Do not copy protected brand assets, fonts, logos, images, proprietary source code or exact distinctive compositions without a valid basis and user approval. Verify licenses for any separately sourced asset/dependency.

## Preservation

This skill is an optional, additive reference layer. Do not remove, overwrite or globally retheme existing project files in order to apply a reference. Make changes only to the components/tokens required by the approved task, and describe any adopted reference and normalization choices.
