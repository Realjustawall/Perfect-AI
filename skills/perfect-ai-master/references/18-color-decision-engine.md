# Advanced color intelligence / palette selection — rigorous engineering specification

## Purpose
The designer must choose the *right palette*, not invent a flashy gradient. Visual tone is a constraint optimization problem. Inputs: product category, audience, visual identity, emotional adjectives, trust/safety level, usage session length, density, content modality, cultural locality, light/dark preference, explicit user colors, disability accessibility requirements, role of images/3D lighting, and competitive differentiation.

## Formal design brief and weighted priorities
Input example:
```json
{"product":"technical developer studio","audience":"designers and engineers","persona":"precise, premium, reliable","theme":"monochrome","density":"medium","locales":["fa","en"],"contrast":"AA","avoid":["random neon"],"surface":"dark"}
```
Priority: explicit brand/monochrome constraint > readability/semantic recognizability > established product trust conventions > consistent role palette > harmony / fashion. Never override user black-white preference to make visuals "pop".

## Technical foundation
- CSS sRGB channel is gamma encoded. For WCAG relative luminance transform channel c∈[0,1] by c/12.92 if c ≤.04045, else ((c+.055)/1.055)^2.4; L=0.2126 R+0.7152 G+0.0722 B. Contrast=(Lmax+.05)/(Lmin+.05).
- AA normal text ≥4.5:1, large text ≥3:1, meaningful UI graph borders/focus ≥3:1 where applicable; AAA normal 7:1. AA alone cannot prove readability; watch transparency, blur, thin fonts.
- OKLCH controls perceived lightness (L), chroma (C) and hue (h). Use near-neutral C<.02 for premium grayscale/warm/cool subtle surfaces; true neutral C=0. Vary L monotonically across ramps; hue circular arc; gamut map by reducing chroma while holding lightness/hue, not arbitrary RGB clamp.
- Oklab/OKLCH are perceptual tools, not validated accessibility metrics. Use actual sRGB luminance for current WCAG contrast.
- For opaque compositing: foreground RGB = α*front+(1−α)*background in correct compositing space; prefer test final rendered pixel over guessing a frosted overlay.

## Palette family choice, rationale
- Monochrome/neutral: editorial, architecture, code tools, premium experimental, when specifically requested. Use 6–12 lightness steps; focus from luminance and stroke weight.
- Analogous: calm editorial/multi-panel; keep hierarchy by L and C differences, not hue difference alone.
- Complementary: CTA emphasis in commerce or active tools; limit saturated area to ~5–12% initial visual emphasis (a design starting guideline, not formula).
- Split complementary: editorial/creative dashboards, but chart semantics may demand more categorical colors.
- Triadic: playful and data-rich products; avoid full-strength three primary surface fills.
- Sequential scales: ordered numerical progression; monotonic perceived lightness. Diverging scales: meaningful zero/midpoint neutral. Categorical: distinct hues, luminance, markers, text labels.

## Semantic token layers
Foundation `neutral-0..12`, `brand-1..9`, `success/warn/error/info`; semantic `bg/page`, `bg/subtle`, `surface`, `surface-hover`, `surface-raised`, `text/default`, `text/secondary`, `text/inverse`, `stroke/subtle`, `stroke/interactive`, `focus/ring`, `action/primary`, `action/primary-hover`, `action/secondary`, `selection`, `overlay`, `data/*`.
Never hardcode scattered hex values inside components. Map CSS variables and Tailwind. Define both dark and light role maps rather than blindly inverting colors. Separate visual states: hover, active, selected, focus, disabled, busy, validation.

## Color use / proportion
- Start with 60/30/10 only as compositional prompt, not mechanical color percentages. For black-white design allocate most area to background; use borders/negative space/texture to express dimension, not hues.
- Saturated chroma in a large bright 3D orb can visually overwhelm content: constrain radius, bloom threshold, emission exposure and UI hierarchy.
- RTL: color semantics do not flip when layout reverses; chart gradients and progress direction might need intentionally documented adjustment.
- Persian script often needs sufficient stroke weight and high enough luminance contrast for smaller sizes; never compensate poor contrast with glow.

## Color psychology: evidence-sensitive application
Associations of blue/trust, green/nature, red/danger etc. vary by context and culture; treat as weak priors, not scientific guarantees. Product fit, brand continuity, accessibility, user research and hierarchy dominate color stereotypes.
Examples: banking (calm, high-contrast, sober), education (comfort over long reading), healthcare (clarity and high visibility), creative studio (editorial expressive), developer tools (focused semantic syntax, minimal chroma), gaming (saturation only when deliberate).

## Palette generation algorithm (bundled runnable JS)
1. Determine user overrides and theme. If explicit strict monochrome: chroma exactly zero; pick surface and text lightness ladder, contrast-check.
2. Else choose sector hue prior, evaluate cool/warm neutral tendency, choose restrained chroma. Generate OKLCH stops from semantic roles.
3. Convert to sRGB via tested OKLab matrices; binary search chroma to keep color gamut; avoid clipping RGB as only mapping strategy.
4. Compute all text/background contrast pairs, surface borders and primary CTA. If fail: adjust lightness at fixed hue/chroma first, then fallback neutral on extreme backgrounds.
5. Record choices with *reasons*, not "looks modern". Generate dark/light CSS tokens, JSON audit, optional palette preview.
6. Test grayscale and at least one color-vision deficiency simulation; add shape+text redundant cues.

## Failure patterns
- Random purple/cyan gradients for every SaaS brand; invisible gray labels; white-on-glow; arbitrary colored shadow; 5 saturated CTA accents; inconsistent green success / green price / green destructive; misleading red in user-specific cultural context.
- Palette where colored `#hex` on glass surface passes guessed contrast but rendered composited color fails.
- Conflating brand hue with action semantics: one brand accent does not encode every state.

## Recommended review grid
For desktop/mobile/light/dark, take screenshots of hero, cards, forms, data charts, errors, overlays, sticky nav, 3D scene. Check focus and interaction at all phases (including middle scroll), background brightness distribution, false color warnings and 200% zoom. Output `design-decision.md`, `tokens.css`, `color-audit.json`.

## Equations & working code
- Implementation: `tools/color-engine.mjs` and tests `tests/color-engine.test.mjs`.
- See `references/03-color-theory.md` for CSS usage.
- Sources: https://www.w3.org/TR/WCAG22/ , https://www.w3.org/TR/css-color-4/ , https://bottosson.github.io/posts/oklab/ , https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html
