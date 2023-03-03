const initialState = {
    likedProducts: []
}

const likedReducer = (state = initialState, action ) => {
    console.log(action);
    if(action.type === "LIKE_PRODUCT"){
        return {
            likedProducts: [ ...state.likedProducts, action.product]
        }
    }
    return state
}

export default likedReducer