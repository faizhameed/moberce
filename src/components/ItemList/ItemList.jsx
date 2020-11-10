import Card from "../Card/Card";
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
          return <Card item={item} key={item.id} />;
        })
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default ItemList;
