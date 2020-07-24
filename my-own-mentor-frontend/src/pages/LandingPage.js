import React from "react";
import MentorCards from "../mentor/MentorCards";
import makeStyles from "@material-ui/core/styles/makeStyles";


const useStyles = makeStyles( () => ({

  image:{
    backgroundImage: 'url(https://cdn.pixabay.com/photo/2018/05/19/00/53/online-3412473_1280.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backGroundPosition: "center",
    minHeight: '72vh'
  }
}));

export default function LandingPage(){
  const classes = useStyles();
  return (
  <div className={classes.image}>
  <MentorCards />
  </div>
  )
}