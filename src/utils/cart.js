// ============================================
// Re:Cosm — Cart System (localStorage)
// ============================================

const CART_KEY = 'recosm_cart';

const product = {
  id: 'recosm-lcs-7ml',
  name: 'Lash Conditioning Serum',
  variant: '7 mL',
  price: 55.00,
  currency: 'CAD',
  image: 'product-front',
};

let cart = loadCart();
let listeners = [];

function loadCart() {
  try {
    const data = localStorage.getItem(CART_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  listeners.forEach(fn => fn(cart));
}

export function getCart() {
  return cart;
}

export function getCartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

export function getCartTotal() {
  return cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
}

export function addToCart(qty = 1) {
  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ ...product, qty });
  }
  saveCart();
}

export function updateQty(id, qty) {
  if (qty <= 0) {
    removeFromCart(id);
    return;
  }
  const item = cart.find(item => item.id === id);
  if (item) {
    item.qty = qty;
    saveCart();
  }
}

export function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
}

export function clearCart() {
  cart = [];
  saveCart();
}

export function onCartChange(fn) {
  listeners.push(fn);
  return () => {
    listeners = listeners.filter(l => l !== fn);
  };
}

export function formatPrice(amount) {
  return `$${amount.toFixed(2)} CAD`;
}
