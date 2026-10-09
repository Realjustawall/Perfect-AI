/** Mediabunny frame sampler -> canvas texture, synchronized to a Three camera via one timeline. */
import {createTimeline} from '../core/timeline.mjs';
import {openMediaFrames} from './mediabunny.mjs';
export async function createVideoFusion({file,renderer,scene,camera,videoWidth=960,videoHeight=540}){
 const THREE=await import('three');
 const media=await openMediaFrames(file);
 const canvas=document.createElement('canvas');canvas.width=videoWidth;canvas.height=videoHeight;
 const ctx=canvas.getContext('2d',{alpha:false});if(!ctx)throw Error('2D context unavailable');
 const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;
 const material=new THREE.MeshBasicMaterial({map:texture,side:THREE.DoubleSide});
 const plane=new THREE.Mesh(new THREE.PlaneGeometry(5,2.8125),material);plane.position.set(0,0,-3);scene.add(plane);
 const timeline=createTimeline({duration:Math.max(0.001,media.duration||10)});
 let raf=0,alive=true,busy=false,queued=null,shown=-1;
 async function renderSample(t){if(!alive||busy){queued=t;return;}busy=true;try{
  const ok=await media.renderAt(t,ctx,canvas.width,canvas.height);
  if(ok&&alive){texture.needsUpdate=true;shown=t;}
 }finally{busy=false;if(queued!==null&&alive){const next=queued;queued=null;void renderSample(next);}}}
 const unsub=timeline.onChange(s=>{if(Math.abs(s.time-shown)>1/24)void renderSample(s.time);
  camera.position.x=Math.sin(s.time*.3)*0.25; camera.lookAt(0,0,-3);
 });
 let last=0;
 function frame(t){if(!alive)return;raf=requestAnimationFrame(frame);timeline.tick(t);renderer.render(scene,camera);last=t;}
 raf=requestAnimationFrame(frame);void renderSample(0);
 return {timeline,plane,texture,media,dispose(){alive=false;cancelAnimationFrame(raf);unsub();media.close();scene.remove(plane);plane.geometry.dispose();material.dispose();texture.dispose();}};
}
