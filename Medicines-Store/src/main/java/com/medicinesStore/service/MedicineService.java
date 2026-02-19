package com.medicinesStore.service;

import com.medicinesStore.entity.Medicines;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface MedicineService {

    // ✅ ADD with image
    Medicines addMedicineWithImage(Medicines medicine, MultipartFile image) throws IOException;

    // ✅ UPDATE with optional image
    Medicines updateMedicineWithImage(
            Long medicineId,
            String name,
            String brand,
            String manufacturer,
            String batchNumber,
            String dosage,
            String description,
            java.math.BigDecimal price,
            Integer stock,
            Long categoryId,
            MultipartFile image
    ) throws IOException;

    // ✅ READ
    Medicines getMedicineById(Long medicineId);

    List<Medicines> getAllMedicines();

    List<Medicines> searchMedicineByName(String name);

    // ✅ DELETE
    void deleteMedicine(Long medicineId);
}
