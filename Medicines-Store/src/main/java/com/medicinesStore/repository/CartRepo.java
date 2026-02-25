package com.medicinesStore.repository;

import com.medicinesStore.entity.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CartRepo extends JpaRepository<Cart, Long> {

    Optional<Cart> findByUserIdAndMedicines_IdAndStatus(Long userId, Long medicineId, String status);

    List<Cart> findByUserIdAndStatus(Long userId, String status);
}