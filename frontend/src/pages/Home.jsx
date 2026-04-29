import FeatureProduct from '../components/FeatureProduct';
import Hero from '../components/Hero';
import DealSection from '../components/DealSection';
import BestSeller from '../components/BestSeller';
import Cards from '../components/cards';
import NewProduct from '../components/NewProduct';
import TopProduct from '@/components/TopProduct';
import BestLaptop from '@/components/BestLaptop';
import RecentlyView from '@/components/RecentlyView';
import { motion } from "framer-motion";

const Home = () => {
    const sectionVariant = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.55,
                ease: "easeOut"
            }
        }
    };

    const sectionProps = (delay = 0) => ({
        variants: sectionVariant,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: false, amount: 0.2 },
        transition: { delay }
    });

    return (
        <>
            <motion.section data-aos="fade-up" data-aos-delay="0" {...sectionProps(0)}>
                <Hero />
            </motion.section>

            <motion.section data-aos="fade-up" data-aos-delay="40" {...sectionProps(0.03)}>
                <FeatureProduct />
            </motion.section>

            <motion.section data-aos="fade-up" data-aos-delay="60" {...sectionProps(0.05)}>
                <DealSection />
            </motion.section>

            <motion.section data-aos="fade-up" data-aos-delay="80" {...sectionProps(0.07)}>
                <BestSeller />
            </motion.section>

            <motion.section data-aos="fade-up" data-aos-delay="100" {...sectionProps(0.09)}>
                <NewProduct />
            </motion.section>

            <motion.section data-aos="fade-up" data-aos-delay="120" {...sectionProps(0.11)}>
                <TopProduct />
            </motion.section>

            <motion.section data-aos="fade-up" data-aos-delay="140" {...sectionProps(0.13)}>
                <BestLaptop />
            </motion.section>

            <motion.section data-aos="fade-up" data-aos-delay="160" {...sectionProps(0.15)}>
                <Cards />
            </motion.section>

            <motion.section data-aos="fade-up" data-aos-delay="180" {...sectionProps(0.17)}>
                <RecentlyView />
            </motion.section>
        </>

    );
}

export default Home;