import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { saveAddress } from "../../api/addressApi";

const AddressForm = ({ userId }) => {
  const [formData, setFormData] = useState({
    addressLine: "",
    village: "",
    city: "",
    state: "",
    pincode: "",
    latitude: "",
    longitude: "",
    isDefault: false,
  });

  const handleSubmit = async () => {
    try {
      await saveAddress(userId, formData);
      alert("Address saved successfully");
    } catch (err) {
      alert(err.response?.data?.message || "Error saving address");
    }
  };

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`,
        );
        const data = await res.json();
        const addr = data.address;

        setFormData({
          addressLine: data.display_name || "",
          village: addr.suburb || addr.village || "",
          city: addr.city || addr.town || "",
          state: addr.state || "",
          pincode: addr.postcode || "",
          latitude: lat,
          longitude: lng,
          isDefault: formData.isDefault,
        });
      },
      () => alert("Location permission denied"),
    );
  };

  return (
    <div className="p-5 bg-white rounded shadow-lg border">
      <div className="flex px-2 mb-3  justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800">Add Address</h2>
        <CgClose size={20} />
      </div>

      <div className="grid gap-3">
        <input
          name="addressLine"
          placeholder="Address Line"
          value={formData.addressLine}
          onChange={(e) =>
            setFormData({ ...formData, addressLine: e.target.value })
          }
          className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          name="village"
          placeholder="Area / Village"
          value={formData.village}
          onChange={(e) =>
            setFormData({ ...formData, village: e.target.value })
          }
          className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          name="state"
          placeholder="State"
          value={formData.state}
          onChange={(e) => setFormData({ ...formData, state: e.target.value })}
          className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          name="pincode"
          placeholder="Pincode"
          value={formData.pincode}
          onChange={(e) =>
            setFormData({ ...formData, pincode: e.target.value })
          }
          className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex items-center gap-2 mt-3">
          <input
            type="checkbox"
            checked={formData.isDefault}
            onChange={(e) =>
              setFormData({ ...formData, isDefault: e.target.checked })
            }
          />
          <label className="text-gray-700 text-sm">
            Set as Default Address
          </label>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-5">
        <button
          onClick={getLocation}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          Use Current Location
        </button>

        <button
          onClick={handleSubmit}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
        >
          Save Address
        </button>
      </div>
    </div>
  );
};

export default AddressForm;
