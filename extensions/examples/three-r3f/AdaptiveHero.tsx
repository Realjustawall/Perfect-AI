import React, { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import './AdaptiveHero.css';

type Tier = 'static' | 'low' | 'medium' | 'high';
const CONFIG: Record<Tier, { count: number; dpr: number }> = {
  static: { count: 0, dpr: 1 }, low: { count: 160, dpr: 1 },
  medium: { count: 640, dpr: 1.3 }, high: { count: 1600, dpr: 1.75 },
};
function useDeviceTier(): Tier {
  const [tier, setTier] = useState<Tier>('low');
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const data = navigator as Navigator & { connection?: { saveData?: boolean } };
    const safeUpdate = () => {
      if (mq.matches || data.connection?.saveData) setTier('static');
      else if (Math.min(window.innerWidth, window.innerHeight) < 520) setTier('low');
      else setTier('medium');
    };
    safeUpdate();
    mq.addEventListener('change', safeUpdate); window.addEventListener('resize', safeUpdate);
    return () => { mq.removeEventListener('change', safeUpdate); window.removeEventListener('resize', safeUpdate); };
  }, []);
  return tier;
}
function Orb({ tier }: { tier: Exclude<Tier,'static'> }) {
  const mesh = useRef<THREE.Mesh>(null);
  const particles = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    // Deterministic latitude/longitude distribution: no random frame-to-frame jitter.
    const count=CONFIG[tier].count;
    const a = new Float32Array(count * 3);
    for(let i=0;i<count;i++){
      const y=1-(i+.5)*2/count, r=Math.sqrt(Math.max(0,1-y*y)), theta=i*2.399963229728653;
      const radius=1.35+Math.sin(i*.12)*.055;
      a[3*i]=Math.cos(theta)*r*radius;
      a[3*i+1]=y*radius;
      a[3*i+2]=Math.sin(theta)*r*radius;
    }
    return a;
  },[tier]);
  useFrame((state,delta)=>{
    const d=Math.min(.05,delta);
    if(mesh.current) {mesh.current.rotation.y+=d*.21;mesh.current.rotation.x=.14*Math.sin(state.clock.elapsedTime*.25);}
    if(particles.current)particles.current.rotation.y-=d*.09;
  });
  return <group>
    <mesh ref={mesh}>
      <icosahedronGeometry args={[1.08, 5]}/>
      <meshStandardMaterial color="#e6e6e6" metalness={.3} roughness={.22} wireframe transparent opacity={.38}/>
    </mesh>
    <points ref={particles}>
      <bufferGeometry><bufferAttribute attach="attributes-position" array={positions} itemSize={3} count={positions.length/3}/></bufferGeometry>
      <pointsMaterial color="#ffffff" size={.019} sizeAttenuation transparent opacity={.7} depthWrite={false}/>
    </points>
  </group>;
}
class CanvasErrorBoundary extends React.Component<{ children: React.ReactNode },{error:boolean}> {
  state={error:false};static getDerivedStateFromError(){return {error:true};}
  render(){return this.state.error?<div className="zt3d__poster" aria-hidden="true">◯</div>:this.props.children;}
}
export function AdaptiveHero(){
  const tier=useDeviceTier();
  return <section className="zt3d" dir="rtl" aria-labelledby="zt3d-title">
    <div className="zt3d__canvas" aria-hidden="true">
      <CanvasErrorBoundary>
        {tier==='static'?<div className="zt3d__poster">◯</div>:<Canvas dpr={[1,CONFIG[tier].dpr]} camera={{position:[0,0,4.2],fov:46}} gl={{alpha:true,antialias:tier!=='low'}} fallback={<div className="zt3d__poster">◯</div>}>
          <ambientLight intensity={1.15}/><directionalLight position={[2,4,6]} intensity={2.0}/>
          <Suspense fallback={null}><Orb tier={tier}/></Suspense>
        </Canvas>}
      </CanvasErrorBoundary>
    </div>
    <div className="zt3d__copy"><p className="zt3d__eyebrow">Perfect_AI / DESIGN SYSTEM</p>
      <h1 id="zt3d-title">شاهکار خلق کنید</h1>
      <p>سه‌بعدی واقعی با رابطی سریع، خوانا و سازگار با دستگاه‌های مختلف.</p>
      <a href="#features" className="zt3d__link">مشاهده قابلیت‌ها ←</a></div>
  </section>;
}
