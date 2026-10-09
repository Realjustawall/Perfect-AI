// WebGPU compute kernel reference, not a standalone browser renderer.
// Caller must create storage buffers and dispatch ceil(particleCount/64), including bounds check.
struct Particle { pos: vec2f, vel: vec2f };
struct Params { delta: f32, count: u32, drag: f32, pad: f32 };
@group(0) @binding(0) var<storage, read> inputParticles: array<Particle>;
@group(0) @binding(1) var<storage, read_write> outputParticles: array<Particle>;
@group(0) @binding(2) var<uniform> params: Params;
@compute @workgroup_size(64)
fn main(@builtin(global_invocation_id) gid: vec3u) {
 let i=gid.x;
 if(i>=params.count){return;}
 var p=inputParticles[i];
 let dt=clamp(params.delta,0.0,0.05);
 p.vel *= max(0.0,1.0-params.drag*dt);
 p.pos += p.vel*dt;
 outputParticles[i]=p;
}
