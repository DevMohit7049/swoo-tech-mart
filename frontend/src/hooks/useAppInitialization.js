import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  loadUserFromStorage,
  authProfileRequestStarted,
  authProfileRequestSucceeded,
  authProfileRequestFailed,
} from "@/store/auth/authSlice";
import { getProfileApi } from "@/api/authApi";
import {
  setProductLoading,
  setProductsAndCatalog,
  setProductsFetchFailed,
} from "@/store/products/productSlice";
import { fetchProductsApi } from "@/api/productApi";

/** One-time bootstrap: auth hydrate + profile + catalog, scroll animations, splash timing */
export function useAppInitialization(dispatch, setShowLoader) {
  useEffect(() => {
    let alive = true;

    dispatch(loadUserFromStorage());

    (async () => {
      dispatch(authProfileRequestStarted());
      try {
        const data = await getProfileApi();
        if (!alive) return;
        dispatch(authProfileRequestSucceeded(data));
      } catch {
        if (!alive) return;
        dispatch(authProfileRequestFailed());
      }
    })();

    (async () => {
      dispatch(setProductLoading(true));
      try {
        const products = await fetchProductsApi();
        if (!alive) return;
        dispatch(setProductsAndCatalog(products ?? []));
      } catch (e) {
        if (!alive) return;
        dispatch(
          setProductsFetchFailed(
            e?.response?.data?.message || "Failed to fetch products"
          )
        );
      }
    })();

    AOS.init({
      duration: 1000,
      once: false,
    });

    const minimumLoaderMs = 1600;
    let minDelayDone = false;
    let pageReady = document.readyState === "complete";

    const tryHideLoader = () => {
      if (!alive) return;
      if (minDelayDone && pageReady) {
        setShowLoader(false);
      }
    };

    const minDelayTimer = window.setTimeout(() => {
      minDelayDone = true;
      tryHideLoader();
    }, minimumLoaderMs);

    const hardStopTimer = window.setTimeout(() => {
      if (alive) setShowLoader(false);
    }, 4500);

    const markPageReady = () => {
      pageReady = true;
      tryHideLoader();
    };

    let loadAttached = false;
    if (!pageReady) {
      window.addEventListener("load", markPageReady);
      loadAttached = true;
    }

    tryHideLoader();

    return () => {
      alive = false;
      window.clearTimeout(minDelayTimer);
      window.clearTimeout(hardStopTimer);
      if (loadAttached) {
        window.removeEventListener("load", markPageReady);
      }
    };
  }, [dispatch, setShowLoader]);
}
