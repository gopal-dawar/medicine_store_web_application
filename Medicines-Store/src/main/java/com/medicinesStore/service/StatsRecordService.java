package com.medicinesStore.service;

import com.medicinesStore.entity.StatsRecord;

import java.util.List;

public interface StatsRecordService {

    String addActivity(StatsRecord statsRecord);

    List<StatsRecord> getRecentRecord();

    List<StatsRecord> getByType(String type);
}