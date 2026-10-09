import {choosePalette,cssTokens} from './color-engine.mjs';
const args=process.argv.slice(2); const mode=args.includes('--light')?'light':'dark';
const strict=args.includes('--monochrome');const product=args.find(x=>x.startsWith('--product='))?.split('=')[1]||'developer';
const result=choosePalette({mode,monochrome:strict,product});
console.log(JSON.stringify(result,null,2));
console.log('\nCSS:\n'+cssTokens(result.palette));
if(result.warnings.length)process.exitCode=2;
