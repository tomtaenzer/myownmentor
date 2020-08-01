package de.neuefische.myownmentor.controller;

import de.neuefische.myownmentor.model.LogInData;
import de.neuefische.myownmentor.model.Mentor;
import de.neuefische.myownmentor.security.JWTUtils;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashMap;

@RequestMapping("auth/mentorlogin")
@RestController
public class MentorLoginController {



        private final AuthenticationManager authenticationManager;
        private final JWTUtils jwtUtils;

        public MentorLoginController(AuthenticationManager authenticationManager, JWTUtils jwtUtils) {
            this.authenticationManager = authenticationManager;
            this.jwtUtils = jwtUtils;
        }

        @PostMapping
        public String login(@RequestBody Mentor data){
            try {
                authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(data.getMentorUserName(), data.getPassword()));
                return jwtUtils.createToken(new HashMap<>(), data.getMentorUserName());
            }catch (Exception e){
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "invalid credentials");
            }
        }


}
