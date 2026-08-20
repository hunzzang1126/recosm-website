"use client";

import { useStore } from "./StoreContext";

export default function Toast() {
  const { toast } = useStore();
  return <div className={`toast${toast.visible ? " is-visible" : ""}`}>{toast.message}</div>;
}
