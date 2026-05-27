// ============================================
// Re:Cosm — Main Application Entry
// ============================================

import { registerRoute, initRouter } from './router.js';
import { renderHeader, initHeader } from './components/header.js';
import { renderFooter, initFooter } from './components/footer.js';
import { renderCartDrawer, initCartDrawer } from './components/cart-drawer.js';
import { renderCookieConsent, initCookieConsent } from './components/cookie-consent.js';
import { renderHome, initHome } from './pages/home.js';
import { renderProduct, initProduct } from './pages/product.js';
import { renderScience, initScience } from './pages/science.js';
import { renderFaq, initFaq } from './pages/faq.js';
import { renderContact, initContact } from './pages/contact.js';

// Page init handlers
const pageInits = {
  '/': initHome,
  '/product': initProduct,
  '/science': initScience,
  '/faq': initFaq,
  '/contact': initContact,
};

// Register routes
registerRoute('/', renderHome);
registerRoute('/product', renderProduct);
registerRoute('/science', renderScience);
registerRoute('/faq', renderFaq);
registerRoute('/contact', renderContact);

// Build app shell
function buildApp() {
  const app = document.getElementById('app');
  app.innerHTML = `
    ${renderHeader()}
    <main id="page-content" class="page-content page-enter"></main>
    ${renderFooter()}
    ${renderCartDrawer()}
    ${renderCookieConsent()}
    <div class="toast" id="toast"></div>
  `;

  // Initialize persistent components
  initHeader();
  initFooter();
  initCartDrawer();
  initCookieConsent();
  initToast();
}

// Scroll reveal with Intersection Observer
function setupScrollReveals() {
  const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach(el => observer.observe(el));
  } else {
    // Fallback: show all
    reveals.forEach(el => el.classList.add('is-visible'));
  }
}

// Toast notifications
function initToast() {
  const toast = document.getElementById('toast');
  let toastTimer;

  document.addEventListener('showToast', (e) => {
    if (!toast) return;
    toast.textContent = e.detail;
    toast.classList.add('is-visible');

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('is-visible');
    }, 3000);
  });
}

// Route change handler
function onRouteChange() {
  // Re-setup scroll reveals for new content
  setupScrollReveals();

  // Run page-specific init
  const hash = window.location.hash.slice(1) || '/';
  const init = pageInits[hash];
  if (init) init();
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  buildApp();

  // Initialize router with callback
  initRouter(onRouteChange);

  // Handle click delegation for hash navigation
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (link) {
      // Let the router handle it naturally via hashchange
    }
  });
});
