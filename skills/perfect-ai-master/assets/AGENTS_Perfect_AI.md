# Perfect_AI project agent instructions (optional append-only snippet)

When building, revising, auditing or debugging an interactive website:

- Read `.agents/skills/perfect-ai-master/SKILL.md` and the linked relevant reference modules before code changes.
- Use actual Anime.js v4 APIs (not v3 syntax) for text, stagger, scroll, timelines and SVG; use actual Three.js scene/renderer/geometry/animation for 3D.
- Default to monochrome high-contrast design, premium typographic hierarchy and semantic color tokens; no unrequested rainbow/glow palette.
- Persian pages use `lang="fa" dir="rtl"`, localized content, logical CSS and LTR isolates. Do not invent fake buttons, fake metrics or unchecked payment features.
- Test responsive layouts, keyboard, reduced motion and scroll reversal before declaring complete. Report what was actually tested.
- For VibeFarsi components, consult the current registry via the official CLI; local catalog is a reference index, not bundled original component source.

- Use `references/18-color-decision-engine.md` and `tools/color-engine.mjs` to justify, generate and audit palettes instead of arbitrary gradients.
- VibeFarsi item implementation contracts are self-contained at `registry/vibefarsi-items/<category>/<slug>.md`; obtain upstream source through official CLI when needed.
- Use `examples/live-lab` for actual independently authored Anime.js+Three.js sample, not a copy of upstream marketing assets.
