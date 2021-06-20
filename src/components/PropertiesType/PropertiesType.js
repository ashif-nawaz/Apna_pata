import {
  Box,
  Grid,
  makeStyles
} from "@material-ui/core";
import React from "react";
import Section from "../Section/Section";
import PropertiesItem from "./PropertiesItem";
import tile1 from '../../assets/tile1.png';
import tile2 from '../../assets/tile2.png';
import tile3 from '../../assets/tile3.png';
import tile4 from '../../assets/tile4.png';

const types = [
   {
     image : tile1
   }, 
   {
     image : tile2
   }, 
   {
     image : tile3
   }, 
   {
     image : tile4
   }, 
];

const useStyles = makeStyles({
   Box : {
     marginLeft : 'unset',
    "@media screen and ( min-width: 600px )": {},
    "@media screen and ( min-width: 960px )": {
      marginLeft : "24px"
    },
    "@media screen and ( min-width: 1280px )": {},
    "@media screen and ( min-width: 1920px )": {},
   }
})


const PropertiesType = (props) => {
   const classes = useStyles();

  return (
    <Section title="We've all types of properties" borderHeading={false}>
      <Box marginTop={9} className={classes.Box}>
        <Grid container spacing={6} justify="space-between">
          {types.map((item) => {
            return <PropertiesItem item={item}  />;
          })}
        </Grid>
      </Box>
    </Section>
  );
};

export default PropertiesType;
