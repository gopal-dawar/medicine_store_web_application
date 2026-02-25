import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import { getCartItem, removeCartItem } from "../../api/medicineApi";

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
      console.error("Failed to delete item", err);
    }
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />

      <div className="fixed right-0 top-0 h-full w-full sm:w-[420px] bg-white z-50 shadow-xl flex flex-col">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Your Cart</h2>
          <button onClick={onClose} className="text-2xl">
            <IoClose />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 items-center border rounded-lg p-3"
              >
                <div className="w-20 h-16 border rounded overflow-hidden">
                  <img
                    src={item?.medicines?.imageUrl}
                    alt={item?.medicines?.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex justify-between w-full">
                  <div>
                    <h3 className="font-semibold">{item.medicines.name}</h3>
                    <p className="text-sm text-gray-500">
                      ₹{item.price} × {item.quantity}
                    </p>
                    <p className="text-sm font-medium">
                      ₹{item.price * item.quantity}
                    </p>
                  </div>

                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-red-500 hover:text-red-700 px-4"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="border-t p-4">
          <div className="flex justify-between mb-4 text-lg font-semibold">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
