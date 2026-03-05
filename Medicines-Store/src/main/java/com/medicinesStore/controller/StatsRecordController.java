package com.medicinesStore.controller;

import com.medicinesStore.entity.Activity;
import com.medicinesStore.entity.StatsRecord;
import com.medicinesStore.service.StatsRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/recentactivity")
public class StatsRecordController {

    @Autowired
    private StatsRecordService statsRecordService;

    @PostMapping
    public ResponseEntity<String> saveActivity(@RequestBody StatsRecord statsRecord) {
        return new ResponseEntity<>(statsRecordService.addActivity(statsRecord), HttpStatus.OK);
    }


    @GetMapping("/{type}")
    public ResponseEntity<List<StatsRecord>> getRecentActivity(@PathVariable Activity type) {
        return new ResponseEntity<>(statsRecordService.getRecentRecord(type), HttpStatus.OK);
    }

}
