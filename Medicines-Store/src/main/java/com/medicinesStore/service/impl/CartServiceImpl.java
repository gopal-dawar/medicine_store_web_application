package com.medicinesStore.service.impl;

import com.medicinesStore.entity.Cart;
import com.medicinesStore.entity.Medicines;
import com.medicinesStore.exception.MedicineNotFoundException;
import com.medicinesStore.repository.CartRepo;
import com.medicinesStore.repository.MedicineRepo;
import com.medicinesStore.service.CartService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Service
@Transactional
public class CartServiceImpl implements CartService {

    @Autowired
    private CartRepo cartRepo;

    @Autowired
    private MedicineRepo medicineRepo;

    @Override
    public Cart addToCart(Long userId, Long medicineId, Integer quantity) {

        if (quantity == null || quantity < 1) {
            throw new IllegalArgumentException("Quantity must be at least 1");
        }

        Medicines medicine = medicineRepo.findById(medicineId).orElseThrow(() -> new MedicineNotFoundException("Medicine not found"));

        Cart cart = cartRepo.findByUserIdAndMedicineIdAndStatus(userId, medicineId, "ACTIVE").orElse(new Cart());

        cart.setUserId(userId);
        cart.setMedicineId(medicineId);
        cart.setPrice(medicine.getPrice());
        cart.setStatus("ACTIVE");

        if (cart.getId() == null) {
            cart.setQuantity(quantity);
            cart.setCreatedAt(LocalDateTime.now());
        } else {
            cart.setQuantity(cart.getQuantity() + quantity);
            cart.setUpdatedAt(LocalDateTime.now());
        }

        return cartRepo.save(cart);
    }

    @Override
    public List<Cart> getUserCart(Long userId) {
        return cartRepo.findByUserIdAndStatus(userId, "ACTIVE");
    }

    @Override
    public Cart updateQuantity(Long cartId, Integer quantity) {

        if (quantity == null || quantity < 1) {
            throw new IllegalArgumentException("Quantity must be greater than 0");
        }

        Cart cart = cartRepo.findById(cartId).orElseThrow(() -> new RuntimeException("Cart item not found"));

        cart.setQuantity(quantity);
        cart.setUpdatedAt(LocalDateTime.now());

        return cartRepo.save(cart);
    }

    @Override
    public void removeFromCart(Long cartId) {

        Cart cart = cartRepo.findById(cartId).orElseThrow(() -> new RuntimeException("Cart item not found"));

        cartRepo.delete(cart);
    }

    @Override
    public void clearCart(Long userId) {

        List<Cart> carts = cartRepo.findByUserIdAndStatus(userId, "ACTIVE");

        cartRepo.deleteAll(carts);
    }

    @Override
    public Double getCartTotal(Long userId) {

        List<Cart> carts = cartRepo.findByUserIdAndStatus(userId, "ACTIVE");
        double total = carts.stream()
                .map(c -> c.getPrice().multiply(BigDecimal.valueOf(c.getQuantity())))
                .reduce(BigDecimal.ZERO, BigDecimal::add)
                .doubleValue();

        return total;
    }
}