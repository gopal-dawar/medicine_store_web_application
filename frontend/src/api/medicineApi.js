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
