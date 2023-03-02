// const initialState = {
//     email: '',
// }

const mainReducers = ( state, action) => {
    if (action.type === "salom"){
        return action.name
    }
   
    return state
}

export default mainReducers