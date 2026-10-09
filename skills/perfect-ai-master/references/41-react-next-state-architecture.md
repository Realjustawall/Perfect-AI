# React/Next/Vite architecture and UX performance

Decide framework based on actual task; static landing can be HTML/CSS+ESM, complex app uses React/TS/Vite or Next when SSR/SEO need exists. Design component boundaries by ownership/state/fetch—not number of pixels. Avoid unnecessary re-render from per-frame scroll values; keep mutable animation refs outside React state, dispose on unmount. Lazily load heavy Three.js and motion libraries only when visible/needed. Preserve semantic loading content on server.

Graph of state: server data, URL navigation, persisted prefs, transient form, view-only motion; avoid conflating. Routes have loading, error and not-found states. Abort fetch on navigation and manage races. Measure LCP/INP/CLS/TTFB on real deployments. Refer to curated upstream Vercel React best practices and verify exact version before application.
