#!/usr/bin/env python3
"""Conservative, explainable skill router, no dependency, no API or MCP."""
import argparse,json,re,sys
ROUTES={
 'ztgc-impeccable-design-craft':('design critique audit polish improve style UX visual typography color', 'Design improvements'),
 'ztgc-emil-design-engineering':('motion animation easing timing transition gesture spring hover', 'Animation craft'),
 'ztgc-taste-creative-direction':('unique originality distinctive bold editorial brutalist art direction concept', 'Creative art direction'),
 'ztgc-shadcn-ui-workflow':('shadcn ui component registry forms table dialog select button dashboard react', 'shadcn UI integration'),
 'ztgc-agent-browser-cli':('browser navigate click screenshot explore page test web', 'Interactive browser QA'),
 'ztgc-react-doctor-cli':('react performance static analysis diagnostics build lint architecture doctor', 'React diagnostics'),
 'ztgc-remotion-production':('remotion video composition footage mp4 render subtitles audio cinematic', 'React video rendering'),
 'ztgc-shadcn-improve-advisor':('audit repository architecture read only proposal roadmap planning prioritization', 'Read-only architecture advisor'),
 'ztgc-emil-prototype-variants':('prototype variations variants alternatives chooser experiment compare UI', 'Visual design exploration')
}
def route(task,framework='',count=3):
 s=(task+' '+framework).lower();tokens=set(re.findall(r'[\w-]+',s));rank=[]
 for name,(keywords,why) in ROUTES.items():
  words=set(keywords.lower().split());overlap=sorted(tokens & words);score=len(overlap)
  if name=='ztgc-shadcn-ui-workflow' and framework.lower() not in ('react','next','vite','nextjs','react-native'):score=max(0,score-1)
  if name=='ztgc-remotion-production' and not tokens.intersection({'video','render','mp4','remotion','footage'}):score=0
  if name=='ztgc-shadcn-improve-advisor' and tokens.intersection({'implement','build','code'}):score=0
  if score:rank.append({'skill':name,'score':score,'reason':why,'matching_terms':overlap})
 rank.sort(key=lambda x:(-x['score'],x['skill']))
 return {'task':task,'framework':framework,'selected':rank[:max(1,count)],'note':'Heuristic relevance only; not a verified skill-quality benchmark.'}
def main():
 a=argparse.ArgumentParser();a.add_argument('--task',required=True);a.add_argument('--framework',default='');a.add_argument('--count',type=int,default=3);a.add_argument('--output');x=a.parse_args();report=route(x.task,x.framework,x.count);b=json.dumps(report,ensure_ascii=False,indent=2)
 if x.output:
  from pathlib import Path
  p=Path(x.output);p.parent.mkdir(parents=True,exist_ok=True)
  if p.exists():raise SystemExit('Refusing to overwrite existing report: '+str(p))
  p.write_text(b+'\n',encoding='utf8')
 else:print(b)
if __name__=='__main__':main()
