package com.medicinesStore.controller;

import com.medicinesStore.entity.StatsRecord;
import com.medicinesStore.service.StatsRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/activity")
@CrossOrigin("*")
public class StatsRecordController {

    @Autowired
    private StatsRecordService statsRecordService;

    @PostMapping
    public String addActivity(@RequestBody StatsRecord statsRecord) {
        return statsRecordService.addActivity(statsRecord);
    }

    @GetMapping("/recent")
    public List<StatsRecord> getRecent() {
        return statsRecordService.getRecentRecord();
    }

    @GetMapping("/type/{type}")
    public List<StatsRecord> getByType(@PathVariable String type) {
        return statsRecordService.getByType(type);
    }
}