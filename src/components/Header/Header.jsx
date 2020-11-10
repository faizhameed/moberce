import { createMuiTheme, makeStyles, Typography } from "@material-ui/core";
import { MobileOffOutlined } from "@material-ui/icons";
import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Styles from "./Header.module.scss";

const useStyles = makeStyles({
  title: {
    fontSize: "2rem",
    padding: "10px",
    textAlign: "center",
    fontWeight: "400",
    margin: 0,
  },
  icon: {
    color: "#7B1FA2",
  },
  span: {
    color: "#7B1FA2",
  },
});
const Header = () => {
  const classes = useStyles();
  return (
    <div className={Styles.header}>
      <h1 className={classes.title} variant="h1">
        Mob
        <MobileOffOutlined className={classes.icon} />
        <span className={classes.span}>erce</span>
      </h1>
      <SearchBar />
    </div>
  );
};

export default Header;
