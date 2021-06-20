import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  Grid: {
    height: "300px",
  },
  Logo: {
    color: "white",
    fontWeight: "600",
    fontSize : "30px",
    "@media screen and ( min-width: 600px )": {},
    "@media screen and ( min-width: 960px )": {
      color: "white",
      fontWeight: "600",
      fontSize : '2.5rem'
    },
    "@media screen and ( min-width: 1280px )": {},
    "@media screen and ( min-width: 1920px )": {},
  },
});

const Col1 = (props) => {
  const classes = useStyles();

  return (
    <Grid item className={classes.Grid} xs={12} md={2}>
      <Typography
        align="right"
        variant="h2"
        component="h3"
        className={classes.Logo}
      >
        Apna Pata.com
      </Typography>
      <Typography align="right" variant="h5" component="p">
        Khushiyon ki Pehchan
      </Typography>
    </Grid>
  );
};

export default Col1;
