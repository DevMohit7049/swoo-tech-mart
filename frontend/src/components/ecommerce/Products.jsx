import PopulerCategories from '@/components/Product/PopulerCategories';
import TopBanner from '@/components/Product/TopBanner';
import ProductSection from '@/components/Product/ProductSection';
import Categories from '@/components/Product/Categories';
import { motion } from "framer-motion";


const Products = () => {
    const sectionVariant = {
        hidden: { opacity: 0, y: 18 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <motion.section
                variants={sectionVariant}
                initial="hidden"
                animate="visible"
                data-aos="fade-up"
                data-aos-delay="0"
            >
                <TopBanner />
            </motion.section>

            <motion.section
                variants={sectionVariant}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.05 }}
                data-aos="fade-up"
                data-aos-delay="50"
            >
                <PopulerCategories />
            </motion.section>

            <motion.section
                variants={sectionVariant}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.08 }}
                data-aos="fade-up"
                data-aos-delay="80"
            >
                <ProductSection />
            </motion.section>

            <motion.section
                variants={sectionVariant}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.11 }}
                data-aos="fade-up"
                data-aos-delay="110"
            >
                <Categories />
            </motion.section>
        </div>
    );
}

export default Products