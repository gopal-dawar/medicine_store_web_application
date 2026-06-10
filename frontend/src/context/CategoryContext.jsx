import { createContext, useEffect, useState } from "react";
import {
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../api/categoryApi";

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [_loading, setLoading] = useState(true);
  const [_error, setError] = useState(null);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await getAllCategories();
      setCategories(res.data);
    } catch (err) {
      console.error("Error fetching categories:", err);
      setError(err.response?.data?.message || err.message || "Failed to load categories");
      setCategories([]);
    } finally {
      setLoading(false);
    }
  };

  const addCategory = async (category) => {
    try {
      await createCategory(category);
      fetchCategories();
    } catch (err) {
      console.error("Error adding category:", err);
      throw err;
    }
  };

  const editCategory = async (id, category) => {
    try {
      await updateCategory(id, category);
      fetchCategories();
    } catch (err) {
      console.error("Error updating category:", err);
      throw err;
    }
  };

  const removeCategory = async (id) => {
    try {
      await deleteCategory(id);
      setCategories((prev) => prev.filter((c) => c.id !== id));
    } catch (err) {
      console.error("Error removing category:", err);
      throw err;
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <CategoryContext.Provider
      value={{
        categories,
        addCategory,
        editCategory,
        removeCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
