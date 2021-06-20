import {
  Box,
  Grid,
  makeStyles
} from "@material-ui/core";
import React from "react";
import Section from "../Section/Section";
import image from '../../assets/client_man.png';
import PartnerItem from "./PartnerItem";

const partners = [1,2,3,4,5,6];

const useStyles = makeStyles({
   Box : {
    "@media screen and ( min-width: 600px )": {},
    "@media screen and ( min-width: 960px )": {
      marginLeft : "24px"
    },
    "@media screen and ( min-width: 1280px )": {},
    "@media screen and ( min-width: 1920px )": {},
   }
})


const OurPartners = (props) => {

  const classes = useStyles();
  return (
    <Section title="Our Partners" borderHeading={true}>
      <Box marginTop={10} className={classes.Box}>
        <Grid container spacing={8}>
          {partners.map((item) => {
            return (
             <PartnerItem key={item} item={item} image={image} />
            );
          })}
        </Grid>
      </Box>
    </Section>
  );
};

export default OurPartners;
