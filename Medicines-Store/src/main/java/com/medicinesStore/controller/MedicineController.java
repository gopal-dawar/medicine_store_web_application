package com.medicinesStore.controller;

import com.medicinesStore.entity.Category;
import com.medicinesStore.entity.Medicines;
import com.medicinesStore.service.MedicineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.List;

@RestController
@RequestMapping("/medicine")
public class MedicineController {

    @Autowired
    private MedicineService medicineService;

    @PostMapping
    public ResponseEntity<Medicines> addMedicine(@RequestBody Medicines medicine) {
        return new ResponseEntity<>(medicineService.addMedicine(medicine), HttpStatus.OK);
    }

    //
    @PutMapping("/{id}")
    public ResponseEntity<Medicines> updateMedicine(@PathVariable Long id, @RequestBody Medicines medicine) {
        return new ResponseEntity<>(medicineService.updateMedicine(id, medicine), HttpStatus.OK);
    }

    //
    @GetMapping("/{id}")
    public ResponseEntity<Medicines> getMedicineById(@PathVariable Long id) {
        return new ResponseEntity<>(medicineService.getMedicineById(id), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Medicines>> getAllMedicines() {
        return new ResponseEntity<>(medicineService.getAllMedicines(), HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity<List<Medicines>> searchMedicineByName(@RequestParam String name) {
        return new ResponseEntity<>(medicineService.searchMedicineByName(name), HttpStatus.OK);
    }
//    deleteMedicine(Long id);

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteMedicine(@PathVariable long id) {
        medicineService.deleteMedicine(id);
        return new ResponseEntity<>("Successfully Deleted!", HttpStatus.OK);
    }

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<Medicines> addMedicine(@RequestParam String name, @RequestParam(required = false) String brand, @RequestParam String description, @RequestParam BigDecimal price, @RequestParam Integer stock, @RequestParam(required = false) String dosage, @RequestParam(defaultValue = "false") Boolean prescriptionRequired, @RequestParam Long categoryId, @RequestParam MultipartFile image) throws IOException {

        Category category = new Category();
        category.setId(categoryId);

        Medicines medicine = new Medicines();
        medicine.setName(name);
        medicine.setBrand(brand);
        medicine.setDescription(description);
        medicine.setPrice(price);
        medicine.setStock(stock);
        medicine.setDosage(dosage);
        medicine.setPrescriptionRequired(prescriptionRequired);
        medicine.setCategory(category);

        Medicines saved = medicineService.addMedicineWithImage(medicine, image);

        return ResponseEntity.ok(saved);
    }


}
