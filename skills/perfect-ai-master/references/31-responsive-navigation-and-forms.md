# Adaptive navigation, dialogs, forms, touch keyboards

Use a true `<button>` for drawer trigger; `aria-expanded` & `aria-controls`, close on outside click/Escape, focus trap only inside modal dialog, restore focus. Avoid placing nav twice in DOM. Preserve route changes and active link semantics. Do not disable page scroll while any overlay requires scrolling unless overlay itself safely scrolls.

Forms: `autocomplete`, `inputmode`, `type` correctly; labels visible; describe errors with `aria-describedby`; communicate after submission with live region. On small screens stack labels/fields; prevent mobile keyboard from obscuring submit button; no `position:fixed` UI overlaying focused input. OTP segmented fields need paste and backspace semantics, not only auto-focus. Persian labels and LTR numeric/email/URL fields need explicit bidi isolation.

Test 320x568 with keyboard visible; disabled JS fallback; broken network; 400% zoom; legal long labels; keyboard with Tab/Shift-Tab/Escape; VoiceOver/TalkBack if available.
