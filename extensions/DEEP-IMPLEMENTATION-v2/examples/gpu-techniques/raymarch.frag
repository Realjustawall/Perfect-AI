// GLSL ES 3.00 educational SDF fragment shader. Requires THREE RawShaderMaterial or native WebGL2 uniform binding.
#version 300 es
precision highp float;
uniform vec2 uResolution;
uniform float uTime;
out vec4 outColor;
float sdSphere(vec3 p, float r){return length(p)-r;}
float sdBox(vec3 p, vec3 b){vec3 q=abs(p)-b;return length(max(q,vec3(0.0)))+min(max(q.x,max(q.y,q.z)),0.0);}
float mapScene(vec3 p){
  float sphere=sdSphere(p,0.85);
  float box=sdBox(p-vec3(sin(uTime*.3)*.3,0.,0.),vec3(.55));
  return min(sphere,box);
}
vec3 normalAt(vec3 p){
  float e=.001;
  return normalize(vec3(
    mapScene(p+vec3(e,0,0))-mapScene(p-vec3(e,0,0)),
    mapScene(p+vec3(0,e,0))-mapScene(p-vec3(0,e,0)),
    mapScene(p+vec3(0,0,e))-mapScene(p-vec3(0,0,e))));
}
void main(){
 vec2 uv=(gl_FragCoord.xy*2.0-uResolution.xy)/min(uResolution.x,uResolution.y);
 vec3 rayOrigin=vec3(0,0,4);vec3 rayDir=normalize(vec3(uv,-1.9));
 float dist=0.0;bool hit=false;vec3 p=rayOrigin;
 for(int i=0;i<72;i++){
   p=rayOrigin+rayDir*dist;float d=mapScene(p);
   if(d<0.0015){hit=true;break;}
   dist+=clamp(d,0.004,0.5);
   if(dist>10.0)break;
 }
 vec3 color=vec3(.055);
 if(hit){vec3 n=normalAt(p);float diffuse=max(.0,dot(n,normalize(vec3(1,2,3))));color=mix(vec3(.14),vec3(.95),pow(diffuse,.8));}
 outColor=vec4(pow(color,vec3(1.0/2.2)),1.);
}
