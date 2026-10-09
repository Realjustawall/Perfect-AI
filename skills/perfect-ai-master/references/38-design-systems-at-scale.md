# Enterprise design-system engineering

Tokens 3 layers: primitive (neutral tones/space raw), semantic (text/surface/action), component (button background/padding), modes (light/dark/high contrast). Components have anatomy, state machine, size/density variants, slots, keyboard behavior, RTL semantics, responsive container rules, loading/error/disabled/readonly states, visual regression snapshots and docs. Use stable APIs not style-only clones. CSS logical properties by default.

A component spec includes name, goal, must-not-do, DOM/accessibility, keyboard table, responsive contract, visual tokens, motion tokens, data contract, error cases, test IDs and migration plan. Version tokens and avoid cross-app regressions. Preferred adoption: foundations first, primitives next, composed patterns finally; maintain a no-random-one-off-color lint check.

Use VibeFarsi as one optional source for Persian UI components; assess its peer dependencies and code license before adopting, and keep all existing 279 guidance cards. Do not bulk import a whole registry into production bundle for coverage counts.
