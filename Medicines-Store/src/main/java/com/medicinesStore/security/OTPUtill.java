package com.medicinesStore.security;


import com.medicinesStore.entity.UserInfo;
import com.medicinesStore.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.security.SecureRandom;
import java.time.LocalDateTime;

public class OTPUtill {


    @Autowired
    private UserRepo userRepo;

    private static final SecureRandom random = new SecureRandom();

    public static String generateOtp() {
        int otp = 100000 + random.nextInt(900000);
        return String.valueOf(otp);
    }




}
