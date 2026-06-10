package com.medicinesStore.service;

import com.medicinesStore.entity.Address;

import java.util.List;

public interface AddressService {
    Address saveAddress(Address address, Long userId);

    List<Address> getAddressesByUser(Long userId);

    Address getAddressById(Long addressId);

    Address updateAddress(Long addressId, Address address);

    void deleteAddress(Long addressId);

    Address getDefaultAddress(Long userId);

    Address setDefaultAddress(Long userId, Long addressId);
}
