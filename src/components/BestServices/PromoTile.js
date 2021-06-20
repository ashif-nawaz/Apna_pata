import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
   CardTile : {

   },
   CardContentTile : {
    padding: "5px"
   }
})
const PromoTile = ({ item }) => {
    const classes = useStyles();

   return (
    <Grid item xs={12} md={6}>
    <Card className={classes.CardTile} variant="outlined">
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="100"
          image={item.image}
          title="Sell &amp; Rent Property"
        />
        <CardContent className={classes.CartContentTile}>
          <Typography
            variant="body2"
            color="textPrimary"
            component="p"
            align="center"
          >
            Pay your rent using Credit Card &amp; earn rewards
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
   )
}

export default PromoTile;