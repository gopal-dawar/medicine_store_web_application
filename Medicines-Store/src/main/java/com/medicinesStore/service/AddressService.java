package com.medicinesStore.service;

import com.medicinesStore.entity.Address;

public interface AddressService {
    public Address saveAddress(Address address, Long userId);
}
