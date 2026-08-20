"use client";

import { useEffect } from "react";
import Link from "next/link";
import Icon from "./Icon";
import { useStore, formatPrice } from "./StoreContext";

export default function CartDrawer() {
  const { cart, cartTotal, updateQty, cartOpen, setCartOpen, showToast } = useStore();

  useEffect(() => {
    document.body.style.overflow = cartOpen ? "hidden" : "";
    const onKey = (e) => {
      if (e.key === "Escape") setCartOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [cartOpen, setCartOpen]);

  return (
    <>
      <div className={`cart-overlay${cartOpen ? " is-open" : ""}`} onClick={() => setCartOpen(false)}></div>
      <aside className={`cart-drawer${cartOpen ? " is-open" : ""}`} role="dialog" aria-label="Shopping Bag">
        <div className="cart-header">
          <h2 className="cart-title">Shopping Bag</h2>
          <button className="cart-close" aria-label="Close cart" onClick={() => setCartOpen(false)}>
            <Icon name="close" />
          </button>
        </div>
        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <p>Your bag is empty</p>
              <Link href="/product" className="btn btn-outline btn-sm" onClick={() => setCartOpen(false)}>
                Shop Now
              </Link>
            </div>
          ) : (
            cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-image">
                  <div className="img-placeholder" style={{ fontSize: 9 }}>Product</div>
                </div>
                <div className="cart-item-details">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-variant">{item.variant}</div>
                  <div className="cart-item-bottom">
                    <div className="cart-item-qty">
                      <button className="cart-qty-btn" aria-label="Decrease quantity" onClick={() => updateQty(item.id, item.qty - 1)}>
                        <Icon name="minus" />
                      </button>
                      <span>{item.qty}</span>
                      <button className="cart-qty-btn" aria-label="Increase quantity" onClick={() => updateQty(item.id, item.qty + 1)}>
                        <Icon name="plus" />
                      </button>
                    </div>
                    <div className="cart-item-price">{formatPrice(item.price * item.qty)}</div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-subtotal">
              <span className="label">Subtotal</span>
              <span className="amount">{formatPrice(cartTotal)}</span>
            </div>
            <p className="cart-tax-note">Taxes calculated at checkout</p>
            <button className="btn btn-dark btn-full" onClick={() => showToast("Launching November 2026 — checkout opens soon!")}>
              Checkout
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
