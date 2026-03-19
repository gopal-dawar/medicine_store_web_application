package com.medicinesStore.controller;

import com.medicinesStore.entity.Category;
import com.medicinesStore.entity.Medicines;
import com.medicinesStore.service.MedicineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.math.BigDecimal;
import java.time.LocalDate;

@RestController
@RequestMapping("/medicine")
public class MedicineController {

    @Autowired
    private MedicineService medicineService;

    // ADD MEDICINE
    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<Medicines> addMedicine(@RequestParam String name, @RequestParam(required = false) String brand, @RequestParam(required = false) String manufacturer, @RequestParam(required = false) String batchNumber, @RequestParam(required = false) String dosage, @RequestParam(required = false) String description,

                                                 @RequestParam BigDecimal price, @RequestParam Integer stock,

                                                 @RequestParam(required = false) LocalDate manufactureDate, @RequestParam(required = false) LocalDate expiryDate,

                                                 @RequestParam Long categoryId, @RequestParam(required = false) MultipartFile image) throws IOException {

        Medicines medicine = new Medicines();

        medicine.setName(name);
        medicine.setBrand(brand);
        medicine.setManufacturer(manufacturer);
        medicine.setBatchNumber(batchNumber);
        medicine.setDosage(dosage);
        medicine.setDescription(description);
        medicine.setPrice(price);
        medicine.setStock(stock);


        medicine.setManufactureDate(manufactureDate);
        medicine.setExpiryDate(expiryDate);

        Category category = new Category();
        category.setId(categoryId);
        medicine.setCategory(category);

        Medicines saved = medicineService.addMedicineWithImage(medicine, image);
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }

    @PutMapping(value = "/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<Medicines> updateMedicine(@PathVariable Long id,

                                                    @RequestParam String name, @RequestParam(required = false) String brand, @RequestParam(required = false) String manufacturer, @RequestParam(required = false) String batchNumber, @RequestParam(required = false) String dosage, @RequestParam(required = false) String description,

                                                    @RequestParam BigDecimal price, @RequestParam Integer stock,


                                                    @RequestParam(required = false) LocalDate manufactureDate, @RequestParam(required = false) LocalDate expiryDate,

                                                    @RequestParam(required = false) Boolean prescriptionRequired, @RequestParam(required = false) Boolean active,

                                                    @RequestParam Long categoryId, @RequestParam(required = false) MultipartFile image) throws IOException {


        Medicines updated = medicineService.updateMedicineWithImage(id, name, brand, manufacturer, batchNumber, dosage, description, price, stock, manufactureDate, expiryDate, prescriptionRequired, active, categoryId, image);

        return ResponseEntity.ok(updated);
    }

    // GET BY ID
    @GetMapping("/{id}")
    public ResponseEntity<Medicines> getMedicineById(@PathVariable Long id) {
        return ResponseEntity.ok(medicineService.getMedicineById(id));
    }

    @GetMapping
    public ResponseEntity<Page<Medicines>> getMedicines(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "12") int size, @RequestParam(required = false) String name, @RequestParam(required = false) String category) {
        Page<Medicines> medicines = medicineService.getMedicines(page, size, name, category);
        return ResponseEntity.ok(medicines);
    }


    // DELETE
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteMedicine(@PathVariable Long id) {
        medicineService.deleteMedicine(id);
        return ResponseEntity.ok("Successfully Deleted!");
    }


}
