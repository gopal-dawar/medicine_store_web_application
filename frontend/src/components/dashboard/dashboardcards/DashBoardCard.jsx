import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MedicineContext } from "../../../context/MedicineContext";
import { FiPackage } from "react-icons/fi";
import { FaExclamationTriangle } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";

const DashBoardCard = () => {
  const { count, medicines } = useContext(MedicineContext);
  const navigate = useNavigate();

  const [stockcount, setStockcount] = useState(0);
  const [expiredCount, setExpiredCount] = useState(0);

  useEffect(() => {
    if (!Array.isArray(medicines) || medicines.length === 0) {
      setStockcount(0);
      setExpiredCount(0);
      return;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let low = 0;
    let expired = 0;

    medicines.forEach((med) => {
      if (typeof med.stock === "number" && med.stock > 0 && med.stock <= 20) {
        low++;
      }

      if (med.expiryDate) {
        const expiry = new Date(med.expiryDate);

        if (!isNaN(expiry)) {
          expiry.setHours(0, 0, 0, 0);
          if (expiry < today) {
            expired++;
          }
        }
      }
    });

    setStockcount(low);
    setExpiredCount(expired);
  }, [medicines]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      {/* Total Medicines */}
      <div
        onClick={() => navigate("/dashboard/medicines")}
        className="bg-slate-800 text-slate-100 p-6 rounded-xl shadow
                   hover:bg-slate-700 hover:scale-[1.02] transition cursor-pointer flex justify-between items-center"
      >
        <div>
          <p className="text-sm text-slate-400">Total Medicines</p>
          <h2 className="text-4xl font-bold mt-2">{count || 0}</h2>
        </div>
        <FiPackage size={26} className="text-blue-400" />
      </div>

      {/* Low Stock */}
      <div
        onClick={() => navigate("/dashboard/lowstock")}
        className="bg-slate-800 text-slate-100 p-6 rounded-xl shadow
                   hover:bg-slate-700 hover:scale-[1.02] transition cursor-pointer flex justify-between items-center"
      >
        <div>
          <p className="text-sm text-yellow-400">Low Stock</p>
          <h2
            className={`text-4xl font-bold mt-2 ${
              stockcount === 0 ? "text-green-400" : ""
            }`}
          >
            {stockcount}
          </h2>
        </div>
        <FaExclamationTriangle size={26} className="text-yellow-400" />
      </div>

      {/* Expired */}
      <div
        onClick={() => navigate("/dashboard/expiremed")}
        className="bg-slate-800 text-slate-100 p-6 rounded-xl shadow
                   hover:bg-slate-700 hover:scale-[1.02] transition cursor-pointer flex justify-between items-center"
      >
        <div>
          <p className="text-sm text-red-400">Expired</p>
          <h2
            className={`text-4xl font-bold mt-2 ${
              expiredCount === 0 ? "text-green-400" : ""
            }`}
          >
            {expiredCount}
          </h2>
        </div>
        <MdErrorOutline size={26} className="text-red-400" />
      </div>
    </div>
  );
};

export default DashBoardCard;
