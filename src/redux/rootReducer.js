import { combineReducers } from "redux";
import createReducer from "./reducers/createReducers";
import likedReducer from "./likeReduser/likeReducer";
import watchlistReducer from "./watchlistReducer/watchlistReducer";
import addBasketReducer from "./addBasketReducer/addBasketReducer";

const rootReducer = combineReducers({
    createReducer,
    likedReducer,
    watchlistReducer,
    addBasketReducer
})

export default rootReducer;