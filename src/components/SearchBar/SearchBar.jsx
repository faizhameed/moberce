import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Button, InputBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { search_mobile } from "../../redux/items/actions";
import { connect } from "react-redux";
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
  input: {
    width: "75%",
    maxWidth: "300px",
  },
});
const SearchBar = ({ search_mobile }) => {
  const searchInput = React.createRef();
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <InputBase
        type="text"
        name="search"
        placeholder="Search Mobiles..."
        inputRef={searchInput}
        className={classes.input}
        onKeyDown={(e) => {
          if ((e.key = "Enter")) {
            search_mobile(searchInput.current.value);
          }
        }}
      />
      <Button
        className={classes.button}
        onClick={() => search_mobile(searchInput.current.value)}
      >
        <SearchIcon className={classes.icon} />
      </Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  search_mobile: (query) => dispatch(search_mobile(query)),
});

export default connect(null, mapDispatchToProps)(SearchBar);
