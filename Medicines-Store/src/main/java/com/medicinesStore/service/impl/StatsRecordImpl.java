package com.medicinesStore.service.impl;

import com.medicinesStore.entity.Activity;
import com.medicinesStore.entity.Medicines;
import com.medicinesStore.entity.StatsRecord;
import com.medicinesStore.exception.MedicineNotFoundException;
import com.medicinesStore.repository.MedicineRepo;
import com.medicinesStore.repository.StatsRecordRepo;
import com.medicinesStore.service.StatsRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StatsRecordImpl implements StatsRecordService {

    @Autowired
    private StatsRecordRepo statsRecordRepo;

    @Autowired
    private MedicineRepo medicineRepo;


    @Override
    public String addActivity(StatsRecord statsRecord) {

        Medicines med = medicineRepo.findById(statsRecord.getMed_id()).orElseThrow(() -> new MedicineNotFoundException("Medicine Not Found"));


        StatsRecord s = new StatsRecord();
        s.setMedicines(statsRecord.getMedicines());
        s.setMed_id(statsRecord.getMed_id());
        s.setType(statsRecord.getType());
        s.setActivityDateTime(statsRecord.getActivityDateTime());
        s.setMedicines(med);
        statsRecordRepo.save(s);
        return "Successfully Added";
    }

    @Override
    public List<StatsRecord> getRecentRecord(Activity type) {
        return statsRecordRepo.findByActivityType(type);
    }


}
