import { Card, CardActionArea, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    Card : {

    },
    CardContent : {
        paddingTop: "3px"
    },
    GridItem : {
        minWidth : "200px"
    },
    OwnerName : {
        color: "var(--primary)", padding : '0'
    }

})


const PartnerItem = ( { item , image }) => {
    const classes = useStyles();
   return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.GridItem}>
    <Card
      variant="outlined"
      key={item}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="300"
          image={image}
          title="A House"
        />
        <CardContent className={classes.CardContent}>
          <Typography
            variant="h6"
            component="h6"
            className={classes.OwnerName}
            gutterBottom
          >
            Owner Property
          </Typography>
          <Typography
            variant="body1"
            component="p"
          >
            Pay your rent using Credit Card &amp; earn rewards
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
   )
}

export default PartnerItem;