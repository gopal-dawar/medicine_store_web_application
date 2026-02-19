package com.medicinesStore.repository;

import com.medicinesStore.entity.Medicines;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MedicineRepo extends JpaRepository<Medicines, Long> {
    List<Medicines> findByNameContainingIgnoreCase(String name);

}
