import { Outlet } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useDispatch } from "react-redux";
import { useEffect, useState } from 'react';
import { getProfile } from './features/auth/authSlice';
import { getProduct } from './features/products/productSlice';
import Breadcrumbs from './components/BreadCrumb';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AnimatePresence } from "framer-motion";
import BrandLoader from './components/BrandLoader';


function App() {

  const dispatch = useDispatch();
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    dispatch(getProfile());
    dispatch(getProduct());

  }, [dispatch]);


  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false,    // Whether animation should happen only once - while scrolling down
    });
  }, [])

  useEffect(() => {
    const minimumLoaderMs = 1600;
    let isMounted = true;
    let minDelayDone = false;
    let pageReady = document.readyState === "complete";

    const tryHideLoader = () => {
      if (isMounted && minDelayDone && pageReady) {
        setShowLoader(false);
      }
    };

    const minDelayTimer = setTimeout(() => {
      minDelayDone = true;
      tryHideLoader();
    }, minimumLoaderMs);

    const hardStopTimer = setTimeout(() => {
      if (isMounted) {
        setShowLoader(false);
      }
    }, 4500);

    const markPageReady = () => {
      pageReady = true;
      tryHideLoader();
    };

    if (!pageReady) {
      window.addEventListener("load", markPageReady);
    }

    return () => {
      isMounted = false;
      clearTimeout(minDelayTimer);
      clearTimeout(hardStopTimer);
      window.removeEventListener("load", markPageReady);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <AnimatePresence>{showLoader && <BrandLoader />}</AnimatePresence>
      <Navbar />
      {/* <Breadcrumbs /> */}
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
