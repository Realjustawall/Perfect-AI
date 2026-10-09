# Container-query design system — component contracts

A reusable component should respond to **allocated inline size**, not assumptions about the global viewport. The containing parent owns the container; avoid querying the element's own width.

```css
.feature-slot { container: feature / inline-size; min-inline-size:0; }
.feature { display:grid; gap:clamp(.9rem,2cqi,1.75rem); grid-template-columns:minmax(0,1fr); }
.feature__media { aspect-ratio:16/10; max-inline-size:100%; object-fit:cover; }
.feature__title { font-size:clamp(1.15rem,3cqi,2.4rem); overflow-wrap:anywhere; }
@container feature (min-width:38rem) {
  .feature { grid-template-columns:minmax(0,1.2fr) minmax(12rem,.8fr); align-items:center; }
}
@supports not (container-type:inline-size) {
  @media (min-width:60rem) { .feature { grid-template-columns:1fr 1fr; } }
}
```

Be careful with container-query units (`cqi`, `cqw`) and font scaling: if the container can become extremely small/large, `clamp()` limits extremes but **must** allow accessibility zoom. Test computed font size after 400% zoom. Avoid excessive container nesting that makes the query target ambiguous; name containers explicitly.

Patterns: compact/comfortable cards; tables switching to disclosure list; horizontal navigation switching to a labeled menu button; dashboard widget switching from two-column chart+legend to stacked; timeline switching vertical when available inline space is narrow. Never duplicate interactive DOM solely for responsive variants (causes keyboard and state duplication).

**Decision protocol:** 1) prioritize content; 2) test narrowest container; 3) define size threshold where two-column stops fitting; 4) implement one DOM with responsive styles; 5) run screenshots at width of parent, not only viewport; 6) test inside modal/sidebar, zoom and RTL.

Sources: https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries
