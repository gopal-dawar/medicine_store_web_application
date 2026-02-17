package com.medicinesStore.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDateTime;

@RestControllerAdvice
public class GlobalExceptionHandler extends RuntimeException {


    @ExceptionHandler(CategoryNotFoundException.class)
    public ResponseEntity<ErrorResponse> categoryNotFoundExceptionHandler(CategoryNotFoundException ex) {
        ErrorResponse error = new ErrorResponse("Category Not Found!", HttpStatus.NOT_FOUND.value(), LocalDateTime.now());
        return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
    }


    @ExceptionHandler(MedicineNotFoundException.class)
    public ResponseEntity<ErrorResponse> medicineNotFoundExceptionHandler(MedicineNotFoundException ex) {
        ErrorResponse error = new ErrorResponse("Medicine not found", HttpStatus.NOT_FOUND.value(), LocalDateTime.now());
        return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> globalExceptionHandler(Exception ex) {
        ErrorResponse error = new ErrorResponse(
                "Internal Server Error", HttpStatus.INTERNAL_SERVER_ERROR.value(), LocalDateTime.now()
        );
        return new ResponseEntity<>(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }

}
