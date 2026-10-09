/** Fully local editor for native Three scenes. Stays independent of Threepipe and React. */
import {createEditorStore,blankObject} from '../core/scene-state.mjs';
export async function createNativeSceneEditor({canvas,onSelection=()=>{}}){
 const THREE=await import('three');
 const {OrbitControls}=await import('three/addons/controls/OrbitControls.js');
 const {TransformControls}=await import('three/addons/controls/TransformControls.js');
 const {GLTFLoader}=await import('three/addons/loaders/GLTFLoader.js');
 const renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:false});renderer.setPixelRatio(Math.min(devicePixelRatio||1,2));
 const scene=new THREE.Scene();scene.background=new THREE.Color('#10141f');
 scene.add(new THREE.HemisphereLight(0xc5ddff,0x182136,3));
 const key=new THREE.DirectionalLight(0xffffff,3);key.position.set(4,7,5);scene.add(key);
 const grid=new THREE.GridHelper(15,15,0x51627a,0x2a3243);scene.add(grid);
 const camera=new THREE.PerspectiveCamera(45,1,0.1,400);camera.position.set(5,4,7);
 const orbit=new OrbitControls(camera,canvas);orbit.enableDamping=true;
 const gizmo=new TransformControls(camera,canvas);
 gizmo.addEventListener('dragging-changed',e=>{orbit.enabled=!e.value; if(!e.value && selected?.userData.PerfectAIId){const id=selected.userData.PerfectAIId;store.transact(doc=>{const record=doc.objects.find(x=>x.id===id);if(record){record.position=selected.position.toArray();record.rotation=[selected.rotation.x,selected.rotation.y,selected.rotation.z];record.scale=selected.scale.toArray();}});}});
 scene.add(gizmo.getHelper());
 const store=createEditorStore();const map=new Map();let selected=null,disposed=false,raf=0;
 const ray=new THREE.Raycaster(),point=new THREE.Vector2(),loader=new GLTFLoader();
 const resize=()=>{const w=canvas.clientWidth||1,h=canvas.clientHeight||1;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();};
 const obs=new ResizeObserver(resize);obs.observe(canvas);resize();
 function createShape(type,color){if(type==='light'){const l=new THREE.PointLight(color,12,8);return l;}
  if(type==='camera')return new THREE.Group();
  const geo=new THREE.BoxGeometry(1,1,1),mat=new THREE.MeshStandardMaterial({color,metalness:0.12,roughness:.4});return new THREE.Mesh(geo,mat);
 }
 function sync(){const doc=store.read(),ids=new Set(doc.objects.map(x=>x.id));
  for(const [id,obj] of map)if(!ids.has(id)){if(selected===obj){gizmo.detach();selected=null;}scene.remove(obj);obj.traverse?.(child=>{child.geometry?.dispose?.();if(!Array.isArray(child.material))child.material?.dispose?.();});map.delete(id);}
  for(const o of doc.objects){let obj=map.get(o.id);if(!obj){obj=createShape(o.type,o.color);obj.userData.PerfectAIId=o.id;map.set(o.id,obj);scene.add(obj);}
   obj.position.fromArray(o.position);obj.rotation.set(...o.rotation);obj.scale.fromArray(o.scale);
   if(obj.material?.color)obj.material.color.set(o.color);
  }
 }
 const unsub=store.subscribe(sync);
 function onPointer(e){const b=canvas.getBoundingClientRect();point.set(2*(e.clientX-b.left)/b.width-1,1-2*(e.clientY-b.top)/b.height);ray.setFromCamera(point,camera);
  const hits=ray.intersectObjects([...map.values()],true);let hit=hits[0]?.object;
  while(hit&&!hit.userData.PerfectAIId)hit=hit.parent;
  selected=hit??null;if(selected)gizmo.attach(selected);else gizmo.detach();onSelection(selected?.userData.PerfectAIId??null);
 }
 canvas.addEventListener('pointerdown',onPointer);
 function animate(){if(disposed)return;raf=requestAnimationFrame(animate);orbit.update();renderer.render(scene,camera);}
 animate();
 function addBox(){const id='mesh_'+Math.random().toString(36).slice(2,9);store.transact(d=>d.objects.push(blankObject(id)));return id;}
 async function importGLB(file){if(!(file instanceof File)||!(/\.(glb|gltf)$/i.test(file.name)))throw Error('use a local glb/gltf');
   if(file.size>50*1024*1024)throw Error('asset too large');const url=URL.createObjectURL(file);
   try{const gltf=await loader.loadAsync(url);scene.add(gltf.scene);return gltf.scene;}finally{URL.revokeObjectURL(url);}
 }
 const setMode=(mode)=>{if(!['translate','rotate','scale'].includes(mode))throw Error('invalid mode');gizmo.setMode(mode);};
 function dispose(){if(disposed)return;disposed=true;cancelAnimationFrame(raf);canvas.removeEventListener('pointerdown',onPointer);obs.disconnect();unsub();gizmo.detach();gizmo.dispose();orbit.dispose();renderer.dispose();}
 return {scene,camera,renderer,store,addBox,setMode,importGLB,dispose,get selectedId(){return selected?.userData.PerfectAIId??null;}};
}
