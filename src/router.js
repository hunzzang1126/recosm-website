// ============================================
// Re:Cosm — SPA Router
// ============================================

const routes = {};
let currentPath = '';

export function registerRoute(path, handler) {
  routes[path] = handler;
}

export function navigate(path) {
  if (path === currentPath) return;
  window.location.hash = path;
}

export function getCurrentPath() {
  return currentPath;
}

export function initRouter(onRouteChange) {
  function handleRoute() {
    const hash = window.location.hash.slice(1) || '/';
    currentPath = hash;

    const pageContent = document.getElementById('page-content');
    if (!pageContent) return;

    // Page exit animation
    pageContent.classList.remove('page-active');
    pageContent.classList.add('page-enter');

    setTimeout(() => {
      // Find matching route
      const handler = routes[hash];
      if (handler) {
        pageContent.innerHTML = handler();
      } else {
        pageContent.innerHTML = routes['/'] ? routes['/']() : '<p>Page not found</p>';
      }

      // Update active nav
      document.querySelectorAll('.header-nav a, .mobile-nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        link.classList.toggle('active', href === `#${hash}`);
      });

      // Page enter animation
      requestAnimationFrame(() => {
        pageContent.classList.remove('page-enter');
        pageContent.classList.add('page-active');
      });

      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'instant' });

      // Initialize scroll reveals
      if (onRouteChange) onRouteChange();
    }, 150);
  }

  window.addEventListener('hashchange', handleRoute);

  // Handle initial load
  if (!window.location.hash) {
    window.location.hash = '/';
  } else {
    handleRoute();
  }
}
