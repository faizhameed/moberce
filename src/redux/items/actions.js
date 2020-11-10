import { mobile_list_types } from "./types";
import Axios from "axios";

export const fetch_mobile = () => {
  const url = "http://localhost:3004/posts";
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
