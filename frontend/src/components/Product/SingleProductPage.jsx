import { useEffect, useMemo, useState } from "react";
import promo from "@/assets/ProductPageImg/promo.png";
import paymentImg from "@/assets/ProductImages/payment.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaDribbble, FaTruck, FaCheck, FaHeart, FaSyncAlt } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCatalogProducts } from "@/store/products/productSelectors";
import { finalProducts } from "@/Data/ProductData";
import DealSection from "../UI/DealSection";
import BestSeller from "../UI/BestSeller";
import { addToCart, getNumericPrice } from "@/store/cart/cartSlice";
import ROUTE_PATHS from "@/constants/Routes";

const toSlug = (value = "") =>
    value
        .toString()
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

const VARIANT_CATEGORIES = ["laptops", "mobile", "tablets", "pc"];
const DEFAULT_MEMORY_OPTIONS = ["64GB", "128GB", "256GB", "512GB"];

const formatInr = (n) => `₹${Math.round(Number(n) || 0).toLocaleString("en-IN")}`;

/** Pick display string from a variant option (backend may send `price`, `priceLabel`, or numeric `salePrice`). */
const variantPriceString = (opt) => {
    if (!opt) return "";
    const v = opt.price ?? opt.priceLabel ?? opt.salePrice ?? opt.formattedPrice;
    if (v === undefined || v === null || v === "") return "";
    if (typeof v === "number") return formatInr(v);
    return String(v);
};

