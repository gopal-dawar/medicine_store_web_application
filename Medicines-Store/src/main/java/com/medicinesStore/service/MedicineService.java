package com.medicinesStore.service;

import com.medicinesStore.entity.Medicines;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface MedicineService {
    Medicines saveMedicine(Medicines medicine, MultipartFile file) throws IOException;
}
