# Bootstrap 5.3 — مرجع پیشرفتهٔ اجرایی Codex

> نسخهٔ هدف Bootstrap v5.3.x. تفاوت‌های v4 با v5 را به هیچ وجه در تولید کد مخلوط نکن. RTL و Dark Mode با بستهٔ درست تست شوند.

## ۱) نصب واقعی و درخت وابستگی

- ابزار Vite: `npm install bootstrap@^5.3.8`، سپس `import 'bootstrap/dist/css/bootstrap.rtl.min.css'` برای اپ فارسی و `import 'bootstrap/dist/js/bootstrap.bundle.min.js'` در یک نقطهٔ ورود. `bundle` شامل Popper است.
- CDN رسمی فقط برای پیش‌نمایش ساده، با نسخهٔ ثابت و SRI. برای محصول production بهتر است نسخهٔ lockfile تثبیت شود و بسته با builder پروژه تولید شود.
- jQuery از Bootstrap v5 حذف شده است؛ مثال‌های `.modal('show')` مربوط به Bootstrap قبلی‌اند. Plugin API مدرن `bootstrap.Modal.getOrCreateInstance(el)` (یا import ES module) است.
- اجزای JS مثل Modal، Offcanvas، Collapse، Dropdown، Toast، Tooltip، Popover وابسته به initialization/plugin lifecycle هستند؛ صرف وجود کلاس CSS آنها را عملیاتی نمی‌کند.

## ۲) Grid، Container و Breakpoint با جزئیات

| سطح | عرض | مثال |
|---|---|---|
| xs | کمتر از 576px | `col-12` |
| sm | 576px و بیشتر | `col-sm-6` |
| md | 768px و بیشتر | `col-md-6` |
| lg | 992px و بیشتر | `col-lg-4` |
| xl | 1200px و بیشتر | `col-xl-3` |
| xxl | 1400px و بیشتر | `col-xxl-2` |

- `.container`, `.container-fluid`, `.container-lg` بر اساس عرض viewport رفتار دارند. `.row` برای مدیریت gutter و `.col-*` برای ۱۲ ستون طراحی شده‌اند.
- `.row-cols-1`, `.row-cols-md-2`, `.row-cols-lg-3` برای کارت‌های هم‌نوع؛ سیستم کارد نباید در حالت صفحهٔ بزرگ بی‌نهایت کشیده شود.
- `.g-*` فاصلهٔ عمودی/افقی را کنترل می‌کند؛ خروج محتوا از عرض row در nesting نادرست اتفاق می‌افتد.
- اگر کامپوننت داخل پنل تغییرعرض‌پذیر قرار می‌گیرد، breakpointهای Bootstrap فقط viewport را کنترل می‌کنند؛ از CSS Container Query سفارشی در scope کامپوننت استفاده کن.
- Bootstrap 5.3 دارای مجموعه‌ای از utilities است اما هر ترکیب responsive خیال‌پردازانه مثل `position-lg-sticky` الزاماً کلاس پیش‌فرض ندارد؛ قبل از استفاده خروجی CSS نصب‌شده را بررسی کن.

## ۳) RTL حرفه‌ای، نه آینه‌سازی ساده

```html
<html lang="fa" dir="rtl">
  <link rel="stylesheet" href="/node_modules/bootstrap/dist/css/bootstrap.rtl.min.css">
  <body>
    <main class="container py-5">
      <div class="row g-3">
        <section class="col-12 col-lg-8">...</section>
        <aside class="col-12 col-lg-4">...</aside>
      </div>
    </main>
  </body>
</html>
```

در باندل تولیدی پروژه، فایل را از `node_modules` داخل JS import کن؛ آدرس فوق تنها شکل قراردادی بسته است و برای deploy واقعی static server مناسب نیست. `ms-*` و `me-*` برای margin منطقی، `ps-*`, `pe-*`, `text-start` و `text-end` برای سایر جهات به جای `ml-*` و `mr-*`. محیط‌های عددی، نمودار و snippet با `dir="ltr"` محلی نمایش داده شوند. RTL CSS واقعی ضروری است؛ تنها `dir=rtl` کافی نیست.

## ۴) Sass صحیح، ترتیب import و Utility API

```scss
@import "bootstrap/scss/functions";
$body-bg: #09090b;
$body-color: #fafafa;
$border-radius: 1rem;
@import "bootstrap/scss/variables";
@import "bootstrap/scss/variables-dark";
@import "bootstrap/scss/maps";
@import "bootstrap/scss/mixins";
@import "bootstrap/scss/utilities";
@import "bootstrap/scss/root";
@import "bootstrap/scss/reboot";
@import "bootstrap/scss/type";
@import "bootstrap/scss/containers";
@import "bootstrap/scss/grid";
@import "bootstrap/scss/buttons";
@import "bootstrap/scss/helpers";
@import "bootstrap/scss/utilities/api";
```

هنگام سفارشی‌سازی از درون bootstrap.scss شروع کن و dependencyهای الزامی را حذف نکن. گسترش `$utilities` روی Sass Map ویژگی‌های `property`, `class`, `values`, `state`, `responsive`, `rtl`, `rfs`, `print` دارد؛ پس از بررسی دقیق مشخصات از آن استفاده کن. پلاگین‌های UI هم JavaScript دارند که جزو Sass نیست.

## ۵) Color Modes و کنترل دقیق کنتراست

```css
:root,[data-bs-theme="light"] {
  --bs-body-bg:#fafafa;
  --bs-body-color:#151515;
  --bs-border-color:#737373;
}
[data-bs-theme="dark"] {
  --bs-body-bg:#0a0a0a;
  --bs-body-color:#fafafa;
  --bs-border-color:#8c8c8c;
}
```

