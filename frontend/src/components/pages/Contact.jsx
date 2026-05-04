import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube, FaPinterestP } from "react-icons/fa";
import banner from "@/assets/ecommerce/laptopBanner.png";
const Contact = () => {
    return (
        <>
            <section className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 bg-white rounded-xl">
                    <div className="lg:col-span-3">
                        <h2 className="text-[26px] font-bold tracking-wide uppercase text-gray-900">
                            READY TO WORK WITH US
                        </h2>
                        <p className="text-gray-500 mt-2 mb-7">
                            Contact us for all your questions and opinions
                        </p>

                        <form className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm text-gray-700 mb-2">
                                        First Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full h-12 rounded-md border border-gray-300 px-3 outline-none focus:ring-2 focus:ring-brand-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-700 mb-2">
                                        Last Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full h-12 rounded-md border border-gray-300 px-3 outline-none focus:ring-2 focus:ring-brand-primary"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm text-gray-700 mb-2">
                                    Email Address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    className="w-full h-12 rounded-md border border-gray-300 px-3 outline-none focus:ring-2 focus:ring-brand-primary"
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-gray-700 mb-2">
                                    Phone Number <span className="text-gray-400">(Optional)</span>
                                </label>
                                <input
                                    type="tel"
                                    className="w-full h-12 rounded-md border border-gray-300 px-3 outline-none focus:ring-2 focus:ring-brand-primary"
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-gray-700 mb-2">
                                    Country / Region <span className="text-red-500">*</span>
                                </label>
                                <select className="w-full h-12 rounded-md border border-gray-300 px-3 bg-white outline-none focus:ring-2 focus:ring-brand-primary">
                                    <option>United States (US)</option>
                                    <option>United Kingdom (UK)</option>
                                    <option>India</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm text-gray-700 mb-2">
                                    Subject <span className="text-gray-400">(Optional)</span>
                                </label>
                                <input
                                    type="text"
                                    className="w-full h-12 rounded-md border border-gray-300 px-3 outline-none focus:ring-2 focus:ring-brand-primary"
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-gray-700 mb-2">Message</label>
                                <textarea
                                    rows={5}
                                    placeholder="Note about your order, e.g. special note for delivery"
                                    className="w-full rounded-md border border-gray-300 px-3 py-3 outline-none resize-none focus:ring-2 focus:ring-brand-primary"
                                />
                            </div>

                            <div className="flex items-start gap-2 text-sm text-gray-600">
                                <input type="checkbox" className="mt-1" />
                                <p>
                                    I want to receive news and updates once in a while. By submitting, I&apos;m agreed to the{" "}
                                    <span className="text-brand-primary underline cursor-pointer">Terms & Conditions</span>
                                </p>
                            </div>

                            <button
                                type="button"
                                className="mt-2 bg-brand-primary hover:bg-brand-primary-dark text-white px-6 py-3 rounded-lg text-sm font-semibold"
                            >
                                SEND MESSAGE
                            </button>
                        </form>
                    </div>

                    <div className="lg:col-span-2 space-y-4">
                        <div className="bg-gray-100 rounded-xl p-6">
                            <div className="space-y-8">
                                <div>
                                    <p className="text-xs tracking-wide text-gray-500 uppercase mb-4">UNITED STATES (HEAD QUATER)</p>
                                    <p className="text-gray-800 leading-7">152 Thatcher Road St, Mahattan, 10463, US</p>
                                    <p className="text-gray-800 leading-7">(+025) 3886 25 16</p>
                                    <p className="text-brand-primary underline mt-1">hello@swattechmart.com</p>
                                </div>

                                <div>
                                    <p className="text-xs tracking-wide text-gray-500 uppercase mb-4">UNITED KINGDOM (BRANCH)</p>
                                    <p className="text-gray-800 leading-7">12 Buckingham Rd, Thornthwaite, HG3 4TY, UK</p>
                                    <p className="text-gray-800 leading-7">(+718) 895-5350</p>
                                    <p className="text-brand-primary underline mt-1">contact@swattechmart.co.uk</p>
                                </div>

                                <div className="flex items-center gap-3">
                                    {[FaTwitter, FaFacebookF, FaInstagram, FaYoutube, FaPinterestP].map((Icon, idx) => (
                                        <button
                                            key={idx}
                                            type="button"
                                            className="w-9 h-9 rounded-full bg-white text-gray-800 shadow-sm hover:bg-brand-primary hover:text-white transition"
                                        >
                                            <Icon className="mx-auto text-sm" />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="rounded-xl overflow-hidden">
                            <img src={banner} alt="Contact team" className="w-full h-[285px] object-cover grayscale" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Contact;