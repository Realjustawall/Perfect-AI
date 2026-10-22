# بستهٔ منتخب Skillهای ابزارمحور Isometric v2

این افزونه **فقط اضافه‌شونده** و مکمل `ISOMETRIC-INTERACTION-AGENT-SKILLS-v1` است. هدف آن افزایش بی‌رویهٔ تعداد Skillها نیست؛ هر Skill یک تصمیم فنی مشخص، قواعد پیاده‌سازی و معیار تأیید دارد.

## اولویت پیشنهادی

1. `ztx14-curated-isometric-component-selection` — انتخاب کامپوننت واقعی از رجیستری.
2. `ztx14-curated-animation-ownership-boundary` — مالکیت یگانه برای هر ویژگی متحرک.
3. `ztx14-curated-motion-react-pointer-spring` — حرکت موس برای UI/DOM، نه جایگزینی موتور SVG.
4. `ztx14-curated-motion-hover-cross-device` و `ztx14-curated-responsive-motion-capabilities` — برابری رفتار موس، تاچ، کیبورد و نمایشگر.
5. `ztx14-curated-reduced-motion-system` — احترام به ترجیح کاهش حرکت در تمام موتورها.
6. `ztx14-curated-shadcn-registry-safe-install` — نصب افزایشی و بررسی فایل‌های رجیستری.
7. `ztx14-curated-playwright-pointer-e2e` و `ztx14-curated-playwright-visual-baselines` — تست تعامل و رگرسیون بصری.
8. `ztx14-curated-css-motion-performance` و `ztx14-curated-shared-loop-offscreen-sleep` — جلوگیری از حلقه‌های فریم اضافه.
9. `ztx14-curated-gsap-responsive-scroll` — فقط برای Timelineهای اسکرول پیچیده.
10. Gateهای انتخاب React Three Fiber، Lenis و Rive/Lottie — اختیاری هستند، نه وابستگی پیش‌فرض.

## محتوا

۳۰ فایل `SKILL.md` مستقل؛ بدون وابستگی اجرایی جدید. برای هر وظیفه فقط Skill راهبر و متخصص‌های لازم را بارگذاری کن. مستندات سایت که در ۱۴ اکتبر ۲۰۲۶ بررسی شدند، React 19، Tailwind CSS v4 و `components.json` را پیش‌نیاز اعلام می‌کنند؛ نسخه‌های واقعی پروژه را هنگام اجرا دوباره بررسی کن.
