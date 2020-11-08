import React from "react";
import Header from "../Header/Header";
import ItemList from "../ItemList/ItemList";
import Sidebar from "../Sidebar/Sidebar";
import Styles from "./Layout.module.scss";

const Layout = () => {
  return (
    <div className={Styles.layout}>
      <div className={Styles.header}>
        <Header />
      </div>
      <div className={Styles.main}>
        <ItemList />
      </div>
      <div className={Styles.sidebar}>
        <Sidebar />
      </div>
    </div>
  );
};

export default Layout;
