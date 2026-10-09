# Advanced color science and semantic palette architecture

## Color models
- Device RGB/sRGB channels encode display-referred values; use linear-light transforms for blending and luminance calculations. HEX is a serialization, not a perceptually uniform color model.
- HSL is convenient for editing but changes in HSL `L` are not perceptually uniform. Use OKLab/OKLCH for authoring lightness and chroma ramps; gamut-map to sRGB without blind channel clipping. Wide-gamut Display-P3 optional enhancement with sRGB fallback.
- Color harmony is *context dependent*: complementary/analogous/triadic hues are starting patterns, not a guarantee of aesthetic quality. Keep one dominant tone with purposeful accents and semantic state colors. For strict Perfect_AI monochrome, **do not insert bright hues merely for visual interest**.
- Color psychology is culturally contingent. Never assume, e.g., blue automatically builds trust or red always means error across all audiences. Prioritize brand, domain, task, locale and evidence from user testing.

## Palette selection pipeline
1. Intake brand constraints and forbidden colors; subject/context/audience, desired atmosphere, accessibility requirement, light/dark support.
2. Choose background/surface elevation using lightness with enough separation, not 100 random glows.
3. Choose text hierarchy and verify contrast for normal/large text and non-text controls.
4. Choose semantic roles: primary/secondary/tertiary/action/focus/danger/warning/success/info/selection/chart-series; status never conveyed by hue alone.
5. Generate OKLCH tones with controlled chroma; gamut-map; test WCAG 2.2 AA (4.5 normal text, 3 large text, 3 important nontext UI); AAA as optional stricter target. APCA is an additional experimental analysis tool, **not an official WCAG 2 replacement**.
6. Test hover, focus, disabled, error, overlays after alpha compositing, images/text overlap, gradient endpoints + midpoints. For dark theme avoid full #000 against #fff everywhere if visual fatigue is an issue; comply with requested strict monochrome while using neutral surfaces.
7. Check contrast with simulated color-vision differences and grayscale; user testing for critical decisions. Confirm colors in actual browser at mobile/desktop brightness.

## Roles not direct hex usage
CSS design tokens (`--color-bg`, `--color-text`, `--color-action`, `--color-on-action`, `--color-border`, `--color-focus`, `--color-positive`, `--color-negative`, `--color-chart-1`), plus interactive state tokens. Never encode role only in name `purple-500`. Provide token snapshots for light/dark, high contrast and monochrome.

Sources: https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html ; https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html ; https://www.w3.org/TR/css-color-4/
