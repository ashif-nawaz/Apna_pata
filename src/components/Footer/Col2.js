import { Grid, Link, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const actionLinks = [
  {
    title: "About us",
  },
  {
    title: "Career",
  },
  {
    title: "Contact us",
  },
  {
    title: "Feedback",
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

const Col2 = (props) => {
  const classes = useStyles();
  return (
    <Grid item md={2} className={classes.Grid} xs={12}>
      {actionLinks.map((link) => {
        return (
          <Typography key={link} align="center" variant="h6" component="p">
            <Link href="#" className={classes.Link}>
              {link.title}
            </Link>
          </Typography>
        );
      })}
    </Grid>
  );
};

export default Col2;
