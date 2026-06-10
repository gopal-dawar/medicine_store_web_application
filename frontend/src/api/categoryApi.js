import privateApi from "./privateApi";
import publicApi from "./publicApi";

// Public endpoints - no authentication required
export const getAllCategories = () => publicApi.get("/api/categories");
export const getCategoryById = (id) => publicApi.get(`/api/categories/${id}`);
export const getCategoryByName = (name) =>
  publicApi.get(`/api/categories/name/${name}`);

// Admin-only endpoints - require authentication
export const createCategory = (category) =>
  privateApi.post("/api/categories", category);

export const updateCategory = (id, category) =>
  privateApi.put(`/api/categories/${id}`, category);

export const deleteCategory = (id) => privateApi.delete(`/api/categories/${id}`);
