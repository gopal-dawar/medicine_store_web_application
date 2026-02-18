import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addMedicine } from "../../api/medicineApi";
import { getAllCategories } from "../../api/categoryApi";

const AddMedicine = () => {
  const [medicines, setMedicines] = useState({
    name: "",
    brand: "",
    category: null,
    description: "",
    price: 0,
    stock: 0,
    imageUrl: "", // backend will set this
    dosage: "",
    prescriptionRequired: false,
  });

  const [image, setImage] = useState(null); // 👈 NEW
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  // Fetch categories
  useEffect(() => {
    getAllCategories()
      .then((res) => setCategories(res.data))
      .catch((err) => console.error("CATEGORY ERROR:", err));
  }, []);

  // Submit form
  const formhandling = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("name", medicines.name);
      formData.append("brand", medicines.brand);
      formData.append("description", medicines.description);
      formData.append("price", medicines.price);
      formData.append("stock", medicines.stock);
      formData.append("dosage", medicines.dosage);
      formData.append("prescriptionRequired", medicines.prescriptionRequired);
      formData.append("categoryId", medicines.category.id);

      if (image) {
        formData.append("image", image);
      }

      await addMedicine(formData);
      navigate("/dashboard");
    } catch (err) {
      console.error("ADD MEDICINE ERROR:", err.response?.data || err.message);
      alert("Failed to add medicine");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow px-8 py-4 flex justify-between">
        <h2 className="text-2xl font-semibold text-sky-700">
          ➕ Add New Medicine
        </h2>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 border rounded"
        >
          ⬅ Back
        </button>
      </div>

      {/* Form */}
      <div className="p-8">
        <form
          onSubmit={formhandling}
          className="bg-white rounded-lg shadow p-8 max-w-6xl mx-auto"
          encType="multipart/form-data"
        >
          {/* Basic Info */}
          <h3 className="text-lg font-semibold mb-4">Basic Information</h3>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <input
              type="text"
              placeholder="Medicine Name"
              value={medicines.name}
              onChange={(e) =>
                setMedicines({ ...medicines, name: e.target.value })
              }
              className="border px-4 py-2 rounded"
              required
            />

            <input
              type="text"
              placeholder="Company / Brand"
              value={medicines.brand}
              onChange={(e) =>
                setMedicines({ ...medicines, brand: e.target.value })
              }
              className="border px-4 py-2 rounded"
            />
          </div>

          {/* Category */}
          <div className="mb-8">
            <label className="block mb-1 font-medium">Category</label>
            <select
              value={medicines.category?.id || ""}
              onChange={(e) =>
                setMedicines({
                  ...medicines,
                  category: { id: Number(e.target.value) },
                })
              }
              className="border px-4 py-2 rounded w-full"
              required
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Pricing & Stock */}
          <h3 className="text-lg font-semibold mb-4">Pricing & Stock</h3>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <input
              type="number"
              placeholder="Price"
              value={medicines.price}
              onChange={(e) =>
                setMedicines({
                  ...medicines,
                  price: Number(e.target.value),
                })
              }
              className="border px-4 py-2 rounded"
              required
            />

            <input
              type="number"
              placeholder="Stock"
              value={medicines.stock}
              onChange={(e) =>
                setMedicines({
                  ...medicines,
                  stock: Number(e.target.value),
                })
              }
              className="border px-4 py-2 rounded"
              required
            />

            <input
              type="text"
              placeholder="Dosage (e.g. 500mg)"
              value={medicines.dosage}
              onChange={(e) =>
                setMedicines({ ...medicines, dosage: e.target.value })
              }
              className="border px-4 py-2 rounded"
            />
          </div>

          {/* Description */}
          <textarea
            rows="4"
            placeholder="Description"
            value={medicines.description}
            onChange={(e) =>
              setMedicines({
                ...medicines,
                description: e.target.value,
              })
            }
            className="border w-full px-4 py-2 rounded mb-8"
            required
          />

          {/* Image */}
          <div className="mb-8">
            <label className="block mb-1 font-medium">Medicine Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="border px-4 py-2 rounded w-full"
              required
            />
          </div>

          {/* Prescription */}
          <div className="mb-8 flex items-center gap-3">
            <input
              type="checkbox"
              checked={medicines.prescriptionRequired}
              onChange={(e) =>
                setMedicines({
                  ...medicines,
                  prescriptionRequired: e.target.checked,
                })
              }
            />
            <label className="font-medium">Prescription Required</label>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-6 py-2 border rounded"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-2 bg-sky-600 text-white rounded"
            >
              Save Medicine
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMedicine;
