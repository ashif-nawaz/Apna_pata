import { Button, Grid, makeStyles } from "@material-ui/core";
import { ArrowDropDown } from "@material-ui/icons";

const navItems = [
  {
    title: "Buy",
  },
  {
    title: "PG",
  },
  {
    title: "Rent",
  },
  {
    title: "New Booking",
    content: true,
    active: true,
  },
  {
    title: "Loan",
  },
  {
    title: "Architect",
  },
  {
    title: "Vastu",
  },
  {
    title: "Interior Design",
  },
  {
    title: "Construction",
    content: true,
  },
];

const useStyles = makeStyles({
  Container: {
    display : 'none',
    maxWidth: "90%",
    width: "85%",
    margin: "auto",
    padding: "0.8rem",
    borderBottom: "1px solid lightgray",
    "@media screen and ( min-width: 600px )": {},
    "@media screen and ( min-width: 960px )": {
      display : 'flex',
      maxWidth: "90%",
    
    },
    "@media screen and ( min-width: 1280px )": {},
    "@media screen and ( min-width: 1920px )": {},
  },

  Button: {
    fontSize: "1.2rem",
    fontWeight: "600",
    textTransform: "capitalize",
  },
  Active: {
    color: "var(--primary) !important",
  },
});

const NavList = (props) => {
  const classes = useStyles();

  return (
    <Grid container justify="space-between" className={classes.Container}>
      {navItems.map((item) => {
        return (
          <Button
            key={item}
            variant="text"
            className={`${classes.Button} ${item.active ? classes.Active : ""}`}
            endIcon={
              item.content ? (
                <ArrowDropDown style={{ fontSize: "2rem" }} />
              ) : null
            }
          >
            {item.title}
          </Button>
        );
      })}
    </Grid>
  );
};

export default NavList;
