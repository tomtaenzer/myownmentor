package de.neuefische.myownmentor.service;

import de.neuefische.myownmentor.db.MentorDb;
import de.neuefische.myownmentor.model.Mentor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MentorService {
    private final MentorDb mentorDb;


    @Autowired
    public MentorService(MentorDb mentorDb){
        this.mentorDb = mentorDb;
    }

    public Iterable<Mentor> getAllMentors(){
        return mentorDb.findAll();
    }
}
