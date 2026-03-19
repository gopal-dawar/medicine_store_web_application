package com.medicinesStore.repository;

import com.medicinesStore.entity.Medicines;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MedicineRepo extends JpaRepository<Medicines, Long> {
    Page<Medicines> findByNameContainingIgnoreCase(String name, Pageable pageable);

    Page<Medicines> findByCategory_NameIgnoreCase(String category, Pageable pageable);

    Page<Medicines> findByNameContainingIgnoreCaseAndCategory_NameIgnoreCase(
            String name, String category, Pageable pageable);
}
