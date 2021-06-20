import {
  Card,
  CardActions,
  CardContent,
  Typography,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import { ArrowRightAlt } from "@material-ui/icons";

const useStyles = makeStyles({
    Card : {
      borderRadius : '10px',
      marginBottom : '1.5rem',
      minWidth : '250px',
      maxWidth : '320px'
    },
    CardActions : {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderTop : '1px solid lightgray',
      padding : '1px 10px'
    },
    Price : {
      display : 'block', color : 'var(--primary)'
    },
    IconButton : {
      display : 'block', padding: '1px'
    }
})



const PropertyCard = (props) => {

  const classes = useStyles();

  return (
    <Card variant="outlined" className={classes.Card}>
      <CardContent>
        <Typography variant="body1" component="p" color="textSecondary">
          Plot in Shimla
        </Typography>
        <Typography variant="subtitle1" component="p" color="textSecondary">
          65 E Sector, xyzskdf
        </Typography>
      </CardContent>
      <CardActions
        className={classes.CardActions}
      >
        <Typography className={classes.Price}>Rs 55,555, 55</Typography>
        <IconButton className={classes.IconButton}>
          <ArrowRightAlt fontSize="large"/>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default PropertyCard;
