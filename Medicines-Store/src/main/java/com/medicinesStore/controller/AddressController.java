package com.medicinesStore.controller;

import com.medicinesStore.entity.Address;
import com.medicinesStore.service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/address")
public class AddressController {

    @Autowired
    private AddressService addressService;

    @PostMapping("/{userId}")
    public ResponseEntity<?> saveAddress(@RequestBody Address address, @PathVariable Long userId) {
        return new ResponseEntity<>(addressService.saveAddress(address, userId), HttpStatus.OK);
    }
}
