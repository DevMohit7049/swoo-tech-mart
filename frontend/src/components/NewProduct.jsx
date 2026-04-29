import jmax from "../assets/jmax.png";
import fantasix from "../assets/fantasix.png";
import viewbonic from "../assets/viewbonic.png";
import ipad from "../assets/ipad.png";

const NewProduct = () => {

    const data = [
        {
            title: "Zumac Steel Computer Case",
            desc: "And an option to upgrade every three years",
            img: jmax,
        },
        {
            title: "Summer Sale with Sale up to 50% OFF for Foam Gaming Chair.",
            desc: "Limited time offer. Hurry up",
            img: fantasix,
        },
        {
            title: "Summer Sale with Sale up to 50% OFF for Foam Gaming Chair.",
            desc: "Limited time offer. Hurry up",
            img: viewbonic,
        },
        {
            title: "iPed Pro Mini 6 - Powerful in hand",
            desc: "From $19.99/month for 36 months",
            img: ipad,
        },
    ];
    return (
        <>
            <div className="max-w-7xl mx-auto p-4 bg-gray-100 rounded-xl">

                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-sm font-semibold">BRAND NEW FOR YOU</h2>
                    <div className="flex gap-2">
                        <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                        <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                    </div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                    {data.map((item, i) => (
                        <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm">

                            {/* Image */}
                            <div
                                style={{ backgroundImage: `url(${item.img})` }}
                                className="h-36 bg-center bg-cover bg-no-repeat"
                            ></div>

                            {/* Content */}
                            <div className="p-3 space-y-2">
                                <h3 className="text-sm font-medium line-clamp-2">
                                    {item.title}
                                </h3>
                                <p className="text-xs text-gray-500 line-clamp-2">
                                    {item.desc}
                                </p>

                                <button className="mt-2 border border-brand-primary text-brand-primary px-3 py-1 rounded-full text-xs hover:bg-brand-primary hover:text-white transition">
                                    SHOP NOW
                                </button>
                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}
export default NewProduct