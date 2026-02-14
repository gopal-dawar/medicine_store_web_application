package com.medicinesStore.controller;

import com.medicinesStore.entity.UserInfo;
import com.medicinesStore.security.JwtUtil;
import com.medicinesStore.service.UserInfoService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

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
    public ResponseEntity<Map<String, String>> login(@RequestBody UserInfo userInfo) {

        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(userInfo.getUsername(), userInfo.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = jwtUtil.generateToken(userInfo.getUsername());

        return ResponseEntity.ok(Map.of("message", "Login Successfully", "token", token));
    }

    @DeleteMapping("/delete")
    public ResponseEntity<String> deleteAccount(Authentication authentication) {

        if (authentication == null) {
            return ResponseEntity.status(401).body("Not Authenticated");
        }

        String username = authentication.getName();
        userInfoService.removeAccount(username);

        return ResponseEntity.ok("Successfully Deleted!");
    }
}
