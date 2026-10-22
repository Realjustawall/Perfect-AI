# بستهٔ بهترین‌روش‌های Isometric v3

این افزونه مکمل افزونه‌های قبلی است و فقط اضافه می‌شود. در آن ۲۵ Skill عمیق‌تر برای ابزار رسمی Motion AI، انتخاب موتور انیمیشن، React/SVG، چرخهٔ عمر Pointer، ریسپانسیو، دسترس‌پذیری، کارایی، تست بصری، SSR و حلقهٔ کار ایجنت قرار دارد.

## ترتیب پیشنهادی شروع
۱. `ztx14-best-animation-engine-selection` — انتخاب موتور درست و جلوگیری از تداخل.
۲. `ztx14-best-motion-ai-kit-for-agents` — بررسی Skill و MCP رسمی Motion.
۳. `ztx14-best-motion-values-no-rerender` — حرکت نرم بدون Render مداوم React.
۴. `ztx14-best-pointer-capture-cancel-lifecycle` — مدیریت Pointer، Drag و لغو تعامل.
۵. `ztx14-best-touch-scroll-gesture-arbitration` — جلوگیری از تعارض لمس و اسکرول.
۶. `ztx14-best-a11y-axe-plus-manual-review` — تست خودکار به‌علاوهٔ بازبینی دستی دسترس‌پذیری.
۷. `ztx14-best-animation-performance-trace` — عیب‌یابی براساس Performance Trace واقعی.
۸. `ztx14-best-visual-regression-determinism` — تست تصویری قابل‌تکرار.
۹. `ztx14-best-agent-implementation-evidence-loop` — اجرای تغییر، تست و گزارش مبتنی بر شواهد.

## سیاست ابزارها
- برای هندسه و تعاملات بومی شکل‌های Isometric، ابتدا قرارداد خود کامپوننت را بررسی کن.
- برای انتقال ساده CSS، برای ژست و Spring در React ابزار Motion، و برای تایم‌لاین‌های هماهنگ پیچیده GSAP را انتخاب کن.
- `npx motion-ai` فقط راه‌اندازی اختیاری Skill/MCP ایجنت است؛ ابزار و محدودهٔ نصب را پیش از تغییر تنظیمات بررسی کن و بدون مجوز نصب خودکار نکن.
- این‌ها دستورالعمل ایجنت هستند؛ به‌تنهایی وابستگی npm نصب یا سایت را تغییر نمی‌دهند.

منابع اصلی، مستندات رسمی فروشندگان، MDN، W3C و web.dev هستند. تاریخ snapshot پژوهش: ۱۴ اکتبر ۲۰۲۶. هنگام اجرا نسخهٔ واقعی پروژه و مستندات جاری را دوباره بررسی کن.
