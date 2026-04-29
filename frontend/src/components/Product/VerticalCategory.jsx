import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCatalogProducts } from "@/features/products/productSelectors";

const VerticalCategory = () => {
    const products = useSelector(selectCatalogProducts);
    const linksArr = [...new Set(products.map((item) => item.category).filter(Boolean))].map((category) => ({
        name: category.charAt(0).toUpperCase() + category.slice(1),
        slug: category,
    }));

    return (
        <div className="h-full bg-[#EEEFF6] rounded-xl p-4">
            <h2 className="text-lg font-bold uppercase mb-4">Categories</h2>

            <button className="bg-white rounded py-1 px-2 mb-4">
                All Categories
            </button>

            <div className="grid grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-3">
                {linksArr.map((link, i) => (

                    <Link key={i} to={`/shop/category/${link.slug}`}>
                        {link.name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default VerticalCategory;