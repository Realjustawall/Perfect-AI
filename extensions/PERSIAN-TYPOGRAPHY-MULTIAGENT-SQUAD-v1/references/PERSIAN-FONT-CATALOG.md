# Persian font catalog — checked sources and practical guidance

## Safest choices first
- **Vazirmatn** — default recommendation for contemporary Persian UI/body copy. Upstream explicitly describes it as Persian/Arabic and documents OFL 1.1.
- **Estedad** — modern variable-weight Arabic–Latin family; verify Persian-special glyphs against the exact build before release.
- **Noto Naskh Arabic** — editorial/long reading; Google Fonts metadata lists `fa_Arab` (Persian).
- **Noto Kufi Arabic** — geometric heading/display; Google Fonts metadata lists `fa_Arab`; test long-form readability.
- **Noto Sans Arabic / Noto Sans Arabic UI** — neutral sans candidates; test `پ چ ژ گ` on the actual file before accepting.
- **Parastoo** — editorial serif; Google Fonts upstream metadata lists Persian and OFL.
- **Sahel, Shabnam, Samim, Gandom** — known Persian families under OFL, but their original upstream repositories are archived; useful for legacy matching, less ideal as the default for a new product.
- **Lalezar** — expressive display typeface inspired by Iranian Film-Farsi poster lettering; use for short headlines and verify Persian glyphs.

## Additional candidates (not automatically cleared)
IBM Plex Sans Arabic, Readex Pro, Noto Nastaliq Urdu, Amiri, Vazir Code, Tanha, and Nahid are listed as candidates or special-purpose families. The agent must inspect the exact release's license and verify every Persian character before using these as the active Persian UI font. Nastaliq is not a default UI choice; line height and glyph coverage require special scrutiny.

## Must-test glyphs
`پ چ ژ گ ک ی` and `۰۱۲۳۴۵۶۷۸۹` — Persian-specific letters and numerals must be tested separately; a family labeled “Arabic” is not proof of complete Persian support. Also test `ۀ ة آ ئ ؤ`, punctuation, joined word shapes, English fragments, URLs and code snippets.

## License rule
For the verified OFL 1.1 releases in `FONTS-CATALOG.json`, project use, commercial UI, embedding and bundling in software are permitted under OFL conditions. Do not sell the font file by itself. When redistributing font binaries, include the font's copyright notice and license and obey Reserved Font Name terms. Font rendering does not relicense the whole app. Check the exact upstream license again when pinning/downloading a release.
