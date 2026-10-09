# Tailwind CSS v4 — مرجع عملی عمیق برای مهندسی فرانت‌اند Codex

> دامنه: Tailwind v4.x (نه v3). این سند یک راهنمای مستقل و تألیفی است؛ برای دقت نسخهٔ بستهٔ نصب‌شده را نیز بررسی کن.

## ۱) استقرار، مالکیت CSS و ترتیب اجرا

- Vite: `npm install tailwindcss @tailwindcss/vite` و `import tailwindcss from '@tailwindcss/vite'` در `vite.config.js` و `plugins:[tailwindcss()]`؛ سپس `@import "tailwindcss";` در CSS اصلی.
- Tailwind v4 رویکرد CSS-first دارد. فایل `tailwind.config.js` و `@tailwind base; @tailwind components; @tailwind utilities;` از الگوی عادی v3 هستند، نه انتخاب پیش‌فرض v4.
- `@import "tailwindcss"` لایه‌های theme/base/utilities و Preflight را وارد می‌کند. افزونگی reset با Bootstrap Reboot، normalize دیگر یا styleهای عمومی دیگر را پیش از انتخاب stack حل کن.
- source detector کلاس‌های موجود در فایل‌های منبع را جست‌وجو می‌کند؛ کلاس ساخته‌شده با `bg-${color}-500` ممکن است کشف نشود. جایگزین: نقشهٔ رشته‌های کامل، یا `@source inline()` مطابق مستندات همان نسخه.
- از scope واضح برای کلاس‌های اختصاصی استفاده کن؛ تنظیمات Design Token باید مرکزی باشند و در سطح component hardcode نشوند.

## ۲) معماری لایه‌های طراحی

```css
@import "tailwindcss";
@custom-variant dark (&:where([data-theme="dark"], [data-theme="dark"] *));
@theme {
  --font-display: system-ui, "Segoe UI", Tahoma, sans-serif;
  --color-ink-950: oklch(0.13 0.003 270);
  --color-paper: oklch(0.97 0.001 270);
  --color-focus: oklch(0.96 0 0);
  --radius-panel: 1.25rem;
  --breakpoint-desktop: 80rem;
}
:root { --canvas: #f8f8fa; --foreground: #111115; --surface: #fff; }
[data-theme="dark"] { --canvas: #0a0a0c; --foreground: #fafafa; --surface: #1a1a1d; }
@layer base {
  body { background: var(--canvas); color: var(--foreground); }
  :focus-visible { outline: 3px solid var(--foreground); outline-offset: 3px; }
}
```

تفاوت سه نوع متغیر: `@theme` واسط تولید Utility و Variant است؛ متغیر عادی `:root` برای alias معنایی runtime مناسب است؛ کلاس Utility فقط مصرف‌کنندهٔ این توکن‌هاست. `@theme` را در selector یا media query تودرتو نگذار. تغییر روز/شب نباید نیازمند build مجدد باشد.

## ۳) Breakpointها، Container Queryها و تست تطبیقی

| کلاس | حداقل عرض پیش‌فرض | نکته |
|---|---:|---|
| بدون prefix | همه | همیشه از این حالت شروع کن |
| `sm:` | 40rem | 640px در root font 16px |
| `md:` | 48rem | 768px |
| `lg:` | 64rem | 1024px |
| `xl:` | 80rem | 1280px |
| `2xl:` | 96rem | 1536px |

- `min-*`، `max-*` و حالت‌های range برای قوانین عرض خاص؛ breakpointهای rem به تنظیم اندازهٔ پایهٔ کاربر وابسته‌اند، صرفاً معادل پیکسل ثابت نیستند.
- `@container` روی والد، `@sm:`/`@md:` روی فرزند. مثال: `<div class="@container"><div class="grid grid-cols-1 gap-4 @lg:grid-cols-2">...</div></div>`.
- Named container: `@container/main` و هدف‌گذاری `@md/main:*` برای nested panels. از Queryهای متعلق به پنجره برای کارت در سایدبار استفاده نکن.
- `minmax(0,1fr)`، `min-w-0`، `overflow-wrap:anywhere` برای رشتهٔ فارسی/انگلیسی در جدول‌ها و card gridها مهم‌اند.
- محتوای بلند و 400% zoom: نباید دکمه‌های اصلی یا پیام خطا پشت `overflow-hidden` ناپدید شوند. برای نمایش 3D از overflow clipping مستقل استفاده کن، نه روی کل کپی اصلی.
- فاصلهٔ Safe Area: `padding-inline: max(1rem, env(safe-area-inset-left))` در طراحی جهت‌دار نیازمند تست RTL و ناحیهٔ دستگاه است.

