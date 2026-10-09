# Forms, state and security across devices

Validated UI has schema rules, field dependency, async availability checks where justified, clear errors, submission states, idempotency and safe retries. Client validation improves UX but **never replaces server validation/auth/authorization**. Prevent XSS by escaping untrusted content, avoid dangerouslySetInnerHTML; CSRF mitigations for cookie-auth workflows, rate limiting for abuse, input constraints server-side, safe file upload type/size scanning, secret management. For a static demo document that no secure backend exists.

Responsive: avoid multi-column forms too narrow, use correct `inputmode`, account for on-screen keyboard. Persian: `dir=ltr` on email/password/URLs when appropriate, do not coerce localized digits inconsistently, accessible labels and error live region. Async error doesn't erase user input. No secrets in generated source or ZIP.
