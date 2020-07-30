package de.neuefische.myownmentor.db;
import de.neuefische.myownmentor.model.MentorCardUser;

import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class MentorCardDb {

    private final List<MentorCardUser> mentorCardUsers = new ArrayList<>(
            List.of(new MentorCardUser("01", "Tom", "Tänzer", "Cologne", "Infromatics", "bla", "30", "tt@gmx"),
            new MentorCardUser( "02", "Nina", "Nonnenmacher", "Bielefeld", "politics", "blabla", "40", "nn@amazon")));

    public List <MentorCardUser> getMentorCardUsers(){
        return mentorCardUsers;
    }

    public void addMentorCard(MentorCardUser mentorCardUser){
        this.mentorCardUsers.add(mentorCardUser);
    }

    public void clearDB(){
        mentorCardUsers.clear();
    }
}


