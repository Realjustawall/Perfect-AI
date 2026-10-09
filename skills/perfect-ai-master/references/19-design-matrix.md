# Visual design decisions: audience × goal × density × emotion

For each case: validate color identity and accessibility first, then topology, typography, motion and content. These are **starting hypotheses** not fixed brand requirements.

| Project | Suggested palette | Typography | Motion | Risk |
|---|---|---|---|---|
| Perfect_AI/experimental developer product | black/white/graphite (strict C=0) | display grotesk + readable Persian sans | scroll mesh, precise text reveal | white bloom behind text |
| Fintech/banking | deep blue neutral or existing brand; restrained green success | high legibility/tabular nums | low-amplitude fast feedback | relying on hue for fraud/error |
| Healthcare | pale neutral, restrained teal/blue when brand fits | accessible weights/sizes | subtle, non-distracting | false red/green semantics |
| Government forms | mostly neutral with strong focus ring | Persian legibility + clear labels | only meaningful status | low contrast or tiny target |
| Education | off-white, accent limited to progress/navigation | long-read optimize line length | reveal only supportive | over-animated lessons |
| Luxury editorial | black/offwhite, grayscale metals, warm neutral option | high hierarchy, measured contrast | cinematic but low load | aesthetic sacrificing reading |
| Architecture | neutral paper/concrete tones | large image captions and intentional grid | slow spatial transitions | text-image collisions |
| E-commerce | neutral page + sale/CTA intentional | price/labels tabular | response feedback not decoration | fake urgency and buttons |
| Productivity SaaS | surfaces delineated by lightness | density and scannability | short and cancellable | hue explosion per feature |
| Gaming | dark surfaces with product-specific color | display + accessible settings | action-priority, reduced motion | seizure/flash effects |
| Creative portfolio | expressive custom identity | unique display and utility body | art-directed scenes | generic neon/web3 look |
| Data dashboard | neutral shell + semantically meaningful data scale | compact tables | transitions preserve data | misleading unordered palette |
| Persian news | paper/neutral, strong text contrast | Vazirmatn + good line-height | almost static | reading fatigue |
| Scientific visualization | diverging/sequential OKLCH calibrated | numerical clarity | animate dimensions carefully | color as sole encoding |
| 3D product viewer | mostly neutral canvas, material-accurate lights | DOM overlay | camera and material-driven | 3D bloom washout |

## Design decision record template
1. Constraints: brand / target users / locale / device / desired visual voice.
2. Palette: why chosen; alternatives rejected; token table; contrast pairs.
3. Typography: display vs body, font licensing, line height, tabular digits, RTL.
4. Layout: grid/container scale, reading length, responsive breakpoints.
5. Motion: purpose, time budget, phases, reduced motion.
6. Risks: overdraw/CLS/low contrast/keyboard focus and mitigation.
7. Tests: screenshots at 320/375/768/1280/1440 and browser matrix.
