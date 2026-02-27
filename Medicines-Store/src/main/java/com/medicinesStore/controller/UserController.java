package com.medicinesStore.controller;

import com.medicinesStore.entity.UserInfo;
import com.medicinesStore.security.JwtUtil;
import com.medicinesStore.service.UserInfoService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
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

        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(userInfo.getUsername(), userInfo.getPassword()));

        UserInfo user = userInfoService.getByUsername(userInfo.getUsername());

        String token = jwtUtil.generateToken(user.getId(), user.getUsername(), user.getRole().name());

        return ResponseEntity.ok(Map.of("message", "Login Successfully", "token", token, "role", user.getRole().name()));
    }


    @DeleteMapping("/delete")
    public ResponseEntity<String> deleteAccount(org.springframework.security.core.Authentication authentication) {

        String username = authentication.getName();
        userInfoService.removeAccount(username);

        return ResponseEntity.ok("Successfully Deleted!");
    }
}
