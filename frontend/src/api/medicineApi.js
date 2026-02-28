import privateApi from "./privateApi";

export const getAllMedicines = () => privateApi.get("/medicine");

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

// =======================
// SEARCH
// =======================
export const searchMedicineByName = (name) =>
  privateApi.get("/medicine/search", {
    params: { name },
  });

// =======================
// PAGINATION
// =======================
export const getMedicinesWithPagination = (page = 0, size = 10, category) =>
  privateApi.get("/medicine/searchpagination", {
    params: { page, size, category },
  });

// =======================
// STATS
// =======================
export const countMedicines = () => privateApi.get("/medicine/count");

export const countMedStock = () => privateApi.get("/medicine/countstock");

export const countExpireMedicine = () => privateApi.get("/medicine/expiremed");
