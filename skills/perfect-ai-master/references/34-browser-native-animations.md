# Native animation toolbox — CSS/WAAPI/View Transitions/Scroll Timelines

Use CSS transition for simple state changes. `Element.animate(keyframes, options)` for JS-managed playback and cancellation. Native View Transitions for view switches (feature detect), provide no-transition fallback. CSS `animation-timeline: scroll()` and `view()` are progressive enhancements requiring browser compatibility review; never rely on them for critical info visibility.

```js
function reveal(el){
 if(matchMedia('(prefers-reduced-motion: reduce)').matches || !el.animate)return;
 const a=el.animate([{opacity:0,transform:'translateY(12px)'},{opacity:1,transform:'none'}],{duration:320,easing:'ease-out'});
 return ()=>a.cancel();
}
```

Use compositor-friendly `opacity`, `transform`; don't blanket `will-change` hundreds of elements. When page backgrounds animate, measure paint. Avoid hiding text with opacity=0 before JS runs, or honor `html.js` condition only once script loads. Respect user input and state instead of infinite autoplay.
