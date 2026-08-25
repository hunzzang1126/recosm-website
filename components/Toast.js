"use client";

import { useStore } from "./StoreContext";

export default function Toast() {
  const { toast } = useStore();
  if (!toast.message) return null;
  return <div className={`toast${toast.visible ? " is-visible" : ""}`}>{toast.message}</div>;
}
