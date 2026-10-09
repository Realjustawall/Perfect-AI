# Perfect_AI VERIFIED ENGINE v1 — افزونهٔ صرفاً افزایشی

**مورد مستثنی: NVIDIA SkillEvaluator یا هر سیستم جدید سنجش A/B اسکیل که کاربر آن را رد کرده است.**
این افزونه پنج پلتفرم تأییدشده و ۱۶ حوزهٔ کیفیت موجود را تقویت می‌کند: Storybook + Vitest، Playwright Trace، glTF Transform، Lighthouse CI، Style Dictionary. هیچ MCP استفاده نشده و هیچ کدی از مخزن‌های خارجی کپی نشده است. همهٔ Recipeها و مثال‌ها به‌صورت مستقل برای Perfect_AI ساخته شده‌اند.

## مسیرهای اصلی
- `skills/`: Skillهای نصب‌پذیر Codex با ورودی، مراحل، خروجی و Gate
- `references/`: دستورالعمل‌های کامل و منابع مستند
- `examples/`: نمونه‌های اجراشدنی یا قابل راه‌اندازی بدون بازنویسی پروژهٔ موجود
- `tools/`: ابزارهای audit و gate مبتنی بر Python stdlib
- `tests/`: تست‌های آفلاین برای ابزارها
- `install/install-windows.ps1`: نصب افزایشی و فقط در صورت خالی‌بودن مقصد؛ بدون overwrite
- `QUALITY-CONTRACT-v1.json`: قرارداد خروجی و وضعیت pass/fail/not-run
- `SOURCE-AND-LICENSES.md`: منشأ، محدودیت مجوز و نحوهٔ استفاده

## شروع سریع ویندوز
1. ZIP را استخراج کن. از PowerShell در پوشهٔ `Perfect_AI_TITAN_PLUS_Codex_Skills` اجرا کن:
   `./extensions/VERIFIED-ENGINE-v1/install/install-windows.ps1 -ProjectPath 'C:\Projects\YourSite'`
2. `npm`، `node`، Python و در صورت 3D ابزار glTF Transform را در پروژهٔ مقصد آماده کن.
3. ابتدا ابزارهای Python را آزمایش کن:
   `python ./extensions/VERIFIED-ENGINE-v1/tools/quality_gate.py --report ./extensions/VERIFIED-ENGINE-v1/examples/report-example.json`
4. برای Storybook addon در پروژهٔ Vite/React فعلی: `npx storybook add @storybook/addon-vitest` و `npx storybook add @storybook/addon-a11y`.
5. Playwright و LHCI را در پروژه نصب کن؛ مثال‌های پوشهٔ `examples` را تطبیق بده، نه اینکه بی‌بررسی فایل‌های پروژه را جایگزین کنی.

**هشدار تست:** وجود Skill یا نمونه به معنی pass‌شدن در پروژهٔ مقصد نیست؛ هر Gate باید شواهد نسخه و زمان اجرای خودش را داشته باشد. پشتیبانی browser/plugin را قبل از مصرف دقیق بررسی کن.
