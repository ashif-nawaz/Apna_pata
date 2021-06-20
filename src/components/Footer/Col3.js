import { Grid, Link, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const infoLinks = [
    {
      title: "Grievances",
    },
    {
      title: "Help Center",
    },
    {
      title: "Privacy Policy",
    },
    {
      title: "Terms & Conditions",
    },
    {
      title: "FAQs",
    },
  ];

  const useStyles = makeStyles({
    Grid: {
      height: "300px",
    },
    Link: {
      color: "black",
      fontSize: "1rem",
    },
  });

const Col3 = (props) => {
    const classes = useStyles();

   return (
    <Grid item md={2} className={classes.Grid} xs={12}>
    {infoLinks.map((link) => {
      return (
        <Typography key={link} align="center" variant="h6" component="p">
          <Link href="#" className={classes.Link}>
            {link.title}
          </Link>
        </Typography>
      );
    })}
  </Grid>
   )
}

export default Col3;