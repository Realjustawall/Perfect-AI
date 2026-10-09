# mobile-poster-fallback — independent recipe

**Domain:** Advanced 3D / R3F / GPU  
**Why it exists:** Maintain exact functional content and CTA when WebGL unavailable or reduced data enabled.

## Configuration and boundaries
Inputs: scene brief, geometry/asset rights, GPU tier assumptions, content and accessible fallback.

## Step-by-step execution
1. State observable success behavior in one sentence: Maintain exact functional content and CTA when WebGL unavailable or reduced data enabled.
2. Inspect user-owned source and choose target platform and installed versions. Do not guess API compatibility.
3. Implement the exact behavior in an isolated named module, keeping a testable input/output contract.
4. Build a fallback without external renderers or pointer-only interaction.
5. Connect semantic state changes to engine state, not vice versa. One owner per property.
6. Add acceptance tests for error, resize, rollback and RTL/reduced-motion.
7. Compare baseline and modified screenshot/trace where visual; attach actual evidence when run.

## Execution pattern
Implementation: prefer one R3F Canvas, useFrame delta clamp, stable geometry/material buffers; choose technique appropriate to GPU tier; bound shader steps and dispose resources.

## Required acceptance
1. No WebGL still presents important text, meaning and CTA.
2. Low GPU tier uses fewer geometry samples/passes/texture bytes and bounded frame budget.
3. Resize/unmount/context loss create no leaked buffers, RAF loops or subscriptions.

## Example baseline (adapt to this topic)
```tsx
// R3F: stable scene ownership; keep DOM content outside Canvas.
function Rotator() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => { if (ref.current) ref.current.rotation.y += Math.min(delta, 0.05) * 0.25 });
  return <mesh ref={ref}><icosahedronGeometry args={[1, 3]}/><meshStandardMaterial color="#dedede" roughness={0.45}/></mesh>;
}
// Use <Canvas dpr={[1, 1.6]} frameloop="always"><ambientLight intensity={1}/><Rotator/></Canvas>
// Add a semantic HTML title and static poster outside the scene; dispose owned render targets.
```

## Risk checklist
- No invented asset licenses, untested library version, unexplained loss of keyboard behavior.
- No extra network services or MCP requirement.
- Never silently treat an example snippet as a fully built standalone product.
- Log execution status as PASS / FAIL / NOT RUN separately.

## Source references
- [three](https://threejs.org/docs/)
- [r3f](https://r3f.docs.pmnd.rs/)
- [drei](https://drei.docs.pmnd.rs/)
- [wcag](https://www.w3.org/TR/WCAG22/)
