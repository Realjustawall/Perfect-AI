# Responsive images, video, typography and motion assets

Use `srcset` and `sizes` reflecting *rendered* slot, not viewport alone. Use art direction `<picture>` when crop/composition changes; prefer modern formats with graceful fallback, dimension attributes/aspect-ratio to prevent CLS, lazy-load noncritical content. Do not lazy-load LCP hero image. For video: correct poster, captions/transcripts, muted autoplay restrictions, pause offscreen, no background animation on reduced-motion or data-limited devices when not essential.

```html
<picture>
 <source type="image/avif" srcset="/img/scene-640.avif 640w, /img/scene-1280.avif 1280w" sizes="(max-width: 48rem) 90vw, 45vw">
 <img src="/img/scene-1280.jpg" width="1280" height="800" alt="نمای رابط محصول" decoding="async" loading="lazy">
</picture>
```

Three.js assets: choose geometry LoD, glTF compression KTX2/Draco/Meshopt based on runtime support; loaders are asynchronous; show accessible loading and error feedback. Never claim images/generated art used without the actual asset. Include cache policy and attribution/license.
