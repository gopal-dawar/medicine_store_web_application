package com.medicinestore.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "order_items")
public class OrderItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderItemId;

    /* ===============================
       ORDER RELATION
       =============================== */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id", nullable = false)
    private Order order;

    /* ===============================
       MEDICINE RELATION
       =============================== */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "medicine_id", nullable = false)
    private Medicine medicine;

    /* ===============================
       ITEM DETAILS
       =============================== */
    @Column(nullable = false)
    private int quantity;

    @Column(nullable = false)
    private double price; // price per unit at order time

    @Column(nullable = false)
    private double totalPrice; // quantity * price

    /* ===============================
       AUTO CALCULATION
       =============================== */
    @PrePersist
    @PreUpdate
    public void calculateTotalPrice() {
        this.totalPrice = this.quantity * this.price;
    }

    /* ===============================
       GETTERS & SETTERS
       =============================== */

    public Long getOrderItemId() {
        return orderItemId;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public Medicine getMedicine() {
        return medicine;
    }

    public void setMedicine(Medicine medicine) {
        this.medicine = medicine;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public double getTotalPrice() {
        return totalPrice;
    }
}