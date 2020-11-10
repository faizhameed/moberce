import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import ValueLabel from "./ValueLabel/ValueLable";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";

const useStyles = makeStyles({
  root: {
    width: 200,
  },
});

function valuetext(value) {
  return `₹${value}`;
}

function CustomSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState([1000, 110000]);
  const marks = [
    {
      value: 10000,
      label: "₹10k",
    },
    {
      value: 50000,
      label: "₹50k",
    },
    {
      value: 75000,
      label: "₹75k",
    },
    {
      value: 100000,
      label: "₹100k",
    },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <Typography
        id="range-slider"
        gutterBottom
        style={{
          marginBottom: 0,
        }}
      >
        <AccountBalanceIcon />
        <span
          style={{
            display: "inline-block",
            position: "relative",
            bottom: "4px",
          }}
        >
          Price Range
        </span>
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        min={1000}
        max={110000}
        marks={marks}
        ValueLabelComponent={ValueLabel}
      />
    </div>
  );
}
export default CustomSlider;
