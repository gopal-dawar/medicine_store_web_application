import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import {
  getCartItem,
  removeCartItem,
  updateCartQuantity,
} from "../../api/medicineApi";

const Cart = ({ isOpen, onClose, refreshCartCount }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (!isOpen) return;

    const fetchCart = async () => {
      try {
        const res = await getCartItem();
        setCartItems(res.data);
      } catch (err) {
        console.error("Failed to load cart", err);
      }
    };

    fetchCart();
  }, [isOpen]);

  const handleDelete = async (cartId) => {
    try {
      await removeCartItem(cartId);
      setCartItems((prev) => prev.filter((item) => item.id !== cartId));
      refreshCartCount();
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const handleQuantityChange = async (item, type) => {
    let newQty = type === "inc" ? item.quantity + 1 : item.quantity - 1;

    setCartItems((prev) =>
      prev.map((c) => (c.id === item.id ? { ...c, quantity: newQty } : c)),
    );

    try {
      await updateCartQuantity(item.id, newQty);
      refreshCartCount();
    } catch (err) {
      console.error("Quantity update failed", err);
    }
  };
  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full sm:w-[420px] bg-gray-50 z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center px-5 py-4 border-b bg-white">
          <h2 className="text-xl font-bold tracking-tight">Shopping Cart</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition"
          >
            <IoClose size={22} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-4 py-5 space-y-4">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500 mt-20">
              Your cart is empty
            </p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 items-center bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition"
              >
                {/* Image */}
                <div className="w-20 h-20 rounded-xl overflow-hidden ring-1 ring-gray-200">
                  <img
                    src={item?.medicines?.imageUrl}
                    alt={item?.medicines?.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex justify-between w-full">
                  <div className="px-2 w-full">
                    <h3 className="font-semibold text-gray-900">
                      {item?.medicines?.name}
                    </h3>

                    <div className="flex justify-between w-40 items-center">
                      <p className="mt-2 font-bold text-green-600">
                        ₹{item.price * item.quantity}
                      </p>
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => handleQuantityChange(item, "dec")}
                          className="w-8 h-5 flex items-center justify-center rounded-full border hover:bg-gray-100"
                        >
                          <FaMinus size={12} />
                        </button>

                        <span className="font-semibold text-gray-800">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => handleQuantityChange(item, "inc")}
                          className="w-8 h-5 flex items-center justify-center rounded-full border hover:bg-gray-100"
                        >
                          <FaPlus size={12} />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Delete */}
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-gray-400 text-2xl mr-3 hover:text-red-500 transition"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="bg-white border-t px-5 py-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600 text-sm">Total Amount</span>
            <span className="text-xl font-extrabold text-gray-900">
              ₹{total}
            </span>
          </div>

          <button className="w-full bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white font-semibold py-3 rounded-xl shadow-lg transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
