package de.neuefische.myownmentor.controller;

import de.neuefische.myownmentor.model.MentorCardUser_P;
import de.neuefische.myownmentor.service.MentorCardService_P;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/mentorCards") // - only placeholder
public class StudentController_P {

    private final MentorCardService_P mentorCardService;

    @Autowired
    public StudentController_P(MentorCardService_P mentorCardService){
        this.mentorCardService = mentorCardService;
    }

    @GetMapping
    public List<MentorCardUser_P>getALLMentorCads(){
        return mentorCardService.getAllMentorCards();
    }



}
