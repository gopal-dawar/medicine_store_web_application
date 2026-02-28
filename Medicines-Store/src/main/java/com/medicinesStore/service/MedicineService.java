package com.medicinesStore.service;

import com.medicinesStore.entity.Medicines;
import org.springframework.data.domain.Page;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import java.util.Map;

public interface MedicineService {

    //  ADD with image
    Medicines addMedicineWithImage(Medicines medicine, MultipartFile image) throws IOException;

    // UPDATE with optional image
    public Medicines updateMedicineWithImage(Long id, String name, String brand, String manufacturer, String batchNumber, String dosage, String description, BigDecimal price, Integer stock, LocalDate manufactureDate, LocalDate expiryDate, Boolean prescriptionRequired, Boolean active, Long categoryId, MultipartFile image) throws IOException;

    // view medicine by Id
    Medicines getMedicineById(Long medicineId);

    // view all medicine
    List<Medicines> getAllMedicines();

    // search medicine
    List<Medicines> searchMedicineByName(String name);

    // DELETE
    void deleteMedicine(Long medicineId);

    //  count the total medicine
    Long countTotalMedicine();

    // count low stock
    Map<String, Object> countLowStock();

    // count expire medicine
    Map<String, Object> countExpireMedicine();

    Page<Medicines> medicinewithpagination(int page, int size, String category);

}
