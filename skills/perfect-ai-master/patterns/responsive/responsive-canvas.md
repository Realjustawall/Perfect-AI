# Responsive WebGL canvas sizing

## Purpose & algorithm
Size via CSS; ResizeObserver updates renderer/camera, quality caps by tier. Static fallback for failure.

## Implementation CSS
```css
.three-host{inline-size:100%;block-size:100%;min-block-size:12rem;position:relative}.three-host canvas{display:block;inline-size:100%;block-size:100%}
```

## Interaction/accessibility/state contract
Every control must have semantic labels, a visible focus indicator, keyboard activation, touch access, and meaningful empty/loading/error/fallback behavior. CSS changes must not reorder semantic DOM reading flow. RTL must use logical properties where applicable; do not reverse numbers/code unexpectedly.

## Validation procedure
Inspect computed layout at 320, 390, 768, 1024, 1440 CSS px; also recheck with 200%/400% zoom, 320x568, landscape short height, long Persian+English strings, reduced motion, keyboard focus and disabled JS. For 3D/animation explicitly test unavailable GPU and context disposal. Diagnose real overflow rather than hiding it.

## Completion report
Record screenshots/check results actually gathered; mention intentional compromises and unsupported features. This is a locally written implementation pattern, not third-party copied source.
