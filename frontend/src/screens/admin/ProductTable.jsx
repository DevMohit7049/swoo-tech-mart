import {
    deleteProductSuccess,
    setProductLoading,
    setProductError,
    setProductsAndCatalog,
    setProductsFetchFailed,
} from "@/store/products/productSlice";
import { deleteProductApi, fetchProductsApi } from "@/api/productApi";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductTable = ({ setSelectedProduct }) => {

    const { products, loading } = useSelector((state) => state.product);
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 8;

    useEffect(() => {
        (async () => {
            dispatch(setProductLoading(true));
            try {
                const products = await fetchProductsApi();
                dispatch(setProductsAndCatalog(products ?? []));
            } catch (e) {
                dispatch(
                    setProductsFetchFailed(
                        e?.response?.data?.message || "Failed to fetch products"
                    )
                );
            } finally {
                dispatch(setProductLoading(false));
            }
        })();
    }, [dispatch]);

    const handleDelete = async (id) => {
        if (!id) return;
        const shouldDelete = window.confirm("Are you sure you want to delete this product?");
        if (!shouldDelete) return;
        dispatch(setProductLoading(true));
        try {
            await deleteProductApi(id);
            dispatch(deleteProductSuccess(id));
        } catch {
            dispatch(setProductError("Delete failed"));
        } finally {
            dispatch(setProductLoading(false));
        }
    };

    const categories = useMemo(
        () =>
            [...new Set((products || []).map((item) => item.category).filter(Boolean))].sort(),
        [products]
    );

    const filteredProducts = useMemo(() => {
        const query = searchQuery.trim().toLowerCase();
        return (products || []).filter((item) => {
            const matchesSearch =
                !query ||
                item.name?.toLowerCase().includes(query) ||
                item.slug?.toLowerCase().includes(query) ||
                item.sku?.toLowerCase().includes(query);
            const matchesCategory =
                categoryFilter === "all" || item.category === categoryFilter;
            return matchesSearch && matchesCategory;
        });
    }, [products, searchQuery, categoryFilter]);

    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery, categoryFilter]);

    const totalPages = Math.max(1, Math.ceil(filteredProducts.length / pageSize));
    const safeCurrentPage = Math.min(currentPage, totalPages);
    const paginatedProducts = filteredProducts.slice(
        (safeCurrentPage - 1) * pageSize,
        safeCurrentPage * pageSize
    );


    return (
        <div className="bg-white border border-slate-200 rounded-2xl p-5 md:p-6 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div>
                    <h3 className="text-xl font-bold text-slate-900">Product Inventory</h3>
                    <p className="text-sm text-slate-500">Manage and review all listed products.</p>
                </div>
                <span className="px-3 py-1 text-xs rounded-full bg-slate-100 text-slate-700 font-medium">
                    Total: {products?.length || 0}
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by name, slug, or SKU..."
                    className="md:col-span-2 w-full h-11 px-4 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
                />
                <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="w-full h-11 px-3 border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
                >
                    <option value="all">All Categories</option>
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-slate-50 text-slate-700">
                            <th className="p-3 text-sm font-semibold">Image</th>
                            <th className="p-3 text-sm font-semibold">Name</th>
                            <th className="p-3 text-sm font-semibold">Slug</th>
                            <th className="p-3 text-sm font-semibold">Category</th>
                            <th className="p-3 text-sm font-semibold">SKU</th>
                            <th className="p-3 text-sm font-semibold">Price</th>
                            <th className="p-3 text-sm font-semibold">Stock</th>
                            <th className="p-3 text-sm font-semibold">Discount</th>
                            <th className="p-3 text-sm font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {paginatedProducts.length > 0 ? (
                            paginatedProducts.map((item) => (
                                <tr key={item._id} className="border-t border-slate-100 hover:bg-slate-50/80 transition">
                                    <td className="p-3">
                                        <img
                                            src={item.image || item.imageUrl || item.thumbnail || item.thumbnailUrl}
                                            alt={item.name}
                                            className="w-12 h-12 object-cover rounded-md border border-slate-200 bg-white"
                                        />
                                    </td>
                                    <td className="p-3 font-medium text-slate-800 min-w-[220px]">{item.name}</td>
                                    <td className="p-3 text-slate-600 min-w-[160px]">{item.slug || "N/A"}</td>
                                    <td className="p-3 text-slate-600 capitalize">{item.category || "N/A"}</td>
                                    <td className="p-3 text-slate-600">{item.sku || "N/A"}</td>
                                    <td className="p-3 text-slate-700">₹{item.price}</td>
                                    <td className="p-3 text-slate-700">{item.stock ?? 0}</td>
                                    <td className="p-3 text-slate-700">{item.discount ?? 0}%</td>
                                    <td className="p-3">
                                        <div className="flex flex-wrap gap-2">
                                            <button
                                                type="button"
                                                onClick={() => setSelectedProduct(item)}
                                                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => handleDelete(item._id)}
                                                className="inline-flex items-center justify-center rounded-lg bg-red-600 px-3 py-2 text-sm font-medium text-white hover:bg-red-700"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="9" className="text-center p-6 text-slate-500">
                                    No products found for the selected filters
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4">
                <p className="text-sm text-slate-500">
                    Showing {paginatedProducts.length} of {filteredProducts.length} products
                </p>
                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                        disabled={safeCurrentPage === 1}
                        className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:pointer-events-none disabled:opacity-50"
                    >
                        Previous
                    </button>
                    <span className="text-sm text-slate-600 min-w-[90px] text-center">
                        Page {safeCurrentPage} / {totalPages}
                    </span>
                    <button
                        type="button"
                        onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                        disabled={safeCurrentPage === totalPages}
                        className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:pointer-events-none disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>

            {loading && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
                    <div className="bg-white px-6 py-3 rounded-lg font-medium">Updating inventory...</div>
                </div>
            )}
        </div>
    )
};

export default ProductTable;