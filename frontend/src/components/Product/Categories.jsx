import ProductCard from "./ProductCard";
import SideBarFilter from "./SideBarFilter/SideBarFilter";
import { useSelector } from "react-redux";
import { selectCatalogProducts } from "@/store/products/productSelectors";
import { useState } from "react";

const Categories = () => {
    const products = useSelector(selectCatalogProducts);
    const [filteredProducts, setFilteredProducts] = useState(products);


    return (
        <section className="max-w-7xl mx-auto p-4 bg-gray-100 rounded-xl mb-5">
            <h2 className="text-lg font-semibold mb-4">Categories</h2>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

                {/* SIDEBAR */}
                <div className="lg:col-span-1">
                    <SideBarFilter
                        products={products}
                        setFilteredProducts={setFilteredProducts}
                    />
                </div>

                {/* PRODUCTS */}
                <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {filteredProducts.map((item) => (
                        <ProductCard key={item.slug} item={item} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Categories;