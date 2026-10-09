# Perfect_AI MOTION + BRAND + MULTIAGENT — افزونهٔ کاملاً افزایشی
این بسته به آرشیو DEEP اضافه شده و هیچ فایلی از آن حذف یا تغییر داده نمی‌شود.

## سیستم‌های افزوده
- انیمیشن متن به‌شکل **پیش‌فرض** برای h1/h2 و تیترهای اصلی (با دسترس‌پذیری، فارسی و reduced-motion).
- انیمیشن متصل به اسکرول: GSAP ScrollTrigger، Anime.js onScroll، Motion useScroll، Native ScrollTimeline و Lenis همگام.
- تعاملات ماوس: pointer local space، spring، tilt، magnet، shader، raycast و gesture، همراه با touch و keyboard.
- جایگذاری Three.js با Bounds، Pivot، Fit Camera، Screen Anchors و تست Projected Bounding Boxes.
- فهرست فونت فارسی/انگلیسی و ده جفت پیشنهادی، سوئیچ قابل اطمینان با lang/dir و مدیریت لود فونت.
- سیستم **واقعی** اجرای چندایجنتی اختیاری بر پایهٔ subprocessهای مجزای `codex exec` بدون MCP: منتقد، حامی طرح، نگهبان هویت بصری، ارزیاب دسترس‌پذیری و داور نهایی.
- دریافت هویت بصری واقعی از فایل `brand-identity.json` الزامی است. فایل نمونه، تنها تمپلیت است و هویت برند فرضی محسوب نمی‌شود.

## نصب روی ویندوز
```powershell
# From extracted archive root (inside Perfect_AI_TITAN_PLUS_Codex_Skills)
.\extensions\MOTION-BRAND-MULTIAGENT-v1\install\install.ps1 -ProjectPath 'C:\Projects\Website'
```
به‌صورت پیش‌فرض هیچ Skill موجود بازنویسی نمی‌شود. برای استفاده از چندایجنتی، Codex CLI باید جداگانه نصب و login شده باشد.

## نمونهٔ اجرای چندایجنتی
```powershell
cd .\extensions\MOTION-BRAND-MULTIAGENT-v1
Copy-Item .\examples\brand-identity.example.json C:\Projects\Website\brand-identity.json
# ابتدا اطلاعات واقعی برند را کامل و از کارفرما تأیید بگیرید.
python .\scripts\run_review.py --brand C:\Projects\Website\brand-identity.json --project C:\Projects\Website --evidence C:\Projects\Website\review-evidence --dry-run
# وقتی اطلاعات واقعی، شواهد و Codex CLI موجود بود:
python .\scripts\run_review.py --brand C:\Projects\Website\brand-identity.json --project C:\Projects\Website --evidence C:\Projects\Website\review-evidence
```
اجرای واقعی فرآیند، به Codex نصب‌شده و دسترسی مدل نیاز دارد؛ در این محیط نمونهٔ تست با Codex mock اجرا می‌شود، نه سرویس زنده.

## حد تکمیل
نمونه‌کدها، ابزارها و Skillهای این افزونه به‌صورت واقعی ساخته شده‌اند؛ اما اجرای تمام نمونه‌های وابسته به npm روی تمام مرورگرها تأیید نشده است. این افزونه یک پروژهٔ نهایی وب خودکار نیست؛ ابزار و دستور اجرایی برای Codex است.
