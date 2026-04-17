package com.medicinesStore.service.impl;

import com.medicinesStore.entity.Address;
import com.medicinesStore.entity.UserInfo;
import com.medicinesStore.repository.AddressReop;
import com.medicinesStore.repository.UserRepo;
import com.medicinesStore.service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class AddressServiceImpl implements AddressService {

    @Autowired
    private AddressReop addressReop;

    @Autowired
    private UserRepo userRepo;

    @Override
    public Address saveAddress(Address address, Long userId) {

        UserInfo user = userRepo.findById(userId)
                .orElseThrow(() -> new UsernameNotFoundException("User Not found"));

        if (Boolean.TRUE.equals(address.getIsDefault())) {
            for (Address a : addressReop.findByUserInfo_Id(userId)) {
                a.setIsDefault(false);
                addressReop.save(a);
            }
        }

        address.setUserInfo(user);

        return addressReop.save(address);
    }
}
