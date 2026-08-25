"use client";

import { useState } from "react";
import { useStore } from "./StoreContext";

export default function EmailForm({ className = "email-form", buttonLabel = "Subscribe" }) {
  const { showToast } = useStore();
  const [busy, setBusy] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.querySelector('input[type="email"]');
    const honeypot = form.querySelector('input[name="website"]');
    const email = input && input.value;
    if (!email || busy) return;

    setBusy(true);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website: honeypot ? honeypot.value : "" }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        input.value = "";
        showToast("You're on the list! We'll be in touch.");
      } else {
        showToast("Please double-check your email address.");
      }
    } catch {
      showToast("Something went wrong — please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form className={className} onSubmit={onSubmit}>
      <input type="email" name="email" placeholder="you@email.com" required aria-label="Email address" autoComplete="email" spellCheck={false} />
      {/* Honeypot — hidden from people, tempting for bots */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px", height: 0, width: 0, opacity: 0 }} />
      <button type="submit" disabled={busy}>{busy ? "…" : buttonLabel}</button>
    </form>
  );
}
