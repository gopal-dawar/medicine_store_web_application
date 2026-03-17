package com.medicinesStore.service;

import com.medicinesStore.entity.Role;
import com.medicinesStore.entity.UserInfo;
import com.medicinesStore.repository.UserRepo;
import com.medicinesStore.security.OTPUtill;
import jakarta.transaction.Transactional;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class UserInfoService {

    private final UserRepo userRepo;
    private final PasswordEncoder passwordEncoder;
    private final EmailService emailService;

    public UserInfoService(EmailService emailService, UserRepo userRepo, PasswordEncoder passwordEncoder) {
        this.userRepo = userRepo;
        this.passwordEncoder = passwordEncoder;
        this.emailService = emailService;
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
        return userRepo.findByUsername(username).orElseThrow(() -> new RuntimeException("User not found"));
    }

    @Transactional
    public void removeAccount(String username) {
        userRepo.deleteByUsername(username);
    }

    public void sendOtp(String email) {
        UserInfo user = userRepo.findByEmail(email).orElseThrow();

        String otp = OTPUtill.generateOtp();

        user.setOtp(otp);
        user.setOtpExpire(LocalDateTime.now().plusMinutes(5));
        userRepo.save(user);
        try {
            emailService.sendOtp(email, otp);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public UserInfo getByEmail(String email) {
        return userRepo.findByEmail(email).orElseThrow();
    }

    public boolean verifyOtp(String email, String userOtp) {

        UserInfo user = userRepo.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("User Not Found"));

        if (user.getOtp() == null || user.getOtpExpire() == null) {
            return false;
        }

        if (!user.getOtp().trim().equals(userOtp.trim())) {
            return false;
        }

        if (user.getOtpExpire().isBefore(LocalDateTime.now())) {
            return false;
        }
        user.setVerified(true);
        user.setOtp(null);
        user.setOtpExpire(null);

        userRepo.save(user);
        return true;
    }


}
