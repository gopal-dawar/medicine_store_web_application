import privateApi from "./privateApi";

export const addMedicine = (formData) => {
  return privateApi.post("/medicine", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const updateMedicine = (id, medicine) => {
  return privateApi.put(`/medicine/${id}`, medicine);
};

export const getMedicineById = (id) => {
  return privateApi.get(`/medicine/${id}`);
};

export const getAllMedicines = () => {
  return privateApi.get("/medicine");
};

export const searchMedicineByName = (name) => {
  return privateApi.get(`/medicine/search?name=${name}`);
};

export const deleteMedicine = (id) => {
  return privateApi.delete(`/medicine/${id}`);
};
