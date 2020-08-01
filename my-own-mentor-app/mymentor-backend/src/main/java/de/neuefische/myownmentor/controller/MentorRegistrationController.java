package de.neuefische.myownmentor.controller;


import de.neuefische.myownmentor.model.Mentor;
import de.neuefische.myownmentor.model.dto.MentorRegisterDto;
import de.neuefische.myownmentor.service.MentorRegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;


@RestController
public class MentorRegistrationController {

    @Autowired
    private final MentorRegistrationService mentorRegistrationService;

    public MentorRegistrationController(MentorRegistrationService mentorRegistrationService) {
        this.mentorRegistrationService = mentorRegistrationService;
    }


    @PostMapping("/auth/mentorregistration")
    public Mentor registration (@RequestBody MentorRegisterDto mentorRegisterDto) {
       return mentorRegistrationService.register(mentorRegisterDto);
    }

}
