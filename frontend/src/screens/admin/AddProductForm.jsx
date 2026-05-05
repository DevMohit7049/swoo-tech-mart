import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import {
    createProduct,
    updateProductSuccess,
    setProductLoading,
    setProductError,
} from "@/store/products/productSlice";
import {
    buildProductFormData,
    updateProductApi,
} from "@/api/productApi";
import { useEffect } from "react";


const AddProductForm = ({ selectedProduct, setSelectedProduct }) => {

   const dispatch = useDispatch();
   const { loading, error, products } = useSelector((state) => state.product);

   const hasFile = (value) => value && value.length > 0;

   const productSchema = yup.object({
      name: yup.string().required("Product name is required"),
      slug: yup
         .string()
         .trim()
         .matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be lowercase and use hyphens only")
         .required("Slug is required"),
      price: yup.number().transform((value, originalValue) => originalValue === "" ? undefined : value).required("Price is required").positive("Price must be greater than 0").typeError("Price must be a number"),
      description: yup.string().required("Description is required"),
      discount: yup.number().transform((value, originalValue) => originalValue === "" ? undefined : value).min(0).typeError("Discount must be a number").nullable()
         .notRequired(),
      category: yup.string().required(),
      stock: yup.number().required("Stock is required").transform(((value, originalValue) => originalValue === "" ? undefined : value)).min(0).positive("Price must be greater than 0").typeError("Price must be a number"),
      sku: yup.string().required(),
      imageUrl: yup
         .string()
         .trim()
         .nullable()
         .notRequired()
         .transform((value) => value || "")
         .test("valid-image-url", "Image URL must be a valid URL", (value) => {
            if (!value) return true;
            return /^https?:\/\/.+/i.test(value);
         }),
      thumbnailUrl: yup
         .string()
         .trim()
         .nullable()
         .notRequired()
         .transform((value) => value || "")
         .test("valid-thumbnail-url", "Thumbnail URL must be a valid URL", (value) => {
            if (!value) return true;
            return /^https?:\/\/.+/i.test(value);
         }),
      thumbnailUrls: yup
         .string()
         .nullable()
         .notRequired()
         .transform((value) => value || ""),

      image: yup.mixed().test(
         "image-or-url-required",
         "Provide product image file or image URL",
         function (value) {
            if (selectedProduct) return true;
            return hasFile(value) || Boolean(this.parent?.imageUrl?.trim());
         }
      ),
      thumbnail: yup.mixed().test(
         "thumbnail-or-url-required",
         "Provide thumbnail file or thumbnail URL",
         function (value) {
            if (selectedProduct) return true;
            return (
               hasFile(value) ||
               hasFile(this.parent?.thumbnails) ||
               Boolean(this.parent?.thumbnailUrl?.trim()) ||
               Boolean(this.parent?.thumbnailUrls?.trim())
            );
         }
      ),
      thumbnails: yup.mixed().test(
         "thumbnails-or-url-required",
         "Provide thumbnail files or thumbnail URLs",
         function (value) {
            if (selectedProduct) return true;
            return (
               hasFile(value) ||
               hasFile(this.parent?.thumbnail) ||
               Boolean(this.parent?.thumbnailUrl?.trim()) ||
               Boolean(this.parent?.thumbnailUrls?.trim())
            );
         }
      )
   });

   const { register, handleSubmit, reset, formState: { errors, isSubmitting }, } = useForm({ resolver: yupResolver(productSchema) });


   useEffect(() => {
      if (selectedProduct) {
         reset({
            name: selectedProduct.name,
            slug: selectedProduct.slug,
            price: selectedProduct.price,
            description: selectedProduct.description,
            category: selectedProduct.category,
            stock: selectedProduct.stock,
            sku: selectedProduct.sku,
            imageUrl: selectedProduct.imageUrl || selectedProduct.image || "",
            thumbnailUrl: selectedProduct.thumbnailUrl || selectedProduct.thumbnailImage || selectedProduct.thumbnail || "",
            thumbnailUrls: Array.isArray(selectedProduct.images) ? selectedProduct.images.join(", ") : "",
         })
      }
   }, [selectedProduct, reset]);

   const onSubmit = async (data) => {
      dispatch(setProductLoading(true));
      try {
         if (selectedProduct) {
            const formData = buildProductFormData(data);
            const product = await updateProductApi(selectedProduct._id, formData);
            dispatch(updateProductSuccess(product));
            setSelectedProduct(null);
            reset();
         } else {
            const formData = buildProductFormData(data);
            await dispatch(createProduct(formData)).unwrap();
            reset();
         }
      } catch (e) {
         dispatch(
            setProductError(
               e?.response?.data || e?.message || "Failed to save product"
            )
         );
      } finally {
         dispatch(setProductLoading(false));
      }
   };

   return (
      <div className="bg-white border border-slate-200 rounded-2xl p-5 md:p-6 shadow-sm">
         <div className="flex items-start justify-between gap-3 mb-5">
            <div>
               <h2 className="text-xl font-bold text-slate-900">{selectedProduct ? "Update Product" : "Add New Product"}</h2>
               <p className="text-sm text-slate-500">Fill product details and publish to catalog.</p>
            </div>
            {selectedProduct && (
               <button
                  type="button"
                  onClick={() => {
                     setSelectedProduct(null);
                     reset();
                  }}
                  className="text-xs px-3 py-1.5 rounded-md border border-slate-300 hover:bg-slate-50"
               >
                  Cancel edit
               </button>
            )}
         </div>

         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
               <div>
                  <label className="text-sm font-medium text-slate-700 mb-1.5 block">Product Name</label>
                  <input
                     type="text"
                     name="name"
                     placeholder="Enter product name"
                     className="w-full h-11 px-4 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
                     {...register("name")}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
               </div>

               <div>
                  <label className="text-sm font-medium text-slate-700 mb-1.5 block">Slug</label>
                  <input
                     type="text"
                     name="slug"
                     placeholder="example-product-slug"
                     className="w-full h-11 px-4 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
                     {...register("slug")}
                  />
                  {errors.slug && <p className="text-red-500 text-xs mt-1">{errors.slug.message}</p>}
               </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
               <div>
                  <label className="text-sm font-medium text-slate-700 mb-1.5 block">Price</label>
                  <input
                     type="number"
                     name="price"
                     placeholder="Enter price"
                     className="w-full h-11 px-4 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
                     {...register("price")}
                  />
                  {errors.price && <p className="text-red-500 text-xs mt-1">{errors.price.message}</p>}
               </div>
            </div>

            <div>
               <label className="text-sm font-medium text-slate-700 mb-1.5 block">Description</label>
               <textarea
                  name="description"
                  placeholder="Write product description"
                  className="w-full min-h-[120px] px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
                  {...register("description")}
               />
               {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
            </div>

            <div className="grid md:grid-cols-2 gap-4">
               <div>
                  <label className="text-sm font-medium text-slate-700 mb-1.5 block">Discount</label>
                  <input
                     type="number"
                     name="discount"
                     placeholder="Optional discount"
                     className="w-full h-11 px-4 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
                     {...register("discount")}
                  />
                  {errors.discount && <p className="text-red-500 text-xs mt-1">{errors.discount.message}</p>}
               </div>

               <div>
                  <label className="text-sm font-medium text-slate-700 mb-1.5 block">Category</label>
                  <input
                     type="text"
                     name="category"
                     list="category-options"
                     placeholder="Type category (e.g. laptop, cameras, custom)"
                     className="w-full h-11 px-4 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary/40 bg-white"
                     {...register("category")}
                  />
                  <datalist id="category-options">
                     {Array.from(
                        new Set(
                           (products || [])
                              .map((item) => item?.category)
                              .filter(Boolean)
                        )
                     ).map((cat) => (
                        <option key={cat} value={cat} />
                     ))}
                     <option value="laptop" />
                     <option value="mobile" />
                     <option value="pc" />
                     <option value="gaming" />
                     <option value="cameras" />
                     <option value="sound" />
                  </datalist>
                  {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category.message}</p>}
               </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
               <div>
                  <label className="text-sm font-medium text-slate-700 mb-1.5 block">Stock</label>
                  <input
                     type="number"
                     name="stock"
                     placeholder="Enter stock"
                     className="w-full h-11 px-4 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
                     {...register("stock")}
                  />
                  {errors.stock && <p className="text-red-500 text-xs mt-1">{errors.stock.message}</p>}
               </div>

               <div>
                  <label className="text-sm font-medium text-slate-700 mb-1.5 block">SKU</label>
                  <input
                     type="text"
                     name="sku"
                     placeholder="Enter SKU code"
                     className="w-full h-11 px-4 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
                     {...register("sku")}
                  />
                  {errors.sku && <p className="text-red-500 text-xs mt-1">{errors.sku.message}</p>}
               </div>

               <div>
                  <label className="text-sm font-medium text-slate-700 mb-1.5 block">Product Image</label>
                  <input
                     type="file"
                     name="image"
                     className="w-full h-11 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
                     {...register("image")}
                  />
                  {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image.message}</p>}
               </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
               <div>
                  <label className="text-sm font-medium text-slate-700 mb-1.5 block">Product Image URL</label>
                  <input
                     type="text"
                     name="imageUrl"
                     placeholder="https://example.com/product-image.jpg"
                     className="w-full h-11 px-4 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
                     {...register("imageUrl")}
                  />
                  {errors.imageUrl && <p className="text-red-500 text-xs mt-1">{errors.imageUrl.message}</p>}
               </div>

               <div>
                  <label className="text-sm font-medium text-slate-700 mb-1.5 block">Thumbnail Image</label>
                  <input
                     type="file"
                     name="thumbnail"
                     className="w-full h-11 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
                     {...register("thumbnail")}
                  />
                  {errors.thumbnail && <p className="text-red-500 text-xs mt-1">{errors.thumbnail.message}</p>}
               </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
               <div>
                  <label className="text-sm font-medium text-slate-700 mb-1.5 block">Multiple Thumbnail Files</label>
                  <input
                     type="file"
                     name="thumbnails"
                     multiple
                     className="w-full h-11 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
                     {...register("thumbnails")}
                  />
                  {errors.thumbnails && <p className="text-red-500 text-xs mt-1">{errors.thumbnails.message}</p>}
               </div>

               <div>
                  <label className="text-sm font-medium text-slate-700 mb-1.5 block">Thumbnail Image URL</label>
                  <input
                     type="text"
                     name="thumbnailUrl"
                     placeholder="https://example.com/product-thumb.jpg"
                     className="w-full h-11 px-4 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
                     {...register("thumbnailUrl")}
                  />
                  {errors.thumbnailUrl && <p className="text-red-500 text-xs mt-1">{errors.thumbnailUrl.message}</p>}
               </div>
            </div>

            <div className="grid md:grid-cols-1 gap-4">
               <div>
                  <label className="text-sm font-medium text-slate-700 mb-1.5 block">Multiple Thumbnail URLs</label>
                  <textarea
                     name="thumbnailUrls"
                     placeholder="https://img1.jpg, https://img2.jpg (comma separated)"
                     className="w-full min-h-[90px] px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
                     {...register("thumbnailUrls")}
                  />
               </div>
            </div>


            <div className="flex flex-wrap gap-3 pt-1">
               <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-brand-primary hover:bg-brand-primary-dark text-white min-w-[150px]"
               >
                  {isSubmitting ? "Saving..." : selectedProduct ? "Update Product" : "Add Product"}
               </button>
            </div>
         </form>

         <div className="mt-5">
            <input
               type="text"
               placeholder="Search products..."
               className="w-full h-11 px-4 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
            />
         </div>

         {loading && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
               <div className="bg-white px-6 py-3 rounded-lg font-medium">Loading...</div>
            </div>
         )}
      </div>
   )
}
export default AddProductForm;