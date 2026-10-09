# انتخاب مهارت تخصصی بر اساس منبع معتبر (بدون MCP)

**نکته:** Skillهای `ztx9-*` در این افزونه تألیف جدید هستند؛ منابع زیر پشتوانهٔ الگوریتم و API بوده‌اند. کد مخزن‌های خارجی داخل بسته کپی نشده و دانلود آن‌ها اختیاری است.

| نیاز | انتخاب اصلی افزونه | منبع فنی منتخب | چرا این انتخاب؟ | مرز اعتبار |
|---|---|---|---|---|
| ثبت فریم انیمیشن | `ztx9-animation-frame-inspector` | [Microsoft Playwright Clock](https://playwright.dev/docs/clock) و [Visual snapshots](https://playwright.dev/docs/test-snapshots) | کنترل rAF/تایمر و خروجی PNG/JSON با مسیر ثابت | ویدیو/WebGL همیشه determinism کامل ندارند؛ Playwright screen diff پیش‌فرض animation را disable می‌کند |
| انیمیشن وابسته به اسکرول | `ztx9-scroll-timeline-compatibility` | [MDN animation-timeline](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline) | feature-detection و fallback قابل حذف، جدا برای scroll/view | CSS support به‌تنهایی صحت عملکرد هر مرورگر نیست |
| بهینه‌سازی GLB | `ztx9-gltf-asset-optimization` | [glTF Transform](https://gltf-transform.dev/cli) + [threejs-assets](https://github.com/cesartevisual/threejs-skills/tree/main/skills/threejs-assets) | pipeline CLI شناخته‌شده و راهنمای lifecycle دارایی | حجم فایل کمتر الزاماً GPU/دیکود بهتر نیست |
| جای‌گذاری 3D | `ztx9-3d-text-aware-composer` | [Three.js Box3](https://threejs.org/docs/pages/Box3.html) + [Vector3.project](https://threejs.org/docs/pages/Vector3.html) | هندسهٔ قابل‌اندازه‌گیری به‌جای offset حدسی | صورت مدل و اعوجاج postprocessing نیاز به تست نهایی دارد |
| ریشه‌یابی بصری | `ztx9-visual-regression-root-cause` | [Playwright test snapshots](https://playwright.dev/docs/test-snapshots) + [threejs-testing](https://github.com/cesartevisual/threejs-skills/tree/main/skills/threejs-testing) | diff تصویری همراه با DOM/CSS و رتبه‌بندی احتمال | بدون sourcemap نمی‌توان نام فایل واقعی را به قطعیت نسبت داد |
| پروفایل دستگاه واقعی | `ztx9-real-device-motion-profiler` | [Chrome Remote Debugging Android](https://developer.chrome.com/docs/devtools/remote-debugging/) + [Long Animation Frames](https://developer.chrome.com/docs/web-platform/long-animation-frames) + [threejs-performance](https://github.com/cesartevisual/threejs-skills/tree/main/skills/threejs-performance) | دادهٔ گوشی واقعی و فریم‌های طولانی | rAF اندازه‌گیری GPU presentation FPS واقعی نیست؛ نیازمند گوشی و USB debugging |

## ضوابط Codex
- منابع بیرونی را روی نسخهٔ نصب‌شده verify کن؛ از هر منبع تنها بخش مرتبط را بارگذاری کن.
- تغییرات پیشین را حذف نکن. ابتدا baseline بگیر و بدون ادعای تست‌نشده عمل کن.
- اگر دسترسی به گوشی یا assets نیست، گزارش وضعیت not-run تولید کن، نه موفقیت ساختگی.
