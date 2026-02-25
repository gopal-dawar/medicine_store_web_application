import React, { useEffect, useState } from "react";
import {
  countExpireMedicine,
  countmedicine,
  countMedstock,
} from "../../../api/medicineApi";
import { useNavigate } from "react-router-dom";

const DashBoardCard = () => {
  const [countMedicine, setCountMedicine] = useState(0);
  const [countstock, setCountstock] = useState(0);
  const [countExpireMed, setCountExpireMed] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const countmed = async () => {
      const re1 = await countmedicine();
      setCountMedicine(re1.data);

      const re2 = await countMedstock();
      setCountstock(re2.data.count);

      const re3 = await countExpireMedicine();
      setCountExpireMed(re3.data.count);
    };
    countmed();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <div
        onClick={() => navigate("/dashboard/medicines")}
        className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg hover:scale-[1.02] transition"
      >
        <p className="text-sm opacity-80">Total Medicines</p>
        <h2 className="text-4xl font-bold mt-2">{countMedicine}</h2>
      </div>

      <div
        onClick={() => navigate("/dashboard/lowstock")}
        className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white p-6 rounded-xl shadow-lg hover:scale-[1.02] transition"
      >
        <p className="text-sm opacity-80">Low Stock</p>
        <h2 className="text-4xl font-bold mt-2">{countstock}</h2>
      </div>

      <div
        onClick={() => navigate("/dashboard/expiremed")}
        className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6 rounded-xl shadow-lg hover:scale-[1.02] transition"
      >
        <p className="text-sm opacity-80">Expired</p>
        <h2 className="text-4xl font-bold mt-2">{countExpireMed}</h2>
      </div>
    </div>
  );
};

export default DashBoardCard;
