package com.medicinesStore.service;

import com.medicinesStore.entity.Orders;

import java.util.List;

public interface OrdersService {

    Orders checkout(Long userId, String deliveryAddress);

    List<Orders> getOrdersByUser(Long userId);

    Orders getOrderById(Long orderId);

    List<Orders> getAllOrders();
}
