import { animate, onScroll, stagger } from 'animejs';
// Example API: test against installed Anime.js 4.x and route ownership.
export function createScrollReveal(container: HTMLElement){
 const children=container.querySelectorAll<HTMLElement>('[data-stagger-item]');
 if(!children.length)return () => {};
 const animation=animate(children,{opacity:[0,1],translateY:[24,0],delay:stagger(80),duration:650,ease:'outCubic',autoplay:onScroll({target:container,sync:.6})});
 return ()=>{animation.pause();};
}
