import React, {useEffect, useState} from 'react';
import {fetchAllMentorCards} from "../utils/mentor-utils";


export default function MentorCard(){

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
                    mentorCards.map(mentorCard => <li key={mentorCard.id}>{mentorCard.firstName}</li>)
                }
            </ul>
        </div>

    )

}
