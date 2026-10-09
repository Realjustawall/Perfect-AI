# Perfect_AI — افزونهٔ چندایجنتی تخصصی

**افزونهٔ افزایشی؛ فایل‌های قبلی حذف یا تغییر نمی‌شوند.**

- 53 ایجنت بررسی مجزا + 15 Skill گردش‌کار + Master Skill.
- 21 نوع سایت و تخصیص خودکار متناسب با نیاز آن.
- اجرای مستقل با چند فرایند Codex CLI بدون MCP؛ به صورت پیش‌فرض حالت plan/mock و بدون تغییر کد.
- دریافت هویت بصری واقعی و مورد تأیید برای اعلام سازگاری برند.
- خروجی JSON با مدارک، شدت خطا، فایل/کامپوننت و مراحل بازآزمایی.

## نصب در Windows

پس از استخراج ZIP و ورود به پوشهٔ اصلی `Perfect_AI_TITAN_PLUS_Codex_Skills`:

```powershell
.\extensions\ROLE-INTELLIGENCE-v1\install\install-windows.ps1 -ProjectPath "C:\Projects\Site"
```

این نصب‌کننده یک کپی از ابزارها/پیکربندی را در `.perfect-ai/ROLE-INTELLIGENCE-v1` و Skillها را در `.agents/skills` قرار می‌دهد؛ هیچ فایل موجودی را بازنویسی نمی‌کند.

## انتخاب ایجنت‌ها بدون اجرای Codex
```powershell
python .\extensions\ROLE-INTELLIGENCE-v1\orchestrator\team.py plan --site-type immersive-3d --project "C:\Projects\Site" --out "C:\Temp\ztx-review"
```

## اجرای واقعی ممیزی (بعد از احراز هویت Codex CLI)
```powershell
python .\extensions\ROLE-INTELLIGENCE-v1\orchestrator\team.py audit --execute --site-type ecommerce --project "C:\Projects\Site" --brand "C:\Projects\brand-identity.json" --out "C:\Temp\ztx-review"
```

نبود فایل هویت بصری تأییدشده به معنی عدم امکان تأیید هویت بصری است؛ سایر بازبینی‌های ممکن انجام می‌شوند. ابزار هیچ ایجنتی را خودکار نویسندهٔ پروژه نمی‌کند.

منابع تحقیق: `references/UPSTREAM-RESEARCH.md`؛ فایل‌های Skill جدید مستقل و بازنویسی‌شده‌اند؛ سورس مخزن‌های ثالث داخل ZIP کپی نشده است.

## داور مستقل (اختیاری)
برای اجرای داور جداگانه پس از ایجنت‌ها، گزینهٔ `--judge` را همراه `audit --execute` استفاده کن. داور اجازهٔ تغییر کد یا حذف بلوکه‌کننده‌های اثبات‌شده را ندارد.

با حذف `--site-type`، ابزار نوع سایت را از نام فایل‌ها/مسیرها حدس می‌زند و میزان اطمینان را در گزارش مشخص می‌کند؛ برای نوع حساس مثل سلامت یا مالی، نوع سایت را صریح وارد کن.
