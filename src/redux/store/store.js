import { createStore } from "redux";
import rootReducer from "../rootReducer";
// import likedReducer from "../likeReduser/likeReducer";


const store = createStore(rootReducer)

export {store}