# Creative Cinema Studio v1 / Perfect_AI

Standalone additive extension for **all 12** requested creative systems, containing **81 narrowly scoped Codex skills**, 12 ESM engineering modules, 48 original SVG storyboard frames, a 12-panel offline showcase, Node test suite and non-overwriting Windows installer. No MCP or runtime CDN.

- [Persian complete install and capability guide](README-FA.md)
- [Source and license notes](SOURCES.md)
- [Skill catalog and subskill routing](SKILL-CATALOG.json)
- [Validation criteria](references/ACCEPTANCE-MATRIX.md)

Important: the source modules are verified building blocks; integration into existing React/Three.js/GSAP/Anime.js projects is a separate operation performed by Codex with target dependencies. CSS preview does **not** demonstrate a live WebGL PBR renderer. Arbitrary SVG path interpolation requires an external library such as Anime.js `svg.morphTo` or `flubber`.

Tests: `node --test tests/*.test.mjs && node tools/validate-skills.mjs`.

Serve showcase from this directory: `python -m http.server 4173`, open `http://127.0.0.1:4173/examples/showcase/`.
