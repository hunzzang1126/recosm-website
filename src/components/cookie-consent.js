// ============================================
// Re:Cosm — Cookie Consent Component
// ============================================

const COOKIE_KEY = 'recosm_cookie_consent';

export function renderCookieConsent() {
  const consented = localStorage.getItem(COOKIE_KEY);
  if (consented) return '';

  return `
    <div class="cookie-banner" id="cookie-banner">
      <div class="cookie-inner">
        <p>We use cookies to enhance your experience. By continuing, you agree to our <a href="#">Privacy Policy</a>.</p>
        <div class="cookie-actions">
          <button class="cookie-accept" id="cookie-accept">Accept</button>
          <button class="cookie-decline" id="cookie-decline">Decline</button>
        </div>
      </div>
    </div>
  `;
}

export function initCookieConsent() {
  const banner = document.getElementById('cookie-banner');
  if (!banner) return;

  // Show after a short delay
  setTimeout(() => {
    banner.classList.add('is-visible');
  }, 1500);

  const accept = document.getElementById('cookie-accept');
  const decline = document.getElementById('cookie-decline');

  function dismiss(value) {
    localStorage.setItem(COOKIE_KEY, value);
    banner.classList.remove('is-visible');
    setTimeout(() => banner.remove(), 500);
  }

  if (accept) accept.addEventListener('click', () => dismiss('accepted'));
  if (decline) decline.addEventListener('click', () => dismiss('declined'));
}
