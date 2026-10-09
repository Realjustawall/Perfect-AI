/** Wrapper for gltf-transform CLI. No silent overwrites or synthetic success. */
import fs from 'node:fs';import {spawnSync} from 'node:child_process';import crypto from 'node:crypto';import path from 'node:path';
const args=Object.fromEntries(process.argv.slice(2).reduce((pairs,x,i,arr)=>(x.startsWith('--')&&pairs.push([x.slice(2),arr[i+1]]),pairs),[]));
const input=args.input,output=args.output,profile=args.profile||'mobile',codec=args.codec||'meshopt';
if(!input||!output||!['mobile','desktop'].includes(profile)||!['meshopt','draco'].includes(codec))throw Error('Usage: --input a.glb --output b.glb [--profile mobile|desktop] [--codec meshopt|draco]');
if(!fs.existsSync(input)||fs.existsSync(output))throw Error('Source missing or target exists (never overwrite)');
if(path.resolve(input)===path.resolve(output))throw Error('Refuse in-place edit');
const sha=file=>crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
const binary=process.platform==='win32'?'npx.cmd':'npx';
const cliArgs=['--no-install','gltf-transform','optimize',input,output,'--compress',codec,'--texture-compress',profile==='mobile'?'ktx2':'webp','--texture-size',profile==='mobile'?'1024':'2048'];
console.log('RUN',binary,cliArgs.join(' '));
const result=spawnSync(binary,cliArgs,{stdio:'inherit',shell:process.platform==='win32'});
if(result.error||result.status!==0||!fs.existsSync(output)){if(fs.existsSync(output))fs.rmSync(output);throw Error('glTF Transform failed. Install @gltf-transform/cli and optional KTX2 tools; verify CLI version.');}
const old=fs.statSync(input).size,now=fs.statSync(output).size;
const report={input,output,profile,codec,inputBytes:old,outputBytes:now,ratio:now/old,inputSHA256:sha(input),outputSHA256:sha(output),warning:'Validate geometry/skin/morph/UV animation and load with decoder; compression is not visual validation.'};
fs.writeFileSync(output+'.report.json',JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report,null,2));
