const initialState = {
    user: [],
}

const createReducer = ( state = initialState, action) => {
    // console.log(action);
    if (action.type === "CREATE_USER"){
        return {user: action.user} 
    }
   
    return state
}

export default createReducer