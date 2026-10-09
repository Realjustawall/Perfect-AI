# VibeFarsi complete public catalog — slug-by-slug implementation reference

> As listed at https://vibefarsi.ir/skills and https://vibefarsi.ir/docs on 2026-10-09. Official files are NOT copied verbatim. This is an original practical map for Codex: each entry includes a purpose, target behavior, engineering contract and verification criteria. The author's current code can be installed with `npx vibefarsi add <slug>` in a compatible project. Some entries are design assets/blocks, not separate Agent Skills.

**Integration:** VibeFarsi sources are typically CSS/React without Anime.js dependency for its animations. To build an Anime.js variant, reproduce the *intended effect* with Anime.js v4 without claiming its source equals the VibeFarsi implementation. For VibeFarsi original code, use the official CLI and verify terms/license.

## Counts and navigation

- [components](#components): **78** items
- [blocks](#blocks): **23** items
- [charts](#charts): **15** items
- [animations](#animations): **63** items
- [backgrounds](#backgrounds): **44** items
- [templates](#templates): **30** items
- [sites](#sites): **6** items
- [design-systems](#design-systems): **6** items
- [skills](#skills): **14** items

All site catalog items indexed by category: **279**.

## components

### 1. `button` — UI component

- **Goal / behavior:** «button» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/button
- **Official command / upstream (check license and target):** `npx vibefarsi add button`

### 2. `input` — UI component

- **Goal / behavior:** «input» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/input
- **Official command / upstream (check license and target):** `npx vibefarsi add input`

### 3. `textarea` — UI component

- **Goal / behavior:** «textarea» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/textarea
- **Official command / upstream (check license and target):** `npx vibefarsi add textarea`

### 4. `select` — UI component

- **Goal / behavior:** «select» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/select
- **Official command / upstream (check license and target):** `npx vibefarsi add select`

### 5. `combobox` — UI component

- **Goal / behavior:** «combobox» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/combobox
- **Official command / upstream (check license and target):** `npx vibefarsi add combobox`

### 6. `otp-field` — UI component

- **Goal / behavior:** «otp-field» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/otp-field
- **Official command / upstream (check license and target):** `npx vibefarsi add otp-field`

### 7. `number-field` — UI component

- **Goal / behavior:** «number-field» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/number-field
- **Official command / upstream (check license and target):** `npx vibefarsi add number-field`

### 8. `checkbox-group` — UI component

- **Goal / behavior:** «checkbox-group» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/checkbox-group
- **Official command / upstream (check license and target):** `npx vibefarsi add checkbox-group`

### 9. `radio-group` — UI component

- **Goal / behavior:** «radio-group» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/radio-group
- **Official command / upstream (check license and target):** `npx vibefarsi add radio-group`

### 10. `switch` — UI component

- **Goal / behavior:** «switch» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/switch
- **Official command / upstream (check license and target):** `npx vibefarsi add switch`

### 11. `slider` — UI component

- **Goal / behavior:** «slider» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/slider
- **Official command / upstream (check license and target):** `npx vibefarsi add slider`

### 12. `range-slider` — UI component

- **Goal / behavior:** «range-slider» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/range-slider
- **Official command / upstream (check license and target):** `npx vibefarsi add range-slider`

### 13. `rating` — UI component

- **Goal / behavior:** «rating» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/rating
- **Official command / upstream (check license and target):** `npx vibefarsi add rating`

### 14. `file-upload` — UI component

- **Goal / behavior:** «file-upload» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/file-upload
- **Official command / upstream (check license and target):** `npx vibefarsi add file-upload`

### 15. `calendar` — UI component

- **Goal / behavior:** «calendar» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/calendar
- **Official command / upstream (check license and target):** `npx vibefarsi add calendar`

### 16. `date-picker` — UI component

- **Goal / behavior:** «date-picker» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/date-picker
- **Official command / upstream (check license and target):** `npx vibefarsi add date-picker`

### 17. `command` — UI component

- **Goal / behavior:** «command» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/command
- **Official command / upstream (check license and target):** `npx vibefarsi add command`

### 18. `dialog` — UI component

- **Goal / behavior:** «dialog» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/dialog
- **Official command / upstream (check license and target):** `npx vibefarsi add dialog`

### 19. `alert-dialog` — UI component

- **Goal / behavior:** «alert-dialog» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/alert-dialog
- **Official command / upstream (check license and target):** `npx vibefarsi add alert-dialog`

### 20. `dropdown-menu` — UI component

- **Goal / behavior:** «dropdown-menu» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/dropdown-menu
- **Official command / upstream (check license and target):** `npx vibefarsi add dropdown-menu`

### 21. `tooltip` — UI component

- **Goal / behavior:** «tooltip» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/tooltip
- **Official command / upstream (check license and target):** `npx vibefarsi add tooltip`

### 22. `sheet` — UI component

- **Goal / behavior:** «sheet» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/sheet
- **Official command / upstream (check license and target):** `npx vibefarsi add sheet`

### 23. `tabs` — UI component

- **Goal / behavior:** «tabs» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/tabs
- **Official command / upstream (check license and target):** `npx vibefarsi add tabs`

### 24. `pagination` — UI component

- **Goal / behavior:** «pagination» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/pagination
- **Official command / upstream (check license and target):** `npx vibefarsi add pagination`

### 25. `breadcrumb` — UI component

- **Goal / behavior:** «breadcrumb» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/breadcrumb
- **Official command / upstream (check license and target):** `npx vibefarsi add breadcrumb`

### 26. `stepper` — UI component

- **Goal / behavior:** «stepper» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/stepper
- **Official command / upstream (check license and target):** `npx vibefarsi add stepper`

### 27. `sidebar` — UI component

- **Goal / behavior:** «sidebar» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/sidebar
- **Official command / upstream (check license and target):** `npx vibefarsi add sidebar`

### 28. `toast` — UI component

- **Goal / behavior:** «toast» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/toast
- **Official command / upstream (check license and target):** `npx vibefarsi add toast`

### 29. `alert` — UI component

- **Goal / behavior:** «alert» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/alert
- **Official command / upstream (check license and target):** `npx vibefarsi add alert`

### 30. `progress` — UI component

- **Goal / behavior:** «progress» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/progress
- **Official command / upstream (check license and target):** `npx vibefarsi add progress`

### 31. `skeleton` — UI component

- **Goal / behavior:** «skeleton» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/skeleton
- **Official command / upstream (check license and target):** `npx vibefarsi add skeleton`

### 32. `empty-state` — UI component

- **Goal / behavior:** «empty-state» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/empty-state
- **Official command / upstream (check license and target):** `npx vibefarsi add empty-state`

### 33. `badge` — UI component

- **Goal / behavior:** «badge» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/badge
- **Official command / upstream (check license and target):** `npx vibefarsi add badge`

### 34. `avatar` — UI component

- **Goal / behavior:** «avatar» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/avatar
- **Official command / upstream (check license and target):** `npx vibefarsi add avatar`

### 35. `table` — UI component

- **Goal / behavior:** «table» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/table
- **Official command / upstream (check license and target):** `npx vibefarsi add table`

### 36. `stat` — UI component

- **Goal / behavior:** «stat» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/stat
- **Official command / upstream (check license and target):** `npx vibefarsi add stat`

### 37. `price` — UI component

- **Goal / behavior:** «price» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/price
- **Official command / upstream (check license and target):** `npx vibefarsi add price`

### 38. `timeline` — UI component

- **Goal / behavior:** «timeline» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/timeline
- **Official command / upstream (check license and target):** `npx vibefarsi add timeline`

### 39. `accordion` — UI component

- **Goal / behavior:** «accordion» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/accordion
- **Official command / upstream (check license and target):** `npx vibefarsi add accordion`

### 40. `kbd` — UI component

- **Goal / behavior:** «kbd» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/kbd
- **Official command / upstream (check license and target):** `npx vibefarsi add kbd`

### 41. `prompt-input` — UI component

- **Goal / behavior:** «prompt-input» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/prompt-input
- **Official command / upstream (check license and target):** `npx vibefarsi add prompt-input`

### 42. `card` — UI component

- **Goal / behavior:** «card» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/card
- **Official command / upstream (check license and target):** `npx vibefarsi add card`

### 43. `data-table` — UI component

- **Goal / behavior:** «data-table» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/data-table
- **Official command / upstream (check license and target):** `npx vibefarsi add data-table`

### 44. `chart` — UI component

- **Goal / behavior:** «chart» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/chart
- **Official command / upstream (check license and target):** `npx vibefarsi add chart`

### 45. `popover` — UI component

- **Goal / behavior:** «popover» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/popover
- **Official command / upstream (check license and target):** `npx vibefarsi add popover`

### 46. `context-menu` — UI component

- **Goal / behavior:** «context-menu» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/context-menu
- **Official command / upstream (check license and target):** `npx vibefarsi add context-menu`

### 47. `hover-card` — UI component

- **Goal / behavior:** «hover-card» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/hover-card
- **Official command / upstream (check license and target):** `npx vibefarsi add hover-card`

### 48. `carousel` — UI component

- **Goal / behavior:** «carousel» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/carousel
- **Official command / upstream (check license and target):** `npx vibefarsi add carousel`

### 49. `combobox-async` — UI component

- **Goal / behavior:** «combobox-async» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/combobox-async
- **Official command / upstream (check license and target):** `npx vibefarsi add combobox-async`

### 50. `password-input` — UI component

- **Goal / behavior:** «password-input» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/password-input
- **Official command / upstream (check license and target):** `npx vibefarsi add password-input`

### 51. `iban-input` — UI component

- **Goal / behavior:** «iban-input» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/iban-input
- **Official command / upstream (check license and target):** `npx vibefarsi add iban-input`

### 52. `phone-input` — UI component

- **Goal / behavior:** «phone-input» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/phone-input
- **Official command / upstream (check license and target):** `npx vibefarsi add phone-input`

### 53. `notification-inbox` — UI component

- **Goal / behavior:** «notification-inbox» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/notification-inbox
- **Official command / upstream (check license and target):** `npx vibefarsi add notification-inbox`

### 54. `form` — UI component

- **Goal / behavior:** «form» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/form
- **Official command / upstream (check license and target):** `npx vibefarsi add form`

### 55. `national-id-input` — UI component

- **Goal / behavior:** «national-id-input» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/national-id-input
- **Official command / upstream (check license and target):** `npx vibefarsi add national-id-input`

### 56. `card-number-input` — UI component

- **Goal / behavior:** «card-number-input» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/card-number-input
- **Official command / upstream (check license and target):** `npx vibefarsi add card-number-input`

### 57. `plate-input` — UI component

- **Goal / behavior:** «plate-input» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/plate-input
- **Official command / upstream (check license and target):** `npx vibefarsi add plate-input`

### 58. `address-picker` — UI component

- **Goal / behavior:** «address-picker» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/address-picker
- **Official command / upstream (check license and target):** `npx vibefarsi add address-picker`

### 59. `postal-code-input` — UI component

- **Goal / behavior:** «postal-code-input» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/postal-code-input
- **Official command / upstream (check license and target):** `npx vibefarsi add postal-code-input`

### 60. `date-range-picker` — UI component

- **Goal / behavior:** «date-range-picker» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/date-range-picker
- **Official command / upstream (check license and target):** `npx vibefarsi add date-range-picker`

### 61. `time-picker` — UI component

- **Goal / behavior:** «time-picker» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/time-picker
- **Official command / upstream (check license and target):** `npx vibefarsi add time-picker`

### 62. `amount-input` — UI component

- **Goal / behavior:** «amount-input» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/amount-input
- **Official command / upstream (check license and target):** `npx vibefarsi add amount-input`

### 63. `search-input` — UI component

- **Goal / behavior:** «search-input» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/search-input
- **Official command / upstream (check license and target):** `npx vibefarsi add search-input`

### 64. `tags-input` — UI component

- **Goal / behavior:** «tags-input» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/tags-input
- **Official command / upstream (check license and target):** `npx vibefarsi add tags-input`

### 65. `multi-select` — UI component

- **Goal / behavior:** «multi-select» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/multi-select
- **Official command / upstream (check license and target):** `npx vibefarsi add multi-select`

### 66. `toggle` — UI component

- **Goal / behavior:** «toggle» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/toggle
- **Official command / upstream (check license and target):** `npx vibefarsi add toggle`

### 67. `segmented-control` — UI component

- **Goal / behavior:** «segmented-control» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/segmented-control
- **Official command / upstream (check license and target):** `npx vibefarsi add segmented-control`

### 68. `separator` — UI component

- **Goal / behavior:** «separator» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/separator
- **Official command / upstream (check license and target):** `npx vibefarsi add separator`

### 69. `spinner` — UI component

- **Goal / behavior:** «spinner» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/spinner
- **Official command / upstream (check license and target):** `npx vibefarsi add spinner`

### 70. `collapsible` — UI component

- **Goal / behavior:** «collapsible» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/collapsible
- **Official command / upstream (check license and target):** `npx vibefarsi add collapsible`

### 71. `scroll-area` — UI component

- **Goal / behavior:** «scroll-area» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/scroll-area
- **Official command / upstream (check license and target):** `npx vibefarsi add scroll-area`

### 72. `countdown` — UI component

- **Goal / behavior:** «countdown» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/countdown
- **Official command / upstream (check license and target):** `npx vibefarsi add countdown`

### 73. `video-player` — UI component

- **Goal / behavior:** «video-player» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/video-player
- **Official command / upstream (check license and target):** `npx vibefarsi add video-player`

### 74. `course-outline` — UI component

- **Goal / behavior:** «course-outline» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/course-outline
- **Official command / upstream (check license and target):** `npx vibefarsi add course-outline`

### 75. `lesson-note` — UI component

- **Goal / behavior:** «lesson-note» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/lesson-note
- **Official command / upstream (check license and target):** `npx vibefarsi add lesson-note`

### 76. `function-plot` — UI component

- **Goal / behavior:** «function-plot» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/function-plot
- **Official command / upstream (check license and target):** `npx vibefarsi add function-plot`

### 77. `hotspot-figure` — UI component

- **Goal / behavior:** «hotspot-figure» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/hotspot-figure
- **Official command / upstream (check license and target):** `npx vibefarsi add hotspot-figure`

### 78. `quiz` — UI component

- **Goal / behavior:** «quiz» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.
- **Engineering:** حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.
- **Verification:** role/label/focus/keyboard، RTL و موبایل تست شود.
- **Official catalog:** https://vibefarsi.ir/components/quiz
- **Official command / upstream (check license and target):** `npx vibefarsi add quiz`

## blocks

### 1. `hero` — Page block

- **Goal / behavior:** بلاک «hero» را با content contract، CTA، media aspect-ratio و breakpoint مستقل بساز.
- **Engineering:** سلسله‌مراتب متن، grid/breakpoint، CTA واقعی، حالات بارگذاری و responsive را مشخص کن.
- **Verification:** مدارک سئو/semantics، 320px و بدون JS بررسی شود.
- **Official catalog:** https://vibefarsi.ir/blocks/hero
- **Official command / upstream (check license and target):** `npx vibefarsi add hero`

### 2. `features` — Page block

- **Goal / behavior:** بلاک «features» را با content contract، CTA، media aspect-ratio و breakpoint مستقل بساز.
- **Engineering:** سلسله‌مراتب متن، grid/breakpoint، CTA واقعی، حالات بارگذاری و responsive را مشخص کن.
- **Verification:** مدارک سئو/semantics، 320px و بدون JS بررسی شود.
- **Official catalog:** https://vibefarsi.ir/blocks/features
- **Official command / upstream (check license and target):** `npx vibefarsi add features`

### 3. `pricing` — Page block

- **Goal / behavior:** بلاک «pricing» را با content contract، CTA، media aspect-ratio و breakpoint مستقل بساز.
- **Engineering:** سلسله‌مراتب متن، grid/breakpoint، CTA واقعی، حالات بارگذاری و responsive را مشخص کن.
- **Verification:** مدارک سئو/semantics، 320px و بدون JS بررسی شود.
- **Official catalog:** https://vibefarsi.ir/blocks/pricing
- **Official command / upstream (check license and target):** `npx vibefarsi add pricing`

### 4. `faq` — Page block

- **Goal / behavior:** بلاک «faq» را با content contract، CTA، media aspect-ratio و breakpoint مستقل بساز.
- **Engineering:** سلسله‌مراتب متن، grid/breakpoint، CTA واقعی، حالات بارگذاری و responsive را مشخص کن.
- **Verification:** مدارک سئو/semantics، 320px و بدون JS بررسی شود.
- **Official catalog:** https://vibefarsi.ir/blocks/faq
- **Official command / upstream (check license and target):** `npx vibefarsi add faq`

### 5. `stats` — Page block

- **Goal / behavior:** بلاک «stats» را با content contract، CTA، media aspect-ratio و breakpoint مستقل بساز.
- **Engineering:** سلسله‌مراتب متن، grid/breakpoint، CTA واقعی، حالات بارگذاری و responsive را مشخص کن.
- **Verification:** مدارک سئو/semantics، 320px و بدون JS بررسی شود.
- **Official catalog:** https://vibefarsi.ir/blocks/stats
- **Official command / upstream (check license and target):** `npx vibefarsi add stats`

### 6. `testimonials` — Page block

- **Goal / behavior:** بلاک «testimonials» را با content contract، CTA، media aspect-ratio و breakpoint مستقل بساز.
- **Engineering:** سلسله‌مراتب متن، grid/breakpoint، CTA واقعی، حالات بارگذاری و responsive را مشخص کن.
- **Verification:** مدارک سئو/semantics، 320px و بدون JS بررسی شود.
- **Official catalog:** https://vibefarsi.ir/blocks/testimonials
- **Official command / upstream (check license and target):** `npx vibefarsi add testimonials`

### 7. `auth-card` — Page block

- **Goal / behavior:** بلاک «auth-card» را با content contract، CTA، media aspect-ratio و breakpoint مستقل بساز.
- **Engineering:** سلسله‌مراتب متن، grid/breakpoint، CTA واقعی، حالات بارگذاری و responsive را مشخص کن.
- **Verification:** مدارک سئو/semantics، 320px و بدون JS بررسی شود.
- **Official catalog:** https://vibefarsi.ir/blocks/auth-card
- **Official command / upstream (check license and target):** `npx vibefarsi add auth-card`

### 8. `cta` — Page block

- **Goal / behavior:** بلاک «cta» را با content contract، CTA، media aspect-ratio و breakpoint مستقل بساز.
- **Engineering:** سلسله‌مراتب متن، grid/breakpoint، CTA واقعی، حالات بارگذاری و responsive را مشخص کن.
- **Verification:** مدارک سئو/semantics، 320px و بدون JS بررسی شود.
- **Official catalog:** https://vibefarsi.ir/blocks/cta
- **Official command / upstream (check license and target):** `npx vibefarsi add cta`

### 9. `banner` — Page block

- **Goal / behavior:** بلاک «banner» را با content contract، CTA، media aspect-ratio و breakpoint مستقل بساز.
- **Engineering:** سلسله‌مراتب متن، grid/breakpoint، CTA واقعی، حالات بارگذاری و responsive را مشخص کن.
- **Verification:** مدارک سئو/semantics، 320px و بدون JS بررسی شود.
- **Official catalog:** https://vibefarsi.ir/blocks/banner
- **Official command / upstream (check license and target):** `npx vibefarsi add banner`

### 10. `navbar` — Page block

- **Goal / behavior:** بلاک «navbar» را با content contract، CTA، media aspect-ratio و breakpoint مستقل بساز.
- **Engineering:** سلسله‌مراتب متن، grid/breakpoint، CTA واقعی، حالات بارگذاری و responsive را مشخص کن.
- **Verification:** مدارک سئو/semantics، 320px و بدون JS بررسی شود.
- **Official catalog:** https://vibefarsi.ir/blocks/navbar
- **Official command / upstream (check license and target):** `npx vibefarsi add navbar`

### 11. `logo-cloud` — Page block

- **Goal / behavior:** بلاک «logo-cloud» را با content contract، CTA، media aspect-ratio و breakpoint مستقل بساز.
- **Engineering:** سلسله‌مراتب متن، grid/breakpoint، CTA واقعی، حالات بارگذاری و responsive را مشخص کن.
- **Verification:** مدارک سئو/semantics، 320px و بدون JS بررسی شود.
- **Official catalog:** https://vibefarsi.ir/blocks/logo-cloud
- **Official command / upstream (check license and target):** `npx vibefarsi add logo-cloud`

### 12. `feature-split` — Page block

- **Goal / behavior:** بلاک «feature-split» را با content contract، CTA، media aspect-ratio و breakpoint مستقل بساز.
- **Engineering:** سلسله‌مراتب متن، grid/breakpoint، CTA واقعی، حالات بارگذاری و responsive را مشخص کن.
- **Verification:** مدارک سئو/semantics، 320px و بدون JS بررسی شود.
- **Official catalog:** https://vibefarsi.ir/blocks/feature-split
- **Official command / upstream (check license and target):** `npx vibefarsi add feature-split`

### 13. `bento` — Page block

- **Goal / behavior:** بلاک «bento» را با content contract، CTA، media aspect-ratio و breakpoint مستقل بساز.
- **Engineering:** سلسله‌مراتب متن، grid/breakpoint، CTA واقعی، حالات بارگذاری و responsive را مشخص کن.
- **Verification:** مدارک سئو/semantics، 320px و بدون JS بررسی شود.
- **Official catalog:** https://vibefarsi.ir/blocks/bento
- **Official command / upstream (check license and target):** `npx vibefarsi add bento`

### 14. `steps` — Page block

- **Goal / behavior:** بلاک «steps» را با content contract، CTA، media aspect-ratio و breakpoint مستقل بساز.
- **Engineering:** سلسله‌مراتب متن، grid/breakpoint، CTA واقعی، حالات بارگذاری و responsive را مشخص کن.
- **Verification:** مدارک سئو/semantics، 320px و بدون JS بررسی شود.
- **Official catalog:** https://vibefarsi.ir/blocks/steps
- **Official command / upstream (check license and target):** `npx vibefarsi add steps`

### 15. `team` — Page block

- **Goal / behavior:** بلاک «team» را با content contract، CTA، media aspect-ratio و breakpoint مستقل بساز.
- **Engineering:** سلسله‌مراتب متن، grid/breakpoint، CTA واقعی، حالات بارگذاری و responsive را مشخص کن.
- **Verification:** مدارک سئو/semantics، 320px و بدون JS بررسی شود.
- **Official catalog:** https://vibefarsi.ir/blocks/team
- **Official command / upstream (check license and target):** `npx vibefarsi add team`

### 16. `contact` — Page block

- **Goal / behavior:** بلاک «contact» را با content contract، CTA، media aspect-ratio و breakpoint مستقل بساز.
- **Engineering:** سلسله‌مراتب متن، grid/breakpoint، CTA واقعی، حالات بارگذاری و responsive را مشخص کن.
- **Verification:** مدارک سئو/semantics، 320px و بدون JS بررسی شود.
- **Official catalog:** https://vibefarsi.ir/blocks/contact
- **Official command / upstream (check license and target):** `npx vibefarsi add contact`

### 17. `newsletter` — Page block

- **Goal / behavior:** بلاک «newsletter» را با content contract، CTA، media aspect-ratio و breakpoint مستقل بساز.
- **Engineering:** سلسله‌مراتب متن، grid/breakpoint، CTA واقعی، حالات بارگذاری و responsive را مشخص کن.
- **Verification:** مدارک سئو/semantics، 320px و بدون JS بررسی شود.
- **Official catalog:** https://vibefarsi.ir/blocks/newsletter
- **Official command / upstream (check license and target):** `npx vibefarsi add newsletter`

### 18. `product-grid` — Page block

- **Goal / behavior:** بلاک «product-grid» را با content contract، CTA، media aspect-ratio و breakpoint مستقل بساز.
- **Engineering:** سلسله‌مراتب متن، grid/breakpoint، CTA واقعی، حالات بارگذاری و responsive را مشخص کن.
- **Verification:** مدارک سئو/semantics، 320px و بدون JS بررسی شود.
- **Official catalog:** https://vibefarsi.ir/blocks/product-grid
- **Official command / upstream (check license and target):** `npx vibefarsi add product-grid`

### 19. `blog-grid` — Page block

- **Goal / behavior:** بلاک «blog-grid» را با content contract، CTA، media aspect-ratio و breakpoint مستقل بساز.
- **Engineering:** سلسله‌مراتب متن، grid/breakpoint، CTA واقعی، حالات بارگذاری و responsive را مشخص کن.
- **Verification:** مدارک سئو/semantics، 320px و بدون JS بررسی شود.
- **Official catalog:** https://vibefarsi.ir/blocks/blog-grid
- **Official command / upstream (check license and target):** `npx vibefarsi add blog-grid`

### 20. `comparison` — Page block

- **Goal / behavior:** بلاک «comparison» را با content contract، CTA، media aspect-ratio و breakpoint مستقل بساز.
- **Engineering:** سلسله‌مراتب متن، grid/breakpoint، CTA واقعی، حالات بارگذاری و responsive را مشخص کن.
- **Verification:** مدارک سئو/semantics، 320px و بدون JS بررسی شود.
- **Official catalog:** https://vibefarsi.ir/blocks/comparison
- **Official command / upstream (check license and target):** `npx vibefarsi add comparison`

### 21. `dashboard-stats` — Page block

- **Goal / behavior:** بلاک «dashboard-stats» را با content contract، CTA، media aspect-ratio و breakpoint مستقل بساز.
- **Engineering:** سلسله‌مراتب متن، grid/breakpoint، CTA واقعی، حالات بارگذاری و responsive را مشخص کن.
- **Verification:** مدارک سئو/semantics، 320px و بدون JS بررسی شود.
- **Official catalog:** https://vibefarsi.ir/blocks/dashboard-stats
- **Official command / upstream (check license and target):** `npx vibefarsi add dashboard-stats`

### 22. `signup-card` — Page block

- **Goal / behavior:** بلاک «signup-card» را با content contract، CTA، media aspect-ratio و breakpoint مستقل بساز.
- **Engineering:** سلسله‌مراتب متن، grid/breakpoint، CTA واقعی، حالات بارگذاری و responsive را مشخص کن.
- **Verification:** مدارک سئو/semantics، 320px و بدون JS بررسی شود.
- **Official catalog:** https://vibefarsi.ir/blocks/signup-card
- **Official command / upstream (check license and target):** `npx vibefarsi add signup-card`

### 23. `footer` — Page block

- **Goal / behavior:** بلاک «footer» را با content contract، CTA، media aspect-ratio و breakpoint مستقل بساز.
- **Engineering:** سلسله‌مراتب متن، grid/breakpoint، CTA واقعی، حالات بارگذاری و responsive را مشخص کن.
- **Verification:** مدارک سئو/semantics، 320px و بدون JS بررسی شود.
- **Official catalog:** https://vibefarsi.ir/blocks/footer
- **Official command / upstream (check license and target):** `npx vibefarsi add footer`

## charts

### 1. `chart-core` — Data visualization

- **Goal / behavior:** «chart-core» را با دادهٔ واقعی و تعامل هدفمند بساز؛ axis/tooltip و کنترل پالت در نمودارها مستند شوند.
- **Engineering:** محور، واحد، ناحیهٔ داده، tooltip و legend را تعریف کن، مقادیر خام را نگه دار.
- **Verification:** جدول معادل برای screenreader و اعداد فارسی، contrast check.
- **Official catalog:** https://vibefarsi.ir/charts/chart-core
- **Official command / upstream (check license and target):** `npx vibefarsi add chart-core`

### 2. `line-chart` — Data visualization

- **Goal / behavior:** «line-chart» را با دادهٔ واقعی و تعامل هدفمند بساز؛ axis/tooltip و کنترل پالت در نمودارها مستند شوند.
- **Engineering:** محور، واحد، ناحیهٔ داده، tooltip و legend را تعریف کن، مقادیر خام را نگه دار.
- **Verification:** جدول معادل برای screenreader و اعداد فارسی، contrast check.
- **Official catalog:** https://vibefarsi.ir/charts/line-chart
- **Official command / upstream (check license and target):** `npx vibefarsi add line-chart`

### 3. `area-chart` — Data visualization

- **Goal / behavior:** «area-chart» را با دادهٔ واقعی و تعامل هدفمند بساز؛ axis/tooltip و کنترل پالت در نمودارها مستند شوند.
- **Engineering:** محور، واحد، ناحیهٔ داده، tooltip و legend را تعریف کن، مقادیر خام را نگه دار.
- **Verification:** جدول معادل برای screenreader و اعداد فارسی، contrast check.
- **Official catalog:** https://vibefarsi.ir/charts/area-chart
- **Official command / upstream (check license and target):** `npx vibefarsi add area-chart`

### 4. `sparkline` — Data visualization

- **Goal / behavior:** «sparkline» را با دادهٔ واقعی و تعامل هدفمند بساز؛ axis/tooltip و کنترل پالت در نمودارها مستند شوند.
- **Engineering:** محور، واحد، ناحیهٔ داده، tooltip و legend را تعریف کن، مقادیر خام را نگه دار.
- **Verification:** جدول معادل برای screenreader و اعداد فارسی، contrast check.
- **Official catalog:** https://vibefarsi.ir/charts/sparkline
- **Official command / upstream (check license and target):** `npx vibefarsi add sparkline`

### 5. `bar-chart` — Data visualization

- **Goal / behavior:** «bar-chart» را با دادهٔ واقعی و تعامل هدفمند بساز؛ axis/tooltip و کنترل پالت در نمودارها مستند شوند.
- **Engineering:** محور، واحد، ناحیهٔ داده، tooltip و legend را تعریف کن، مقادیر خام را نگه دار.
- **Verification:** جدول معادل برای screenreader و اعداد فارسی، contrast check.
- **Official catalog:** https://vibefarsi.ir/charts/bar-chart
- **Official command / upstream (check license and target):** `npx vibefarsi add bar-chart`

### 6. `combo-chart` — Data visualization

- **Goal / behavior:** «combo-chart» را با دادهٔ واقعی و تعامل هدفمند بساز؛ axis/tooltip و کنترل پالت در نمودارها مستند شوند.
- **Engineering:** محور، واحد، ناحیهٔ داده، tooltip و legend را تعریف کن، مقادیر خام را نگه دار.
- **Verification:** جدول معادل برای screenreader و اعداد فارسی، contrast check.
- **Official catalog:** https://vibefarsi.ir/charts/combo-chart
- **Official command / upstream (check license and target):** `npx vibefarsi add combo-chart`

### 7. `radar-chart` — Data visualization

- **Goal / behavior:** «radar-chart» را با دادهٔ واقعی و تعامل هدفمند بساز؛ axis/tooltip و کنترل پالت در نمودارها مستند شوند.
- **Engineering:** محور، واحد، ناحیهٔ داده، tooltip و legend را تعریف کن، مقادیر خام را نگه دار.
- **Verification:** جدول معادل برای screenreader و اعداد فارسی، contrast check.
- **Official catalog:** https://vibefarsi.ir/charts/radar-chart
- **Official command / upstream (check license and target):** `npx vibefarsi add radar-chart`

### 8. `pie-chart` — Data visualization

- **Goal / behavior:** «pie-chart» را با دادهٔ واقعی و تعامل هدفمند بساز؛ axis/tooltip و کنترل پالت در نمودارها مستند شوند.
- **Engineering:** محور، واحد، ناحیهٔ داده، tooltip و legend را تعریف کن، مقادیر خام را نگه دار.
- **Verification:** جدول معادل برای screenreader و اعداد فارسی، contrast check.
- **Official catalog:** https://vibefarsi.ir/charts/pie-chart
- **Official command / upstream (check license and target):** `npx vibefarsi add pie-chart`

### 9. `radial-chart` — Data visualization

- **Goal / behavior:** «radial-chart» را با دادهٔ واقعی و تعامل هدفمند بساز؛ axis/tooltip و کنترل پالت در نمودارها مستند شوند.
- **Engineering:** محور، واحد، ناحیهٔ داده، tooltip و legend را تعریف کن، مقادیر خام را نگه دار.
- **Verification:** جدول معادل برای screenreader و اعداد فارسی، contrast check.
- **Official catalog:** https://vibefarsi.ir/charts/radial-chart
- **Official command / upstream (check license and target):** `npx vibefarsi add radial-chart`

### 10. `treemap-chart` — Data visualization

- **Goal / behavior:** «treemap-chart» را با دادهٔ واقعی و تعامل هدفمند بساز؛ axis/tooltip و کنترل پالت در نمودارها مستند شوند.
- **Engineering:** محور، واحد، ناحیهٔ داده، tooltip و legend را تعریف کن، مقادیر خام را نگه دار.
- **Verification:** جدول معادل برای screenreader و اعداد فارسی، contrast check.
- **Official catalog:** https://vibefarsi.ir/charts/treemap-chart
- **Official command / upstream (check license and target):** `npx vibefarsi add treemap-chart`

### 11. `scatter-chart` — Data visualization

- **Goal / behavior:** «scatter-chart» را با دادهٔ واقعی و تعامل هدفمند بساز؛ axis/tooltip و کنترل پالت در نمودارها مستند شوند.
- **Engineering:** محور، واحد، ناحیهٔ داده، tooltip و legend را تعریف کن، مقادیر خام را نگه دار.
- **Verification:** جدول معادل برای screenreader و اعداد فارسی، contrast check.
- **Official catalog:** https://vibefarsi.ir/charts/scatter-chart
- **Official command / upstream (check license and target):** `npx vibefarsi add scatter-chart`

### 12. `heatmap-chart` — Data visualization

- **Goal / behavior:** «heatmap-chart» را با دادهٔ واقعی و تعامل هدفمند بساز؛ axis/tooltip و کنترل پالت در نمودارها مستند شوند.
- **Engineering:** محور، واحد، ناحیهٔ داده، tooltip و legend را تعریف کن، مقادیر خام را نگه دار.
- **Verification:** جدول معادل برای screenreader و اعداد فارسی، contrast check.
- **Official catalog:** https://vibefarsi.ir/charts/heatmap-chart
- **Official command / upstream (check license and target):** `npx vibefarsi add heatmap-chart`

### 13. `funnel-chart` — Data visualization

- **Goal / behavior:** «funnel-chart» را با دادهٔ واقعی و تعامل هدفمند بساز؛ axis/tooltip و کنترل پالت در نمودارها مستند شوند.
- **Engineering:** محور، واحد، ناحیهٔ داده، tooltip و legend را تعریف کن، مقادیر خام را نگه دار.
- **Verification:** جدول معادل برای screenreader و اعداد فارسی، contrast check.
- **Official catalog:** https://vibefarsi.ir/charts/funnel-chart
- **Official command / upstream (check license and target):** `npx vibefarsi add funnel-chart`

### 14. `waterfall-chart` — Data visualization

- **Goal / behavior:** «waterfall-chart» را با دادهٔ واقعی و تعامل هدفمند بساز؛ axis/tooltip و کنترل پالت در نمودارها مستند شوند.
- **Engineering:** محور، واحد، ناحیهٔ داده، tooltip و legend را تعریف کن، مقادیر خام را نگه دار.
- **Verification:** جدول معادل برای screenreader و اعداد فارسی، contrast check.
- **Official catalog:** https://vibefarsi.ir/charts/waterfall-chart
- **Official command / upstream (check license and target):** `npx vibefarsi add waterfall-chart`

### 15. `candlestick-chart` — Data visualization

- **Goal / behavior:** «candlestick-chart» را با دادهٔ واقعی و تعامل هدفمند بساز؛ axis/tooltip و کنترل پالت در نمودارها مستند شوند.
- **Engineering:** محور، واحد، ناحیهٔ داده، tooltip و legend را تعریف کن، مقادیر خام را نگه دار.
- **Verification:** جدول معادل برای screenreader و اعداد فارسی، contrast check.
- **Official catalog:** https://vibefarsi.ir/charts/candlestick-chart
- **Official command / upstream (check license and target):** `npx vibefarsi add candlestick-chart`

## animations

### 1. `text-shimmer` — Motion pattern

- **Goal / behavior:** درخشش کم‌دامنه روی ماسک روشنایی متن؛ حلقه فقط هنگام مشاهده فعال و در کاهش حرکت خاموش.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/text-shimmer
- **Official command / upstream (check license and target):** `npx vibefarsi add text-shimmer`

### 2. `typewriter` — Motion pattern

- **Goal / behavior:** نمایش تدریجی خوشه‌های گرافیمی؛ سرعت خواندن قابل تنظیم و متن کامل برای صفحه‌خوان.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/typewriter
- **Official command / upstream (check license and target):** `npx vibefarsi add typewriter`

### 3. `counter` — Motion pattern

- **Goal / behavior:** درون‌یابی عدد حقیقی و فرمت `Intl.NumberFormat` در لحظهٔ نمایش؛ عدد ثابت در DOM.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/counter
- **Official command / upstream (check license and target):** `npx vibefarsi add counter`

### 4. `blur-text` — Motion pattern

- **Goal / behavior:** ورود متن با محوشدگی کوتاه، انتقال عمودی و opacity؛ استفاده محدود از blur برای پرفورمنس.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/blur-text
- **Official command / upstream (check license and target):** `npx vibefarsi add blur-text`

### 5. `animated-tabs` — Motion pattern

- **Goal / behavior:** اندیکاتور لغزان تب با shared layout و keyboard arrows؛ اندازه‌ها بعد از ریسایز محاسبه شود.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/animated-tabs
- **Official command / upstream (check license and target):** `npx vibefarsi add animated-tabs`

### 6. `border-beam` — Motion pattern

- **Goal / behavior:** پرتو در امتداد حاشیهٔ کارت؛ فقط روی کارت فعال، جلوگیری از glare روی محتوا.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/border-beam
- **Official command / upstream (check license and target):** `npx vibefarsi add border-beam`

### 7. `shine-button` — Motion pattern

- **Goal / behavior:** جاروب روشنایی روی دکمه در hover/focus؛ نام و وضعیت کنترل ثابت می‌ماند.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/shine-button
- **Official command / upstream (check license and target):** `npx vibefarsi add shine-button`

### 8. `dock` — Motion pattern

- **Goal / behavior:** بزرگ‌نمایی نرم آیکون‌های نزدیک اشاره‌گر با کران اندازه؛ دسترسی با کلید Tab.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/dock
- **Official command / upstream (check license and target):** `npx vibefarsi add dock`

### 9. `animated-list` — Motion pattern

- **Goal / behavior:** ورود/خروج آیتم‌ها با stagger و کلیدهای پایدار React؛ بدون پرش ارتفاع.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/animated-list
- **Official command / upstream (check license and target):** `npx vibefarsi add animated-list`

### 10. `orbit` — Motion pattern

- **Goal / behavior:** چند مسیر مداری با فاز و زاویهٔ مستقل؛ حرکت سینوسی زمان‌بندی‌شده یا spline.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/orbit
- **Official command / upstream (check license and target):** `npx vibefarsi add orbit`

### 11. `tilt-card` — Motion pattern

- **Goal / behavior:** چرخش ۳بعدی محدود با perspective بر اساس pointer و بازگشت damped؛ touch fallback.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/tilt-card
- **Official command / upstream (check license and target):** `npx vibefarsi add tilt-card`

### 12. `loading-dots` — Motion pattern

- **Goal / behavior:** نمایش وضعیت در حال پردازش با تغییر مقیاس/opacity؛ متن aria-live در کنار آن.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/loading-dots
- **Official command / upstream (check license and target):** `npx vibefarsi add loading-dots`

### 13. `marquee` — Motion pattern

- **Goal / behavior:** تکرار ردیف محتوای تزئینی به‌صورت seamless؛ مکث در فوکوس و reduced-motion.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/marquee
- **Official command / upstream (check license and target):** `npx vibefarsi add marquee`

### 14. `reveal` — Motion pattern

- **Goal / behavior:** ورود محتوا با intersection observer و opacity/translate؛ نمایش بدون JS.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/reveal
- **Official command / upstream (check license and target):** `npx vibefarsi add reveal`

### 15. `word-rotate` — Motion pattern

- **Goal / behavior:** تعویض کلمات با translate/fade و فضای محفوظ برای بلندترین عبارت.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/word-rotate
- **Official command / upstream (check license and target):** `npx vibefarsi add word-rotate`

### 16. `text-scramble` — Motion pattern

- **Goal / behavior:** رمزگشایی بصری placeholder به متن نهایی؛ متن دسترس‌پذیر تغییر نکند.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/text-scramble
- **Official command / upstream (check license and target):** `npx vibefarsi add text-scramble`

### 17. `odometer` — Motion pattern

- **Goal / behavior:** ریل ارقام با ترجمهٔ موضعی و tabular nums؛ وضعیت نهایی واقعی.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/odometer
- **Official command / upstream (check license and target):** `npx vibefarsi add odometer`

### 18. `ripple-button` — Motion pattern

- **Goal / behavior:** دایرهٔ موج از نقطهٔ کلیک، در سطح دکمه clip شود و به focus هم واکنش دهد.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/ripple-button
- **Official command / upstream (check license and target):** `npx vibefarsi add ripple-button`

### 19. `magnetic-button` — Motion pattern

- **Goal / behavior:** جابجایی محدود نسبت به pointer با reset الاستیک؛ حرکت روی موبایل خاموش.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/magnetic-button
- **Official command / upstream (check license and target):** `npx vibefarsi add magnetic-button`

### 20. `progress-ring` — Motion pattern

- **Goal / behavior:** stroke dashoffset برای پیشرفت ۰ تا ۱۰۰؛ progressbar ARIA.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/progress-ring
- **Official command / upstream (check license and target):** `npx vibefarsi add progress-ring`

### 21. `success-check` — Motion pattern

- **Goal / behavior:** رسم تدریجی مسیر SVG تیک و اعلام موفقیت با متن.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/success-check
- **Official command / upstream (check license and target):** `npx vibefarsi add success-check`

### 22. `meteors` — Motion pattern

- **Goal / behavior:** خطوط نوری گذرا و کم‌تعداد با transform GPU؛ کاهش تراکم موبایل.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/meteors
- **Official command / upstream (check license and target):** `npx vibefarsi add meteors`

### 23. `spotlight-card` — Motion pattern

- **Goal / behavior:** نور موضعی بر اساس مختصات pointer؛ کنتراست متن ثابت.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/spotlight-card
- **Official command / upstream (check license and target):** `npx vibefarsi add spotlight-card`

### 24. `grid-reveal` — Motion pattern

- **Goal / behavior:** روشن‌شدن سلول‌های grid با stagger ردیفی/ستونی و نقطهٔ شروع معلوم.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/grid-reveal
- **Official command / upstream (check license and target):** `npx vibefarsi add grid-reveal`

### 25. `text-reveal` — Motion pattern

- **Goal / behavior:** آشکارشدن متن از طریق clip و ماسک؛ فارسی و حروف زیرخطی قطع نشوند.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/text-reveal
- **Official command / upstream (check license and target):** `npx vibefarsi add text-reveal`

### 26. `highlight-text` — Motion pattern

- **Goal / behavior:** حرکت underline/highlight پشت واژه، نه روی glyph؛ هدف تمرکز بصری.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/highlight-text
- **Official command / upstream (check license and target):** `npx vibefarsi add highlight-text`

### 27. `gradient-text` — Motion pattern

- **Goal / behavior:** رنگ/روشنایی متحرک داخل متن با پس‌زمینهٔ fallback خوانا.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/gradient-text
- **Official command / upstream (check license and target):** `npx vibefarsi add gradient-text`

### 28. `flip-card` — Motion pattern

- **Goal / behavior:** چرخش ۱۸۰ درجه با `backface-visibility` و محتوای سمت دیگر، دسترس‌پذیری دکمه.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/flip-card
- **Official command / upstream (check license and target):** `npx vibefarsi add flip-card`

### 29. `animated-beam` — Motion pattern

- **Goal / behavior:** انتقال نقاط/پرتو روی SVG path میان گره‌ها؛ فاصله و خروج کنترل شود.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/animated-beam
- **Official command / upstream (check license and target):** `npx vibefarsi add animated-beam`

### 30. `confetti` — Motion pattern

- **Goal / behavior:** ذرات کوتاه‌عمر رویداد موفقیت، بدون تولید DOM بی‌پایان.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/confetti
- **Official command / upstream (check license and target):** `npx vibefarsi add confetti`

### 31. `swipe-to-confirm` — Motion pattern

- **Goal / behavior:** درگ اسلایدر در مسیر محدود، threshold تایید و مسیر جایگزین برای کیبورد.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/swipe-to-confirm
- **Official command / upstream (check license and target):** `npx vibefarsi add swipe-to-confirm`

### 32. `terminal` — Motion pattern

- **Goal / behavior:** تایپ خروجی ترمینال با سرعت محدود، امکان کپی و screenreader-friendly.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/terminal
- **Official command / upstream (check license and target):** `npx vibefarsi add terminal`

### 33. `card-stack` — Motion pattern

- **Goal / behavior:** چیدن کارت‌ها با translate/rotate/scale و انتخاب صریح با دکمه.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/card-stack
- **Official command / upstream (check license and target):** `npx vibefarsi add card-stack`

### 34. `morph-button` — Motion pattern

- **Goal / behavior:** تغییر حالت دکمه از label به loading/success با اندازهٔ کنترل‌شده.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/morph-button
- **Official command / upstream (check license and target):** `npx vibefarsi add morph-button`

### 35. `compare-slider` — Motion pattern

- **Goal / behavior:** لغزندهٔ قبل/بعد با range و clipping، قابل تغییر با کیبورد.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/compare-slider
- **Official command / upstream (check license and target):** `npx vibefarsi add compare-slider`

### 36. `scratch-card` — Motion pattern

- **Goal / behavior:** ماسک پاک‌شدنی روی Canvas با گزینهٔ «نمایش نتیجه» غیرلمسی.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/scratch-card
- **Official command / upstream (check license and target):** `npx vibefarsi add scratch-card`

### 37. `sparkles` — Motion pattern

- **Goal / behavior:** درخشیدن نقاط کوتاه‌عمر با محدودسازی تراکم و تکرار.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/sparkles
- **Official command / upstream (check license and target):** `npx vibefarsi add sparkles`

### 38. `scroll-progress` — Motion pattern

- **Goal / behavior:** نشان‌دهندهٔ درصد خواندن بر اساس scrollHeight-clientHeight و لبهٔ RTL.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/scroll-progress
- **Official command / upstream (check license and target):** `npx vibefarsi add scroll-progress`

### 39. `pulse-button` — Motion pattern

- **Goal / behavior:** نبض آرام scale/opac برای برجسته‌سازی عمل مهم، توقف در کاهش حرکت.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/pulse-button
- **Official command / upstream (check license and target):** `npx vibefarsi add pulse-button`

### 40. `cursor-follow` — Motion pattern

- **Goal / behavior:** نشانگر کمکی تزئینی که mouse را دنبال می‌کند؛ روی لمس و focus غیرفعال.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/cursor-follow
- **Official command / upstream (check license and target):** `npx vibefarsi add cursor-follow`

### 41. `number-wheel` — Motion pattern

- **Goal / behavior:** گردش چرخ ارقام با snap و تنظیم RTL/LTR درست.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/number-wheel
- **Official command / upstream (check license and target):** `npx vibefarsi add number-wheel`

### 42. `pin-list` — Motion pattern

- **Goal / behavior:** فهرست محتوایی با پنل‌های sticky و پیشرفت اسکرول؛ نمای ستونی ساده موبایل.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/pin-list
- **Official command / upstream (check license and target):** `npx vibefarsi add pin-list`

### 43. `radial-intro` — Motion pattern

- **Goal / behavior:** ورود حلقه‌ای آیتم‌ها اطراف مرکز با وقفهٔ stagger و نقطهٔ کانونی.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/radial-intro
- **Official command / upstream (check license and target):** `npx vibefarsi add radial-intro`

### 44. `text-loop` — Motion pattern

- **Goal / behavior:** تکرار حلقوی واژه‌ها با فاصلهٔ متناسب و توقف برای خواندن.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/text-loop
- **Official command / upstream (check license and target):** `npx vibefarsi add text-loop`

### 45. `curved-loop` — Motion pattern

- **Goal / behavior:** چیدمان متن بر مسیر منحنی با SVG textPath؛ متن جایگزین تخت.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/curved-loop
- **Official command / upstream (check license and target):** `npx vibefarsi add curved-loop`

### 46. `number-pop` — Motion pattern

- **Goal / behavior:** ظهور ترتیبی ارقام در کارت/شاخص با scale و fade کم‌دامنه.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/number-pop
- **Official command / upstream (check license and target):** `npx vibefarsi add number-pop`

### 47. `notification-badge` — Motion pattern

- **Goal / behavior:** افزایش/کاهش مقدار نشانگر به کمک morph عددی و اعلام وضعیت.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/notification-badge
- **Official command / upstream (check license and target):** `npx vibefarsi add notification-badge`

### 48. `text-swap` — Motion pattern

- **Goal / behavior:** تعویض عبارت با mask/translate و کنترل ارتفاع برای جلوگیری از CLS.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/text-swap
- **Official command / upstream (check license and target):** `npx vibefarsi add text-swap`

### 49. `panel-reveal` — Motion pattern

- **Goal / behavior:** بازشدن پنل با transform/clip و تمرکز درست محتوا.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/panel-reveal
- **Official command / upstream (check license and target):** `npx vibefarsi add panel-reveal`

### 50. `page-slide` — Motion pattern

- **Goal / behavior:** انتقال محتوای صفحه با جهت منطقی RTL، بدون خراب‌کردن history.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/page-slide
- **Official command / upstream (check license and target):** `npx vibefarsi add page-slide`

### 51. `icon-swap` — Motion pattern

- **Goal / behavior:** تعویض آیکون متناسب با وضعیت واقعی کنترل (مثل play/pause).
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/icon-swap
- **Official command / upstream (check license and target):** `npx vibefarsi add icon-swap`

### 52. `avatar-hover` — Motion pattern

- **Goal / behavior:** واکنش avatar به hover/focus با پس‌زمینهٔ ثابت و انیمیشن ملایم.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/avatar-hover
- **Official command / upstream (check license and target):** `npx vibefarsi add avatar-hover`

### 53. `error-shake` — Motion pattern

- **Goal / behavior:** لرزش کوتاه افقی فیلد و پیام خطای خوانا؛ بدون تکرار بی‌پایان.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/error-shake
- **Official command / upstream (check license and target):** `npx vibefarsi add error-shake`

### 54. `clear-input` — Motion pattern

- **Goal / behavior:** محوکردن متن هنگام clear فقط پس از پاک‌سازی state و نگهداشت focus.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/clear-input
- **Official command / upstream (check license and target):** `npx vibefarsi add clear-input`

### 55. `skeleton-reveal` — Motion pattern

- **Goal / behavior:** تعویض skeleton با محتوای واقعی بدون CLS، سایز ثابت.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/skeleton-reveal
- **Official command / upstream (check license and target):** `npx vibefarsi add skeleton-reveal`

### 56. `fab-morph` — Motion pattern

- **Goal / behavior:** گسترش دکمهٔ شناور به منوی عملکردها با ترتیب فوکوس و Escape.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/fab-morph
- **Official command / upstream (check license and target):** `npx vibefarsi add fab-morph`

### 57. `like-button` — Motion pattern

- **Goal / behavior:** به‌روزرسانی optimistic پسندیدن و rollback در شکست API.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/like-button
- **Official command / upstream (check license and target):** `npx vibefarsi add like-button`

### 58. `arrow-link` — Motion pattern

- **Goal / behavior:** حرکت کم‌دامنه فلش به‌سمت مقصد منطقی، hover/focus قابل دسترسی.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/arrow-link
- **Official command / upstream (check license and target):** `npx vibefarsi add arrow-link`

### 59. `thinking-states` — Motion pattern

- **Goal / behavior:** نمایش مراحل در حال پردازش/تمام‌شده با پیام‌های صادقانه و قابل درک.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/thinking-states
- **Official command / upstream (check license and target):** `npx vibefarsi add thinking-states`

### 60. `reasoning-stream` — Motion pattern

- **Goal / behavior:** نمایش جریان توضیحات کار با برچسب وضعیت، بدون ادعای دسترسی به استدلال خصوصی مدل.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/reasoning-stream
- **Official command / upstream (check license and target):** `npx vibefarsi add reasoning-stream`

### 61. `streaming-text` — Motion pattern

- **Goal / behavior:** الحاق chunkهای متن بدون caret jump و محدود کردن اعلان‌های screenreader.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/streaming-text
- **Official command / upstream (check license and target):** `npx vibefarsi add streaming-text`

### 62. `matrix-loader` — Motion pattern

- **Goal / behavior:** ریزش نمادهای بصری در یک ناحیهٔ کوچک و کنترل‌شده؛ کاهش حرکت جایگزین.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/matrix-loader
- **Official command / upstream (check license and target):** `npx vibefarsi add matrix-loader`

### 63. `banner-stack` — Motion pattern

- **Goal / behavior:** صف‌بندی و ورود/خروج نوارهای اعلان همراه مدیریت overflow و focus.
- **Engineering:** هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.
- **Verification:** prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.
- **Official catalog:** https://vibefarsi.ir/animations/banner-stack
- **Official command / upstream (check license and target):** `npx vibefarsi add banner-stack`

## backgrounds

### 1. `grid` — Decorative background

- **Goal / behavior:** خطوط هم‌فاصله با background-size کنترل‌شده و alpha کم، کیفیت خوب در DPIهای مختلف.
- **Engineering:** foreground-safe: شدت نور، opacity، فرکانس و fallback CSS را تعریف کن.
- **Verification:** کنتراست متن، GPU mobile، کاهش حرکت و عدم pointer-block.
- **Official catalog:** https://vibefarsi.ir/backgrounds/grid
- **Official command / upstream (check license and target):** `npx vibefarsi add grid`

### 2. `dots` — Decorative background

- **Goal / behavior:** نقاط تکراری با radial-gradient؛ چگالی وابسته به عرض، کم‌کنتراست زیر متن.
- **Engineering:** foreground-safe: شدت نور، opacity، فرکانس و fallback CSS را تعریف کن.
- **Verification:** کنتراست متن، GPU mobile، کاهش حرکت و عدم pointer-block.
- **Official catalog:** https://vibefarsi.ir/backgrounds/dots
- **Official command / upstream (check license and target):** `npx vibefarsi add dots`

### 3. `girih` — Decorative background

- **Goal / behavior:** الگوی هندسی گره‌چینی، تکرار بدون seam و کنترل زاویه و تراکم.
- **Engineering:** foreground-safe: شدت نور، opacity، فرکانس و fallback CSS را تعریف کن.
- **Verification:** کنتراست متن، GPU mobile، کاهش حرکت و عدم pointer-block.
- **Official catalog:** https://vibefarsi.ir/backgrounds/girih
- **Official command / upstream (check license and target):** `npx vibefarsi add girih`

### 4. `hatch` — Decorative background

- **Goal / behavior:** هاشورهای موازی/متقاطع با فاصله و کنتراست ساختاری.
- **Engineering:** foreground-safe: شدت نور، opacity، فرکانس و fallback CSS را تعریف کن.
- **Verification:** کنتراست متن، GPU mobile، کاهش حرکت و عدم pointer-block.
- **Official catalog:** https://vibefarsi.ir/backgrounds/hatch
- **Official command / upstream (check license and target):** `npx vibefarsi add hatch`

### 5. `aurora` — Decorative background

- **Goal / behavior:** پردهٔ نرم روشنایی افقی با چند لایه blur و حرکت کند.
- **Engineering:** foreground-safe: شدت نور، opacity، فرکانس و fallback CSS را تعریف کن.
- **Verification:** کنتراست متن، GPU mobile، کاهش حرکت و عدم pointer-block.
- **Official catalog:** https://vibefarsi.ir/backgrounds/aurora
- **Official command / upstream (check license and target):** `npx vibefarsi add aurora`

### 6. `spotlight` — Decorative background

- **Goal / behavior:** گرادیان شعاعی وابسته به نقطهٔ توجه بدون تداخل با UI.
- **Engineering:** foreground-safe: شدت نور، opacity، فرکانس و fallback CSS را تعریف کن.
- **Verification:** کنتراست متن، GPU mobile، کاهش حرکت و عدم pointer-block.
- **Official catalog:** https://vibefarsi.ir/backgrounds/spotlight
- **Official command / upstream (check license and target):** `npx vibefarsi add spotlight`

### 7. `grain` — Decorative background

- **Goal / behavior:** دانه‌بندی یکنواخت کم‌شدت، بدون noise 2D تازه در هر frame.
- **Engineering:** foreground-safe: شدت نور، opacity، فرکانس و fallback CSS را تعریف کن.
- **Verification:** کنتراست متن، GPU mobile، کاهش حرکت و عدم pointer-block.
- **Official catalog:** https://vibefarsi.ir/backgrounds/grain
- **Official command / upstream (check license and target):** `npx vibefarsi add grain`

### 8. `retro-grid` — Decorative background

- **Goal / behavior:** شبکهٔ پرسپکتیو با transform/3D و horizon روشنایی محدود.
- **Engineering:** foreground-safe: شدت نور، opacity، فرکانس و fallback CSS را تعریف کن.
- **Verification:** کنتراست متن، GPU mobile، کاهش حرکت و عدم pointer-block.
- **Official catalog:** https://vibefarsi.ir/backgrounds/retro-grid
- **Official command / upstream (check license and target):** `npx vibefarsi add retro-grid`

### 9. `mesh` — Decorative background

- **Goal / behavior:** شبه‌سطح شبکه‌ای با نقاط کنترل و لایه‌های گرادیانی.
- **Engineering:** foreground-safe: شدت نور، opacity، فرکانس و fallback CSS را تعریف کن.
- **Verification:** کنتراست متن، GPU mobile، کاهش حرکت و عدم pointer-block.
- **Official catalog:** https://vibefarsi.ir/backgrounds/mesh
- **Official command / upstream (check license and target):** `npx vibefarsi add mesh`

### 10. `flicker` — Decorative background

- **Goal / behavior:** تغییر آرام luminance، نه سوسوزدن سریع یا خطرناک.
- **Engineering:** foreground-safe: شدت نور، opacity، فرکانس و fallback CSS را تعریف کن.
- **Verification:** کنتراست متن، GPU mobile، کاهش حرکت و عدم pointer-block.
- **Official catalog:** https://vibefarsi.ir/backgrounds/flicker
- **Official command / upstream (check license and target):** `npx vibefarsi add flicker`

### 11. `rings` — Decorative background

- **Goal / behavior:** حلقه‌های هم‌مرکز با radial gradient یا SVG، سایز تطبیقی.
- **Engineering:** foreground-safe: شدت نور، opacity، فرکانس و fallback CSS را تعریف کن.
- **Verification:** کنتراست متن، GPU mobile، کاهش حرکت و عدم pointer-block.
- **Official catalog:** https://vibefarsi.ir/backgrounds/rings
- **Official command / upstream (check license and target):** `npx vibefarsi add rings`

### 12. `gradient-mesh` — Decorative background

- **Goal / behavior:** گرادیان مش نقطه‌ای با interpolation نرم و محدودسازی رنگ.
- **Engineering:** foreground-safe: شدت نور، opacity، فرکانس و fallback CSS را تعریف کن.
- **Verification:** کنتراست متن، GPU mobile، کاهش حرکت و عدم pointer-block.
- **Official catalog:** https://vibefarsi.ir/backgrounds/gradient-mesh
- **Official command / upstream (check license and target):** `npx vibefarsi add gradient-mesh`

### 13. `conic-spin` — Decorative background

- **Goal / behavior:** چرخش آرام گرادیان زاویه‌ای، کاهش حرکت حالت ثابت.
- **Engineering:** foreground-safe: شدت نور، opacity، فرکانس و fallback CSS را تعریف کن.
- **Verification:** کنتراست متن، GPU mobile، کاهش حرکت و عدم pointer-block.
- **Official catalog:** https://vibefarsi.ir/backgrounds/conic-spin
- **Official command / upstream (check license and target):** `npx vibefarsi add conic-spin`

### 14. `light-leak` — Decorative background

- **Goal / behavior:** نور لبه‌ای نامنظم، آلفای خیلی کم برای خوانایی متن.
- **Engineering:** foreground-safe: شدت نور، opacity، فرکانس و fallback CSS را تعریف کن.
- **Verification:** کنتراست متن، GPU mobile، کاهش حرکت و عدم pointer-block.
- **Official catalog:** https://vibefarsi.ir/backgrounds/light-leak
- **Official command / upstream (check license and target):** `npx vibefarsi add light-leak`

### 15. `stars` — Decorative background

- **Goal / behavior:** نقاط پراکندهٔ عمق‌دار با twinkle محدود و تراکم سطحی.
- **Engineering:** foreground-safe: شدت نور، opacity، فرکانس و fallback CSS را تعریف کن.
- **Verification:** کنتراست متن، GPU mobile، کاهش حرکت و عدم pointer-block.
- **Official catalog:** https://vibefarsi.ir/backgrounds/stars
- **Official command / upstream (check license and target):** `npx vibefarsi add stars`

### 16. `sonar` — Decorative background

- **Goal / behavior:** دایره‌های انبساط‌یاب با کاهش opacity، بدون مزاحمت محتوا.
- **Engineering:** foreground-safe: شدت نور، opacity، فرکانس و fallback CSS را تعریف کن.
- **Verification:** کنتراست متن، GPU mobile، کاهش حرکت و عدم pointer-block.
- **Official catalog:** https://vibefarsi.ir/backgrounds/sonar
- **Official command / upstream (check license and target):** `npx vibefarsi add sonar`

### 17. `dot-wave` — Decorative background

- **Goal / behavior:** شبکهٔ نقطه‌ای با سینوس فاز فضایی و دامنه کنترل‌شده.
- **Engineering:** foreground-safe: شدت نور، opacity، فرکانس و fallback CSS را تعریف کن.
- **Verification:** کنتراست متن، GPU mobile، کاهش حرکت و عدم pointer-block.
- **Official catalog:** https://vibefarsi.ir/backgrounds/dot-wave
- **Official command / upstream (check license and target):** `npx vibefarsi add dot-wave`

### 18. `aurora-ribbons` — Decorative background

- **Goal / behavior:** روبان‌های چندلایهٔ نرم با جابه‌جایی آهسته.
- **Engineering:** foreground-safe: شدت نور، opacity، فرکانس و fallback CSS را تعریف کن.
- **Verification:** کنتراست متن، GPU mobile، کاهش حرکت و عدم pointer-block.
- **Official catalog:** https://vibefarsi.ir/backgrounds/aurora-ribbons
- **Official command / upstream (check license and target):** `npx vibefarsi add aurora-ribbons`

### 19. `gradient-grain` — Decorative background

- **Goal / behavior:** گرادیان ملایم همراه نویز ثابت برای جلوگیری از banding.
- **Engineering:** foreground-safe: شدت نور، opacity، فرکانس و fallback CSS را تعریف کن.
- **Verification:** کنتراست متن، GPU mobile، کاهش حرکت و عدم pointer-block.
- **Official catalog:** https://vibefarsi.ir/backgrounds/gradient-grain
- **Official command / upstream (check license and target):** `npx vibefarsi add gradient-grain`

### 20. `moving-stripes` — Decorative background

- **Goal / behavior:** نوارهای مورب با جابه‌جایی آهسته transform و بدون پرش.
- **Engineering:** foreground-safe: شدت نور، opacity، فرکانس و fallback CSS را تعریف کن.
- **Verification:** کنتراست متن، GPU mobile، کاهش حرکت و عدم pointer-block.
- **Official catalog:** https://vibefarsi.ir/backgrounds/moving-stripes
- **Official command / upstream (check license and target):** `npx vibefarsi add moving-stripes`

### 21. `shader` — Decorative background

- **Goal / behavior:** پس‌زمینهٔ GLSL با uniform زمان/رزولوشن و fallback CSS.
- **Engineering:** foreground-safe: شدت نور، opacity، فرکانس و fallback CSS را تعریف کن.
- **Verification:** کنتراست متن، GPU mobile، کاهش حرکت و عدم pointer-block.
- **Official catalog:** https://vibefarsi.ir/backgrounds/shader
- **Official command / upstream (check license and target):** `npx vibefarsi add shader`

### 22. `silk` — Decorative background

- **Goal / behavior:** موج‌های پارچه‌ای نرم با نویز انحنایی/lighting.
- **Engineering:** foreground-safe: شدت نور، opacity، فرکانس و fallback CSS را تعریف کن.
- **Verification:** کنتراست متن، GPU mobile، کاهش حرکت و عدم pointer-block.
- **Official catalog:** https://vibefarsi.ir/backgrounds/silk
- **Official command / upstream (check license and target):** `npx vibefarsi add silk`

### 23. `fog` — Decorative background

- **Goal / behavior:** لایه‌های مه نیمه‌شفاف با عمق، کاهش افکت روی موبایل.
- **Engineering:** foreground-safe: شدت نور، opacity، فرکانس و fallback CSS را تعریف کن.
- **Verification:** کنتراست متن، GPU mobile، کاهش حرکت و عدم pointer-block.
- **Official catalog:** https://vibefarsi.ir/backgrounds/fog
- **Official command / upstream (check license and target):** `npx vibefarsi add fog`

### 24. `nebula` — Decorative background

- **Goal / behavior:** نویز چنداکتاوی ابرگونه در عمق، حفظ ناحیهٔ خالی برای متن.
- **Engineering:** foreground-safe: شدت نور، opacity، فرکانس و fallback CSS را تعریف کن.
- **Verification:** کنتراست متن، GPU mobile، کاهش حرکت و عدم pointer-block.
- **Official catalog:** https://vibefarsi.ir/backgrounds/nebula
- **Official command / upstream (check license and target):** `npx vibefarsi add nebula`

### 25. `contour` — Decorative background

- **Goal / behavior:** منحنی‌های ایزولاین سطحی و فاصلهٔ متغیر.
- **Engineering:** foreground-safe: شدت نور، opacity، فرکانس و fallback CSS را تعریف کن.
- **Verification:** کنتراست متن، GPU mobile، کاهش حرکت و عدم pointer-block.
- **Official catalog:** https://vibefarsi.ir/backgrounds/contour
- **Official command / upstream (check license and target):** `npx vibefarsi add contour`

### 26. `voronoi` — Decorative background

- **Goal / behavior:** سلول‌های همسایگی نزدیک‌ترین نقطه و مرزهای کم‌کنتراست.
- **Engineering:** foreground-safe: شدت نور، opacity، فرکانس و fallback CSS را تعریف کن.
- **Verification:** کنتراست متن، GPU mobile، کاهش حرکت و عدم pointer-block.
- **Official catalog:** https://vibefarsi.ir/backgrounds/voronoi
- **Official command / upstream (check license and target):** `npx vibefarsi add voronoi`

### 27. `warp-grid` — Decorative background

- **Goal / behavior:** تغییر شکل شبکه با جابه‌جایی تابع موج و کنترل anti-alias.
- **Engineering:** foreground-safe: شدت نور، opacity، فرکانس و fallback CSS را تعریف کن.
- **Verification:** کنتراست متن، GPU mobile، کاهش حرکت و عدم pointer-block.
- **Official catalog:** https://vibefarsi.ir/backgrounds/warp-grid
- **Official command / upstream (check license and target):** `npx vibefarsi add warp-grid`

### 28. `godrays` — Decorative background

- **Goal / behavior:** پرتوهای شعاعی از منبع نور، بر اساس ماسک/مرحلهٔ postprocess.
- **Engineering:** foreground-safe: شدت نور، opacity، فرکانس و fallback CSS را تعریف کن.
- **Verification:** کنتراست متن، GPU mobile، کاهش حرکت و عدم pointer-block.
- **Official catalog:** https://vibefarsi.ir/backgrounds/godrays
- **Official command / upstream (check license and target):** `npx vibefarsi add godrays`

### 29. `water-ripple` — Decorative background

- **Goal / behavior:** امواج دایره‌ای افت‌دامنه از نقطهٔ تعامل، با decay.
- **Engineering:** foreground-safe: شدت نور، opacity، فرکانس و fallback CSS را تعریف کن.
- **Verification:** کنتراست متن، GPU mobile، کاهش حرکت و عدم pointer-block.
- **Official catalog:** https://vibefarsi.ir/backgrounds/water-ripple
- **Official command / upstream (check license and target):** `npx vibefarsi add water-ripple`

### 30. `dither` — Decorative background

- **Goal / behavior:** تبدیل شدت روشنایی به الگوی نقطه‌ای الگوریتمی، بدون flicker.
- **Engineering:** foreground-safe: شدت نور، opacity، فرکانس و fallback CSS را تعریف کن.
- **Verification:** کنتراست متن، GPU mobile، کاهش حرکت و عدم pointer-block.
- **Official catalog:** https://vibefarsi.ir/backgrounds/dither
- **Official command / upstream (check license and target):** `npx vibefarsi add dither`

### 31. `halftone` — Decorative background

- **Goal / behavior:** نقاط چاپی با قطر وابسته به روشنایی زمینه.
- **Engineering:** foreground-safe: شدت نور، opacity، فرکانس و fallback CSS را تعریف کن.
- **Verification:** کنتراست متن، GPU mobile، کاهش حرکت و عدم pointer-block.
- **Official catalog:** https://vibefarsi.ir/backgrounds/halftone
- **Official command / upstream (check license and target):** `npx vibefarsi add halftone`

### 32. `waves` — Decorative background

- **Goal / behavior:** موج‌های منظم و چندفرکانسی با خطوط کم‌کنتراست.
- **Engineering:** foreground-safe: شدت نور، opacity، فرکانس و fallback CSS را تعریف کن.
- **Verification:** کنتراست متن، GPU mobile، کاهش حرکت و عدم pointer-block.
- **Official catalog:** https://vibefarsi.ir/backgrounds/waves
- **Official command / upstream (check license and target):** `npx vibefarsi add waves`

### 33. `plasma` — Decorative background

- **Goal / behavior:** ترکیب sin/noise فضایی رنگ/روشنایی؛ در مونوکروم به luminance محدود.
- **Engineering:** foreground-safe: شدت نور، opacity، فرکانس و fallback CSS را تعریف کن.
- **Verification:** کنتراست متن، GPU mobile، کاهش حرکت و عدم pointer-block.
- **Official catalog:** https://vibefarsi.ir/backgrounds/plasma
- **Official command / upstream (check license and target):** `npx vibefarsi add plasma`

### 34. `truchet` — Decorative background

- **Goal / behavior:** کاشی‌های هندسی با آرایش زاویه‌ای از seed ثابت.
- **Engineering:** foreground-safe: شدت نور، opacity، فرکانس و fallback CSS را تعریف کن.
- **Verification:** کنتراست متن، GPU mobile، کاهش حرکت و عدم pointer-block.
- **Official catalog:** https://vibefarsi.ir/backgrounds/truchet
- **Official command / upstream (check license and target):** `npx vibefarsi add truchet`

### 35. `hex-grid` — Decorative background

- **Goal / behavior:** کندویی شش‌ضلعی منظم با ضخامت stroke مقیاس‌پذیر.
- **Engineering:** foreground-safe: شدت نور، opacity، فرکانس و fallback CSS را تعریف کن.
- **Verification:** کنتراست متن، GPU mobile، کاهش حرکت و عدم pointer-block.
- **Official catalog:** https://vibefarsi.ir/backgrounds/hex-grid
- **Official command / upstream (check license and target):** `npx vibefarsi add hex-grid`

### 36. `marble` — Decorative background

- **Goal / behavior:** رگه‌های سنگی از تابع نویز warped با بُعد روشنایی.
- **Engineering:** foreground-safe: شدت نور، opacity، فرکانس و fallback CSS را تعریف کن.
- **Verification:** کنتراست متن، GPU mobile، کاهش حرکت و عدم pointer-block.
- **Official catalog:** https://vibefarsi.ir/backgrounds/marble
- **Official command / upstream (check license and target):** `npx vibefarsi add marble`

### 37. `metaballs` — Decorative background

- **Goal / behavior:** بلاب‌های چسبنده از SDF یا میدان پتانسیل و threshold.
- **Engineering:** foreground-safe: شدت نور، opacity، فرکانس و fallback CSS را تعریف کن.
- **Verification:** کنتراست متن، GPU mobile، کاهش حرکت و عدم pointer-block.
- **Official catalog:** https://vibefarsi.ir/backgrounds/metaballs
- **Official command / upstream (check license and target):** `npx vibefarsi add metaballs`

### 38. `kaleidoscope` — Decorative background

- **Goal / behavior:** تقارن شعاعی تکرارشونده و کنترل فرکانس الگو.
- **Engineering:** foreground-safe: شدت نور، opacity، فرکانس و fallback CSS را تعریف کن.
- **Verification:** کنتراست متن، GPU mobile، کاهش حرکت و عدم pointer-block.
- **Official catalog:** https://vibefarsi.ir/backgrounds/kaleidoscope
- **Official command / upstream (check license and target):** `npx vibefarsi add kaleidoscope`

### 39. `cursor-trail` — Decorative background

- **Goal / behavior:** دنبالهٔ اشاره‌گر با pooling و fade خارج از مسیر متن.
- **Engineering:** foreground-safe: شدت نور، opacity، فرکانس و fallback CSS را تعریف کن.
- **Verification:** کنتراست متن، GPU mobile، کاهش حرکت و عدم pointer-block.
- **Official catalog:** https://vibefarsi.ir/backgrounds/cursor-trail
- **Official command / upstream (check license and target):** `npx vibefarsi add cursor-trail`

### 40. `particles` — Decorative background

- **Goal / behavior:** ذرات چندعمقی با seeded RNG، حرکت آرام و محدودسازی GPU.
- **Engineering:** foreground-safe: شدت نور، opacity، فرکانس و fallback CSS را تعریف کن.
- **Verification:** کنتراست متن، GPU mobile، کاهش حرکت و عدم pointer-block.
- **Official catalog:** https://vibefarsi.ir/backgrounds/particles
- **Official command / upstream (check license and target):** `npx vibefarsi add particles`

### 41. `moire` — Decorative background

- **Goal / behavior:** الگوهای تداخل خطوط با خطر aliasing؛ فقط در چگالی ایمن.
- **Engineering:** foreground-safe: شدت نور، opacity، فرکانس و fallback CSS را تعریف کن.
- **Verification:** کنتراست متن، GPU mobile، کاهش حرکت و عدم pointer-block.
- **Official catalog:** https://vibefarsi.ir/backgrounds/moire
- **Official command / upstream (check license and target):** `npx vibefarsi add moire`

### 42. `scanlines` — Decorative background

- **Goal / behavior:** خطوط افقی کم‌رنگ با فاصله ثابت؛ متن را کدر نکند.
- **Engineering:** foreground-safe: شدت نور، opacity، فرکانس و fallback CSS را تعریف کن.
- **Verification:** کنتراست متن، GPU mobile، کاهش حرکت و عدم pointer-block.
- **Official catalog:** https://vibefarsi.ir/backgrounds/scanlines
- **Official command / upstream (check license and target):** `npx vibefarsi add scanlines`

### 43. `iso-cubes` — Decorative background

- **Goal / behavior:** مکعب‌های ایزومتریک رسم‌شده با شبکهٔ برداری و سایهٔ کنترل‌شده.
- **Engineering:** foreground-safe: شدت نور، opacity، فرکانس و fallback CSS را تعریف کن.
- **Verification:** کنتراست متن، GPU mobile، کاهش حرکت و عدم pointer-block.
- **Official catalog:** https://vibefarsi.ir/backgrounds/iso-cubes
- **Official command / upstream (check license and target):** `npx vibefarsi add iso-cubes`

### 44. `liquid-gradient` — Decorative background

- **Goal / behavior:** گرادیان روان با میدان جریان آهسته و انتقال بدون banding.
- **Engineering:** foreground-safe: شدت نور، opacity، فرکانس و fallback CSS را تعریف کن.
- **Verification:** کنتراست متن، GPU mobile، کاهش حرکت و عدم pointer-block.
- **Official catalog:** https://vibefarsi.ir/backgrounds/liquid-gradient
- **Official command / upstream (check license and target):** `npx vibefarsi add liquid-gradient`

## templates

### 1. `shop-dashboard` — Full-page template

- **Goal / behavior:** قالب «shop-dashboard» صفحهٔ کامل با stateهای empty/loading/error/success و اجزای واقعی باشد.
- **Engineering:** مسیر صفحه و دادهٔ واقعی، خطا/empty/loading، ناوبری و ترکیب کامپوننت‌ها را تعریف کن.
- **Verification:** responsive، SEO یا auth privacy، فرم‌ها و صفحات جایگزین تست شود.
- **Official catalog:** https://vibefarsi.ir/templates/shop-dashboard
- **Official command / upstream (check license and target):** `npx vibefarsi add shop-dashboard`

### 2. `auth` — Full-page template

- **Goal / behavior:** قالب «auth» صفحهٔ کامل با stateهای empty/loading/error/success و اجزای واقعی باشد.
- **Engineering:** مسیر صفحه و دادهٔ واقعی، خطا/empty/loading، ناوبری و ترکیب کامپوننت‌ها را تعریف کن.
- **Verification:** responsive، SEO یا auth privacy، فرم‌ها و صفحات جایگزین تست شود.
- **Official catalog:** https://vibefarsi.ir/templates/auth
- **Official command / upstream (check license and target):** `npx vibefarsi add auth`

### 3. `startup-landing` — Full-page template

- **Goal / behavior:** قالب «startup-landing» صفحهٔ کامل با stateهای empty/loading/error/success و اجزای واقعی باشد.
- **Engineering:** مسیر صفحه و دادهٔ واقعی، خطا/empty/loading، ناوبری و ترکیب کامپوننت‌ها را تعریف کن.
- **Verification:** responsive، SEO یا auth privacy، فرم‌ها و صفحات جایگزین تست شود.
- **Official catalog:** https://vibefarsi.ir/templates/startup-landing
- **Official command / upstream (check license and target):** `npx vibefarsi add startup-landing`

### 4. `pricing` — Full-page template

- **Goal / behavior:** قالب «pricing» صفحهٔ کامل با stateهای empty/loading/error/success و اجزای واقعی باشد.
- **Engineering:** مسیر صفحه و دادهٔ واقعی، خطا/empty/loading، ناوبری و ترکیب کامپوننت‌ها را تعریف کن.
- **Verification:** responsive، SEO یا auth privacy، فرم‌ها و صفحات جایگزین تست شود.
- **Official catalog:** https://vibefarsi.ir/templates/pricing
- **Official command / upstream (check license and target):** `npx vibefarsi add pricing`

### 5. `ai-chat` — Full-page template

- **Goal / behavior:** قالب «ai-chat» صفحهٔ کامل با stateهای empty/loading/error/success و اجزای واقعی باشد.
- **Engineering:** مسیر صفحه و دادهٔ واقعی، خطا/empty/loading، ناوبری و ترکیب کامپوننت‌ها را تعریف کن.
- **Verification:** responsive، SEO یا auth privacy، فرم‌ها و صفحات جایگزین تست شود.
- **Official catalog:** https://vibefarsi.ir/templates/ai-chat
- **Official command / upstream (check license and target):** `npx vibefarsi add ai-chat`

### 6. `invoice` — Full-page template

- **Goal / behavior:** قالب «invoice» صفحهٔ کامل با stateهای empty/loading/error/success و اجزای واقعی باشد.
- **Engineering:** مسیر صفحه و دادهٔ واقعی، خطا/empty/loading، ناوبری و ترکیب کامپوننت‌ها را تعریف کن.
- **Verification:** responsive، SEO یا auth privacy، فرم‌ها و صفحات جایگزین تست شود.
- **Official catalog:** https://vibefarsi.ir/templates/invoice
- **Official command / upstream (check license and target):** `npx vibefarsi add invoice`

### 7. `blog` — Full-page template

- **Goal / behavior:** قالب «blog» صفحهٔ کامل با stateهای empty/loading/error/success و اجزای واقعی باشد.
- **Engineering:** مسیر صفحه و دادهٔ واقعی، خطا/empty/loading، ناوبری و ترکیب کامپوننت‌ها را تعریف کن.
- **Verification:** responsive، SEO یا auth privacy، فرم‌ها و صفحات جایگزین تست شود.
- **Official catalog:** https://vibefarsi.ir/templates/blog
- **Official command / upstream (check license and target):** `npx vibefarsi add blog`

### 8. `settings` — Full-page template

- **Goal / behavior:** قالب «settings» صفحهٔ کامل با stateهای empty/loading/error/success و اجزای واقعی باشد.
- **Engineering:** مسیر صفحه و دادهٔ واقعی، خطا/empty/loading، ناوبری و ترکیب کامپوننت‌ها را تعریف کن.
- **Verification:** responsive، SEO یا auth privacy، فرم‌ها و صفحات جایگزین تست شود.
- **Official catalog:** https://vibefarsi.ir/templates/settings
- **Official command / upstream (check license and target):** `npx vibefarsi add settings`

### 9. `checkout` — Full-page template

- **Goal / behavior:** قالب «checkout» صفحهٔ کامل با stateهای empty/loading/error/success و اجزای واقعی باشد.
- **Engineering:** مسیر صفحه و دادهٔ واقعی، خطا/empty/loading، ناوبری و ترکیب کامپوننت‌ها را تعریف کن.
- **Verification:** responsive، SEO یا auth privacy، فرم‌ها و صفحات جایگزین تست شود.
- **Official catalog:** https://vibefarsi.ir/templates/checkout
- **Official command / upstream (check license and target):** `npx vibefarsi add checkout`

### 10. `store` — Full-page template

- **Goal / behavior:** قالب «store» صفحهٔ کامل با stateهای empty/loading/error/success و اجزای واقعی باشد.
- **Engineering:** مسیر صفحه و دادهٔ واقعی، خطا/empty/loading، ناوبری و ترکیب کامپوننت‌ها را تعریف کن.
- **Verification:** responsive، SEO یا auth privacy، فرم‌ها و صفحات جایگزین تست شود.
- **Official catalog:** https://vibefarsi.ir/templates/store
- **Official command / upstream (check license and target):** `npx vibefarsi add store`

### 11. `onboarding` — Full-page template

- **Goal / behavior:** قالب «onboarding» صفحهٔ کامل با stateهای empty/loading/error/success و اجزای واقعی باشد.
- **Engineering:** مسیر صفحه و دادهٔ واقعی، خطا/empty/loading، ناوبری و ترکیب کامپوننت‌ها را تعریف کن.
- **Verification:** responsive، SEO یا auth privacy، فرم‌ها و صفحات جایگزین تست شود.
- **Official catalog:** https://vibefarsi.ir/templates/onboarding
- **Official command / upstream (check license and target):** `npx vibefarsi add onboarding`

### 12. `admin-orders` — Full-page template

- **Goal / behavior:** قالب «admin-orders» صفحهٔ کامل با stateهای empty/loading/error/success و اجزای واقعی باشد.
- **Engineering:** مسیر صفحه و دادهٔ واقعی، خطا/empty/loading، ناوبری و ترکیب کامپوننت‌ها را تعریف کن.
- **Verification:** responsive، SEO یا auth privacy، فرم‌ها و صفحات جایگزین تست شود.
- **Official catalog:** https://vibefarsi.ir/templates/admin-orders
- **Official command / upstream (check license and target):** `npx vibefarsi add admin-orders`

### 13. `booking` — Full-page template

- **Goal / behavior:** قالب «booking» صفحهٔ کامل با stateهای empty/loading/error/success و اجزای واقعی باشد.
- **Engineering:** مسیر صفحه و دادهٔ واقعی، خطا/empty/loading، ناوبری و ترکیب کامپوننت‌ها را تعریف کن.
- **Verification:** responsive، SEO یا auth privacy، فرم‌ها و صفحات جایگزین تست شود.
- **Official catalog:** https://vibefarsi.ir/templates/booking
- **Official command / upstream (check license and target):** `npx vibefarsi add booking`

### 14. `wallet` — Full-page template

- **Goal / behavior:** قالب «wallet» صفحهٔ کامل با stateهای empty/loading/error/success و اجزای واقعی باشد.
- **Engineering:** مسیر صفحه و دادهٔ واقعی، خطا/empty/loading، ناوبری و ترکیب کامپوننت‌ها را تعریف کن.
- **Verification:** responsive، SEO یا auth privacy، فرم‌ها و صفحات جایگزین تست شود.
- **Official catalog:** https://vibefarsi.ir/templates/wallet
- **Official command / upstream (check license and target):** `npx vibefarsi add wallet`

### 15. `error-pages` — Full-page template

- **Goal / behavior:** قالب «error-pages» صفحهٔ کامل با stateهای empty/loading/error/success و اجزای واقعی باشد.
- **Engineering:** مسیر صفحه و دادهٔ واقعی، خطا/empty/loading، ناوبری و ترکیب کامپوننت‌ها را تعریف کن.
- **Verification:** responsive، SEO یا auth privacy، فرم‌ها و صفحات جایگزین تست شود.
- **Official catalog:** https://vibefarsi.ir/templates/error-pages
- **Official command / upstream (check license and target):** `npx vibefarsi add error-pages`

### 16. `email` — Full-page template

- **Goal / behavior:** قالب «email» صفحهٔ کامل با stateهای empty/loading/error/success و اجزای واقعی باشد.
- **Engineering:** مسیر صفحه و دادهٔ واقعی، خطا/empty/loading، ناوبری و ترکیب کامپوننت‌ها را تعریف کن.
- **Verification:** responsive، SEO یا auth privacy، فرم‌ها و صفحات جایگزین تست شود.
- **Official catalog:** https://vibefarsi.ir/templates/email
- **Official command / upstream (check license and target):** `npx vibefarsi add email`

### 17. `saas-landing` — Full-page template

- **Goal / behavior:** قالب «saas-landing» صفحهٔ کامل با stateهای empty/loading/error/success و اجزای واقعی باشد.
- **Engineering:** مسیر صفحه و دادهٔ واقعی، خطا/empty/loading، ناوبری و ترکیب کامپوننت‌ها را تعریف کن.
- **Verification:** responsive، SEO یا auth privacy، فرم‌ها و صفحات جایگزین تست شود.
- **Official catalog:** https://vibefarsi.ir/templates/saas-landing
- **Official command / upstream (check license and target):** `npx vibefarsi add saas-landing`

### 18. `finance-dashboard` — Full-page template

- **Goal / behavior:** قالب «finance-dashboard» صفحهٔ کامل با stateهای empty/loading/error/success و اجزای واقعی باشد.
- **Engineering:** مسیر صفحه و دادهٔ واقعی، خطا/empty/loading، ناوبری و ترکیب کامپوننت‌ها را تعریف کن.
- **Verification:** responsive، SEO یا auth privacy، فرم‌ها و صفحات جایگزین تست شود.
- **Official catalog:** https://vibefarsi.ir/templates/finance-dashboard
- **Official command / upstream (check license and target):** `npx vibefarsi add finance-dashboard`

### 19. `food-delivery` — Full-page template

- **Goal / behavior:** قالب «food-delivery» صفحهٔ کامل با stateهای empty/loading/error/success و اجزای واقعی باشد.
- **Engineering:** مسیر صفحه و دادهٔ واقعی، خطا/empty/loading، ناوبری و ترکیب کامپوننت‌ها را تعریف کن.
- **Verification:** responsive، SEO یا auth privacy، فرم‌ها و صفحات جایگزین تست شود.
- **Official catalog:** https://vibefarsi.ir/templates/food-delivery
- **Official command / upstream (check license and target):** `npx vibefarsi add food-delivery`

### 20. `kanban` — Full-page template

- **Goal / behavior:** قالب «kanban» صفحهٔ کامل با stateهای empty/loading/error/success و اجزای واقعی باشد.
- **Engineering:** مسیر صفحه و دادهٔ واقعی، خطا/empty/loading، ناوبری و ترکیب کامپوننت‌ها را تعریف کن.
- **Verification:** responsive، SEO یا auth privacy، فرم‌ها و صفحات جایگزین تست شود.
- **Official catalog:** https://vibefarsi.ir/templates/kanban
- **Official command / upstream (check license and target):** `npx vibefarsi add kanban`

### 21. `course` — Full-page template

- **Goal / behavior:** قالب «course» صفحهٔ کامل با stateهای empty/loading/error/success و اجزای واقعی باشد.
- **Engineering:** مسیر صفحه و دادهٔ واقعی، خطا/empty/loading، ناوبری و ترکیب کامپوننت‌ها را تعریف کن.
- **Verification:** responsive، SEO یا auth privacy، فرم‌ها و صفحات جایگزین تست شود.
- **Official catalog:** https://vibefarsi.ir/templates/course
- **Official command / upstream (check license and target):** `npx vibefarsi add course`

### 22. `receipt` — Full-page template

- **Goal / behavior:** قالب «receipt» صفحهٔ کامل با stateهای empty/loading/error/success و اجزای واقعی باشد.
- **Engineering:** مسیر صفحه و دادهٔ واقعی، خطا/empty/loading، ناوبری و ترکیب کامپوننت‌ها را تعریف کن.
- **Verification:** responsive، SEO یا auth privacy، فرم‌ها و صفحات جایگزین تست شود.
- **Official catalog:** https://vibefarsi.ir/templates/receipt
- **Official command / upstream (check license and target):** `npx vibefarsi add receipt`

### 23. `travel-search` — Full-page template

- **Goal / behavior:** قالب «travel-search» صفحهٔ کامل با stateهای empty/loading/error/success و اجزای واقعی باشد.
- **Engineering:** مسیر صفحه و دادهٔ واقعی، خطا/empty/loading، ناوبری و ترکیب کامپوننت‌ها را تعریف کن.
- **Verification:** responsive، SEO یا auth privacy، فرم‌ها و صفحات جایگزین تست شود.
- **Official catalog:** https://vibefarsi.ir/templates/travel-search
- **Official command / upstream (check license and target):** `npx vibefarsi add travel-search`

### 24. `coming-soon` — Full-page template

- **Goal / behavior:** قالب «coming-soon» صفحهٔ کامل با stateهای empty/loading/error/success و اجزای واقعی باشد.
- **Engineering:** مسیر صفحه و دادهٔ واقعی، خطا/empty/loading، ناوبری و ترکیب کامپوننت‌ها را تعریف کن.
- **Verification:** responsive، SEO یا auth privacy، فرم‌ها و صفحات جایگزین تست شود.
- **Official catalog:** https://vibefarsi.ir/templates/coming-soon
- **Official command / upstream (check license and target):** `npx vibefarsi add coming-soon`

### 25. `real-estate` — Full-page template

- **Goal / behavior:** قالب «real-estate» صفحهٔ کامل با stateهای empty/loading/error/success و اجزای واقعی باشد.
- **Engineering:** مسیر صفحه و دادهٔ واقعی، خطا/empty/loading، ناوبری و ترکیب کامپوننت‌ها را تعریف کن.
- **Verification:** responsive، SEO یا auth privacy، فرم‌ها و صفحات جایگزین تست شود.
- **Official catalog:** https://vibefarsi.ir/templates/real-estate
- **Official command / upstream (check license and target):** `npx vibefarsi add real-estate`

### 26. `support` — Full-page template

- **Goal / behavior:** قالب «support» صفحهٔ کامل با stateهای empty/loading/error/success و اجزای واقعی باشد.
- **Engineering:** مسیر صفحه و دادهٔ واقعی، خطا/empty/loading، ناوبری و ترکیب کامپوننت‌ها را تعریف کن.
- **Verification:** responsive، SEO یا auth privacy، فرم‌ها و صفحات جایگزین تست شود.
- **Official catalog:** https://vibefarsi.ir/templates/support
- **Official command / upstream (check license and target):** `npx vibefarsi add support`

### 27. `ride` — Full-page template

- **Goal / behavior:** قالب «ride» صفحهٔ کامل با stateهای empty/loading/error/success و اجزای واقعی باشد.
- **Engineering:** مسیر صفحه و دادهٔ واقعی، خطا/empty/loading، ناوبری و ترکیب کامپوننت‌ها را تعریف کن.
- **Verification:** responsive، SEO یا auth privacy، فرم‌ها و صفحات جایگزین تست شود.
- **Official catalog:** https://vibefarsi.ir/templates/ride
- **Official command / upstream (check license and target):** `npx vibefarsi add ride`

### 28. `jobs` — Full-page template

- **Goal / behavior:** قالب «jobs» صفحهٔ کامل با stateهای empty/loading/error/success و اجزای واقعی باشد.
- **Engineering:** مسیر صفحه و دادهٔ واقعی، خطا/empty/loading، ناوبری و ترکیب کامپوننت‌ها را تعریف کن.
- **Verification:** responsive، SEO یا auth privacy، فرم‌ها و صفحات جایگزین تست شود.
- **Official catalog:** https://vibefarsi.ir/templates/jobs
- **Official command / upstream (check license and target):** `npx vibefarsi add jobs`

### 29. `pos` — Full-page template

- **Goal / behavior:** قالب «pos» صفحهٔ کامل با stateهای empty/loading/error/success و اجزای واقعی باشد.
- **Engineering:** مسیر صفحه و دادهٔ واقعی، خطا/empty/loading، ناوبری و ترکیب کامپوننت‌ها را تعریف کن.
- **Verification:** responsive، SEO یا auth privacy، فرم‌ها و صفحات جایگزین تست شود.
- **Official catalog:** https://vibefarsi.ir/templates/pos
- **Official command / upstream (check license and target):** `npx vibefarsi add pos`

### 30. `crm` — Full-page template

- **Goal / behavior:** قالب «crm» صفحهٔ کامل با stateهای empty/loading/error/success و اجزای واقعی باشد.
- **Engineering:** مسیر صفحه و دادهٔ واقعی، خطا/empty/loading، ناوبری و ترکیب کامپوننت‌ها را تعریف کن.
- **Verification:** responsive، SEO یا auth privacy، فرم‌ها و صفحات جایگزین تست شود.
- **Official catalog:** https://vibefarsi.ir/templates/crm
- **Official command / upstream (check license and target):** `npx vibefarsi add crm`

## sites

### 1. `agency-site` — Multi-page website

- **Goal / behavior:** سایت «agency-site» را چندصفحه‌ای، route-aware، content-driven با فوتر/header مشترک و دادهٔ واقع‌گرا پیاده‌سازی کن.
- **Engineering:** نقشهٔ صفحات، routing، content model، shared shell و حریم خصوصی را مشخص کن.
- **Verification:** لینک‌های داخلی/404، دسترسی/SEO، device and lighthouse.
- **Official catalog:** https://vibefarsi.ir/sites/agency-site
- **Official command / upstream (check license and target):** `npx vibefarsi add agency-site`

### 2. `saas-site` — Multi-page website

- **Goal / behavior:** سایت «saas-site» را چندصفحه‌ای، route-aware، content-driven با فوتر/header مشترک و دادهٔ واقع‌گرا پیاده‌سازی کن.
- **Engineering:** نقشهٔ صفحات، routing، content model، shared shell و حریم خصوصی را مشخص کن.
- **Verification:** لینک‌های داخلی/404، دسترسی/SEO، device and lighthouse.
- **Official catalog:** https://vibefarsi.ir/sites/saas-site
- **Official command / upstream (check license and target):** `npx vibefarsi add saas-site`

### 3. `shop-site` — Multi-page website

- **Goal / behavior:** سایت «shop-site» را چندصفحه‌ای، route-aware، content-driven با فوتر/header مشترک و دادهٔ واقع‌گرا پیاده‌سازی کن.
- **Engineering:** نقشهٔ صفحات، routing، content model، shared shell و حریم خصوصی را مشخص کن.
- **Verification:** لینک‌های داخلی/404، دسترسی/SEO، device and lighthouse.
- **Official catalog:** https://vibefarsi.ir/sites/shop-site
- **Official command / upstream (check license and target):** `npx vibefarsi add shop-site`

### 4. `clinic-site` — Multi-page website

- **Goal / behavior:** سایت «clinic-site» را چندصفحه‌ای، route-aware، content-driven با فوتر/header مشترک و دادهٔ واقع‌گرا پیاده‌سازی کن.
- **Engineering:** نقشهٔ صفحات، routing، content model، shared shell و حریم خصوصی را مشخص کن.
- **Verification:** لینک‌های داخلی/404، دسترسی/SEO، device and lighthouse.
- **Official catalog:** https://vibefarsi.ir/sites/clinic-site
- **Official command / upstream (check license and target):** `npx vibefarsi add clinic-site`

### 5. `restaurant-site` — Multi-page website

- **Goal / behavior:** سایت «restaurant-site» را چندصفحه‌ای، route-aware، content-driven با فوتر/header مشترک و دادهٔ واقع‌گرا پیاده‌سازی کن.
- **Engineering:** نقشهٔ صفحات، routing، content model، shared shell و حریم خصوصی را مشخص کن.
- **Verification:** لینک‌های داخلی/404، دسترسی/SEO، device and lighthouse.
- **Official catalog:** https://vibefarsi.ir/sites/restaurant-site
- **Official command / upstream (check license and target):** `npx vibefarsi add restaurant-site`

### 6. `lodge-site` — Multi-page website

- **Goal / behavior:** سایت «lodge-site» را چندصفحه‌ای، route-aware، content-driven با فوتر/header مشترک و دادهٔ واقع‌گرا پیاده‌سازی کن.
- **Engineering:** نقشهٔ صفحات، routing، content model، shared shell و حریم خصوصی را مشخص کن.
- **Verification:** لینک‌های داخلی/404، دسترسی/SEO، device and lighthouse.
- **Official catalog:** https://vibefarsi.ir/sites/lodge-site
- **Official command / upstream (check license and target):** `npx vibefarsi add lodge-site`

## design-systems

### 1. `graphite` — Theme tokens

- **Goal / behavior:** تم «graphite» به‌عنوان یک سیستم مستقل از رنگ، border, elevation, radii, typography و motion تعریف شود؛ Perfect_AI پیش‌فرض graphite grayscale است.
- **Engineering:** توکن‌های semantic و typography/shape/motion را تولید کن؛ رنگ‌های درون کامپوننت ممنوع.
- **Verification:** contrast در light/dark و states، consistency و RTL.
- **Official catalog:** https://vibefarsi.ir/design-systems/graphite
- **Official command / upstream (check license and target):** `npx vibefarsi add graphite`

### 2. `turquoise` — Theme tokens

- **Goal / behavior:** تم «turquoise» به‌عنوان یک سیستم مستقل از رنگ، border, elevation, radii, typography و motion تعریف شود؛ Perfect_AI پیش‌فرض graphite grayscale است.
- **Engineering:** توکن‌های semantic و typography/shape/motion را تولید کن؛ رنگ‌های درون کامپوننت ممنوع.
- **Verification:** contrast در light/dark و states، consistency و RTL.
- **Official catalog:** https://vibefarsi.ir/design-systems/turquoise
- **Official command / upstream (check license and target):** `npx vibefarsi add turquoise`

### 3. `saffron` — Theme tokens

- **Goal / behavior:** تم «saffron» به‌عنوان یک سیستم مستقل از رنگ، border, elevation, radii, typography و motion تعریف شود؛ Perfect_AI پیش‌فرض graphite grayscale است.
- **Engineering:** توکن‌های semantic و typography/shape/motion را تولید کن؛ رنگ‌های درون کامپوننت ممنوع.
- **Verification:** contrast در light/dark و states، consistency و RTL.
- **Official catalog:** https://vibefarsi.ir/design-systems/saffron
- **Official command / upstream (check license and target):** `npx vibefarsi add saffron`

### 4. `pomegranate` — Theme tokens

- **Goal / behavior:** تم «pomegranate» به‌عنوان یک سیستم مستقل از رنگ، border, elevation, radii, typography و motion تعریف شود؛ Perfect_AI پیش‌فرض graphite grayscale است.
- **Engineering:** توکن‌های semantic و typography/shape/motion را تولید کن؛ رنگ‌های درون کامپوننت ممنوع.
- **Verification:** contrast در light/dark و states، consistency و RTL.
- **Official catalog:** https://vibefarsi.ir/design-systems/pomegranate
- **Official command / upstream (check license and target):** `npx vibefarsi add pomegranate`

### 5. `lapis` — Theme tokens

- **Goal / behavior:** تم «lapis» به‌عنوان یک سیستم مستقل از رنگ، border, elevation, radii, typography و motion تعریف شود؛ Perfect_AI پیش‌فرض graphite grayscale است.
- **Engineering:** توکن‌های semantic و typography/shape/motion را تولید کن؛ رنگ‌های درون کامپوننت ممنوع.
- **Verification:** contrast در light/dark و states، consistency و RTL.
- **Official catalog:** https://vibefarsi.ir/design-systems/lapis
- **Official command / upstream (check license and target):** `npx vibefarsi add lapis`

### 6. `paper` — Theme tokens

- **Goal / behavior:** تم «paper» به‌عنوان یک سیستم مستقل از رنگ، border, elevation, radii, typography و motion تعریف شود؛ Perfect_AI پیش‌فرض graphite grayscale است.
- **Engineering:** توکن‌های semantic و typography/shape/motion را تولید کن؛ رنگ‌های درون کامپوننت ممنوع.
- **Verification:** contrast در light/dark و states، consistency و RTL.
- **Official catalog:** https://vibefarsi.ir/design-systems/paper
- **Official command / upstream (check license and target):** `npx vibefarsi add paper`

## skills

### 1. `persian-conversational` — Agent skill

- **Goal / behavior:** برای چت پشتیبانی، اعلان‌های محصول و شبکه‌های اجتماعی بنویس. سطح صمیمیت را به مخاطب تنظیم کن. فعل‌ها طبیعی و نیم‌فاصله درست؛ هکسره و کلیشه حذف شود.
- **Engineering:** frontmatter نام/description، when-to-use و دستورات قابل اجرا در Codex را مشخص کن.
- **Verification:** آزمون discovery/install و عدم overwrite فایل‌های فعلی.
- **Official catalog:** https://vibefarsi.ir/skills/persian-conversational
- **Official command / upstream (check license and target):** `npx vibefarsi add persian-conversational`

### 2. `persian-formal` — Agent skill

- **Goal / behavior:** نامه رسمی با موضوع، مخاطب، شرح دقیق، درخواست مشخص و پایان‌بندی حرفه‌ای؛ ادعاهای حقوقی بی‌منبع نکن. جملات کوتاه و تاریخ درست.
- **Engineering:** frontmatter نام/description، when-to-use و دستورات قابل اجرا در Codex را مشخص کن.
- **Verification:** آزمون discovery/install و عدم overwrite فایل‌های فعلی.
- **Official catalog:** https://vibefarsi.ir/skills/persian-formal
- **Official command / upstream (check license and target):** `npx vibefarsi add persian-formal`

### 3. `persian-ui-copy` — Agent skill

- **Goal / behavior:** برای Button/Label/Placeholder/Help/Error/Toast/Empty/Loading متن کوتاه و عمل‌محور ارائه کن، پیام خطا راه اصلاح نشان دهد.
- **Engineering:** frontmatter نام/description، when-to-use و دستورات قابل اجرا در Codex را مشخص کن.
- **Verification:** آزمون discovery/install و عدم overwrite فایل‌های فعلی.
- **Official catalog:** https://vibefarsi.ir/skills/persian-ui-copy
- **Official command / upstream (check license and target):** `npx vibefarsi add persian-ui-copy`

### 4. `persian-rtl-ui` — Agent skill

- **Goal / behavior:** CSS منطقی، flex/grid بدون معکوس‌سازی مضاعف، فونت فارسی، اعداد و واحد تومان، bdi برای code/phone/email، arrow صحیح، دسترس‌پذیری.
- **Engineering:** frontmatter نام/description، when-to-use و دستورات قابل اجرا در Codex را مشخص کن.
- **Verification:** آزمون discovery/install و عدم overwrite فایل‌های فعلی.
- **Official catalog:** https://vibefarsi.ir/skills/persian-rtl-ui
- **Official command / upstream (check license and target):** `npx vibefarsi add persian-rtl-ui`

### 5. `jalali-calendar` — Agent skill

- **Goal / behavior:** ذخیرهٔ ISO UTC و نمایش شمسی، محدودهٔ زمانی و timezone، شنبه به‌عنوان شروع هفته، تست کبیسه و مرز نوروز.
- **Engineering:** frontmatter نام/description، when-to-use و دستورات قابل اجرا در Codex را مشخص کن.
- **Verification:** آزمون discovery/install و عدم overwrite فایل‌های فعلی.
- **Official catalog:** https://vibefarsi.ir/skills/jalali-calendar
- **Official command / upstream (check license and target):** `npx vibefarsi add jalali-calendar`

### 6. `iran-validation` — Agent skill

- **Goal / behavior:** پذیرش اعداد فارسی/عربی، نرمال‌سازی ورودی، Luhn و mod97 و checksum کد ملی؛ نتیجه را سرور نیز اعتبارسنجی کند.
- **Engineering:** frontmatter نام/description، when-to-use و دستورات قابل اجرا در Codex را مشخص کن.
- **Verification:** آزمون discovery/install و عدم overwrite فایل‌های فعلی.
- **Official catalog:** https://vibefarsi.ir/skills/iran-validation
- **Official command / upstream (check license and target):** `npx vibefarsi add iran-validation`

### 7. `persian-seo` — Agent skill

- **Goal / behavior:** meta title/description، lang/fa، hreflang، canonical، breadcrumbs، JSON-LD با inLanguage، اسلاگ پایدار و open graph.
- **Engineering:** frontmatter نام/description، when-to-use و دستورات قابل اجرا در Codex را مشخص کن.
- **Verification:** آزمون discovery/install و عدم overwrite فایل‌های فعلی.
- **Official catalog:** https://vibefarsi.ir/skills/persian-seo
- **Official command / upstream (check license and target):** `npx vibefarsi add persian-seo`

### 8. `agents-md-persian` — Agent skill

- **Goal / behavior:** قواعد فارسی/RTL/تاریخ/کپی/فونت/تست را به AGENTS.md بدون پاک‌کردن دستورهای قبلی اضافه کن؛ تعارض‌ها را اعلام کن.
- **Engineering:** frontmatter نام/description، when-to-use و دستورات قابل اجرا در Codex را مشخص کن.
- **Verification:** آزمون discovery/install و عدم overwrite فایل‌های فعلی.
- **Official catalog:** https://vibefarsi.ir/skills/agents-md-persian
- **Official command / upstream (check license and target):** `npx vibefarsi add agents-md-persian`

### 9. `ui-craft-rules` — Agent skill

- **Goal / behavior:** پالت نقش‌محور، مقیاس فواصل، حداکثر سه مدل شکل، توکن تایپوگرافی، کنترل ۴۴px، CLS صفر تا حد امکان، جلوگیری از کامپوننت‌های کلیشه‌ای.
- **Engineering:** frontmatter نام/description، when-to-use و دستورات قابل اجرا در Codex را مشخص کن.
- **Verification:** آزمون discovery/install و عدم overwrite فایل‌های فعلی.
- **Official catalog:** https://vibefarsi.ir/skills/ui-craft-rules
- **Official command / upstream (check license and target):** `npx vibefarsi add ui-craft-rules`

### 10. `persian-typography` — Agent skill

- **Goal / behavior:** انتخاب فونت با لایسنس، رندر نیم‌فاصله، بدون letter-spacing منفی، line-height فارسی، LTR inline، tabular figures و Font loading.
- **Engineering:** frontmatter نام/description، when-to-use و دستورات قابل اجرا در Codex را مشخص کن.
- **Verification:** آزمون discovery/install و عدم overwrite فایل‌های فعلی.
- **Official catalog:** https://vibefarsi.ir/skills/persian-typography
- **Official command / upstream (check license and target):** `npx vibefarsi add persian-typography`

### 11. `parspack-s3-upload` — Agent skill

- **Goal / behavior:** اعتبارسنجی MIME و signature و size، credentials فقط سرور، upload path یکتا، Content-Type، URL عمومی معتبر، محدودیت دسترسی.
- **Engineering:** frontmatter نام/description، when-to-use و دستورات قابل اجرا در Codex را مشخص کن.
- **Verification:** آزمون discovery/install و عدم overwrite فایل‌های فعلی.
- **Official catalog:** https://vibefarsi.ir/skills/parspack-s3-upload
- **Official command / upstream (check license and target):** `npx vibefarsi add parspack-s3-upload`

### 12. `zarinpal-payment` — Agent skill

- **Goal / behavior:** وضعیت سفارش pending→verified، تفکیک تومان/ریال، Verify سرور، callback idempotent و log بدون اطلاعات حساس.
- **Engineering:** frontmatter نام/description، when-to-use و دستورات قابل اجرا در Codex را مشخص کن.
- **Verification:** آزمون discovery/install و عدم overwrite فایل‌های فعلی.
- **Official catalog:** https://vibefarsi.ir/skills/zarinpal-payment
- **Official command / upstream (check license and target):** `npx vibefarsi add zarinpal-payment`

### 13. `kavenegar-otp` — Agent skill

- **Goal / behavior:** تولید کد کوتاه‌عمر تصادفی امن، ارسال server-side، rate limiting/lockouts، عدم افشای وجود کاربر، پاکسازی کد و ثبت نتیجه.
- **Engineering:** frontmatter نام/description، when-to-use و دستورات قابل اجرا در Codex را مشخص کن.
- **Verification:** آزمون discovery/install و عدم overwrite فایل‌های فعلی.
- **Official catalog:** https://vibefarsi.ir/skills/kavenegar-otp
- **Official command / upstream (check license and target):** `npx vibefarsi add kavenegar-otp`

### 14. `persian-writing` — Agent skill

- **Goal / behavior:** زبان طبیعی و دقیق، نیم‌فاصله، تیتر کوتاه، پرهیز از تکرار، ارجاع درست و تنظیم لحن برای متن وب.
- **Engineering:** frontmatter نام/description، when-to-use و دستورات قابل اجرا در Codex را مشخص کن.
- **Verification:** آزمون discovery/install و عدم overwrite فایل‌های فعلی.
- **Official catalog:** https://vibefarsi.ir/skills/persian-writing
- **Official command / upstream (check license and target):** `git clone https://github.com/ali2000hos/persian-writing ~/.claude/skills/persian-writing`

## Packaging / usage

1. Select only relevant items from this catalog and explain why they belong in the UI.
2. If using VibeFarsi real files: run `npx vibefarsi list`, then `npx vibefarsi add slug...` in project root with compatible React + Tailwind v4 and inspect output.
3. If using Perfect_AI custom effects: follow original guidance in `01-animejs-motion.md` and `02-threejs-3d.md`.
4. Keep all external source code licenses; a catalog entry is not a redistributed source implementation.
