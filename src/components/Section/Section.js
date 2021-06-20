import { Container, Typography, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  Container: {
    marginTop: "10rem",
    marginBottom: "6rem",
    height: "fit-content",
    padding: "1rem",
    "@media screen and ( min-width: 600px )": {},
    "@media screen and ( min-width: 960px )": {
      marginTop: "6rem",
      marginBottom: "6rem",
      height: "fit-content",
      padding: "3rem",
    },
    "@media screen and ( min-width: 1280px )": {},
    "@media screen and ( min-width: 1920px )": {},
  },

  Heading1: {
    position: "relative",
    "&::after" : {
      content: '""',
      height: "4px !important",
      width: "90px",
      backgroundColor: "var(--primary)",
      position: "absolute",
      top: "110%",
      left: "0",
      borderRadius: "20px",
    }
   
  },

  Heading2: {
    borderBottom: "1px solid lightgray",
    paddingBottom: "5px",
  },
});

const Section = ({ title, children, borderHeading = true }) => {
  const classes = useStyles();

  return (
    <Container className={classes.Container} maxWidth="xl">
      {!borderHeading ? (
        <Typography variant="h5" component="h6" className={classes.Heading1}>
          {title}
        </Typography>
      ) : (
        <Typography variant="h5" component="h6" className={classes.Heading2}>
          {title}
        </Typography>
      )}

      {children}
    </Container>
  );
};

export default Section;
