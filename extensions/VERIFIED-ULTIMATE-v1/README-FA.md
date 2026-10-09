# Perfect_AI VERIFIED ULTIMATE — افزونهٔ بدون تخریب

این افزونه به آرشیو `Perfect_AI_VERIFIED_ENGINE` اضافه شده و هیچ‌کدام از فایل‌های قبلی را حذف یا تغییر نمی‌دهد.

## ۱۰ قابلیت
- **Intelligent Skill Router 3.0**: Select the smallest relevant set of existing/new skills by goal, repository, capabilities, confidence, dependencies and conflicts.
- **Visual Benchmark Laboratory**: Render multiple real design variants and compare reproducible screenshots, brand criteria, accessibility and measured web performance.
- **Cross-Browser CI Engine**: Run reproducible Playwright tests across Chromium Firefox WebKit with RTL LTR reduced-motion and responsive projects.
- **Deterministic Cinematic Timeline**: Drive Anime.js GSAP Motion and Three.js from one normalized deterministic playhead with seek pause reverse replay and capture.
- **3D Scene Constraint Solver**: Place models and cameras using projected bounds, readable text, safe margins and prioritized brand composition constraints.
- **WebGL/WebGPU Compatibility Lab**: Select a compatible Three.js rendering backend and gracefully recover from failed initialization or unsupported shaders.
- **Mobile Motion Budget Engine**: Measure frame times and adjust DPR particles shadows LOD and postprocessing under explicit thresholds and hysteresis.
- **DTCG Design Tokens Standard Engine**: Validate typed DTCG tokens and aliases; produce consistent CSS Tailwind and Bootstrap compatible custom properties.
- **Multi-Agent Evidence Arbitration 2.0**: Merge independent critic advocate brand a11y 3D and performance findings, require verifiable evidence and resolve contradictory actions.
- **Production Telemetry & Regression Watch**: Measure consented real user web vitals and runtime problems, compare cohort p75 with baselines and alert on reproducible regressions.

## نصب ویندوز

PowerShell را در ریشهٔ `Perfect_AI_TITAN_PLUS_Codex_Skills` باز کنید:

```powershell
.\extensions\VERIFIED-ULTIMATE-v1\install\install-windows.ps1 -ProjectPath 'C:\Projects\YourSite'
```

این دستور Dry Run است؛ برای نصب واقعی `-Execute` را اضافه کنید. به‌صورت پیش‌فرض هیچ Skill موجودی را بازنویسی نمی‌کند. راهنماهای فایل‌ها در پوشهٔ Extensions باقی می‌مانند؛ راهبر Skillها لینک نسبی به ابزارها دارد و برای اجرای آن بهتر است کل پوشه افزونه را داخل پروژه در مسیر `.perfect-ai-extensions/VERIFIED-ULTIMATE-v1` کپی کنید.

## دستورات سادهٔ قابل اجرا

```powershell
python .\extensions\VERIFIED-ULTIMATE-v1\scripts\skill_router.py route --index '.\extensions\VERIFIED-ULTIMATE-v1\data\skill-index.json' --task 'سایت سه بعدی ریسپانسیو با اسکرول و انیمیشن' --top 8
python .\extensions\VERIFIED-ULTIMATE-v1\scripts	oken_tools.py validate '.\extensions\VERIFIED-ULTIMATE-v1\examples\design-tokens	okens.json'
python .\extensions\VERIFIED-ULTIMATE-v1\scriptsrbitrate.py '.\extensions\VERIFIED-ULTIMATE-v1\examplesgent-arbitrationindings.json'
python .\extensions\VERIFIED-ULTIMATE-v1\scripts	elemetry_report.py '.\extensions\VERIFIED-ULTIMATE-v1\examples\production-telemetry\sample.jsonl'
```

## وضعیت تأیید
- ابزارهای مستقل دارای تست واحد Python/Node هستند.
- قالب‌های CI و مرورگری نیازمند نصب npm و مرورگرهای Playwright در پروژهٔ مقصد هستند.
- بنچمارک گوشی واقعی و WebGPU نیازمند دستگاه یا GPU سازگارند. شواهد آن‌ها در این بسته جعل نشده‌اند.
- کدها به MCP وابسته نیستند و از منابع رسمی الهام گرفته‌اند، نه کپی مخزن‌های ثالث.
