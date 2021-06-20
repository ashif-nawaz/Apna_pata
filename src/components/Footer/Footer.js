import { Grid, makeStyles } from "@material-ui/core";
import Col1 from "./Col1";
import Col2 from "./Col2";
import Col3 from "./Col3";
import Col4 from "./Col4";
import Copyright from "./Copyright";






const useStyles = makeStyles({
     Footer : {
      background: "var(--primary)",
      padding: "3rem 2rem 0rem 2rem",
     }
})

const Footer = (props) => {
  const classes = useStyles();

  return (
    <footer
      className={classes.Footer}
    >
      <Grid container justify="space-between" style={{ width: "100%" }}>
        <Col1 />
        <Col2 />
        <Col3 />
        <Col4 />
      </Grid>
      <Copyright />
    </footer>
  );
};

export default Footer;
