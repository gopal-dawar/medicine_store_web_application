package com.medicinesStore.repository;

import com.medicinesStore.entity.Activity;
import com.medicinesStore.entity.StatsRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StatsRecordRepo extends JpaRepository<StatsRecord, Long> {
    @Query("SELECT c FROM StatsRecord c WHERE c.type = :type")
    List<StatsRecord> findByActivityType(Activity type);
}
