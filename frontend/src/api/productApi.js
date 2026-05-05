import { Axios } from "@/constants/contents/MainContent";

const productBase = "/products";

/** Build multipart body for create/update — shared by admin form flows */
export function buildProductFormData(data) {
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
        Array.from(data.thumbnails).forEach((file) =>
          formData.append("thumbnails", file)
        );
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

  return formData;
}


export async function fetchProductsApi() {
  const response = await Axios.get("/user-products/get-products");
  const payload = response?.data;
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.products)) return payload.products;
  if (Array.isArray(payload?.data)) return payload.data;
  if (Array.isArray(payload?.data?.products)) return payload.data.products;
  return [];
}

export async function getBanner() {
  const response = await Axios.get("/user-banners/get-banners");
  const payload = response?.data;

  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.banners)) return payload.banners;
  if (Array.isArray(payload?.products)) return payload.products;
  if (Array.isArray(payload?.data)) return payload.data;
  if (Array.isArray(payload?.data?.banners)) return payload.data.banners;
  if (payload?.banner) return [payload.banner];

  return [];
}

export async function createProductApi(formData) {
  const response = await Axios.post(productBase, formData);
  return response?.data?.product;
}

export async function updateProductApi(id, formData) {
  const response = await Axios.put(`${productBase}/${id}`, formData);
  return response?.data?.product;
}

export async function deleteProductApi(id) {
  await Axios.delete(`${productBase}/${id}`);
  return id;
}
