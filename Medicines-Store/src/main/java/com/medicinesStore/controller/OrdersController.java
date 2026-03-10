package com.medicinesStore.controller;

import com.medicinesStore.entity.Orders;
import com.medicinesStore.service.OrdersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/orders")
public class OrdersController {
    @Autowired
    private OrdersService ordersService;

    @PostMapping("/checkout/{userId}")
    public ResponseEntity<Orders> checkout(@PathVariable Long userId, @RequestParam String deliveryAddress) {
        Orders order = ordersService.checkout(userId, deliveryAddress);
        return ResponseEntity.ok(order);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Orders>> getOrdersByUser(@PathVariable Long userId) {
        return ResponseEntity.ok(ordersService.getOrdersByUser(userId));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Orders> getOrderById(@PathVariable Long id) {
        return new ResponseEntity<>(ordersService.getOrderById(id), HttpStatus.OK);
    }

    @GetMapping("/{orderCode}")
    public ResponseEntity<Orders> getOrderById(@PathVariable String orderCode) {
        return ResponseEntity.ok(ordersService.getOrderById(orderCode));
    }

    @GetMapping("/allOrders")
    public ResponseEntity<List<Orders>> getAllOrders() {
        return new ResponseEntity<>(ordersService.getAllOrders(), HttpStatus.OK);
    }

    @GetMapping("/orderCount")
    public ResponseEntity<Long> getOrderCount() {
        return new ResponseEntity<>(ordersService.countOrder(), HttpStatus.OK);
    }


    @GetMapping("/pendingordercount")
    public ResponseEntity<Long> getPendingOrderCount() {
        return new ResponseEntity<>(ordersService.pendingOrderCount(), HttpStatus.OK);
    }

    @GetMapping("/deliveredOrder")
    public ResponseEntity<Long> getDeliveredOrderCount() {
        return new ResponseEntity<>(ordersService.deliveredOrderCount(), HttpStatus.OK);
    }

    @GetMapping("/cancelledOrder")
    public ResponseEntity<Long> getCancelledOrderCount() {
        return new ResponseEntity<>(ordersService.canelledOrderCount(), HttpStatus.OK);
    }

    @PutMapping("/updateorder/{id}")
    public ResponseEntity<Orders> updateOrder(@PathVariable Long id, @RequestBody Orders order) {
        return new ResponseEntity<>(ordersService.updateorder(id, order), HttpStatus.OK);
    }


}

