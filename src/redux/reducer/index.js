import {GET_DISHES} from '../actions/actions'

const initialState = {
    dishes: []
}


const reducer = (state = initialState, { type, payload }) => {
switch (type) {
    case GET_DISHES:
        return {
           ...state,
           dishes: payload 
        }    
    default:
        return state
}
}

export default reducer