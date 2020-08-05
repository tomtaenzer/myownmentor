package de.neuefische.myownmentor.service;

import de.neuefische.myownmentor.db.MentorDb;
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

    public Mentor register (String userName, String name, String lastName, String university, String subject, String semester,
    String email, String pricing){
        Mentor mentor = new Mentor(
      userName, name, lastName, university, subject, semester, email, pricing);
        return mentorDb.save(mentor);
    }

    public Optional <Mentor> getMentorByUserName(String userName){
        return mentorDb.findById(userName);
    }


}
