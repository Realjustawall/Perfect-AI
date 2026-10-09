# SVG + Canvas + DOM + 3D compositor

SVG best for line-drawn vector paths, icons, strokes and interactive diagrams. Anime.js can animate SVG properties and paths. DOM remains for text, focus, forms. Canvas2D for performant flat particles when 3D isn't needed. Three.js for lighting/depth/material, not merely to claim "3D". Layer architecture: background CSS → decorative 3D canvas (`aria-hidden`) → optional SVG overlay → text DOM → accessible controls/top-layer dialog. Manage z-index and pointer events explicitly.

SVG paths: coordinate system viewBox, strokeLength/dasharray, normalized path progress; content remains in document; use inline SVG for path references. Avoid huge DOM `<circle>` particle loops if GPU buffer is appropriate. Pause/cleanup observers/animations on navigation and when hidden.
