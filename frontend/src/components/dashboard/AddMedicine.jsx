import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  addMedicine,
  searchMedicineByName,
  updateMedicine,
} from "../../api/medicineApi";
import { getAllCategories } from "../../api/categoryApi";

const initialMedicineState = {
  name: "",
  brand: "",
  manufacturer: "",
  batchNumber: "",
  manufactureDate: "",
  expiryDate: "",
  category: null,
  description: "",
  price: 0,
  stock: 0,
  imageUrl: "",
  dosage: "",
};

const AddMedicine = () => {
  const [medicines, setMedicines] = useState(initialMedicineState);

  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [image, setImage] = useState(null);
  const [categories, setCategories] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedMedicineId, setSelectedMedicineId] = useState(null);

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
      formData.append("manufacturer", medicines.manufacturer);
      formData.append("batchNumber", medicines.batchNumber);
      if (
        medicines.manufactureDate &&
        medicines.manufactureDate.trim() !== ""
      ) {
        formData.append("manufactureDate", medicines.manufactureDate);
      }

      if (medicines.expiryDate && medicines.expiryDate.trim() !== "") {
        formData.append("expiryDate", medicines.expiryDate);
      }
      formData.append("description", medicines.description);
      formData.append("price", medicines.price);
      formData.append("stock", medicines.stock);
      formData.append("dosage", medicines.dosage);

      if (!medicines.category) {
        alert("Please select a category");
        return;
      }

      formData.append("categoryId", medicines.category.id);

      if (image) {
        formData.append("image", image);
      }

      if (selectedMedicineId) {
        await updateMedicine(selectedMedicineId, formData);

        alert("Medicine updated successfully");
      } else {
        await addMedicine(formData);
        alert("Medicine added successfully");
      }

      navigate("/dashboard");
    } catch (err) {
      console.error("ADD MEDICINE ERROR:", err.response?.data || err.message);
      alert("Failed to add medicine");
    }
  };

  const handleNameChange = async (e) => {
    const value = e.target.value;

    if (value.trim() === "") {
      setMedicines((prev) => ({
        ...prev,
        name: "",
      }));
      setSelectedMedicineId(null);
      setIsUpdateMode(false);
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }
    // Normal typing
    setMedicines((prev) => ({
      ...prev,
      name: value,
    }));

    // Switch back to ADD mode
    setSelectedMedicineId(null);
    setIsUpdateMode(false);

    if (value.length < 2) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    try {
      const res = await searchMedicineByName(value);
      const list = Array.isArray(res.data) ? res.data : [];
      setSuggestions(list);
      setShowSuggestions(list.length > 0);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSelectMedicine = (med) => {
    setMedicines({
      name: med.name || "",
      brand: med.brand || "",
      manufacturer: med.manufacturer || "",
      description: med.description || "",
      dosage: med.dosage || "",
      price: med.price ?? "",
      stock: med.stock ?? "",
      batchNumber: med.batchNumber || "",
      manufactureDate: med.manufactureDate
        ? med.manufactureDate.substring(0, 10)
        : "",
      expiryDate: med.expiryDate ? med.expiryDate.substring(0, 10) : "",
      imageUrl: med.imageUrl || "",
      prescriptionRequired: med.prescriptionRequired ?? false,
      active: med.active ?? true,
      category: med.category ? { id: med.category.id } : { id: "" },
    });

    setSelectedMedicineId(med.id);
    setIsUpdateMode(true);
    setShowSuggestions(false);
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
            <div className="relative">
              <input
                type="text"
                placeholder="Medicine Name"
                value={medicines.name}
                onChange={handleNameChange}
                className="border px-4 py-2 rounded w-full"
                required
              />

              {showSuggestions && suggestions.length > 0 && (
                <ul className="absolute z-20 bg-white border w-full rounded shadow max-h-48 overflow-auto">
                  {suggestions.map((med) => (
                    <li
                      key={med.id}
                      onClick={() => handleSelectMedicine(med)}
                      className="px-4 py-2 hover:bg-sky-100 cursor-pointer"
                    >
                      <strong>{med.name}</strong>
                      <span className="text-sm text-gray-500">
                        {" "}
                        ({med.brand})
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
            {/* Price */}
            <div>
              <label className="block mb-1 font-medium">Price</label>
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
                className="border px-4 py-2 rounded w-full"
                required
              />
            </div>

            {/* Quantity */}
            <div>
              <label className="block mb-1 font-medium">Quantity</label>
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
                className="border px-4 py-2 rounded w-full"
                required
              />
            </div>

            {/* Dosage */}
            <div>
              <label className="block mb-1 font-medium">Dosage</label>
              <input
                type="text"
                placeholder="Dosage (e.g. 500mg)"
                value={medicines.dosage}
                onChange={(e) =>
                  setMedicines({ ...medicines, dosage: e.target.value })
                }
                className="border px-4 py-2 rounded w-full"
              />
            </div>
          </div>

          {/* Manufacturer Details */}
          <h3 className="text-lg font-semibold mb-4">Manufacturer Details</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <input
              type="text"
              placeholder="Manufacturer Name"
              value={medicines.manufacturer}
              onChange={(e) =>
                setMedicines({ ...medicines, manufacturer: e.target.value })
              }
              className="border px-4 py-2 rounded"
            />

            <input
              type="text"
              placeholder="Batch Number"
              value={medicines.batchNumber}
              onChange={(e) =>
                setMedicines({ ...medicines, batchNumber: e.target.value })
              }
              className="border px-4 py-2 rounded"
            />
          </div>

          {/* Manufacturer Expirery date */}
          <h3 className="text-lg font-semibold mb-4">Dates</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block mb-1 font-medium">Manufacture Date</label>
              <input
                type="date"
                value={medicines.manufactureDate}
                onChange={(e) =>
                  setMedicines({
                    ...medicines,
                    manufactureDate: e.target.value,
                  })
                }
                className="border px-4 py-2 rounded w-full"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">
                Expiry Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                value={medicines.expiryDate}
                onChange={(e) =>
                  setMedicines({ ...medicines, expiryDate: e.target.value })
                }
                className="border px-4 py-2 rounded w-full"
                required
              />
            </div>
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
              required={!selectedMedicineId}
            />
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
              className={`px-6 py-2 rounded text-white ${
                isUpdateMode ? "bg-green-600" : "bg-sky-600"
              }`}
            >
              {isUpdateMode ? "Update Medicine" : "Add Medicine"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMedicine;
