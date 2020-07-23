package de.neuefische.myownmentor.service;

import de.neuefische.myownmentor.db.MentorCardDb;
import de.neuefische.myownmentor.model.MentorCard;
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

    public void addMentorCard(MentorCard mentorCardToAdd){

        mentorCardDb.addMentorCard(mentorCardToAdd);
    }


    public List<MentorCard> getAllMentorCards() {
        return mentorCardDb.getMentorCards();
    }

    public List<MentorCard> findMentorCardsByUniverstiy(String university) {
        List<MentorCard> result = new ArrayList<>();
        List<MentorCard> mentors = mentorCardDb.getMentorCards();
        for (MentorCard mentorcard : mentors) {
            if (mentorcard.getUniversity().equals(university)) {
                result.add(mentorcard);
            }
        }

        return result;
    }
}
