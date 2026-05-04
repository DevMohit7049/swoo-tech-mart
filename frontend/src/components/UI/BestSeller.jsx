import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectCatalogProducts } from "@/store/products/productSelectors";
import { EcomRoutes } from "@/constants/Routes";
import {pathGenerator } from "@/utils/pathGenerator";

const BestSeller = () => {
    const products = useSelector(selectCatalogProducts);
    const { slug } = useParams();
    const isProductDetailsPage = Boolean(slug);
    const data = isProductDetailsPage
        ? products.filter((item) => item.slug !== slug).slice(0, 5)
        : products.slice(0, 5);
    const title = isProductDetailsPage ? "Related Product" : "Recently View";

    return (
        <div className="max-w-7xl mx-auto p-4 bg-gray-100 rounded-xl mb-5">
            <div className="flex justify-between items-center mb-4">
                <div className="flex gap-6 text-sm font-medium">
                    <span className="text-black border-black pb-1">{title}</span>
                </div>
                <span className="text-sm text-gray-500 cursor-pointer">View All</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {data.map((item, i) => (
                    <Link
                        to={pathGenerator(EcomRoutes.PRODUCT_DETAIL,{ slug: item.slug })}
                        key={i}
                    >
                        <div className="bg-white rounded-xl p-4 flex flex-col">
                            <div className="relative flex justify-center items-center mb-3">
                                {item.save && (
                                    <span className="absolute top-0 left-0 bg-brand-primary text-white text-xs px-2 py-1 rounded">
                                        SAVE {item.save}
                                    </span>
                                )}
                                <img
                                    src={item.img}
                                    className="h-28 object-contain"
                                />
                            </div>

                            <p className="text-sm font-medium mb-1 line-clamp-2">
                                {item.title}
                            </p>

                            <div className="text-sm mb-2">
                                <span className="text-red-500 font-semibold">{item.price}</span>
                                {item.old && (
                                    <span className="text-gray-400 line-through ml-2">
                                        {item.old}
                                    </span>
                                )}
                            </div>

                            <div className="flex flex-wrap gap-1 text-xs mb-2">
                                {item.tag1 && (
                                    <span className="bg-brand-primary-light text-brand-primary px-2 py-0.5 rounded">
                                        {item.tag1}
                                    </span>
                                )}
                                {item.tag2 && (
                                    <span className="bg-red-100 text-red-500 px-2 py-0.5 rounded">
                                        {item.tag2}
                                    </span>
                                )}
                                {item.extra && (
                                    <span className="bg-gray-200 text-gray-600 px-2 py-0.5 rounded">
                                        {item.extra}
                                    </span>
                                )}
                            </div>

                            <p
                                className={`text-xs ${item.stock === "In stock"
                                    ? "text-brand-primary"
                                    : item.stock === "Out of stock"
                                        ? "text-red-500"
                                        : "text-gray-500"
                                    }`}
                            >
                                {item.stock}
                            </p>

                        </div>
                    </Link>

                ))}
            </div>
        </div>
    );
}

export default BestSeller;