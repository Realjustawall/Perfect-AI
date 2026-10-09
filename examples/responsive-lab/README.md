# Perfect_AI Responsive Lab

**Standalone no-network example:** open `index.html` in any modern browser, or run `python -m http.server 8000` here and visit http://localhost:8000 . No Node dependencies. Uses responsive CSS, container queries, accessible dynamic menu, search, theme toggle and form validation. No actual WebGL model in this lab; existing `examples/live-lab` contains real Three.js+Anime.js dependency-based scene. CSS orb is explicitly decorative.

Run browser audit (Node22 + Chromium/Chrome installed):

```bash
node ../../tools/browser-matrix.mjs ./index.html --output ./reports
```

Test mobile/desktop, zoom in desktop manually, keyboard focus and screen readers separately. Browser test does not establish complete WCAG compliance.
