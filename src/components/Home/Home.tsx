import React, { Suspense } from "react";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Navbar } from "../../components/Navbar";
import { Link } from "react-router-dom";
import Pure from "../../assets/images/homepage.jpeg";

interface Venom {
  title: string;
}

const useStyles = makeStyles({
  background: {
    backgroundImage: `url(${Pure})`,
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

export const Home = (props: Venom) => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <div className={`${classes.background}`}>
        <div className={classes.main_text}>
          <Button>
            <Link to="/whiskey" className={classes.button_text}>
              Our Collection
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};
