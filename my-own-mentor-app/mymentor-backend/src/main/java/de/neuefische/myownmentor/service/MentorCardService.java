package de.neuefische.myownmentor.service;

import de.neuefische.myownmentor.db.MentorCardDb;
import de.neuefische.myownmentor.model.MentorCardUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MentorCardService {

    private final MentorCardDb mentorCardDb;

    @Autowired
    public MentorCardService(MentorCardDb mentorCardDb){
        this.mentorCardDb = mentorCardDb;
    }

    public void addMentorCard(MentorCardUser mentorCardUserToAdd){

        mentorCardDb.addMentorCard(mentorCardUserToAdd);
    }


    public List<MentorCardUser> getAllMentorCards() {
        return mentorCardDb.getMentorCardUsers();
    }

    public List<MentorCardUser> findMentorCardsByUniverstiy(String university) {
        List<MentorCardUser> result = new ArrayList<>();
        List<MentorCardUser> mentors = mentorCardDb.getMentorCardUsers();
        for (MentorCardUser mentorcard : mentors) {
            if (mentorcard.getUniversity().equals(university)) {
                result.add(mentorcard);
            }
        }

        return result;
    }
}
