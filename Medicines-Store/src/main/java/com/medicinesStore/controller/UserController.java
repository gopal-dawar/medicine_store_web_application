package com.medicinesStore.controller;

import com.medicinesStore.entity.UserInfo;
import com.medicinesStore.security.JwtUtil;
import com.medicinesStore.service.UserInfoService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
public class UserController {

    private final UserInfoService userInfoService;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;

    public UserController(JwtUtil jwtUtil, UserInfoService userInfoService, AuthenticationManager authenticationManager) {
        this.userInfoService = userInfoService;
        this.authenticationManager = authenticationManager;
        this.jwtUtil = jwtUtil;
    }


    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody UserInfo userInfo) {
        return ResponseEntity.ok(userInfoService.register(userInfo));
    }


    @PostMapping("/auth/login")
    public ResponseEntity<?> login(@RequestBody UserInfo userInfo) {

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        userInfo.getUsername(),
                        userInfo.getPassword()
                )
        );

        UserInfo user = userInfoService.getByUsername(userInfo.getUsername());

        // ✅ safety checks
        if (user == null) {
            return ResponseEntity.badRequest().body(Map.of("error", "User not found"));
        }

        if (user.getEmail() == null || user.getEmail().isEmpty()) {
            return ResponseEntity.badRequest().body(Map.of("error", "Email not available"));
        }

        try {
            userInfoService.sendOtp(user.getEmail());
        } catch (Exception e) {
            e.printStackTrace(); // 👈 VERY IMPORTANT (check console)
            return ResponseEntity.internalServerError().body(
                    Map.of("error", "Failed to send OTP")
            );
        }

        return ResponseEntity.ok(
                Map.of(
                        "message", "OTP sent successfully",
                        "email", user.getEmail()
                )
        );
    }

    @DeleteMapping("/delete")
    public ResponseEntity<String> deleteAccount(org.springframework.security.core.Authentication authentication) {
        String username = authentication.getName();
        userInfoService.removeAccount(username);
        return ResponseEntity.ok("Successfully Deleted!");
    }

    @GetMapping("/me")
    public ResponseEntity<UserInfo> getCurrentUser(org.springframework.security.core.Authentication authentication) {
        String username = authentication.getName(); // from JWT
        UserInfo user = userInfoService.getByUsername(username);
        return ResponseEntity.ok(user);
    }

    @PostMapping("/otp")
    public ResponseEntity<?> sendOtp(@RequestParam String email) {

        try {
            userInfoService.sendOtp(email);

            return ResponseEntity.ok().body(Map.of("message", "OTP sent successfully", "email", email));

        } catch (Exception e) {

            return ResponseEntity.badRequest().body(Map.of("error", "Failed to send OTP"));
        }

    }

    @PostMapping("/auth/verify-otp")
    public ResponseEntity<?> verifyOtp(@RequestBody Map<String, String> request) {

        String email = request.get("email");
        String otp = request.get("otp");

        boolean isValid = userInfoService.verifyOtp(email, otp);

        if (isValid) {

            UserInfo user = userInfoService.getByEmail(email);

            Map<String, Object> claim = new HashMap<>();
            claim.put("userId", user.getId());
            claim.put("roles", user.getRole());

            String token = jwtUtil.generateToken(claim, user.getUsername());

            return ResponseEntity.ok(Map.of("token", token, "role", user.getRole().name()));
        }

        return ResponseEntity.badRequest().body(Map.of("error", "Invalid or expired OTP"));
    }
}