import { Button, ButtonGroup, Grid, makeStyles } from "@material-ui/core";
import { ArrowDropDown } from "@material-ui/icons";

const useStyles = makeStyles({
  Grid : {
    display :"flex",
    justifyContent : "flex-end",
    alignItems : "center"
  },

  Container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  ButtonGroup: {
     display : 'none',
    "@media screen and ( min-width: 600px )": {},
    "@media screen and ( min-width: 960px )": {
      display : "block",
      backgroundColor: "white",
      borderRadius: "30px",
      padding: "5px 10px",
    },
    "@media screen and ( min-width: 1280px )": {},
    "@media screen and ( min-width: 1920px )": {},
  },
  ButtonText: {
    marginRight: "20px",
    fontSize: "1.2rem",
    padding: "px 30px",
    textTransform: "capitalize",
  },

  ButtonFree: {
    color: "black",
    border: "none",
    backgroundColor: "yellow",
    borderRadius: "30px !important",
    fontSize: "1.1rem",
    padding: "5px 30px",
  },
  ButtonLogin: {
    color: "white",
    border: "none",
    fontSize: "1.2rem",
    textTransform: "capitalize",

  },

  ArrowDropDown: {
    fontSize: "2rem !important",
  },
});

const ColRight = (props) => {
  const classes = useStyles();

  return (
    <Grid item xs={6} md={4} className={classes.Grid}>
      <div className={classes.Container}>
        <ButtonGroup
          variant="outlined"
          color="white"
          className={classes.ButtonGroup}
        >
          <Button variant="text" className={classes.ButtonText}>
            Post Property
          </Button>
          <Button
            className={classes.ButtonFree}
            size="large"
            aria-label="select merge strategy"
            aria-haspopup="menu"
            variant="text"
          >
            Free
          </Button>
        </ButtonGroup>

        <Button
          variant="outlined"
          className={classes.ButtonLogin}
          endIcon={<ArrowDropDown className={classes.ArrowDropDown} />}
        >
          Login
        </Button>
      </div>
    </Grid>
  );
};

export default ColRight;
