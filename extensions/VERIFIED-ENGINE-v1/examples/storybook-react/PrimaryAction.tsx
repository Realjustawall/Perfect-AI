import React, { useState } from 'react';
export type PrimaryActionProps = {
  label: string;
  language?: 'fa' | 'en';
  busy?: boolean;
  disabled?: boolean;
  onConfirm?: () => Promise<void> | void;
};
export function PrimaryAction({ label, language='en', busy=false, disabled=false, onConfirm }: PrimaryActionProps) {
  const [saving, setSaving] = useState(false);
  const [done, setDone] = useState(false);
  async function activate() {
    if (busy || disabled || saving) return;
    setSaving(true);
    try { await onConfirm?.(); setDone(true); }
    finally { setSaving(false); }
  }
  return <section lang={language} dir={language === 'fa' ? 'rtl' : 'ltr'}>
    <button type="button" disabled={busy || disabled || saving} aria-busy={busy || saving} onClick={activate}>
      {saving || busy ? (language === 'fa' ? 'در حال ذخیره' : 'Saving') : label}
    </button>
    <output role="status" aria-live="polite">{done ? (language === 'fa' ? 'انجام شد' : 'Completed') : ''}</output>
  </section>;
}
