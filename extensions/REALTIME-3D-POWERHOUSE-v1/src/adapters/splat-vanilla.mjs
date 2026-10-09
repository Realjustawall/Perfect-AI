/** For @pmndrs/vanilla splat files. Works with an existing THREE.WebGLRenderer, scene and camera. */
import { validateSplatAsset, recommendSplatSettings } from '../core/splat.mjs';
export async function attachSplat({renderer,scene,camera,url,estimatedBytes,settings={}}){
 const check=validateSplatAsset({url,bytes:estimatedBytes});if(!check.ok)throw Error(check.errors.join('; '));
 if(!renderer||!scene||!camera)throw Error('renderer, scene and camera required');
 if(!/\.splat(?:\?.*)?$/i.test(url))throw Error('pmndrs/vanilla SplatLoader example expects .splat; .ksplat requires a compatible loader');
 const {SplatLoader,Splat}=await import('@pmndrs/vanilla');
 const loader=new SplatLoader(renderer);
 const data=await loader.loadAsync(url);
 const policy=recommendSplatSettings(settings);
 const mesh=new Splat(data,camera,{alphaTest:policy.alphaTest});
 scene.add(mesh);
 let closed=false;
 return {mesh,policy,dispose(){if(closed)return;closed=true;scene.remove(mesh); // Retain shared cached buffers; release only with ownership knowledge.
 }};
}
