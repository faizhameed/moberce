import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Button, InputBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
const useStyles = makeStyles({
  button: {
    background: "#ffffff20",
    "&:hover": {
      background: "#cecece",
    },
  },
  container: {
    alignSelf: "center",
  },
  icon: {
    color: "#7B1FA2",
  },
});
const SearchBar = () => {
  const searchInput = React.createRef();
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <InputBase
        type="text"
        name="search"
        placeholder="Search Mobiles..."
        ref={searchInput}
      />
      <Button className={classes.button}>
        <SearchIcon className={classes.icon} />
      </Button>
    </div>
  );
};

export default SearchBar;
