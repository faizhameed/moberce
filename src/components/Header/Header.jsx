import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={Styles.header}>
      <SearchBar />
    </div>
  );
};

export default Header;
