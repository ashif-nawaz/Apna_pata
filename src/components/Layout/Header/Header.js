import { Grid, makeStyles } from "@material-ui/core";
import ColLeft from "./ColLeft";
import ColRight from "./ColRight";
import NavList from "./NavList";

const useStyles = makeStyles({
    Header : {
      backgroundColor: "var(--primary)"
    },
    GridContainer : {
      padding: "1rem",
      width : '90%',
      margin : 'auto',
      "@media screen and ( min-width: 600px )": {},
    "@media screen and ( min-width: 960px )": {
      padding: "1rem 3rem",

    },
    "@media screen and ( min-width: 1280px )": {},
    "@media screen and ( min-width: 1920px )": {},
    }
})

const Header = (props) => {

  const classes = useStyles();

  return (
    <>
      <header className={classes.Header}>
        <Grid
          container
          justify="space-between"
          className={classes.GridContainer}
        >
         <ColLeft />
         <ColRight />
        </Grid>
      </header>
       <NavList />
    </>
  );
};

export default Header;
