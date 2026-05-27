// ============================================
// Re:Cosm — Cart Drawer Component
// ============================================

import { icons } from '../utils/icons.js';
import { getCart, getCartTotal, updateQty, removeFromCart, formatPrice, onCartChange } from '../utils/cart.js';

export function renderCartDrawer() {
  return `
    <div class="cart-overlay" id="cart-overlay"></div>
    <aside class="cart-drawer" id="cart-drawer" role="dialog" aria-label="Shopping Bag">
      <div class="cart-header">
        <h2 class="cart-title">Shopping Bag</h2>
        <button class="cart-close" id="cart-close" aria-label="Close cart">
          ${icons.close}
        </button>
      </div>
      <div class="cart-items" id="cart-items">
        ${renderCartItems()}
      </div>
      <div class="cart-footer" id="cart-footer" style="${getCart().length === 0 ? 'display:none' : ''}">
        <div class="cart-subtotal">
          <span class="label">Subtotal</span>
          <span class="amount" id="cart-total">${formatPrice(getCartTotal())}</span>
        </div>
        <p class="cart-tax-note">Taxes calculated at checkout</p>
        <button class="btn btn-dark btn-full" id="cart-checkout">Checkout</button>
      </div>
    </aside>
  `;
}

function renderCartItems() {
  const items = getCart();
  if (items.length === 0) {
    return `
      <div class="cart-empty">
        <p>Your bag is empty</p>
        <a href="#/product" class="btn btn-outline btn-sm" onclick="document.dispatchEvent(new CustomEvent('toggleCart'))">Shop Now</a>
      </div>
    `;
  }

  return items.map(item => `
    <div class="cart-item" data-item-id="${item.id}">
      <div class="cart-item-image">
        <div class="img-placeholder" style="font-size: 9px;">Product</div>
      </div>
      <div class="cart-item-details">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-variant">${item.variant}</div>
        <div class="cart-item-bottom">
          <div class="cart-item-qty">
            <button class="cart-qty-btn" data-action="decrease" data-id="${item.id}" aria-label="Decrease quantity">${icons.minus}</button>
            <span>${item.qty}</span>
            <button class="cart-qty-btn" data-action="increase" data-id="${item.id}" aria-label="Increase quantity">${icons.plus}</button>
          </div>
          <div class="cart-item-price">${formatPrice(item.price * item.qty)}</div>
        </div>
      </div>
    </div>
  `).join('');
}

export function initCartDrawer() {
  const overlay = document.getElementById('cart-overlay');
  const drawer = document.getElementById('cart-drawer');
  const closeBtn = document.getElementById('cart-close');

  function openCart() {
    overlay.classList.add('is-open');
    drawer.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    overlay.classList.remove('is-open');
    drawer.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  // Toggle event
  document.addEventListener('toggleCart', () => {
    if (drawer.classList.contains('is-open')) {
      closeCart();
    } else {
      openCart();
    }
  });

  // Open cart event
  document.addEventListener('openCart', openCart);

  // Close handlers
  if (overlay) overlay.addEventListener('click', closeCart);
  if (closeBtn) closeBtn.addEventListener('click', closeCart);

  // Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
      closeCart();
    }
  });

  // Quantity buttons delegation
  drawer.addEventListener('click', (e) => {
    const btn = e.target.closest('.cart-qty-btn');
    if (!btn) return;

    const id = btn.dataset.id;
    const action = btn.dataset.action;
    const cart = getCart();
    const item = cart.find(i => i.id === id);
    if (!item) return;

    if (action === 'increase') {
      updateQty(id, item.qty + 1);
    } else if (action === 'decrease') {
      updateQty(id, item.qty - 1);
    }
  });

  // Checkout button
  const checkoutBtn = document.getElementById('cart-checkout');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      document.dispatchEvent(new CustomEvent('showToast', { detail: 'Checkout coming soon!' }));
    });
  }

  // Re-render on cart changes
  onCartChange(() => {
    const itemsEl = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total');
    const footerEl = document.getElementById('cart-footer');
    if (itemsEl) itemsEl.innerHTML = renderCartItems();
    if (totalEl) totalEl.textContent = formatPrice(getCartTotal());
    if (footerEl) footerEl.style.display = getCart().length === 0 ? 'none' : '';
  });
}
