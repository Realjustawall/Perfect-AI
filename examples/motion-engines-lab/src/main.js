import {animate as animeAnimate, createTimeline} from 'animejs';
import {animate as motionAnimate} from 'motion';
import gsap from 'gsap';
import 'animate.css/animate.min.css';
import './style.css';

const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
const targets=['anime','motion','gsap','css'];
const status=document.querySelector('#status');
const nodes=Object.fromEntries(targets.map(key=>[key,document.querySelector(`#${key}-target`)]));
let animeTl, motionControl, gsapTl;
function state(message){status.textContent=message}
function clear(){
 animeTl?.pause?.();motionControl?.stop?.();gsapTl?.kill?.();
 targets.forEach(key=>{const n=nodes[key];n.style.transform='';n.style.opacity='';n.classList.remove('animate__animated','animate__bounce')});
}
document.querySelector('#anime-button').addEventListener('click',()=>{
 clear();if(reduce){state('کاهش حرکت فعال است: نمایش ثابت Anime.js');return}
 animeTl=createTimeline({defaults:{duration:430,ease:'outCubic'}})
  .add(nodes.anime,{y:[0,-48],rotate:[0,30]})
  .add(nodes.anime,{y:0,rotate:0},'+=80');
 state('Timeline Anime.js اجرا شد.');
});
document.querySelector('#motion-button').addEventListener('click',()=>{
 clear();if(reduce){state('کاهش حرکت فعال است: نمایش ثابت Motion');return}
 motionControl=motionAnimate(nodes.motion,{y:[0,-48,0],rotate:[0,-25,0]},{duration:.8,ease:'easeInOut'});
 state('Motion animate() اجرا شد.');
});
document.querySelector('#gsap-button').addEventListener('click',()=>{
 clear();if(reduce){state('کاهش حرکت فعال است: نمایش ثابت GSAP');return}
 gsapTl=gsap.timeline().to(nodes.gsap,{y:-48,rotation:35,duration:.35,ease:'power2.out'}).to(nodes.gsap,{y:0,rotation:0,duration:.55,ease:'power2.inOut'});
 state('GSAP Timeline اجرا شد.');
});
document.querySelector('#css-button').addEventListener('click',()=>{
 clear();if(reduce){state('کاهش حرکت فعال است: نمایش ثابت Animate.css');return}
 nodes.css.classList.add('animate__animated','animate__bounce');
 nodes.css.addEventListener('animationend',()=>nodes.css.classList.remove('animate__animated','animate__bounce'),{once:true});
 state('Animate.css کلاس bounce را اجرا کرد.');
});
document.querySelector('#reset').addEventListener('click',()=>{clear();state('نمایش بازنشانی شد.')});
