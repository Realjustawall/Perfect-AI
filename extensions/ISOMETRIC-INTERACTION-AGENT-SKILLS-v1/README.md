# Isometric Interaction & Agent Skills — Add-only pack

This extension adds **321 new skills** for the Isometric buildlab component registry and closely related responsive motion workflows. It contains one site-specific master skill plus 320 narrow specialist skills. They are authored as individual `SKILL.md` instructions so the installer can copy them into `.agents/skills` without replacing existing skill folders.

## Isometric site fit

The site is a shadcn registry for fine-line isometric React figures and controls. Public setup documents React 19, Tailwind CSS v4, `components.json`, the `@isometric` registry namespace, editable source installation, and `--iso-*` theme variables. Start with `ztx14-isometric-buildlab-master` for any task involving this site.

## Skill groups

- Registry setup and safe installation
- Pointer/mouse motion and hover behavior
- Picking, coordinate transforms, and hit testing
- Responsive motion and device/input adaptation
- Springs, timelines, and interrupted motion
- SVG and isometric geometry
- Component interaction patterns
- React, shadcn, Radix, Tailwind v4 integration
- Accessibility and input parity
- Performance and animation lifecycle
- Agent routing, coordination, and evidence discipline
- Browser, visual, interaction, and performance QA
- Theme, tokens, and brand consistency
- World, blocks, inventory, and game interactions
- Registry resilience, security, and provenance
- Scroll and cinematic motion

## Use

1. Install with the existing Perfect AI installer. The installer discovers skill folders under extension `skills/` directories; use its normal non-destructive mode and review the preview before executing.
2. Choose only the master plus a small relevant subset. Do not load all 321 skills for every task.
3. Open the component docs and installed source instead of assuming undocumented props or APIs.
4. Keep current project conventions and local files. These skills add guidance; they do not install packages or modify the target application by themselves.

## Primary docs

- https://isometric.buildlab.in/llms.txt
- https://isometric.buildlab.in/r/registry.json
- https://github.com/Abhishek-Mallick/Isometric
- https://ui.shadcn.com/docs/registry/registry-json

## Provenance

The guidance is newly authored for this archive using the site’s public documentation and official React, Tailwind, shadcn, MDN, WAI, Motion, and Playwright references. It is not represented as an official Isometric distribution or as 321 imported upstream skills. Consult each source project’s current license before redistributing any third-party code.
