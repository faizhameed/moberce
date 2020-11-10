import { mobile_list_types } from "./types";

const INITIAL_STATE = {
  data: null,
  pending: false,
  error: null,
};

const {
  MOBILE_LIST_PENDING,
  MOBILE_LIST_SUCCESS,
  MOBILE_LIST_FAILED,
} = mobile_list_types;
function mobileList(state = INITIAL_STATE, action) {
  console.log(action);
  switch (action.type) {
    case MOBILE_LIST_PENDING:
      return { ...state, pending: true };
    case MOBILE_LIST_SUCCESS:
      return { ...state, data: action.payload, pending: false, error: null };
    case MOBILE_LIST_FAILED:
      return { ...state, data: null, pending: false, error: action.payload };
    default:
      console.log("data is changer");
      return state;
  }
}

export default mobileList;
