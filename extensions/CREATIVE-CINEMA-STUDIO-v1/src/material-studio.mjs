import {clamp} from './utils.mjs';
export const MATERIAL_PRESETS={
 glass:{metalness:0,roughness:.06,transmission:.95,ior:1.5,thickness:.2,clearcoat:.4,opacity:1},
 chrome:{metalness:1,roughness:.08,clearcoat:.1,transmission:0,opacity:1},
 liquid:{metalness:.05,roughness:.03,transmission:.7,ior:1.33,thickness:.3,clearcoat:1,opacity:1},
 fabric:{metalness:0,roughness:1,transmission:0,sheen:1,sheenRoughness:.7,opacity:1},
 paper:{metalness:0,roughness:.94,transmission:0,opacity:1},
 hologram:{metalness:.5,roughness:.22,iridescence:1,iridescenceIOR:1.3,clearcoat:.5,opacity:1}
};
export function materialOptions(name,overrides={}){if(!(name in MATERIAL_PRESETS))throw new Error('unknown preset');const result={...MATERIAL_PRESETS[name],...overrides};for(const k of ['metalness','roughness','transmission','clearcoat','iridescence','sheen','sheenRoughness','opacity'])if(k in result)result[k]=clamp(result[k]);if('ior'in result)result.ior=Math.min(2.333,Math.max(1,result.ior));return result}
/** Passing matching Three.js dependency is required, rather than bundling copyrighted vendor code. */
export function createThreeMaterial(THREE,name,overrides={}){if(!THREE?.MeshPhysicalMaterial)throw new Error('Three.js MeshPhysicalMaterial required');return new THREE.MeshPhysicalMaterial(materialOptions(name,overrides));}
export function lightResponse({pointerX=0,pointerY=0,ambient=.4}={}){return {keyRotationY:clamp(pointerX,-1,1)*.25,keyRotationX:clamp(pointerY,-1,1)*.25,ambient:clamp(ambient,0,2)}}
