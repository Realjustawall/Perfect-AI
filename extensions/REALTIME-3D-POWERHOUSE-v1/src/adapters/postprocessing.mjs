/** WebGL only: do not use the same renderer from a Threepipe/WebGPU pipeline. */
import {resolvePreset} from '../core/postfx.mjs';
export async function createPostProcessing({renderer,scene,camera,preset='film',quality='desktop'}){
 if(!renderer?.isWebGLRenderer)throw Error('postprocessing expects THREE.WebGLRenderer');
 const {EffectComposer,RenderPass,EffectPass,BloomEffect,VignetteEffect,NoiseEffect}=await import('postprocessing');
 const params=resolvePreset(preset,quality);
 const composer=new EffectComposer(renderer);
 composer.addPass(new RenderPass(scene,camera));
 const effects=[];
 if(params.bloomIntensity>0)effects.push(new BloomEffect({intensity:params.bloomIntensity,luminanceThreshold:params.luminanceThreshold}));
 if(params.vignette>0)effects.push(new VignetteEffect({offset:0.5,darkness:params.vignette}));
 if(params.grain>0)effects.push(new NoiseEffect({premultiply:true}));
 if(effects.length)composer.addPass(new EffectPass(camera,...effects));
 let disposed=false;
 return {composer,effects,render(dt){if(!disposed)composer.render(dt);},setSize(w,h){if(!disposed)composer.setSize(w,h);},dispose(){if(disposed)return;disposed=true;composer.dispose();}};
}
