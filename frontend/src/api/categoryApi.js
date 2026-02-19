import privateApi from "./privateApi";

const BASE_URL = "/categories";

export const getAllCategories = () => {
  return privateApi.get(BASE_URL);
};

export const getCategoryById = (id) => {
  return privateApi.get(`${BASE_URL}/${id}`);
};

export const getCategoryByName = (name) => {
  return privateApi.get(`${BASE_URL}/name/${name}`);
};

export const createCategory = (category) => {
  return privateApi.post(BASE_URL, category);
};

export const updateCategory = (id, category) => {
  return privateApi.put(`${BASE_URL}/${id}`, category);
};

export const deleteCategory = (id) => {
  return privateApi.delete(`${BASE_URL}/${id}`);
};
