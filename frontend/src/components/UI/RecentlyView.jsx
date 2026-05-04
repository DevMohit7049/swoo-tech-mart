import { Link } from "react-router-dom";
import { finalProducts } from "@/Data/ProductData";
import { EcomRoutes } from "@/constants/Routes";
const RecentlyView = () => {

    const recentProducts = finalProducts.slice(0, 4);


    return (
        <section className="max-w-7xl mx-auto px-4 py-6 bg-gray-100 rounded-xl mb-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="uppercase font-semibold text-sm md:text-base">
                    Recently View
                </h2>
                <button className="text-sm text-gray-500 hover:text-black">
                    View All
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {recentProducts.map((item, index) => (
                    <Link
                        key={index}
                        to={`${EcomRoutes.SHOP_PRODUCT}/${item.slug}`}
                        className="bg-white rounded-lg p-4 flex flex-row items-center text-center hover:shadow-md transition"
                    >
                        <div className="h-28 flex items-center justify-center mb-3">
                            <img
                                src={item.img}
                                alt={item.title}
                                className="h-full object-contain"
                            />
                        </div>
                        <p className="text-sm text-gray-700 line-clamp-2 mb-2">
                            {item.title}
                        </p>
                        <div className="relative top-12 right-24">
                            <span className="font-semibold text-red-500">
                                {item.price}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default RecentlyView;