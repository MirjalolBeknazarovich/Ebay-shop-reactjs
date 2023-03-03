const initialState = {
    watchlistProducts: []
}

const watchlistReducer = (state = initialState, action ) => {
    console.log(action);
    if ( action.tyupe === "ADD_WATCHLIST" ){
        return {
            watchlistProducts: [ ...state.watchlistProducts, action.product]
        }
    }
    return state
}

export default watchlistReducer