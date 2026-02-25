import privateApi from "./privateApi";

// add medicine
export const addMedicine = (formData) => {
  return privateApi.post("/medicine", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// update medicine
export const updateMedicine = (id, medicines) => {
  return privateApi.put(`/medicine/${id}`, medicines, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const getMedicineById = (id) => {
  return privateApi.get(`/medicine/${id}`);
};

export const getAllMedicines = () => {
  return privateApi.get("/medicine");
};

// search medicine by name
export const searchMedicineByName = (name) => {
  return privateApi.get(`/medicine/search?name=${name}`);
};

// delete medicine
export const deleteMedicine = (id) => {
  return privateApi.delete(`/medicine/${id}`);
};

// count total medicine
export const countmedicine = () => {
  return privateApi.get("/medicine/count");
};

// count medicine stock
export const countMedstock = () => {
  return privateApi.get("/medicine/countstock");
};

// count expire medicine
export const countExpireMedicine = () => {
  return privateApi.get("/medicine/expiremed");
};

// count expire medicine
export const searchpagination = (page, size) => {
  return privateApi.get(`/medicine/searchpagination?page=${page}&size=${size}`);
};
// ============================================
// category apis
// ============================================
export const getAllCategories = () => {
  return privateApi.get("/categories");
};

export const getCategoryById = (id) => {
  return privateApi.get(`/categories/${id}`);
};

export const getCategoryByName = (name) => {
  return privateApi.get(`/categories/name/${name}`);
};

export const createCategory = (category) => {
  return privateApi.post("/categories", category);
};

export const updateCategory = (id, category) => {
  return privateApi.put(`/categories/${id}`, category);
};

export const deleteCategory = (id) => {
  return privateApi.delete(`/categories/${id}`);
};

// ============================
//  cart api's
export const addToCartitem = (userId, medicineId, quantity = 1) => {
  return privateApi.post("/cart/add", null, {
    params: {
      userId,
      medicineId,
      quantity,
    },
  });
};

export const getCartItem = (userId) => {
  return privateApi.get(`/cart/user/${userId}`);
};

export const removeCartItem = (cartId) => {
  return privateApi.delete(`/cart/remove/${cartId}`);
};

export const cartitemcount = () => {
  return privateApi.get(`/cart/count`);
};
