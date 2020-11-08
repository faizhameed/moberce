import React from "react";
import CustomSlider from "../Slider/Slider";
import Styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <aside className={Styles.aside}>
      <CustomSlider />
      {/* OS Memory and RAM dropdowns */}
    </aside>
  );
};

export default Sidebar;
