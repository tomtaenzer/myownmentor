package de.neuefische.myownmentor.service;

import de.neuefische.myownmentor.db.MentorDb;
import de.neuefische.myownmentor.model.AppUser;
import de.neuefische.myownmentor.model.Mentor;


import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MentorRegistrationService {

    private final MentorDb mentorDb;

    @Autowired
    public MentorRegistrationService(MentorDb mentorDb) {
        this.mentorDb = mentorDb;

    }

    public void registerMentor (String mentorUsername, String mentorName, String mentorLastName){
        Mentor newMentor = new Mentor();
        newMentor.setMentorUserName(mentorUsername);
        newMentor.setMentorName(mentorName);
        newMentor.setMentorLastName(mentorLastName);
        newMentor.setEMailAddress("");
        newMentor.setUniversity("");
        newMentor.setSubject("");
        newMentor.setSemester("");
        newMentor.setPricing("");
        mentorDb.save(newMentor);
    }

    public Optional <Mentor> getMentorByUserName(String userName){
        return mentorDb.findById(userName);
    }


}
