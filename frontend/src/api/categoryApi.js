import privateApi from "./privateApi";

const BASE_URL = "/categories";

// Get all categories
export const getAllCategories = () => {
  return privateApi.get(BASE_URL);
};

// Get category by ID
export const getCategoryById = (id) => {
  return privateApi.get(`${BASE_URL}/${id}`);
};

// 3️⃣ Get category by name
export const getCategoryByName = (name) => {
  return privateApi.get(`${BASE_URL}/name/${name}`);
};

// 4️⃣ Create new category
export const createCategory = (category) => {
  return privateApi.post(BASE_URL, category);
};

// 5️⃣ Update category
export const updateCategory = (id, category) => {
  return privateApi.put(`${BASE_URL}/${id}`, category);
};

// 6️⃣ Delete category
export const deleteCategory = (id) => {
  return privateApi.delete(`${BASE_URL}/${id}`);
};
