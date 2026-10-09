/** Reference implementation. Requires compatible react, react-dom, three, @react-three/fiber. */
import React, { Suspense, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';

type Tier = 'low' | 'medium' | 'high';
const segments: Record<Tier, number> = { low: 24, medium: 48, high: 96 };
function Mesh({ tier, reduced }: { tier: Tier; reduced: boolean }) {
  const ring = useRef<THREE.Mesh>(null);
  useFrame((_, dt) => {
    if (ring.current && !reduced) {
      ring.current.rotation.y += Math.min(dt, 0.045) * 0.16;
      ring.current.rotation.z += Math.min(dt, 0.045) * 0.05;
    }
  });
  return <group>
    <ambientLight intensity={1.15} />
    <directionalLight position={[4, 6, 6]} intensity={2.4} />
    <mesh ref={ring} rotation={[0.7, 0.2, 0]}>
      <torusKnotGeometry args={[1.2, 0.29, segments[tier] * 3, segments[tier] / 2, 2, 3]} />
      <meshStandardMaterial color="#dedede" metalness={0.55} roughness={0.23} />
    </mesh>
  </group>;
}
function Fit({ compact }: { compact: boolean }) {
  const { camera } = useThree();
  useEffect(() => {
    if (camera instanceof THREE.PerspectiveCamera) {
      camera.position.set(0, 0, compact ? 7.8 : 6.2);
      camera.fov = compact ? 46 : 43;
      camera.updateProjectionMatrix();
    }
  }, [camera, compact]);
  return null;
}
export function AdaptiveOrbit({ quality='medium', reducedMotion=false, compact=false }: { quality?: Tier; reducedMotion?: boolean; compact?: boolean }) {
  const [failed,setFailed]=useState(false);
  useEffect(()=>{ if (typeof window === 'undefined') return;
    const canvas=document.createElement('canvas');
    try {const gl=canvas.getContext('webgl2') || canvas.getContext('webgl');if(!gl)setFailed(true)}catch {setFailed(true)}
  },[]);
  return <section aria-label="Interactive geometric art" style={{position:'relative',height:'min(68svh,640px)',minHeight:260}}>
    <span style={{position:'absolute',inlineSize:1,blockSize:1,overflow:'hidden',clipPath:'inset(50%)'}}>
      A metallic abstract torus knot symbolizes the three-dimensional creation engine.
    </span>
    {failed ? <div role="img" aria-label="3D artwork unavailable; abstract orbit illustration">◯</div> :
      <Canvas dpr={quality==='low' ? 1 : quality==='medium' ? [1,1.35] : [1,1.7]} camera={{position:[0,0,7],fov:45}} gl={{antialias:quality!=='low'}} onCreated={({gl})=>{
        gl.domElement.addEventListener('webglcontextlost',()=>setFailed(true),{once:true});
      }}>
        <Suspense fallback={null}><Fit compact={compact}/><Mesh tier={quality} reduced={reducedMotion}/></Suspense>
      </Canvas>}
  </section>;
}
