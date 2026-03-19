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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0);

  const [category, setCategory] = useState(null);
  const [search, setSearch] = useState("");

  const [page, setPage] = useState(0);
  const [size] = useState(8);
  const [totalPages, setTotalPages] = useState(0);

  const fetchMedicines = async () => {
    setLoading(true);
    setError(null);

    try {
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
      console.error(err);
      setError("Failed to load medicines");
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
      console.error(err);
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
      return res; // ✅ ADD THIS
    } catch (err) {
      setError("Failed to add medicine");
      throw err;
    }
  };

  const updateExistingMedicine = async (id, data) => {
    try {
      await updateMedicine(id, data);
      fetchMedicines();
    } catch (err) {
      setError("Failed to update medicine");
    }
  };

  const removeMedicine = async (id) => {
    try {
      await deleteMedicine(id);
      fetchMedicines();
    } catch (err) {
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
