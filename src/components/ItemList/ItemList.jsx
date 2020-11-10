import Card from "../Card/Card";
import React, { useEffect, useState } from "react";
import Styles from "./ItemList.module.scss";
import { connect } from "react-redux";
import { fetch_mobile } from "../../redux/items/actions";
const ItemList = ({ data, error, pending, fetch_mobile }) => {
  useEffect(() => {
    fetch_mobile();
  }, []);
  return (
    <div className={Styles.container}>
      {data ? (
        data.map((item) => {
          return <Card item={item} key={item.id} />;
        })
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};
const mapStateToProps = ({ mobileList: { data, error, pending } }) => ({
  data,
  error,
  pending,
});

const mapDispatchToProps = (dispatch) => ({
  fetch_mobile: () => dispatch(fetch_mobile()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
