package de.neuefische.myownmentor.db;
import de.neuefische.myownmentor.model.MentorCardUser_P;

import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class MentorCardDb {

    private final List<MentorCardUser_P> mentorCardUsers = new ArrayList<>(
            List.of(new MentorCardUser_P("01", "Tom", "Tänzer", "Cologne", "Infromatics", "bla", "30", "tt@gmx"),
            new MentorCardUser_P( "02", "Nina", "Nonnenmacher", "Bielefeld", "politics", "blabla", "40", "nn@amazon")));

    public List <MentorCardUser_P> getMentorCardUsers(){
        return mentorCardUsers;
    }

    public void addMentorCard(MentorCardUser_P mentorCardUser){
        this.mentorCardUsers.add(mentorCardUser);
    }

    public void clearDB(){
        mentorCardUsers.clear();
    }
}


