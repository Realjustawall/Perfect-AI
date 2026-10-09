# نصب و تست در ویندوز

در PowerShell:

```powershell
.\extensions\VERIFIED-ULTIMATE-v1\install\install-windows.ps1 -ProjectPath 'C:\Projects\YourSite'
# نمایش تغییرات بدون نصب
.\extensions\VERIFIED-ULTIMATE-v1\install\install-windows.ps1 -ProjectPath 'C:\Projects\YourSite' -Execute -CopyReferences
```

منابع محلی با `-CopyReferences` در `.perfect-ai-extensions/VERIFIED-ULTIMATE-v1` ذخیره می‌شوند. اسکریپت هیچ فولدر قبلی را بازنویسی نمی‌کند.

```
python -m unittest discover -s extensions/VERIFIED-ULTIMATE-v1/tests -v
node --test extensions/VERIFIED-ULTIMATE-v1/examples/cinematic-timeline/*.test.mjs
node --test extensions/VERIFIED-ULTIMATE-v1/examples/scene-constraint/*.test.mjs
node --test extensions/VERIFIED-ULTIMATE-v1/examples/mobile-motion/*.test.mjs
```

نمونهٔ مرورگر و CI به نصب Playwright و مرورگرهای جداگانه نیاز دارد. در مرورگر Safari/WebKit یا GPU فیزیکی فقط پس از تست عملی می‌توان ادعای Pass داشت.
