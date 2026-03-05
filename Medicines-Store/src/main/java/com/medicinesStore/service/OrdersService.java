package com.medicinesStore.service;

import com.medicinesStore.entity.Orders;

import java.util.List;

public interface OrdersService {

    Orders checkout(Long userId, String deliveryAddress);

    List<Orders> getOrdersByUser(Long userId);

    Orders getOrderById(String orderId);

    List<Orders> getAllOrders();

    Long countOrder();

    Long pendingOrderCount();

    Long deliveredOrderCount();

    Long canelledOrderCount();
}
