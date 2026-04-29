const ROUTE_PATHS = Object.freeze({
  ROOT: "/",

  // Public
  SHOP: "/shop",
  PRODUCT_DETAILS: "/shop/product/:slug",
  CATEGORY: "/shop/category/:category",

  // Auth
  LOGIN: "/login",
  REGISTER: "/register",

  // Other
  CONTACT: "/contact",
  CART: "/cart",
  CHECKOUT: "/checkout",

  // Admin
  ADMIN: "/admin",
  ADMIN_DASHBOARD: "/admin/dashboard",
});

export default ROUTE_PATHS;