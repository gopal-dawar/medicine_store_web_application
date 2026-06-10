import { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { getAddressesByUser, saveAddress } from "../../api/addressApi";

const AddressForm = ({ userId, onClose, onSuccess }) => {
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
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await saveAddress(userId, formData);

      alert("Address saved successfully");

      if (onSuccess) {
        onSuccess();
      }

      setFormData({
        addressLine: "",
        village: "",
        city: "",
        state: "",
        pincode: "",
        latitude: "",
        longitude: "",
        isDefault: false,
      });

      if (onClose) {
        onClose();
      }
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
          `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
        );

        const data = await res.json();
        const addr = data.address;

        setFormData({
          addressLine: data.display_name || "",

          village:
            addr.neighbourhood ||
            addr.suburb ||
            addr.village ||
            addr.hamlet ||
            "",

          city:
            addr.city ||
            addr.town ||
            addr.county ||
            "",

          state: addr.state || "",
          pincode: addr.postcode || "",

          latitude: lat,
          longitude: lng,

          isDefault: formData.isDefault,
        });
      },
      () => alert("Location permission denied")
    );
  };

  useEffect(() => {
    if (userId) {
      loadAddresses();
    }
  }, [userId]);

  const loadAddresses = async () => {
    try {
      const response = await getAddressesByUser(userId);

      const addressList = response.data || [];

      setAddresses(addressList);

      const defaultAddress =
        addressList.find((a) => a.isDefault) || addressList[0];

      if (defaultAddress) {
        setSelectedAddress(defaultAddress.id);

        setFormData({
          addressLine: defaultAddress.addressLine || "",
          village: defaultAddress.village || "",
          city: defaultAddress.city || "",
          state: defaultAddress.state || "",
          pincode: defaultAddress.pincode || "",
          latitude: defaultAddress.latitude || "",
          longitude: defaultAddress.longitude || "",
          isDefault: defaultAddress.isDefault || false,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddressSelect = (e) => {
    const addressId = Number(e.target.value);

    setSelectedAddress(addressId);

    const selected = addresses.find(
      (addr) => addr.id === addressId
    );

    if (selected) {
      setFormData({
        addressLine: selected.addressLine || "",
        village: selected.village || "",
        city: selected.city || "",
        state: selected.state || "",
        pincode: selected.pincode || "",
        latitude: selected.latitude || "",
        longitude: selected.longitude || "",
        isDefault: selected.isDefault || false,
      });
    }
  };
  return (
    <div className="p-5 bg-white rounded shadow-lg border">
      <div className="flex px-2 mb-3  justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800">Add Address</h2>
        <CgClose
          size={20}
          className="cursor-pointer"
          onClick={onClose}
        />
      </div>

      <div className="grid gap-3">
        {addresses.length > 0 && (
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Select Existing Address
            </label>

            <select
              value={selectedAddress}
              onChange={handleAddressSelect}
              className="w-full border rounded p-2"
            >
              <option value="">
                Select Address
              </option>

              {addresses.map((address) => (
                <option
                  key={address.id}
                  value={address.id}
                >
                  {address.village}, {address.city} - {address.pincode}
                </option>
              ))}
            </select>
          </div>
        )}
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
