# Responsive dashboard, data table, charts, navigation

Data density is **not** screen width. Ask: what comparisons matter? Preserve relationships through a horizontal scroll region with a labeled hint, a prioritized stacked-card view, or column visibility controls. Do not silently hide critical columns.

- Tables: real `<table>` for comparable values, `<caption>`, `th scope=col`, `aria-sort`, sticky first column if needed, `overflow:auto;overscroll-behavior-inline:contain`; keyboard scroll focus, scroll hint. Financial numeric columns use `font-variant-numeric:tabular-nums; direction:ltr; text-align:end` as appropriate; don't reverse minus sign in RTL.
- Charts: don't use color alone for series; add labels, legend, pattern, data table/export. Axes tick density adapts by ResizeObserver without mutation recursion; prefer larger targets and tooltip on tap.
- Sidebar: one DOM tree and responsive drawer; preserve focus on open/close; no dual duplicate nav.
- Cards: info hierarchy first; metric labels not truncated before numeric value; loading skeleton dimensions match content to reduce CLS.
- Virtualized lists: only when item count warrants it; preserve keyboard traversal and screen reader list semantics; test dynamic row heights.

## Acceptance
Test 320px, 200% zoom, 40-column/long-value cases, rtl mixed numbers, chart keyboard reading, overflow and scroll affordance, navigation focus return, forms with large error messages.
