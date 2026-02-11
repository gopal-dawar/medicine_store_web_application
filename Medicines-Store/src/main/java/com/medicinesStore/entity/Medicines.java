package com.medicinesStore.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "medicines")
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class Medicines {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private String medicineName;

    private String brandName;

    @Column(nullable = false)
    private String category;   // Tablet, Syrup, Injection

    private String manufacturer;

    @Column(unique = true)
    private String batchNo;

    private LocalDate manufactureDate;

    private LocalDate expiryDate;

    private Double price;

    private Double mrp;

    private Integer quantityInStock;

    private String dosage;   // 500mg

    @Column(length = 1000)
    private String composition;

    @Column(length = 1000)
    private String description;

    private Boolean requiresPrescription;

    private Double discountPercentage;

    private Double gstPercentage;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

}
