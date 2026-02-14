package com.medicinesStore.repository;

import com.medicinesStore.entity.Medicines;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MedicineRepo extends JpaRepository<Medicines, Long> {
}
