import React, { useContext, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { getCurrentUser } from "../../api/userApi";
import { CartContext } from "../../context/CartContext";
import AddressForm from "../address/AddressForm";

const Cart = ({ isOpen, onClose }) => {
  const { cart, removeItem, updateItem } = useContext(CartContext);

  const [showAddress, setShowAddress] = useState(false);
  const [userId, setUserId] = useState(null);

  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getCurrentUser();
        setUserId(res.data.id);
      } catch (err) {
        console.error("User fetch failed", err);
      }
    };
    fetchUser();
  }, []);

  const checkouthandle = () => {
    setShowAddress(true); 
  };

  const handleDelete = async (cartId) => {
    await removeItem(cartId);
  };

  const handleQuantityChange = async (item, type) => {
    let newQty = type === "inc" ? item.quantity + 1 : item.quantity - 1;
    if (newQty < 1) return;
    await updateItem(item.id, newQty);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/60 z-40" onClick={onClose} />

      <div className="fixed right-0 top-0 h-full w-[420px] bg-white z-50 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">Shopping Cart</h2>
          <IoClose size={22} onClick={onClose} />
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {cart.length === 0 ? (
            <p className="text-center mt-10">Your cart is empty</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-4 mb-4">
                <img
                  src={item?.medicines?.imageUrl}
                  className="w-20 h-20 object-cover"
                />

                <div className="flex-1">
                  <h3>{item?.medicines?.name}</h3>
                  <p>₹{item.price * item.quantity}</p>

                  <div className="flex gap-2">
                    <button onClick={() => handleQuantityChange(item, "dec")}>
                      <FaMinus />
                    </button>

                    <span>{item.quantity}</span>

                    <button onClick={() => handleQuantityChange(item, "inc")}>
                      <FaPlus />
                    </button>
                  </div>
                </div>

                <FaTrash onClick={() => handleDelete(item.id)} />
              </div>
            ))
          )}
        </div>

        {/* Address Section */}
        {showAddress && userId && (
          <div className="border-t p-4">
            <AddressForm userId={userId} />
          </div>
        )}

        {/* Footer */}
        <div className="p-4 border-t">
          <div className="flex justify-between mb-3">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <button
            onClick={checkouthandle}
            className="w-full bg-green-600 text-white py-2 rounded"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
