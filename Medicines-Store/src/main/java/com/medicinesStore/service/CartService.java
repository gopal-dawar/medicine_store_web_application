package com.medicinesStore.service;

import com.medicinesStore.entity.Cart;

import java.util.List;

public interface CartService {
    Cart addToCart(Long userId, Long medicineId, Integer quantity);

    List<Cart> getUserCart(Long userId);

    Cart updateQuantity(Long cartId, Integer quantity);

    void removeFromCart(Long cartId);

    void clearCart(Long userId);

    Double getCartTotal(Long userId);
}
