# Nontrapping optional scroll snap

## Purpose & algorithm
Use proximity not mandatory; reduced motion falls back to standard scroll; preserve focus and history.

## Implementation CSS
```css
.carousel{scroll-snap-type:inline proximity;overflow-inline:auto;display:flex}.carousel>*{scroll-snap-align:start}@media(prefers-reduced-motion:reduce){.carousel{scroll-snap-type:none}}
```

## Interaction/accessibility/state contract
Every control must have semantic labels, a visible focus indicator, keyboard activation, touch access, and meaningful empty/loading/error/fallback behavior. CSS changes must not reorder semantic DOM reading flow. RTL must use logical properties where applicable; do not reverse numbers/code unexpectedly.

## Validation procedure
Inspect computed layout at 320, 390, 768, 1024, 1440 CSS px; also recheck with 200%/400% zoom, 320x568, landscape short height, long Persian+English strings, reduced motion, keyboard focus and disabled JS. For 3D/animation explicitly test unavailable GPU and context disposal. Diagnose real overflow rather than hiding it.

## Completion report
Record screenshots/check results actually gathered; mention intentional compromises and unsupported features. This is a locally written implementation pattern, not third-party copied source.
