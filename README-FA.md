# پرفکت ای‌آی — Perfect AI

**نام پروژه: Perfect AI**  
**سازنده و ارائه‌دهنده: JustAWall**  
**گیت‌هاب رسمی:** https://github.com/Realjustawall/Perfect-AI

این مجموعه شامل تمام Skillها و نمونه‌های موجود در انتشار جامع Codex است. برای اجرای سیستم‌های مختلف به MCP نیازی نیست، اما برخی نمونه‌ها برای اجرا به نصب ابزارهای JavaScript، Python و کتابخانه‌های گرافیکی نیاز دارند.

## نصب روی ویندوز

پس از استخراج ZIP، PowerShell را در پوشهٔ `Perfect-AI` باز کن و اجرا کن:

```powershell
.\install\install-perfect-ai.ps1 -ProjectPath "C:\Projects\MyWebsite" -Execute -CopyExtensionAssets
```

نام مسیر پروژه را تغییر بده؛ اسکریپت فایل‌های موجود را بازنویسی نمی‌کند. برای نمایش تغییرات بدون اجرا، `-Execute` را حذف کن.

## انتشار در GitHub

```powershell
git clone https://github.com/Realjustawall/Perfect-AI.git
cd Perfect-AI
.\tools\push-perfect-ai.ps1 -ZipPath "C:\Users\YOU\Downloads\Perfect_AI_by_JustAWall_All_In_One_Codex_Skills.zip"
```

قبل از انتقال، اسکریپت باید SHA-256 دقیق ZIP را تأیید کند. سورس به `package/` و فایل ZIP به `releases/` ارسال می‌شود و روی فایل متناقض موجود بازنویسی انجام نمی‌شود.

## یادداشت مهم

تمام نام‌های داخلی مجموعه و آرشیوهای تاریخی با برند **Perfect AI** هماهنگ شده‌اند. بنابراین هش‌های ثبت‌شده در گزارش‌های تاریخی قدیمی ممکن است به فایل‌های بازنام‌گذاری‌شده اشاره داشته باشند و برای نسخهٔ فعلی قابل استناد نیستند. گزارش معتبر نسخهٔ جدید `PERFECT-AI-CURRENT-SHA256.json` است.

**JustAWall** سازندهٔ مجموعهٔ Perfect AI است؛ حق مؤلف پروژه‌ها و کتابخانه‌های شخص ثالث همچنان متعلق به صاحبان آن‌هاست.
