import { GET_ALLDISHES, GET_CATEGORYS } from '../actions/actions'

const initialState = {
    aLLDishes: [],
    fltedDishes: [],
    pagedDishes:[],
    categorys:[]
}


const reducer = (state = initialState, { type, payload }) => {
switch (type) {
    case GET_ALLDISHES:
        return {
           ...state,
           allDishes: payload 
        }    
    case GET_CATEGORYS:
        return {
           ...state,
           categorys: payload 
        }    
    default:
        return state
}
}

export default reducer