import React, { useContext, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";
import { getAddressesByUser } from "../../api/addressApi";
import AddressForm from "../address/AddressForm";
import { getCurrentUser } from "../../api/userApi";
import { clearCartItem } from "../../api/cartApi";

const Cart = ({ isOpen, onClose }) => {

  const { cart, removeItem, updateItem, clearCart } =
    useContext(CartContext);

  const [showAddressForm, setShowAddressForm] = useState(false);
  const [userId, setUserId] = useState(0)
  const [defaultAddress, setDefaultAddress] = useState(null);



  useEffect(() => {
    const getUserData = async () => {
      try {
        const userRes = await getCurrentUser();
        const id = userRes.data.id;

        setUserId(id);

        const addressRes = await getAddressesByUser(id);

        if (addressRes.data.length > 0) {
          const defaultAdd =
            addressRes.data.find((a) => a.isDefault) ||
            addressRes.data[0];

          setDefaultAddress(defaultAdd);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getUserData();
  }, []);

  const handleDelete = async (cartId) => {
    await removeItem(cartId);
  };

  const handleQuantityChange = async (item, type) => {
    const newQty =
      type === "inc" ? item.quantity + 1 : item.quantity - 1;

    if (newQty < 1) return;

    await updateItem(item.id, newQty);
  };

  const handleCheckout = async () => {
    try {
      if (!defaultAddress) {
        setShowAddressForm(true);
        return;
      }

      const response = await clearCartItem();

      clearCart();

      alert("Order placed successfully");

      onClose();
    } catch (error) {
      console.log(error);
      alert("Checkout failed");
    }
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/60 z-40"
        onClick={onClose}
      />

      <div className="fixed right-0 top-0 h-full w-[420px] bg-white z-50 flex flex-col">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">Shopping Cart</h2>

          <IoClose
            size={22}
            onClick={onClose}
            className="cursor-pointer"
          />
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {cart.length === 0 ? (
            <p className="text-center mt-10">
              Your cart is empty
            </p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 mb-4"
              >
                <img
                  src={item?.medicines?.imageUrl}
                  alt={item?.medicines?.name}
                  className="w-20 h-20 object-cover"
                />

                <div className="flex-1">
                  <h3>{item?.medicines?.name}</h3>

                  <p>
                    ₹{item.price * item.quantity}
                  </p>

                  <div className="flex gap-2 items-center mt-2">
                    <button
                      onClick={() =>
                        handleQuantityChange(item, "dec")
                      }
                    >
                      <FaMinus />
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        handleQuantityChange(item, "inc")
                      }
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>

                <FaTrash
                  className="cursor-pointer text-red-500"
                  onClick={() => handleDelete(item.id)}
                />
              </div>
            ))
          )}
        </div>

        <div className="p-4 border-t">
          {defaultAddress && (
            <div className="border-t p-4 bg-gray-50">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-sm">
                    Delivery Address
                  </h3>

                  <p className="text-sm text-gray-600">
                    {defaultAddress.addressLine}
                  </p>

                  <p className="text-sm text-gray-600">
                    {defaultAddress.city},
                    {defaultAddress.state}
                  </p>

                  <p className="text-sm text-gray-600">
                    {defaultAddress.pincode}
                  </p>
                </div>

                <button
                  onClick={() => setShowAddressForm(true)}
                  className="text-blue-600 text-sm"
                >
                  Change
                </button>
              </div>
            </div>
          )}
          <div className="flex justify-between mb-3">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <button
            onClick={handleCheckout}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded cursor-pointer"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>

      {showAddressForm && (
        <div className="fixed inset-0 bg-black/70 z-[100] flex justify-center items-center">
          <div className="bg-white rounded-lg w-[700px] max-w-[95%]">
            <AddressForm
              userId={userId}
              onClose={() => setShowAddressForm(false)}
              onSuccess={async () => {
                const response = await getAddressesByUser(userId);

                const defaultAdd =
                  response.data.find((a) => a.isDefault) ||
                  response.data[0];

                setDefaultAddress(defaultAdd);

                setShowAddressForm(false);
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;