Bootstrap برای کامپوننت‌ها local CSS variables دارد. تغییر `--bs-primary` در :root الزاماً تمام variantهای دکمه را به‌تنهایی تغییر نمی‌دهد؛ `--bs-btn-*` و ریشهٔ Sass theme map را بررسی کن. Color Maps برای toneها و subtle backgrounds باید در روشن و تیره سازگار باشند. ترجیح سیستم در بار اول، ترجیح کاربر بعد از انتخاب و ذخیرهٔ امن محلی در پروژه پیاده شود. کنتراست محاسبه شود، نه فقط در نگاه زیبا به نظر برسد.

## ۶) کامپوننت‌های رسمی و مسئولیت تعامل

| کامپوننت | نیاز JS | قرارداد ضروری |
|---|---|---|
| Navbar | برای Collapse | toggler دارای `data-bs-target`, `aria-controls`, `aria-expanded` |
| Offcanvas | بله | backdrop، Escape، close button، title aria-labelledby |
| Modal | بله | focus trap از Bootstrap، labelledBy، lifecycle و جلوگیری از double-init |
| Dropdown | معمولاً | `data-bs-toggle="dropdown"`، Popper و keyboard |
| Accordion | بله برای Collapse | heading و aria-expanded مرتبط با panel |
| Tooltip/Popover | بله | initialization، dismiss و non-hover alternative |
| Toast | بله برای کنترل زمان | status vs alert، زمان کافی برای خواندن پیام |
| Carousel | بله | توقف autoplay و keyboard/gesture contract |
| Forms | اعتبارسنجی اختیاری | label، autocomplete، describedby، server validation |
| Alerts/Badges/Cards | خیر | رنگ به‌تنهایی نباید معنی را منتقل کند |
| Pagination | خیر | aria-label صفحه و `aria-current="page"` |

از framework هم‌زمان در یک عنصر دو plugin دیالوگ مختلف راه‌اندازی نکن. Modal Bootstrap از eventهای `shown.bs.modal` / `hidden.bs.modal` برای کارهای پس از انیمیشن استفاده می‌کند؛ متد `show()` به معنی پایان همزمان transition نیست.

## ۷) نسخه‌بندی و مهاجرت

- Bootstrap v4 → v5: jQuery حذف؛ `data-toggle` → `data-bs-toggle`، `ml-*` → `ms-*`, `mr-*` → `me-*`، شکل فرم‌ها تغییر کرده است؛ `sr-only` به `visually-hidden` بدل شده است.
- `navbar-dark` در طراحی‌های جدید جای خود را به `data-bs-theme="dark"` می‌دهد؛ شیوهٔ قدیمی را به‌عنوان روش پیش‌فرض نسخهٔ فعلی پیشنهاد نکن.
- نشانی `bootstrap-grid.css` تنها grid و برخی flex utilityها را دارد؛ برای Navbar/Modal/Forms باید بخش‌های دیگر وارد شوند.
- برای بهینه‌سازی، Sass partialهای موردنیاز را انتخاب کن اما dependency maps، root، helpers و utilities/api موردنیاز را حفظ کن.
- اگر سایت CSS سفارشی زیاد دارد، مهاجرت را component-by-component اجرا کن و هر مرحله در RTL و Dark تست شود.

## ۸) Three.js + Anime.js در Bootstrap

- صحنهٔ Three.js را داخل `ratio`, `position-relative` یا container خود اندازه‌گیری‌شده قرار بده. Canvas دارای ابعاد CSS مشخص، render resolution محدود به بودجه و ResizeObserver است.
- CSS transitions داخلی Modal/Offcanvas را Anime.js و GSAP همزمان کنترل نکن؛ ownership transform/opacity تعیین شود. برای entrance بیرون از Bootstrap plugin scope می‌توان timeline تعریف کرد.
- هنگام Offcanvas شدن/بسته‌شدن پنل 3D ممکن است عرض canvas عوض شود؛ پس از animation و resize، `camera.aspect` و renderer را به‌روز کن.
- انیمیشن متن فارسی نباید زنجیرهٔ شکل‌گیری گلیف‌ها را نابود کند. Anime.js برای block motion امن‌تر از شکستن تک‌حرف است.
- همهٔ UIهای واقعاً تعاملی باید keyboard/click/touch داشته باشند؛ pointer interaction در Canvas باید یک HTML overlay یا controls معادل داشته باشد.

## ۹) تعریف پایان و تست واقعی

- production build موفق و source map/asset paths صحیح.
- تمام اندازه‌های 320/390/576/768/992/1200/1440/1920، zoom 200/400%، keyboard Tab/Shift+Tab/Escape.
- `dir=rtl` با stylesheet RTL و `dir=ltr` با bundle مناسب؛ verify visual and DOM reading order.
- Dark/Light/OS preference، screen reader accessible names، reduced-motion، WebGL unavailable و forced-colors.
- آزمایش واقعی Modal و Offcanvas شامل focus return، Esc و backdrop.
- گزارش خطاهای کنسول، layout overflow، CLS و component leaks.

**مراجع اصلی:** https://getbootstrap.com/docs/5.3/getting-started/rtl/، https://getbootstrap.com/docs/5.3/layout/breakpoints/، https://getbootstrap.com/docs/5.3/customize/sass/، https://getbootstrap.com/docs/5.3/customize/color-modes/، https://getbootstrap.com/docs/5.3/utilities/api/، https://getbootstrap.com/docs/5.3/components/offcanvas/
