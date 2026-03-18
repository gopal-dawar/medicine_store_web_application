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

        Cart cart = cartRepo.findByUserIdAndMedicines_IdAndStatus(userId, medicineId, "ACTIVE").orElse(null);

        if (cart == null) {
            cart = new Cart();
            cart.setUserId(userId);
            cart.setMedicines(medicine);
            cart.setQuantity(quantity);
            cart.setCreatedAt(LocalDateTime.now());
            cart.setStatus("ACTIVE");
        } else {
            cart.setQuantity(cart.getQuantity() + quantity);
        }

        cart.setPrice(medicine.getPrice());
        cart.setUpdatedAt(LocalDateTime.now());

        return cartRepo.save(cart);
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
        cartRepo.deleteById(cartId);
    }

    @Override
    public void clearCart(Long userId) {
        List<Cart> carts = cartRepo.findCartByUserId(userId);
        for (Cart cart : carts) {
            cart.setStatus("REMOVED");
            cart.setUpdatedAt(LocalDateTime.now());
        }
        cartRepo.saveAll(carts);
    }


    @Override
    public List<Cart> getAllOrders() {
        return cartRepo.findAll();
    }

    @Override
    public List<Cart> getCartItemByUserId(Long userId) {
        return cartRepo.findCartByUserId(userId);
    }
}