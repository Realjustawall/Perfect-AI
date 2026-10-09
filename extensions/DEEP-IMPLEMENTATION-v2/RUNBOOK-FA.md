# راهنمای کامل اجرای Perfect_AI DEEP برای Codex

این افزونه فقط اضافه شده است؛ تمام 15 سیستم، 305 تکنیک مستقل و 321 Skill جدید دارد.

## نصب مطمئن

۱. ZIP را استخراج کن. ۲. در پوشه اصلی آرشیو دستور جدید `extensions/DEEP-IMPLEMENTATION-v2/install/install-deep.ps1 -ProjectPath "C:\Projects\YourApp"` را اجرا کن. این دستور هیچ فایل قدیمی را بازنویسی نمی‌کند؛ اسکیل‌های با نام ztx4 را اضافه می‌کند. ۳. در Codex از `$ztx4-deep-implementation-master` همراه `$perfect-ai-master` و `$ztx3-nexus-master` استفاده کن.

## ترتیب اجرا

1. تحلیل هدف محصول و ثبت واقعیت‌ها در Brief.
2. بررسی کد و Skills موجود و اجرای router برای ۳ تا ۷ Skill متناسب.
3. تولید ۵ پالت با دلیل انتخاب و آزمون WCAG؛ اگر مشتری سیاه‌وسفید می‌خواهد دقیقاً همان قید حفظ شود.
4. تعیین برنامهٔ فنی تایپوگرافی، عناصر، ریسپانسیو و موتور انیمیشن.
5. تولید UI واقعی با محتوای معتبر، حالت‌های loading/error/empty، یکپارچگی کیبورد و دسترسی.
6. افزودن Three.js/R3F و Anime.js/Rive/Theatre/GSAP بر اساس بودجه و مالکیت انیمیشن.
7. برنامهٔ ممیزی مرورگر در عرض‌های ۳۲۰، ۳۶۰، ۳۹۰، ۴۳۰، ۷۶۸، ۱۰۲۴، ۱۴۴۰ و ۱۹۲۰ و حالت‌های Reduced Motion / RTL.
8. گزارش بصری تفاوت، اصلاح و تست مجدد.
9. بررسی سلامت نصب و عدم تغییر آرشیو پایه.

## نکتهٔ علمی/فنی

- رنگ‌شناسی روان‌شناختی علم قطعی در مورد مخاطب ناشناخته نیست؛ پیشنهادها فرضیه‌اند، نه قانون جهان‌شمول.
- نسخهٔ کتابخانه در package-lock و مستندات رسمی باید بررسی شود؛ WebGPU مسیر opt-in است و fallback لازم دارد.
- ۴۰۰٪ زوم و محتوای دراز را جداگانه تست کن.
- آزمایشگاه‌های HTML بدون وابستگی و نمونه‌های JSX با dependency مشخص جدا شده‌اند.
- فقط تستی که اجرا شد پاس اعلام کن.

## سیستم‌ها و فایل‌ها
- **Design Intelligence Engine**: [20 تکنیک](./references/design-intelligence.md)
- **Advanced 3D / R3F / GPU**: [33 تکنیک](./references/advanced-3d.md)
- **Cinematic Animation / Multi-engine**: [22 تکنیک](./references/cinematic-motion.md)
- **Adaptive Responsive Engine 3.0**: [26 تکنیک](./references/adaptive-responsive.md)
- **Color Intelligence 3.0**: [26 تکنیک](./references/color-intelligence.md)
- **Visual Reverse Engineering**: [16 تکنیک](./references/visual-reverse.md)
- **Component Architecture & Design System**: [20 تکنیک](./references/component-system.md)
- **Advanced Typography Engine**: [18 تکنیک](./references/advanced-typography.md)
- **Automatic Performance Optimization**: [18 تکنیک](./references/performance-auto.md)
- **Visual QA & Self-Correction**: [18 تکنیک](./references/visual-qa.md)
- **Advanced Interaction System**: [19 تکنیک](./references/interaction-system.md)
- **Complete Page & Product Systems**: [22 تکنیک](./references/product-systems.md)
- **Design-to-Code Pipeline (offline)**: [16 تکنیک](./references/design-to-code.md)
- **Premium Design Critic**: [17 تکنیک](./references/premium-critic.md)
- **Skill Verification & Security**: [14 تکنیک](./references/skill-trust-security.md)
