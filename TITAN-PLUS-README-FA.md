# Perfect_AI TITAN PLUS — بستهٔ کامل افزایشی برای Codex

این بسته **تمامی 803 Skill قبلی و همهٔ فایل‌های TITAN را بدون تغییر** حفظ می‌کند. همچنین آرشیوهای قبلی، VibeFarsi، مثال‌ها و راهنماهای Anime.js/Three.js/GSAP/Motion/رنگ‌شناسی حذف نشده‌اند. فایل‌های جدید در `frameworks/` و `skills/ztf-*`/`skills/ztfx-*` اضافه شده‌اند.

## افزوده‌ها
- **729 Skill جدید** برای Tailwind CSS v4، Bootstrap v5.3 و اتصال آن‌ها به موتورهای انیمیشن.
- **680 الگوی سناریومحور جدید** با نمونه HTML، سناریوی استفاده و چک‌لیست اجرایی.
- **176 فصل مرجع جدید**: 136 فصل فنی کامپوننت و 40 فصل معماری و دیباگ.
- **۲ نمونه Vite واقعی**: Tailwind + Anime.js + Three.js و Bootstrap RTL + Anime.js + Three.js. سورس کامل موجود است اما بدون نصب وابستگی‌ها اجرا نمی‌شود.
- **موتور تطبیق پالت**: `python frameworks/tools/bridge_theme.py --strict --out generated`، خروجی CSS مخصوص هر دو فریم‌ورک و گزارش WCAG.
- بدون MCP. همهٔ فایل‌های نصب قبلی باقی مانده‌اند و همان installer اصلی Skillهای جدید را هم شناسایی می‌کند.

## نصب در ویندوز (PowerShell)
1. تنها ZIP را Extract کن.
2. داخل پوشهٔ استخراج‌شده، PowerShell باز کن.
3. اجرا کن:
```powershell
.\install\install-codex.ps1 -ProjectPath "C:\Projects\YourProject"
```
4. Codex را مجدداً باز کن:
```text
Use $perfect-ai-master and $ztf-framework-master. Keep all existing files/features. Load relevant Tailwind v4/Bootstrap v5.3 skills as appropriate. Design real responsive layout, professional color system, persian RTL/English LTR, full animation integration, real 3D if needed and run browser verification. Never use MCP.
```

## انتخاب برای پروژه
Tailwind و Bootstrap را **همزمان در یک پروژه ادغام نکن** مگر اینکه یک برنامهٔ دقیق برای cascade، reset، ownership و اندازهٔ باندل وجود داشته باشد. اکثر پروژه‌ها فقط به یکی نیاز دارند. در Tailwind v4 آموزش v3 و `tailwind.config.js` قدیمی را به‌عنوان روش پیش‌فرض تحمیل نکن. Bootstrap 5.3 `data-bs-theme` دارد و برای فارسی نیاز به RTL CSS واقعی دارد.

## معیار کیفیت
به تست نحوی بسنده نکن؛ نسخهٔ نهایی باید build + تست در مرورگر، viewportهای 320/360/390/430/576/640/768/992/1024/1200/1440/1920، RTL/LTR، Tab/Escape، کاهش حرکت، forced-colors، zoom 400% و خطاهای کنسول را پشت سر بگذارد. **این نسخه ادعا نمی‌کند همهٔ الگوها به شکل بصری اجرا شده‌اند**.

## منابع رسمی و حقوق
- Tailwind: https://tailwindcss.com/docs/
- Bootstrap: https://getbootstrap.com/docs/5.3/
- Anime.js: https://animejs.com/documentation/
- Three.js: https://threejs.org/docs/
- WCAG: https://www.w3.org/WAI/WCAG22/quickref/

این بستهٔ جدید تکثیر مستقیم تمام سورس وب‌سایت‌های خارجی نیست؛ دستورالعمل‌ها و پیاده‌سازی‌های مستقل دارد و منابع VibeFarsi/GitHub نسخهٔ قبلی سر جای خود هستند.
