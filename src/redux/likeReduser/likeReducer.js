const initialState = {
    likedProducts: []
}

const likedReducer = (state = initialState, action ) => {
    // console.log(action);
    switch (action.type){
        case "LIKE_PRODUCT":
            return {
                likedProducts: [ ...state.likedProducts, action.product]
            }
        case "REMOVE_FROM_LIKED_PRODUCT" :
            let removeProductIndex = state.likedProducts.findIndex( p => p?.id === action?.id)
            state.likedProducts.splice( removeProductIndex, 1)
            return {
                likedProducts: [ ...state.likedProducts]
            }
        default :
        return state
    }
}

export default likedReducer