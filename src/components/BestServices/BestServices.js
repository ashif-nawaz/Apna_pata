import React from "react";
import {
  Box,
  Grid,
  IconButton,
  makeStyles,
} from "@material-ui/core";

import Section from "../Section/Section";
import image from "../../assets/payrent.png";
import sell from "../../assets/Sell & Rent (2) 1.png";
import service from "../../assets/Services (1) 1.png";
import { ArrowRightAlt } from "@material-ui/icons";
import ServicesItem from "./ServicesItem";
import PromoTile from "./PromoTile";

const services = [1, 2, 3, 4, 5, 6, 7];
const servicesTiles = [
  {
    image: sell,
  },
  {
    image: service,
  },
];

const useStyles = makeStyles({
   Box : {
    minHeight : '5rem',
    "@media screen and ( min-width: 600px )": {},
    "@media screen and ( min-width: 960px )": {
      marginLeft : "24px"
    },
    "@media screen and ( min-width: 1280px )": {},
    "@media screen and ( min-width: 1920px )": {},
   },
   Container : {
    position: "relative",
    whiteSpace: "nowrap",
    overflowX: "auto",
    '&::-webkit-scrollbar' : {
       display : 'none'
    }
   },
   GridContainer : {
    marginTop: "2rem"
   },
   Wrapper : {
     position : 'relative'
   },

   IconButton : {
     display : "none",
    position: "absolute",
    top: "50%",
    right: "0",
    transform: "translate(50%, -50%)",
    background: "var(--primary)",
    "@media screen and ( min-width: 600px )": {},
    "@media screen and ( min-width: 960px )": {
      display : 'block',
      position: "absolute",
      top: "50%",
      right: "0",
      transform: "translate(50%, -50%)",
      background: "var(--primary)",
    },
    "@media screen and ( min-width: 1280px )": {},
    "@media screen and ( min-width: 1920px )": {},
   }
})

const BestServices = (props) => {
  const classes = useStyles();
  return (
    <Section title="Best Services" borderHeading={false}>
      <Box marginTop={9} className={classes.Box}>
        <div className={classes.Wrapper}>
          <div className={classes.Container}>
            {services.map((item) => {
              return (
                <ServicesItem key={item} item={item} image={image} />
              );
            })}
          </div>
          <IconButton
            className={classes.IconButton}
          >
            <ArrowRightAlt style={{fontSize : '2rem'}}/>
          </IconButton>
        </div>

        <Grid className={classes.GridContainer} container spacing={3}>
          {servicesTiles.map((item) => {
            return (
             <PromoTile key={item} item={item} />
            );
          })}
        </Grid>
      </Box>
    </Section>
  );
};

export default BestServices;
