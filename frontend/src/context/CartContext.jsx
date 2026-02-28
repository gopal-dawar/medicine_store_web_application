import { createContext, useEffect, useState } from "react";
import {
  addToCartItem,
  getCartItems,
  updateCartQuantity,
  removeCartItem,
  cartItemCounts,
} from "../api/cartApi";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);

  const fetchCart = async () => {
    const res = await getCartItems();
    setCart(res.data);
  };


  const fetchCount = async () => {
    const res = await cartItemCounts();
    setCount(res.data);
  };

  const addItem = async (userId, medicineId, quantity) => {
    await addToCartItem(userId, medicineId, quantity);
    await fetchCart();
    await fetchCount();
  };

  const updateQuantity = async (cartId, quantity) => {
    await updateCartQuantity(cartId, quantity);
    await fetchCart();
    await fetchCount();
  };

  const removeItem = async (cartId) => {
    await removeCartItem(cartId);
    setCart((prev) => prev.filter((c) => c.id !== cartId));
    await fetchCount();
  };

  useEffect(() => {
    fetchCart();
    fetchCount();
    // fetchOrders();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        count,
        // orders,
        addItem,
        updateQuantity,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
