package de.neuefische.myownmentor.db;
import de.neuefische.myownmentor.model.MentorCard;

import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class MentorCardDb {

    private final List<MentorCard> mentorCards = new ArrayList<>(
            List.of(new MentorCard("01", "Tom", "Tänzer", "Cologne", "Infromatics", "bla", "30", "tt@gmx"),
            new MentorCard( "02", "Nina", "Nonnenmacher", "Bielefeld", "politics", "blabla", "40", "nn@amazon")));

    public List <MentorCard> getMentorCards(){
        return mentorCards;
    }

    public void addMentorCard(MentorCard mentorCard){
        this.mentorCards.add(mentorCard);
    }

    public void clearDB(){
        mentorCards.clear();
    }
}


