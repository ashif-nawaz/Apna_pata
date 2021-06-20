import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import { ArrowDropDown } from "@material-ui/icons";

const useStyles = makeStyles({
  Grid : {
     display: 'flex',
     justifyContent : "center",
     alignItems : "center",
     "@media screen and ( min-width: 600px )": {},
     "@media screen and ( min-width: 960px )": {
       justifyContent : 'space-between'
     },
     "@media screen and ( min-width: 1280px )": {},
     "@media screen and ( min-width: 1920px )": {},
    
  },

  Container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "@media screen and ( min-width: 600px )": {},
    "@media screen and ( min-width: 960px )": {
      width : '100%'
    },
    "@media screen and ( min-width: 1280px )": {},
    "@media screen and ( min-width: 1920px )": {},
    
  },

  Logo: {
    color: "white",
    fontSize : '1rem',
    "@media screen and ( min-width: 600px )": {},
    "@media screen and ( min-width: 960px )": {
      color: "white",
      borderRightColor: "white",
      fontSize: "3rem",
      textTransform: "capitalize",
    },
    "@media screen and ( min-width: 1280px )": {},
    "@media screen and ( min-width: 1920px )": {},
  },
  Button: {
    display : 'none',
    "@media screen and ( min-width: 600px )": {},
    "@media screen and ( min-width: 960px )": {
      display : "flex",
      color: "white",
      border: "2px solid white",
      borderRightColor: "white",
      fontSize: "1.1rem",
      width : '30%',
      textTransform: "capitalize",
    },
    "@media screen and ( min-width: 1280px )": {},
    "@media screen and ( min-width: 1920px )": {},
  },

  ArrowDropDown: {
    fontSize: "2rem !important",
  },
});

const ColLeft = (props) => {
  const classes = useStyles();

  return (
    <Grid item md={4} className={classes.Grid}>
      <div className={classes.Container}>
        <Typography variant="h4" component="h3" className={classes.Logo}>
          Apna Pata.com
        </Typography>
        <Button
          variant="outlined"
          className={classes.Button}
          endIcon={<ArrowDropDown className={classes.ArrowDropDown} />}
        >
          All India
        </Button>
      </div>
    </Grid>
  );
};

export default ColLeft;
