# راهنمای نسخهٔ TITAN ویژه Codex (بدون MCP)

تمام فایل‌های OMEGA باقی مانده‌اند. علاوه بر آن **803 Skill** نصب‌پذیر، **606 الگو** (۵۷۶ تازه + ۳۰ قبلی)، **194 فصل مرجع تخصصی**، **۲۷۹ راهنمای VibeFarsi** و **۴۰ راهنمای مبتنی بر پروژه‌های GitHub** در همین ZIP وجود دارد.

## نصب همه روی ویندوز

پوشه را از حالت ZIP خارج کنید. سپس PowerShell را در همان پوشه باز کنید و بزنید:

```powershell
.\install\install-codex.ps1 -ProjectPath "C:\Projects\YourProject"
```

برای نصب تنها موتورهای مشخص بدون انبوه Skillهای غیرمرتبط:

```powershell
.\install\install-titan-selective.ps1 -ProjectPath "C:\Projects\YourProject" -Domains anime,three,native -Core
```

در Codex بنویسید:

```text
Use $perfect-ai-master. Analyze the actual frontend project. Read applicable skills from the local atlas, implement features using Anime.js v4, real Three.js geometry and accessible semantic HTML, apply the ultimate color science guide, test responsive 320/390/768/1024/1440 in Persian RTL and English LTR. Do not use MCP. Verify before claiming completion.
```

## دسته‌بندی

- `skills/ztp-anime-*/SKILL.md`: انیمیشن DOM/SVG/Scroll/Text با Anime.js v4.
- `skills/ztp-three-*/SKILL.md`: هندسه، Mesh، Points، Shader، دوربین، glTF، Raycaster و کیفیت GPU.
- `skills/ztp-native-*/SKILL.md`: Responsive، Container Queries، WAAPI، View Transitions، دسترس‌پذیری و JS بومی.
- `skills/ztp-motion-*/SKILL.md`: Motion React و Motion JS.
- `skills/ztp-gsap-*/SKILL.md`: GSAP Timeline، ScrollTrigger و matchMedia.
- `skills/ztg-*/SKILL.md`: پیاده‌سازی و بررسی منابع منتخب GitHub، نه کپی سورس خارجی.
- `skills/perfect-ai-master/references/expert-atlas/`: ۱۴۴ فصل عمیق جدید.
- `COLOR-SCIENCE-ULTIMATE.md`: استاندارد رنگ، OKLCH، کنتراست واقعی، پالت سیاه‌وسفید، رفتار تم و تست.
- `registry/vibefarsi-items/`: فهرست قدیمی حفظ‌شده و قابل استفاده بدون MCP.

**تفاوت شمارش:** ۵۷۶ مورد جدید ترکیب **۳۶ تکنیک × ۱۶ سناریوی کاربردی** هستند، نه ۵۷۶ الگوریتم مستقل. هر Skill کد و مسیر اجرا و تست خودش را دارد. **فایل‌های رسمی ۴۰ مخزن GitHub در آرشیو نیستند**؛ راهنما و لینک آن‌ها هست، چون دریافت مستقیم و بررسی لایسنس در این محیط ممکن نشده است. 

برای راستی‌آزمایی تعداد فایل‌ها از `python tools/audit-titan-pack.py` استفاده کنید. آرشیوهای تمام نسخه‌های قبلی پوشهٔ `legacy-archives` هستند.
