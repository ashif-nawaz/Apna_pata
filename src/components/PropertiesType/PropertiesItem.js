import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  Card: {
    borderRadius: "30px",
  },
  CardContent: {
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "100%",
    background:
      "linear-gradient(to top, rgba(0, 0, 0, 0.685), rgba(255, 255, 255, 0.054))",
  },
  Typo: {
    color: "white",
  },
  Typo1: {
    fontFamily : 'Montserrat',
    fontWeight: 800,
  },
  Typo2: {
    fontWeight: 400,
  },
  GridItem: {
    minWidth: "350px",
    maxWidth: "380px",
  },
});

const PropertiesItem = ({ item }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={6} lg={3} xl={2} className={classes.GridItem}>
      <Card variant="outlined" className={classes.Card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="200"
            image={item.image}
            title="A House"
          />
          <CardContent className={classes.CardContent}>
            <Typography
              variant="h5"
              component="h4"
              className={`${classes.Typo} ${classes.Typo1}`}
            >
              7737
            </Typography>
            <Typography
              variant="h5"
              component="h4"
              className={`${classes.Typo} ${classes.Typo2}`}
            >
              Owner Property
            </Typography>
            <Typography variant="body1" className={classes.Typo} component="p">
              Explore
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default PropertiesItem;
