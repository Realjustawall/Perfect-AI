# نصب بدون حذف یا جایگزینی

با توجه به تعداد زیاد Skillهای نسل‌های قبلی، توصیه می‌شود فقط Skillهای مرتبط را به پروژه وارد کنید، نه همهٔ ۲۰۰۰+ Skill را هم‌زمان در context بارگذاری کنید.

```powershell
.\extensions\MOTION-BRAND-MULTIAGENT-v1\install\install.ps1 -ProjectPath 'C:\Projects\Website'
```

`install.ps1` هر Skill را فقط اگر آن مقصد موجود نباشد کپی می‌کند. `-WhatIf` برای پیش‌نمایش وجود دارد. هیچ MCP در این بسته نیست.

همیشه اولین Skill جدید را `$ztx5-motion-brand-master` انتخاب کنید. در صورت استفاده از React، `npm i animejs gsap motion three @react-three/fiber @react-three/drei` را فقط برای موتورهای واقعاً موردنیاز اجرا کنید؛ همه را بدون استفاده نصب نکنید.

`examples/default-text-motion.js` به‌صورت نمونه در پروژه نصب نمی‌شود؛ Codex باید آن را در ورودی پروژه import و راه‌اندازی کند. وجود نمونه در ZIP به‌معنی فعال‌شدن خودکار آن در سایت‌های قبلی نیست.
