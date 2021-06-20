import { Button, ButtonGroup, TextField, makeStyles } from "@material-ui/core";
import { ArrowDropDownOutlined, Search as Lens } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles({
  Container: {
    position: "absolute",
    top: "105%",
    width: "100%",
    display: "none",
    justifyContent: "center",
    alignItems: "center",
    "@media screen and ( min-width: 600px )": {},
    "@media screen and ( min-width: 960px )": {
      position: "absolute",
      top: "55%",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    "@media screen and ( min-width: 1280px )": {},
    "@media screen and ( min-width: 1920px )": {},
  },

  BtnGroup: {
    background: "#FCD9AF",
    borderRadius: "30px",
    outline: "none",
  },

  BtnStandard: {
    paddingLeft: "3rem",
    paddingRight: "3rem",
    textTransform: "capitalize",
    outline: "none",
    border: "none",
    fontSize: "1.1rem",
  },
  BtnSearch: {
    background: "var(--primary)",
    borderRadius: "30px !important",
    fontSize: "1.1rem",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    outline: "none",
    border: "none",
  },
  TextField: {
    width: "440px",
    color: "black",
  },
});

const Search = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.Container}>
      <ButtonGroup className={classes.BtnGroup}>
        <Button
          variant="outlined"
          endIcon={<ArrowDropDownOutlined />}
          className={classes.BtnStandard}
        >
          City
        </Button>

        <TextField
          placeholder="Location/Colony/Street"
          InputProps={{
            disableUnderline: true, // <== added this
          }}
          className={classes.TextField}
        />

        <Button
          variant="outlined"
          endIcon={<ArrowDropDownOutlined />}
          className={classes.BtnStandard}
        >
          Type
        </Button>
        <Button
          variant="outlined"
          startIcon={<Lens fontSize="large" />}
          className={classes.BtnSearch}
        >
          Search
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Search;
