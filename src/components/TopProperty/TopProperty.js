import React from "react";
import { Typography, Grid, makeStyles } from "@material-ui/core";
import CityItem from "./CityItem";


const cities = [
    {
        name : 'Shimla'
    },
    {
        name : 'Pune'
    },
    {
        name : 'Delhi'
    },
    {
        name : 'Mumbai'
    },
    {
        name : 'Gurgaon'
    },
    {
        name : 'Indore'
    },
];


const useStyles = makeStyles({
   Container : {
    width: "100%", 
    padding: "1.5rem",

    "@media screen and ( min-width: 600px )": {},
    "@media screen and ( min-width: 960px )": {
      width: "80%", 
    padding: "1.5rem",
    },
    "@media screen and ( min-width: 1280px )": {},
    "@media screen and ( min-width: 1920px )": {},
   },

   Heading : {
    padding: "1rem",
    borderBottom: "1px solid lightgray",
    marginBottom: "2rem",
   }
})

const TopProperty = (props) => {

  const classes = useStyles();

  return (
    <div className={classes.Container}>
      <Typography
        variant="h5"
        component="h6"
        gutterBottom
        className={classes.Heading}
      >
        Top Property
      </Typography>
      <Grid container justify="space-between" spacing={9}>
        {cities.map((city) => {
          return (
           <CityItem key={city} city={city} />
          );
        })}
      </Grid>
    </div>
  );
};

export default TopProperty;
