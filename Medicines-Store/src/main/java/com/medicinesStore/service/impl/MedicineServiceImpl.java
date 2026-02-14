package com.medicinesStore.service.impl;

import com.medicinesStore.entity.Medicines;
import com.medicinesStore.repository.MedicineRepo;
import com.medicinesStore.service.MedicineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.UUID;

@Service
public class MedicineServiceImpl implements MedicineService {
    @Autowired
    private MedicineRepo medicineRepo;

    private final String uploadDir = "uploads/";

    @Override
    public Medicines saveMedicine(Medicines medicine, MultipartFile file) throws IOException {

        if (file != null && !file.isEmpty()) {

            File uploadPath = new File(uploadDir);
            if (!uploadPath.exists()) {
                uploadPath.mkdirs();
            }


            String fileName = UUID.randomUUID() + "_" + file.getOriginalFilename();
            File destination = new File(uploadDir + fileName);

            file.transferTo(destination);

            medicine.setImageUrl("http://localhost:8080/uploads/" + fileName);
        }

        medicine.setCreatedAt(LocalDateTime.now());

        return medicineRepo.save(medicine);
    }
}
