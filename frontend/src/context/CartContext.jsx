import { createContext, useState, useEffect } from "react";
import {
  getCartItems,
  addToCartItem,
  updateCartQuantity,
  removeCartItem,
  clearCartItem,
} from "../api/cartApi";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const fetchCart = async () => {
    try {
      const res = await getCartItems();
      setCart(res.data);
    } catch (error) {
      console.error("Cart Fetch Error:", error.response?.data || error.message);
      // If 401/403, return empty cart (user not authenticated)
      if (error.response?.status === 401 || error.response?.status === 403) {
        setCart([]);
      }
    }
  };

  const addItem = async (medicineId, quantity = 1) => {
    try {
      await addToCartItem(medicineId, quantity);
      fetchCart();
    } catch (error) {
      console.error("Add Cart Error:", error.response?.data || error.message);
      throw error;
    }
  };

  const updateItem = async (cartId, quantity) => {
    try {
      await updateCartQuantity(cartId, quantity);
      fetchCart();
    } catch (error) {
      console.error(
        "Update Cart Error:",
        error.response?.data || error.message,
      );
      throw error;
    }
  };

  const removeItem = async (cartId) => {
    try {
      await removeCartItem(cartId);
      fetchCart();
    } catch (error) {
      console.error(
        "Remove Cart Error:",
        error.response?.data || error.message,
      );
      throw error;
    }
  };

  const clearCart = async () => {
    try {
      await clearCartItem();
      setCart([]);
    } catch (error) {
      console.error("Clear Cart Error:", error.response?.data || error.message);
      throw error;
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        updateItem,
        removeItem,
        clearCart,
        fetchCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
