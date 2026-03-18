package com.medicinesStore.controller;

import com.medicinesStore.entity.Cart;
import com.medicinesStore.entity.UserInfo;
import com.medicinesStore.security.JwtUtil;
import com.medicinesStore.service.CartService;
import com.medicinesStore.service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cart")
public class CartController {

    @Autowired
    private CartService cartService;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserInfoService userInfoService;

    // ADD TO CART
    @PostMapping("/add")
    public ResponseEntity<?> addToCart(@RequestParam Long medicineId, @RequestParam(defaultValue = "1") Integer quantity, Authentication authentication) {

        if (authentication == null) {
            return ResponseEntity.status(401).body("Unauthorized");
        }
        String username = authentication.getName();
        UserInfo user = userInfoService.getByUsername(username);
        Cart cart = cartService.addToCart(user.getId(), medicineId, quantity);
        return ResponseEntity.ok(cart);
    }

    @GetMapping("/cartdata")
    public ResponseEntity<?> getCartItem(Authentication authentication) {
        String username = authentication.getName();
        UserInfo user = userInfoService.getByUsername(username);
        List<Cart> cart = cartService.getCartItemByUserId(user.getId());
        return new ResponseEntity<>(cart, HttpStatus.OK);
    }

    // UPDATE QUANTITY
    @PutMapping("/update/{cartId}")
    public ResponseEntity<String> updateQuantity(@PathVariable Long cartId, @RequestParam Integer quantity) {
        cartService.updateQuantity(cartId, quantity);
        return ResponseEntity.ok("Quantity updated");
    }


    @DeleteMapping("/remove/{cartId}")
    public ResponseEntity<String> removeFromCart(@PathVariable Long cartId) {
        cartService.removeFromCart(cartId);
        return ResponseEntity.ok("Item removed from cart");
    }

    @DeleteMapping("/clear")
    public ResponseEntity<String> clearCart(Authentication authentication) {
        String username = authentication.getName();
        UserInfo user = userInfoService.getByUsername(username);
        cartService.clearCart(user.getId());
        return ResponseEntity.ok("Cart cleared successfully");
    }


}