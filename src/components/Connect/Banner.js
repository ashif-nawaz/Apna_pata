import React from 'react';
import { Button, Container, makeStyles } from '@material-ui/core';
import { Mail } from '@material-ui/icons';

const useStyles = makeStyles({
    Container : {
        maxWidth: "90%", margin: "auto"
    },
    Mail : {
        fontSize: "50px", marginRight: "10px" 
    },
    Button : {
        backgroundColor: "var(--primary)",
        padding: "10px 30px",
        size: "20px",
        color: "white",
        fontSize: "1.5rem",
    }
})

const Banner = (props) => {
    const classes = useStyles();
   return (
    <Container className={classes.Container}>
    <Button
      variant="text"
      startIcon={
        <Mail className={classes.Mail}/>
      }
      className={classes.Button}
      size="large"
    >
      NEWSLETTER
    </Button>
  </Container>
   )
}

export default Banner;