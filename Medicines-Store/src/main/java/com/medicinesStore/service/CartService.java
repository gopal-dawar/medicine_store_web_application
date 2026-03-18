package com.medicinesStore.service;

import com.medicinesStore.entity.Cart;

import java.math.BigDecimal;
import java.util.List;

public interface CartService {
    Cart addToCart(Long userId, Long medicineId, Integer quantity);

    Cart updateQuantity(Long cartId, Integer quantity);

    void removeFromCart(Long cartId);

    void clearCart(Long userId);

    List<Cart> getAllOrders();

    List<Cart> getCartItemByUserId(Long userId);
}
