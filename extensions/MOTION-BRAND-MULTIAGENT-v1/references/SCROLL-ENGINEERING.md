# Scroll-Driven Animation Engineering

## Motion source of truth
For a section, one controller owns progress p ∈ [0,1]. All DOM elements and Three camera parts subscribe to that progress, not to competing raw `scroll` listeners. Treat smooth scrolling as optional, never as a forced default. Avoid transform ownership collision by layering elements (outer DOM layout, inner animation node) and separate Three pivots.

## GSAP pinned section example
```js
const stageTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: sectionEl,
    pin: stageEl,
    scrub: .6,
    start: 'top top',
    end: '+=240%',
    invalidateOnRefresh: true,
    onUpdate: self => threeState.progress = self.progress,
  },
});
stageTimeline.fromTo(copyEl,{y:36,opacity:0},{y:0,opacity:1,duration:.4});
```
Pin the stage; animate descendants. Avoid pinned ancestors using CSS transform/will-change; debug pinned container jumps and wrapper geometry. Refresh after font load and image asset dimensions become known. Match Media can disable pin on mobile and use natural stacked document flow.

## Anime.js v4
Use `autoplay: onScroll({... sync:true, target:section...})` to bind progress; the observed element must correspond to the actual section. Check API of pinned behavior carefully; don't assume it is identical to GSAP ScrollTrigger.

## Motion React
```jsx
const {scrollYProgress}=useScroll({target:ref,offset:['start end','end start']});
const smooth = useSpring(scrollYProgress,{stiffness:120,damping:26});
const y=useTransform(smooth,[0,1],[64,-64]);
```
Avoid derived React state each frame: MotionValues can update style outside normal renders.

## Native CSS
Feature-detect `animation-timeline:view()`; it is appropriate for simple fades, but not a fully controlled 3D narrative with complex imperative camera state. Always include a stable unsupported-browser fallback.

## Synchronizing smooth scroll
When Lenis is deliberately enabled: subscribe `lenis.on('scroll', ScrollTrigger.update)`, use `gsap.ticker.add(t=>lenis.raf(t*1000))`; do not use a second rAF for Lenis. Compare native scroll before enabling smooth scroll for accessibility, trackpads and touch. Never disable default browser scroll without clear benefit.

## Scroll QA matrix
0% first-frame readable, 25%, 50%, 75%, 100%, backscroll 75→25→0%, font switch halfway, viewport resize halfway, native scrollbar drag, touch and keyboard PageDown/Home, browser refresh at mid-page. Verify scroll timeline content does not disappear on deep link navigation. Three model safe areas stay visible, and sticky scene releases at intended chapter end.

Original sources: https://gsap.com/docs/v3/Plugins/ScrollTrigger/ , https://motion.dev/docs/react-use-scroll , https://github.com/iart-ai/web-animation-skills , https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines
