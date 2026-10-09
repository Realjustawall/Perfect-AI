import {createThreepipeEditor} from '../../src/adapters/threepipe.mjs';
import {createRendererRegistry} from '../../src/core/interop.mjs';
const registry=createRendererRegistry(),canvas=document.getElementById('render'),status=document.getElementById('status');
let editor=null,objectUrl=null;
const report=s=>status.textContent=s;
async function launch(){editor=await createThreepipeEditor({canvas,registry});report('Threepipe ready. Load your locally licensed GLB and use the transform gizmo.');}
launch().catch(e=>report('ERROR: '+e.message));
document.getElementById('model').addEventListener('change',async e=>{
 const f=e.target.files?.[0];if(!f)return;if(f.size>90*1024*1024)return report('GLB exceeds 90MB safety limit');
 if(objectUrl)URL.revokeObjectURL(objectUrl);objectUrl=URL.createObjectURL(f);
 try{await editor.load(objectUrl);report(`Loaded ${f.name}. Use transform gizmos and export.`);}catch(err){report('Import error: '+err.message);}
});
document.getElementById('export').addEventListener('click',async()=>{
 try{const result=await editor.exportScene();if(!(result instanceof Blob))throw Error('Unknown GLB export return');const u=URL.createObjectURL(result);const a=document.createElement('a');a.href=u;a.download='scene-edited.glb';a.click();setTimeout(()=>URL.revokeObjectURL(u),1000);report('Export requested. Re-import file to verify full parity.');}catch(e){report('Export error: '+e.message);}
});
document.getElementById('dispose').addEventListener('click',()=>{editor?.dispose();editor=null;report('Disposed. Refresh to reinitialize.');});
window.addEventListener('beforeunload',()=>{editor?.dispose();if(objectUrl)URL.revokeObjectURL(objectUrl);});
