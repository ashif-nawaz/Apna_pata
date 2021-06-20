import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
    Container : {
      position: "absolute",
      top: "1rem",
      left: "50%",
      transform: "translateX(-50%)",

      "@media screen and ( min-width: 600px )": {},
    "@media screen and ( min-width: 960px )": {
      position: "absolute",
      top: "5rem",
      left: "40%",
      transform: "translateX(-50%)",
   
    },
    "@media screen and ( min-width: 1280px )": {},
    "@media screen and ( min-width: 1920px )": {},
    },
    Text : {
      width: "100%",
      whiteSpace: "nowrap",
      fontFamily: "Dancing Script, cursive",
    },
    SmallText : {
      fontSize: "2rem"
    }

})


const HeroBanner = (props) => {
  const classes = useStyles();
  return (
    <div
      className={classes.Container}
    >
      <Typography
        variant="h3"
        component="h1"
        className={classes.Text}
      >
        Search your dream...
      </Typography>
      <Typography
        variant="h2"
        component="h1"
        className={`${classes.Text} ${classes.SmallText}`}
      >
        and make it reality
      </Typography>
    </div>
  );
};

export default HeroBanner;
