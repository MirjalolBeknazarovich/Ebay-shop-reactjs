const initialState = {
    addBasketProducts: []
}

const addBasketReducer = (state = initialState, action ) => {
    console.log(action)
    if(action.type ==="ADD_BASKET"){
        return {
            addBasketProducts: [...state.addBasketProducts, action.product]
        }
    }
    return state
}

export default addBasketReducer