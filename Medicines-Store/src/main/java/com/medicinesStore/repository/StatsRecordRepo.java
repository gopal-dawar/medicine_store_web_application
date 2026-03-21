package com.medicinesStore.repository;

import com.medicinesStore.entity.StatsRecord;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StatsRecordRepo extends JpaRepository<StatsRecord, Long> {

    List<StatsRecord> findTop10ByOrderByActivityDateTimeDesc();

    List<StatsRecord> findByTypeOrderByActivityDateTimeDesc(String type);
}