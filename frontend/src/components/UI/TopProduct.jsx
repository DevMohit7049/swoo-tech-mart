import banner from "@/assets/ecommerce/phone-banner.png";
import sm from "@/assets/ecommerce/sm-m.png"
import { Link } from "react-router-dom";
import { finalProducts } from "@/Data/ProductData";
import { EcomRoutes } from "@/constants/Routes";

const TopProduct = () => {

    const arr = [
        {
            name: "iPhone (iOS)",
            img: sm,
        },
        {
            name: "Android",
            img: sm
        },
        {
            name: "5G Support",
            img: sm
        },
        {
            name: "Gaming",
            img: sm
        },
        {
            name: "Xiaomi",
            img: sm
        },
        {
            name: "Accessories",
            img: sm
        },
    ];


    const arr2 = finalProducts.filter((item) => item.category === "mobile").slice(0, 5);

    return (
        <>
            <section className="bg-gray-100 p-4 md:p-8 rounded-xl max-w-7xl mx-auto mt-5">
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold uppercase">Top Cellphones & Tablets</h2>
                    <button className="text-sm text-gray-500 hover:text-black">View All</button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4 mb-8">
                    <div className="col-span-2 bg-gradient-to-r from-gray-300
                     to-gray-200 rounded-xl p-6 flex flex-col justify-center bg-banner bg-cover bg-center bg-no-repeat h-50 "
                        style={{ backgroundImage: `url(${banner})` }}>
                        <h3 className="text-base md:text-2xl font-semibold mb-2">REDMI NOTE 12 PRO+ 5G</h3>
                        <p className="text-sm text-gray-600 mb-4">Rise to the challenge</p>
                        <button className="bg-black text-white px-4 py-2 rounded w-fit">Shop Now</button>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {arr.map((item, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-lg p-3 flex items-center justify-between gap-2
                                shadow-sm hover:shadow-md cursor-pointer min-w-0"
                            >
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-md shrink-0 overflow-hidden flex items-center justify-center">
                                    <img src={item.img} alt={item.name} className="w-full h-full object-contain p-1" />
                                </div>
                                <div className="min-w-0 flex-1 overflow-hidden">
                                    <p className="text-xs sm:text-sm font-medium leading-snug line-clamp-2 break-words">{item.name}</p>
                                    <span className="text-[11px] text-gray-500">12 Items</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="border-2 border-gray-200"></div>
                <div className="grid lg:grid-cols-5 grid-cols-2 sm:grid-cols-3 gap-4">
                    {arr2.map((item, i) => (
                        <Link
                            key={i}
                            to={`${EcomRoutes.SHOP_PRODUCT}/${item.slug}`}
                            className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition mt-5">
                            <div className="mb-2">
                                <span className="bg-brand-primary text-white text-xs px-2 py-1 rounded">
                                    SAVE 15%
                                </span>
                            </div>

                            <div className="flex justify-center mb-3">
                                <img
                                    src={item.img}
                                    alt="product"
                                    className="h-32 object-contain"
                                />
                            </div>

                            <h3 className="text-sm font-medium mb-1 line-clamp-2">
                               {item.title}
                            </h3>

                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-red-500 font-semibold">{item.price}</span>
                            </div>
                            <p className="text-brand-primary text-xs">{item.stock}</p>

                        </Link>
                    ))}
                </div>
            </section >
        </>
    )
}
export default TopProduct;