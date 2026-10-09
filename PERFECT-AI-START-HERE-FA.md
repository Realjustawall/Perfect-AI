# Perfect AI — نسخهٔ کامل Skillهای Codex

**نام جدید پروژه: Perfect AI**  
**مخزن رسمی شما:** https://github.com/Realjustawall/Perfect-AI

این آرشیو نسخهٔ بازنام‌گذاری‌شدهٔ Perfect_AI GITHUB DESIGN ENGINEERING است. نام پوشهٔ اصلی از `Perfect_AI_TITAN_PLUS_Codex_Skills` به `Perfect-AI` تغییر یافته است؛ **تمام ۶٬۵۷۱ فایل قدیمی بدون تغییر محتوا** حفظ شده‌اند. سند `PERFECT-AI-LEGACY-SHA256.json` هش تک‌تک فایل‌های قبلی را دارد. هیچ فایل یا Skill مرتبط با Jiro.build افزوده نشده است.

## قابلیت‌ها

- ۲٬۷۰۲ فایل `SKILL.md` شامل ۲٬۰۵۰ Skill اصلی و ۶۵۲ Skill افزونه‌ها
- توسعهٔ سایت و فرانت‌اند، RTL/فارسی/انگلیسی، طراحی، تایپوگرافی، رنگ، responsive
- انیمیشن، Anime.js، GSAP، Motion، Scroll، SVG، Storytelling
- Three.js، WebGPU، Shader Graph، Gaussian Splatting، Post-processing، Video×3D، Threepipe
- ابزارهای تست، Quality Assurance، Playwright، چند ایجنت، React Doctor، ابزارهای نمونه
- **بدون الزام به MCP**؛ ابزارهای خارجی در صورت نیاز باید جداگانه نصب شوند

## نصب همهٔ Skillها در ویندوز

۱. فایل ZIP را استخراج کنید (ساختار `Perfect-AI` در آن وجود دارد).  
۲. PowerShell را داخل پوشهٔ `Perfect-AI` باز کنید.  
۳. پروژهٔ مقصد را از قبل بسازید، سپس نصب را اجرا کنید:

```powershell
.\install\install-perfect-ai.ps1 -ProjectPath "C:\Projects\MyWebsite" -Execute -CopyExtensionAssets
```

**نصب امن است:** هر Skill یا افزونه‌ای که قبلاً در مقصد وجود داشته باشد بدون بازنویسی رد می‌شود. برای پیش‌نمایش بدون نصب، `-Execute` را حذف کنید. خروجی Skillها در `<ProjectPath>\.agents\skills` است.

> برخی Skillهای افزونه هنگام اجرا به ابزارها و مثال‌های مجاورشان وابسته‌اند. استفاده از `-CopyExtensionAssets` پوشهٔ کامل افزونه‌ها را به `<ProjectPath>\.perfect-ai\extensions` نیز کپی می‌کند؛ برای یکپارچه‌سازی تخصصی‌تر، نصب‌کنندهٔ همان افزونه را بررسی کنید. نصب این مجموعه اثبات نمی‌کند تمام مثال‌ها در GPU شما تست شده‌اند.

پس از نصب، Codex را مجدداً اجرا کرده و برای نمونه بگویید:

```text
Use $perfect-ai-master and the relevant Perfect AI skills. Build a bilingual Persian/English responsive website, use only skills relevant to the task, preserve existing work, do not use MCP, and validate your changes with actual tests.
```

## Push کامل به GitHub

فایل `Perfect_AI_by_JustAWall_All_In_One_Codex_Skills.zip` را در ویندوز دانلود کنید. پیش‌نیاز: **Git for Windows** و دسترسی GitHub به مخزن مقصد.

**راه خودکار:** در PowerShell داخل پوشهٔ استخراج‌شدهٔ `Perfect-AI`:

```powershell
.\tools\push-perfect-ai.ps1 -ZipPath "C:\Users\YOUR_USER\Downloads\Perfect_AI_by_JustAWall_All_In_One_Codex_Skills.zip"
```

این دستور فایل‌ها را در مخزن زیر مسیر `package/` و ZIP اصلی را در `releases/` قرار می‌دهد و فقط تغییرات جدید را Commit و Push می‌کند:

https://github.com/Realjustawall/Perfect-AI

**روش دستی:**

```powershell
git clone https://github.com/Realjustawall/Perfect-AI.git
cd Perfect-AI
# محتویات پوشهٔ Perfect-AI استخراج‌شده را در پوشهٔ package این repo کپی کنید.
# ZIP را در releases کپی کنید.
git add package releases
git commit -m "feat: add complete Perfect AI Codex Skills pack"
git push origin main
```

> **هشدار:** مخزن GitHub فعلاً در صورت اجرا نکردن Push کامل، فقط README و اسکریپت کمکی دارد. دستور بالا را اجرا کنید تا سورس واقعی روی GitHub منتشر شود. این ZIP حدود ۱۸ مگابایت است و GitHub محدودیت فایل ۱۰۰MB دارد؛ برای این فایل در شرایط عادی Git LFS نیاز نیست.

## تأیید حفظ فایل‌ها

```powershell
py -3 .\tools\verify-perfect-ai.py "C:\Users\YOUR_USER\Downloads\Perfect_AI_by_JustAWall_All_In_One_Codex_Skills.zip"
```

دستور فوق SHA-256 همهٔ ۶٬۵۷۱ فایل قدیمی را بررسی می‌کند و CRC آرشیو را می‌سنجد.

## منابع و مجوزها

این بسته شامل Skillهای مستقل و راهنماهای خارجی با شرایط متفاوت است. پیش از بازتوزیع یا نصب ابزارها، فایل‌های License/Source هر افزونه را مطالعه کنید. از ZIP به عنوان نشانهٔ قبولی همهٔ تست‌های WebGL/WebGPU، npm یا مرورگر استفاده نکنید.
