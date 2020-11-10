import { mobile_list_types } from "./types";
import Axios from "axios";

const url = "http://localhost:3004/posts";
export const fetch_mobile = () => {
  return function (dispatch) {
    dispatch({
      type: mobile_list_types.MOBILE_LIST_PENDING,
    });
    Axios.get(url)
      .then((response) =>
        dispatch({
          type: mobile_list_types.MOBILE_LIST_SUCCESS,
          payload: response.data,
        })
      )
      .catch((response) =>
        dispatch({
          type: mobile_list_types.MOBILE_LIST_FAILED,
          payload: response.error,
        })
      );
  };
};

export const search_mobile = (query = "") => {
  return function (dispatch) {
    dispatch({
      type: mobile_list_types.MOBILE_LIST_PENDING,
    });
    Axios.get(`${url}?q=${query}`)
      .then((response) =>
        dispatch({
          type: mobile_list_types.MOBILE_LIST_SUCCESS,
          payload: response.data,
        })
      )
      .catch((response) =>
        dispatch({
          type: mobile_list_types.MOBILE_LIST_FAILED,
          payload: response.error,
        })
      );
  };
};
