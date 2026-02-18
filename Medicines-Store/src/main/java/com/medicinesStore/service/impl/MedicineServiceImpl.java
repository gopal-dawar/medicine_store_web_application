package com.medicinesStore.service.impl;

import com.medicinesStore.entity.Medicines;
import com.medicinesStore.exception.MedicineNotFoundException;
import com.medicinesStore.repository.MedicineRepo;
import com.medicinesStore.service.ImageService;
import com.medicinesStore.service.MedicineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class MedicineServiceImpl implements MedicineService {

    @Autowired
    private MedicineRepo medicineRepo;


    @Autowired
    private ImageService imageService;

    @Override
    public Medicines addMedicine(Medicines medicine) {
        return medicineRepo.save(medicine);
    }

    @Override
    public Medicines updateMedicine(Long id, Medicines medicine) {
        Medicines medi = medicineRepo.findById(id).orElseThrow(() -> new MedicineNotFoundException("Medicine Not Found : " + id));
        medi.setName(medicine.getName());
        medi.setBrand(medicine.getBrand());
        medi.setCategory(medicine.getCategory());
        medi.setDescription(medicine.getDescription());
        medi.setPrice(medicine.getPrice());
        medi.setStock(medicine.getStock());
        medi.setImageUrl(medicine.getImageUrl());
        medi.setDosage(medicine.getDosage());
        medi.setPrescriptionRequired(medicine.getPrescriptionRequired());

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
        return medicineRepo.searchByName(name).orElseThrow(() -> new MedicineNotFoundException("Medicine Not Found : " + name));
    }

    @Override
    public void deleteMedicine(Long id) {
        medicineRepo.findById(id).orElseThrow(() -> new MedicineNotFoundException("Medicine Not Found : " + id));
        medicineRepo.deleteById(id);
    }

    @Override
    public Medicines addMedicineWithImage(Medicines medicine, MultipartFile image) throws IOException {

        if (image != null && !image.isEmpty()) {
            String imageUrl = imageService.uploadImage(image);
            medicine.setImageUrl(imageUrl);
        }

        return medicineRepo.save(medicine);
    }


}
