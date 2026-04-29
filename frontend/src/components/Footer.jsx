import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import ROUTE_PATHS from "@/config/routePaths";

const Footer = () => {

    const footerData = [
        {
            title: "Top Categories",
            links: [
                { name: "Laptops", url: "/shop/category/laptops" },
                { name: "PC & Computers", url: "/shop/category/pc" },
                { name: "Cell Phones", url: "/shop/category/mobile" },
                { name: "Tablets", url: "/shop/category/tablets" },
                { name: "Gaming & VR", url: "/shop/category/gaming" },
                { name: "Networks", url: "/shop/category/networking" },
                { name: "Cameras", url: "/shop/category/cameras" },
                { name: "Sounds", url: "/shop/category/sound" },
                { name: "Office", url: "/shop/category/office" },
            ],
        },
        {
            title: "Company",
            links: [
                { name: "About Swoo", url: "/about" },
                { name: "Contact", url: ROUTE_PATHS.CONTACT },
                { name: "Career", url: "/career" },
                { name: "Blog", url: "/blog" },
                { name: "Sitemap", url: "/sitemap" },
                { name: "Store Locations", url: "/stores" },
            ]
        },

        {
            title: "Help Center",
            links: [
                { name: "Customer Service", url: "/customerservice" },
                { name: "Policy", url: "/policy" },
                { name: "Terms & Conditions", url: "/condition" },
                { name: "Track Order", url: "/track-order" },
                { name: "FAQs", url: "/faqs" },
                { name: "My Account", url: "/account" },
                { name: "Product Support", url: "/product-support" },
            ]
        },
        {
            title: "Partner",
            links: [
                { name: "Become Seller", url: "/become-seller" },
                { name: "Affiliate", url: "/affiliate" },
                { name: "Advertise", url: "/advertise" },
                { name: "Partnership", url: "/partnership" },
            ]
        }
    ]

    return (
        <footer className="bg-[#f5f5f5] mt-12 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 py-12">

                    <div className="flex flex-col gap-4 md:col-span-2 lg:col-span-1">
                        <h3 className="text-sm text-black font-bold uppercase tracking-wide">Swoo - 1st NYC Tech Online Market</h3>

                        <div className="flex flex-col">
                            <span className="text-slate-500 text-xs uppercase">Hotline 24/7</span>
                            <span className="text-brand-primary text-4xl font-extrabold leading-tight">(025) 3686 25 16</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-slate-700 text-sm">257 Thatcher Road St, Brooklyn, Manhattan, NY 10092</p>
                            <span className="text-slate-600 text-sm">contact@swootechmart.com</span>
                        </div>

                        <div className="flex gap-2.5 mt-1">
                            <button className="w-8 h-8 rounded-full bg-slate-200 text-slate-700 hover:bg-brand-primary hover:text-white flex items-center justify-center transition"><FaTwitter size={13} /></button>
                            <button className="w-8 h-8 rounded-full bg-slate-200 text-slate-700 hover:bg-brand-primary hover:text-white flex items-center justify-center transition"><FaFacebook size={13} /></button>
                            <button className="w-8 h-8 rounded-full bg-slate-200 text-slate-700 hover:bg-brand-primary hover:text-white flex items-center justify-center transition"><FaInstagram size={13} /></button>
                            <button className="w-8 h-8 rounded-full bg-slate-200 text-slate-700 hover:bg-brand-primary hover:text-white flex items-center justify-center transition"><FaYoutube size={13} /></button>
                            <button className="w-8 h-8 rounded-full bg-slate-200 text-slate-700 hover:bg-brand-primary hover:text-white flex items-center justify-center transition"><FaPinterest size={13} /></button>
                        </div>

                        <div className="flex gap-2 pt-3">
                            <button className="h-9 px-4 text-xs rounded-md border border-slate-300 text-slate-700 bg-white">USD</button>
                            <button className="h-9 px-4 text-xs rounded-md border border-slate-300 text-slate-700 bg-white">Eng</button>
                        </div>
                    </div>


                    {
                        footerData.map((item, index) => (
                            <div key={index}>
                                <h4 className="text-sm text-black font-bold mb-4 uppercase tracking-wide">{item.title}</h4>
                                <ul className="space-y-2">
                                    {
                                        item.links.map((item, index) => (
                                            <li key={index}>
                                                <Link to={item.url} className="text-sm text-slate-600 hover:text-brand-primary transition-colors">
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>

                        ))
                    }
                </div>

                <div className="pb-10">
                    <h4 className="text-sm text-black font-bold uppercase tracking-wide mb-4">
                        Subscribe & get <span className="text-red-500">10% off</span> for your first order
                    </h4>
                    <div className="flex items-center gap-3 border-b border-slate-300 pb-2">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="flex-1 bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
                        />
                        <button className="text-xs uppercase font-bold text-brand-primary hover:text-brand-primary-dark">
                            Subscribe
                        </button>
                    </div>
                    <p className="text-xs text-slate-500 mt-2">By subscribing, you're accepted the our <span className="underline">Policy</span></p>
                </div>

                <div className="border-t border-slate-300 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <p className="text-xs text-slate-500">
                        &copy; 2024 <span className="font-semibold text-slate-700">Shawonetc3</span> . All Rights Reserved
                    </p>
                    <div className="text-sm text-slate-700 font-semibold tracking-wide">
                        PayPal &nbsp; • &nbsp; Mastercard &nbsp; • &nbsp; Visa &nbsp; • &nbsp; Stripe &nbsp; • &nbsp; Klarna
                    </div>
                    <Link to="/" className="text-xs text-blue-500 hover:underline">Mobile Site</Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;