package com.medicinesStore.repository;

import com.medicinesStore.entity.Address;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AddressReop extends JpaRepository<Address, Long> {
    Optional<Address> findByAddressLineAndPincodeAndUserInfo_Id(
            String addressLine,
            String pincode,
            Long userId
    );

    List<Address> findByUserInfo_Id(Long userId);
}
