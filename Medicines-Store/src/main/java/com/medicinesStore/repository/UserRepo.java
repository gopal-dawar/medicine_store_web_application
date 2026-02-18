package com.medicinesStore.repository;

import com.medicinesStore.entity.UserInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepo extends JpaRepository<UserInfo, Long> {

    Optional<UserInfo> findByUsername(String username);

    void deleteByUsername(String username);
}
