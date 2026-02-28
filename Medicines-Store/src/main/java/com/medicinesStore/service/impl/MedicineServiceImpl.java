package com.medicinesStore.service.impl;

import com.medicinesStore.entity.Category;
import com.medicinesStore.entity.Medicines;
import com.medicinesStore.exception.MedicineNotFoundException;
import com.medicinesStore.repository.MedicineRepo;
import com.medicinesStore.service.ImageService;
import com.medicinesStore.service.MedicineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class MedicineServiceImpl implements MedicineService {

    @Autowired
    private MedicineRepo medicineRepo;

    @Autowired
    private ImageService imageService;

    // ADD MEDICINE WITH IMAGE
    @Override
    public Medicines addMedicineWithImage(Medicines medicine, MultipartFile image) throws IOException {

        if (image != null && !image.isEmpty()) {
            String imageUrl = imageService.uploadImage(image);
            medicine.setImageUrl(imageUrl);
        }

        return medicineRepo.save(medicine);
    }

    // UPDATE MEDICINE WITH OPTIONAL IMAGE
    @Override
    public Medicines updateMedicineWithImage(Long id, String name, String brand, String manufacturer, String batchNumber, String dosage, String description, BigDecimal price, Integer stock, LocalDate manufactureDate, LocalDate expiryDate, Boolean prescriptionRequired, Boolean active, Long categoryId, MultipartFile image) throws IOException {

        Medicines medi = medicineRepo.findById(id).orElseThrow(() -> new MedicineNotFoundException("Medicine Not Found : " + id));

        // 🔹 BASIC FIELDS (you already have these)
        medi.setName(name);
        medi.setBrand(brand);
        medi.setManufacturer(manufacturer);
        medi.setBatchNumber(batchNumber);
        medi.setDosage(dosage);
        medi.setDescription(description);
        medi.setPrice(price);
        medi.setStock(stock);

        medi.setManufactureDate(manufactureDate);
        medi.setExpiryDate(expiryDate);


        if (active != null) {
            medi.setActive(active);
        }

        Category category = new Category();
        category.setId(categoryId);
        medi.setCategory(category);

        if (image != null && !image.isEmpty()) {
            String imageUrl = imageService.uploadImage(image);
            medi.setImageUrl(imageUrl);
        }
        return medicineRepo.save(medi);
    }

    @Override
    public Medicines getMedicineById(Long id) {
        return medicineRepo.findById(id).orElseThrow(() -> new MedicineNotFoundException("Medicine Not Found : " + id));
    }

    @Override
    public List<Medicines> getAllMedicines() {
        return medicineRepo.findAll();
    }

    @Override
    public List<Medicines> searchMedicineByName(String name) {
        return medicineRepo.findByNameContainingIgnoreCase(name);
    }

    // ✅ DELETE
    @Override
    public void deleteMedicine(Long id) {
        Medicines medicine = medicineRepo.findById(id).orElseThrow(() -> new MedicineNotFoundException("Medicine Not Found : " + id));
        medicineRepo.delete(medicine);
    }

    @Override
    public Long countTotalMedicine() {
        return medicineRepo.findAll().stream().count();
    }

    @Override
    public Map<String, Object> countLowStock() {
        List<Medicines> stockmed = medicineRepo.findAll().stream().filter(x -> x.getStock() <= 10).toList();

        Map<String, Object> response = new HashMap<>();
        response.put("data", stockmed.stream().sorted(Comparator.comparing(Medicines::getStock)));
        response.put("count", stockmed.size());
        return response;
    }

    @Override
    public Map<String, Object> countExpireMedicine() {

        LocalDate days10 = LocalDate.now().minusDays(10);

        List<Medicines> expiremed = medicineRepo.findAll().stream().filter(x -> !x.getExpiryDate().isAfter(days10)).toList();
        Map<String, Object> response = new HashMap<>();
        response.put("count", expiremed.size());
        response.put("data", expiremed.stream().sorted(Comparator.comparing(Medicines::getExpiryDate)));


        return response;
    }

    @Override
    public Page<Medicines> medicinewithpagination(int page, int size, String category) {
        Pageable pageable = PageRequest.of(page, size);
        if (category != null && !category.isBlank()) {
            return medicineRepo.findByCategory_Name(category, pageable);
        }
        return medicineRepo.findAll(pageable);
    }
}
