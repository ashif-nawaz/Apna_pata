import { CardMedia, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import image from "../../assets/intro.png";
import HeroBanner from "./HeroBanner";
import Search from "./Search";

const useStyles = makeStyles({
  WelcomeBanner: {
    marginTop: "2rem",
    position: "relative",
    height : 'fit-content'
  },
  Col_2: {
    position: "relative",

  },
});

const WelcomeBanner = (props) => {
  const classes = useStyles();

  return (
    <section className={classes.WelcomeBanner}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <CardMedia component="img" height="450px" image={image} />
        </Grid>
        <Grid item xs={12} md={6} className={classes.Col_2}>
          <HeroBanner />
        </Grid>
      </Grid>
      <Search />
    </section>
  );
};

export default WelcomeBanner;
