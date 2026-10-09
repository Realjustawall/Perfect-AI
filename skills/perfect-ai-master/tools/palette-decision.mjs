import {choosePalette,contrastRatio,oklchToHex,cssTokens,compositeHex} from './color-engine.mjs';
import fs from 'node:fs';import path from 'node:path';import {fileURLToPath} from 'node:url';
export function constructDesignSystem(config={}){
 const base=choosePalette(config);const p=base.palette;
 const dark=base.mode==='dark';
 const primary=p.accent;
 const overlays=[.05,.12,.22].map(a=>compositeHex(dark?'#ffffff':'#000000',p.bg,a));
 const semantic={
  background:p.bg,surface:p.surface,surfaceElevated:p.surfaceRaised,foreground:p.text,foregroundMuted:p.muted,
  border:p.border,action:primary,actionForeground:p.onAccent,focus:p.focus,hoverSurface:overlays[1],selection:p.selection,
  error:base.strict?(dark?'#ededed':'#1b1b1b'):oklchToHex(dark?.78:.47,.16,26),
  success:base.strict?(dark?'#e8e8e8':'#222222'):oklchToHex(dark?.78:.46,.15,153),
  warning:base.strict?(dark?'#d4d4d4':'#333333'):oklchToHex(dark?.79:.5,.12,83),
 };
 const tests=[
  ['body',semantic.foreground,semantic.background,4.5],
  ['muted',semantic.foregroundMuted,semantic.background,4.5],
  ['button',semantic.actionForeground,semantic.action,4.5],
  ['border',semantic.border,semantic.surface,3],
  ['focus',semantic.focus,semantic.background,3],
  ['hovered text',semantic.foreground,semantic.hoverSurface,4.5],
 ];
 const audit=tests.map(([name,fg,bg,threshold])=>({name,foreground:fg,background:bg,threshold,ratio:Number(contrastRatio(fg,bg).toFixed(3)),pass:contrastRatio(fg,bg)>=threshold}));
 // Semantic hues alone never convey status, so in strict mono add labels/patterns.
 const warnings=[...base.warnings,...audit.filter(x=>!x.pass).map(x=>`${x.name}: contrast ${x.ratio} < ${x.threshold}`)];
 const tokens=':root{\n'+Object.entries(semantic).map(([k,v])=>`  --color-${k.replace(/[A-Z]/g,m=>'-'+m.toLowerCase())}: ${v};`).join('\n')+'\n}\n';
 return {brief:config,semantic,audit,warnings,css:tokens,rationale:base.rationale,patternRequiredForStatus:base.strict};
}
if(process.argv[1] && fileURLToPath(import.meta.url)===path.resolve(process.argv[1])){
 const args=process.argv.slice(2);const get=(flag,fallback)=>args.includes(flag)?args[args.indexOf(flag)+1]:fallback;
 const config={mode:get('--mode','dark'),product:get('--product','developer'),monochrome:args.includes('--monochrome')};
 const result=constructDesignSystem(config);
 const out=get('--out',null);
 if(out){fs.mkdirSync(out,{recursive:true});fs.writeFileSync(path.join(out,'tokens.css'),result.css);fs.writeFileSync(path.join(out,'palette-report.json'),JSON.stringify({...result,css:undefined},null,2));console.log(`Generated ${out}; violations: ${result.warnings.length}`); if(result.warnings.length)process.exitCode=1;}
 else console.log(JSON.stringify({...result,css:undefined},null,2));
}
