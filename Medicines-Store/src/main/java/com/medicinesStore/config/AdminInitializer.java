package com.medicinesStore.config;

import com.medicinesStore.entity.Role;
import com.medicinesStore.entity.UserInfo;
import com.medicinesStore.repository.UserRepo;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class AdminInitializer {

    @Bean
    CommandLineRunner createAdmin(UserRepo userRepo,
                                  PasswordEncoder passwordEncoder) {

        return args -> {
            if (userRepo.findByUsername("admin").isEmpty()) {
                UserInfo admin = new UserInfo();
                admin.setFullName("Admin");
                admin.setEmail("gopaldawar15@gmail.com");
                admin.setUsername("admin123");
                admin.setPassword(passwordEncoder.encode("admin123"));
                admin.setRole(Role.ADMIN);

                userRepo.save(admin);
            }
        };
    }
}