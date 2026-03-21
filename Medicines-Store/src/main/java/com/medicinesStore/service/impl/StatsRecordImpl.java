package com.medicinesStore.service.impl;

import com.medicinesStore.entity.Medicines;
import com.medicinesStore.entity.StatsRecord;
import com.medicinesStore.exception.MedicineNotFoundException;
import com.medicinesStore.repository.MedicineRepo;
import com.medicinesStore.repository.StatsRecordRepo;
import com.medicinesStore.service.StatsRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class StatsRecordImpl implements StatsRecordService {

    @Autowired
    private StatsRecordRepo statsRecordRepo;

    @Autowired
    private MedicineRepo medicineRepo;

    @Override
    public String addActivity(StatsRecord statsRecord) {

        Medicines med = medicineRepo.findById(statsRecord.getMed_id())
                .orElseThrow(() -> new MedicineNotFoundException("Medicine Not Found"));

        StatsRecord s = new StatsRecord();

        s.setMedicines(med);

        // 🔥 NULL SAFE LOGIC
        if (med.getExpiryDate() != null && med.getExpiryDate().isBefore(LocalDate.now())) {
            s.setType("EXPIRED");
        } else if (med.getStock() != null && med.getStock() < 10) {
            s.setType("LOW_STOCK");
        } else {
            s.setType(statsRecord.getType());
        }

        s.setActivityDateTime(LocalDateTime.now());

        statsRecordRepo.save(s);

        return "Successfully Added";
    }

    @Override
    public List<StatsRecord> getRecentRecord() {
        return statsRecordRepo.findTop10ByOrderByActivityDateTimeDesc();
    }

    @Override
    public List<StatsRecord> getByType(String type) {
        return statsRecordRepo.findByTypeOrderByActivityDateTimeDesc(type);
    }
}