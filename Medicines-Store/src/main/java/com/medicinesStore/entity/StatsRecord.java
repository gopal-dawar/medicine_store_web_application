package com.medicinesStore.entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
public class StatsRecord {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "medicine_id")
    private Medicines medicines;

    private Long med_id;

    @Enumerated(EnumType.STRING)
    private Activity type;

    private LocalDateTime activityDateTime;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Medicines getMedicines() {
        return medicines;
    }

    public void setMedicines(Medicines medicines) {
        this.medicines = medicines;
    }

    public Activity getType() {
        return type;
    }

    public void setType(Activity type) {
        this.type = type;
    }

    public LocalDateTime getActivityDateTime() {
        return activityDateTime;
    }

    public void setActivityDateTime(LocalDateTime activityDateTime) {
        this.activityDateTime = activityDateTime;
    }

    public Long getMed_id() {
        return med_id;
    }

    public void setMed_id(Long med_id) {
        this.med_id = med_id;
    }
}
