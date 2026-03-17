package com.medicinesStore.controller;

import com.medicinesStore.entity.UserInfo;
import com.medicinesStore.security.JwtUtil;
import com.medicinesStore.service.UserInfoService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
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

        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(userInfo.getUsername(), userInfo.getPassword()));

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
            return ResponseEntity.internalServerError().body(Map.of("error", "Failed to send OTP"));
        }

        return ResponseEntity.ok(Map.of("message", "OTP sent successfully", "email", user.getEmail()));
    }

    @DeleteMapping("/delete")
    public ResponseEntity<String> deleteAccount(org.springframework.security.core.Authentication authentication) {
        String username = authentication.getName();
        userInfoService.removeAccount(username);
        return ResponseEntity.ok("Successfully Deleted!");
    }

    @GetMapping("/me")
    public ResponseEntity<?> getCurrentUser(Authentication authentication) {
        if (authentication == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("error", "User not authenticated"));
        }

        String username = authentication.getName();

        UserInfo user = userInfoService.getByUsername(username);

        return ResponseEntity.ok(Map.of(
                "email", user.getEmail(),
                "role", user.getRole().name()
        ));
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
    public ResponseEntity<?> verifyOtp(@RequestBody Map<String, String> request, HttpServletResponse response) {

        String email = request.get("email");
        String otp = request.get("otp");

        if (email == null || otp == null) {
            return ResponseEntity.badRequest().body(Map.of("error", "Email or OTP missing"));
        }

        boolean isValid = userInfoService.verifyOtp(email, otp);


        if (!isValid) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("error", "Invalid or expired OTP"));
        }

        UserInfo user = userInfoService.getByEmail(email);


        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("error", "User not found"));
        }

        try {
            Map<String, Object> claim = new HashMap<>();
            claim.put("userId", user.getId());
            claim.put("roles", user.getRole());

            String token = jwtUtil.generateToken(claim, user.getUsername());

            ResponseCookie cookie = ResponseCookie.from("token", token).httpOnly(true).secure(false).path("/").maxAge(24 * 60 * 60).sameSite("Lax").build();

            response.addHeader(HttpHeaders.SET_COOKIE, cookie.toString());

            return ResponseEntity.ok(Map.of("message", "Login successful", "role", user.getRole().name()));

        } catch (Exception e) {
            e.printStackTrace(); // 🔥 check console
            return ResponseEntity.internalServerError().body(Map.of("error", "Server error during login"));
        }
    }

    @PostMapping("/auth/logout")
    public ResponseEntity<?> logout(HttpServletResponse response) {
        ResponseCookie cookie = ResponseCookie.from("token", "").httpOnly(true).secure(false).path("/").maxAge(0) // delete cookie
                .build();
        response.addHeader(HttpHeaders.SET_COOKIE, cookie.toString());
        return ResponseEntity.ok(Map.of("message", "Logged out"));
    }
}