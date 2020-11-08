import { StylesProvider } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Styles from "./ItemList.module.scss";

const ItemList = () => {
  const [state, setState] = useState({
    data: null,
  });
  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:3004/posts");
      const data = await response.json();
      setState((state) => ({ ...state, data: data }));
      console.log(data);
    })();
  }, []);
  return (
    <div className={Styles.container}>
      {state.data ? (
        state.data.map((item) => {
          return (
            <div className={Styles.itemContainer}>
              <img src={item.image} alt="mobile" />
              <h3 key={item.id}>{item.name}</h3>
            </div>
          );
        })
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default ItemList;
