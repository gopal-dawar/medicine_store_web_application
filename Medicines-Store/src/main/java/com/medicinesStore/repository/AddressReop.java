package com.medicinesStore.repository;

import com.medicinesStore.entity.Address;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AddressReop extends JpaRepository<Address, Long> {

    // Get all addresses of a user
    List<Address> findByUserInfo_Id(Long userId);

    // Get default address of user
    Optional<Address> findByUserInfo_IdAndIsDefaultTrue(Long userId);

}