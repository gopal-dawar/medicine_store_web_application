import privateApi from "./privateApi";
import publicApi from "./publicApi";

// Public endpoints - no authentication required
export const getMedicines = (params = {}) =>
  publicApi.get("/api/medicine", {
    params,
  });

export const getMedicineById = (id) => publicApi.get(`/api/medicine/${id}`);

// Admin-only endpoints - require authentication
export const addMedicine = (formData) =>
  privateApi.post("/api/medicine", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const updateMedicine = (id, formData) =>
  privateApi.put(`/api/medicine/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const deleteMedicine = (id) => privateApi.delete(`/api/medicine/${id}`);
