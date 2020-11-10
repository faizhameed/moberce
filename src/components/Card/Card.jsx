import { Button, Divider } from "@material-ui/core";
import { orange } from "@material-ui/core/colors";
import React from "react";
import Styles from "./Card.module.scss";

const Card = (props) => {
  const { item } = props;
  return (
    <div className={Styles.container}>
      <img src={item.image} alt="mobile" />
      <h2 key={item.id}>{item.name}</h2>
      <Divider
        style={{
          marginTop: "10px",
        }}
      />
      <div className={Styles.description}>
        <h4>
          <span>Brand:</span> <span>{item.brand}</span>
        </h4>
        <h4>
          <span>OS:</span> <span>{item["OS"]}</span>
        </h4>
        <h4>
          <span>RAM:</span> <span>{item.memory}</span>
        </h4>
        <h4>
          <span>Memory:</span> <span>{item.storage}</span>
        </h4>
        <h4>
          <span>Stock:</span> <span>{item.stock}</span>
        </h4>
      </div>
      <Divider
        style={{
          marginBottom: "15px",
        }}
      />
      <h3>
        Price : <strong>{item.price}</strong>
      </h3>
      <Button variant="contained" color="primary">
        Add To Cart
      </Button>
    </div>
  );
};

export default Card;
