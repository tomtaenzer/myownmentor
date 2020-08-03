package de.neuefische.myownmentor.service;

import de.neuefische.myownmentor.db.MentorDb;
import de.neuefische.myownmentor.model.Mentor;
import de.neuefische.myownmentor.model.dto.MentorRegisterDto;
import de.neuefische.myownmentor.security.JWTUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class MentorRegistrationService {

    private final MentorDb mentorDb;
    private final AuthenticationManager authenticationManager;
    private final JWTUtils jwtUtils;
    BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    @Autowired
    public MentorRegistrationService(MentorDb mentorDb, AuthenticationManager authenticationManager, JWTUtils jwtUtils) {
        this.mentorDb = mentorDb;
        this.authenticationManager = authenticationManager;
        this.jwtUtils = jwtUtils;
    }

    public Mentor register (Mentor data){
        Mentor mentor = new Mentor();
        mentor.setMentorUserName(data.getMentorUserName());
        String encodedPw = encoder.encode(data.getPassword());
        mentor.setPassword(encodedPw);
        mentor.setMentorName(data.getMentorName());
        mentor.setMentorLastName(data.getMentorLastName());
        mentor.setUniversity(data.getUniversity());
        mentor.setSubject(data.getSubject());
        mentor.setSemester(data.getSemester());
        mentor.setEMailAddress(data.getEMailAddress());
        mentor.setPricing(data.getPricing());

       return mentorDb.save(mentor);
    }




}
