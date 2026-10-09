# Perfect_AI CREATIVE CINEMA STUDIO v1 — افزونهٔ ۱۲ موتور خلاقانه

این افزونه **صرفاً اضافه‌شونده** است و هیچ فایل از نسخهٔ VERIFIED ULTIMATE را بازنویسی نمی‌کند. تمام کدهای نوشته‌شده در `src/` جدید و مستقل هستند و در زمان اجرا به MCP یا CDN نیاز ندارند. ارتباط با GSAP، Anime.js، Motion، Three.js و سیستم Router در پروژهٔ مقصد با بررسی نسخه‌های نصب‌شده انجام می‌شود؛ این کتابخانه‌ها یا فایل‌های دارای حق نشر از GitHub در ZIP کپی نشده‌اند.

## ۱۲ حوزه

1. Cinematic Page Transition: انتقال SPA مبتنی بر View Transition، عناصر مشترک، fallback و قرارداد ادغام دوربین 3D.
2. Advanced Image Animation: Parallax، Mask، 3D Flip، ابزار نمونهٔ Displacement و قواعد Shader.
3. Kinetic Typography: حفظ شکل‌دهی صحیح فارسی/عربی، حروف لاتین، موج و متن با Shader.
4. Procedural Layout: تغییر شبکه‌های تصویری، FLIP و تغییر مکان کارت‌ها با محدودیت پاسخ‌گویی.
5. SVG Morph: نرمال‌سازی چندضلعی، Morph و قواعد استفاده از Anime.js یا flubber برای pathهای نامشابه.
6. Product Storytelling: دنبالهٔ ۴۸ فریم SVG اختصاصی برای نمایش، نگاشت پیشرفت اسکرول، Cache محدود و فصل‌بندی.
7. Material Studio: شش Material Preset، پارامترهای PBR و ساخت اختیاری MeshPhysicalMaterial از Three.js.
8. Motion Physics: شبیه‌سازی فنر با گام‌های کوچک، سرعت و تشخیص برخورد مستطیلی.
9. Immersive Navigation: ماشین وضعیت ناوبری، جهت‌یابی فضایی، مدیریت فوکوس و fallback DOM.
10. Product Configurator: اعتبارسنجی طرح انتخاب، بازگردانی، URL امن و قرارداد اتصال به GLB.
11. Creative Preloader: انتظار فقط برای منابع واقعاً ضروری، میزان تکمیل واقعی وظایف، شکست و توقف.
12. Editorial Composition: چیدمان نامتقارن کنترل‌شده، معیارهای فضای خالی، RTL و دسترسی.

## راه‌اندازی روی ویندوز

پس از استخراج ZIP از ریشهٔ `Perfect_AI_TITAN_PLUS_Codex_Skills`:

```powershell
.\extensions\CREATIVE-CINEMA-STUDIO-v1\install\install-windows.ps1 -ProjectPath 'C:\Projects\YourSite'
.\extensions\CREATIVE-CINEMA-STUDIO-v1\install\install-windows.ps1 -ProjectPath 'C:\Projects\YourSite' -Execute -CopyExamples
```

اجرای اول صرفاً پیش‌نمایش است. اگر Skill یا مسیر منابع در مقصد موجود باشد، نصب‌کننده از آن عبور می‌کند؛ فایل موجود **جایگزین نمی‌شود**. قبل از اجرای دوم پروژهٔ مقصد باید واقعاً وجود داشته باشد.

## نصب دستی

`skills/ztc-*` را به `.agents/skills/` پروژه کپی کن. برای دسترسی Skillها به کدها، کل پوشهٔ افزونه را در `.perfect-ai-extensions/CREATIVE-CINEMA-STUDIO-v1/` نصب کن تا مراجع نسبی `../../src/` حفظ شود. نصب‌کننده مسیرهای `src` و `SKILL-CATALOG.json` را کنار Skillها قرار نمی‌دهد؛ در حالت نصب پروژه‌ای، آدرس `src` را از پوشهٔ منابع پروژه پیدا کن.

## تست‌ها

```powershell
cd .\extensions\CREATIVE-CINEMA-STUDIO-v1
node --test tests/*.test.mjs
node tools/validate-skills.mjs
python -m http.server 4173
```

سپس در مرورگر به `http://127.0.0.1:4173/examples/showcase/` برو. نمونه ۱۲ بخش تعاملی دارد، همهٔ دارایی‌ها محلی و قابل بررسی هستند. **رندر با WebGL واقعی، اتصال کامل به GSAP/Anime/Motion، تطابق با مرورگرهای مختلف و عملکرد GPU موبایل در پروژهٔ مقصد باید جداگانه تست شوند.** پیش‌نمایش متریال با CSS شبیه‌سازی بصری است و جای رندر واقعی MeshPhysicalMaterial را نمی‌گیرد.

## الگوی Codex

`Use $ztc-creative-cinema-studio-master and only the relevant ztc-* subskills. Preserve all previous Perfect_AI files. Add the requested 12 systems as progressive enhancements, using existing compatible dependencies only. Implement, run tests, browser-check, and list unverified GPU/physical-device requirements honestly. No MCP.`

## امنیت، مجوز و محدوده

کد اصلی افزونه توسط پروژه Perfect_AI برای این درخواست نوشته شده است. محتوای منابع GitHub به صورت کپی وارد نشده؛ مستندات رسمی صرفاً برای الگوی فنی معرفی شده‌اند (`SOURCES.md`). قطعات 3D، فونت‌ها و تصاویر آینده باید مجوز خود را داشته باشند. کدهای جدید هیچ عمل پرداخت/خرید یا دریافت/ذخیرهٔ اطلاعات کاربر را پیاده نمی‌کنند.

## حفظ فایل‌های قدیمی

گزارش `PRESERVATION-SHA256.json` نشان می‌دهد SHA-256 تمام اعضای ZIP قبلی در آرشیو جدید عیناً برابر است. اجرای دوبارهٔ اعتبارسنجی از طریق `tools/verify-preservation.py` ممکن است.
