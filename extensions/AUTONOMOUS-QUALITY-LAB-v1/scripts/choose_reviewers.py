#!/usr/bin/env python3
"""Deterministically pick reviewers by site type and actual feature flags."""
import argparse,json,pathlib
BASE=['design_critic','design_advocate','brand_guardian','accessibility','mobile_performance','visual_regression']
SITE={
 'landing':['conversion','copywriting','motion_director','originality'],
 'portfolio':['storytelling','typography','visual_craft','originality'],
 'saas':['onboarding','forms','accessibility','data_privacy'],
 'ecommerce':['checkout','merchandising','pricing_integrity','inventory_states'],
 'dashboard':['data_visualization','information_architecture','keyboard_navigation','loading_states'],
 'education':['learning_experience','readability','progress_states','keyboard_navigation'],
 'documentation':['information_architecture','search_experience','readability','copywriting'],
 'blog':['readability','seo','content_editorial'],
 '3d-experience':['3d_placement','gpu_budget','camera_choreography','fallback_quality'],
 'agency':['storytelling','motion_director','conversion','originality'],
 'health':['accessibility','privacy_sensitivity','medical_disclaimer','readability'],
 'fintech':['trust_signals','pricing_integrity','data_privacy','accessibility'],
 'real-estate':['3d_placement','media_quality','map_interaction','conversion'],
 'game':['gpu_budget','input_latency','mobile_performance','fallback_quality'],
 'admin':['roles_permissions','audit_logs','forms','keyboard_navigation'],
 'multilingual':['bidi_typography','localization','font_loading','copywriting'],
}
FEATURE={
 '3d':['3d_placement','gpu_budget','camera_choreography','fallback_quality'],
 'animation':['motion_director','scroll_performance','reduced_motion'],
 'rtl':['bidi_typography','font_loading'],
 'forms':['forms','keyboard_navigation'],
 'payments':['checkout','trust_signals'],
 'video':['media_quality','mobile_performance'],
 'data':['data_visualization','loading_states'],
 'foldable':['adaptive_layout'],
 'search':['search_experience'],
}
ROLE_INSTRUCTIONS={
 'design_critic':'Locate reproducible visual hierarchy and interaction defects; cite screenshots, DOM selectors and exact source paths when known.',
 'design_advocate':'Identify evidenced strengths and what must be preserved. Never fabricate praise.',
 'brand_guardian':'Check against approved brand JSON. Missing brand evidence is NOT_TESTED, not a pass.',
 'accessibility':'Keyboard tab order, focus states, landmarks, headings, WCAG contrast, reduced motion.',
 'mobile_performance':'Touch interactions, scroll jank, dynamic DPR, device workload, battery-aware rendering.',
 'visual_regression':'Compare before and after controlled screenshot states and document intended changes.',
 '3d_placement':'Check projection into safe screen area, camera fit, Box3 bounds, text occlusion and mobile framing.',
 'gpu_budget':'Review draw calls, postprocessing, shaders, overdraw, memory cleanup, fallback and frametime metrics.',
 'camera_choreography':'Review FOV, framing, focal anchors, scroll camera path, near/far clipping and motion sickness.',
 'motion_director':'Review timing, easing, continuity, scroll coupling, spring response, start/end states and ownership.',
 'originality':'Detect unsupported glass cards, symmetric generic heroes, arbitrary gradients and irrelevant 3D.',
 'bidi_typography':'Review actual rendered FA/EN glyph shapes, font loaded, line wrapping, bidi and mixed-script numerals.',
}

def choose(kind,features=(),limit=16):
    ordered=[]
    for k in BASE+SITE.get(kind,[])+[r for feat in features for r in FEATURE.get(feat,[])]:
        if k not in ordered:ordered.append(k)
    return ordered[:max(len(BASE),limit)]

def main():
    p=argparse.ArgumentParser();p.add_argument('--site',default='landing',choices=sorted(SITE));p.add_argument('--feature',action='append',default=[],choices=sorted(FEATURE));p.add_argument('--limit',type=int,default=18);p.add_argument('--output');a=p.parse_args()
    roles=choose(a.site,a.feature,a.limit)
    r={'site_type':a.site,'features':a.feature,'reviewers':[{'id':v,'instructions':ROLE_INSTRUCTIONS.get(v,f'Review {v.replace("_"," ")}; reference tangible evidence and report uncertainty.')} for v in roles],
       'arbiter':'Must reconcile with evidence, prioritize blocking issues, preserve successes, never auto-confirm compliance without artifacts.'}
    txt=json.dumps(r,ensure_ascii=False,indent=2)+'\n'
    if a.output:pathlib.Path(a.output).write_text(txt,encoding='utf-8')
    print(txt)
if __name__=='__main__':main()
