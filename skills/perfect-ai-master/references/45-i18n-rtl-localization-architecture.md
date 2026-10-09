# Multilingual architecture, Persian RTL and international product readiness

Externalize messages by stable IDs with interpolation, plural/select where needed; no concatenation of translated sentence fragments. Direction per locale at document root; isolate LTR code, model names, usernames, paths with `<bdi>` or `dir=ltr`. Localize numbers/dates/currencies only where meaning requires; preserve raw data ISO strings/UTC internally. Mirror navigational directional icons, not physical logos or data plots automatically. Use CSS logical props. RTL skeleton must not hide incorrectly.

Test Persian, English, mixed strings, Arabic-Indic and Western digits, numbers + minus signs, date picker, search locale folding, paste/copy, form validation errors, long translations, LTR inside RTL charts, responsive nav and fonts. No auto-translation of proper product names unless explicitly required. Preserve charset UTF-8, semantic `lang` and consistent direction in portals.
