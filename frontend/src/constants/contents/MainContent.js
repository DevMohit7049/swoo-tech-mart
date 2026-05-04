import axios from "axios";
import appLogo from "@/assets/ecommerce/swootech.png";

const envBase =
  import.meta.env.VITE_BASE_URL || "http://localhost:5000/api";

function apiOriginFromBase(baseUrl) {
  try {
    const u = new URL(baseUrl);
    const path = u.pathname.replace(/\/?api\/?$/, "");
    return path && path !== "/" ? `${u.origin}${path}` : u.origin;
  } catch {
    return baseUrl.replace(/\/?api\/?$/, "");
  }
}

export const MainContent = {
  appName: "Swoo",
  appFullName: "Swoo Tech Mart",
  appLogo,
  appURL: "https://www.swootechmart.com/",

  /** Footer hero line (unchanged from previous footer copy) */
  footerHeadline: "Swoo - 1st NYC Tech Online Market",
  contactNo: "(025) 3686 25 16",
  email: "contact@swootechmart.com",
  address: "257 Thatcher Road St, Brooklyn, Manhattan, NY 10092",
  appDescription:
    "Swoo Tech Mart is your online destination for laptops, phones, accessories, and more.",
};

export const backendConfig = {
  base: envBase,
  origin: import.meta.env.VITE_API_ORIGIN || apiOriginFromBase(envBase),
};

export const Axios = axios.create({
  baseURL: backendConfig.base,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

let authInterceptorsAttached = false;

/**
 * Call once from `main.jsx` after `store` exists.
 * - Adds Bearer when Redux has an in-memory token
 * - Strips default JSON Content-Type for FormData so the browser sets multipart boundaries
 * - Passes responses through; rejects propagate for callers to handle
 */
export function attachAxiosAuthInterceptor(store) {
  if (authInterceptorsAttached) return;
  authInterceptorsAttached = true;

  Axios.interceptors.request.use(
    (config) => {
      const token = store.getState()?.auth?.token;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      if (typeof FormData !== "undefined" && config.data instanceof FormData) {
        delete config.headers["Content-Type"];
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  Axios.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
  );
}
