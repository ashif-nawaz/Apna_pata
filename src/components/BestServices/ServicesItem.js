import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  Card: {
    display: "inline-block",
    width: "270px",
    marginRight: "48px",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  },
});

const ServicesItem = ({ item, image }) => {
  const classes = useStyles();

  return (
    <Card className={classes.Card} variant="outlined" key={item}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="120"
          image={image}
          title="A House"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h6">
            Pay Rent
          </Typography>
          <Typography variant="body1" color="textPrimary" component="p">
            Pay your rent using Credit Card &amp; earn rewards
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ServicesItem;
