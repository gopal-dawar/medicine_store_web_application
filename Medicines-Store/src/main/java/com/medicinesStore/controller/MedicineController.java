package com.medicinesStore.controller;

import com.medicinesStore.entity.Medicines;
import com.medicinesStore.service.MedicineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController

public class MedicineController {


    @Autowired
    private MedicineService medicineService;

    @PostMapping(consumes = "multipart/form-data")
    public Medicines createMedicine(
            @ModelAttribute Medicines medicine,
            @RequestParam(value = "image", required = false) MultipartFile file
    ) throws IOException {

        return medicineService.saveMedicine(medicine, file);
    }

}
