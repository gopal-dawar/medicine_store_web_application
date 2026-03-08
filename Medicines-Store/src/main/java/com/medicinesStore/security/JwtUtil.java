package com.medicinesStore.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Date;
import java.util.Map;

@Component
public class JwtUtil {

    private final SecretKey secretKey = Keys.hmacShaKeyFor("sklfjdlkfjdkjk323423413324flfadjk234".getBytes(StandardCharsets.UTF_8));


    public String generateToken(Map<String, Object> claims, String username) {
        return Jwts.builder().setClaims(claims).setSubject(username).setIssuer(new Date().toString()).setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60)).signWith(secretKey).compact();
    }

    public Claims extractClaims(String token) {
        return Jwts.parserBuilder().setSigningKey(secretKey).build().parseClaimsJws(token).getBody();
    }

    public String extractUsername(String token) {
        return extractClaims(token).getSubject();
    }

    public Boolean isTokenValid(String token) {
        return extractClaims(token).getExpiration().after(new Date());
    }

    public Long extractUserId(String token) {
        return extractClaims(token).get("userId", Long.class);
    }

}
