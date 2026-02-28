import privateApi from "./privateApi";

export const getAllCategories = () => privateApi.get("/categories");
export const getCategoryById = (id) => privateApi.get(`/categories/${id}`);
export const getCategoryByName = (name) =>
  privateApi.get(`/categories/name/${name}`);

export const createCategory = (category) =>
  privateApi.post("/categories", category);

export const updateCategory = (id, category) =>
  privateApi.put(`/categories/${id}`, category);

export const deleteCategory = (id) =>
  privateApi.delete(`/categories/${id}`);