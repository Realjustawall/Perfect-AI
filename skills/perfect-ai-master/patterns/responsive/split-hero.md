# Responsive hero with staged 3D and copy

## Purpose & algorithm
Use semantic headline and CTA DOM as priority; WebGL is decorative. Side-by-side when each column >= 21rem, stacked when they are narrower. Keep on small screens copy before decorative content.

## Implementation CSS
```css
.hero{display:grid;grid-template-columns:minmax(0,1fr);gap:clamp(1rem,4vw,4rem);align-items:center}.hero__visual{aspect-ratio:1;min-inline-size:0;max-inline-size:34rem}@media(min-width:58rem){.hero{grid-template-columns:minmax(0,1fr) minmax(0,.9fr)}}@media(prefers-reduced-motion:reduce){.hero__visual canvas{display:none}}
```

## Interaction/accessibility/state contract
Every control must have semantic labels, a visible focus indicator, keyboard activation, touch access, and meaningful empty/loading/error/fallback behavior. CSS changes must not reorder semantic DOM reading flow. RTL must use logical properties where applicable; do not reverse numbers/code unexpectedly.

## Validation procedure
Inspect computed layout at 320, 390, 768, 1024, 1440 CSS px; also recheck with 200%/400% zoom, 320x568, landscape short height, long Persian+English strings, reduced motion, keyboard focus and disabled JS. For 3D/animation explicitly test unavailable GPU and context disposal. Diagnose real overflow rather than hiding it.

## Completion report
Record screenshots/check results actually gathered; mention intentional compromises and unsupported features. This is a locally written implementation pattern, not third-party copied source.
