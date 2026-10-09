# Perfect_AI Frame–Space–Device LAB v1 — Additive Extension

این افزونه به بستهٔ AUTONOMOUS LAB اضافه می‌شود و هیچ فایل یا Skill پیشین را تغییر نمی‌دهد.

## شش Skill اصلی
1. **Animation Frame Inspector**: کنترل زمان فریم‌ها در چند حالت scroll/time با اسکرین‌شات، DOM و JSON گزارش. هیچ‌گاه screenshot ثابت را معادل تست motion در نظر نگیر.
2. **Scroll Timeline Compatibility Engine**: CSS native با feature detection و fallback مبتنی بر rAF؛ پشتیبانی از nested scroll، reverse و reduced-motion.
3. **3D Asset Optimization Pipeline**: ممیزی GLB با parser مستقل، glTF Transform برای Meshopt/Draco/KTX2، گزارش حجم قبل/بعد و آزمون سلامت/نمایش.
4. **3D Text-Aware Composer**: محاسبهٔ کادر متن، project کردن Box3 در viewport و جستجوی موقعیت کم‌همپوشان با fallback موبایل.
5. **Visual Regression Root-Cause Finder**: مقایسهٔ PNG + snapshot هندسه/CSS DOM و رتبه‌بندی کاندیدهای علت؛ بدون ادعای قطعیت نسبت به فایل منبع.
6. **Real Device Motion Profiler**: جمع‌آوری دادهٔ واقعی Chrome Android با ADB و CDP/Playwright، time-frame و LoAF، پرهیز از ادعای بنچمارک در شبیه‌ساز.

## شیوهٔ استفاده
- از ریشهٔ بسته، `extensions/FRAME-SPACE-DEVICE-LAB-v1/install/install.ps1 -ProjectPath C:\Projects\YourSite` را اجرا کن.
- نصب‌کننده هیچ پوشهٔ Skill موجودی را overwrite نمی‌کند؛ پوشهٔ تازه را در `.agents/skills/` کپی می‌کند.
- در Codex بنویس: `Use $ztx9-frame-space-device-master and only the relevant ztx9-* skills. Preserve all existing files. Implement, run tests, capture evidence, and report unverified device-dependent behavior. No MCP.`
- ابزارها از داخل `extensions/FRAME-SPACE-DEVICE-LAB-v1` اجرا می‌شوند. برای Playwright داخل این پوشه `npm install` و `npx playwright install chromium` را در صورت نیاز اجرا کن. نصب وابستگی‌ها/دستگاه روی ماشین مقصد خودکار نیست.
- Windows: PowerShell 7+ پیشنهاد می‌شود؛ مسیرهای دارای فاصله را در کوتیشن بگذار.

## اجرای سریع
```powershell
cd extensions/FRAME-SPACE-DEVICE-LAB-v1
npm install
node tools/capture-frames.mjs --url http://localhost:5173 --out reports/frames --mode scroll --selector '#hero'
node tools/capture-layout.mjs --url http://localhost:5173 --out reports/current-layout.json
python tools/visual-root-cause.py --baseline before.png --current after.png --before-layout before-layout.json --after-layout reports/current-layout.json --out reports/causes.json
python tools/glb-inspect.py assets/model.glb --json reports/model.json
node tools/glb-optimize.mjs --input assets/model.glb --output assets/model.optimized.glb --profile mobile
node tools/real-device-profiler.mjs --url https://your-site.example --duration 8 --out reports/device.json
```

## صداقت آزمون‌ها
موفقیت parse/CLI ≠ اجرای واقعی WebGL / عملکرد موبایل. تست موبایل باید روی دستگاه واقعی و با اجازهٔ کاربر باشد. تصویر ثابت به‌تنهایی اثبات صحت انیمیشن نیست. در هر گزارش سطح اعتبار را مشخص کن: documented / syntax-verified / browser-verified / real-device-verified.

## وابستگی‌های پایتون
برای `visual-root-cause.py`: `python -m pip install -r requirements.txt` (Pillow و NumPy). بررسی ساختاری `glb-inspect.py` بدون کتابخانهٔ اضافی اجرا می‌شود.
