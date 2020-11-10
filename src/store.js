import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./redux/root-reducer";

const middlewares = [thunkMiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
