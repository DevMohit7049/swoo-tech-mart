import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "@/api/client";
import { finalProducts } from "@/Data/ProductData";

const toSlug = (value = "") =>
    value
        .toString()
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

const API_BASE_URL = import.meta.env.VITE_BASE_URL || "";
const SERVER_ORIGIN = API_BASE_URL.replace(/\/api\/?$/, "");

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

// add product
export const addProduct = createAsyncThunk(
    "product/add",
    async (data, { rejectWithValue }) => {
        try {
            const formData = new FormData();

            Object.keys(data).forEach((key) => {
                if (key === "image") {
                    if (data.image?.[0]) {
                        formData.append("image", data.image[0]);
                    }
                } else if (key === "thumbnail") {
                    if (data.thumbnail?.[0]) {
                        formData.append("thumbnail", data.thumbnail[0]);
                    }
                } else if (key === "thumbnails") {
                    if (data.thumbnails?.length) {
                        Array.from(data.thumbnails).forEach((file) => formData.append("thumbnails", file));
                    }
                } else if (key === "imageUrl" || key === "thumbnailUrl") {
                    if (data[key]) {
                        formData.append(key, data[key]);
                    }
                } else if (key === "thumbnailUrls") {
                    if (data.thumbnailUrls) {
                        formData.append("thumbnailUrls", data.thumbnailUrls);
                    }
                }
                else {
                    formData.append(key, data[key]);
                }
            });

            const res = await API.post("/products", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            return res.data.product;

        } catch (error) {
            return rejectWithValue(
                error.response?.data || "Failed to add product"
            );
        }
    }
);

// get all product 
export const getProduct = createAsyncThunk(
    "product/getAll",
    async (_, { rejectWithValue }) => {
        try {
            const res = await API.get("/products");
            return res.data.products;
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || "Failed to fetch products"
            );
        }
    });


// update product 

export const updateProduct = createAsyncThunk(
    "product/update",
    async ({ id, data }, { rejectWithValue }) => {
        try {
            const formData = new FormData();

            Object.keys(data).forEach((key) => {
                if (key === "image") {
                    // only append if new file selected
                    if (data.image?.[0]) {
                        formData.append("image", data.image[0]);
                    }
                } else if (key === "thumbnail") {
                    if (data.thumbnail?.[0]) {
                        formData.append("thumbnail", data.thumbnail[0]);
                    }
                } else if (key === "thumbnails") {
                    if (data.thumbnails?.length) {
                        Array.from(data.thumbnails).forEach((file) => formData.append("thumbnails", file));
                    }
                } else if (key === "imageUrl" || key === "thumbnailUrl") {
                    if (data[key]) {
                        formData.append(key, data[key]);
                    }
                } else if (key === "thumbnailUrls") {
                    if (data.thumbnailUrls) {
                        formData.append("thumbnailUrls", data.thumbnailUrls);
                    }
                } else {
                    formData.append(key, data[key]);
                }
            });

            const res = await API.put(`/products/${id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            return res.data.product;
        } catch (error) {
            return rejectWithValue(
                error.response?.data || "Failed to update product"
            );
        }
    }
);

export const deleteProduct = createAsyncThunk(
    "product/delete",
    async (id, { rejectWithValue }) => {
        try {
            const res = await API.delete(`/products/${id}`);
            return id;

        } catch (error) {
            return rejectWithValue("Delete failed");
        }
    }
)

const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        catalogProducts: [],
        loading: false,
        error: null
    },
    reducers: {},

    extraReducers: (builder) => {
        builder
            // ADD PRODUCT
            .addCase(addProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.products.push(action.payload);
                state.catalogProducts = mapProducts(state.products);
            })
            .addCase(addProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // get all product from backend
            .addCase(getProduct.pending, (state) => {
                state.loading = true;
            })
            .addCase(getProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
                state.catalogProducts = mapProducts(action.payload);

            })
            .addCase(getProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.catalogProducts = finalProducts;
            })
            // update product slice 
            .addCase(updateProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                state.loading = false;
                const updated = action.payload;
                if (!updated) return;
                const index = state.products.findIndex(p => p._id === updated._id);
                if (index !== -1) {
                    state.products[index] = updated;
                }
                state.catalogProducts = mapProducts(state.products);
            })
            .addCase(updateProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(deleteProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.products = state.products.filter(p => p._id !== action.payload);
                state.catalogProducts = mapProducts(state.products);
            })
            .addCase(deleteProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            ;

    },
});


export default productSlice.reducer;



