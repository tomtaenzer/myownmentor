package de.neuefische.myownmentor.controller;


import de.neuefische.myownmentor.model.AppUser;
import de.neuefische.myownmentor.model.Mentor;
import de.neuefische.myownmentor.model.dto.AppUserDto;
import de.neuefische.myownmentor.model.dto.MentorRegisterDto;
import de.neuefische.myownmentor.service.AppUserService;
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
    private final AppUserService appUserService;

    public MentorRegistrationController(MentorRegistrationService mentorRegistrationService, AppUserService appUserService) {
        this.mentorRegistrationService = mentorRegistrationService;
        this.appUserService = appUserService;
    }

    @PostMapping("/auth/mentorregistration")
    public MentorRegistrationService registration (@RequestBody AppUserDto data) {
        String userName = data.getUsername();
        AppUser newAppUser = new AppUser(data.getUsername(), data.getFirstName(), data.getLastName(),data.getEmail(), data.getPassword(), true );
        Optional<AppUser> optionalAppUser = appUserService.getUserByUserName(userName);
        if (optionalAppUser.isEmpty()) {
            appUserService.saveNewAppUser(newAppUser);
            mentorRegistrationService.registerMentor(data.getUsername(), data.getFirstName(), data.getLastName());
            return mentorRegistrationService;

        } else {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "User with e-mail address " + userName + " does already exist in database");


    }


}}
