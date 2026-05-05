import { Outlet } from 'react-router-dom';
import './index.css';
import Navbar from '@/components/UI/Navbar';
import Footer from './components/pages/Footer';
import { useDispatch } from "react-redux";
import { useState } from 'react';
import { AnimatePresence } from "framer-motion";
import BrandLoader from './components/UI/BrandLoader';
import { useAppInitialization } from '@/hooks/useAppInitialization';

function App() {
  
  const dispatch = useDispatch();
  const [showLoader, setShowLoader] = useState(true);
  useAppInitialization(dispatch, setShowLoader);

  return (
    <div className="flex flex-col min-h-screen -(--)">
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