const SingleProductPage = () => {

    const [mainImg, setMainImg] = useState("");
    const [imgZoom, setImgZoom] = useState({ x: 50, y: 50, active: false });
    const [loading, setLoading] = useState(false);
    const [localQty, setLocalQty] = useState(1);
    const [selectedColorIdx, setSelectedColorIdx] = useState(0);
    const [selectedMemoryIdx, setSelectedMemoryIdx] = useState(0);
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
        memoryOptions: item.memoryOptions,
        colorOptions: item.colorOptions,
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


    const colorOptionsList = useMemo(() => {
        if (!product) return [];
        if (Array.isArray(product.colorOptions) && product.colorOptions.length > 0) return product.colorOptions;
        if (!VARIANT_CATEGORIES.includes(product.category)) return [];
        const img = product.thumbnailImage || product.img;
        const basePrice = product.price;
        return [
            { name: "Graphite", img, price: basePrice },
            { name: "Midnight Blue", img, price: basePrice },
            { name: "Silver", img, price: basePrice },
        ];
    }, [product]);


    const memoryList = useMemo(() => {
        if (!product) return [];
        if (Array.isArray(product.memoryOptions) && product.memoryOptions.length > 0) return product.memoryOptions;
        return VARIANT_CATEGORIES.includes(product.category) ? DEFAULT_MEMORY_OPTIONS : [];
    }, [product]);

    const safeColorIdx = product && colorOptionsList.length
        ? Math.min(selectedColorIdx, colorOptionsList.length - 1)
        : 0;
    const safeMemIdx = product && memoryList.length ? Math.min(selectedMemoryIdx, memoryList.length - 1) : 0;

    const selectedColor = colorOptionsList[safeColorIdx];
    const selectedMemoryLabel = memoryList[safeMemIdx] || "";

    const unitVariantPrice = useMemo(() => {
        if (!product) return 0;
        const raw = variantPriceString(selectedColor);
        if (raw !== "" && raw != null) return getNumericPrice(String(raw));
        return getNumericPrice(product.price);
    }, [product, selectedColor]);

    const variantDisplayNumeric = unitVariantPrice * localQty;

    /** Headline unit price shown for selection (preserve backend formatting when string). */
    const headlineVariantPriceDisplay = useMemo(() => {
        if (!selectedColor) return product?.price ?? "";
        const s = variantPriceString(selectedColor);
        return s !== "" ? s : formatInr(unitVariantPrice);
    }, [selectedColor, product?.price, unitVariantPrice]);

    const detailsImage = useMemo(() => {
        if (mainImg) return mainImg;
        if (selectedColor?.img) return selectedColor.img;
        return product?.thumbnailImage || product?.img || "";
    }, [mainImg, selectedColor?.img, product?.thumbnailImage, product?.img]);

    useEffect(() => {
        setMainImg("");
        setImgZoom({ x: 50, y: 50, active: false });
        setLocalQty(1);
        setLoading(false);
        setSelectedColorIdx(0);
        setSelectedMemoryIdx(0);
    }, [slug]);

    if (!product) {
        return <div className="text-center py-10">Product not found</div>;
    }

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

    const handleImgMouseMove = (e) => {
        const el = e.currentTarget;
        const r = el.getBoundingClientRect();
        const x = ((e.clientX - r.left) / Math.max(r.width, 1)) * 100;
        const y = ((e.clientY - r.top) / Math.max(r.height, 1)) * 100;
        setImgZoom({ x, y, active: true });
    };

    const handleImgMouseLeave = () => {
        setImgZoom((z) => ({ ...z, active: false }));
    };

    return (
        <>
            <section className="max-w-7xl mx-auto px-4 py-6 lg:py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                {/* LEFT: gallery — sticky while page scrolls */}
                <div className="w-full lg:col-span-5 lg:sticky lg:top-28 lg:z-10 lg:self-start space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="inline-flex bg-black px-2.5 py-1 rounded text-white text-xs font-medium tracking-wide">
                            {product?.tag || "NEW"}
                        </span>
                    </div>

                    <div
                        className="relative overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 aspect-square max-h-[min(520px,72vh)] mx-auto w-full cursor-crosshair shadow-sm"
                        onMouseMove={handleImgMouseMove}
                        onMouseLeave={handleImgMouseLeave}
                    >
                        <img
                            src={detailsImage}
                            alt={product.title}
                            draggable={false}
                            className={`w-full h-full object-contain p-4 sm:p-6 select-none pointer-events-none transition-transform duration-150 ease-out will-change-transform ${imgZoom.active ? "scale-[1.65]" : "scale-100"
                                }`}
                            style={{ transformOrigin: `${imgZoom.x}% ${imgZoom.y}%` }}
                        />
                    </div>

                    <div className="flex gap-2.5 flex-wrap justify-center sm:justify-start">
                        {thumbnails.map((item, index) => (
                            <button
                                type="button"
                                key={`${index}-${item}`}
                                onClick={() => setMainImg(item)}
                                className={`shrink-0 w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-lg overflow-hidden border-2 transition ring-offset-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary ${item === detailsImage
                                    ? "border-black ring-1 ring-black/10"
                                    : "border-gray-200 hover:border-gray-400"
                                    }`}
                            >
                                <img src={item} alt="" className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* MIDDLE: details — scrolls naturally */}
                <div className="lg:col-span-4 flex flex-col gap-6 min-w-0">

                    <div>

                        <h1 className="text-xl sm:text-2xl lg:text-[1.65rem] font-semibold text-gray-900 leading-snug tracking-tight">
                            {product.title}
                        </h1>
                        <div className="mt-3">
                            <p className="text-2xl sm:text-3xl font-bold text-gray-900">
                                {colorOptionsList.length > 0 ? headlineVariantPriceDisplay : product.price}
                            </p>
                            {colorOptionsList.length > 0 && (
                                <p className="text-sm text-gray-500 mt-1.5">
                                    Original price: <span className="text-gray-700 font-medium">{product.price}</span>
                                </p>
                            )}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">Highlights</h2>
                        <ul className="flex flex-col gap-0 rounded-xl border border-gray-100 bg-gray-50/80 divide-y divide-gray-100">
                            {highlights.map((line, idx) => (
                                <li key={idx} className="flex gap-3 px-4 py-3.5 text-sm text-gray-700 leading-relaxed">
                                    <span className="shrink-0 w-5 h-5 rounded-full bg-brand-primary/15 text-brand-primary flex items-center justify-center text-[11px] font-bold mt-0.5">✓</span>
                                    <span>{line}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        <span className="bg-brand-primary-light text-brand-primary px-2.5 py-1 text-xs font-medium rounded-md">
                            FREE SHIPPING
                        </span>
                        <span className="bg-red-100 text-red-500 px-2.5 py-1 text-xs font-medium rounded-md">
                            FREE GIFT
                        </span>
                    </div>

                    {product?.color && colorOptionsList.length === 0 && (
                        <div className="text-sm">
                            <span className="font-semibold text-gray-900">Color </span>
                            <span className="text-gray-600">{product.color}</span>
                        </div>
                    )}

                    {colorOptionsList.length > 0 && (
                        <div className="space-y-3">
                            <p className="text-sm">
                                <span className="font-bold text-gray-900 uppercase tracking-wide">Color: </span>
                                <span className="text-gray-600 font-normal">{selectedColor?.name}</span>
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {colorOptionsList.map((opt, idx) => (
                                    <button
                                        type="button"
                                        key={`${opt.name}-${idx}`}
                                        onClick={() => {
                                            setSelectedColorIdx(idx);
                                            setMainImg("");
                                        }}
                                        className={`flex flex-col items-center gap-1.5 rounded-xl border-2 p-3 min-w-[104px] max-w-[132px] transition bg-white hover:border-gray-300 ${idx === safeColorIdx
                                            ? "border-brand-primary ring-2 ring-brand-primary/25"
                                            : "border-gray-200"
                                            }`}
                                    >
                                        <img src={opt.img} alt="" className="h-14 w-full object-contain" />
                                        <span className="text-xs font-medium text-gray-800 text-center leading-tight">{opt.name}</span>
                                        <span className="text-xs font-bold text-gray-900">{variantPriceString(opt) || product.price}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {memoryList.length > 0 && (
                        <div className="space-y-3">
                            <p className="text-sm">
                                <span className="font-bold text-gray-900 uppercase tracking-wide">Memory size: </span>
                                <span className="text-gray-600 font-normal">{selectedMemoryLabel}</span>
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {memoryList.map((mem, idx) => (
                                    <button
                                        key={mem}
                                        type="button"
                                        onClick={() => setSelectedMemoryIdx(idx)}
                                        className={`rounded-full px-4 py-2 text-sm border-2 transition ${idx === safeMemIdx
                                            ? "border-brand-primary text-gray-900 font-semibold bg-white"
                                            : "border-gray-200 text-gray-500 font-normal bg-white hover:border-gray-300"
                                            }`}
                                    >
                                        {mem}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="bg-brand-primary-light/90 border border-brand-primary/15 p-4 rounded-xl flex flex-col sm:flex-row items-center gap-4">
                        <img src={promo} className="w-14 h-14 object-contain shrink-0" alt="" />
                        <div className="text-sm text-center sm:text-left space-y-1">
                            <p>
                                Buy <span className="text-red-500 font-semibold">02</span> boxes get a <b>Snack Tray</b>
                            </p>
                            <p>
                                Buy <span className="text-red-500 font-semibold">04</span> boxes get a free <b>Block Toys</b>
                            </p>
                            <p className="text-xs text-gray-500 pt-1">
                                Promotion expires in: 9:00pm, 25/5/2024
                            </p>
                        </div>
                    </div>

                    <div className="rounded-xl border border-gray-100 bg-white px-4 py-3 text-sm text-gray-700 space-y-2.5">
                        <p><span className="font-semibold text-gray-900">SKU</span> <span className="text-gray-600">{product.sku || "N/A"}</span></p>
                        <p><span className="font-semibold text-gray-900">Category</span> <span className="text-gray-600 capitalize">{product.category || "general"}</span></p>
                        <p><span className="font-semibold text-gray-900">Brand</span> <span className="text-brand-primary">{product.brand || "N/A"}</span></p>
                    </div>

                    <div className="flex gap-2 flex-wrap pt-1">
                        {socialIcons.map((item, i) => (
                            <div
                                key={i}
                                className="w-9 h-9 flex items-center justify-center bg-gray-100 rounded-full text-gray-600 hover:bg-gray-900 hover:text-white transition text-sm cursor-pointer"
                            >
                                {item.icon}
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT: cart */}
                <div className="lg:col-span-3 flex flex-col gap-4 w-full min-w-0">
                    <div className="bg-[#F0F2F5] p-4 rounded-xl space-y-3">
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Total price</p>
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                            {formatInr(variantDisplayNumeric)}
                        </h2>

                        <p className="text-xs text-gray-600 leading-relaxed">
                            Affirm <span className="font-semibold">₹499/mo</span> in 12 months.{" "}
                            <button type="button" className="text-brand-primary font-medium hover:underline">
                                See more
                            </button>
                        </p>

                        <div className="flex items-center gap-2 text-brand-primary text-sm font-medium">
                            <FaCheck className="shrink-0 text-base" aria-hidden />
                            <span>{product.stock}</span>
                        </div>

                        <div className="flex items-center justify-between bg-white rounded-lg border border-gray-200 px-3 py-2.5 mb-1">
                            <button type="button" className="text-lg text-gray-600 hover:text-gray-900 px-1" onClick={() => setLocalQty((prev) => Math.max(1, prev - 1))} aria-label="Decrease quantity">−</button>
                            <span className="text-sm font-semibold tabular-nums">{localQty}</span>
                            <button type="button" className="text-lg text-gray-600 hover:text-gray-900 px-1" onClick={() => setLocalQty((prev) => prev + 1)} aria-label="Increase quantity">+</button>
                        </div>

                        <button
                            disabled={loading}
                            className="w-full text-white py-2.5 rounded-lg mb-2 text-sm font-semibold bg-brand-primary hover:bg-brand-primary-dark"
                            onClick={() => { handleCartItem(product.id) }}
                        >
                            {
                                loading ? (
                                    <span className="w-5 h-5 border-2 border-white/70 border-t-white rounded-full animate-spin inline-block"></span>
                                ) : "Add to Cart"
                            }

                        </button>

                        <button
                            className="w-full text-white py-2.5 rounded-lg text-sm font-semibold bg-[#FFC439] hover:bg-[#f0b530] border"
                            onClick={() => navigate(ROUTE_PATHS.CHECKOUT)}
                        >
                            Buy with PayPal
                        </button>

                        <div className="flex items-center justify-between gap-2 pt-1 text-xs text-gray-600">
                            <button type="button" className="flex items-center gap-1.5 hover:text-gray-900">
                                <FaHeart className="text-gray-400" aria-hidden />
                                Wishlist
                            </button>
                            <button type="button" className="flex items-center gap-1.5 hover:text-gray-900">
                                <FaSyncAlt className="text-gray-400" aria-hidden />
                                Compare
                            </button>
                        </div>

                        <p className="text-xs font-semibold text-gray-700 text-center pt-1">Guaranteed safe checkout</p>

                        <div className="w-full flex justify-center pt-1">
                            <img
                                src={paymentImg}
                                alt="Accepted payment methods"
                                className="w-full max-w-xs object-contain"
                            />
                        </div>
                    </div>

                    {/* CONTACT */}
                    <div className="bg-[#F0F2F5] p-4 rounded-xl text-center">
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