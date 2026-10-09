// Example in a bundler with `animejs` installed; no implicit CDN assumption.
import { createTimeline, stagger } from 'animejs';
export function enterWords(selector){
  const tl=createTimeline({autoplay:false,defaults:{duration:540,ease:'out(3)'}});
  tl.add(selector,{opacity:[0,1],translateY:['1em','0em'],delay:stagger(35)});
  tl.play();return ()=>tl.pause();
}
