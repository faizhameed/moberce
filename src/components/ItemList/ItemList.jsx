import Card from "../Card/Card";
import React, { useEffect } from "react";
import Styles from "./ItemList.module.scss";
import { connect } from "react-redux";
import { fetch_mobile } from "../../redux/items/actions";
const ItemList = ({ data, pending, fetch_mobile }) => {
  useEffect(() => {
    fetch_mobile();
    console.log("only run once");
  }, []);
  return (
    <div className={Styles.container}>
      {data && !pending ? (
        data.map((item) => {
          return <Card item={item} key={item.id} />;
        })
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};
const mapStateToProps = ({ mobileList: { data, pending } }) => ({
  data,
  pending,
});

const mapDispatchToProps = (dispatch) => ({
  fetch_mobile: () => dispatch(fetch_mobile()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
