package de.neuefische.myownmentor.controller;

import de.neuefische.myownmentor.model.MentorCard;
import de.neuefische.myownmentor.service.MentorCardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/mentorCards")
public class StudentController {

    private final MentorCardService mentorCardService;

    @Autowired
    public StudentController(MentorCardService mentorCardService){
        this.mentorCardService = mentorCardService;
    }

    @GetMapping
    public List<MentorCard>getALLMentorCads(){
        return mentorCardService.getAllMentorCards();
    }



}
