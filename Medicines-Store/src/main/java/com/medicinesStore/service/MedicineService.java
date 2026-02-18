package com.medicinesStore.service;

import com.medicinesStore.entity.Medicines;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface MedicineService {

    Medicines addMedicine(Medicines medicine);

    Medicines updateMedicine(Long medicineId, Medicines medicine);

    Medicines getMedicineById(Long medicineId);

    List<Medicines> getAllMedicines();

    List<Medicines> searchMedicineByName(String name);

    void deleteMedicine(Long medicineId);

    Medicines addMedicineWithImage(Medicines medicine, MultipartFile image) throws IOException;
}
