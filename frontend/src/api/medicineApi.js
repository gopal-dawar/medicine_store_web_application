import privateApi from "./privateApi";

export const getMedicines = (params = {}) =>
  privateApi.get("/medicine", {
    params,
  });

export const getMedicineById = (id) => privateApi.get(`/medicine/${id}`);

export const addMedicine = (formData) =>
  privateApi.post("/medicine", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const updateMedicine = (id, formData) =>
  privateApi.put(`/medicine/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const deleteMedicine = (id) => privateApi.delete(`/medicine/${id}`);
