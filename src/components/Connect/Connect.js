import {
  Box,
  Grid,
  makeStyles
} from "@material-ui/core";

import React from "react";
import Section from "../Section/Section";
import Banner from "./Banner";
import Subscribe from "./Subscribe";
import Tagline from "./Tagline";

const useStyles = makeStyles({
   Box : {
    "@media screen and ( min-width: 600px )": {},
    "@media screen and ( min-width: 960px )": {
      marginLeft : "24px"
    },
    "@media screen and ( min-width: 1280px )": {},
    "@media screen and ( min-width: 1920px )": {},
   },
   GridContainer : {
    margin: "50px auto", 
    maxWidth: "90%",
   },
   GridItem1 : {
 
    "@media screen and ( min-width: 600px )": {},
    "@media screen and ( min-width: 960px )": {
       maxWidth : "30%"
    },
    "@media screen and ( min-width: 1280px )": {},
    "@media screen and ( min-width: 1920px )": {},
   },
   GridItem2 : {
   
    "@media screen and ( min-width: 600px )": {},
    "@media screen and ( min-width: 960px )": {
       maxWidth : "40%"
    },
    "@media screen and ( min-width: 1280px )": {},
    "@media screen and ( min-width: 1920px )": {},
   }
})

const Connect = (props) => {
  const classes = useStyles();

  return (
    <Section title="Connect with Us" borderHeading={true}>
      <Box marginTop={10}>
        <Banner />
        <Grid
          container
          justify="space-between"
          className={classes.GridContainer}
          spacing={9}
        >
          <Grid item xs={12} sm={12} md={6} className={classes.GridItem1}>
           <Tagline />
          </Grid>
          <Grid item xs={12} sm={12} md={6} className={classes.GridItem2}>
            <Subscribe />
          </Grid>
        </Grid>
      </Box>
    </Section>
  );
};

export default Connect;
