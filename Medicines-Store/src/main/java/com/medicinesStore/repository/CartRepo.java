package com.medicinesStore.repository;

import com.medicinesStore.entity.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CartRepo extends JpaRepository<Cart, Long> {

    Optional<Cart> findByUserIdAndMedicines_IdAndStatus(Long userId, Long medicineId, String status);

    @Query("SELECT c FROM Cart c WHERE c.userId = :userId")
    List<Cart> findCartByUserId(@Param("userId") Long userId);

    public void deleteByUserId(Long userId);
}