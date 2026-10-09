import argparse,json,re
from pathlib import Path
p=argparse.ArgumentParser();p.add_argument('task');p.add_argument('--limit',type=int,default=12);a=p.parse_args()
root=Path(__file__).resolve().parent.parent/'skills'
keys={
 'text': ['text','title','headline','typography','متن','تیتر','حروف','انیمیشن متن'],
 'scroll':['scroll','wheel','pin','scrub','اسکرول','اسکرین'],
 'pointer':['mouse','cursor','hover','drag','pointer','موس','ماوس','اشاره‌گر'],
 'three':['3d','three','gltf','camera','model','مدل','سه بعدی','سه‌بعدی'],
 'fonts':['font','language','rtl','ltr','فارسی','انگلیسی','فونت','دو زبانه'],
 'multiagent':['agents','brand','review','critic','identity','ایجنت','نقد','هویت بصری'],
}
found=[];q=a.task.lower()
for f in root.glob('*/SKILL.md'):
 name=f.parent.name
 family=next((k for k in keys if name.startswith('ztx5-'+k+'-')),None)
 if not family:continue
 title=f.read_text(encoding='utf-8').split('# ',1)[-1].split('\n',1)[0]
 score=sum(4 for word in keys[family] if word in q)+sum(2 for tok in name.split('-') if len(tok)>3 and tok in q)
 if score:found.append((score,name,title,str(f)))
for _,name,title,path in sorted(found,reverse=True)[:max(1,a.limit)]:print(f'{name} | {title} | {path}')
