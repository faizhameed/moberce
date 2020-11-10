import mobileList from "./items/reducer";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
  mobileList,
});

export default rootReducer;
