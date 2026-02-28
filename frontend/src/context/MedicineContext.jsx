import { createContext, useEffect, useState } from "react";
import {
  addMedicine,
  updateMedicine,
  deleteMedicine,
  searchMedicineByName,
  getMedicinesWithPagination,
} from "../api/medicineApi";

export const MedicineContext = createContext();

export const MedicineProvider = ({ children }) => {
  
  const [medicines, setMedicines] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState(null);

  const [page, setPage] = useState(0);
  const [size] = useState(8);
  const [totalPages, setTotalPages] = useState(0);

  const [search, setSearch] = useState("");

  const fetchMedicines = async () => {
    setLoading(true);
    try {
      if (search.trim()) {
        const res = await searchMedicineByName(search);
        setMedicines(res.data);
        setTotalPages(1);
      } else {
        const res = await getMedicinesWithPagination(page, size, category);
        setMedicines(res.data.content);
        setTotalPages(res.data.totalPages);
      }
    } catch (err) {
      setError("Failed to load medicines");
    } finally {
      setLoading(false);
    }
  };
  // CRUD
  const addNewMedicine = async (data) => {
    await addMedicine(data);
    fetchMedicines();
  };

  const updateExistingMedicine = async (id, data) => {
    await updateMedicine(id, data);
    fetchMedicines();
  };

  const removeMedicine = async (id) => {
    await deleteMedicine(id);
    fetchMedicines();
  };

  useEffect(() => {
    fetchMedicines();
  }, [page, search, category]);

  return (
    <MedicineContext.Provider
      value={{
        medicines,
        loading,
        error,

        // pagination
        page,
        totalPages,
        setPage,

        // search
        search,
        setSearch,
        category,
        setCategory,

        // actions
        fetchMedicines,
        addNewMedicine,
        updateExistingMedicine,
        removeMedicine,
      }}
    >
      {children}
    </MedicineContext.Provider>
  );
};
