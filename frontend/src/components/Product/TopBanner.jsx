import img from "../../assets/headphone.png";
import mobileBanner from "../../assets/Laptop/mobile-banner.png";

const TopBanner = () => {
    return (
        <>
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="w-full">
                    <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-4">
                        Top Cell Phones & Tablets
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                        {/* LEFT BIG BANNER */}
                        <div
                            className="relative md:col-span-2 h-52 sm:h-60 md:h-64 lg:h-72 rounded-md bg-cover bg-center bg-no-repeat overflow-hidden"
                            style={{ backgroundImage: `url(${img})` }}
                        >
                            <div className="absolute inset-0 bg-black/40"></div>
                            <div className="relative z-10 flex flex-col justify-center h-full px-4 sm:px-6 max-w-[80%]">
                                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">
                                    Noise Cancelling
                                </h2>

                                <p className="text-white/80 text-sm sm:text-base mb-2">
                                    Headphone
                                </p>

                                <p className="text-gray-100 text-xs sm:text-sm leading-snug">
                                    Boso Over-Ear Headphone <br />
                                    Wifi, Voice Assistant,<br />
                                    Low Latency Game Mode
                                </p>

                                <button className="bg-white text-black px-4 sm:px-6 py-1.5 rounded-full w-fit mt-3 sm:mt-5 text-xs sm:text-sm font-medium hover:bg-gray-200 transition">
                                    BUY NOW
                                </button>
                            </div>
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="flex flex-col gap-4">
                            <div
                                className="relative h-52 sm:h-60 md:h-32 lg:h-72 rounded-md bg-cover bg-center bg-no-repeat overflow-hidden"
                                style={{ backgroundImage: `url(${mobileBanner})` }}
                            >
                                {/* overlay for better contrast */}
                                <div className="absolute inset-0 bg-black/20"></div>

                                {/* content */}
                                <div className="relative z-10 p-3 sm:p-4 flex items-center justify-around">
                                    <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-black leading-tight">
                                        Redmi Note 12 <br />
                                        Pro+ 5G
                                    </h2>
                                    <button className='bg-black rounded-full text-white px-3 py-1'>Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TopBanner;