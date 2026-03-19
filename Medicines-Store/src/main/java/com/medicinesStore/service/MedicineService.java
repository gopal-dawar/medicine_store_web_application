package com.medicinesStore.service;

import com.medicinesStore.entity.Medicines;
import org.springframework.data.domain.Page;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.math.BigDecimal;
import java.time.LocalDate;

public interface MedicineService {

    //  ADD with image
    Medicines addMedicineWithImage(Medicines medicine, MultipartFile image) throws IOException;

    // UPDATE with optional image
    public Medicines updateMedicineWithImage(Long id, String name, String brand, String manufacturer, String batchNumber, String dosage, String description, BigDecimal price, Integer stock, LocalDate manufactureDate, LocalDate expiryDate, Boolean prescriptionRequired, Boolean active, Long categoryId, MultipartFile image) throws IOException;

    // view medicine by Id
    Medicines getMedicineById(Long medicineId);

    // view all medicine
    Page<Medicines> getMedicines(int page, int size, String name, String category);


    // DELETE
    void deleteMedicine(Long medicineId);


}
