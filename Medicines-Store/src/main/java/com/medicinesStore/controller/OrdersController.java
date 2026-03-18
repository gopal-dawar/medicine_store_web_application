package com.medicinesStore.controller;

import com.medicinesStore.entity.Orders;
import com.medicinesStore.entity.UserInfo;
import com.medicinesStore.service.OrdersService;
import com.medicinesStore.service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/orders")
public class OrdersController {
    @Autowired
    private OrdersService ordersService;


    @Autowired
    private UserInfoService userInfoService;

    @PostMapping("/checkout")
    public ResponseEntity<Orders> checkout(@RequestParam String deliveryAddress, Authentication authentication) {
        String username = authentication.getName();
        UserInfo user = userInfoService.getByUsername(username);
        Orders order = ordersService.checkout(user.getId(), deliveryAddress);
        return ResponseEntity.ok(order);
    }

    @GetMapping("/myorders")
    public ResponseEntity<List<Orders>> getOrdersByUser(Authentication authentication) {
        String username = authentication.getName();
        UserInfo user = userInfoService.getByUsername(username);
        Long userId = user.getId();
        return ResponseEntity.ok(ordersService.getOrdersByUser(userId));
    }

    @GetMapping("/getorderbyid/{id}")
    public ResponseEntity<Orders> getOrderById(@PathVariable Long id) {
        return new ResponseEntity<>(ordersService.getOrderById(id), HttpStatus.OK);
    }

    @GetMapping("/allOrders")
    public ResponseEntity<List<Orders>> getAllOrders() {
        return new ResponseEntity<>(ordersService.getAllOrders(), HttpStatus.OK);
    }

    @PutMapping("/updateorder/{id}")
    public ResponseEntity<?> updateOrder(@PathVariable Long id, @RequestBody Orders order) {
        return new ResponseEntity<>(ordersService.updateorder(id, order), HttpStatus.OK);
    }


}

