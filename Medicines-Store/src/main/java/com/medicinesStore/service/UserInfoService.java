package com.medicinesStore.service;

import com.medicinesStore.entity.UserInfo;
import com.medicinesStore.repository.UserRepo;
import jakarta.transaction.Transactional;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserInfoService {

    private final UserRepo userRepo;
    private final PasswordEncoder passwordEncoder;

    public UserInfoService(UserRepo userRepo, PasswordEncoder passwordEncoder) {
        this.userRepo = userRepo;
        this.passwordEncoder = passwordEncoder;
    }


    public String register(UserInfo userInfo) {
        UserInfo user = new UserInfo();

        user.setFullName(userInfo.getFullName());
        user.setEmail(userInfo.getEmail());
        user.setUsername(userInfo.getUsername());
        user.setPassword(passwordEncoder.encode(userInfo.getPassword()));
        userRepo.save(user);
        return "Successfully Register";
    }

    @Transactional
    public void removeAccount(String username) {
        UserInfo user = userRepo.findByUsername(username).orElseThrow();
        userRepo.delete(user);
    }


}
