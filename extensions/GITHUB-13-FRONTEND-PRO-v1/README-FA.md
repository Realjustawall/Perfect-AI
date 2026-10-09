# Perfect_AI — افزونه ۱۳ اسکیل GitHub، بدون MCP

این افزونه فقط به ZIP قبلی اضافه شده و هیچ فایل قبلی را جایگزین نکرده است.

## روش نصب Windows / PowerShell
از داخل پوشهٔ `Perfect_AI_TITAN_PLUS_Codex_Skills`:

```powershell
.\extensions\GITHUB-13-FRONTEND-PRO-v1\install\install-windows.ps1 -ProjectPath "C:\Projects\YourSite"
```

ابتدا می‌توانی `-WhatIf` بدهی. نصب، Skillهای `ztx11-*` را در `.agents/skills` و ابزارهای مستقل را در `.perfect-ai/GITHUB-13-FRONTEND-PRO-v1` کپی می‌کند. اگر مسیر موجود باشد از آن عبور می‌کند و آن را بازنویسی نمی‌کند.

## نمونه استفاده
`Use $ztx11-github-13-pro-master and choose only the relevant specialists. Preserve all existing functionality. Run local browser/design/3D checks without MCP and report evidence.`

## ابزارهای مستقل
- `tools/design_extract.py`: استخراج اولیهٔ CSS custom properties از فایل‌های محلی و تولید گزارش Markdown. جایگزین CSS parser کامل نیست.
- `tools/visual_diff.py`: مقایسهٔ دو PNG با heatmap/threshold و JSON.
- `tools/skill_audit.py`: بررسی فرمت و نام Skillهای جدید، بدون تغییر سایر فایل‌ها.
- `examples/tests/zt-design-qa.spec.cjs`: نمونهٔ Playwright Test با محیط پروژه، نه تست تأییدشدهٔ همهٔ سایت‌ها.
- `examples/three-placement.mjs`: هندسهٔ محاسبهٔ فاصلهٔ دوربین از Bounding Sphere.

## مرزها
نصب Skill به معنی اجرای آزمون‌های زنده، استفاده از سورس اصلی GitHub یا تأیید کیفیت بصری پروژهٔ شخصی نیست. ابزارهای مرورگر/Node.js/مدل GLB باید در سیستم مقصد نصب شوند. ابزارها هیچ MCP لازم ندارند.
