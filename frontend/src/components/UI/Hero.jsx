import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import slider3 from "@/assets/ecommerce/headphone.png";
import watch from '@/assets/ecommerce/watch.png';
import games from '@/assets/ecommerce/games.png';
import keyboard from '@/assets/ecommerce/keyboard.png';
import camera from "@/assets/ecommerce/camera.png"
import { motion } from "framer-motion";
import { categories } from "@/Data/ProductData";
import { EcomRoutes } from "@/constants/Routes";
import { getBanner } from "@/api";


const Hero = () => {
    
    const [banners, setBanners] = useState([]);

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                staggerChildren: 0.12
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 24, scale: 0.98 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.45, ease: "easeOut" }
        }
    };

    const handleBanner = async () => {
        try {
            const bannerData = await getBanner();
            setBanners(Array.isArray(bannerData) ? bannerData : []);
        } catch (err) {
            console.error(err.response?.data?.message || "Failed to fetch banners");
        }
    };

    useEffect(() => {
        handleBanner();
    }, []);

    const getBannerImage = (index, fallback) => {
        const banner = banners[index];
        if (!banner) return fallback;
        if (typeof banner === "string") return banner;
        return (
            banner.images?.[0] ||
            banner.image ||
            banner.bannerImage ||
            banner.imageUrl ||
            banner.url ||
            fallback
        );
    };



    return (
        <>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-7xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-4 gap-4"
            >
                <motion.div
                    variants={cardVariants}
                    data-aos="fade-right"
                    data-aos-delay="80"
                    className="hidden lg:block bg-gray-100 rounded-xl p-4"
                >
                    <h3 className=" font-semibold mb-3">SALE 40% OFF</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                        {
                            categories.map((item) => {
                                return (
                                    <>
                                        <li key={item.slug}>
                                            <Link to={`${EcomRoutes.SHOP_CATEGORY}/${item.slug}`}>{item.name}</Link>
                                        </li>
                                    </>
                                )
                            })
                        }

                    </ul>
                </motion.div>

                <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">

                    < motion.div
                        variants={cardVariants}
                        data-aos="zoom-in"
                        data-aos-delay="120"
                        initial={{ backgroundPosition: "50% 40%" }}
                        animate={{ backgroundPosition: "50% 50%" }}
                        whileInView={{ backgroundPosition: "50% 50%" }}
                        viewport={{ once: true, amount: 0.3 }}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.99 }}
                        transition={{ duration: 0.35 }}
                        style={{ backgroundImage: `url(${getBannerImage(0, slider3)})` }}
                        className="md:col-span-2 bg-gray-300 rounded-xl p-6 flex flex-col justify-center bg-cover bg-center">

                        <motion.h2
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.25, duration: 0.5 }}
                            className="text-2xl md:text-3xl font-bold text-white"
                        >
                            Noise Cancelling 
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.35, duration: 0.5 }}
                            className="text-white/80 mb-4"
                        >
                            Headphone
                        </motion.p>
                        <motion.button
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.45, duration: 0.45 }}
                            whileHover={{ scale: 1.06 }}
                            whileTap={{ scale: 0.96 }}
                            className="bg-white text-black px-4 py-2 rounded-full w-fit"
                        >
                            BUY NOW
                        </motion.button>
                    </motion.div>


                    <motion.div
                        variants={cardVariants}
                        data-aos="fade-up"
                        data-aos-delay="170"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.99 }}
                        transition={{ duration: 0.3 }}
                        className="bg-gray-100 rounded-xl p-4 flex flex-col justify-between bg-cover bg-center"
                        style={{ backgroundImage: `url(${getBannerImage(1, watch)})` }}>
                        <div className="flex flex-col items-end justify-between">
                            <p className="text-xs text-gray-500">XIAOMI</p>
                            <h3 className="font-semibold">Sport Watch</h3>
                            <button className="bg-black text-white px-3 py-1 rounded-full text-sm w-fit">
                                SHOP NOW
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={cardVariants}
                        data-aos="fade-up"
                        data-aos-delay="210"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.99 }}
                        transition={{ duration: 0.3 }}
                        className="bg-gray-800 text-black rounded-xl p-4 md:col-span-1 bg-cover bg-center" style={{ backgroundImage: `url(${getBannerImage(2, games)})` }}>
                        <h3 className="font-semibold">HERO 11+ BLACK</h3>
                        <p className="text-brand-primary font-bold">$169</p>
                    </motion.div>

                    <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                        <motion.div
                            variants={cardVariants}
                            data-aos="fade-up"
                            data-aos-delay="240"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.99 }}
                            transition={{ duration: 0.3 }}
                            className="bg-gray-200 rounded-xl p-4 bg-cover bg-center" style={{ backgroundImage: `url(${getBannerImage(3, keyboard)})` }}>
                            <h4 className="font-medium">Logitech Keyboard</h4>
                            <p className="text-yellow-500 text-sm">Best for all device</p>
                        </motion.div>


                        <motion.div
                            variants={cardVariants}
                            data-aos="fade-up"
                            data-aos-delay="280"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.99 }}
                            transition={{ duration: 0.3 }}
                            className="bg-gray-200 rounded-xl p-4 bg-cover bg-center"
                            style={{ backgroundImage: `url(${getBannerImage(4, camera)})` }}>
                            <h4 className="font-medium">Logitech camera</h4>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}
export default Hero