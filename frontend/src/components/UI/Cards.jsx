import audio from "@/assets/ecommerce/audio.png";
import office from "@/assets/ecommerce/office.png";
import gamingmouse from "@/assets/ecommerce/gaming-mouse.png";
import { Link } from "react-router-dom";
import { finalProducts } from "@/Data/ProductData";
import { EcomRoutes } from "@/constants/Routes";
import { pathGenerator } from "@/utils/pathGenerator";


const Cards = () => {

    const data = [
        {
            title: "AUDIOS & CAMERAS",
            banner: audio,
            items: [
                ...finalProducts.filter((item) => item.category === "sound").slice(0, 2),
                ...finalProducts.filter((item) => item.category === "cameras").slice(0, 2),
            ],
        },
        {
            title: "GAMING",
            banner: gamingmouse,
            items: finalProducts.filter((item) => item.category === "mobile").slice(0, 4),
        },
        {
            title: "OFFICE EQUIPMENTS",
            banner: office,
            items: finalProducts.filter((item) => item.category === "laptops").slice(0, 4),
        },
    ];

    return (

        <>
            <div className="max-w-7xl mx-auto p-4">
                {/* MAIN GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                    {data.map((section, i) => (
                        <div key={i} className="bg-gray-100 rounded-xl p-4">

                            {/* Header */}
                            <div className="flex justify-between items-center mb-3">
                                <h2 className="text-sm font-semibold">{section.title}</h2>
                                <span className="text-xs text-gray-500 cursor-pointer">View All</span>
                            </div>

                            {/* Banner */}
                            <div
                                style={{ backgroundImage: `url(${section.banner})` }}
                                className="h-32 bg-cover bg-center rounded-lg mb-4"
                            ></div>

                            {/* Items Grid */}
                            <div className="grid grid-cols-2 gap-4">

                                {section.items.map((item, idx) => (
                                    <Link
                                        key={idx}
                                        to={pathGenerator(EcomRoutes.PRODUCT_DETAIL, { slug: item.slug })}
                                        className="flex flex-col items-center text-center"
                                    >

                                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2 shadow-sm">
                                            <img
                                                src={item.img}
                                                className="w-13 h-13 object-contain"
                                            />
                                        </div>

                                        <p className="text-sm font-medium line-clamp-2">{item.title}</p>
                                        <p className="text-xs text-gray-500">{item.stock}</p>

                                    </Link>
                                ))}

                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}
export default Cards