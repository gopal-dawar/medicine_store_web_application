package com.medicinesStore.service.impl;

import com.medicinesStore.entity.Cart;
import com.medicinesStore.entity.OrderItem;
import com.medicinesStore.entity.Orders;
import com.medicinesStore.entity.UserInfo;
import com.medicinesStore.exception.CartItemNotFoundException;
import com.medicinesStore.exception.OrderNotFoundException;
import com.medicinesStore.repository.CartRepo;
import com.medicinesStore.repository.MedicineRepo;
import com.medicinesStore.repository.OrdersRepo;
import com.medicinesStore.repository.UserRepo;
import com.medicinesStore.service.OrdersService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Service
public class OrdersServiceImpl implements OrdersService {

    @Autowired
    private CartRepo cartRepo;

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private OrdersRepo ordersRepo;

    @Autowired
    private MedicineRepo medicineRepo;

    @Override
    @Transactional
    public Orders checkout(Long userId, String deliveryAddress) {
        List<Cart> cartItems = cartRepo.findCartByUserId(userId);

        if (cartItems.isEmpty()) {
            throw new CartItemNotFoundException("Cart item not found");
        }

        UserInfo user = userRepo.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));

        Orders order = new Orders();
        order.setUser(user);
        order.setDeliveryAddress(deliveryAddress);

        order.setOrderCode("TEMP");

        List<OrderItem> orderItems = new ArrayList<>();
        BigDecimal totalAmount = BigDecimal.ZERO;
        int totalItems = 0;

        for (Cart cart : cartItems) {

            // Get medicine
            var medicine = cart.getMedicines();

            // Check stock
            if (medicine.getStock() < cart.getQuantity()) {
                throw new RuntimeException("Not enough stock for " + medicine.getName());
            }

            // Reduce stock
            medicine.setStock(medicine.getStock() - cart.getQuantity());
            medicineRepo.save(medicine);

            // Create order item
            OrderItem item = new OrderItem();
            item.setOrder(order);
            item.setMedicine(medicine);
            item.setQuantity(cart.getQuantity());
            item.setPrice(medicine.getPrice());
            totalAmount = totalAmount.add(
                    medicine.getPrice().multiply(BigDecimal.valueOf(cart.getQuantity()))
            );
            totalItems += cart.getQuantity();
            orderItems.add(item);
        }
        order.setItems(orderItems);
        order.setTotalAmount(totalAmount);
        order.setTotalItems(totalItems);
        Orders savedOrder = ordersRepo.save(order);
        savedOrder.setOrderCode("ORD" + savedOrder.getId());
        savedOrder = ordersRepo.save(savedOrder);
        cartRepo.deleteByUserId(userId);
        return savedOrder;
    }

    @Override
    public Orders getOrderById(Long id) {
        return ordersRepo.findById(id).orElseThrow(() -> new OrderNotFoundException("Order not found"));
    }

    @Override
    public List<Orders> getOrdersByUser(Long userId) {
        return ordersRepo.findByUserId(userId);
    }

    @Override
    public List<Orders> getAllOrders() {
        return ordersRepo.findAll();
    }

    @Override
    public String updateorder(Long id, Orders orders) {
        Orders or = ordersRepo.findById(id).orElseThrow(() -> new OrderNotFoundException("Order Not Found at : " + id));
        or.setStatus(orders.getStatus());
        ordersRepo.save(or);
        return "Successfully updated!";
    }

}
