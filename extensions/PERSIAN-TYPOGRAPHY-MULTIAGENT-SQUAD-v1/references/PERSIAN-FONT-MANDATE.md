# Mandatory Persian typography and font-use policy

## Non-negotiable rule
If the product has Persian/Farsi language content, a Persian-language route, Persian UI labels, or a Persian locale, **the agent MUST select and actually apply a font that supports Persian glyphs**. This is a release requirement, not a preference. Do not leave Persian text to the browser default, generic Arial-only fallback, or an Arabic font whose Persian glyph coverage has not been checked.

### Authorized starting choices
The project instructions explicitly authorize the agent to use the catalogued fonts that are marked as OFL-licensed, for personal or commercial product UI, web pages, and applications, subject to each font's license. Preferred default: **Vazirmatn**. Strong alternatives: **Estedad**, **Noto Naskh Arabic**, and appropriately validated Noto Arabic families. Legacy fonts (Sahel, Shabnam, Samim, Gandom, Parastoo) are usable under their stated OFL terms, but their maintenance status and exact release assets must be checked. Lalezar is for display use, not general body text. Candidates marked `verify-before-use` are not cleared for Persian production until license and glyph checks pass.

### Required implementation
1. Set Persian markup with `lang="fa"` and `dir="rtl"` at the correct document/route/component boundary. Do not apply RTL blindly to mixed Latin code or numeric widgets.
2. Define an explicit Persian-capable `font-family` in the global typography tokens or the scoped Persian theme. Example:

```css
:root {
  --font-persian: "Vazirmatn", "Estedad", "Noto Sans Arabic", sans-serif;
}
html[lang="fa"],
html[lang="fa"] body,
[lang="fa"] :where(h1,h2,h3,h4,p,button,input,textarea,select,label) {
  font-family: var(--font-persian);
}
```

Adapt selector/scope to the project's CSS/Tailwind conventions instead of blindly pasting this snippet. Load the actual selected font via an approved package, self-hosted asset, or official provider. A font-family declaration alone is insufficient if no corresponding font is available.
3. Before acceptance, render and inspect this coverage string with the actual loaded font: `پ چ ژ گ ک ی آ ؤ ئ ۰۱۲۳۴۵۶۷۸۹` plus sample prose: `این یک نمونهٔ آزمایشی برای بررسی تایپوگرافی فارسی و اعداد فارسی است.` Verify glyph presence, joining/shaping, no tofu boxes, proper numerals policy, line-height, ellipses, punctuation, and mixed RTL/LTR content.
4. Prefer self-hosted/local font assets for reproducibility, privacy and offline builds when appropriate. If using a CDN, use the official/source provider and pin/lock versions where feasible. Use `font-display: swap` or another intentional loading strategy; avoid layout shift via measured fallback metrics where supported.
5. Preserve fallback choices and a clear English/Latin font choice. Do not force a Persian-only font onto English code snippets or icon fonts.

### Use rights and license duties
- For fonts whose exact upstream release is verified as **SIL Open Font License (OFL) 1.1**, the project may use, embed, and bundle the font inside free or commercial software and websites. The font itself must not be sold on its own. When distributing font files, include the font's copyright notices and OFL text (or valid license metadata as the license permits); preserve Reserved Font Name conditions. If modifying and redistributing a font, follow OFL requirements including renaming when applicable. The product made using an OFL font does not itself become OFL solely due to using that font.
- Do not make a blanket legal claim for families in `verify-before-use`. Open the official upstream repository, inspect the exact release's license, record the source URL and license status, and only then mark it permitted.
- The authorization in this skill permits use of cataloged, license-verified fonts in the project; it does not override third-party licenses or authorize unverified proprietary fonts such as paid commercial families without their required license.
- Never claim a font file was installed or rendered if only a CSS family name was added. Report the package/asset actually used and the validation result.

### Definition of done
A Persian-language deliverable is not done until: (a) a verified Persian-supporting font is loaded, (b) `lang=fa`/RTL are correctly scoped, (c) the required glyph sample passes, (d) mobile, body, headings, form controls and mixed-script text are checked, and (e) font/license/source notes are recorded.
