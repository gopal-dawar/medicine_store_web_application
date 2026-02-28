package com.medicinesStore.service;

import com.medicinesStore.entity.Role;
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

        if (userRepo.findByUsername(userInfo.getUsername()).isPresent()) {
            throw new RuntimeException("Username already exists");
        }

        UserInfo user = new UserInfo();
        user.setFullName(userInfo.getFullName());
        user.setEmail(userInfo.getEmail());
        user.setUsername(userInfo.getUsername());
        user.setPassword(passwordEncoder.encode(userInfo.getPassword()));
        user.setRole(Role.USER);
        userRepo.save(user);
        return "Successfully Registered";
    }

    public UserInfo getByUsername(String username) {
        return userRepo.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    @Transactional
    public void removeAccount(String username) {
        userRepo.deleteByUsername(username);
    }
}
