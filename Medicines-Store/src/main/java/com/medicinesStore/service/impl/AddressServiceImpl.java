package com.medicinesStore.service.impl;

import com.medicinesStore.entity.Address;
import com.medicinesStore.entity.UserInfo;
import com.medicinesStore.repository.AddressReop;
import com.medicinesStore.repository.UserRepo;
import com.medicinesStore.service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AddressServiceImpl implements AddressService {

    @Autowired
    private AddressReop addressReop;

    @Autowired
    private UserRepo userRepo;

    @Override
    public Address saveAddress(Address address, Long userId) {

        UserInfo user = userRepo.findById(userId)
                .orElseThrow(() ->
                        new UsernameNotFoundException("User Not Found"));

        // If new address is default
        if (Boolean.TRUE.equals(address.getIsDefault())) {

            List<Address> addresses =
                    addressReop.findByUserInfo_Id(userId);

            for (Address existingAddress : addresses) {
                existingAddress.setIsDefault(false);
            }

            addressReop.saveAll(addresses);
        }

        address.setUserInfo(user);

        return addressReop.save(address);
    }

    @Override
    public List<Address> getAddressesByUser(Long userId) {

        userRepo.findById(userId)
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found"));

        return addressReop.findByUserInfo_Id(userId);
    }

    @Override
    public Address getAddressById(Long addressId) {

        return addressReop.findById(addressId)
                .orElseThrow(() -> new RuntimeException("Address Not Found"));
    }

    @Override
    public Address updateAddress(Long addressId, Address address) {

        Address existingAddress = addressReop.findById(addressId)
                .orElseThrow(() -> new RuntimeException("Address Not Found"));

        existingAddress.setAddressLine(address.getAddressLine());
        existingAddress.setVillage(address.getVillage());
        existingAddress.setCity(address.getCity());
        existingAddress.setState(address.getState());
        existingAddress.setPincode(address.getPincode());
        existingAddress.setLatitude(address.getLatitude());
        existingAddress.setLongitude(address.getLongitude());

        if (address.getIsDefault()) {

            List<Address> addresses =
                    addressReop.findByUserInfo_Id(
                            existingAddress.getUserInfo().getId());

            for (Address a : addresses) {
                a.setIsDefault(false);
                addressReop.save(a);
            }

            existingAddress.setIsDefault(true);
        }

        return addressReop.save(existingAddress);
    }

    @Override
    public void deleteAddress(Long addressId) {

        Address address = addressReop.findById(addressId)
                .orElseThrow(() -> new RuntimeException("Address Not Found"));

        addressReop.delete(address);
    }

    @Override
    public Address getDefaultAddress(Long userId) {

        return addressReop.findByUserInfo_IdAndIsDefaultTrue(userId)
                .orElseThrow(() -> new RuntimeException("Default Address Not Found"));
    }

    @Override
    public Address setDefaultAddress(Long userId, Long addressId) {

        Address selectedAddress = addressReop.findById(addressId)
                .orElseThrow(() -> new RuntimeException("Address Not Found"));

        List<Address> addresses = addressReop.findByUserInfo_Id(userId);

        for (Address address : addresses) {
            address.setIsDefault(false);
            addressReop.save(address);
        }

        selectedAddress.setIsDefault(true);

        return addressReop.save(selectedAddress);
    }
}