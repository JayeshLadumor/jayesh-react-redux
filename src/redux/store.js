import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import product from "./reducers/product";

const store = createStore(product, applyMiddleware(thunk));
export default store;
