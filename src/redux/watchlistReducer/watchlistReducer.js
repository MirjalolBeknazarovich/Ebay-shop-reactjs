const initialState = {
    watchlistProducts: []
}

const watchlistReducer = (state = initialState, action ) => {
    console.log(action);
    if (action.type === "ADD_WATCHLIST" ){
        return {
            watchlistProducts: [...state.watchlistProducts, action.product]
        }
    } 
    if( action.type === "REMOVE_FROM_WATCHLIST_PRODUCT"){
        let removeProductIndex = state.watchlistProducts.findIndex( p => p?.id === action?.id)
        state.watchlistProducts.splice( removeProductIndex, 1)
        return {
            watchlistProducts: [ ...state.watchlistProducts]
        }
    }
    return state
}

export default watchlistReducer