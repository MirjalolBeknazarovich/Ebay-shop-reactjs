import { createStore } from "redux";
import mainReducers from "../reducers/mainReducers";

const store = createStore(mainReducers)

export {store}