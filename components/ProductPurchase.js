"use client";

import { useState } from "react";
import { useStore } from "./StoreContext";

export default function ProductPurchase() {
  const { addToCart, setCartOpen, showToast } = useStore();
  const [qty, setQty] = useState(1);

  return (
    <div className="product-add">
      <div className="qty-selector">
        <button className="qty-btn" aria-label="Decrease quantity" onClick={() => setQty((q) => Math.max(1, q - 1))}>−</button>
        <span className="qty-value">{qty}</span>
        <button className="qty-btn" aria-label="Increase quantity" onClick={() => setQty((q) => Math.min(10, q + 1))}>+</button>
      </div>
      <button
        className="btn btn-primary btn-lg"
        onClick={() => {
          addToCart(qty);
          showToast("Added to your bag!");
          setCartOpen(true);
        }}
      >
        Add to Bag
      </button>
    </div>
  );
}
