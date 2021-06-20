import { Grid, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import PropertyCard from "./PropertyCard";

const useStyles = makeStyles({
  CityName: {
    backgroundColor: "var(--primary)",
    width: "fit-content",
    color: "white",
    padding: "3px 2rem",
    borderRadius: "6px",
    marginBottom: "1.5rem",
  },
});


const CityItem = ({ city }) => {
  const classes = useStyles();

  return (
    <Grid item md={6} lg={4} xs={12}>
      <Typography
        variant="h6"
        component="h6"
        gutterBottom
        className={classes.CityName}
      >
        {city.name}
      </Typography>
      <PropertyCard />
      <PropertyCard />
      <PropertyCard />
      <PropertyCard />
      <PropertyCard />
    </Grid>
  );
};

export default CityItem;
