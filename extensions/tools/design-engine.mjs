#!/usr/bin/env node
import fs from 'node:fs';

const DOMAIN_TERMS={
'design-intelligence':'strategy brief audience business style brand information architecture layout unique anti cliché decision',
'advanced-3d':'3d three webgl webgpu r3f react three fiber drei shader particle mesh object physics fluid raymarch hdr environment',
'cinematic-motion':'animation animejs animate gsap rive lottie theatre cinematic timeline scroll motion morph audio kinetic',
'adaptive-responsive':'responsive mobile tablet ultrawide foldable container query rtl ltr zoom touch keyboard adaptive viewport',
'color-intelligence':'color colour palette theme tokens oklch contrast monochrome grayscale black white brand wcag p3',
'visual-reverse':'rebuild clone reference screenshot pixel comparison reverse engineering capture existing site',
'component-system':'component react headless radix shadcn ark storybook component library accessibility design system',
'advanced-typography':'font persian latin type typography variable font line height text animation bilingual',
'performance-auto':'performance speed fps gpu optimize lighthouse lcp inp cls bundle memory low power',
'visual-qa':'test playwright screenshot audit qa comparison bugs fix browser accessibility regression',
'interaction-system':'interaction hover pointer cursor magnetic drag gesture swipe click touch feedback',
'product-systems':'saas dashboard ecommerce store landing shop blog portfolio documentation admin product website',
'design-to-code':'figma export design-to-code svg image sketch tokens auto layout convert code',
'premium-critic':'critique premium design review look beautiful ugly cliché anti-ai design quality',
'skill-trust-security':'security provenance skill install source trust license supply chain audit risk'
};
const STOP=new Set('and the of for on in to with a from web site application product build implement create make website page all new use without no is at responsive design'.split(' '));
function tokenize(input){return (String(input||'').toLowerCase().replace(/[\u200c_/-]/g,' ').match(/[\p{L}\p{N}]+/gu)||[]).filter(w=>w.length>1&&!STOP.has(w));}
function normalizedSet(x){return new Set(tokenize(x));}
function scoreSkill(skill,words,domains){const txt=normalizedSet(`${skill.name} ${skill.description}`);let s=0;for(const w of words){if(txt.has(w))s+=2.5;else if(w.length>4&&[...txt].some(t=>t.startsWith(w)))s+=.6;}for(const d of domains){if(skill.name.includes(d))s+=8;}return s;}
export function decide(brief,skills=[]){
 const content=Object.values(brief).filter(v=>typeof v==='string'||Array.isArray(v)).join(' ');
 const words=tokenize(content);
 const domainScores=Object.entries(DOMAIN_TERMS).map(([name,terms])=>({name,score:tokenize(terms).filter(t=>words.some(w=>w===t||w.startsWith(t))).length})).sort((a,b)=>b.score-a.score);
 const best=domainScores.filter(x=>x.score>0).slice(0,3).map(x=>x.name);
 if(!best.length)best.push('design-intelligence','adaptive-responsive','visual-qa');
 // Every job gets accessibility/review and a small deliberately chosen selection.
 if(!best.includes('visual-qa'))best.push('visual-qa');
 const scored=skills.map(skill=>({...skill,score:scoreSkill(skill,words,best)})).filter(x=>x.score>0).sort((a,b)=>b.score-a.score||a.name.localeCompare(b.name));
 const selected=[];
 for(const name of ['perfect-ai-master','ztx3-nexus-master',...best.map(d=>'ztx3-'+d)]) {let s=skills.find(s=>s.name===name);if(s&&!selected.some(x=>x.name===name))selected.push({...s,score:999});}
 for(const s of scored){if(selected.length>=7)break;if(!selected.some(x=>x.name===s.name))selected.push(s);}
 return {
    userGoal:brief.goal||'not supplied', audience:brief.audience||'unspecified: do not invent',
    locale:brief.locale||'fa-IR', forbiddenStyles:brief.forbiddenStyles||[],
    selectedDomains:best, selectedSkills:selected.map(({name,path,score})=>({name,path,score})),
    typography:'Choose Persian + Latin family after comparing actual glyph metrics and available license',
    color:'Run color-intelligence.mjs to compare 5 accessible palettes; honor explicit monochrome policy',
    motion:'Assign exactly one owner to each transform; CSS for simple hover, Anime.js for DOM, Three.js for 3D; add alternatives only if needed',
    responsive:'Content-first container queries, RTL/LTR, 320px, 400% zoom, touch/keyboard, reduced motion and WebGL fallback',
    validation:['build','keyboard','responsive viewport matrix','color contrast','reduced motion','run visual assertions with deterministic frames'],
    evidence:'Automated route is advisory: decisions require human visual review; no fake usability data.'
 };
}
function args(){let a=process.argv.slice(2);return {brief:a[a.indexOf('--brief')+1],catalog:a[a.indexOf('--catalog')+1]};}
if(process.argv[1]&&process.argv[1].endsWith('design-engine.mjs')){
  const a=args(); if(!a.brief||!a.catalog){console.error('Usage: node design-engine.mjs --brief brief.json --catalog skill-index.json');process.exit(2)}
  console.log(JSON.stringify(decide(JSON.parse(fs.readFileSync(a.brief,'utf8')),JSON.parse(fs.readFileSync(a.catalog,'utf8'))),null,2));
}
