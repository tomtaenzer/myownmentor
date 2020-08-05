package de.neuefische.myownmentor.controller;


import de.neuefische.myownmentor.model.AppUser;
import de.neuefische.myownmentor.model.Mentor;
import de.neuefische.myownmentor.model.dto.MentorRegisterDto;
import de.neuefische.myownmentor.service.MentorRegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;


@RestController
public class MentorRegistrationController {

    @Autowired
    private final MentorRegistrationService mentorRegistrationService;

    public MentorRegistrationController(MentorRegistrationService mentorRegistrationService) {
        this.mentorRegistrationService = mentorRegistrationService;
    }

    @PostMapping("/auth/mentorregistration")
    public Mentor registration (@RequestBody MentorRegisterDto data) {
        String userName = data.getMentorUserName();
        Optional<Mentor> optionalMentor = mentorRegistrationService.getMentorByUserName(userName);
        if (optionalMentor.isEmpty()) {
            return mentorRegistrationService.register(data.getMentorUserName(), data.getMentorName(), data.getMentorLastName(),
           data.getUniversity(), data.getSubject(), data.getSemester(), data.getEMailAddress(), data.getPricing());
        } else {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "User with e-mail address " + userName + " does already exist in database");


    }


}}
