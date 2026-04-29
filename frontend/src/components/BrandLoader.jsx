import { motion } from "framer-motion";
import brandLogo from "@/assets/swootech.png";

const ringTransition = {
  repeat: Infinity,
  ease: "linear",
  duration: 3.2,
};

const BrandLoader = () => {
  return (
    <div className="fixed inset-0 w-screen h-dvh z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-[2px]">
      <div className="relative flex flex-col items-center justify-center">
        <motion.div
          className="absolute w-36 h-36 sm:w-44 sm:h-44 rounded-full border border-brand-primary/35"
          animate={{ rotate: 360 }}
          transition={ringTransition}
        />
        <motion.div
          className="absolute w-48 h-48 sm:w-56 sm:h-56 rounded-full border border-white/20"
          animate={{ rotate: -360, scale: [1, 1.06, 1] }}
          transition={{ ...ringTransition, duration: 4.4 }}
        />

        <motion.div
          className="absolute w-24 h-24 rounded-full bg-brand-primary/20 blur-2xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.55, 1, 0.55] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        />

        <motion.img
          src={brandLogo}
          alt="Swoo Tech Mart"
          className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 object-contain"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: [0.9, 1.06, 1], opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        />

        <motion.p
          className="mt-7 text-white/90 text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] uppercase"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          Loading Store
        </motion.p>
      </div>
    </div>
  );
};

export default BrandLoader;
