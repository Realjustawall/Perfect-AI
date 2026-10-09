import React, { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';

function HeroObject({compact=false,reduceMotion=false}) {
 const ref=useRef();const {invalidate}=useThree();
 useFrame((state,delta)=>{if(!ref.current||reduceMotion)return;
   ref.current.rotation.y+=delta*.18;ref.current.rotation.z+=delta*.06;
 });
 return <group ref={ref}>
  <mesh><icosahedronGeometry args={[1.3,compact?1:4]}/><meshStandardMaterial metalness={.75} roughness={.28} color="#eeeeee" flatShading={compact}/></mesh>
  {!compact&&[1.55,1.8].map((r,i)=><mesh key={i} rotation={[i?1.1:.6,i*.7,.3]}>
    <torusGeometry args={[r,.009,3,96]}/><meshBasicMaterial color="#888888" />
  </mesh>)}
 </group>;
}
function ResponsiveCamera({compact}) {
 const {camera,size}=useThree();
 useEffect(()=>{camera.position.set(compact?0:1,compact?0:0.2,compact?5:4.7);camera.lookAt(0,0,0);
    camera.aspect=size.width/Math.max(1,size.height);camera.updateProjectionMatrix();},[camera,size,compact]);
 return null;
}
export default function Adaptive3DHero(){
 const [compact,setCompact]=useState(false),[reduced,setReduced]=useState(false),container=useRef(null);
 useEffect(()=>{
   const mq=matchMedia('(prefers-reduced-motion: reduce)');
   const updateMotion=()=>setReduced(mq.matches);updateMotion();mq.addEventListener('change',updateMotion);
   const observer=new ResizeObserver(([entry])=>setCompact(entry.contentRect.width<650));
   if(container.current)observer.observe(container.current);
   return ()=>{mq.removeEventListener('change',updateMotion);observer.disconnect()};
 },[]);
 return <section ref={container} aria-label="Perfect AI three dimensional hero" style={{position:'relative',minHeight:'min(85svh,750px)',width:'100%'}}>
  <Canvas dpr={[.75,compact?1.25:1.75]} frameloop={reduced?'demand':'always'}
    fallback={<div role="img" aria-label="Abstract monochrome sculpture" />}>
   <color attach="background" args={['#090909']}/>
   <ambientLight intensity={1.8}/><directionalLight position={[4,5,8]} intensity={2}/>
   <Suspense fallback={null}><ResponsiveCamera compact={compact}/><HeroObject compact={compact} reduceMotion={reduced}/></Suspense>
  </Canvas>
 </section>;
}
