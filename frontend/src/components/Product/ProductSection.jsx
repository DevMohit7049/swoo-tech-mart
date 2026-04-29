import ProductCard from "./ProductCard";
import VerticalCategory from "./VerticalCategory";
import { useSelector } from "react-redux";
import { selectCatalogProducts } from "@/features/products/productSelectors";
import { useParams } from "react-router-dom";

const ProductSection = () => {
    const products = useSelector(selectCatalogProducts);
    const { category } = useParams();
    
    
    const listingProducts = category
        ? products.filter((item) => item.category === category)
        : products;
    
    return (
        <section className="max-w-7xl mx-auto p-4 bg-gray-100 rounded-xl mb-5">
            <h2 className="text-lg font-semibold mb-4">
                {category ? `${category} Products` : "Best Seller in this Category"}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 auto-rows-auto">
                {/* LEFT SIDE */}
                <div className="col-span-1 row-span-2">
                    <VerticalCategory />
                </div>

                {/* RIGHT SIDE */}
                {listingProducts.map((item, i) => (
                    <ProductCard key={i} item={item} />
                ))}

            </div>
        </section>
    );
};

export default ProductSection;