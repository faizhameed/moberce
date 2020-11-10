import React from "react";
import { Tooltip } from "@material-ui/core";

const ValueLabel = ({ children, open, value }) => {
  return (
    <Tooltip
      open={open}
      enterTouchDelay={0}
      placement="top"
      title={value}
      prefix="₹"
      arrow
    >
      {children}
    </Tooltip>
  );
};

export default ValueLabel;
