import React from "react";
import MentorCards from "../mentor/MentorCards";
import MentorUserDrawer from "../components/navigation/MentorUserDrawer";
import PlaceHolder from "../components/PlaceHolder";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({

  flexContainer: {
    display: "flex",

  }

}));






export default function MentorCardsPage(){
 const classes = useStyles();
  return (

      <div className={classes.flexContainer}>
   <MentorUserDrawer />
      </div>
  )

}