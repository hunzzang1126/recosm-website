"use client";

// ============================================
// Re:Cosm — Store Context (cart, toast, drawer)
// ============================================

import { createContext, useContext, useEffect, useState, useCallback, useRef } from "react";

const CART_KEY = "recosm_cart";

export const PRODUCT = {
  id: "recosm-lcs-7ml",
  name: "Lash Conditioning Serum",
  variant: "7 mL",
  price: 55.0,
  currency: "CAD",
};

export function formatPrice(amount) {
  return `$${amount.toFixed(2)} CAD`;
}

const StoreContext = createContext(null);

export function StoreProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState({ message: "", visible: false });
  const toastTimer = useRef(null);

  // localStorage is browser-only — hydrate after mount
  useEffect(() => {
    try {
      const data = localStorage.getItem(CART_KEY);
      if (data) setCart(JSON.parse(data));
    } catch {}
  }, []);

  const persist = useCallback((next) => {
    setCart(next);
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(next));
    } catch {}
  }, []);

  const addToCart = useCallback(
    (qty = 1) => {
      const existing = cart.find((item) => item.id === PRODUCT.id);
      const next = existing
        ? cart.map((item) => (item.id === PRODUCT.id ? { ...item, qty: item.qty + qty } : item))
        : [...cart, { ...PRODUCT, qty }];
      persist(next);
    },
    [cart, persist]
  );

  const updateQty = useCallback(
    (id, qty) => {
      const next = qty <= 0 ? cart.filter((item) => item.id !== id) : cart.map((item) => (item.id === id ? { ...item, qty } : item));
      persist(next);
    },
    [cart, persist]
  );

  const showToast = useCallback((message) => {
    setToast({ message, visible: true });
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast((t) => ({ ...t, visible: false })), 3000);
  }, []);

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <StoreContext.Provider
      value={{ cart, cartCount, cartTotal, addToCart, updateQty, cartOpen, setCartOpen, toast, showToast }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  return useContext(StoreContext);
}
