

// Authentication routes
export const AuthRoutes = {
  LOGIN: "/login",
  REGISTER: "/register",
};

// Authenticated routes
export const AuthenticatedRoutes = {
  USER_DASHBOARD: "/dashboard",
  ADMIN: "/admin",
  ADMIN_DASHBOARD: "/admin/dashboard",
};

// E-commerce & public storefront routes
const SHOP_PRODUCT = "/shop/product";
const SHOP_CATEGORY = "/shop/category";
const SHOP_SEARCH = "/shop/search";

export const EcomRoutes = {
  HOME: "/",
  SHOP_PRODUCT,
  SHOP_CATEGORY,
  SHOP_SEARCH,
  PRODUCT_DETAIL: `${SHOP_PRODUCT}/:slug`,
  ALL_CATEGORIES: "/all-categories",
  VIEW_CART: "/cart",
  CHECKOUT: "/checkout",
  ALL_PRODUCTS: "/shop",
  SHOP: "/shop",
  CATEGORY: `${SHOP_CATEGORY}/:category`,
  SEARCH_QUERY: `${SHOP_SEARCH}/:query`,
  OUR_COMPANY: "/about-us",
  ALL_SERVICES: "/services",
  SERVICE_DETAIL: "/services/:id",
  BEST_SELLERS: "/best-sellers",
  TERMS_AND_CONDITIONS: "/terms-and-conditions",
  JOIN_US: "/join-us",
  CONTACT: "/contact",
  ABOUT:"/about"
};

export const ROUTE_PATHS = Object.freeze({
  ROOT: EcomRoutes.HOME,
  SHOP: EcomRoutes.SHOP,
  PRODUCT_DETAILS: EcomRoutes.PRODUCT_DETAIL,
  CATEGORY: EcomRoutes.CATEGORY,
  LOGIN: AuthRoutes.LOGIN,
  REGISTER: AuthRoutes.REGISTER,
  CONTACT: EcomRoutes.CONTACT,
  CART: EcomRoutes.VIEW_CART,
  CHECKOUT: EcomRoutes.CHECKOUT,
  ADMIN: AuthenticatedRoutes.ADMIN,
  ADMIN_DASHBOARD: AuthenticatedRoutes.ADMIN_DASHBOARD,
  ABOUT:EcomRoutes.ABOUT
});

export default ROUTE_PATHS;
