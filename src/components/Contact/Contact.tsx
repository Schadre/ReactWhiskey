import React from "react";
import { Navbar } from "../Navbar";
import Pure3 from "../../assets/images/contact.jpeg";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  background: {
    backgroundImage: `url(${Pure3})`,
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
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
  },
  button_text: {
    color: "white",
    textDecoration: "none",
  },
});




export const Contact = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <div className={`${classes.background}`}>
        <div className={classes.main_text}>
      <h1>Last call for Whiskey!</h1>
      </div>
      </div>
    </div>
  );
};
