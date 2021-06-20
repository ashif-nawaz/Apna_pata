import { Button, ButtonGroup, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  Input: {
    width: "100%",
    padding: "5px 5px",
    fontSize: "10px",
    border: "none",
    outline: "none",
    backgroundColor: "#FCD9AF",
    "@media screen and ( min-width: 600px )": {},
    "@media screen and ( min-width: 960px )": {
      width: "80%",
      padding: "18px 25px",
      fontSize: "20px",
      border: "none",
      outline: "none",
      backgroundColor: "#FCD9AF",
    },
    "@media screen and ( min-width: 1280px )": {},
    "@media screen and ( min-width: 1920px )": {},
  },
  Button: {
    display: "inline-block",
    minWidth: "fit-content",
    width: "20%",
    padding: "12px 10px",
    backgroundColor: "var(--primary)",
    fontSize: "10px",
    "@media screen and ( min-width: 600px )": {},
    "@media screen and ( min-width: 960px )": {
      display: "inline-block",
      minWidth: "fit-content",
      width: "20%",
      padding: "12px 10px",
      backgroundColor: "var(--primary)",
      fontSize: "20px",
    },
    "@media screen and ( min-width: 1280px )": {},
    "@media screen and ( min-width: 1920px )": {},
  },
});

const Subscribe = (props) => {
  const classes = useStyles();
  return (
    <ButtonGroup fullWidth>
      <input
        type="text"
        placeholder="Enter your email"
        className={classes.Input}
      />
      <Button className={classes.Button}>Subscribe</Button>
    </ButtonGroup>
  );
};

export default Subscribe;
