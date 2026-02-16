package com.medicinesStore.exception;


public class MedicineNotFoundException extends RuntimeException {
    public MedicineNotFoundException(String msg) {
        super(msg);
    }
}