## ۴) Variantها به‌جای JavaScript بی‌دلیل

- Hover و Focus: `hover:`, `focus-visible:`, `focus-within:`؛ هر کنترل hoverمحور باید click/touch/keyboard معادل داشته باشد.
- `group-*` و `peer-*`: حالات فرم و کارت؛ توجه به ترتیب sibling و cascade.
- State-driven: `aria-expanded:*`, `aria-selected:*`, `data-[state=open]:*`, `has-*`, `not-*` فقط زمانی که attributes توسط state واقعی کنترل می‌شوند.
- Motion: `motion-reduce:*` و `motion-safe:*`؛ روی ترجمه/تغییر مکان متن ضروری احتیاط کن.
- RTL: `rtl:*` برای تفاوت بصری واقعی، اما بیشتر فاصله‌ها را با `ms-*`, `me-*`, `ps-*`, `pe-*` و `text-start` پیاده کن.
- Media: `print:`, `pointer-coarse`/راهکار CSS برای `pointer:coarse`, `forced-colors`; رفتار را در مرورگر هدف تست کن.

## ۵) Component Primitives — هستهٔ قابل استفادهٔ مجدد

**Button**: اندازهٔ هدف لمس، `disabled`, focus-visible, loading status, variant danger و اجرای رویداد. صرفاً CSS تولید نکن؛ اگر روی کلیک کاری ندارد، به جای button از متن استفاده کن.

**Dialog**: Tailwind فقط CSS می‌دهد؛ native `<dialog>` با `showModal()`، `close()`، بازگشت فوکوس و Escape، یا یک primitive تست‌شده. از `div role=dialog` بدون focus trap خودساخته استفاده نکن.

**Combobox**: اگر پیشنهادهای قابل انتخاب لازم است ARIA combobox pattern را به‌طور کامل اجرا کن (active descendant، arrow keys، Escape، status). در غیر این صورت از `<form role=search>` و input معمولی استفاده کن.

**Tabs**: محتوای tab باید با arrow/Home/End و focus model مدیریت شود؛ برای دسته‌بندی ساده و ناوبری صفحات معمولاً anchor مناسب‌تر از `role=tab` است.

**Data table**: `table`, `caption`, `th scope`, overflow محدود به wrapper، ستون‌های نامطلوب hidden نشوند مگر خلاصهٔ دقیق ارائه شود؛ در 400% zoom پیمایش محدود جدول پذیرفتنی است ولی پیمایش کل صفحه نه.

**Design system**: Button، Input، Select، Checkbox، Badge، Dialog، Toast، Tooltip، Popover، Table، Tabs، Accordion، Skeleton، Sidebar باید قرارداد `states`, `intent`, `size`, `disabled`, `loading`, `aria` و RTL داشته باشند. نمونهٔ پوشه: `components/primitives`, `components/patterns`, `tokens`, `motion`, `tests`.

## ۶) تایپوگرافی فارسی و انتخاب فونت

- برای فارسی line-height معمولاً از انگلیسی بلندتر بگیر، جلوی قطع نقطه‌ها و اعراب را بگیر و font fallback واقعی برای دستگاه آفلاین قرار بده.
- متن فارسی را روی حروف مجزا برای انیمیشن split نکن؛ ممکن است shaping حروف خراب شود. در Anime.js غالباً انیمیشن block، line یا word سالم‌تر است.
- inline code، URL، ایمیل و اعداد را با `dir="ltr"` محلی کنترل کن؛ جهت کل سند را به‌خاطر یک متن LTR تغییر نده.
- `text-wrap: balance` برای تیتر مناسب است اما محدودیت پشتیبانی/شکستن خطوط را واقعی تست کن؛ برای پاراگراف طولانی خوانایی مهم‌تر از ترازبندی بصری است.

