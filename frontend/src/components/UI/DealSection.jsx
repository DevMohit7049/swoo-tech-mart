
import phone from "@/assets/ecommerce/phone.png"; // main image
import thumb1 from "@/assets/ecommerce/phone2.png";
import thumb2 from "@/assets/ecommerce/phone3.png";
import banner1 from "@/assets/ecommerce/phone4.png";
import banner2 from "@/assets/ecommerce/phone5.png";
import banner3 from "@/assets/ecommerce/headphone.png";


const DealSection = () => {

    const dealData = [
        {
            id: 1,
            mainImage: phone,
            thumbnails: [thumb1, thumb2],
            title: "Xiaomi Redmi Note 11 Pro Smartphone",
            price: 569,
            oldPrice: 759,
            features: [
                "Intel i9 Processor",
                "DDR5 Compatible",
                "Advanced Cooling System"
            ],
            sold: 26,
            total: 75,
            tags: ["FREE SHIPPING", "FREE GIFT"]
        }
    ];

    return (
        <>
            <div className="max-w-7xl mx-auto p-4 space-y-4">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                    <div className="lg:col-span-3 bg-gray-100 rounded-xl p-4">
                        <div className="bg-brand-primary text-white px-4 py-2 rounded-md font-semibold w-fit mb-4">
                            DEALS OF THE DAY
                        </div>

                        {dealData.map((deal) => (
                            <div key={deal.id} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">

                                <div className="flex gap-3 items-center">
                                    <div className="flex flex-col gap-2">
                                        {deal.thumbnails.map((thumb, i) => (
                                            <img key={i} src={thumb} className="w-12 h-12 object-cover border rounded" />
                                        ))}
                                    </div>

                                    <img src={deal.mainImage} className="w-40 md:w-52 object-contain" />
                                </div>

                                <div className="md:col-span-2 space-y-3">

                                    <h2 className="font-semibold text-lg">{deal.title}</h2>

                                    <div>
                                        <span className="text-red-500 text-xl font-bold">${deal.price}</span>
                                        <span className="line-through text-gray-400 ml-2">${deal.oldPrice}</span>
                                    </div>

                                    <ul className="text-sm text-gray-600 list-disc ml-5 space-y-1">
                                        {deal.features.map((f, i) => (
                                            <li key={i}>{f}</li>
                                        ))}
                                    </ul>

                                    <div className="flex gap-2 text-xs">
                                        {deal.tags.map((tag, i) => (
                                            <span key={i} className="bg-brand-primary-light text-brand-primary px-2 py-1 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div>
                                        <div className="w-full bg-gray-300 h-2 rounded">
                                            <div
                                                className="bg-brand-primary h-2 rounded"
                                                style={{ width: `${(deal.sold / deal.total) * 100}%` }}
                                            ></div>
                                        </div>
                                        <p className="text-xs text-gray-600 mt-1">
                                            Sold: {deal.sold}/{deal.total}
                                        </p>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col gap-4">
                        <img src={banner1} className="rounded-xl object-cover h-32 w-full" />
                        <img src={banner2} className="rounded-xl object-cover h-32 w-full" />
                    </div>
                </div>


                <div className="bg-brand-primary text-white rounded-xl p-4 text-center text-sm">
                    Member get <span className="font-bold">FREE SHIPPING</span> with no order minimum.
                </div>

            </div>
        </>
    )
}
export default DealSection;