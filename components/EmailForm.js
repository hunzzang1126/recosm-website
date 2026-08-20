"use client";

import { useStore } from "./StoreContext";

export default function EmailForm({ className = "email-form", toast = "Welcome to Re:Cosm! Check your inbox." }) {
  const { showToast } = useStore();

  function onSubmit(e) {
    e.preventDefault();
    const input = e.currentTarget.querySelector("input");
    if (input && input.value) {
      input.value = "";
      showToast(toast);
    }
  }

  return (
    <form className={className} onSubmit={onSubmit}>
      <input type="email" placeholder="Enter your email" required aria-label="Email address" />
      <button type="submit">Subscribe</button>
    </form>
  );
}
