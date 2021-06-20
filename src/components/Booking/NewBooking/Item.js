import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  Grid: {
    "@media screen and ( min-width: 600px )": {},
    "@media screen and ( min-width: 960px )": {
        minWidth: "350px",
    },
    "@media screen and ( min-width: 1280px )": {},
    "@media screen and ( min-width: 1920px )": {},
  },
  Card: {
    borderRadius: "20px",
    width :'90%',
    margin : "auto",
    "@media screen and ( min-width: 600px )": {},
    "@media screen and ( min-width: 960px )": {
     
    },
    "@media screen and ( min-width: 1280px )": {},
    "@media screen and ( min-width: 1920px )": {},
  },
  CardContent: {
    padding: "10px 1rem",
    display: "flex",
    justifyContent: "space-between",
  },
  Price: {
    color: "var(--primary)",
  },
});

const Item = ({ item }) => {
  const classes = useStyles();
  return (
    <Grid item className={classes.Grid} xs={12}>
      <Card variant="outlined" className={classes.Card}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="230"
          image={item.image}
          title="Sell &amp; Rent Property"
        />
        <CardContent className={classes.CardContent}>
          <Typography variant="h6" component="h6">
            Delhi-NCR
          </Typography>
          <Typography variant="h6" component="p" className={classes.Price}>
            Rs. 55,555,55
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Item;
