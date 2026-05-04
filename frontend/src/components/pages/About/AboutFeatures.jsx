import { FaCheckCircle, FaTruck, FaTags } from "react-icons/fa";

const featuresData = [
    {
        id: 1,
        title: "100% Authentic Products",
        desc: "Swoo Tech Mart just distribute 100% authorized products guarantee quality. Nulla porta nulla nec orci vulputate, id rutrum sapien varius.",
        icon: <FaCheckCircle />,
    },
    {
        id: 2,
        title: "Fast Delivery",
        desc: "Fast shipping with a lots of option to delivery. 100% guarantee that your goods alway on time and perserve quality.",
        icon: <FaTruck />,
    },
    {
        id: 3,
        title: "Affordable Price",
        desc: "We offer an affordable & competitive price with a lots of special promotions.",
        icon: <FaTags />,
    },
];

const AboutFeatures = () => {
    return (
        <section className="w-full px-4 py-10 bg-gray-100">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {featuresData.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition"
                    >

                        <div className="flex justify-between">
                            <h3 className="text-lg font-semibold text-gray-900">
                                {item.title}
                            </h3>
                            <div className="w-10 h-10 bg-green-600 rounded-full"></div>
                        </div>

                        {/* CONTENT */}
                        <div className="mt-4">
                            <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>

                    </div>
                ))}

            </div>
        </section>
    );
};

export default AboutFeatures;