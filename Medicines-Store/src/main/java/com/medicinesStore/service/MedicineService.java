package com.medicinesStore.service;

import com.medicinesStore.entity.Medicines;

import java.util.List;

public interface MedicineService {

    Medicines addMedicine(Medicines medicine);

    Medicines updateMedicine(Long medicineId, Medicines medicine);

    Medicines getMedicineById(Long medicineId);

    List<Medicines> getAllMedicines();

    List<Medicines> searchMedicineByName(String name);

    void deleteMedicine(Long medicineId);
}
