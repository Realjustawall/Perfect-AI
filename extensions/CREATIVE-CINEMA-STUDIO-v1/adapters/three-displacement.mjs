/** Optional Three.js integration. Supply the app's own compatible `THREE` object. */
export function createImageDisplacementMaterial(THREE,texture,{strength=.085,speed=.24}={}){
 if(!THREE?.ShaderMaterial||!texture)throw new Error('Three.js ShaderMaterial and texture are required');
 return new THREE.ShaderMaterial({transparent:true,uniforms:{uTexture:{value:texture},uProgress:{value:0},uTime:{value:0},uPointer:{value:new THREE.Vector2(0,0)},uStrength:{value:strength},uSpeed:{value:speed}},vertexShader:/* glsl */`
 varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}
 `,fragmentShader:/* glsl */`
 precision highp float;uniform sampler2D uTexture;uniform float uProgress,uTime,uStrength,uSpeed;uniform vec2 uPointer;varying vec2 vUv;
 void main(){vec2 uv=vUv;float p=clamp(uProgress,0.,1.);vec2 wave=vec2(sin((uv.y+uPointer.y*.25)*15.+uTime*uSpeed),cos((uv.x+uPointer.x*.25)*17.+uTime*uSpeed));uv=clamp(uv+wave*uStrength*p,vec2(.001),vec2(.999));vec4 color=texture2D(uTexture,uv);gl_FragColor=color;}
 `});
}
export function disposeImageDisplacementMaterial(material,{ownsTexture=false}={}){if(!material)return;const texture=material.uniforms?.uTexture?.value;material.dispose?.();if(ownsTexture)texture?.dispose?.();}
