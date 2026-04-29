import { useMemo, useState } from "react";
import promo from "@/assets/ProductPageImg/promo.png";
import paymentImg from "@/assets/ProductImages/payment.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaDribbble, FaTruck } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCatalogProducts } from "@/features/products/productSelectors";
import { finalProducts } from "@/Data/ProductData";
import DealSection from "../DealSection";
import BestSeller from "../BestSeller";
import { addToCart, decreaseQty, increaseQty } from "@/features/cart/cartSlice";
import { getNumericPrice } from "@/features/cart/cartSlice";
import ROUTE_PATHS from "@/config/routePaths";

const toSlug = (value = "") =>
    value
        .toString()
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

const SingleProductPage = () => {

    const [mainImg, setMainImg] = useState("");
    const [loading, setLoading] = useState(false);
    const [localQty, setLocalQty] = useState(1);
    const { slug } = useParams();
    const navigate = useNavigate();
    const products = useSelector(selectCatalogProducts);
    const dispatch = useDispatch();
    const normalizedSlug = String(slug || "").toLowerCase();
    const staticCatalog = finalProducts.map((item) => ({
        ...item,
        slug: item.slug || toSlug(item.title),
        thumbnailImage: item.thumbnailImage || item.img,
        thumbnails: item.thumbnails || [item.img].filter(Boolean),
        highlights: item.highlights || [],
        memoryOptions: item.memoryOptions || [],
        sku: item.sku || "N/A",
        brand: item.brand || "N/A",
    }));
    const mergedCatalog = [...products, ...staticCatalog];

    const product = mergedCatalog.find((item) => {
        const itemSlug = String(item.slug || toSlug(item.title || "")).toLowerCase();
        return itemSlug === normalizedSlug;
    });
    const thumbnails = useMemo(() => {
        if (!product) return [];
        if (Array.isArray(product.thumbnails) && product.thumbnails.length > 0) return product.thumbnails;
        return [product.thumbnailImage || product.img].filter(Boolean);
    }, [product]);


    const detailsImage = useMemo(() => mainImg || product?.thumbnailImage || product?.img, [mainImg, product?.thumbnailImage, product?.img]);
    const { cartItems, totalQty, totalPrice } = useSelector((state) => state.cart);
    const basePrice = product ? getNumericPrice(product.price) : 0;
    const displayPrice = basePrice * localQty;


    if (!product) {
        return <div className="text-center py-10">Product not found</div>;
    }

    const memoryOptions = product.memoryOptions?.length ? product.memoryOptions : [];
    const highlights = product.highlights?.length
        ? product.highlights
        : ["Top quality build", "Best-in-class performance", "Reliable customer support"];

    const socialIcons = [
        { icon: <FaTwitter />, link: "#" },
        { icon: <FaFacebookF />, link: "#" },
        { icon: <FaInstagram />, link: "#" },
        { icon: <FaYoutube />, link: "#" },
        { icon: <FaDribbble />, link: "#" },
    ];

    const handleCartItem = (productId) => {
        setLoading(true)
        setTimeout(() => {
            dispatch(addToCart({ ...product, id: productId, quantity: localQty }));
            setLoading(false);
        }, 1000);
    }

    return (
        <>
            <section className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* LEFT: IMAGES */}
                <div className="w-full">
                    <button className="bg-black px-3 py-1 rounded text-white mb-3 text-xs">
                        {product?.tag || "NEW"}
                    </button>

                    <div className="bg-white rounded-xl p-4 flex justify-center">
                        <img
                            src={detailsImage}
                            className="h-56 sm:h-72 md:h-80 object-contain"
                        />
                    </div>

                    {/* Thumbnails */}
                    <div className="flex gap-2 mt-4 flex-wrap">
                        {thumbnails.map((item, index) => (
                            <img
                                key={index}
                                src={item}
                                onClick={() => setMainImg(item)}
                                className={`w-14 h-14 sm:w-16 sm:h-16 object-cover cursor-pointer border rounded 
                                ${mainImg === item ? "border-black" : "border-gray-300"}`}
                            />
                        ))}
                    </div>
                </div>

                {/* MIDDLE: DETAILS */}
                <div className="flex flex-col gap-4">

                    <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">
                        {product.title}
                    </h1>

                    <p className="text-xl sm:text-2xl font-semibold">
                        {product.price}
                    </p>

                    <ul className="text-xs sm:text-sm space-y-1 text-gray-600">
                        {highlights.map((line, idx) => (
                            <li key={idx}>• {line}</li>
                        ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        <span className="bg-brand-primary-light text-brand-primary px-2 py-1 text-xs rounded">
                            FREE SHIPPING
                        </span>
                        <span className="bg-red-100 text-red-500 px-2 py-1 text-xs rounded">
                            FREE GIFT
                        </span>
                    </div>

                    <hr />

                    {/* COLOR */}
                    {product?.color && (
                        <div>
                            <p className="text-sm font-semibold mb-2">
                                Color: <span className="text-gray-500 font-normal">{product.color}</span>
                            </p>
                        </div>
                    )}

                    {/* MEMORY */}
                    {memoryOptions.length > 0 && (
                        <div>
                            <p className="text-sm font-semibold mb-2">Memory</p>
                            <div className="flex flex-wrap gap-2">
                                {memoryOptions.map((item, idx) => (
                                    <button key={idx} className={`border px-3 py-1 rounded text-sm ${idx === 0 ? "border-black" : ""}`}>
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    <hr />

                    {/* PROMO BOX (FIXED TEXT) */}
                    <div className="bg-brand-primary-light p-4 rounded-lg flex flex-col sm:flex-row items-center gap-4">

                        <img src={promo} className="w-16 h-16 object-contain" />

                        <div className="text-sm text-center sm:text-left">
                            <p>
                                Buy <span className="text-red-500 font-semibold">02</span> boxes get a <b>Snack Tray</b>
                            </p>
                            <p>
                                Buy <span className="text-red-500 font-semibold">04</span> boxes get a free <b>Block Toys</b>
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                                Promotion expires in: 9:00pm, 25/5/2024
                            </p>
                        </div>
                    </div>

                    {/* META */}
                    <div className="text-sm space-y-2">
                        <p><span className="font-semibold">SKU:</span> {product.sku || "N/A"}</p>
                        <p><span className="font-semibold">CATEGORY:</span> <span className="text-gray-600 capitalize">{product.category || "general"}</span></p>
                        <p><span className="font-semibold">BRAND:</span> <span className="text-brand-primary">{product.brand || "N/A"}</span></p>
                    </div>

                    {/* SOCIAL ICONS (RESTORED) */}
                    <div className="flex gap-3 flex-wrap">
                        {socialIcons.map((item, i) => (
                            <div
                                key={i}
                                className="w-9 h-9 flex items-center justify-center
                                 bg-gray-200 rounded-full cursor-pointer hover:bg-black
                                  hover:text-white transition text-sm"
                            >
                                {item.icon}
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT: CART */}
                <div className="flex flex-col gap-4">
                    <div className="bg-gray-100 p-4 rounded-xl">
                        <p className="text-xs text-gray-500">TOTAL PRICE</p>
                        <h2 className="text-xl sm:text-2xl font-bold mb-3">
                            ₹{displayPrice}</h2>

                        <p className="text-brand-primary text-sm mb-4">{product.stock}</p>

                        {/* Quantity */}
                        <div className="flex items-center justify-between bg-white rounded px-3 py-2 mb-4">

                            <button onClick={() => setLocalQty((prev) => Math.max(1, prev - 1))}>-</button>

                            <span>{localQty}</span>

                            <button onClick={() => setLocalQty((prev) => prev + 1)}>+</button>
                        </div>

                        <button
                            disabled={loading}
                            className="w-full text-white py-2 rounded mb-3 text-sm bg-brand-primary hover:bg-brand-primary-dark"
                            onClick={() => { handleCartItem(product.id) }}
                        >
                            {
                                loading ? (
                                    <span className="w-5 h-5 border-2 border-white/70 border-t-white rounded-full animate-spin inline-block"></span>
                                ) : "Add to Cart"
                            }

                        </button>

                        <button
                            className="w-full text-white py-2 rounded text-sm bg-orange-400 hover:bg-orange-500"
                            onClick={() => navigate(ROUTE_PATHS.CHECKOUT)}
                        >
                            Buy Now
                        </button>

                        <hr className="my-4" />

                        {/* PAYMENT IMAGE FIXED */}
                        <div className="w-full flex justify-center">
                            <img
                                src={paymentImg}
                                className="w-full max-w-xs object-contain"
                            />
                        </div>
                    </div>

                    {/* CONTACT */}
                    <div className="bg-gray-100 p-4 rounded-xl text-center">
                        <button className="bg-black text-white px-4 py-1 rounded text-sm mb-2">
                            Quick Order 24/7
                        </button>
                        <p className="text-lg font-semibold">(025) 3886 25 16</p>
                    </div>


                    <div className="flex gap-3 justify-center items-center">
                        <FaTruck /> <p> Ships from <span className="font-semibold">United States</span></p>
                    </div>
                </div>
            </section>

            <BestSeller />
            <DealSection />
        </>
    );
};

export default SingleProductPage;