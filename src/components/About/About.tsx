import React from "react";
import { Navbar } from "../Navbar";
import Pure2 from "../../assets/images/about.jpeg";
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
  background: {
    backgroundImage: `url(${Pure2})`,
    width: "100%",
    height: "200%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    position: "absolute",
    zIndex: -1,
  },
  main_text: {
    textAlign: "center",
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
  },
  button_text: {
    color: "white",
    textDecoration: "none",
  },
});


export const About = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <div className={`${classes.background}`}>
        <div className={classes.main_text}>
        <h1>A toast to graduating!</h1>
      </div>
      </div>
    </div>
  );
};