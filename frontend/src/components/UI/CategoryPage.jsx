import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCatalogProducts } from "@/store/products/productSelectors";
import { EcomRoutes } from "@/constants/Routes";
import { pathGenerator } from "@/utils/pathGenerator";

const CategoryPage = () => {

    const { category } = useParams();
    const products = useSelector(selectCatalogProducts);
    const filteredProducts = products.filter((product) => String(product.category || "").toLowerCase() === String(category || "").toLowerCase());

    return (
        <div className="max-w-7xl mx-auto p-4">
            <h2 className="text-2xl font-bold mb-6 capitalize">
                {category}
            </h2>

            {filteredProducts.length === 0 ? (
                <p>No products found</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                        <Link
                            key={product.slug}
                            to={pathGenerator(EcomRoutes.PRODUCT_DETAIL, { slug: product.slug })}
                            className="border p-4 rounded-lg block transition hover:shadow-md"
                        >
                            <img
                                src={product.img}
                                alt={product.title}
                                className="h-40 w-full object-contain mb-3"
                            />
                            <h3 className="text-sm font-semibold line-clamp-2">
                                {product.title}
                            </h3>
                            <p className="font-bold mt-2">{product.price}</p>
                            <p className="text-xs text-gray-500">{product.stock}</p>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CategoryPage;