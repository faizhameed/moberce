import React from "react";
import Header from "../Header/Header";
import ItemList from "../ItemList/ItemList";
import Sidebar from "../Sidebar/Sidebar";
import Styles from "./Layout.module.scss";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className={Styles.main}>
        <ItemList />
      </div>
      <Sidebar />
    </div>
  );
};

export default Layout;
