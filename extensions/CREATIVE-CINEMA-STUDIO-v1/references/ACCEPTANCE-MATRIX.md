# Real acceptance gates: PASS / FAIL / NOT RUN

| System | Pure module test | Chromium browser | Firefox/WebKit | Hardware GPU | Accessibility | Typical failure-mode test |
|---|---|---|---|---|---|---|
| Cinematic Page Transition | camera interpolation | native & WAAPI route | required in target | persistent Three.js only | focus, back | abort during transition |
| Advanced Image | parallax/displacement data | moving pointer + mask | required | GPU shader required | meaningful alt and no-motion | image decode fail |
| Kinetic Type | Unicode shaping plan | Persian and EN | required | shader text only | readable/selected text | complex joined glyphs |
| Procedural Layout | grid and FLIP | mobile layout | required | optional | keyboard DOM order | long grid, resize |
| SVG Morph | topology resampling | 0/.25/.5/.75/1 | required | n/a | menu semantics | malformed/unmatched outlines |
| Product Storytelling | frame index + bounded cache | forward/reverse sequence | required | optional | chapter text | frame 404 / frame zero |
| Material Studio | param validation | CSS material sample only | required | Three.js PBR required | high-contrast fallback | missing environment / context loss |
| Motion Physics | deterministic spring | pointer ball | required | n/a | reduced-motion | delayed input |
| Immersive Navigation | route planner | directional buttons | required | 3D menu optional | focus/history/deep link | unsupported GL |
| Product Configurator | schema / undo | controls | required | Three.js preview optional | keyboard form and labels | illegal combination |
| Preloader Intro | readiness failures | zero-wait fast path | required | scene readiness optional | no trapped focus | optional and required failure |
| Editorial Composition | seeded grid | responsive editorial | required | n/a | RTL alt and reading order | 200% zoom |

A standalone Node test success **never** establishes a hardware GPU success. Every destination project must run real Playwright screenshots in the browsers/devices claimed. Keep screenshots and test outputs with revision/commit and viewport annotations.
