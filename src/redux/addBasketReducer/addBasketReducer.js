const initialState = {
    addBasketProducts: []
}

const addBasketReducer = (state = initialState, action ) => {
    // console.log(action)
    if(action.type ==="ADD_BASKET"){
        return {
            addBasketProducts: [...state.addBasketProducts, action.product]
        }
    }
    if(action.type === "REMOVE_FROM_BASKET_PRODUCT" ){
        let removeProductIndex = state.addBasketProducts.findIndex( p => p?.id === action?.id)
        state.addBasketProducts.splice( removeProductIndex, 1)
        return {
            addBasketProducts: [ ...state.addBasketProducts ]
        }
    }
    return state
}

export default addBasketReducer