import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProductCard = ({ item }) => {


    return (
        <motion.div
            className="bg-white rounded-xl p-4 flex flex-col h-full items-center border border-transparent"
            whileHover={{
                y: -8,
                scale: 1.02,
                borderColor: "rgba(0,178,7,0.35)",
                boxShadow: "0px 14px 30px rgba(0,0,0,0.14)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
        >

            <div className="relative mb-3">
                {item.save && (
                    <span className="absolute top-0 left-0 bg-brand-primary text-white text-xs px-2 py-1 rounded">
                        SAVE {item.save}
                    </span>
                )}
            </div>
            <Link to={`product/${item.slug}`} className="flex flex-col items-center gap-2">
                <motion.img
                    src={item.img}
                    className="h-28 object-contain"
                    whileHover={{ scale: 1.08, rotate: -1 }}
                    transition={{ duration: 0.2 }}
                />
                <p className="text-sm text-center">
                    {item.title}
                </p>
            </Link>


            <div className="text-sm">
                <span className="text-red-500 font-semibold">{item.price}</span>
            </div>

            <div className="mt-auto text-xs">{item.stock}</div>
        </motion.div>
    );
};

export default ProductCard;