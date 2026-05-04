import { createSlice } from "@reduxjs/toolkit";
import { backendConfig } from "@/constants/contents/MainContent";
import { finalProducts } from "@/Data/ProductData";

const toSlug = (value = "") =>
    value
        .toString()
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

const SERVER_ORIGIN = backendConfig.origin;

const resolveMediaUrl = (value) => {
    if (!value) return "";
    const raw = String(value).trim();
    if (!raw) return "";

    if (/^https?:\/\//i.test(raw) || raw.startsWith("data:")) {
        return raw;
    }

    const normalized = raw.replace(/\\/g, "/");
    const uploadsIndex = normalized.toLowerCase().lastIndexOf("/uploads/");

    if (uploadsIndex >= 0) {
        const uploadsPath = normalized.slice(uploadsIndex);
        return `${SERVER_ORIGIN}${uploadsPath}`;
    }

    if (normalized.startsWith("uploads/")) {
        return `${SERVER_ORIGIN}/${normalized}`;
    }

    if (normalized.startsWith("src/uploads/")) {
        return `${SERVER_ORIGIN}/${normalized.replace(/^src\//, "")}`;
    }

    return normalized.startsWith("/") ? `${SERVER_ORIGIN}${normalized}` : `${SERVER_ORIGIN}/${normalized}`;
};

const normalizeCategory = (value = "") => {
    const category = String(value || "").toLowerCase().trim();
    const categoryMap = {
        laptop: "laptops",
        laptops: "laptops",
        mobile: "mobile",
        phone: "mobile",
        phones: "mobile",
        pc: "pc",
        computer: "pc",
        computers: "pc",
        camera: "cameras",
        cameras: "cameras",
        sound: "sound",
        audio: "sound",
        gaming: "gaming",
        tablet: "tablets",
        tablets: "tablets",
        networking: "networking",
        network: "networking",
        office: "office",
        accessories: "accessories",
    };

    return categoryMap[category] || category || "general";
};

const toNumericId = (value = "") => {
    const input = String(value);
    let hash = 0;
    for (let i = 0; i < input.length; i += 1) {
        hash = (hash << 5) - hash + input.charCodeAt(i);
        hash |= 0;
    }
    return Math.abs(hash) || Math.floor(Math.random() * 1000000) + 1;
};

const buildThumbnailList = (product) => {
    const candidates = [
        ...(Array.isArray(product?.images) ? product.images : []),
        ...(Array.isArray(product?.thumbnails) ? product.thumbnails : []),
        ...(Array.isArray(product?.gallery) ? product.gallery : []),
        product?.thumbnail,
        product?.thumbnailImage,
        product?.thumbnailUrl,
        product?.image,
        product?.imageUrl,
        product?.img,
    ]
        .map(resolveMediaUrl)
        .filter(Boolean);

    return [...new Set(candidates)];
};

const mapProductToUi = (product) => {
    if (!product) return null;

    const title = product.name || product.title || "";
    const slug = product.slug || toSlug(title) || product._id || String(product.id || "");
    const numericId = Number.isFinite(Number(product.id)) ? Number(product.id) : toNumericId(product._id || slug);
    const rawPrice =
        typeof product.price === "number"
            ? product.price
            : Number(String(product.price || "").replace(/[^0-9.]/g, "")) || 0;
    const stockValue =
        typeof product.stock === "number"
            ? product.stock > 0
                ? "In stock"
                : "Out of stock"
            : product.stock || "In stock";
    const thumbnailList = buildThumbnailList(product);
    const normalizedImage =
        resolveMediaUrl(product.image) ||
        resolveMediaUrl(product.imageUrl) ||
        resolveMediaUrl(product.img) ||
        thumbnailList[0] ||
        finalProducts[0]?.img;

    return {
        ...product,
        id: numericId,
        title,
        slug,
        img: normalizedImage,
        image: normalizedImage,
        imageUrl: resolveMediaUrl(product.imageUrl) || "",
        thumbnailUrl: resolveMediaUrl(product.thumbnailUrl) || "",
        thumbnailImage:
            resolveMediaUrl(product.thumbnailImage) ||
            resolveMediaUrl(product.thumbnail) ||
            resolveMediaUrl(product.thumbnailUrl) ||
            thumbnailList[0] ||
            normalizedImage,
        thumbnails: thumbnailList.length ? thumbnailList : [normalizedImage],
        rawPrice,
        price: rawPrice ? `₹${rawPrice.toFixed(2)}` : product.price,
        stock: stockValue,
        category: normalizeCategory(product.category),
        sku: product.sku || "N/A",
        brand: product.brand || "N/A",
        description: product.description || "",
        highlights: Array.isArray(product.highlights)
            ? product.highlights
            : String(product.description || "")
                .split(".")
                .map((line) => line.trim())
                .filter(Boolean)
                .slice(0, 3),
        memoryOptions: Array.isArray(product.memoryOptions)
            ? product.memoryOptions
            : product.memory
                ? String(product.memory)
                    .split(",")
                    .map((item) => item.trim())
                    .filter(Boolean)
                : [],
    };
};

const mapProducts = (products = []) => {
    return products.map(mapProductToUi).filter(Boolean);
};

const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        catalogProducts: [],
        loading: false,
        error: null,
    },
    reducers: {
        setProductLoading(state, action) {
            state.loading = Boolean(action.payload);
            if (state.loading) state.error = null;
        },
        setProductError(state, action) {
            state.error = action.payload ?? null;
            state.loading = false;
        },
        setProductsAndCatalog(state, action) {
            const list = action.payload ?? [];
            state.products = list;
            state.catalogProducts = mapProducts(list);
            state.loading = false;
            state.error = null;
        },
        setProductsFetchFailed(state, action) {
            state.error = action.payload ?? "Failed to fetch products";
            state.loading = false;
            state.catalogProducts = finalProducts;
        },
        addProductSuccess(state, action) {
            const product = action.payload;
            if (!product) return;
            state.loading = false;
            state.products.push(product);
            state.catalogProducts = mapProducts(state.products);
            state.error = null;
        },
        updateProductSuccess(state, action) {
            const updated = action.payload;
            if (!updated) return;
            state.loading = false;
            const index = state.products.findIndex((p) => p._id === updated._id);
            if (index !== -1) {
                state.products[index] = updated;
            }
            state.catalogProducts = mapProducts(state.products);
            state.error = null;
        },
        deleteProductSuccess(state, action) {
            const id = action.payload;
            state.loading = false;
            state.products = state.products.filter((p) => p._id !== id);
            state.catalogProducts = mapProducts(state.products);
            state.error = null;
        },
    },
});

export const {
    setProductLoading,
    setProductError,
    setProductsAndCatalog,
    setProductsFetchFailed,
    addProductSuccess,
    updateProductSuccess,
    deleteProductSuccess,
} = productSlice.actions;

export default productSlice.reducer;
