import React, {useEffect, useState} from 'react';
import {fetchAllMentorCards} from "../utils/mentor-utils";
import MentorSingleCard from "./MentorSingleCard";


export default function MentorCards({imageURl, name, university}){

    const [mentorCards, setMentorCards] = useState([]);

    useEffect(() => {
        fetchAllMentorCards()
            .then(data => setMentorCards(data));
    },[])
        console.log(mentorCards);
    return (

        <div>
            <ul>
                {
                    mentorCards.map(mentorCard => <MentorSingleCard key={mentorCard.id} firstName={mentorCard.firstname} lastName={mentorCard.lastName } university={mentorCard.university} description={mentorCard.description}></MentorSingleCard>)
                }
            </ul>
        </div>

    )

}
