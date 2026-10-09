# Content-first responsive design

Build per-component container query rules with `container-type:inline-size` and CSS logical properties. Text can reflow across lines without fixed heights. Test reduced effective viewport at browser zoom, not just a mocked zoom property. Use dvh/svh for real mobile browser UI, safe-area insets and foldable dual-pane as progressive enhancement.

For 3D hero, define CSS-grid region for DOM content and a normalized render slot for model. Query actual canvas/DOM rect from ResizeObserver. Use `fitCameraToModel` and `projectedBounds`, never hard-coded x/y/z for every page. Shift model placement per container width and portrait/landscape; ensure text contrast and model silhouette remain visible.
