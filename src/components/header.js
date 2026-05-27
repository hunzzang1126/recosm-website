// ============================================
// Re:Cosm — Header Component (Chanel-inspired)
// ============================================

import { icons } from '../utils/icons.js';
import { getCartCount, onCartChange } from '../utils/cart.js';

export function renderHeader() {
  return `
    <header class="site-header" id="site-header">
      <!-- Top bar: lang + icons -->
      <div class="header-topbar">
        <div class="header-topbar-inner">
          <div class="header-topbar-left"></div>
          <div class="header-topbar-right">
            <div class="lang-toggle">
              <a href="#" class="active" id="lang-en">EN</a>
              <a href="#" id="lang-fr">FR</a>
            </div>
            <button class="header-icon-btn" aria-label="Search">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="21" y2="21"/></svg>
            </button>
            <button class="header-icon-btn" aria-label="Account">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </button>
            <button class="header-icon-btn cart-btn" id="cart-toggle" aria-label="Shopping bag">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              <span class="cart-count" id="cart-count">${getCartCount()}</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Logo row -->
      <div class="header-logo-row">
        <a href="#/" class="header-logo" id="header-logo">Re:Cosm</a>
      </div>

      <!-- Navigation row -->
      <nav class="header-nav-row" id="header-nav">
        <div class="header-nav-inner">
          <a href="#/product" id="nav-product">The Serum</a>
          <a href="#/science" id="nav-science">Our Science</a>
          <a href="#/faq" id="nav-faq">FAQ</a>
          <a href="#/contact" id="nav-contact">Contact</a>
        </div>
      </nav>

      <!-- Mobile toggle -->
      <button class="mobile-menu-toggle" id="mobile-menu-toggle" aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>

    <!-- Mobile nav overlay -->
    <div class="mobile-nav-overlay" id="mobile-nav-overlay">
      <nav class="mobile-nav-links">
        <a href="#/" class="mobile-nav-link">Home</a>
        <a href="#/product" class="mobile-nav-link">The Serum</a>
        <a href="#/science" class="mobile-nav-link">Our Science</a>
        <a href="#/faq" class="mobile-nav-link">FAQ</a>
        <a href="#/contact" class="mobile-nav-link">Contact</a>
      </nav>
    </div>
  `;
}

export function initHeader() {
  const header = document.getElementById('site-header');
  const toggle = document.getElementById('mobile-menu-toggle');
  const overlay = document.getElementById('mobile-nav-overlay');
  const cartCountEl = document.getElementById('cart-count');

  // Scroll effect — compact on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }, { passive: true });

  // Mobile menu
  if (toggle && overlay) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('is-open');
      overlay.classList.toggle('is-open');
      document.body.style.overflow = overlay.classList.contains('is-open') ? 'hidden' : '';
    });

    overlay.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('is-open');
        overlay.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });
  }

  // Cart count updates
  function updateCartCount() {
    const count = getCartCount();
    if (cartCountEl) {
      cartCountEl.textContent = count;
      cartCountEl.classList.toggle('has-items', count > 0);
    }
  }

  updateCartCount();
  onCartChange(updateCartCount);

  // Cart toggle
  const cartToggle = document.getElementById('cart-toggle');
  if (cartToggle) {
    cartToggle.addEventListener('click', () => {
      document.dispatchEvent(new CustomEvent('toggleCart'));
    });
  }
}
