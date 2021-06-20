import { Grid, Link, Typography, makeStyles } from "@material-ui/core";
import { Facebook, Instagram, Twitter } from "@material-ui/icons";
import React from "react";

const reachLinks = [
  {
    title: "Reach us at : 7210000350",
  },
  {
    title: "Feedback/Query",
  },
  {
    title: "feedback@apnapata.com",
  },
  {
    title: "Sales/Services Enquiries",
  },
  {
    title: "service@apnapata.com",
  },
];

const useStyles = makeStyles({
  Grid: {
    height: "300px",
  },
  Link: {
    margin: "5px",
  },

  Social: {
    width: "35px",
    height: "35px",
    color: "white",
  },

  TextLink : {
    color: "black", fontSize: "1rem" 
  }
});

const Col4 = (props) => {
  const classes = useStyles();

  return (
    <Grid item md={3} className={classes.Grid} xs={12}>
      <Typography gutterBottom align="center" variant="h6" component="p">
        Follow us on
      </Typography>
      <Typography align="center">
        <Link className={classes.Link} >
          <Instagram className={classes.Social}  />
        </Link>
        <Link className={classes.Link} >
          <Facebook className={classes.Social} />
        </Link>
        <Link className={classes.Link} >
          <Twitter className={classes.Social} />
        </Link>
      </Typography>
      {reachLinks.map((link) => {
        return (
          <Typography key={link} align="center" variant="h6" component="p">
            <Link href="#" className={classes.TextLink}>
              {link.title}
            </Link>
          </Typography>
        );
      })}
    </Grid>
  );
};

export default Col4;
