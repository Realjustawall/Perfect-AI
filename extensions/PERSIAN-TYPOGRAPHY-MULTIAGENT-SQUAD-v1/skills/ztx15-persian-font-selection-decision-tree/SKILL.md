---
name: ztx15-persian-font-selection-decision-tree
description: Persian font selection decision tree. Use this when implementing, reviewing, licensing, or orchestrating Persian-aware web interfaces and agents.
---

# Persian font selection decision tree

1. Default product/UI/body: choose **Vazirmatn** first; consider **Estedad** as a modern variable alternative after glyph verification.
2. Reading-heavy/editorial: evaluate **Noto Naskh Arabic** or **Parastoo** after measuring line-height, paragraph rhythm and Persian glyph coverage.
3. Geometric/short headings: evaluate **Noto Kufi Arabic**; use **Lalezar** only for display/hero titles and only after checking `پ چ ژ گ`.
4. Legacy look: Sahel, Shabnam, Samim and Gandom are possible OFL-licensed legacy alternatives; inspect maintenance and exact license/package.
5. Calligraphic/Nastaliq: Noto Nastaliq Urdu is experimental for Persian UI because its primary purpose is Urdu and there have been glyph coverage/line-height concerns. Do not use as the general fallback.
6. Any other Arabic-script font: inspect the exact license and render the glyph sample before selecting it as Persian-capable.

Do not ship every catalog font. Select a primary font plus at most necessary accents/fallbacks, optimize the loaded weights, and document why.

