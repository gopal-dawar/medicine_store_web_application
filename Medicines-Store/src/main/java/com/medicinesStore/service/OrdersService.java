package com.medicinesStore.service;

import com.medicinesStore.entity.Orders;

import java.util.List;

public interface OrdersService {

    Orders checkout(Long userId, String deliveryAddress);

    Orders getOrderById(Long id);

    List<Orders> getOrdersByUser(Long userId);

    Orders getOrderById(String orderId);

    List<Orders> getAllOrders();


    String updateorder(Long id, Orders orders);


}
