# Persian/English product localization, Iranian flows & VibeFarsi skills

## General Persian content rules

- `<html lang="fa" dir="rtl">`, mixed-direction LTR isolates for filenames, URL, email, phone, IBAN, model IDs and CLI code.
- Proper ZWNJ: می‌شود, کتاب‌ها, بهینه‌سازی, برنامه‌نویسی. Use simple copy suited to context; don't over-formalize a consumer CTA.
- Vazirmatn (license permitting) or another licensed Persian font; no negative letter-spacing on Persian; test fallback width.
- Use `Intl.NumberFormat('fa-IR')` for display of Persian digits and grouping, but store numeric canonical amounts as numbers/decimal units.
- Time zones: persist ISO UTC internally; display `Asia/Tehran` appropriately; do not assume UTC offset automatically on all users.
- Calendar: storage Gregorian ISO; display Jalali with Intl/calendar support or a well-tested Jalali library; first week day for Iran Saturday where product requires; test Nowruz boundaries, leap years and datepicker month transitions.
- Currency: clearly specify تومان vs ریال, never implicitly multiply/divide without unit in variable and tests; do not localize accounting storage into formatted strings.

## LTR-safe component conventions

| Field | UI | Canonical validation |
| --- | --- | --- |
| Mobile phone | Persian label + LTR digits input | Iranian mobile format; normalize ۰١۲ and separators |
| Card number | LTR visual group blocks | checksum Luhn plus issuer constraints if relevant |
| National ID | Persian label, LTR input | checksum and realistic invalid sequences |
| IBAN | LTR `IR..` input | mod 97 and country length/structure |
| Postal code | LTR 10-digit control | rules verified against business requirements |
| OTP | LTR and Persian-digit keyboard accepted | server expiry, throttling, wrong-code feedback |
| Dates | Persian calendar UI where requested | persisted timestamp with timezone design |
| URLs/CODEX names | `<bdi dir=ltr>` | do not reorder punctuation in RTL text |

Normalization sample:

```ts
export function toAsciiDigits(value: string) {
  return value
    .replace(/[\u06F0-\u06F9]/g, d => String(d.charCodeAt(0)-0x06F0))
    .replace(/[\u0660-\u0669]/g, d => String(d.charCodeAt(0)-0x0660));
}
export const faFormat = (value: number) => new Intl.NumberFormat('fa-IR').format(value);
```

## 14 VibeFarsi skills — behavior & install commands

The following are **official catalog entries** (7 agent skills + 6 reference guides + 1 separately maintained external skill) as listed on https://vibefarsi.ir/skills. To get the author's implementation, run the indicated CLI rather than assume our original local summary replaces their source.

| Skill | When to invoke | Key safeguards |
| --- | --- | --- |
| persian-conversational | social copy and consumer chat | avoid artificial stiff phrasing/hackasre |
| persian-formal | business letters and formal notices | concise claims, named roles, dates |
| persian-ui-copy | buttons, placeholders, errors, empty states | user-action text, accessibility |
| persian-rtl-ui | all Iranian websites | logical CSS, LTR isolates, script font |
| jalali-calendar | booking, dates, reporting | Gregorian storage/Jalali display, timezone |
| iran-validation | Iranian identity/banking/mobile fields | normalization, checksum, server verification |
| persian-seo | SEO in Persian | `lang`/hreflang, JSON-LD, canonical slug |
| agents-md-persian | project-wide agent rules | integrate without wiping existing AGENTS.md |
| ui-craft-rules | prevent generic UI and messy spacing | consistent tokens, true states, contrast |
| persian-typography | font and text systems | font license and ZWNJ, no negative spacing |
| parspack-s3-upload | image files / cloud storage | MIME, file size, server credentials, signed URLs |
| zarinpal-payment | Iranian payment workflow | تومان/ریال, server-side verify, idempotency |
| kavenegar-otp | Iranian SMS code flow | expiry, rate limit, account enumeration safety |
| persian-writing | general Persian editorial text | grammar, tone, concise terminology |

For the 13 VibeFarsi-maintained entries: `npx vibefarsi add <slug>` **inside target project**; `persian-writing` is an external MIT-licensed repository at https://github.com/ali2000hos/persian-writing, not a VibeFarsi CLI skill. the official CLI documents `.claude/skills/` as destination, and VibeFarsi page also documents a Codex `.agents/skills/` manual path for the 7 skill entries; the 6 guides are Markdown documents in `docs/` and should be referenced from `AGENTS.md`. Use bundled installer script for Codex copying if desired; inspect generated files before accepting.

Do not fake integrations: Zarinpal/ParsPack/Kavenegar require credentials/backend, never include sample production keys. The original 14 skills are owned/maintained by VibeFarsi, not our authored summaries.

## Copywriting formula

Heading (benefit in <~11 Persian words) → one explanatory sentence → primary action verb → secondary action where real → optional trust/explainer evidence. Error = what failed + how to fix; success = outcome + next action. A warning uses straightforward, non-threatening language. For captions vs administrative writing switch style intentionally; don't combine informal slang with formal legal copy.

## Visual text testing

Test headlines with real Persian sentences containing «», ZWNJ, numerals, ellipses, zero-width marks, English acronyms and emoji. Verify caret position, cursor selection, letter joining after split animations, horizontal and vertical alignment, text-size adjustments and 200% zoom.
