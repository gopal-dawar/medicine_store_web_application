import { createContext, useEffect, useState } from "react";
import { getAllMedicines } from "../api/medicineApi";

export const MedicineContext = createContext();

export const MedicineProvider = ({ children }) => {
  const [medicine, setMedicine] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        const res = await getAllMedicines();
        setMedicine(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load medicines");
      } finally {
        setLoading(false);
      }
    };

    fetchMedicines();
  }, []);

  return (
    <MedicineContext.Provider
      value={{
        medicine,
        loading,
        error,
      }}
    >
      {children}
    </MedicineContext.Provider>
  );
};
