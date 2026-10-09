# Shared brand identity source and rendered palette decision

Approved identity JSON requires brand name, audience, positioning, voice, restricted palette, typography pairing, motion personality, must-avoid decisions and explicit approval. Every reviewer and animation recipe reads the same file. Locked brand colors cannot be modified by a generic heuristic.

Color Intelligence 4.0: produce five candidates with semantic roles (bg/surface/text/accent/onAccent/border/focus), render on actual header/CTA/card/form/state components using `scripts/color_studio.py`, calculate contrast, compare screenshots, select after qualitative brand review. Contrast alone cannot certify overall accessibility; disabled/hover/focus text also requires checking.

Typography: Persian default candidates Vazirmatn and Estedad (license verification per asset); English Inter, Manrope, system UI and Space Grotesk. Choose by domain/audience rather than universal favorite. Measure visible font glyphs after `document.fonts.ready` and use language-specific CSS `:lang(fa)`, `:lang(en)`. Avoid Persian character splitting that breaks shaping; animate words or wrapper elements. Self-host only correctly licensed font files; no font binary distributed here. Prevent CLS via font metrics, width and line wrapping tests.
