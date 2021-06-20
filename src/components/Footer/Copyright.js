import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  Typo : {
    borderTop: "2px solid white", padding: "10px"
  }
})


const Copyright = (props) => {
    const classes = useStyles();

  return (
    <Typography
      variant="h6"
      component="p"
      align="center"
      className={classes.Typo}
    >
      Apnapata.com Powered by PIJN International 2019
    </Typography>
  );
};

export default Copyright;
