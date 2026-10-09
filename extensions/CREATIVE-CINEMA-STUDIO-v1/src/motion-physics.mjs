import {clamp,intersection,rect} from './utils.mjs';
/** Deterministic damped spring x''=-(k/m)(x-target)-(c/m)v with time step subdivision. */
export class Spring{constructor({position=0,target=0,velocity=0,mass=1,stiffness=160,damping=22}={}){if(mass<=0||stiffness<0||damping<0)throw new Error('invalid spring');Object.assign(this,{position,target,velocity,mass,stiffness,damping})}
 step(dt){if(!Number.isFinite(dt)||dt<0||dt>1)throw new Error('seconds 0..1');const slices=Math.max(1,Math.ceil(dt/(1/240)));const h=dt/slices;for(let i=0;i<slices;i++){const force=-this.stiffness*(this.position-this.target)-this.damping*this.velocity;this.velocity+=force/this.mass*h;this.position+=this.velocity*h}return this.position}
 seek(position,velocity=0){this.position=position;this.velocity=velocity;return this}
 settled(epsilon=.001){return Math.abs(this.position-this.target)<epsilon&&Math.abs(this.velocity)<epsilon}
}
export function collideAABB(moving,obstacle){const a=rect(moving),b=rect(obstacle);const overlap=intersection(a,b);if(!overlap)return {colliding:false,dx:0,dy:0};const left=(b.x+b.width)-a.x,right=(a.x+a.width)-b.x,top=(b.y+b.height)-a.y,bottom=(a.y+a.height)-b.y;const choices=[{dx:left,dy:0},{dx:-right,dy:0},{dx:0,dy:top},{dx:0,dy:-bottom}].sort((x,y)=>Math.abs(x.dx+x.dy)-Math.abs(y.dx+y.dy));return {colliding:true,...choices[0]}}
export function inertiaVelocity(prev,current,dt){return dt>0?(current-prev)/dt:0}
export function followPointer(spring,pointerX,deltaSeconds){spring.target=pointerX;return spring.step(deltaSeconds)}
