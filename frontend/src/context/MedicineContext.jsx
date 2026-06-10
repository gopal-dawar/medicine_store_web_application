import { createContext, useEffect, useState } from "react";
import {
  addMedicine,
  updateMedicine,
  deleteMedicine,
  getMedicines,
} from "../api/medicineApi";

export const MedicineContext = createContext();

export const MedicineProvider = ({ children }) => {
  const [medicines, setMedicines] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [category, setCategory] = useState(null);
  const [search, setSearch] = useState("");

  const [page, setPage] = useState(0);
  const [size] = useState(8);
  const [totalPages, setTotalPages] = useState(0);

  const fetchMedicines = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await getMedicines({
        page,
        size,
        name: search || undefined,
        category: category || undefined,
      });
      setMedicines(res.data.content);
      setTotalPages(res.data.totalPages);
      setCount(res.data.totalElements);
    } catch (err) {
      console.error("Error fetching medicines:", err);
      setError(err.message || "Failed to load medicines");
      setMedicines([]);
    } finally {
      setLoading(false);
    }
  };

  const searchSuggestions = async (name) => {
    try {
      const res = await getMedicines({
        keyword: name,
        size: 5,
      });

      return res.data.content || [];
    } catch (err) {
      console.error("Error fetching search suggestions:", err);
      return [];
    }
  };

  useEffect(() => {
    setPage(0);
  }, [search, category]);

  useEffect(() => {
    fetchMedicines();
  }, [page, search, category]);

  const addNewMedicine = async (data) => {
    try {
      const res = await addMedicine(data);
      fetchMedicines();
      return res;
    } catch (err) {
      console.error("Error adding medicine:", err);
      setError("Failed to add medicine");
      throw err;
    }
  };

  const updateExistingMedicine = async (id, data) => {
    try {
      await updateMedicine(id, data);
      fetchMedicines();
    } catch (err) {
      console.error("Error updating medicine:", err);
      setError("Failed to update medicine");
    }
  };

  const removeMedicine = async (id) => {
    try {
      await deleteMedicine(id);
      fetchMedicines();
    } catch (err) {
      console.error("Error deleting medicine:", err);
      setError("Failed to delete medicine");
    }
  };

  return (
    <MedicineContext.Provider
      value={{
        medicines,
        count,
        loading,
        error,
        page,
        totalPages,
        setPage,

        search,
        setSearch,

        category,
        setCategory,

        fetchMedicines,
        addNewMedicine,
        updateExistingMedicine,
        removeMedicine,
        searchSuggestions,
      }}
    >
      {children}
    </MedicineContext.Provider>
  );
};
