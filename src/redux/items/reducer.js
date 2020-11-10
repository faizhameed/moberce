import { mobile_list_types } from "./types";

const INITIAL_STATE = {
  data: null,
  pending: false,
  error: null,
};

function mobileList(state = INITIAL_STATE, action) {
  switch (action.type) {
    case mobile_list_types.MOBILE_LIST_PENDING:
      return { ...state, pending: true };
    case mobile_list_types.MOBILE_LIST_SUCCESS:
      return { ...state, data: action.payload, pending: false, error: null };
    case mobile_list_types.MOBILE_LIST_FAILED:
      return { ...state, data: null, pending: false, error: action.payload };
    default:
      return state;
  }
}

export default mobileList;
