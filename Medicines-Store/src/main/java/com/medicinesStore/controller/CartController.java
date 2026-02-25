package com.medicinesStore.controller;

import com.medicinesStore.entity.Cart;
import com.medicinesStore.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;

@RestController
@RequestMapping("/cart")
public class CartController {

    @Autowired
    private CartService cartService;

    @PostMapping("/add")
    public ResponseEntity<Cart> addToCart(
            @RequestParam Long userId,
            @RequestParam Long medicineId,
            @RequestParam(defaultValue = "1") Integer quantity
    ) {
        Cart cart = cartService.addToCart(userId, medicineId, quantity);
        return ResponseEntity.ok(cart);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Cart>> getUserCart(
            @PathVariable Long userId
    ) {
        return ResponseEntity.ok(cartService.getUserCart(userId));
    }

    @PutMapping("/update/{cartId}")
    public ResponseEntity<Cart> updateQuantity(
            @PathVariable Long cartId,
            @RequestParam Integer quantity
    ) {
        Cart updatedCart = cartService.updateQuantity(cartId, quantity);
        return ResponseEntity.ok(updatedCart);
    }

    @DeleteMapping("/remove/{cartId}")
    public ResponseEntity<String> removeFromCart(
            @PathVariable Long cartId
    ) {
        cartService.removeFromCart(cartId);
        return ResponseEntity.ok("Item removed from cart");
    }

    @DeleteMapping("/clear/{userId}")
    public ResponseEntity<String> clearCart(
            @PathVariable Long userId
    ) {
        cartService.clearCart(userId);
        return ResponseEntity.ok("Cart cleared successfully");
    }

    @GetMapping("/total/{userId}")
    public ResponseEntity<BigDecimal> getCartTotal(
            @PathVariable Long userId
    ) {
        return ResponseEntity.ok(cartService.getCartTotal(userId));
    }

    @GetMapping("/count")
    public ResponseEntity<Long> countcartItem() {
        return new ResponseEntity<>(cartService.cartItemCount(), HttpStatus.OK);
    }
}