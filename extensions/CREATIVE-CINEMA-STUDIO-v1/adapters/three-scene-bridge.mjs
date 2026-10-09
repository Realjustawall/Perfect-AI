import {interpolateCamera} from '../src/transitions.mjs';
/** Persistent WebGL bridge; caller keeps renderer alive above router. */
export function createSceneBridge({camera,controls,render,requestFrame=requestAnimationFrame,cancelFrame=cancelAnimationFrame}={}){
 if(!camera||typeof render!=='function')throw new TypeError('camera and render required');let active=0,frame=null;
 const setState=state=>{if(!state)return;camera.position.set(state.x??camera.position.x,state.y??camera.position.y,state.z??camera.position.z);if(state.fov!=null&&camera.isPerspectiveCamera){camera.fov=state.fov;camera.updateProjectionMatrix()}if(controls?.target)controls.target.set(state.targetX??controls.target.x,state.targetY??controls.target.y,state.targetZ??controls.target.z);camera.lookAt(controls?.target??{x:state.targetX??0,y:state.targetY??0,z:state.targetZ??0});render()};
 return {setState,animate(start,end,duration=600,signal){if(frame!=null)cancelFrame(frame);const ticket=++active,begin=performance.now(),elapsed=()=>Math.min(1,(performance.now()-begin)/Math.max(1,duration));const loop=()=>{if(ticket!==active||signal?.aborted)return;const t=elapsed();setState(interpolateCamera(start,end,t));if(t<1)frame=requestFrame(loop)};loop()},stop(){active++;if(frame!=null)cancelFrame(frame);frame=null}};
}
