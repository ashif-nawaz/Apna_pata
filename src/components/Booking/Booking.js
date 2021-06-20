import { makeStyles } from "@material-ui/core";
import React from "react";
import TopProperty from "../TopProperty/TopProperty";
import NewBooking from "./NewBooking/NewBooking";

const useStyles = makeStyles({
  Container: {
    maxWidth: "100%",
    width: "100%",
    margin: "auto",
    display: "flex",
    flexDirection: "column",

    justifyContent: "space-between",
    "@media screen and ( min-width: 600px )": {},
    "@media screen and ( min-width: 960px )": {
      flexDirection: "row",
    },
    "@media screen and ( min-width: 1280px )": {},
    "@media screen and ( min-width: 1920px )": {},
  },
});

const Booking = (props) => {
  const classes = useStyles();
  return (
    <section className={classes.Container}>
      <NewBooking />
      <TopProperty />
    </section>
  );
};

export default Booking;
