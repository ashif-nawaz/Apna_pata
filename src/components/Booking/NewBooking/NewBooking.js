import { Typography, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import image1 from "../../../assets/p1.png";
import image2 from "../../../assets/p2.png";
import image3 from "../../../assets/p3.png";
import image4 from "../../../assets/p4.png";
import image5 from "../../../assets/p5.png";
import image6 from "../../../assets/p6.png";
import Item from "./Item";

const booking = [
  {
    image: image1,
  },
  {
    image: image2,
  },
  {
    image: image3,
  },
  {
    image: image4,
  },
  {
    image: image5,
  },
  {
    image: image6,
  },
];

const useStyles = makeStyles({
  Container: {
    width: "100%",
     
    "@media screen and ( min-width: 600px )": {},
    "@media screen and ( min-width: 960px )": {
      minWidth: "400px",
      width: "18%",
      paddingRight: "3rem",
      borderRight: "2px solid lightgray",
    },
    "@media screen and ( min-width: 1280px )": {},
    "@media screen and ( min-width: 1920px )": {},
  },
  Typo: {
    marginBottom: "2rem",
  },
});

const NewBooking = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.Container}>
      <Typography
        align="center"
        variant="h4"
        component="h4"
        className={classes.Typo}
      >
        New Booking
      </Typography>
      <Grid container direction="column" justify="space-between" spacing={8}>
        {booking.map((item) => {
          return <Item key={item} item={item} />;
        })}
      </Grid>
    </div>
  );
};

export default NewBooking;
