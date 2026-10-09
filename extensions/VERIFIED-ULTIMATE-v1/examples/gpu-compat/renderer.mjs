/** Three.js renderer init with explicit fallback and observable evidence. Project must install three. */
export async function initRenderer({canvas,THREE,WebGPURenderer,preferWebGPU=true}) {
 const notes=[];
 if (!canvas)throw Error('canvas required');
 let renderer;
 const dispose =()=>{try{renderer?.dispose()}catch(err){notes.push('dispose error:'+String(err))}};
 if(preferWebGPU&&WebGPURenderer){
  try{
   renderer=new WebGPURenderer({canvas,antialias:true});await renderer.init();
   return {renderer,mode:'webgpu-or-internal-webgl2-backend',notes,dispose};
  }catch(error){notes.push('WebGPURenderer initialization failed:'+String(error));dispose();renderer=null}
 }
 try{
  renderer=new THREE.WebGLRenderer({canvas,antialias:true});
  const ctx=renderer.getContext();if(!(ctx instanceof WebGL2RenderingContext))throw Error('WebGL2 context unavailable');
  return {renderer,mode:'webgl2',notes,dispose};
 }catch(error){notes.push('WebGL2 unavailable:'+String(error));dispose();return {renderer:null,mode:'static-fallback',notes,dispose:()=>{}}}
}
// Note: WebGPURenderer may use WebGL2 internally; inspect the actual backend before labelling a GPU run.
