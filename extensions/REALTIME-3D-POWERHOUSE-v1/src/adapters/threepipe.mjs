/** Dedicated Threepipe canvas: NEVER attach another WebGL renderer to this canvas. */
export async function createThreepipeEditor({canvas,modelUrl,registry}){
 const {ThreeViewer,TransformControlsPlugin}=await import('threepipe');
 const release=registry?.acquire(canvas,'threepipe')??(()=>{});
 let viewer;
 try{
  viewer=new ThreeViewer({canvas,renderScale:'auto',dropzone:false});
  viewer.addPluginSync(new TransformControlsPlugin());
  if(modelUrl)await viewer.load(modelUrl);
  return {viewer,async load(url){return viewer.load(url);},
    exportScene(){return viewer.exportScene();},dispose(){viewer.dispose();release();}};
 }catch(e){viewer?.dispose();release();throw e;}
}
