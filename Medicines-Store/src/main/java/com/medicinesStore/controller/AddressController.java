package com.medicinesStore.controller;

import com.medicinesStore.entity.Address;
import com.medicinesStore.service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/address")
public class AddressController {

    @Autowired
    private AddressService addressService;

    // Save Address
    @PostMapping("/{userId}")
    public ResponseEntity<?> saveAddress(
            @RequestBody Address address,
            @PathVariable Long userId) {

        return new ResponseEntity<>(
                addressService.saveAddress(address, userId),
                HttpStatus.CREATED);
    }

    // Get All Addresses By User
    @GetMapping("/user/{userId}")
    public ResponseEntity<?> getAddressesByUser(
            @PathVariable Long userId) {

        return ResponseEntity.ok(
                addressService.getAddressesByUser(userId));
    }

    // Get Address By Id
    @GetMapping("/{addressId}")
    public ResponseEntity<?> getAddressById(
            @PathVariable Long addressId) {

        return ResponseEntity.ok(
                addressService.getAddressById(addressId));
    }

    // Update Address
    @PutMapping("/{addressId}")
    public ResponseEntity<?> updateAddress(
            @PathVariable Long addressId,
            @RequestBody Address address) {

        return ResponseEntity.ok(
                addressService.updateAddress(addressId, address));
    }

    // Delete Address
    @DeleteMapping("/{addressId}")
    public ResponseEntity<?> deleteAddress(
            @PathVariable Long addressId) {

        addressService.deleteAddress(addressId);

        return ResponseEntity.ok("Address Deleted Successfully");
    }

    // Get Default Address
    @GetMapping("/default/{userId}")
    public ResponseEntity<?> getDefaultAddress(
            @PathVariable Long userId) {

        return ResponseEntity.ok(
                addressService.getDefaultAddress(userId));
    }

    // Set Default Address
    @PutMapping("/default/{userId}/{addressId}")
    public ResponseEntity<?> setDefaultAddress(
            @PathVariable Long userId,
            @PathVariable Long addressId) {

        return ResponseEntity.ok(
                addressService.setDefaultAddress(userId, addressId));
    }
}