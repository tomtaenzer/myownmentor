package de.neuefische.myownmentor.service;

import de.neuefische.myownmentor.db.MentorCardDb;
import de.neuefische.myownmentor.model.MentorCardUser_P;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service // Placeholder
public class MentorCardService_P {

    private final MentorCardDb mentorCardDb;

    @Autowired
    public MentorCardService_P(MentorCardDb mentorCardDb){
        this.mentorCardDb = mentorCardDb;
    }

    public void addMentorCard(MentorCardUser_P mentorCardUserToAdd){

        mentorCardDb.addMentorCard(mentorCardUserToAdd);
    }


    public List<MentorCardUser_P> getAllMentorCards() {
        return mentorCardDb.getMentorCardUsers();
    }

    public List<MentorCardUser_P> findMentorCardsByUniverstiy(String university) {
        List<MentorCardUser_P> result = new ArrayList<>();
        List<MentorCardUser_P> mentors = mentorCardDb.getMentorCardUsers();
        for (MentorCardUser_P mentorcard : mentors) {
            if (mentorcard.getUniversity().equals(university)) {
                result.add(mentorcard);
            }
        }

        return result;
    }
}
