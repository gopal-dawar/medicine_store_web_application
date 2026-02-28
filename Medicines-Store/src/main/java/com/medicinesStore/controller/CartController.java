package com.medicinesStore.controller;

import com.medicinesStore.entity.Cart;
import com.medicinesStore.security.JwtUtil;
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

    @Autowired
    private JwtUtil jwtUtil;

    // ✅ ADD TO CART
    @PostMapping("/add")
    public ResponseEntity<Cart> addToCart(@RequestHeader("Authorization") String authHeader, @RequestParam Long medicineId, @RequestParam(defaultValue = "1") Integer quantity) {
        Long userId = extractUserId(authHeader);
        Cart cart = cartService.addToCart(userId, medicineId, quantity);
        return ResponseEntity.ok(cart);
    }

    // ✅ GET USER CART
    @GetMapping("/cartdata")
    public ResponseEntity<List<Cart>> getUserCart(@RequestHeader("Authorization") String authHeader) {
        Long userId = extractUserId(authHeader);
        return ResponseEntity.ok(cartService.getUserCart(userId));
    }

    // ✅ UPDATE QUANTITY
    @PutMapping("/update/{cartId}")
    public ResponseEntity<String> updateQuantity(@PathVariable Long cartId, @RequestParam Integer quantity) {
        cartService.updateQuantity(cartId, quantity);
        return ResponseEntity.ok("Quantity updated");
    }

    // ✅ REMOVE ITEM
    @DeleteMapping("/remove/{cartId}")
    public ResponseEntity<String> removeFromCart(@PathVariable Long cartId) {
        cartService.removeFromCart(cartId);
        return ResponseEntity.ok("Item removed from cart");
    }

    @DeleteMapping("/clear")
    public ResponseEntity<String> clearCart(@RequestHeader("Authorization") String authHeader) {
        Long userId = extractUserId(authHeader);
        cartService.clearCart(userId);
        return ResponseEntity.ok("Cart cleared successfully");
    }

    @GetMapping("/total")
    public ResponseEntity<BigDecimal> getCartTotal(@RequestHeader("Authorization") String authHeader) {
        Long userId = extractUserId(authHeader);
        return ResponseEntity.ok(cartService.getCartTotal(userId));
    }

    @GetMapping("/count")
    public ResponseEntity<Long> countCartItem(@RequestHeader("Authorization") String authHeader) {
        Long userId = extractUserId(authHeader);
        return new ResponseEntity<>(cartService.cartItemCount(userId), HttpStatus.OK);
    }

    @GetMapping("/orders")
    public ResponseEntity<List<Cart>> getAllOrders() {
        return new ResponseEntity<>(cartService.getAllOrders(), HttpStatus.OK);
    }

    // 🔹 Helper method (simple)
    private Long extractUserId(String authHeader) {
        String token = authHeader.substring(7);
        return jwtUtil.extractUserId(token);
    }

}