## ۷) رنگ‌شناسی و سیستم روشن/تاریک

1. نوع محصول، مخاطب، brand constraints و محیط مصرف را تعیین کن.
2. نقش‌ها را تعریف کن: `canvas`, `surface`, `surface-elevated`, `text`, `muted`, `border`, `accent`, `accent-foreground`, `focus`, `danger`, `warning`, `success`.
3. در فضای OKLCH پالت تنظیم کن، برای تبدیل به sRGB gamut clipping یا کاهش chroma کنترل‌شده انجام بده. Hue به‌تنهایی ادراک مشابه تضمین نمی‌کند.
4. حداقل نسبت کنتراست متن معمولی AA برابر 4.5:1 و متن بزرگ 3:1 است؛ نشانه‌های مهم UI هم معیار کنتراست غیرمتنی دارند. Shadeهای رنگی را به‌صورت زوج foreground/background تست کن.
5. برای Perfect_AI مشخصاً پالت تک‌رنگ سفت‌وسخت است: خاکستری و سفید، بدون رنگ تزئینی. Contrast، rhythm، spacing و نورپردازی جایگزین شلوغی رنگی می‌شوند.
6. نسخهٔ کاربرپسند dark/light به preference سیستم واکنش نشان دهد ولی انتخاب کاربر بر سیستم اولویت دارد؛ تغییر theme باعث Flash غیرقابل قبول و پرش layout نشود.

## ۸) مرز Tailwind با Anime.js و Three.js

- Tailwind CSS وظیفهٔ style/layout دارد؛ Anime.js وظیفهٔ timeline/scroll motion؛ Three.js وظیفهٔ scene/WebGL. هیچ‌کدام جایگزین یکدیگر نیستند.
- `onScroll` و timeline باید تنها بعد از mount واقعی DOM فعال شوند و cleanup داشته باشند؛ در React StrictMode از mount مجدد و eventهای دوگانه مراقبت کن.
- Canvas سه‌بعدی `position:absolute; inset:0; width:100%; height:100%` در یک container با اندازهٔ مشخص، و CSS متن روی لایهٔ بالاتر. محتوای مهم داخل Canvas تنها نباشد.
- Render resolution: DPR را بی‌دلیل به مقدار دستگاه رها نکن؛ بر اساس توان و مساحت واقعی canvas محدود کن، camera projection را هنگام ResizeObserver به‌روز کن.
- حداقل کیفیت دستگاه: material ساده، instancing برای اشیای یکسان، pause وقتی viewport دیده نمی‌شود، no-WebGL fallback و `dispose()`.

## ۹) چک‌لیست خطاهای شایع

- کلاس داینامیک Tailwind به‌دلیل source detection تولید نشده است.
- فاصلهٔ responsive فقط با viewport کنترل شده و در پنجرهٔ dashboard شکسته است.
- `dark:` تنظیم شده ولی dark variant فعال‌شوندهٔ دستی با data-theme تعریف نشده است.
- هم Tailwind Preflight و هم Bootstrap Reboot global loaded شده و inputهای سایت بهم ریخته‌اند.
- `z-index` زیاد اما stacking context اشتباه با transform/backdrop-filter ساخته شده است.
- عنوان فارسی هنگام word-by-word animation از لحاظ اتصال حروف خراب شده است.
- کارت infinite min-content باعث document scrollbar افقی می‌شود.
- component در `prefers-reduced-motion: reduce` مخفی می‌ماند زیرا opacity initial در JS صفر شده است.
- `animate` روی همان transformی کار می‌کند که Three.js یا CSS transition کنترل می‌کند؛ ownership مشخص نیست.
- هنگام route change observer، event listener یا WebGL context پاک نمی‌شوند.

**ارجاع رسمی:** https://tailwindcss.com/docs/theme، https://tailwindcss.com/docs/responsive-design، https://tailwindcss.com/docs/dark-mode، https://tailwindcss.com/docs/adding-custom-styles، https://tailwindcss.com/docs/functions-and-directives
