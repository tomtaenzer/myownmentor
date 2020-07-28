import React, {useEffect, useState} from 'react';
import {fetchAllMentorCards} from "../utils/mentor-utils";
import MentorSingleCard from "./MentorSingleCard";

import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles( {

    wrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap"
    }

})


export default function MentorCards({imageURl, name, university}){
    const classes = useStyles();
    const [mentorCards, setMentorCards] = useState([]);

    useEffect(() => {
        fetchAllMentorCards()
            .then(data => setMentorCards(data));
    },[])
        console.log(mentorCards);
    return (

        <div className={classes.wrapper}>

                {
                    mentorCards.map(mentorCard => <MentorSingleCard key={mentorCard.id} firstName={mentorCard.firstName} lastName={mentorCard.lastName } university={mentorCard.university} description={mentorCard.description}></MentorSingleCard>)
                }

        </div>

    )

}
